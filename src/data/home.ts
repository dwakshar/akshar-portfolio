export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tagline?: string;
  longDescription?: string;
  outcomes?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const services: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design",
    description:
      "First impressions are everything online. I design visually stunning, strategically crafted interfaces that guide your visitors toward action — whether that's booking a call, making a purchase, or reaching out.",
    deliverables: [
      "Custom UI/UX design",
      "Mobile-first responsive layouts",
      "Interactive prototypes",
      "Design system & component library",
      "Brand-aligned visual language",
      "Conversion-optimised page flows",
    ],
    tagline: "Interfaces that convert.",
    longDescription:
      "Your website is your most powerful sales tool — if it's designed right. I create visually striking, strategically structured interfaces that communicate your value instantly and guide visitors toward the actions that matter most. Every layout, colour choice, and interaction is deliberate — nothing is decoration for decoration's sake.",
    outcomes: [
      "A site that wins clients before they even make contact",
      "Consistent brand experience across every device and screen size",
      "Clear user journeys engineered to drive conversion",
      "A design system your team can confidently build on",
    ],
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    description:
      "Beautiful design means nothing if it doesn't perform. I build fast, accessible, production-ready websites using modern frameworks — code that's clean, maintainable, and built to scale as your business grows.",
    deliverables: [
      "Next.js / React development",
      "CMS integration (Sanity, Contentful)",
      "API & third-party integrations",
      "Performance optimisation (Core Web Vitals)",
      "Secure, scalable architecture",
      "Full deployment & handoff",
    ],
    tagline: "Fast, clean, built to last.",
    longDescription:
      "Great design needs an equally great engine. I build production-ready sites with modern frameworks — clean code, smart architecture, and obsessive attention to performance. The result is a site that loads instantly, scales without drama, and won't need a ground-up rebuild every 18 months.",
    outcomes: [
      "Sub-second load times that keep visitors engaged and bouncing less",
      "Code your future team can maintain and confidently extend",
      "Seamless integrations with the tools you already rely on",
      "An architecture that grows with your business without accumulating debt",
    ],
  },
  {
    id: "seo-performance",
    number: "03",
    title: "SEO & Performance",
    description:
      "A site no one can find is a site that doesn't work. I bake SEO best practices and performance budgets directly into the build — so your site ranks, loads instantly, and keeps visitors engaged long enough to convert.",
    deliverables: [
      "Technical SEO audit & fixes",
      "Core Web Vitals optimisation",
      "Structured data & schema markup",
      "Lighthouse score 90+",
      "Content & metadata strategy",
      "Ongoing performance monitoring",
    ],
    tagline: "Found. Fast. First.",
    longDescription:
      "Rankings don't happen by accident — and bolting SEO on after launch is always more expensive than building it in. I weave technical SEO and performance directly into the build: structured data, semantic markup, Core Web Vitals, and page speed. Your site doesn't just look good; it performs where it counts.",
    outcomes: [
      "Higher organic rankings that reduce your dependence on paid ads",
      "Faster load times that lower bounce rate and lift conversions",
      "Search visibility that compounds month over month",
      "Scores that impress both clients and search algorithms",
    ],
  },
  {
    id: "branding",
    number: "04",
    title: "Branding & Identity",
    description:
      "Your brand is more than a logo — it's the feeling people get every time they interact with your business. I craft cohesive visual identities that communicate your values instantly and make you unmistakable in your market.",
    deliverables: [
      "Logo design & variations",
      "Colour & typography system",
      "Brand guidelines document",
      "Social media kit",
      "Stationery & collateral design",
      "Tone of voice guidelines",
    ],
    tagline: "Unmistakable from day one.",
    longDescription:
      "Your brand is the shortcut people take to decide if they trust you. I build cohesive visual identities — from logo to colour system to tone of voice — that instantly communicate your values and make you stand out in a crowded market. The kind of brand that makes people stop scrolling.",
    outcomes: [
      "A visual identity your audience recognises instantly across every touchpoint",
      "Brand guidelines your team can follow without you in the room",
      "Consistent presentation that builds trust and premium perception",
      "A visual language that still feels right five years from now",
    ],
  },
  {
    id: "ongoing-support",
    number: "05",
    title: "Ongoing Support & Care",
    description:
      "Launching your site is just the beginning. With a care plan, I'm your dedicated technical partner — handling updates, monitoring performance, shipping new features, and keeping everything running at its best.",
    deliverables: [
      "Monthly content updates",
      "Security patches & monitoring",
      "Performance reviews & reporting",
      "A/B testing & CRO tweaks",
      "Priority support & fast response",
      "Monthly analytics summary",
    ],
    tagline: "Your site, always at its best.",
    longDescription:
      "Launch day is just the beginning. As your dedicated technical partner on retainer, I handle everything from content updates and security patches to CRO experiments and new feature releases — so you can focus on running your business, not your website. Fast response, no support-ticket queues, no strangers touching your codebase.",
    outcomes: [
      "Zero downtime with proactive monitoring and rapid incident response",
      "Regular improvements shipped without a full project cycle",
      "Performance data that informs real business decisions",
      "A technical partner who knows your site inside out — from day one",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "James Whitfield",
    role: "Founder",
    company: "Whitfield Property Group",
    rating: 5.0,
    quote:
      "Akshar completely transformed our online presence. Our enquiry rate doubled within the first month of launch — the attention to detail and speed of delivery were both outstanding.",
    avatar: "/testimonials/james-whitfield.png",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Head of Marketing",
    company: "Nova Interiors",
    rating: 5.0,
    quote:
      "Working with Akshar felt less like hiring a freelancer and more like having a co-founder who actually cared about the outcome. He pushed back when our ideas weren't the best — the final product is so much better for it.",
    avatar: "/testimonials/priya-nair.png",
  },
  {
    id: "t3",
    name: "Tom Reeves",
    role: "CEO",
    company: "Apex Media",
    rating: 5.0,
    quote:
      "Our old site was slow, outdated, and embarrassing to share. The new one loads in under a second and looks incredible on every device. Akshar nailed the brief on the very first round.",
    avatar: "/testimonials/tom-reeves.png",
  },
  {
    id: "t4",
    name: "Sarah Okonkwo",
    role: "Operations Director",
    company: "Greenpath Consulting",
    rating: 5.0,
    quote:
      "The SEO work alone paid for the entire project within three months. We went from page four to ranking in the top three for our main keywords. Absolutely worth every penny.",
    avatar: "/testimonials/sarah-okonkwo.png",
  },
  {
    id: "t5",
    name: "Lena Brauer",
    role: "Co-founder",
    company: "Luxe Boutique",
    rating: 5.0,
    quote:
      "I've worked with a lot of designers over the years — Akshar is the first one who consistently over-delivered. He thinks like a business owner, not just a designer. Will definitely work together again.",
    avatar: "/testimonials/lena-brauer.png",
  },
  {
    id: "t6",
    name: "Marcus Chen",
    role: "Product Manager",
    company: "TechNova",
    rating: 5.0,
    quote:
      "Communication was excellent throughout. He kept us informed at every stage, hit every deadline, and the end result was better than anything we'd imagined. Highly recommended.",
    avatar: "/testimonials/marcus-chen.png",
  },
];
