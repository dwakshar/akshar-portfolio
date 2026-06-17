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
    id: "mobile-development",
    number: "01",
    title: "Mobile Development",
    description:
      "Most of the world lives on a phone. I build cross-platform mobile apps that feel native, perform fast, and ship to both iOS and Android — from a single, maintainable codebase without the usual trade-offs.",
    deliverables: [
      "React Native / Expo development",
      "iOS & Android deployment",
      "Offline support & local storage",
      "Push notifications & deep linking",
      "API & backend integrations",
      "App Store & Play Store submission",
    ],
    tagline: "Native feel. Cross-platform efficiency.",
    longDescription:
      "Your users are on their phones — your product should be too. I build cross-platform mobile applications using React Native and Expo that look and behave like native apps on both iOS and Android. Smooth animations, responsive layouts, reliable offline behaviour, and clean architecture that your team can extend without starting over.",
    outcomes: [
      "A single codebase that ships to iOS and Android without compromise",
      "App Store and Play Store ready, with all the compliance and submission handled",
      "Performant animations and interactions that feel genuinely native",
      "Architecture that scales as your feature set grows",
    ],
  },
  {
    id: "ux-ui-design",
    number: "02",
    title: "UX/UI Design",
    description:
      "Good design is invisible — users just find it easy. I research, map, and design interfaces for mobile apps and web products that reduce friction, build trust, and guide users toward the outcomes that matter.",
    deliverables: [
      "User research & journey mapping",
      "Wireframes & information architecture",
      "High-fidelity UI design (Figma)",
      "Interactive prototypes",
      "Design system & component library",
      "Handoff-ready specs & assets",
    ],
    tagline: "Designed to be used, not just admired.",
    longDescription:
      "The best interface is one users never have to think about. I start with research — understanding who your users are, what they're trying to do, and where existing products fail them. From there I design systems, not screens: consistent components, clear hierarchies, and interaction patterns that carry through every state and edge case.",
    outcomes: [
      "Interfaces users find intuitive on first open — no learning curve",
      "A design system that keeps your product consistent as it scales",
      "Prototypes you can test with real users before writing a line of code",
      "Handoff documentation that cuts developer guesswork in half",
    ],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    description:
      "Fast, accessible, and built to last. I develop web applications and sites using modern frameworks — clean code, sensible architecture, and enough performance obsession to make a difference in the real world.",
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
      "A well-built web product is invisible in the best way — it loads instantly, works on every device, and gives users no reason to leave. I build production-ready sites and web apps with Next.js and React: clean code, smart architecture, and performance baked in from the start, not bolted on at the end.",
    outcomes: [
      "Sub-second load times that keep users engaged and reduce bounce",
      "Code your future team can maintain and confidently extend",
      "Seamless integrations with the tools and APIs you already rely on",
      "An architecture that grows with your product without accumulating debt",
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
