import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function SelectedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="✦ Some Recent Projects"
            title="Selected Work That Delivers"
            action={
              <Button href="/work" variant="ghost">
                See All Work
              </Button>
            }
          />
        </Reveal>
      </div>

      {/* Mobile: horizontal swipe strip */}
      <div className="mt-12 md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pl-6 scroll-pl-6">
          {featured.map((project) => (
            <div key={project.slug} className="snap-start shrink-0 w-[82vw]">
              <ProjectCard project={project} />
            </div>
          ))}
          <div className="shrink-0 w-6" aria-hidden />
        </div>
      </div>

      {/* Desktop: featured card + coming soon panel */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="hidden md:grid mt-12 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}

          {/* Right panel — only shown when there's exactly one featured project */}
          {featured.length === 1 && (
            <Reveal delay={0.12}>
              <div className="h-full flex flex-col justify-center gap-5 px-10 rounded-2xl border border-hairline bg-ink-soft">
                <Pill>More on the way</Pill>
                <p
                  className="font-display font-black text-bone leading-tight"
                  style={{
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    fontVariationSettings: '"wdth" 65',
                  }}>
                  More projects coming soon.
                </p>
                <p className="font-sans text-sm text-bone-dim leading-relaxed">
                  One real project beats a portfolio padded with fakes. Next
                  case studies will be added as they ship.
                </p>
              </div>
            </Reveal>
          )}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button href="/work" variant="ghost">
            See All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
