"use client";

import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/home";
import { cn } from "@/lib/cn";
import Image from "next/image";

const GRAIN_STYLE: React.CSSProperties = {
  background: `
    radial-gradient(ellipse 60% 50% at 15% 10%, rgba(255,31,143,0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 85% 90%, rgba(255,111,181,0.05) 0%, transparent 70%)
  `,
};

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5 pb-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-sm leading-none",
            i < filled ? "text-flush" : "text-bone-dim/25"
          )}>
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ src, name }: { src: string; name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full border border-hairline overflow-hidden shrink-0 bg-flush/15 flex items-center justify-center">
      <span className="text-xs font-semibold text-flush select-none">
        {initials}
      </span>
      <Image src={src} alt={name} fill sizes="44px" className="object-cover" />
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={cn(
        "relative w-[278px] md:w-[360px] h-[365px] md:h-[400px] shrink-0",
        "rounded-2xl border border-hairline bg-ink-soft",
        "overflow-hidden flex flex-col p-5 md:p-7"
      )}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={GRAIN_STYLE}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <p className="font-sans text-sm font-medium text-bone leading-tight pt-0.5">
            {t.name}
          </p>
          <Avatar src={t.avatar} name={t.name} />
        </div>

        <div className="flex items-end gap-2.5 mb-4 md:mb-5">
          <span
            className="font-display text-4xl md:text-5xl leading-none text-bone"
            style={{ fontVariationSettings: '"wdth" 65' }}>
            {t.rating.toFixed(1)}
          </span>
          <Stars rating={t.rating} />
        </div>

        <blockquote className="text-bone-dim text-sm md:text-base leading-relaxed line-clamp-4 flex-1">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <p className="mt-4 text-xs text-bone-dim/50 truncate">
          {t.role} &middot; {t.company}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 border-t border-hairline">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="✦ Testimonials"
            title="Clients I've Helped Win"
          />
        </Reveal>
      </div>

      <Reveal className="mt-10 md:mt-14">
        <Marquee speed={52} itemClassName="gap-5 pr-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
