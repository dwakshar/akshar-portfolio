import AboutStrip from "@/components/sections/AboutStrip";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import StatsMarquee from "@/components/sections/StatsMarquee";
import Commitments from "@/components/sections/Commitments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akshar Sharma · Mobile Developer, UX/UI Designer & Web Developer",
  description:
    "Freelance mobile developer, UX/UI designer, and web developer based in India. I build apps and digital products that people actually want to use — one project at a time, with full attention.",
  openGraph: {
    title: "Akshar Sharma · Mobile Developer, UX/UI Designer & Web Developer",
    description:
      "Freelance mobile developer, UX/UI designer, and web developer based in India. Building apps and digital products with full attention on every project.",
    type: "website",
  },
  twitter: {
    title: "Akshar Sharma · Mobile Developer, UX/UI Designer & Web Developer",
    description:
      "Freelance mobile developer, UX/UI designer, and web developer based in India. Building apps and digital products with full attention on every project.",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshar Sharma",
  url: siteUrl,
  jobTitle: "Freelance Web Developer & Designer",
  sameAs: [
    "https://x.com/dwakshar",
    "https://www.linkedin.com/in/dwakshar/",
    "https://github.com/dwakshar",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsMarquee />
      <AboutStrip />
      <ClientsMarquee />
      <SelectedWork />
      <ServicesAccordion />
      <Commitments />
      <ContactCTA />
    </>
  );
}
