import { ProcessStep, processSteps } from "@/data/services";

export { processSteps };
export type { ProcessStep };

// ─── Intro ────────────────────────────────────────────────────────────────────

export interface Intro {
  eyebrow: string;
  headline: string;
  lead: string;
}

export const intro: Intro = {
  eyebrow: "About",
  // Alternates (swap in Phase 11):
  // "Design and code. One person, no handoff gaps."
  // "Sites that sell, not just impress."
  headline: "I build websites that earn their keep.",
  lead: "I'm a freelance web designer and developer based in India, working with founders and marketing teams who need a website that actually moves the needle. My work sits at the intersection of visual craft and technical execution — I design in the browser, build for performance, and take full ownership from brief to launch.",
};

// ─── Story ────────────────────────────────────────────────────────────────────

export const story: string[] = [
  "I got into web work the way most people do — by fixing things that were broken. Early on that meant hacking together WordPress themes for small businesses and wondering why the results never matched the mockup. That gap between design intent and browser reality is what pulled me deeper into code. Over the next few years I rebuilt my process from scratch: design and development as a single workflow, not two handoffs.",
  "Today I work with a focused set of clients — mostly growing businesses, SaaS products, and agencies that need a reliable technical partner rather than a production line. Projects range from conversion-focused landing pages built in a week to full brand sites and web applications with CMS, performance budgets, and ongoing retainers. The common thread is that every client needs the work to do something specific, not just exist.",
  "What I've found after six years is that the sites that actually perform share a few qualities: they're fast, they're clear about what they're offering, and every design decision traces back to a real user need. Good-looking is table stakes. The question I ask at the start of every project is: what does success look like three months after launch? That answer shapes everything — structure, copy, hierarchy, the whole thing.",
];

// ─── Principles ───────────────────────────────────────────────────────────────

export interface Principle {
  id: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    id: "01",
    title: "Outcomes over aesthetics",
    description:
      "A beautiful site that doesn't convert is an expensive brochure. Every visual choice I make has a job to do — hierarchy, clarity, trust-building, or all three.",
  },
  {
    id: "02",
    title: "Design and code as one craft",
    description:
      "I design and build myself, which means there's no handoff gap where intent gets lost. What you see in the mockup is what ships — no surprises, no dilution.",
  },
  {
    id: "03",
    title: "One point of contact, fast responses",
    description:
      "You deal with me directly, not an account manager. I respond within 24 hours, give clear timelines, and flag problems early — before they become delays.",
  },
  {
    id: "04",
    title: "Built to last, not just to launch",
    description:
      "I write clean, documented code and hand over sites you can actually manage. Launch day is a milestone, not an ending — good work holds up long after the invoice is paid.",
  },
];

// ─── Toolkit ──────────────────────────────────────────────────────────────────

export interface ToolkitGroup {
  category: string;
  items: string[];
}

export const toolkit: ToolkitGroup[] = [
  {
    category: "Design",
    items: ["Figma", "Adobe Illustrator", "Framer", "Spline"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Sanity CMS", "Contentful", "Supabase", "PostgreSQL"],
  },
  {
    category: "Performance & SEO",
    items: [
      "Core Web Vitals",
      "Lighthouse",
      "Vercel Analytics",
      "Technical SEO",
    ],
  },
];

// ─── Credentials ──────────────────────────────────────────────────────────────

export interface Credential {
  label: string;
  value: string;
}

// Numbers are kept consistent with profile.ts (6+ years, 50+ clients)
export const credentials: Credential[] = [
  { label: "Based in", value: "India · working globally" },
  { label: "Experience", value: "6+ years" },
  { label: "Clients served", value: "50+" },
  { label: "Response time", value: "Within 24 hours" },
];

// ─── Fun Facts ────────────────────────────────────────────────────────────────

export interface FunFact {
  label: string;
  value: string;
}

export const funFacts: FunFact[] = [
  { label: "Coffee order", value: "Flat white, always" },
  { label: "Currently learning", value: "3D in Spline & Three.js" },
  { label: "Favourite city", value: "Tokyo (never been, still favourite)" },
  { label: "Latest read", value: "Don't Make Me Think — Krug" },
];
