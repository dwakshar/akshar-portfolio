import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and selected projects — web design, ecommerce, landing pages, and full-stack SaaS development.",
  alternates: { canonical: "https://aksharsharma.com/work" },
  openGraph: {
    title: "Work — Akshar Sharma",
    description:
      "Case studies and selected projects — web design, ecommerce, landing pages, and full-stack SaaS development.",
    url: "https://aksharsharma.com/work",
    type: "website",
  },
  twitter: {
    title: "Work — Akshar Sharma",
    description:
      "Case studies and selected projects — web design, ecommerce, landing pages, and SaaS development.",
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
              A collection of client projects spanning web design, ecommerce,
              landing pages, and full-stack development — each built to move
              the needle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────────────────────────── */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
