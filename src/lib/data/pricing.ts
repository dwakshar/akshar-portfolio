export type Market = "IN" | "US" | "GB" | "EU" | "SG" | "AU" | "DEFAULT";

export type PriceTier = {
  name: string;
  price: number;
  priceLabel: "Starting at" | "From";
  description: string;
  isPopular: boolean;
  features: string[];
  cta: string;
};

export type ServiceSection = {
  id: string;
  name: string;
  description: string;
  tiers: [PriceTier, PriceTier, PriceTier];
};

export type MarketPricing = {
  currency: string;
  symbol: string;
  locale: string;
  services: [ServiceSection, ServiceSection, ServiceSection];
};

const MOBILE_FEATURES = {
  mvp: [
    "Single platform (iOS or Android)",
    "Core user flows — tight scope, fast delivery",
    "React Native / Expo codebase",
    "2 rounds of revisions included",
  ],
  fullApp: [
    "iOS & Android from one codebase",
    "Auth, push notifications & deep linking",
    "API & backend integrations",
    "App Store & Play Store submission",
  ],
  custom: [
    "Multi-role apps, dashboards & admin panels",
    "Offline support & local-first architecture",
    "Real-time features, payments & third-party APIs",
    "Discovery call required for accurate scope",
  ],
};

const MOBILE_DESCRIPTIONS = {
  mvp: "A focused single-platform app built around your core user flow. Scoped tight, shipped fast — ideal for testing a concept or getting a v1 in users' hands.",
  fullApp:
    "A full cross-platform app shipping to both iOS and Android. Polished interactions, real integrations, and everything needed for a production launch.",
  custom:
    "Complex apps with multiple user roles, real-time data, payments, or unique technical requirements — scoped from a discovery call.",
};

const UX_FEATURES = {
  audit: [
    "Heuristic evaluation of existing product",
    "Prioritised list of UX issues & fixes",
    "Screen-by-screen annotated report",
    "Delivered within 5 business days",
  ],
  productDesign: [
    "User journey mapping & wireframes",
    "High-fidelity UI design in Figma",
    "Interactive prototype for user testing",
    "2 rounds of revisions included",
  ],
  fullSystem: [
    "End-to-end product design from research",
    "Full design system & component library",
    "Handoff-ready specs & developer documentation",
    "Discovery call required for accurate scope",
  ],
};

const UX_DESCRIPTIONS = {
  audit:
    "A structured review of your existing app or product — identifies friction, inconsistencies, and missed conversions with clear, prioritised fixes.",
  productDesign:
    "Full UX and UI design for a new product or feature set — from user flows and wireframes through to a polished, testable Figma prototype.",
  fullSystem:
    "Complete product design from research to a scalable design system — for teams building something that needs to grow without accumulating visual debt.",
};

const WEB_FEATURES = {
  landing: [
    "Mobile-first, performance-optimised build",
    "Conversion-focused layout & copy structure",
    "CMS-ready or static — your choice",
    "2 rounds of revisions included",
  ],
  webApp: [
    "Up to 6 pages, fully responsive",
    "Custom design system & brand alignment",
    "SEO foundations baked in from day one",
    "CMS integration + handoff training",
  ],
  custom: [
    "Web apps with auth, databases & business logic",
    "Third-party integrations (payments, CRMs, APIs)",
    "Bespoke design system + advanced interactions",
    "Discovery call required for accurate quote",
  ],
};

const WEB_DESCRIPTIONS = {
  landing:
    "A single, high-converting page built to capture leads, sell an offer, or launch a product — designed for speed, clarity, and action from first scroll to final CTA.",
  webApp:
    "A polished multi-page web presence that builds trust, communicates your value clearly, and turns first-time visitors into paying clients.",
  custom:
    "Full-stack web applications, SaaS products, or anything outside the standard tiers — scoped and quoted individually after a discovery call.",
};

function makeMobileTiers(
  mvp: number,
  full: number,
  custom: number
): [PriceTier, PriceTier, PriceTier] {
  return [
    {
      name: "MVP / Prototype",
      price: mvp,
      priceLabel: "Starting at",
      description: MOBILE_DESCRIPTIONS.mvp,
      isPopular: false,
      features: MOBILE_FEATURES.mvp,
      cta: "Get a quote",
    },
    {
      name: "Full App",
      price: full,
      priceLabel: "Starting at",
      description: MOBILE_DESCRIPTIONS.fullApp,
      isPopular: true,
      features: MOBILE_FEATURES.fullApp,
      cta: "Get a quote",
    },
    {
      name: "Custom",
      price: custom,
      priceLabel: "From",
      description: MOBILE_DESCRIPTIONS.custom,
      isPopular: false,
      features: MOBILE_FEATURES.custom,
      cta: "Let's talk",
    },
  ];
}

