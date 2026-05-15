export type Category =
  | "Web Design"
  | "Web Development"
  | "Landing Page"
  | "Ecommerce";

export interface ResultStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: number;
  category: Category;
  tagline: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  // Case study fields
  intro: string;
  services: string[];
  deliverables: string[];
  challenge: string;
  approach: string;
  outcome: string;
  results: ResultStat[];
  gallery: string[];
  liveUrl?: string;
  nextSlug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "brandcraft-agency",
    title: "BrandCraft Agency",
    client: "BrandCraft",
    year: 2024,
    category: "Web Design",
    tagline: "Redesigned agency site that tripled inbound lead volume",
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Figma", "Next.js", "Framer Motion"],
    featured: true,
    intro:
      "BrandCraft came to me with a dated website that failed to reflect their bold, creative identity. The goal was a full redesign that would command attention, communicate their value proposition instantly, and turn visitors into leads. The result raised the bar for what a boutique creative agency site can look like.",
    services: [
      "Brand strategy",
      "UI / UX design",
      "Next.js development",
      "Motion design",
      "Copywriting",
    ],
    deliverables: [
      "Fully responsive website",
      "Figma design system",
      "Custom animation library",
      "CMS integration",
      "Analytics setup",
    ],
    challenge:
      "BrandCraft's existing site was visually generic and structurally cluttered. Visitors bounced within seconds because the value proposition was buried and the navigation was confusing. The team needed a site that felt as polished and inventive as their client work — without sacrificing clarity or conversion.",
    approach:
      "I started with a three-week discovery sprint: stakeholder interviews, competitor audits, and heatmap analysis of the old site. From there I built a lean information architecture, focusing each section on a single job to be done. Visually, I leaned into bold typography, constrained colour, and purposeful motion — every animation earns its place by guiding attention, not just decorating the page. Development used Next.js App Router with Framer Motion for silky-smooth page transitions.",
    outcome:
      "The site launched to immediate internal acclaim and, more importantly, an immediate uptick in qualified enquiries. Within 90 days BrandCraft had tripled their inbound lead volume and reduced their sales cycle by nearly a week, because prospects arrived already educated on BrandCraft's process and portfolio.",
    results: [
      { label: "Inbound leads", value: "+210%" },
      { label: "Bounce rate", value: "−34%" },
      { label: "Session duration", value: "+2.1×" },
      { label: "Organic traffic", value: "+85%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=85",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&q=85",
    ],
    liveUrl: "https://example.com",
    nextSlug: "freshmart-ecommerce",
  },
  {
    id: "2",
    slug: "freshmart-ecommerce",
    title: "FreshMart Online Store",
    client: "FreshMart",
    year: 2024,
    category: "Ecommerce",
    tagline: "Full ecommerce platform delivering 40% higher conversion rate",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Shopify", "Custom Theme", "UX Design"],
    featured: true,
    intro:
      "FreshMart is a regional grocery chain moving into online retail. They needed a custom Shopify storefront that matched the warmth of their in-store experience while being fast enough to win on mobile — where 71% of their customers shop. The project spanned UX research, custom theme development, and checkout optimisation.",
    services: [
      "UX research & strategy",
      "Custom Shopify theme",
      "Checkout optimisation",
      "Performance tuning",
      "Email flow setup",
    ],
    deliverables: [
      "Custom Shopify theme",
      "Mobile-first product pages",
      "Optimised checkout flow",
      "Automated email sequences",
      "Store analytics dashboard",
    ],
    challenge:
      "The default Shopify themes FreshMart tried felt impersonal and cluttered. Product discovery was poor — customers couldn't easily browse by dietary preference or meal type — and the checkout had a 68% abandonment rate on mobile. The brand needed a bespoke storefront that put freshness and trust front and centre.",
    approach:
      "User interviews with 22 FreshMart shoppers revealed that trust signals (origin labelling, freshness indicators) and fast filtering were the two biggest friction points. I rebuilt the product architecture around these insights: a faceted filter system, prominent farm-to-table provenance badges, and a streamlined three-step checkout. Every Liquid template was hand-optimised; the result hit a 94 Lighthouse performance score on mobile.",
    outcome:
      "Within six weeks of launch, FreshMart's conversion rate climbed 40% and cart abandonment on mobile dropped by 27 percentage points. The automated post-purchase email sequences added a meaningful repeat-purchase lift, and the store is now FreshMart's single largest revenue channel.",
    results: [
      { label: "Conversion rate", value: "+40%" },
      { label: "Cart abandonment", value: "−27%" },
      { label: "Mobile revenue", value: "+3.2×" },
      { label: "Lighthouse score", value: "94/100" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=85",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&q=85",
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1200&q=85",
    ],
    liveUrl: "https://example.com",
    nextSlug: "pulse-fitness",
  },
  {
    id: "3",
    slug: "pulse-fitness",
    title: "Pulse Fitness Landing",
    client: "Pulse Fitness",
    year: 2023,
    category: "Landing Page",
    tagline: "High-converting landing page achieving a 28% signup rate",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["React", "GSAP", "CRO"],
    featured: true,
    intro:
      "Pulse Fitness was preparing to launch a new digital membership tier and needed a single-page experience that would convert cold traffic from paid ads into subscribers. The brief was clear: fast, focused, and impossible to ignore. The landing page they got hit a 28% signup rate — more than double the industry average.",
    services: [
      "Conversion strategy",
      "Copywriting",
      "UI design",
      "React development",
      "A/B testing setup",
    ],
    deliverables: [
      "High-performance landing page",
      "GSAP scroll animations",
      "A/B test variants",
      "Heatmap integration",
      "Analytics event tracking",
    ],
    challenge:
      "Paid fitness ads land on generic pages that fail to maintain the emotional momentum of the ad creative. Pulse's previous landing page had a 9% signup rate, with drop-off concentrated in the pricing section — users weren't convinced the membership value matched the cost. Every element needed to earn its place.",
    approach:
      "I ran a teardown of the existing page against the ad creative, identifying five major message mismatches. The new page opens with the exact transformation promise from the ads, then systematically addresses every objection: proof of results, social proof, transparent pricing with a clear value anchor, and a low-friction CTA. GSAP scroll-driven animations keep momentum high without distracting from the copy. The page was split-tested across three headline variants before settling on the winner.",
    outcome:
      "The winning variant achieved a 28% signup rate on cold paid traffic — 3.1× the previous page's performance. Pulse Fitness recouped their entire campaign budget in the first two weeks post-launch and has since scaled ad spend 4× on the back of this page.",
    results: [
      { label: "Signup rate", value: "28%" },
      { label: "vs. previous page", value: "+3.1×" },
      { label: "Cost per acquisition", value: "−58%" },
      { label: "Ad spend scaled", value: "4×" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=85",
    ],
    liveUrl: "https://example.com",
    nextSlug: "technova-saas",
  },
  {
    id: "4",
    slug: "technova-saas",
    title: "TechNova SaaS Dashboard",
    client: "TechNova",
    year: 2024,
    category: "Web Development",
    tagline: "Custom analytics dashboard that reduced client churn by 22%",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Prisma"],
    featured: true,
    intro:
      "TechNova provides marketing intelligence software to mid-market brands. Their users were churning because the default reporting views were overwhelming and failed to surface the insights that mattered. I designed and built a bespoke analytics dashboard that made data clarity the primary UX principle — and churn dropped 22% within a quarter.",
    services: [
      "Product design",
      "Full-stack development",
      "Data visualisation",
      "API integration",
      "Performance optimisation",
    ],
    deliverables: [
      "Next.js dashboard application",
      "Custom chart components",
      "Real-time data pipeline",
      "Role-based access control",
      "Onboarding flow",
    ],
    challenge:
      "TechNova's existing dashboard was a grid of 40+ charts, all weighted equally. Power users had built workarounds in spreadsheets because the in-app reports couldn't answer the questions they actually cared about. Meanwhile, new users were churning within 14 days because they couldn't find value fast enough. The product needed a ground-up rethink of information hierarchy.",
    approach:
      "I embedded with TechNova's customer success team for two weeks, running session recordings and interviews with both churned and retained users. The clearest insight: retained users all had a personal 'north-star metric' they checked daily. The new dashboard surfaces each user's most-watched metric front and centre, with supporting context collapsed by default. Built with Next.js App Router, Prisma, and a custom WebSocket layer for real-time updates — fully typed end-to-end.",
    outcome:
      "Churn dropped 22% in the first 90 days post-launch. Time-to-value for new users halved, and NPS climbed 18 points. TechNova's enterprise sales team reported that the redesigned dashboard became a key differentiator in competitive deals.",
    results: [
      { label: "Churn reduction", value: "−22%" },
      { label: "Time-to-value", value: "−50%" },
      { label: "NPS improvement", value: "+18 pts" },
      { label: "Daily active users", value: "+67%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=85",
    ],
    nextSlug: "luxe-boutique",
  },
  {
    id: "5",
    slug: "luxe-boutique",
    title: "Luxe Boutique Store",
    client: "Luxe Boutique",
    year: 2023,
    category: "Ecommerce",
    tagline: "Premium fashion store with a seamless, high-end checkout flow",
    thumbnail:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    tags: ["WooCommerce", "UI Design", "PHP"],
    featured: false,
    intro:
      "Luxe Boutique is an independent fashion retailer whose online store needed to match the elegance of their physical shopfront. Their WooCommerce install had accumulated years of plugin bloat and a checkout flow that undermined the premium feel they'd worked to build in-store. The rebuild raised AOV by 31% and gave the brand a digital home they're genuinely proud of.",
    services: [
      "UI / UX design",
      "WooCommerce development",
      "Custom PHP templating",
      "Performance audit & optimisation",
      "Checkout UX redesign",
    ],
    deliverables: [
      "Custom WooCommerce theme",
      "Redesigned checkout flow",
      "Product photography guidelines",
      "Style guide & component library",
      "Performance-optimised stack",
    ],
    challenge:
      "The existing store loaded in 6.2 seconds on mobile and looked nothing like the brand's editorial identity. The checkout had seven steps, required account creation, and had a generic layout that eroded the premium positioning built up through the rest of the experience. Customers who reached checkout were abandoning at nearly 60%.",
    approach:
      "I stripped the WooCommerce setup back to essentials: audited and replaced 14 plugins with bespoke PHP, rebuilt every template from scratch, and compressed the checkout to three steps with guest checkout as the default. Visually, I took cues from luxury editorial design — generous whitespace, restrained typography, large imagery — and translated that into a WooCommerce theme that feels hand-crafted rather than templated.",
    outcome:
      "Page load time dropped from 6.2s to 1.8s. Checkout abandonment fell from 58% to 31%, and average order value climbed 31% — attributed to the improved product presentation and a redesigned upsell moment at cart review. Luxe Boutique now runs their entire online operation on the rebuilt stack with zero plugin conflicts.",
    results: [
      { label: "Page load time", value: "1.8s" },
      { label: "Checkout abandonment", value: "−27 pts" },
      { label: "Average order value", value: "+31%" },
      { label: "Plugin count", value: "14 → 3" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=85",
    ],
    liveUrl: "https://example.com",
    nextSlug: "greenpath-consulting",
  },
  {
    id: "6",
    slug: "greenpath-consulting",
    title: "Greenpath Consulting",
    client: "Greenpath",
    year: 2023,
    category: "Web Design",
    tagline: "Corporate rebrand that boosted inquiry rate and trust scores",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Webflow", "Figma", "Branding"],
    featured: false,
    intro:
      "Greenpath Consulting helps mid-size organisations navigate ESG compliance and sustainability reporting. Despite their deep expertise, their digital presence read as generic and untrustworthy — a mismatch that was costing them enterprise deals. A full brand and web overhaul repositioned them as the credible, forward-thinking authority their clients already knew them to be.",
    services: [
      "Brand identity",
      "Visual design",
      "Webflow development",
      "Content strategy",
      "SEO foundations",
    ],
    deliverables: [
      "Brand identity system",
      "Webflow website",
      "Icon & illustration set",
      "Content templates",
      "SEO audit & implementation",
    ],
    challenge:
      "Greenpath's site was a Wix template with inconsistent typography, stock photography that could belong to any industry, and no clear articulation of what made their methodology different. Enterprise prospects were doing their due diligence and moving on to better-presented competitors. The word used most often in client feedback was: 'untrustworthy.'",
    approach:
      "Brand-first, always. I spent the first three weeks on identity: developing a visual language rooted in clarity and credibility — clean geometry, a confident green-to-slate palette, and editorial photography that showed real client environments. The Webflow build was structured around Greenpath's sales funnel, with a clear pathway from 'what we do' to 'how we do it' to 'talk to us'. Every page had a single primary CTA and supporting proof points.",
    outcome:
      "Inquiry rate increased 178% in the first quarter after launch. Independent brand trust surveys (commissioned by Greenpath) showed a 44-point improvement in perceived credibility among their target audience. Two enterprise clients specifically cited the website as a reason they shortlisted Greenpath over competitors.",
    results: [
      { label: "Inquiry rate", value: "+178%" },
      { label: "Brand trust score", value: "+44 pts" },
      { label: "Avg. time on site", value: "+3.4×" },
      { label: "Enterprise deals", value: "+2 direct" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=85",
    ],
    liveUrl: "https://example.com",
    nextSlug: "brandcraft-agency",
  },
];
