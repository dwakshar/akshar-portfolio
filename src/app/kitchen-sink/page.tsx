import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Marquee from "@/components/ui/Marquee";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <p className="font-sans text-xs uppercase tracking-widest text-bone-dim border-b border-hairline pb-2">
        {title}
      </p>
      {children}
    </section>
  );
}

export default function KitchenSink() {
  return (
    <main className="min-h-screen bg-ink text-bone px-6 py-16 md:px-16 flex flex-col gap-20">
      <div>
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-bone">
          Kitchen Sink
        </h1>
        <p className="font-sans text-bone-dim mt-2">
          Visual QA — all primitives, all variants
        </p>
      </div>

      {/* BUTTONS */}
      <Section title="Button — Variants × Sizes">
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">
            Primary SM
          </Button>
          <Button variant="primary" size="md">
            Primary MD
          </Button>
          <Button variant="primary" size="lg">
            Primary LG
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="ghost" size="sm">
            Ghost SM
          </Button>
          <Button variant="ghost" size="md">
            Ghost MD
          </Button>
          <Button variant="ghost" size="lg">
            Ghost LG
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="glass" size="sm">
            Glass SM
          </Button>
          <Button variant="glass" size="md">
            Glass MD
          </Button>
          <Button variant="glass" size="lg">
            Glass LG
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" hideIcon>
            No Icon
          </Button>
          <Button variant="ghost" href="/kitchen-sink">
            With href (Link)
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      {/* PILLS */}
      <Section title="Pill — Tags">
        <div className="flex flex-wrap gap-3">
          {[
            "Web Design",
            "Discovery",
            "Wireframing",
            "Branding",
            "React",
            "Next.js",
            "Framer Motion",
          ].map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </Section>

      {/* CARDS */}
      <Section title="Card — Default & Glass">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8">
            <Pill>Default Card</Pill>
            <p className="mt-4 font-display font-black text-3xl text-bone">
              Project Name
            </p>
            <p className="mt-2 text-sm text-bone-dim font-sans">
              A standard floating card with bg-ink-soft, rounded-3xl, and
              lift-on-hover animation.
            </p>
          </Card>
          <Card glass className="p-8">
            <Pill>Glass Card</Pill>
            <p className="mt-4 font-display font-black text-3xl text-bone">
              Glass Variant
            </p>
            <p className="mt-2 text-sm text-bone-dim font-sans">
              Glassmorphism with white/5 background and backdrop blur.
            </p>
          </Card>
          <Card className="p-8 flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              <Pill>UI</Pill>
              <Pill>Design</Pill>
            </div>
            <p className="mt-4 font-display font-black text-3xl text-bone">
              With Pills
            </p>
            <Button variant="glass" size="sm" className="mt-4 self-start">
              View Project
            </Button>
          </Card>
        </div>
      </Section>

      {/* SECTION HEADING */}
      <Section title="SectionHeading — Left & Center, With/Without Action">
        <SectionHeading
          eyebrow="✦ Some Recent Projects"
          title="Work That Speaks"
        />
        <div className="h-px bg-hairline" />
        <SectionHeading
          eyebrow="✦ What We Offer"
          title="Services"
          align="center"
        />
        <div className="h-px bg-hairline" />
        <SectionHeading
          eyebrow="✦ Case Studies"
          title="Selected Work"
          action={
            <Button variant="ghost" size="sm">
              View All
            </Button>
          }
        />
      </Section>

      {/* REVEAL */}
      <Section title="Reveal — Scroll Triggered (staggered)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 0.15, 0.3].map((delay, i) => (
            <Reveal key={i} delay={delay}>
              <Card className="p-8">
                <p className="font-display font-black text-2xl text-bone">
                  Reveal #{i + 1}
                </p>
                <p className="mt-2 text-sm text-bone-dim font-sans">
                  Delay: {delay}s. Fades in from y:24 when scrolled into view.
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MARQUEE */}
      <Section title="Marquee — Infinite Scroll Strip">
        <div className="border border-hairline rounded-2xl py-6 overflow-hidden">
          <Marquee speed={20}>
            {[
              "Branding",
              "Web Design",
              "Motion",
              "Next.js",
              "React",
              "Figma",
              "UI/UX",
              "Framer",
            ].flatMap((label, i) => [
              <span
                key={label}
                className="font-display font-black text-6xl uppercase text-bone-dim whitespace-nowrap">
                {label}
              </span>,
              <span key={`sep-${i}`} className="text-flush text-6xl">
                ✦
              </span>,
            ])}
          </Marquee>
        </div>
        <div className="border border-hairline rounded-2xl py-4 overflow-hidden">
          <Marquee speed={35}>
            {["Client A", "Client B", "Client C", "Client D", "Client E"].map(
              (label) => (
                <div
                  key={label}
                  className="px-8 py-2 rounded-pill border border-hairline bg-white/5 font-sans text-sm text-bone-dim whitespace-nowrap">
                  {label}
                </div>
              )
            )}
          </Marquee>
        </div>
      </Section>

      <p className="font-sans text-xs text-bone-dim text-center pb-8">
        ↑ Temporary kitchen-sink QA page — delete before launch
      </p>
    </main>
  );
}
