export interface AddOn {
  name: string;
  description: string;
}

export interface CustomQuoteCategory {
  id: string;
  title: string;
  blurb: string;
}

export interface PaymentStep {
  label: string;
  detail: string;
}

export interface PaymentModel {
  title: string;
  steps: PaymentStep[];
}

export const addOns: AddOn[] = [
  {
    name: "UI/UX Design (Figma)",
    description:
      "Full design system and wireframes reviewed and approved before a single line of code.",
  },
  {
    name: "GSAP / Framer Animations",
    description:
      "Scroll-triggered, physics-based, or cinematic motion tailored to your brand personality.",
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
    name: "Technical SEO",
    description:
      "Site structure, metadata, schema markup, and Core Web Vitals optimisation done properly.",
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
  {
    name: "Hosting & Deployment",
    description:
      "Managed deployment to Vercel or Cloudflare with CI/CD pipeline and custom domain setup.",
  },
];

export const customQuoteCategories: CustomQuoteCategory[] = [
  {
    id: "mobile",
    title: "Mobile Apps",
    blurb:
      "Native iOS & Android, or cross-platform React Native — scoped from discovery through to App Store delivery.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    blurb:
      "Complex platforms with authentication, databases, and business logic architected to scale with your growth.",
  },
  {
    id: "brand",
    title: "Bespoke Brand Systems",
    blurb:
      "End-to-end identity work — brand strategy, visual system, and full digital application across every touchpoint.",
  },
  {
    id: "enterprise",
    title: "Enterprise SaaS Platforms",
    blurb:
      "Large-scale B2B products with teams, permissions, dashboards, and third-party integrations built for reliability.",
  },
];

export const paymentModel: PaymentModel = {
  title: "How payment works",
  steps: [
    {
      label: "40%",
      detail: "Kickoff deposit — non-refundable, secures your project slot",
    },
    {
      label: "30%",
      detail: "Midway milestone, paid when design or staging is approved",
    },
    {
      label: "30%",
      detail: "Final delivery — paid before handoff and launch",
    },
  ],
};
