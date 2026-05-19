import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  credentials,
  funFacts,
  intro,
  principles,
  processSteps,
  story,
  toolkit,
} from "@/data/about";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "6+ years building high-performance websites for global clients. Based in India. One point of contact, fast turnaround, and code that holds up long after launch.",
  alternates: { canonical: "https://aksharsharma.com/about" },
  openGraph: {
    title: "About — Akshar Sharma",
    description:
      "6+ years building high-performance websites for global clients. Based in India. One point of contact, fast turnaround, and code that holds up long after launch.",
    url: "https://aksharsharma.com/about",
    type: "website",
  },
  twitter: {
    title: "About — Akshar Sharma",
    description:
      "6+ years building high-performance websites for global clients. Based in India.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-6 order-last md:order-first">
              <Reveal>
                <span className="font-sans text-xs text-flush uppercase tracking-[0.2em]">
                  <span aria-hidden className="mr-1.5">
                    ✦
                  </span>
                  {intro.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1
                  className="font-display text-bone leading-[0.92] tracking-tight"
                  style={{
                    fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
                    fontVariationSettings: '"wdth" 65',
                  }}>
                  {intro.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="font-sans text-bone-dim text-base md:text-lg leading-relaxed">
                  {intro.lead}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex gap-3 flex-wrap mt-2">
                  <Button variant="primary" size="md" href="/contact">
                    Start a project
                  </Button>
                  <Button variant="ghost" size="md" href="/work">
                    See my work
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: photo — drop your photo at public/about-photo.webp */}
            <Reveal delay={0.1} className="order-first md:order-last">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-hairline bg-ink-soft">
                <Image
                  src="/about-photo.webp"
                  alt="Akshar Sharma"
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ─────────────────────────────────────────────── */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-hairline">
              {credentials.map((item, i) => (
                <div
                  key={item.label}
                  className={`py-6 md:py-8 px-6 md:px-10 flex flex-col gap-1.5 first:pl-0 last:pr-0 ${
                    i === 0 ? "pl-0" : i === 2 ? "pl-0 md:pl-10" : ""
                  } ${i === credentials.length - 1 ? "pr-0" : ""} ${
                    i < 2 ? "border-b md:border-b-0 border-hairline" : ""
                  }`}>
                  <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span
                    className="font-display text-bone leading-none"
                    style={{
                      fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                      fontVariationSettings: '"wdth" 65',
                    }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="✦ Background"
                title="How I got here"
                align="left"
              />
            </Reveal>
            <div className="mt-10 flex flex-col gap-7">
              {story.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="font-sans leading-[1.8] text-bone-dim text-base md:text-[1.0625rem]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ What I believe"
              title="Principles"
              align="left"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.id} delay={i * 0.07}>
                <div
                  className={`py-10 flex flex-col gap-4 ${
                    i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  } ${i % 2 === 0 ? "md:border-r border-hairline" : ""} ${
                    i < 2 ? "border-b border-hairline" : ""
                  } ${i >= 2 && i % 2 === 0 ? "md:border-b-0" : ""}`}>
                  <span
                    className="font-display text-flush"
                    style={{
                      fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                      fontVariationSettings: '"wdth" 65',
                      lineHeight: 1,
                    }}>
                    {principle.id}
                  </span>
                  <h3
                    className="font-display text-bone text-xl md:text-2xl"
                    style={{ fontVariationSettings: '"wdth" 65' }}>
                    {principle.title}
                  </h3>
                  <p className="font-sans text-bone-dim text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <SectionHeading
                eyebrow="✦ How we work"
                title="From first call to launch"
                align="left"
              />
              <Button variant="ghost" size="sm" href="/services">
                Full process details →
              </Button>
            </div>
          </Reveal>

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:flex items-start">
            {processSteps.map((step, i) => (
              <div key={step.number} className="flex-1">
                <Reveal delay={i * 0.09}>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full border border-hairline bg-ink-soft flex items-center justify-center shrink-0">
                      <span
                        className="font-display text-flush text-xs tabular-nums"
                        style={{ fontVariationSettings: '"wdth" 65' }}>
                        {step.number}
                      </span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="flex-1 h-px bg-hairline mx-4" />
                    )}
                  </div>
                  <div className="pr-8">
                    <h3
                      className="font-display text-lg text-bone mb-1.5"
                      style={{ fontVariationSettings: '"wdth" 65' }}>
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-bone-dim leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="flex gap-5 pb-10 relative">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[17px] top-9 bottom-0 w-px bg-hairline" />
                  )}
                  <div className="w-9 h-9 rounded-full border border-hairline bg-ink-soft flex items-center justify-center shrink-0 relative z-10">
                    <span
                      className="font-display text-flush text-xs tabular-nums"
                      style={{ fontVariationSettings: '"wdth" 65' }}>
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg text-bone mb-1.5"
                      style={{ fontVariationSettings: '"wdth" 65' }}>
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-bone-dim leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLKIT ───────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Toolkit"
              title="What I build with"
              align="left"
            />
          </Reveal>

          <div className="mt-12 flex flex-col">
            {toolkit.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.06}>
                <div
                  className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 ${
                    i < toolkit.length - 1 ? "border-b border-hairline" : ""
                  }`}>
                  <span
                    className="font-display text-bone-dim shrink-0 md:w-44"
                    style={{
                      fontSize: "0.6875rem",
                      fontVariationSettings: '"wdth" 65',
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      paddingTop: "4px",
                    }}>
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUN FACTS ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-sans text-xs text-bone-dim uppercase tracking-[0.2em]">
              <span aria-hidden className="mr-1.5">
                ✦
              </span>
              Off the clock
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
              {funFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1.5">
                  <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
                    {fact.label}
                  </span>
                  <span className="font-sans text-sm text-bone leading-snug">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
