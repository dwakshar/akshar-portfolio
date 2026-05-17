import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — marketplace platforms, full-stack web development, and game mechanics built in public.",
  alternates: { canonical: "https://aksharsharma.com/work" },
  openGraph: {
    title: "Work — Akshar Sharma",
    description:
      "Selected projects — marketplace platforms, full-stack web development, and game mechanics built in public.",
    url: "https://aksharsharma.com/work",
    type: "website",
  },
  twitter: {
    title: "Work — Akshar Sharma",
    description:
      "Selected projects — marketplace platforms, full-stack web development, and game mechanics built in public.",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="✦ Work"
              title="Selected Projects"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 font-sans text-base md:text-lg text-bone-dim leading-relaxed">
              Real projects, honest scope. More will be added as they ship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────────────────────────── */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
