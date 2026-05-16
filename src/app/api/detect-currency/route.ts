import { COUNTRY_TO_CURRENCY } from "@/lib/currency-map";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    process.env.NEXT_PUBLIC_DEV_COUNTRY ||
    "US";
  const currency = COUNTRY_TO_CURRENCY[country] || "USD";
  return NextResponse.json({ currency });
}
