import ContactMarquee from "@/components/contact/ContactMarquee";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactQuote from "@/components/contact/ContactQuote";
import ContactInfo from "@/components/contact/ContactInfo";
import Reveal from "@/components/ui/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got a project in mind — or just a half-formed idea? Let's talk. I read everything and reply within 24 hours.",
  alternates: { canonical: "https://aksharsharma.com/contact" },
  openGraph: {
    title: "Contact — Akshar Sharma",
    description:
      "Got a project in mind — or just a half-formed idea? Let's talk. I read everything and reply within 24 hours.",
    url: "https://aksharsharma.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Akshar Sharma",
    description:
      "Got a project in mind? Let's talk. I read everything and reply within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── ZONE 1: Marquee band ──────────────────────────────────────────── */}
      <div className="pt-16">
        <ContactMarquee />
      </div>

      {/* ── ZONE 2: 3-column layout ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(440px,560px)_1fr] gap-12 lg:gap-16 items-start">

            {/* Left: FAQ — order 2 on mobile, stays left on desktop */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.15}>
                <ContactFAQ />
              </Reveal>
            </div>

            {/* Center: Form — order 1 on mobile (first), center on desktop */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Right: Quote — order 3 on mobile, stays right on desktop */}
            <div className="order-3 lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="fade" delay={0.15}>
                <ContactQuote />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONE 3: Info strip ───────────────────────────────────────────── */}
      <section className="border-t border-hairline pb-24">
        <div className="mx-auto max-w-5xl px-6 pt-14">
          <Reveal>
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
