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
  headline: "I build things people actually want to use.",
  lead: "I'm a freelance mobile developer, UX/UI designer, and web developer based in India. I work with founders and product teams who need someone who can design and build — no handoffs, no gaps, no translating between disciplines. From mobile apps to web products, I take full ownership from brief to launch.",
};

// ─── Story ────────────────────────────────────────────────────────────────────

export const story: string[] = [
  "I started out the way most developers do — fixing things that were broken. Early projects meant building websites for small businesses and running headfirst into the gap between a design file and a working product. That gap is what got me interested in design. Not aesthetics for its own sake, but the logic underneath it: why users click what they click, where they get confused, what makes an interface feel effortless versus frustrating.",
  "Over the next few years I expanded from web into mobile. React Native changed what was possible for solo developers — suddenly you could ship a genuinely great app to both iOS and Android without a team. I rebuilt my process around it: design and development as one continuous workflow, with UX thinking woven in from the first conversation, not added at the end as a polish pass.",
  "Today I work with a focused set of founders, product teams, and startups who need someone who can hold the whole thing. Projects range from mobile apps built from scratch to product redesigns where the underlying code is solid but the experience is letting users down. The question I start every project with is the same: what does success look like six months after launch? That answer shapes everything — architecture, flows, hierarchy, and where to spend time.",
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
    title: "Mobile-first, always",
    description:
      "Most users are on a phone. I design and build for that reality first, then scale up — not the other way around. Constraints make better products.",
  },
  {
    id: "02",
    title: "Design and code as one craft",
    description:
      "I design and build myself, which means there's no handoff gap where intent gets lost. What you see in the prototype is what ships — no surprises, no dilution.",
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
      "I write clean, documented code and hand over products you can actually maintain. Launch day is a milestone, not an ending — good work holds up long after the invoice is paid.",
  },
];

// ─── Toolkit ──────────────────────────────────────────────────────────────────

export interface ToolkitGroup {
  category: string;
  items: string[];
}

export const toolkit: ToolkitGroup[] = [
  {
    category: "Mobile",
    items: ["React Native", "Expo", "iOS & Android", "Reanimated", "Zustand"],
  },
  {
    category: "Design",
    items: ["Figma", "Prototyping", "Design Systems", "Framer", "Spline"],
  },
  {
    category: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Supabase", "PostgreSQL", "Sanity CMS", "REST & GraphQL"],
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
