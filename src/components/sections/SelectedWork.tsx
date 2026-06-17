import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function SelectedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="✦ Work"
            title="Work I'm Proud Of"
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

      {/* Desktop: 2-col grid */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="hidden md:grid mt-12 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
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