function makeUXTiers(
  audit: number,
  product: number,
  system: number
): [PriceTier, PriceTier, PriceTier] {
  return [
    {
      name: "UX Audit",
      price: audit,
      priceLabel: "Starting at",
      description: UX_DESCRIPTIONS.audit,
      isPopular: false,
      features: UX_FEATURES.audit,
      cta: "Get a quote",
    },
    {
      name: "Product Design",
      price: product,
      priceLabel: "Starting at",
      description: UX_DESCRIPTIONS.productDesign,
      isPopular: true,
      features: UX_FEATURES.productDesign,
      cta: "Get a quote",
    },
    {
      name: "Full Design System",
      price: system,
      priceLabel: "From",
      description: UX_DESCRIPTIONS.fullSystem,
      isPopular: false,
      features: UX_FEATURES.fullSystem,
      cta: "Let's talk",
    },
  ];
}

function makeWebTiers(
  landing: number,
  webApp: number,
  custom: number
): [PriceTier, PriceTier, PriceTier] {
  return [
    {
      name: "Landing Page",
      price: landing,
      priceLabel: "Starting at",
      description: WEB_DESCRIPTIONS.landing,
      isPopular: false,
      features: WEB_FEATURES.landing,
      cta: "Get a quote",
    },
    {
      name: "Web App",
      price: webApp,
      priceLabel: "Starting at",
      description: WEB_DESCRIPTIONS.webApp,
      isPopular: true,
      features: WEB_FEATURES.webApp,
      cta: "Get a quote",
    },
    {
      name: "Custom Build",
      price: custom,
      priceLabel: "From",
      description: WEB_DESCRIPTIONS.custom,
      isPopular: false,
      features: WEB_FEATURES.custom,
      cta: "Let's talk",
    },
  ];
}

const SERVICE_META = {
  mobile: {
    id: "mobile-development",
    name: "Mobile Development",
    description:
      "Cross-platform apps for iOS & Android built with React Native and Expo — native feel, single codebase.",
  },
  ux: {
    id: "ux-ui-design",
    name: "UX / UI Design",
    description:
      "Research-led design for mobile apps and digital products — from audit to full design system.",
  },
  web: {
    id: "web-development",
    name: "Web Development",
    description:
      "Fast, accessible websites and web apps built with Next.js and React — performance baked in from day one.",
  },
};

function makeMarket(
  currency: string,
  symbol: string,
  locale: string,
  mobilePrices: [number, number, number],
  uxPrices: [number, number, number],
  webPrices: [number, number, number]
): MarketPricing {
  return {
    currency,
    symbol,
    locale,
    services: [
      { ...SERVICE_META.mobile, tiers: makeMobileTiers(...mobilePrices) },
      { ...SERVICE_META.ux, tiers: makeUXTiers(...uxPrices) },
      { ...SERVICE_META.web, tiers: makeWebTiers(...webPrices) },
    ],
  };
}

export const pricingByMarket: Record<Market, MarketPricing> = {
  IN: makeMarket(
    "INR",
    "₹",
    "en-IN",
    [80000, 200000, 400000],
    [25000, 70000, 150000],
    [35000, 90000, 180000]
  ),
  US: makeMarket(
    "USD",
    "$",
    "en-US",
    [3000, 8000, 15000],
    [1200, 3500, 7000],
    [1500, 4000, 8000]
  ),
  GB: makeMarket(
    "GBP",
    "£",
    "en-GB",
    [2500, 6500, 13000],
    [1000, 2800, 5500],
    [1200, 3200, 6500]
  ),
  EU: makeMarket(
    "EUR",
    "€",
    "en-IE",
    [2800, 7000, 14000],
    [1100, 3200, 6500],
    [1400, 3500, 7000]
  ),
  SG: makeMarket(
    "SGD",
    "S$",
    "en-SG",
    [4000, 10000, 20000],
    [1600, 4500, 9000],
    [2000, 5000, 10000]
  ),
  AU: makeMarket(
    "AUD",
    "A$",
    "en-AU",
    [4500, 12000, 24000],
    [1800, 5000, 10000],
    [2200, 5500, 11000]
  ),
  DEFAULT: makeMarket(
    "USD",
    "$",
    "en-US",
    [3000, 8000, 15000],
    [1200, 3500, 7000],
    [1500, 4000, 8000]
  ),
};
