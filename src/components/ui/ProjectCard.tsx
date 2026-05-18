"use client";

import Pill from "@/components/ui/Pill";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  project: Project;
}

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
};

const watermarkVariants = {
  rest: { x: 0 },
  hover: { x: 8 },
};

const SPRING = { type: "spring" as const, stiffness: 180, damping: 28 };

export default function ProjectCard({ project }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      transition={SPRING}
      className="h-full flex flex-col">
      <Link href={`/work/${project.slug}`} className="flex flex-col h-full">
        {/* ── IMAGE ZONE ───────────────────────────────────────────────── */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-soft">
          {/* Layer 1 — watermark */}
          <div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden>
            <motion.span
              variants={watermarkVariants}
              transition={SPRING}
              className="font-display font-black uppercase leading-none whitespace-nowrap text-bone"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 9rem)",
                fontVariationSettings: '"wdth" 65',
                opacity: 0.13,
              }}>
              {project.title}
            </motion.span>
          </div>

          {/* Layer 2 — cover image or gradient fallback */}
          {imgError ? (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ff1f8f 0%, #a1116a 100%)",
              }}>
              <span
                className="font-display font-black text-bone text-center px-6 leading-tight"
                style={{
                  fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                  fontVariationSettings: '"wdth" 65',
                }}>
                {project.title}
              </span>
            </div>
          ) : (
            <div className="absolute inset-0 z-10">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgError(true)}
              />
            </div>
          )}

          {/* Layer 3 — bottom gradient wash */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,12,0.8) 0%, transparent 100%)",
            }}
          />

          {/* Layer 4 — client work badge */}
          {project.clientType && (
            <div className="absolute top-3 left-3 z-30">
              <Pill className="bg-flush/10 border-flush/30 text-flush">
                Client Work
              </Pill>
            </div>
          )}
        </div>

        {/* ── INFO ZONE ────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 pt-4 px-3">
          <h3
            className="font-display font-black leading-none text-bone text-[clamp(1.35rem,2.4vw,1.85rem)]"
            style={{ fontVariationSettings: '"wdth" 65' }}>
            {project.title}
          </h3>
          <p className="font-sans text-sm text-bone-dim line-clamp-2">
            {project.tagline}
          </p>
          <div className="mt-2">
            <Pill>{project.category}</Pill>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
