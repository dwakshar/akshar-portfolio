"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  addOns,
  anchorPricing,
  customQuoteCategories,
  paymentModel,
  retainers,
} from "@/data/pricing";
import { CURRENCY_META } from "@/lib/currency-map";
import type { FxRates } from "@/lib/fx";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

type Props = {
  detectedCurrency: string;
  fxRates: FxRates;
};

function AnimatedPrice({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="inline-block">
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

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

export default function PricingContent({ detectedCurrency, fxRates }: Props) {
  const [currency, setCurrency] = useState(detectedCurrency);

  const meta = CURRENCY_META[currency] ?? CURRENCY_META['USD'];
  const rate = fxRates.rates[currency as keyof typeof fxRates.rates] ?? 1;

  function formatPrice(usdPrice: number): string {
    const converted = usdPrice * rate;
    const rounded =
      currency === 'INR' || currency === 'AED'
        ? Math.round(converted / 100) * 100
        : Math.round(converted / 10) * 10;
    return new Intl.NumberFormat(meta.locale, {
      style: 'currency',
      currency: meta.code,
      maximumFractionDigits: 0,
    }).format(rounded);
  }

  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── PAGE HERO ──────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
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
                  right fit — the starting prices below are a genuine baseline,
                  not a bait-and-switch. Pick a plan, add what you need, and
                  let&rsquo;s get moving.
                </p>
              </Reveal>
              {/* Dropdown: below text on mobile only */}
              <Reveal delay={0.15} className="mt-5 md:hidden">
                <CurrencyDropdown current={currency} onChange={setCurrency} />
              </Reveal>
            </div>

            {/* Dropdown: right-aligned on desktop */}
            <Reveal delay={0.15} className="hidden md:flex items-start pt-10">
              <CurrencyDropdown current={currency} onChange={setCurrency} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ANCHOR PRICING ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Project work"
              title="Starting Prices"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              Fixed-scope deliverables priced from a solid baseline. Final quote
              confirmed after our discovery call.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            {anchorPricing.map((service, i) => {
              const isFeatured = service.id === "business";
              return (
                <Reveal key={service.id} delay={i * 0.1} className="h-full">
                  <motion.div
                    whileHover={
                      isFeatured
                        ? { y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }
                        : undefined
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={
                      isFeatured
                        ? "h-full rounded-2xl ring-1 ring-flush/40 shadow-[0_0_40px_rgba(255,31,143,0.12)]"
                        : "h-full"
                    }>
                    <Card noHover={isFeatured} className="h-full">
                      <div className="p-6 flex flex-col gap-5 h-full">
                        {/* Featured badge */}
                        {isFeatured && (
                          <Pill className="self-start bg-flush/10 border-flush/30 text-flush">
                            Most popular
                          </Pill>
                        )}

                        {/* Price block */}
                        <div>
                          <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
                            Starting at
                          </span>
                          <p
                            className="font-display font-black text-flush leading-none mt-1"
                            style={{
                              fontSize: "clamp(2rem, 5vw, 2.8rem)",
                              fontVariationSettings: '"wdth" 65',
                            }}>
                            <AnimatedPrice id={`${service.id}-${currency}`}>
                              {formatPrice(service.startingAt)}
                            </AnimatedPrice>
                          </p>
                        </div>

                        {/* Title + blurb */}
                        <div>
                          <h3
                            className="font-display text-bone text-2xl leading-tight mb-2"
                            style={{ fontVariationSettings: '"wdth" 65' }}>
                            {service.title}
                          </h3>
                          <p className="font-sans text-sm text-bone-dim leading-relaxed">
                            {service.blurb}
                          </p>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2.5 flex-1">
                          {service.highlights.map((h) => (
                            <CheckItem key={h} text={h} />
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="pt-2">
                          <Button
                            variant="primary"
                            size="md"
                            href={`/contact?service=${service.id}`}>
                            Get a quote
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RETAINERS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Ongoing support"
              title="Monthly Retainers"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              Lock in a predictable monthly engagement — no ad-hoc hourly
              surprises, just consistent progress.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            {retainers.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={
                    plan.featured
                      ? { y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }
                      : undefined
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={
                    plan.featured
                      ? "h-full rounded-2xl ring-1 ring-flush/40 shadow-[0_0_40px_rgba(255,31,143,0.12)]"
                      : "h-full"
                  }>
                  <Card noHover={plan.featured} className="h-full">
                    <div className="p-6 flex flex-col gap-5 h-full">
                      {/* Featured badge */}
                      {plan.featured && (
                        <Pill className="self-start bg-flush/10 border-flush/30 text-flush">
                          Most popular
                        </Pill>
                      )}

                      {/* Title + tagline */}
                      <div>
                        <h3
                          className="font-display text-bone text-2xl leading-tight"
                          style={{ fontVariationSettings: '"wdth" 65' }}>
                          {plan.title}
                        </h3>
                        <p className="mt-1.5 font-sans text-sm text-bone-dim leading-relaxed">
                          {plan.tagline}
                        </p>
                      </div>

                      {/* Price */}
                      <p
                        className="font-display font-black text-flush leading-none"
                        style={{
                          fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                          fontVariationSettings: '"wdth" 65',
                        }}>
                        <AnimatedPrice id={`${plan.id}-${currency}`}>
                          {formatPrice(plan.priceUsd) + '/mo'}
                        </AnimatedPrice>
                      </p>

                      {/* Includes */}
                      <ul className="space-y-2.5 flex-1">
                        {plan.includes.map((item) => (
                          <CheckItem key={item} text={item} />
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-2">
                        <Button
                          variant={plan.featured ? "primary" : "glass"}
                          size="md"
                          href={`/contact?retainer=${plan.id}`}>
                          Get started
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
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
              Need something extra? Layer these onto any project or retainer.
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
      <section className="py-20 md:py-28 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Payment"
              title="How Payment Works"
              align="center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-px border border-hairline rounded-2xl overflow-hidden md:grid-cols-3">
              {paymentModel.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center px-6 py-8 bg-ink-soft">
                  <span
                    className="font-display font-black text-flush"
                    style={{
                      fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                      fontVariationSettings: '"wdth" 65',
                    }}>
                    {step.label}
                  </span>
                  <p className="mt-2 font-sans text-sm text-bone-dim leading-relaxed max-w-[22ch]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CUSTOM QUOTE ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Bigger projects"
              title="Custom Quote"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              For mobile apps, full-stack platforms, and bespoke brand systems —
              every engagement is scoped from scratch. Let&rsquo;s talk.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {customQuoteCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.08}>
                <div className="group flex flex-col gap-3 p-6 rounded-2xl border border-hairline bg-ink-soft hover:border-bone/10 transition-colors duration-200">
                  <h3
                    className="font-display text-xl text-bone"
                    style={{ fontVariationSettings: '"wdth" 65' }}>
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm text-bone-dim leading-relaxed flex-1">
                    {cat.blurb}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    href="/contact?type=custom"
                    className="self-start">
                    Get a custom quote
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-hairline">
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

      {/* FX disclaimer */}
      <div className="pb-8">
        <p className="text-xs text-bone-dim/50 text-center px-6">
          Prices auto-converted from USD at today&rsquo;s rate
          {fxRates.fetchedAt !== 'fallback' && ` (${fxRates.fetchedAt})`}.
          Final invoice issued in your selected currency.
        </p>
      </div>

      <ContactCTA />
    </div>
  );
}
