export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your business, goals, and audience. I ask the questions most agencies skip — so the strategy is genuinely yours.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "With a clear brief in hand, I craft a visual direction and UX structure. You review and refine before a single line of code is written.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "I build in focused sprints, sharing progress at key milestones. Feedback is fast, iterations are purposeful, and quality is non-negotiable.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Your site goes live with full handoff documentation and training — plus ongoing care options so you're never left to figure it out alone.",
  },
];
