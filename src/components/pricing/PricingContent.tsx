"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { addOns, paymentModel } from "@/data/pricing";
import type { MarketPricing } from "@/lib/data/pricing";
import { formatPrice } from "@/lib/pricing/format-price";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  marketPricing: MarketPricing;
};

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-bone-dim">
      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-flush/15 flex items-center justify-center">
        <Check className="w-2.5 h-2.5 text-flush" strokeWidth={3} />
      </span>
      {text}
    </li>
  );
}

export default function PricingContent({ marketPricing }: Props) {
  const { currency, symbol, locale, services } = marketPricing;

  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── PAGE HERO ──────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-sans text-sm font-medium text-flush tracking-widest uppercase">
              ✦ Pricing
            </span>
            <h1
              className="font-display font-black text-bone leading-[0.92] tracking-tight mt-2"
              style={{
                fontSize: "clamp(3rem, 9vw, 6.5rem)",
                fontVariationSettings: '"wdth" 65',
              }}>
              Honest pricing.
              <br />
              No surprises.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              Every project starts with a discovery call so we can scope the
              right fit — the starting prices below are a genuine baseline, not
              a bait-and-switch. Pick a service, add what you need, and let&rsquo;s
              get moving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── NO BARGAIN NOTICE ──────────────────────────────────────────── */}
      <section className="py-6 border-t border-hairline bg-flush/5">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-flush/30 bg-flush/8">
              <span className="text-flush text-lg shrink-0 mt-0.5">⚠</span>
              <div>
                <p className="font-sans font-semibold text-sm text-bone">
                  These prices are fixed. There is no negotiation.
                </p>
                <p className="mt-1 font-sans text-sm text-bone-dim leading-relaxed">
                  Every figure here reflects the real value of the work — not a
                  starting point for back-and-forth. If the price doesn&rsquo;t
                  fit your budget, I&rsquo;m happy to scope a smaller deliverable
                  that does. But the rate itself does not move. Please factor
                  this in before reaching out.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE PRICING ────────────────────────────────────────────── */}
      {services.map((service, si) => (
        <section key={service.id} className="py-14 md:py-20 border-t border-hairline">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionHeading
                eyebrow={`✦ 0${si + 1}`}
                title={service.name}
                align="left"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
                {service.description}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
              {service.tiers.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                  <motion.div
                    whileHover={
                      tier.isPopular
                        ? { y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }
                        : undefined
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={
                      tier.isPopular
                        ? "h-full rounded-2xl ring-1 ring-flush/40 shadow-[0_0_40px_rgba(255,31,143,0.12)]"
                        : "h-full"
                    }>
                    <Card noHover={tier.isPopular} className="h-full">
                      <div className="p-6 flex flex-col gap-5 h-full">
                        {tier.isPopular && (
                          <Pill className="self-start bg-flush/10 border-flush/30 text-flush">
                            Most popular
                          </Pill>
                        )}

                        <div>
                          <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
                            {tier.priceLabel}
                          </span>
                          <p
                            className="font-display font-black text-flush leading-none mt-1"
                            style={{
                              fontSize: "clamp(2rem, 5vw, 2.8rem)",
                              fontVariationSettings: '"wdth" 65',
                            }}>
                            {formatPrice(tier.price, locale, currency, symbol)}
                          </p>
                        </div>

                        <div>
                          <h3
                            className="font-display text-bone text-2xl leading-tight mb-2"
                            style={{ fontVariationSettings: '"wdth" 65' }}>
                            {tier.name}
                          </h3>
                          <p className="font-sans text-sm text-bone-dim leading-relaxed">
                            {tier.description}
                          </p>
                        </div>

                        <ul className="space-y-2.5 flex-1">
                          {tier.features.map((f) => (
                            <CheckItem key={f} text={f} />
                          ))}
                        </ul>

                        <div className="pt-2">
                          <Button
                            variant="primary"
                            size="md"
                            href={
                              tier.cta === "Let's talk"
                                ? "/contact?type=custom"
                                : `/contact?service=${encodeURIComponent(
                                    tier.name.toLowerCase().replace(/\s+/g, "-")
                                  )}`
                            }>
                            {tier.cta}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 font-sans text-xs text-bone-dim/60 text-center">
                Prices shown in your local currency, calibrated for your market.
                Final quotes confirmed after a short discovery call.
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── ONGOING SUPPORT ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-sans font-semibold text-lg text-bone">
              Need ongoing support after launch?
            </p>
            <p className="mt-3 font-sans text-base text-bone-dim leading-relaxed max-w-full">
              Every project includes a 14-day bug-fix warranty. For longer-term
              care — updates, content changes, performance monitoring — I offer
              monthly retainers, discussed once we&rsquo;ve shipped your project
              together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ADD-ONS ────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Add-ons"
              title="Stack on Any Project"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              Need something extra? Layer these onto any project.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {addOns.map((addon, i) => (
              <Reveal key={addon.name} delay={(i % 4) * 0.07}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-hairline bg-ink-soft hover:border-bone/10 transition-colors duration-200">
                  <span className="mt-0.5 text-flush text-xs shrink-0">✦</span>
                  <div>
                    <p className="font-sans font-semibold text-sm text-bone">
                      {addon.name}
                    </p>
                    <p className="mt-1 font-sans text-sm text-bone-dim leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 font-sans text-xs text-bone-dim/60 text-center">
              Pricing for add-ons is scoped per project during the discovery
              call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PAYMENT MODEL ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Payment"
              title="How Payment Works"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 mb-12 font-sans text-base text-bone-dim leading-relaxed text-center max-w-xl mx-auto">
              Three simple payments tied to real milestones — you always know
              exactly what you&rsquo;re paying for and when.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {paymentModel.steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative flex flex-col gap-4 p-6 rounded-2xl border border-hairline bg-ink-soft h-full">
                  {/* Step number */}
                  <span className="font-sans text-xs font-semibold text-bone-dim/50 uppercase tracking-widest">
                    Step {i + 1} of 3
                  </span>

                  {/* Percentage */}
                  <span
                    className="font-display font-black text-flush leading-none"
                    style={{
                      fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
                      fontVariationSettings: '"wdth" 65',
                    }}>
                    {step.label}
                  </span>

                  {/* Title + when */}
                  <div>
                    <h3 className="font-sans font-semibold text-base text-bone">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 font-sans text-xs font-medium text-flush/80 uppercase tracking-wide">
                      {step.when}
                    </p>
                  </div>

                  {/* Detail */}
                  <p className="font-sans text-sm text-bone-dim leading-relaxed flex-1">
                    {step.detail}
                  </p>

                  {/* Non-refundable badge */}
                  {step.isNonRefundable && (
                    <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/8">
                      <span className="text-amber-400 text-xs">⚠</span>
                      <span className="font-sans text-xs font-semibold text-amber-400">
                        Non-refundable
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <p className="mt-8 font-sans text-xs text-bone-dim/50 text-center">
              Invoices are sent via email. Accepted: bank transfer, UPI, Wise,
              PayPal, or Stripe — we&rsquo;ll confirm at kickoff.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center gap-6">
          <Reveal>
            <Pill>Not sure where you fit?</Pill>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display font-black text-bone leading-[0.92] tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 5rem)",
                fontVariationSettings: '"wdth" 65',
              }}>
              Let&rsquo;s figure it out together.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-base text-bone-dim leading-relaxed max-w-md">
              Drop me a message and we&rsquo;ll scope the right engagement in a
              quick 30-minute discovery call — no commitment, no pressure.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button variant="primary" size="lg" href="/contact">
              Start the conversation
            </Button>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
