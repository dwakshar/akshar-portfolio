import Button from "@/components/ui/Button";
import ContactCTABg from "@/components/ui/ContactCTABg";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section
      data-cursor-dark
      className="relative w-full min-h-[92vh] text-center bg-flush overflow-hidden flex items-center justify-center">
      <ContactCTABg />
      {/* ══ DESKTOP: centered content composition ══════════════════════════ */}
      <div className="hidden md:flex relative z-10 px-6 flex-col items-center gap-8">
        <Reveal>
          <Pill className="bg-ink border-ink text-flush">
            Available for new work
          </Pill>
        </Reveal>

        <Reveal delay={0.08} margin="-20%">
          <h2
            className="font-display text-ink leading-[0.92] tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 8.5rem)",
              fontVariationSettings: '"wdth" 65',
            }}>
            Let&rsquo;s Work
            <br />
            Together
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-ink text-xl leading-relaxed max-w-lg mx-auto">
            Have a project in mind? I&rsquo;d love to hear about it —
            let&rsquo;s build something that works as good as it looks.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="bg-ink text-flush hover:bg-ink/80">
            Start a project
          </Button>
        </Reveal>
      </div>

      {/* ══ MOBILE: centered content composition ═══════════════════════════ */}
      <div className="md:hidden relative z-10 px-6 flex flex-col items-center gap-6">
        <Reveal>
          <Pill className="bg-ink border-ink text-flush">
            Available for new work
          </Pill>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="font-display text-ink leading-[0.92] tracking-tight text-5xl md:text-7xl"
            style={{
              fontSize: "clamp(2.8rem, 14vw, 4rem)",
              fontVariationSettings: '"wdth" 65',
            }}>
            Let&rsquo;s Work
            <br />
            Together
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-ink text-base leading-relaxed max-w-sm mx-auto">
            Have a project in mind? I&rsquo;d love to hear about it —
            let&rsquo;s build something that works as good as it looks.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Button
            variant="primary"
            size="md"
            href="/contact"
            className="bg-ink text-flush hover:bg-ink/80">
            Start a project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
