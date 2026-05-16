export interface AnchorService {
  id: string;
  title: string;
  startingAt: number;
  blurb: string;
  highlights: string[];
}

export interface RetainerPlan {
  id: string;
  title: string;
  priceUsd: number;
  tagline: string;
  includes: string[];
  featured?: boolean;
}

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

export const anchorPricing: AnchorService[] = [
  {
    id: "landing",
    title: "Landing Pages",
    startingAt: 800,
    blurb:
      "A single, high-converting page built to capture leads, sell an offer, or launch a product — designed for speed, clarity, and action from first scroll to final CTA.",
    highlights: [
      "Mobile-first, performance-optimised build",
      "Conversion-focused layout & copy structure",
      "CMS-ready or static — your choice",
      "2 rounds of revisions included",
    ],
  },
  {
    id: "business",
    title: "Business Websites",
    startingAt: 3000,
    blurb:
      "A polished multi-page presence that builds trust, communicates your value clearly, and turns first-time visitors into paying clients — from homepage through to contact.",
    highlights: [
      "Up to 6 pages, fully responsive",
      "Custom design system & brand alignment",
      "SEO foundations baked in from day one",
      "CMS integration + handoff training",
    ],
  },
  {
    id: "saas",
    title: "SaaS Marketing Sites",
    startingAt: 5000,
    blurb:
      "A conversion-focused marketing site for your SaaS product — built to explain, demo, and drive sign-ups with the speed, motion, and polish your product deserves.",
    highlights: [
      "Feature showcases, pricing & demo CTAs",
      "Animation-ready, component-driven build",
      "Optimised for Core Web Vitals",
      "Analytics & tracking setup included",
    ],
  },
];

export const retainers: RetainerPlan[] = [
  {
    id: "care",
    title: "Care Plan",
    priceUsd: 400,
    tagline:
      "Keep your site healthy, updated, and running smoothly — without lifting a finger.",
    includes: [
      "Hosting & uptime monitoring",
      "Security updates & daily backups",
      "4 change requests per month",
      "Monthly performance report",
    ],
  },
  {
    id: "growth",
    title: "Growth Retainer",
    priceUsd: 900,
    tagline:
      "Regular development hours and strategic input to keep your site improving every single month.",
    includes: [
      "10 hrs development & design time",
      "New features & iterative improvements",
      "Priority support & fast turnaround",
      "Monthly strategy check-in",
    ],
    featured: true,
  },
  {
    id: "partner",
    title: "Partner Retainer",
    priceUsd: 1800,
    tagline:
      "A true technical co-pilot — strategy, execution, and always-on support in your corner.",
    includes: [
      "20 hrs/month across dev, design & strategy",
      "Monthly strategy calls",
      "A/B testing & CRO experiments",
      "Dedicated Slack + same-day response",
    ],
  },
];

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
