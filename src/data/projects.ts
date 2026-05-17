export interface ResultStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  // Rich case-study fields
  intro: string;
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
  status: "live" | "wip" | "archived";
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

    intro:
      "Commit Crown turns real GitHub activity into game currency. Commits become gold, stars become prestige, merged PRs become attack rating — every push to any repository feeds your kingdom in real time. Players build isometric cities that mirror their actual output, then go head-to-head in server-resolved raids. Built solo, shipped live with a leaderboard of real developers competing on real commit history.",

    services: [
      "Full-stack development",
      "Game design & mechanics",
      "GitHub OAuth + sync layer",
      "Supabase architecture & RLS",
      "Stripe marketplace integration",
    ],

    deliverables: [
      "Isometric kingdom renderer (Phaser.js)",
      "GitHub activity sync layer with TTL caching",
      "Server-authoritative raid resolution system",
      "Cosmetics marketplace (Stripe)",
      "Live leaderboard",
    ],

    challenge:
      "GitHub data is async and rate-limited, but a game needs to feel immediate. Stats also had to be tamper-proof — if raid outcomes are computed client-side, players cheat. Every architecture decision flowed from those two constraints: keep data fresh without hammering the API, and never trust the client with raw stat values.",

    approach:
      "Built a Supabase-cached sync layer that pulls GitHub stats on a TTL basis so the API is never hammered but data stays fresh enough to matter. Phaser.js handles the isometric renderer entirely client-side. Raid resolution is server-authoritative: the client submits a raid request and receives only the outcome — it never sees or transmits raw stat values. Row Level Security was wired from day one so no player can query another's raw GitHub data directly.",

    outcome:
      "Shipped live with a leaderboard of real developers competing on real commit history. The cosmetics marketplace runs on Stripe. Kingdom layouts feel genuinely personal because they're seeded entirely from actual push history — no synthetic data, no placeholders. The architecture held up cleanly from the first real raid.",

    results: [
      { label: "Active players", value: "9+" },
      { label: "Raids completed", value: "20+" },
      { label: "GitHub commits", value: "109" },
      { label: "Marketplace sales", value: "2" },
    ],

    stack: ["Next.js 14", "Phaser.js 3", "Supabase", "TypeScript", "Stripe", "Vercel"],
    category: "Marketplace Game Platform",
    year: "2026",
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
];
