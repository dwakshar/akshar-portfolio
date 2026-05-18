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
];
