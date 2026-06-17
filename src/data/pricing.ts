export interface AddOn {
  name: string;
  description: string;
}

export interface PaymentStep {
  label: string;
  title: string;
  when: string;
  detail: string;
  isNonRefundable?: boolean;
}

export interface PaymentModel {
  title: string;
  steps: PaymentStep[];
}

export const addOns: AddOn[] = [
  {
    name: "App Store Optimisation (ASO)",
    description:
      "Keyword research, metadata, screenshots, and preview video to maximise organic installs from day one.",
  },
  {
    name: "User Testing & Research",
    description:
      "Structured usability sessions with real users — insights that inform design decisions before a single pixel ships.",
  },
  {
    name: "GSAP / Framer Animations",
    description:
      "Scroll-triggered, physics-based, or cinematic motion tailored to your product's personality.",
  },
  {
    name: "Motion & Video Integration",
    description:
      "Hero reels, background video, and animated brand assets woven seamlessly into the UI.",
  },
  {
    name: "CMS Setup (Sanity / Contentful)",
    description:
      "A structured content system so your team can publish and edit without touching code.",
  },
  {
    name: "Accessibility Audit",
    description:
      "WCAG compliance review with annotated fixes — covering colour contrast, touch targets, screen reader support, and keyboard navigation.",
  },
  {
    name: "Copywriting & Storytelling",
    description:
      "Brand-voice copy that resonates with your audience and moves them toward action.",
  },
  {
    name: "Analytics & Tracking",
    description:
      "GA4, GTM, conversion events, and custom dashboards configured correctly from day one.",
  },
];

export const paymentModel: PaymentModel = {
  title: "How payment works",
  steps: [
    {
      label: "40%",
      title: "Kickoff Deposit",
      when: "Before work begins",
      detail:
        "Paid upfront to confirm the project and secure your slot in my schedule. This is non-refundable — it locks in dedicated time on both sides and means I turn away other work for you.",
      isNonRefundable: true,
    },
    {
      label: "30%",
      title: "Midway Milestone",
      when: "When design or staging is approved",
      detail:
        "Due once you've reviewed real progress — a design approval, a working staging build, or an agreed milestone. You've seen the work and shaped it before this payment is due.",
    },
    {
      label: "30%",
      title: "Final Delivery",
      when: "Before handoff & launch",
      detail:
        "Cleared before I hand over all files, credentials, and push anything live. Nothing ships until the final payment is confirmed — clean and simple for both of us.",
    },
  ],
};
