import type { Metadata } from "next";
import { CurrencyProvider } from "@/components/pricing/CurrencyContext";
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

export default function PricingPage() {
  return (
    <CurrencyProvider>
      <PricingContent />
    </CurrencyProvider>
  );
}
