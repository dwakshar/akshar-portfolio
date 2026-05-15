import { Metadata } from "next";
import { services } from "@/data/home";
import { processSteps } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, development, SEO, branding, and ongoing support — everything you need to build a website that grows your business.",
  alternates: { canonical: "https://aksharsharma.com/services" },
  openGraph: {
    title: "Services — Akshar Sharma",
    description:
      "Web design, development, SEO, branding, and ongoing support — everything you need to build a website that grows your business.",
    url: "https://aksharsharma.com/services",
    type: "website",
  },
  twitter: {
    title: "Services — Akshar Sharma",
    description:
      "Web design, development, SEO, branding, and ongoing support — built to grow your business.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Services"
              title="Built to Move the Needle"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 font-sans text-base md:text-lg text-bone-dim leading-relaxed">
              Whether you need a brand-new site, a performance overhaul, or a
              dedicated technical partner — I offer a focused set of services
              designed to grow your business online.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES DETAIL ────────────────────────────────────────── */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          {services.map((service, i) => {
            const isFlipped = i % 2 === 1;
            return (
              <Reveal key={service.id}>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 py-16 md:py-20 lg:py-24 border-b border-hairline">
                  {/* Text column */}
                  <div className={isFlipped ? "md:order-last" : ""}>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-display text-flush text-sm tabular-nums">
                        {service.number}
                      </span>
                      {service.tagline && (
                        <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
                          {service.tagline}
                        </span>
                      )}
                    </div>
                    <h2
                      className="font-display text-4xl md:text-5xl text-bone leading-tight mb-5"
                      style={{ fontVariationSettings: '"wdth" 65' }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-sans text-bone-dim leading-relaxed text-base md:text-lg">
                      {service.longDescription ?? service.description}
                    </p>
                  </div>

                  {/* Lists column */}
                  <div
                    className={`flex flex-col gap-8${isFlipped ? " md:order-first" : ""}`}
                  >
                    <div>
                      <h3
                        className="font-display text-xs text-bone-dim uppercase tracking-widest mb-4"
                        style={{ fontVariationSettings: '"wdth" 65' }}
                      >
                        Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-bone-dim"
                          >
                            <span className="text-flush text-[10px] shrink-0">
                              ✦
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.outcomes && service.outcomes.length > 0 && (
                      <div>
                        <h3
                          className="font-display text-xs text-bone-dim uppercase tracking-widest mb-4"
                          style={{ fontVariationSettings: '"wdth" 65' }}
                        >
                          What You Get
                        </h3>
                        <ul className="space-y-2.5">
                          {service.outcomes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-bone"
                            >
                              <span className="text-flush text-xs shrink-0 mt-0.5">
                                →
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Process"
              title="How We'll Work Together"
              align="left"
            />
          </Reveal>

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:flex mt-14 items-start">
            {processSteps.map((step, i) => (
              <div key={step.number} className="flex-1">
                <Reveal delay={i * 0.1}>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full border border-hairline bg-ink-soft flex items-center justify-center shrink-0">
                      <span
                        className="font-display text-flush text-xs tabular-nums"
                        style={{ fontVariationSettings: '"wdth" 65' }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="flex-1 h-px bg-hairline mx-4" />
                    )}
                  </div>
                  <div className="pr-8">
                    <h3
                      className="font-display text-xl text-bone mb-2"
                      style={{ fontVariationSettings: '"wdth" 65' }}
                    >
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
          <div className="md:hidden mt-10 flex flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex gap-5 pb-10 relative">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-0 w-px bg-hairline" />
                  )}
                  <div className="w-9 h-9 rounded-full border border-hairline bg-ink-soft flex items-center justify-center shrink-0 relative z-10">
                    <span
                      className="font-display text-flush text-xs tabular-nums"
                      style={{ fontVariationSettings: '"wdth" 65' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display text-xl text-bone mb-2"
                      style={{ fontVariationSettings: '"wdth" 65' }}
                    >
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

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
