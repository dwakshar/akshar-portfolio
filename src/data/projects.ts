export interface ResultStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  intro?: string;
  // Rich case-study fields
  services: string[];
  deliverables: string[];
  challenge: string;
  approach: string;
  outcome: string;
  results: ResultStat[];
  isClientWork?: boolean;
  // Meta
  stack: string[];
  category: string;
  year: string;
  liveUrl: string | null;
  repoUrl: string | null;
  status: "live" | "wip" | "archived" | "open-source";
  featured: boolean;
  cover: string;
  thumbnails: string[];
}

export const projects: Project[] = [
  {
    slug: "commit-crown",
    title: "Commit Crown",
    tagline: "A strategy game powered by your real GitHub activity.",
    description:
      "Commits become gold, stars become prestige, merged PRs become attack rating. Players grow an isometric kingdom that mirrors their actual coding output, then raid each other based on those stats. Built around a Supabase-cached GitHub sync layer, server-authoritative raid resolution, and Row Level Security from day one. Live now with a leaderboard of real competing players.",

    services: [
      "GitHub-backed game state engine",
      "Server-authoritative raid resolution system",
      "Realtime social layer (visits, raids, notifications)",
      "Cosmetics marketplace with payment integration",
      "Public profile pages with dynamic OG images",
    ],

    deliverables: [
      "Next.js 14 App Router build deployed on Vercel",
      "Phaser.js 3 isometric game canvas (client-only, dynamic-imported)",
      "Supabase schema with Row Level Security on every table from migration 001",
      "Nightly GitHub sync cron + 30-min manual re-sync cooldown",
      "Stripe checkout (testing) with webhook-verified fulfillment",
      "Public leaderboard with active competing users",
    ],

    challenge:
      "Two hard constraints had to coexist. GitHub's API caps at 5,000 requests per hour — naïve implementations exhaust the quota the moment a few users sync simultaneously. And because the entire competitive layer (leaderboards, raids, prestige rankings) depends on those stats, the data had to be tamper-proof from the client.",

    approach:
      "GitHub data lives in Supabase, not in the client. Sync runs on login and via a nightly cron job; manual re-sync is gated by a 30-minute per-user cooldown. The client never touches the GitHub API directly. Every state mutation that affects competitive standing — raid resolution, achievement evaluation, payment fulfillment — runs server-side only, with atomic database writes. The client sends intent; the server decides the outcome. Row Level Security was active from the first migration, scoped to auth.uid() on every table, so even a leaked anon key can't read another player's data. Stripe purchases are fulfilled only after webhook signature verification, never on the client redirect.",

    outcome:
      "Shipped solo over 8 weeks as a working multiplayer platform. The leaderboard has real competing users across language categories; the raid system runs server-authoritatively with cooldowns and newcomer protection; the marketplace ships with Stripe in testing and a Razorpay swap planned for production launch. The architecture holds up because the hard decisions (cache layer, server authority, RLS) were made before any feature work — not retrofitted under load.",

    results: [
      { label: "Solo build to live multiplayer", value: "8 weeks" },
      { label: "Districts in starting kingdom build", value: "9" },
      { label: "GitHub API budget, never exceeded", value: "5,000/hr" },
      { label: "Client-side state mutations", value: "0" },
    ],

    stack: [
      "Next.js 14",
      "Phaser.js 3",
      "Supabase",
      "TypeScript",
      "Stripe",
      "Vercel",
    ],
    category: "Marketplace Game Platform",
    year: "2025",
    liveUrl: "https://commitcrown.vercel.app",
    repoUrl: null,
    status: "live",
    featured: true,
    cover: "/work/commit-crown/cover.png",
    thumbnails: [
      "/work/commit-crown/hero.png",
      "/work/commit-crown/kingdom.png",
      "/work/commit-crown/marketplace.png",
      "/work/commit-crown/leaderboard.png",
    ],
  },
  {
    slug: "humora",
    title: "Humora",
    tagline:
      "An open-source CAPTCHA replacement that verifies humans through personality, not pattern recognition.",
    description:
      "Existing CAPTCHA frustrates real users while modern bots increasingly solve image puzzles faster than humans do. Humora shifts verification from correctness-based to behavior-based — asking personality questions where no answer is wrong, and inferring humanity from answer patterns, response timing, and mouse/touch entropy simultaneously.",

    services: [
      "Multi-signal behavioral verification engine",
      "30-question handcrafted bank across 5 psychological categories",
      "JWT-secured token system with replay protection",
      "Drop-in embeddable widget (reCAPTCHA-pattern API)",
      "Optional Express verification backend",
    ],

    deliverables: [
      "React + Vite widget shipped as a single embeddable JS bundle",
      "5-screen state machine (welcome → questions → scoring → pass/fail) with Framer Motion transitions",
      "Scoring engine combining answer patterns, response timing, and mouse/touch entropy",
      "Express server with /verify and /register endpoints, rate-limited at 100 req / 15 min",
      "postMessage API for secure cross-origin host-page communication",
      "Public GitHub repo, MIT licensed",
    ],

    challenge:
      "Existing CAPTCHA fails twice: it frustrates real users (and tanks conversion rates) while modern bots increasingly solve image puzzles faster than humans do. The replacement needed to verify humanity without asking users to prove they can identify traffic lights — and without giving bots a fixed pattern to train against.",

    approach:
      "Verification shifted from correctness-based to behavior-based. The widget asks 5 personality questions where no answer is wrong; humanity is inferred from three signals captured simultaneously — which option a user picks (humans skew toward irrational, funny, or self-aware choices), how long they take (sub-300ms is bot territory; 800–4000ms is the natural human gut-reaction zone), and how organically they move the mouse or touch the screen. The question bank rotates one-per-category from 30 handcrafted prompts, yielding 7,776 unique session combinations — too sparse for a bot to memorize. Scoring runs entirely in JS memory (no DOM-readable scores), pass-state issues a server-signed JWT with 5-minute expiry, and the verification endpoint validates timestamps server-side to block replay and timing manipulation.",

    outcome:
      "Shipped as a working open-source MVP with the full scoring engine, all 5 widget screens, JWT issuance, and an optional verification backend. The widget loads in ~30 seconds end-to-end (faster than reCAPTCHA v2's median completion), runs mobile-first with full touch entropy tracking, collects zero PII, and ships under MIT — self-hostable with no Google dependency.",

    results: [
      { label: "Average completion time", value: "~30s" },
      { label: "Unique session combinations", value: "7,776" },
      { label: "Behavioral signals per session", value: "3" },
      { label: "PII collected", value: "0" },
    ],

    stack: [
      "React 18",
      "Vite 5",
      "Tailwind CSS",
      "Framer Motion",
      "jose (JWT)",
      "Express",
    ],
    category: "Developer Tool / Open Source",
    year: "2026",
    liveUrl: null,
    repoUrl: "https://github.com/dwakshar/humora",
    status: "open-source",
    featured: true,
    cover: "/work/humora/cover.png",
    thumbnails: [
      "/work/humora/hero.png",
      "/work/humora/dashboard.png",
      "/work/humora/subscription.png",
      "/work/humora/demo.png",
      "/work/humora/reviews.png",
      "/work/humora/popup.png",
      "/work/humora/popup2.png",
    ],
  },
  {
    slug: "mai-re",
    title: "Mai Re",
    tagline:
      "A heritage spice brand's first website — built as a showcase, not a checkout, because WhatsApp was already where the business happened.",
    description:
      "Mai Re is a family-owned spice business whose sales happen entirely through WhatsApp conversations. The site needed to bring online discovery without disrupting that model — a CMS-backed showcase with an enquiry-to-WhatsApp flow, built to run at ₹0/month so the owner keeps full control without a recurring SaaS bill.",

    services: [
      "Brand-aligned design system from logo derivation (maroon + gold heritage palette, Cormorant + Inter typography)",
      "Five-page showcase site: Home, Catalog, Product Detail, About, Contact",
      "Sanity CMS integration with owner-editable schemas for products, categories, and site-wide content",
      "Enquiry list flow that batches selected items into a single pre-filled WhatsApp message",
      "Catalog with client-side search, category filters, and sort",
      "Mobile-first responsive build with motion polish (Framer Motion)",
      "SEO setup, Vercel deployment, and owner handoff with training documentation",
    ],

    deliverables: [
      "Production site live on Vercel, custom-domain ready",
      "Sanity Studio embedded at /studio with three schemas (product, category, siteSettings) and logical Studio structure",
      "Variant-aware enquiry system: weight selection, quantity controls, persistent across sessions via localStorage",
      "WhatsApp deep-link generator that formats the order into a clean, copy-ready message",
      "Floating WhatsApp button on every page for general enquiries",
      "Resend-powered contact form as backup channel",
      "Heritage design system documented in tailwind.config.ts (maroon, gold, cream, ink tokens)",
      "Owner training session (recorded) and one-page PDF for adding/editing products without developer help",
    ],

    challenge:
      "The client runs a family-owned spice business where every sale starts with a WhatsApp conversation — pricing flexes, wholesale enquiries get negotiated, trust is built one chat at a time. A standard e-commerce build would have broken what was already working. The site needed to bring online discovery to the business without replacing the human conversation that converted browsers into buyers. And the owner — non-technical — needed to be able to add products, update prices, and mark items out of stock on her own, forever, without calling a developer.",

    approach:
      "The architecture was inverted from a typical e-commerce build: no checkout, no payment gateway, no inventory counts, no user accounts. Instead, the catalog feeds an enquiry-list pattern — visitors add items with variant and quantity, and a single button serialises the entire cart into a pre-filled WhatsApp message. The conversation continues exactly where it always did, but now with a clean order summary instead of back-and-forth questions. For owner autonomy, Sanity CMS sits behind every piece of editable content — products, categories, hero copy, contact info — with Studio embedded at /studio so there's one URL to remember and no second login. The design system was derived from the brand's existing logo (maroon wordmark, gold leaf mark) rather than imposed on it: warm cream backgrounds instead of pure white, Cormorant Garamond for editorial weight, gold used once per screen as a restraint signal. Operating cost was held at ₹0/month at launch by running entirely on free tiers (Vercel, Sanity, Resend) — important for a small business that didn't want a recurring SaaS bill attached to its website.",

    outcome:
      "Shipped as a five-page production site with full CMS autonomy for the owner. Every product page, category, and site-wide string is editable from Sanity Studio without code changes. The enquiry-to-WhatsApp flow tested end-to-end on iOS and Android — orders arrive in WhatsApp formatted and ready to confirm. The site honours the brand's heritage positioning (no market-fresh modernism, no e-commerce template feel) and stays out of the way of the conversation that closes sales.",

    results: [
      { label: "Pages, production-ready", value: "5" },
      { label: "Monthly operating cost", value: "₹0" },
      { label: "From catalog to formatted WhatsApp order", value: "1 tap" },
      { label: "Developer calls needed to update products", value: "0" },
    ],

    stack: [
      "Next.js 15",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Fuse.js",
      "Resend",
      "Vercel",
    ],
    category: "Client Work — Showcase & CMS",
    year: "2026",
    liveUrl: "https://mai-re-td19.vercel.app",
    repoUrl: null,
    status: "live",
    featured: true,
    isClientWork: true,
    cover: "/work/mai-re/cover.png",
    thumbnails: [
      "/work/mai-re/hero.png",
      "/work/mai-re/products.png",
      "/work/mai-re/contact.png",
      "/work/mai-re/product-preview.png",
      "/work/mai-re/about.png",
    ],
  },
];
