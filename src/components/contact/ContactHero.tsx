import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-8">
            <Pill>BOOKING Q3 2026</Pill>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-display text-bone tracking-tight"
            style={{
              fontSize: "clamp(5rem, 18vw, 22rem)",
              fontVariationSettings: '"wdth" 65',
              lineHeight: 0.88,
            }}
          >
            LET&apos;S<br />TALK
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="font-sans text-bone-dim text-base md:text-lg leading-relaxed max-w-2xl mt-8">
            Got a project, a half-formed idea, or just want to say hi? Drop a
            line — I read everything and reply within 24 hours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
