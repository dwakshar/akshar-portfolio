import { headers } from "next/headers";
import type { Market } from "@/lib/data/pricing";

const countryToMarket: Record<string, Market> = {
  IN: "IN",
  US: "US",
  GB: "GB",
  SG: "SG",
  AU: "AU",
  AT: "EU", BE: "EU", BG: "EU", HR: "EU", CY: "EU", CZ: "EU",
  DK: "EU", EE: "EU", FI: "EU", FR: "EU", DE: "EU", GR: "EU",
  HU: "EU", IE: "EU", IT: "EU", LV: "EU", LT: "EU", LU: "EU",
  MT: "EU", NL: "EU", PL: "EU", PT: "EU", RO: "EU", SK: "EU",
  SI: "EU", ES: "EU", SE: "EU",
};

export async function getMarket(): Promise<Market> {
  const headersList = await headers();
  const country =
    headersList.get("x-vercel-ip-country") ||
    process.env.NEXT_PUBLIC_DEV_COUNTRY ||
    null;
  if (!country) return "DEFAULT";
  return countryToMarket[country.toUpperCase()] ?? "DEFAULT";
}
