import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio projects across mobile development, UX/UI design, and web development — built to demonstrate real capability, not just aesthetics.",
  alternates: { canonical: "https://aksharsharma.com/work" },
  openGraph: {
    title: "Work — Akshar Sharma",
    description:
      "Portfolio projects across mobile development, UX/UI design, and web development — built to demonstrate real capability, not just aesthetics.",
    url: "https://aksharsharma.com/work",
    type: "website",
  },
  twitter: {
    title: "Work — Akshar Sharma",
    description:
      "Portfolio projects across mobile development, UX/UI design, and web development — built to demonstrate real capability, not just aesthetics.",
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
              title="Selected Work"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 font-sans text-base md:text-lg text-bone-dim leading-relaxed max-w-full">
              A mix of client work and self-initiated builds — each one chosen
              to show a specific skill, not just fill a page. If you&rsquo;re a
              client, this is what I can build for you. If you&rsquo;re hiring,
              this is how I think and what I ship.
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
