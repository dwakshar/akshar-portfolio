import type { Metadata } from "next";
import { headers } from "next/headers";
import { getFxRates } from "@/lib/fx";
import { COUNTRY_TO_CURRENCY } from "@/lib/currency-map";
import PricingContent from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for landing pages, business websites, SaaS marketing sites, and monthly retainers. Every project begins with a free discovery call.",
  alternates: { canonical: "https://aksharsharma.com/pricing" },
  openGraph: {
    title: "Pricing — Akshar Sharma",
    description:
      "Transparent starting prices for landing pages, business websites, SaaS marketing sites, and monthly retainers.",
    url: "https://aksharsharma.com/pricing",
    type: "website",
  },
  twitter: {
    title: "Pricing — Akshar Sharma",
    description:
      "Transparent starting prices for landing pages, business websites, SaaS marketing sites, and retainers.",
  },
};

export default async function PricingPage() {
  const headersList = await headers();
  const country =
    headersList.get("x-vercel-ip-country") ||
    process.env.NEXT_PUBLIC_DEV_COUNTRY ||
    "US";
  const detectedCurrency = COUNTRY_TO_CURRENCY[country] || "USD";

  const fxRates = await getFxRates();

  return (
    <PricingContent detectedCurrency={detectedCurrency} fxRates={fxRates} />
  );
}
