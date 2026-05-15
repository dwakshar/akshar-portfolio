import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const description = project.intro.split(".")[0] + ".";
  const url = `https://aksharsharma.com/work/${slug}`; // P11: confirm domain
  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Akshar Sharma`,
      description,
      url,
      type: "article",
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} — Akshar Sharma`,
      description,
      images: [project.thumbnail],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(idx - 1 + projects.length) % projects.length];
  const nextProject = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-[100dvh] bg-ink">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── BACK LINK ──────────────────────────────────────────────────── */}
        <div className="pt-12 pb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-sans text-sm text-bone-dim hover:text-bone transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" />
            All work
          </Link>
        </div>

        {/* ── HEADER BLOCK ───────────────────────────────────────────────── */}
        <Reveal variant="reveal">
          <div className="flex flex-col gap-4 pb-10 border-b border-hairline">
            <Pill className="self-start">{project.category}</Pill>
            <h1
              className="font-display font-black text-bone leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                fontVariationSettings: '"wdth" 65',
              }}>
              {project.title}
            </h1>
            <div className="flex items-center gap-4 font-sans text-sm text-bone-dim">
              <span>{project.client}</span>
              <span
                className="w-1 h-1 rounded-full bg-bone-dim/40"
                aria-hidden
              />
              <span>{project.year}</span>
            </div>
          </div>
        </Reveal>

        {/* ── HERO IMAGE ─────────────────────────────────────────────────── */}
        <Reveal variant="reveal" delay={0.1}>
          <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-hairline bg-ink-soft">
            <Image
              src={project.gallery[0] ?? project.thumbnail}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>
        </Reveal>

        {/* ── INTRO ──────────────────────────────────────────────────────── */}
        <Reveal variant="fade" delay={0.08}>
          <p className="mt-12 font-sans text-base md:text-lg text-bone-dim leading-relaxed">
            {project.intro}
          </p>
        </Reveal>

        {/* ── META STRIP: SERVICES + DELIVERABLES ────────────────────────── */}
        <Reveal delay={0.06}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-0 border border-hairline rounded-2xl overflow-hidden">
            <div className="p-8 border-b border-hairline md:border-b-0 md:border-r">
              <p className="font-sans text-xs uppercase tracking-widest text-flush mb-5">
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.services.map((s) => (
                  <li
                    key={s}
                    className="font-sans text-sm text-bone-dim flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-flush shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <p className="font-sans text-xs uppercase tracking-widest text-flush mb-5">
                Deliverables
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="font-sans text-sm text-bone-dim flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-flush shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── CHALLENGE / APPROACH / OUTCOME ─────────────────────────────── */}
        <div className="mt-16 flex flex-col gap-14">
          {(
            [
              { label: "The Challenge", body: project.challenge },
              { label: "The Approach", body: project.approach },
              { label: "The Outcome", body: project.outcome },
            ] as const
          ).map(({ label, body }, i) => (
            <Reveal key={label} variant="fade" delay={i * 0.06}>
              <p className="font-sans text-xs uppercase tracking-widest text-flush mb-3">
                {label}
              </p>
              <p className="font-sans text-base md:text-lg text-bone-dim leading-relaxed">
                {body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* ── RESULTS ────────────────────────────────────────────────────── */}
        <Reveal delay={0.06}>
          <div className="mt-20 p-8 md:p-12 rounded-2xl border border-hairline bg-ink-soft">
            <p className="font-sans text-xs uppercase tracking-widest text-flush mb-10">
              Results
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.results.map((r) => (
                <div key={r.label} className="flex flex-col gap-2">
                  <span
                    className="font-display font-black text-flush leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 3rem)",
                      fontVariationSettings: '"wdth" 65',
                    }}>
                    {r.value}
                  </span>
                  <span className="font-sans text-xs text-bone-dim uppercase tracking-wide">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── GALLERY ────────────────────────────────────────────────────── */}
        {project.gallery.length > 1 && (
          <>
            {/* Mobile: horizontal swipe strip */}
            <div className="mt-16 md:hidden">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pl-6 scroll-pl-6">
                {project.gallery.slice(1).map((src, i) => (
                  <div
                    key={src}
                    className="snap-start shrink-0 w-[82vw] relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-ink-soft">
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="82vw"
                    />
                  </div>
                ))}
                <div className="shrink-0 w-6" aria-hidden />
              </div>
            </div>

            {/* Desktop: grid */}
            <Reveal delay={0.06}>
              <div className="mt-16 hidden md:grid grid-cols-2 gap-4">
                {project.gallery.slice(1).map((src, i) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-2xl border border-hairline bg-ink-soft ${
                      i === 0 && project.gallery.length === 2
                        ? "col-span-2 aspect-[16/9]"
                        : "aspect-[4/3]"
                    }`}>
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="480px"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </>
        )}

        {/* ── LIVE URL ───────────────────────────────────────────────────── */}
        {project.liveUrl && (
          <Reveal delay={0.06}>
            <div className="mt-14 flex justify-start">
              <Button
                href={project.liveUrl}
                variant="primary"
                size="lg"
                icon={<ExternalLink className="w-4 h-4" />}>
                Visit live site
              </Button>
            </div>
          </Reveal>
        )}

        {/* ── PREV / NEXT NAVIGATION ─────────────────────────────────────── */}
        <Reveal delay={0.04}>
          <div className="mt-24 mb-20 pt-10 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex flex-col gap-2 p-6 rounded-2xl border border-hairline bg-ink-soft hover:border-bone/20 transition-colors duration-200">
              <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-bone-dim group-hover:text-flush transition-colors duration-200">
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous
              </span>
              <span
                className="font-display font-black text-bone leading-none text-[clamp(1.2rem,2.5vw,1.6rem)]"
                style={{ fontVariationSettings: '"wdth" 65' }}>
                {prevProject.title}
              </span>
              <Pill className="self-start mt-1">{prevProject.category}</Pill>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col gap-2 p-6 rounded-2xl border border-hairline bg-ink-soft hover:border-bone/20 transition-colors duration-200 sm:items-end sm:text-right">
              <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-bone-dim group-hover:text-flush transition-colors duration-200">
                Next
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span
                className="font-display font-black text-bone leading-none text-[clamp(1.2rem,2.5vw,1.6rem)]"
                style={{ fontVariationSettings: '"wdth" 65' }}>
                {nextProject.title}
              </span>
              <Pill className="self-start sm:self-end mt-1">
                {nextProject.category}
              </Pill>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
