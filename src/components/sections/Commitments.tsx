"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const commitments = [
  {
    icon: "◎",
    title: "Full attention, every project",
    body: "I keep my client list intentionally small. When you're working with me, you're not competing with ten other projects for my focus — your work gets all of it.",
  },
  {
    icon: "⚡",
    title: "Response within 24 hours",
    body: "No radio silence, no chasing me down. Every message gets a reply within a business day — often much faster. You'll always know where things stand.",
  },
  {
    icon: "◈",
    title: "No surprise costs",
    body: "What's quoted is what's invoiced. If scope needs to change, we talk about it first. You'll never open an invoice and wonder where a charge came from.",
  },
  {
    icon: "◇",
    title: "Honest progress updates",
    body: "If something's running behind, you'll know before it becomes a problem — not after. I'd rather have an uncomfortable early conversation than a missed deadline.",
  },
  {
    icon: "◑",
    title: "Clean handoff, every time",
    body: "At the end of every project you get full documentation, all credentials, and a walkthrough so you're never dependent on me to manage your own product.",
  },
  {
    icon: "◉",
    title: "Built right the first time",
    body: "I don't ship work I'm not proud of. If something isn't right, I fix it — not because I have to, but because putting my name on sloppy work isn't something I'm willing to do.",
  },
];

export default function Commitments() {
  return (
    <section className="py-14 md:py-20 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="✦ What to expect"
            title="What Every Client Gets"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 mb-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
            No inflated reviews, no fake logos. Just a clear picture of how I
            work and what you can hold me to.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-hairline bg-ink-soft hover:border-bone/10 transition-colors duration-200 h-full">
                <span className="text-flush text-xl leading-none">{c.icon}</span>
                <h3 className="font-sans font-semibold text-sm text-bone">
                  {c.title}
                </h3>
                <p className="font-sans text-sm text-bone-dim leading-relaxed flex-1">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
