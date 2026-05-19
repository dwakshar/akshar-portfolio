import type { Metadata } from "next";
import { getMarket } from "@/lib/pricing/get-market";
import { pricingByMarket } from "@/lib/data/pricing";
import PricingContent from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for landing pages, business websites, and custom builds. Every project begins with a free discovery call.",
  alternates: { canonical: "https://aksharsharma.com/pricing" },
  openGraph: {
    title: "Pricing — Akshar Sharma",
    description:
      "Transparent starting prices for landing pages, business websites, and custom builds.",
    url: "https://aksharsharma.com/pricing",
    type: "website",
  },
  twitter: {
    title: "Pricing — Akshar Sharma",
    description:
      "Transparent starting prices for landing pages, business websites, and custom builds.",
  },
};

export default async function PricingPage() {
  const market = await getMarket();
  const marketPricing = pricingByMarket[market];

  return <PricingContent marketPricing={marketPricing} />;
}
