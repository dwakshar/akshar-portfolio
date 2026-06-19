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
    status: "live",
    featured: true,
    cover: "/work/commit-crown/cover.webp",
    thumbnails: [
      "/work/commit-crown/hero.webp",
      "/work/commit-crown/kingdom.webp",
      "/work/commit-crown/marketplace.webp",
      "/work/commit-crown/leaderboard.webp",
    ],
  },
  {
    slug: "defendra",
    title: "Defendra",
    tagline:
      "An on-device SMS scam classifier for Android — no server, no data egress, no guesswork.",
    description:
      "India's SMS fraud problem is structural: blocklists can't keep up, carrier filters miss content-based tricks, and cloud classifiers require sending private messages to a third-party server. Defendra runs a fine-tuned multilingual DistilBERT model entirely on-device, classifying every incoming SMS as safe, suspicious, or scam in real time — with zero network calls, zero analytics, and zero bytes leaving the phone.",

    services: [
      "On-device ML inference pipeline (LiteRT + DistilBERT)",
      "Real-time SMS interception via Kotlin BroadcastReceiver",
      "Regex rule engine for signal-augmented classification",
      "Explainable verdict UI surfacing specific scam signals",
      "Manual inbox scanner for retrospective analysis",
    ],

    deliverables: [
      "Flutter 3.44 Android app with zero network permissions — no HTTP client, no analytics, no data egress by construction, not by configuration",
      "Fine-tuned DistilBERT-base-multilingual model (~540 MB float32) bundled as LiteRT asset, running inference entirely on-device with no network call per classification",
      "Kotlin BroadcastReceiver intercepting incoming SMS before the notification surfaces — verdict fires before the user taps",
      "Three-tier verdict system: SCAM / SUSPICIOUS / SAFE with distinct UI treatments and per-tier notification badge behaviour",
      "Compound decision logic: p_scam > 0.85 AND regex signal required for a SCAM verdict — prevents high false-positive rate on ambiguous messages",
      "Parallel regex rule engine covering bank impersonation, OTP harvesting, lottery lures, and UPI fraud templates as a signal layer alongside ML",
      "Explainable verdict screen listing the specific regex patterns behind each judgment in plain language, not raw scores",
      "Manual inbox scanner for retrospective batch analysis of existing messages",
      "Riverpod state management with Hive local storage for verdict history and user preferences, persisted across app restarts",
      "APK distribution via F-Droid — SMS READ/RECEIVE permissions block Play Store listing by policy; targeting privacy-conscious users deliberately",
    ],

    challenge:
      "India's SMS fraud is structural. Blocklists get rotated faster than they can be maintained. Carrier-level filters miss content-based tricks — bank impersonation, OTP harvesting, lottery lures — that change wording but not intent. Cloud classifiers work, but they require sending every private message to a third-party server, which is the wrong trade-off for a privacy tool. The model also had to handle India's SMS reality: code-mixed Hindi-English, regional transliterations, and scam templates that borrow legitimacy from real bank and telecom language.",

    approach:
      "The entire inference pipeline runs on-device. A fine-tuned DistilBERT-base-multilingual model handles the language-understanding layer; a parallel regex rule engine catches known scam templates and contributes a signal score. Classification fires only when both the ML probability (p_scam > 0.85) and at least one regex signal agree — reducing false positives without softening the classifier on clear scams. Verdicts are explainable: the UI surfaces the specific regex patterns that contributed, so users understand why a message was flagged. The app holds zero network permissions; there is no HTTP client, no telemetry, and no analytics — by construction, not by configuration.",

    outcome:
      "Defendra ships as an Android app with a working real-time detection pipeline and zero network egress. The model, trained on ~2,300 examples (~87% safe, ~13% scam), runs inference entirely on-device via LiteRT. The BroadcastReceiver catches and classifies incoming SMS before the notification surfaces. The manual scanner lets users retrospectively audit their inbox. Because SMS permissions restrict Play Store distribution, the APK is distributed via F-Droid — keeping it in the hands of privacy-conscious users who chose the trade-off deliberately.",

    results: [
      { label: "Network calls per classification", value: "0" },
      { label: "Training examples (multilingual)", value: "~2,300" },
      { label: "Scam probability threshold", value: "0.85" },
      { label: "Data sent to third-party servers", value: "0 bytes" },
    ],

    stack: [
      "Flutter 3.44",
      "Dart",
      "LiteRT",
      "DistilBERT (multilingual)",
      "Riverpod",
      "Hive",
      "Kotlin",
      "Android",
    ],
    category: "Mobile App — Privacy & Security",
    year: "2026",
    liveUrl: "https://defendra.vercel.app/",
    status: "open-source",
    featured: true,
    cover: "/work/defendra/cover.png",
    thumbnails: ["/work/defendra/hero.png", "/work/defendra/scanner.png"],
  },
  {
    slug: "dawnwell",
    title: "Dawnwell",
    tagline:
      "An offline-first habit tracker for daily rituals — syncs across devices without ever making you wait.",
    description:
      "Most habit apps treat checking in like a to-do. Dawnwell treats it like a ritual. Habits are grouped by time of day — morning, focus, evening, custom — and the app opens instantly with no spinners, no loading states, no network dependency. A custom sync engine keeps multiple devices consistent using deterministic merge rules, push-before-pull ordering, and type-enforced sync boundaries. Shipped to iOS and Android.",

    services: [
      "Offline-first SQLite data layer with Drizzle ORM schema",
      "Custom Last-Write-Wins sync engine with 6-rule merge logic",
      "Ritual-grouped check-in UI (morning, focus, evening, custom)",
      "Native-thread animations via Reanimated 4 worklets",
      "Supabase auth and Postgres backend with Row Level Security",
      "Heatmap chart for streak and consistency visualisation",
    ],

    deliverables: [
      "React Native 0.85 (New Architecture) app shipped to both iOS App Store and Google Play as a production release",
      "Expo 56 + Expo Router v4 with typed file-based navigation and deep-link support across all screens",
      "SQLite source of truth via expo-sqlite + Drizzle ORM — schema changes error at compile-time, not at runtime on a user's device",
      "Habit check-in UI grouped by time of day (morning, focus, evening, custom) — opening the app feels like a ritual, not a task list",
      "Streak heatmap chart for long-range consistency visualisation, styled after GitHub's contribution graph",
      "Bottom-sheet forms for habit creation and editing — no full-screen modals, no navigation stack push",
      "Optimistic write pattern: SQLite write + UI update fires before any network sync cycle runs — zero perceived latency on check-in",
      "Custom LWW sync engine: push-before-pull ordering with 5-second debounce on rapid edits, all conflicts logged never silently discarded",
      "Type-level sync boundaries: SYNC-EXCLUDE marker prevents device-local fields (notification IDs, local settings) from ever reaching the network schema",
      "Supabase auth + Postgres backend with RLS scoped to auth.uid() — cross-user data exposure is impossible at the query level",
      "Zustand (app state) + React Query 5 (server state) + react-native-mmkv (token/settings KV) + Reanimated 4 JSI worklets with reduce-motion support and haptic feedback throughout",
    ],

    challenge:
      "Habit tracking only works if the app is frictionless at 6 AM. That means it cannot show a spinner on open, cannot lose a check-in to a network error, and cannot overwrite a change made on a second device without warning. Those three constraints — instant open, offline writes, multi-device consistency — pull in different directions. A cloud-first architecture solves sync but requires a network. Optimistic UI solves latency but silently loses conflicts. The design had to make all three work together without reaching for a library (like CRDTs) that was more complex than a single-user sync problem needed.",

    approach:
      "SQLite is the source of truth, not the server. The app reads from the local database on open — no network call, no loading state, no blank screen. Writes go to SQLite first; the UI updates optimistically before anything reaches Supabase. The sync engine runs in the background: push local changes before pulling remote ones, so edits never get overwritten by a pull that races ahead. Merge logic is deterministic across six rules covering every conflict case — last-write wins on timestamp, with all conflicts logged rather than silently discarded. Device-local fields (notification permission IDs, local-only settings) are marked SYNC-EXCLUDE at the TypeScript level, which enforces they never reach the network schema. Animations run on the native thread via Reanimated 4 JSI worklets, keeping the UI fluid even while Drizzle runs heavier relational queries on the JS thread.",

    outcome:
      "Shipped solo to both the iOS App Store and Google Play as a production app. The check-in flow opens without network dependency — habit lists render from SQLite before any sync cycle runs. The LWW engine handles all multi-device conflict cases deterministically with no silent data loss. The design system (cool deep-blue palette, bottom-sheet forms, reduce-motion support, haptic feedback) was built as a custom token layer in code, not in a design file — so every component is consistent and portable. The architecture proved that a solo engineer can ship a production mobile app with real sync, real design, and real distribution without over-engineering the solution.",

    results: [
      { label: "Platforms shipped (iOS + Android)", value: "2" },
      { label: "Deterministic sync merge rules", value: "6" },
      { label: "JS thread animation frames dropped", value: "0" },
      { label: "Network calls needed to open the app", value: "0" },
    ],

    stack: [
      "React Native 0.85",
      "Expo 56",
      "Expo Router v4",
      "TypeScript",
      "SQLite + Drizzle ORM",
      "Zustand",
      "React Query 5",
      "Reanimated 4",
      "Supabase",
      "MMKV",
    ],
    category: "Mobile App — Health & Productivity",
    year: "2026",
    liveUrl: "https://github.com/dwakshar/dawnwell",
    status: "live",
    featured: true,
    cover: "/work/dawnwell/cover.png",
    thumbnails: [
      "/work/dawnwell/hero.webp",
      "/work/dawnwell/checkin.webp",
      "/work/dawnwell/heatmap.webp",
      "/work/dawnwell/sync.webp",
    ],
  },
  {
    slug: "blurguard",
    title: "BlurGuard",
    tagline:
      "A Chrome extension that classifies and blurs explicit content on-device, in real time, before it renders.",
    description:
      "BlurGuard scans every image and video on a webpage using an on-device NSFW classifier — no server, no data transmission, no cookies forwarded. Flagged elements are wrapped in a zero-layout-shift blur overlay before they fully render; users can reveal them on demand. Four sensitivity tiers, a per-domain allowlist, a live popup dashboard, and 62 tests. Built to Chrome Web Store production quality.",

    services: [
      "On-device NSFW classification via TensorFlow.js + NSFW.js (MobileNet V2)",
      "Zero-layout-shift blur overlay with backdrop-filter glass pane",
      "Viewport-priority inference queue with LRU verdict cache",
      "Four sensitivity levels with instant re-derivation on change",
      "Live popup dashboard with real-time counters and CSV/JSON export",
      "Video frame sampling with IntersectionObserver lifecycle hooks",
      "Per-domain allowlist with one-tap disable",
    ],

    deliverables: [
      "Chrome MV3 extension built with Vite 7 + custom Rollup multi-entry config",
      "Four isolated extension contexts with a fully-typed discriminated-union message bus (Popup, Background, Offscreen, Content Script)",
      "Ephemeral offscreen document for GPU inference — created on-demand, torn down after 30s idle to release ~150–250 MB WebGL/tensor memory",
      "LRU verdict cache (500 URLs) caching raw MobileNet scores — re-derives verdict on sensitivity change without re-running inference",
      "Viewport-priority queue (100-item max, deduplicated) with serial GPU serialization via Promise chain to prevent WebGL context thrashing",
      "Build-time cloud backend flag (__CLOUD_ENABLED__=false) dead-code-eliminates Sightengine v1.1 integration from v1 bundle",
      "62 Vitest tests covering queue, cache, allowlist, and round-trip message bus",
      "React 19 + Tailwind CSS 4 + shadcn/ui popup with detection feed, confidence scores, and domain breakdown",
    ],

    challenge:
      "A content-safety extension has one shot to get the overlay in place — if the image renders before the classifier fires, the damage is done. But classification is expensive: a cold TensorFlow.js model load takes ~4 seconds, GPU context thrashing under concurrent requests destroys throughput, and a persistent offscreen document holds 150–250 MB of WebGL memory for the entire browsing session. The extension also operates across Chrome's four isolated contexts — popup, background service worker, offscreen document, and content script — each with different lifetimes, APIs, and restart behaviours. Keeping state consistent across a service worker that sleeps and an offscreen document that gets torn down is a coordination problem most extension tutorials don't cover.",

    approach:
      "Classification lives in an ephemeral offscreen document that Chrome MV3 allows for GPU access. It's created on the first classify request and torn down after 30 seconds of idle — releasing WebGL memory without losing state, because all durable state lives in chrome.storage.local on the background service worker. The inference queue serialises all GPU calls through a Promise chain (queueTail), preventing context thrashing under concurrent requests; URL coalescing merges duplicate requests for the same image into one classify call. The LRU verdict cache stores raw MobileNet probability scores rather than binary verdicts — so when a user changes sensitivity, all 500 cached entries re-derive instantly without re-running inference. The overlay is injected as a position-relative wrapper that mirrors the original element's CSS, so adding it never shifts layout. Every message between contexts is a TypeScript discriminated union — no stringly-typed postMessage calls, no runtime surprises across context restarts.",

    outcome:
      "BlurGuard ships at 1.0.0 production quality with the full detection pipeline working end-to-end: DOM scan on load, MutationObserver for injected content, video frame sampling at 4-second intervals, viewport-priority queueing, GPU inference, overlay injection, and reveal-on-click. Steady-state inference runs at ~80ms per image; cache hits resolve at ~3ms. The popup dashboard shows real-time classification counts, a timestamped detection feed with confidence scores, and CSV/JSON export. Privacy is structural: the offscreen document fetches images as chrome-extension:// origin with credentials omitted — no session cookies forwarded, no URLs or pixel data leave the device.",

    results: [
      { label: "Steady-state inference per image", value: "~80ms" },
      { label: "Isolated extension contexts (typed bus)", value: "4" },
      { label: "Vitest tests (queue, cache, messaging)", value: "62" },
      { label: "Data transmitted to external servers", value: "0 bytes" },
    ],

    stack: [
      "Chrome MV3",
      "TypeScript 5.8",
      "React 19",
      "TensorFlow.js 4.22",
      "NSFW.js 4.3",
      "Tailwind CSS 4",
      "Vite 7",
      "Vitest",
      "shadcn/ui",
    ],
    category: "Browser Extension — Privacy & Safety",
    year: "2026",
    liveUrl: "https://github.com/dwakshar/blur-guard/releases/tag/v1.0",
    status: "open-source",
    featured: true,
    cover: "/work/blurguard/cover.png",
    thumbnails: ["/work/blurguard/hero.png"],
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
    liveUrl: "https://mai-re.vercel.app",
    status: "live",
    featured: true,
    isClientWork: true,
    cover: "/work/mai-re/cover.webp",
    thumbnails: [
      "/work/mai-re/hero.webp",
      "/work/mai-re/products.webp",
      "/work/mai-re/contact.webp",
      "/work/mai-re/product-preview.webp",
      "/work/mai-re/about.webp",
    ],
  },
  {
    slug: "moss-and-oak",
    title: "Moss & Oak",
    tagline:
      "A full-stack e-commerce concept for a slow-living home goods brand — built end-to-end as a portfolio piece.",
    description:
      "A full-stack e-commerce build for a small-batch Indian home goods brand. Twelve routes, 28 products across 6 collections, a multi-step checkout, order tracking, an auth + account system, global search, wishlist, and a 6-piece editorial journal — all built mobile-first in 12 phases.",

    intro:
      "A full-stack e-commerce build covering the complete surface area of a real brand — from product browsing to order confirmation, from search to an editorial journal. Built end-to-end to feel complete rather than stopping at the happy path.",

    services: [
      "Mobile-first design system: terracotta, sage, and sand on a warm cream base — Fraunces serif + Inter sans",
      "Home page with editorial hero carousel, featured collections, and bestseller rails",
      "Shop grid with real-time client-side filters: category, price range, material, sort",
      "PDP with variant selection, quantity stepper, image gallery with lightbox, wishlist, and sticky mobile CTA",
      "Cart drawer (desktop) + bottom sheet (mobile) with saved-for-later, free shipping progress bar",
      "Multi-step checkout: email capture → address → payment → review — with address book and saved state",
      "Order confirmation page with animated check and order tracking stepper",
      "Auth + full account section: profile, order history, saved addresses, wishlist management",
      "Global ⌘K search dialog with keyboard navigation and no-results state",
      "Editorial journal: listing page with category filters and featured article block, article detail with pull quotes and image breakouts",
    ],

    deliverables: [
      "Production site deployed on Vercel at moss-and-oak.vercel.app",
      "12 routes — all statically generated or server-rendered as appropriate",
      "28 products across 6 collections with rich variant data",
      "6 long-form journal articles with structured content blocks",
      "Zustand-powered client state: cart, wishlist, orders, auth, addresses — all persisted in localStorage",
      "Framer Motion page transitions, scroll reveals, wishlist burst, cart badge bounce",
      "sitemap.xml and robots.txt — SEO-ready from day one",
      "TypeScript strict throughout, zero tsc errors at ship",
    ],

    challenge:
      "E-commerce projects are easy to start and hard to finish. Most concept builds stop at the product grid. This one needed to go further — all the way through to order confirmation, account management, and a journal that doesn't feel like a marketing blog. The design challenge was equally real: building something that felt like a considered brand rather than a template, without drifting into over-designed portfolio showboating. Indian e-commerce DNA (mobile-first, fast navigation, bottom sheets) had to coexist with magazine-quality editorial typography.",

    approach:
      "The site was built in 12 sequential phases, each self-contained and shipped clean before moving to the next. Design tokens first — a warm off-white base, terracotta for action, sage for accent, Fraunces for all display text — so every component felt cohesive without a design file. The shop and PDP followed patterns from Flipkart and Myntra for mobile (bottom sheets, sticky CTAs, swipe carousels) while the desktop layout used generous whitespace more common to direct-to-consumer brands. The journal was treated as a separate editorial product within the same codebase — no sidebar, no comments, pull quotes and wide image breakouts, the typography calibrated for long-form reading rather than product scanning. State is entirely client-side via Zustand with localStorage persistence: no backend, no database, fully portable as a portfolio demo.",

    outcome:
      "Shipped as a complete, production-grade concept site — 12 routes, all working end-to-end, deployed on Vercel. The purchase flow goes from product browsing to order confirmation with all the intermediate states handled: out-of-stock variants, empty cart, no orders, address book empty state. The journal publishes six genuine long-form articles on craft, materials, and seasonal living. Every interactive state is covered. The Lighthouse scores on the deployed site: Performance 72 (home, Unsplash images), 87 (PDP), Accessibility 95–96, Best Practices 100, SEO 100.",

    results: [
      { label: "Routes, fully designed and built", value: "12" },
      { label: "Products across 6 collections", value: "28" },
      { label: "Editorial journal articles", value: "6" },
      { label: "TypeScript errors at ship", value: "0" },
    ],

    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion 12",
      "Zustand",
      "Embla Carousel",
      "Vaul",
      "Lucide React",
      "Vercel",
    ],
    category: "Client Work — E-Commerce",
    year: "2026",
    liveUrl: "https://moss-and-oak.vercel.app",
    status: "live",
    featured: true,
    isClientWork: true,
    cover: "/work/moss-and-oak/cover.png",
    thumbnails: [
      "/work/moss-and-oak/hero.png",
      "/work/moss-and-oak/collection.png",
      "/work/moss-and-oak/product.png",
      "/work/moss-and-oak/product-view.png",
      "/work/moss-and-oak/add-to-cart.png",
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
    liveUrl: "https://github.com/dwakshar/humora",
    status: "open-source",
    featured: true,
    cover: "/work/humora/cover.webp",
    thumbnails: [
      "/work/humora/hero.webp",
      "/work/humora/dashboard.webp",
      "/work/humora/subscription.webp",
      "/work/humora/demo.webp",
      "/work/humora/reviews.webp",
      "/work/humora/popup.webp",
      "/work/humora/popup2.webp",
    ],
  },
  {
    slug: "chrome-perf-analyzer",
    title: "Chrome Perf Analyzer",
    tagline:
      "A DevTools extension that captures Core Web Vitals and ranks performance issues by impact — without touching the page under test.",
    description:
      "Performance debugging usually means jumping between Lighthouse, the Network tab, the Performance panel, and Coverage — manually connecting dots that should already be connected. Chrome Perf Analyzer adds a dedicated ⚡ Perf panel to DevTools that captures Core Web Vitals, detects library bloat, maps network timing phases, and ranks every issue by severity with a 0–100 score. All data flows over Chrome DevTools Protocol — no injected globals, no interference with the app under test.",

    services: [
      "Core Web Vitals capture: LCP, CLS, INP, FCP, TTFB via CDP + PerformanceObserver",
      "Performance score engine (0–100) with CRITICAL / WARNING / INFO penalty tiers",
      "Library fingerprinting across 54 known packages using a three-tier detection strategy",
      "Network waterfall renderer with named timing phases and P75/P95/P99 percentiles",
      "Long task detection tracking JavaScript blocking tasks >50ms",
      "Coverage analysis with dead code percentage and byte-savings estimates",
      "Four canvas visualizations: timeline, runtime heap, paint health, multi-metric radar",
    ],

    deliverables: [
      "Chrome MV3 DevTools extension adding a dedicated ⚡ Perf panel to the browser's native DevTools",
      "Service worker state persistence via chrome.storage.session + SESSION_HYDRATE messages on PANEL_READY — survives the 30s MV3 SW sleep kill without losing session data",
      "chrome.alarms keepalive preventing premature service worker termination during active recordings",
      "14-type discriminated-union message contract across 4 isolated contexts (service worker, devtools page, panel, content script) — no stringly-typed postMessage calls",
      "Four isolated Webpack 5 entry bundles (splitChunks: false) — each context gets an independent, minimal bundle with zero cross-contamination",
      "Library fingerprinting engine identifying 54 frameworks, UI libraries, utilities, and state managers via three-tier strategy: URL pattern matching (free), 8 KB source content scan, and Runtime.evaluate global probing",
      "Bundler detection covering webpack, Vite, Rollup, Parcel, esbuild, and Turbopack via code signatures",
      "CRITICAL issue auto-flag for testing libraries (Jest, Mocha, Cypress) detected in production bundles",
      "Network timing breakdown converting raw CDP offsets to named phases: blocked, DNS, connect, SSL, send, TTFB, receive — with P75/P95/P99 percentile aggregation",
      "Coverage analysis parsing transfer vs. parsed size; coverage below 30% triggers a CRITICAL penalty",
      "Performance score: starts at 100, CRITICAL issues dock −18 points, WARNINGs −8, INFOs −2, floor at 0",
      "55+ passing tests via ts-jest with TypeScript strict; zero runtime dependencies",
    ],

    challenge:
      "DevTools extensions operating under Manifest V3 lose their background page — replaced by a service worker that Chrome kills after 30 seconds of inactivity. For a performance recording tool, that means all captured metrics, timing data, and analysis state can vanish mid-session. The extension also needed to observe the inspected page without interfering with it: injecting globals or monkey-patching browser APIs would corrupt the very metrics it was trying to measure. And the analysis had to cross-correlate signals that Chrome normally siloes — network timing, JavaScript coverage, heap growth, long tasks, CWV observations — and rank them by actual impact rather than just reporting raw numbers.",

    approach:
      "All session state is serialised to chrome.storage.session on every meaningful update and re-hydrated via a SESSION_HYDRATE message when the panel reconnects after a service worker restart. A chrome.alarms keepalive fires during active recordings to prevent premature termination. Data collection runs entirely over Chrome DevTools Protocol — the same wire protocol Chrome uses internally — so no globals are injected and the page under test runs unmodified. The analysis engine cross-correlates CDP domains (Network, Runtime, Coverage, Performance, Tracing) into a unified issue list, then ranks each finding using a tiered penalty system: CRITICAL issues (long tasks >50ms, single bundle >200 KB, coverage <30%, testing library in prod) dock 18 points; WARNINGs dock 8; INFOs dock 2. Every issue includes a concrete recommendation and byte-savings estimate. Library fingerprinting uses a three-tier strategy that starts with free URL-pattern matching before escalating to source content scanning and Runtime.evaluate global probing — minimising overhead while maximising detection coverage across 54 known packages.",

    outcome:
      "Chrome Perf Analyzer ships as a production-quality DevTools extension with the full analysis pipeline working end-to-end: CDP connection, CWV capture, library fingerprinting, network waterfall, coverage analysis, long task tracking, and a ranked issue list with a 0–100 performance score. The panel handles service worker restarts transparently — sessions survive without data loss. The extension carries zero runtime dependencies, passes 55+ typed tests, and operates without touching the inspected page. It turns what is normally a four-tab manual investigation into a single panel with actionable, ranked output.",

    results: [
      { label: "Libraries fingerprinted (3-tier detection)", value: "54" },
      { label: "Typed message contract types across 4 contexts", value: "14" },
      { label: "Tests passing (TypeScript strict)", value: "55+" },
      { label: "Runtime dependencies", value: "0" },
    ],

    stack: [
      "Chrome MV3",
      "TypeScript 5.4",
      "Chrome DevTools Protocol",
      "Webpack 5",
      "ts-jest",
      "Canvas API",
    ],
    category: "Browser Extension — Developer Tool",
    year: "2026",
    liveUrl: "https://github.com/dwakshar/chrome-perf-analyzer",
    status: "open-source",
    featured: false,
    cover: "/work/chrome-perf-analyzer/cover.png",
    thumbnails: ["/work/chrome-perf-analyzer/hero.png"],
  },
];
