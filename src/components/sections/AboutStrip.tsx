import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export default function AboutStrip() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Label row */}
        <Reveal variant="fade">
          <div className="flex items-center justify-center mb-8 md:mb-11">
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-flush">
              ✦ About Me
            </p>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal variant="fade" delay={0.1}>
          <p className="font-sans text-base leading-relaxed text-bone-dim md:text-lg md:leading-relaxed mx-auto text-center">
            {profile.bio}
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-px mt-14 border border-hairline rounded-2xl overflow-hidden md:grid-cols-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 px-6 py-6 bg-ink-soft">
                <span className="font-display text-3xl font-bold text-flush md:text-4xl">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-bone-dim uppercase tracking-widest text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-row flex-wrap gap-3 mt-10 justify-center">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/work" variant="ghost">
              View My Work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
