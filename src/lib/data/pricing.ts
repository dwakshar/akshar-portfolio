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

export type MarketPricing = {
  currency: string;
  symbol: string;
  locale: string;
  tiers: [PriceTier, PriceTier, PriceTier];
};

const SHARED_FEATURES = {
  landing: [
    "Mobile-first, performance-optimised build",
    "Conversion-focused layout & copy structure",
    "CMS-ready or static — your choice",
    "2 rounds of revisions included",
  ],
  business: [
    "Up to 6 pages, fully responsive",
    "Custom design system & brand alignment",
    "SEO foundations baked in from day one",
    "CMS integration + handoff training",
  ],
  custom: [
    "E-commerce, SaaS, or custom web applications",
    "Bespoke design system + advanced interactions",
    "Third-party integrations (payments, CRMs, APIs)",
    "Discovery call required for accurate quote",
  ],
};

const SHARED_DESCRIPTIONS = {
  landing:
    "A single, high-converting page built to capture leads, sell an offer, or launch a product — designed for speed, clarity, and action from first scroll to final CTA.",
  business:
    "A polished multi-page presence that builds trust, communicates your value clearly, and turns first-time visitors into paying clients — from homepage through to contact.",
  custom:
    "E-commerce, SaaS marketing sites, or anything outside the standard tiers — scoped and quoted individually after a discovery call.",
};

function makeTiers(
  landingPrice: number,
  businessPrice: number,
  customPrice: number
): [PriceTier, PriceTier, PriceTier] {
  return [
    {
      name: "Landing Page",
      price: landingPrice,
      priceLabel: "Starting at",
      description: SHARED_DESCRIPTIONS.landing,
      isPopular: false,
      features: SHARED_FEATURES.landing,
      cta: "Get a quote",
    },
    {
      name: "Business Website",
      price: businessPrice,
      priceLabel: "Starting at",
      description: SHARED_DESCRIPTIONS.business,
      isPopular: true,
      features: SHARED_FEATURES.business,
      cta: "Get a quote",
    },
    {
      name: "Custom Build",
      price: customPrice,
      priceLabel: "From",
      description: SHARED_DESCRIPTIONS.custom,
      isPopular: false,
      features: SHARED_FEATURES.custom,
      cta: "Let's talk",
    },
  ];
}

export const pricingByMarket: Record<Market, MarketPricing> = {
  IN: {
    currency: "INR",
    symbol: "₹",
    locale: "en-IN",
    tiers: makeTiers(35000, 75000, 150000),
  },
  US: {
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    tiers: makeTiers(1200, 2500, 5000),
  },
  GB: {
    currency: "GBP",
    symbol: "£",
    locale: "en-GB",
    tiers: makeTiers(950, 2000, 4000),
  },
  EU: {
    currency: "EUR",
    symbol: "€",
    locale: "en-IE",
    tiers: makeTiers(1100, 2300, 4600),
  },
  SG: {
    currency: "SGD",
    symbol: "S$",
    locale: "en-SG",
    tiers: makeTiers(1500, 3200, 6500),
  },
  AU: {
    currency: "AUD",
    symbol: "A$",
    locale: "en-AU",
    tiers: makeTiers(1800, 3800, 7500),
  },
  DEFAULT: {
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    tiers: makeTiers(1200, 2500, 5000),
  },
};
