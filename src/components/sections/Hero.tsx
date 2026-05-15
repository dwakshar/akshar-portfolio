"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── constants ────────────────────────────────────────────────────────────────

const NOISE_SVG =
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E` +
  `%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E` +
  `%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E` +
  `%3Crect width='200' height='200' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`;

const SPRING = { stiffness: 60, damping: 35, mass: 1 };
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const NAME_GRADIENT = {
  background: "linear-gradient(90deg, #ffffff 0%, #3d3d3d 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  backgroundClip: "text" as const,
};

// ─── hooks ────────────────────────────────────────────────────────────────────

function useParallaxEligible() {
  const [eligible, setEligible] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () => setEligible(fine.matches && !reduced.matches);
    check();
    fine.addEventListener("change", check);
    reduced.addEventListener("change", check);
    return () => {
      fine.removeEventListener("change", check);
      reduced.removeEventListener("change", check);
    };
  }, []);
  return eligible;
}

// ─── sub-components ───────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  "radial-gradient(circle at 38% 32%, #ff6fb5ee, #ff1f8f55)",
  "radial-gradient(circle at 38% 32%, #ff1f8fee, #a1116a55)",
  "radial-gradient(circle at 38% 32%, #a1116aee, #640a3c55)",
  "radial-gradient(circle at 38% 32%, #c8b8ffee, #8060e055)",
  "radial-gradient(circle at 38% 32%, #d4d4d4ee, #88888855)",
] as const;

function AvatarStack() {
  return (
    <div className="flex items-center">
      {AVATAR_COLORS.map((bg, i) => (
        <span
          key={i}
          className="block w-7 h-7 rounded-full border-2 border-ink shrink-0"
          style={{
            background: bg,
            marginLeft: i > 0 ? "-8px" : "0",
            position: "relative",
            zIndex: AVATAR_COLORS.length - i,
          }}
        />
      ))}
    </div>
  );
}

function ArrowCircle() {
  return (
    <span
      className="w-7 h-7 rounded-full border border-hairline bg-white/5 flex items-center justify-center shrink-0"
      aria-hidden>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
          d="M1.5 6.5h10M8 3l3.5 3.5L8 10"
          stroke="#a1a1a1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function TrustCard({ className }: { className?: string }) {
  return (
    <Card glass className={cn("p-5", className)}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <AvatarStack />
          <ArrowCircle />
        </div>
        <p className="font-sans text-xs text-bone-dim leading-relaxed">
          99.6% of my clients are satisfied — be one of them today.
        </p>
        <div className="flex gap-1.5">
          <Pill className="whitespace-nowrap">Free Consultation</Pill>
          <Pill className="whitespace-nowrap">24h Response</Pill>
        </div>
      </div>
    </Card>
  );
}

function CTABlock() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <p className="font-sans text-xs text-flush uppercase tracking-[0.15em]">
        <span aria-hidden className="mr-1.5 inline-block">
          ✦
        </span>
        {profile.trustLine}
      </p>
      <h2
        className="font-display font-medium text-bone leading-none"
        style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.5rem)" }}>
        {profile.headline}
      </h2>
      <div className="flex items-center mt-4 gap-3 flex-wrap">
        <Button variant="primary" size="md" href="/contact">
          Start a Project
        </Button>
        <Button variant="ghost" size="md" href="/work">
          View My Work
        </Button>
      </div>
    </div>
  );
}

function Portrait({ className }: { className?: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={cn("relative", className)}>
      {!imgError && (
        <Image
          src="/portrait.png"
          alt={profile.name}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 42vw"
          priority
          className="h-full w-auto object-contain object-bottom grayscale"
          onError={() => setImgError(true)}
        />
      )}
      {imgError && (
        <div
          className="h-full flex items-end justify-center"
          style={{ minWidth: "220px" }}>
          <svg
            viewBox="0 0 160 280"
            fill="none"
            className="h-full w-auto opacity-20">
            <ellipse cx="80" cy="62" rx="44" ry="52" fill="#2a2a2a" />
            <path d="M4 280 Q4 158 80 158 Q156 158 156 280Z" fill="#2a2a2a" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Hero() {
  const eligible = useParallaxEligible();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const nameScrollY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  // Each layer shifts by a different amount — background moves least, portrait most
  const bgX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-6, 6]);
  const nameX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const nameY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const portraitX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-16, 16]);

  // Subtle 3D tilt shared by name + portrait group
  const tiltX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  // Z-axis depth for portrait: scale up slightly as mouse moves away from center
  const portraitZ = useTransform(
    [springX, springY],
    ([x, y]: number[]) => 1 + Math.sqrt(x ** 2 + y ** 2) * 0.12
  );

  const nameParts = profile.name.split(" ");
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!eligible || !containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width - 0.5);
      rawY.set((e.clientY - r.top) / r.height - 0.5);
    },
    [eligible, rawX, rawY]
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] overflow-hidden bg-ink"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}>
      {/* ── Layer 1: Background — always rendered ─────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={eligible ? { x: bgX, y: bgY } : undefined}>
        {/* Custom gradient image — replace /hero-gradient.png with your file */}
        <Image
          src="/hero-gradient.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          aria-hidden
        />
        {/* Noise / star stipple texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px 200px" }}
        />
      </motion.div>

      {/* ══ DESKTOP: absolute-layer composition ════════════════════════════ */}
      <div className="hidden md:block absolute inset-0">
        {/* ── Layer 2: Giant name — behind portrait ─────────────── z-10 ── */}
        <div
          className="absolute inset-0 z-10 flex items-start justify-center pt-[16vh]"
          style={{ perspective: "1000px" }}>
          <motion.div
            className="select-none pointer-events-none"
            style={
              eligible
                ? { x: nameX, y: nameY, rotateX: tiltX, rotateY: tiltY }
                : undefined
            }
            variants={fadeUp}
            initial="hidden"
            animate="show">
            <motion.div style={{ y: nameScrollY }}>
            <h1
              className="font-display font-black leading-none tracking-tight whitespace-nowrap"
              style={{
                fontSize: "clamp(5rem, 20vw, 500px)",
                fontVariationSettings: '"wdth" 65',
                ...NAME_GRADIENT,
              }}>
              {profile.name}
            </h1>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Layer 3: Portrait — overlaps name, below UI text ── z-20 ── */}
        <div
          className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none"
          style={{ perspective: "1000px" }}>
          <motion.div
            style={
              eligible
                ? {
                    x: portraitX,
                    y: portraitY,
                    rotateX: tiltX,
                    rotateY: tiltY,
                    scale: portraitZ,
                    translateY: "18%",
                  }
                : { translateY: "18%" }
            }
            variants={fadeUp}
            initial="hidden"
            animate="show">
            <Portrait className="h-[130vh] w-auto max-w-[56vw]" />
          </motion.div>
        </div>

        {/* ── Layer 4: Overlay UI — above portrait ──────────────── z-30 ── */}
        <motion.div
          className="absolute inset-0 z-30 flex flex-col justify-between p-10 lg:p-14 xl:p-16 pointer-events-none"
          variants={stagger}
          initial="hidden"
          animate="show">
          {/* Top-left: eyebrow */}
          <motion.div
            variants={fadeUp}
            className="self-start flex items-center gap-2">
            <span className="text-flush text-xl leading-none">✦</span>
            <span className="font-sans text-bone text-xl tracking-[0.18em] uppercase">
              Hi, I am
            </span>
          </motion.div>

          {/* Bottom row: CTA block left ↔ glass card right */}
          <div className="flex items-end justify-between gap-10">
            <motion.div variants={fadeUp} className="pointer-events-auto">
              <CTABlock />
            </motion.div>
            <motion.div variants={fadeUp} className="pointer-events-auto">
              <TrustCard className="max-w-[280px]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ══ MOBILE: layered name+portrait composition ══════════════════════ */}
      <motion.div
        className="md:hidden relative z-10 flex flex-col items-center gap-5 pt-10 pb-12"
        variants={prefersReducedMotion ? undefined : stagger}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? undefined : "show"}>
        {/* ── 1. Visual block: layered name (back) + portrait (front) ───── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ minHeight: "min(118vw, 560px)" }}>
          {/* Eyebrow — upper portion, centered */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="absolute top-2 inset-x-0 z-10 flex items-center justify-center gap-2">
            <span className="text-flush text-xs leading-none">✦</span>
            <span className="font-sans text-bone text-xs tracking-[0.18em] uppercase">
              Hi, I am
            </span>
          </motion.div>

          {/* Name — back layer; overflow-hidden prevents any horizontal bleed */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="absolute top-9 inset-x-0 z-10 overflow-hidden flex justify-center">
            <h1
              className="font-display font-black leading-[0.88] tracking-tight text-center select-none pointer-events-none"
              style={{
                fontSize: "clamp(6rem, 32vw, 11rem)",
                fontVariationSettings: '"wdth" 65',
                ...NAME_GRADIENT,
              }}>
              <span className="block">{firstName}</span>
              <span className="block">{lastName}</span>
            </h1>
          </motion.div>

          {/* Portrait — front layer; head overlaps vertical center of name */}
          {/* Replace with user's transparent PNG */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="absolute bottom-0 inset-x-0 z-20 flex justify-center pointer-events-none">
            <Portrait className="h-[105vw] max-h-[500px] w-auto" />
          </motion.div>
        </div>

        {/* ── 2. Avatar group pill ───────────────────────────────────────── */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-hairline bg-white/5">
          <AvatarStack />
          <ArrowCircle />
        </motion.div>

        {/* ── 3. Trust line ─────────────────────────────────────────────── */}
        <motion.p
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="font-sans text-xs text-bone-dim text-center">
          <span className="text-flush mr-1.5" aria-hidden>
            ✦
          </span>
          {profile.trustLine}
        </motion.p>

        {/* ── 4. Headline ───────────────────────────────────────────────── */}
        <motion.h2
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="font-display font-medium text-bone text-center px-8 leading-none text-5xl md:text-7xl">
          {profile.headline}
        </motion.h2>

        {/* ── 5. CTA ────────────────────────────────────────────────────── */}
        <motion.div variants={prefersReducedMotion ? undefined : fadeUp}>
          <Button variant="primary" size="md" href="/contact">
            Start a Project
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
