import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import AboutStrip from "@/components/sections/AboutStrip";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import SelectedWork from "@/components/sections/SelectedWork";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akshar Sharma · Freelance Web Developer & Designer",
  description:
    "Freelance web designer & developer building high-performance, conversion-focused websites. 6+ years experience. One point of contact, fast turnaround, code that holds up.",
  openGraph: {
    title: "Akshar Sharma · Freelance Web Developer & Designer",
    description:
      "Freelance web designer & developer building high-performance, conversion-focused websites. 6+ years experience. Based in India, working globally.",
    type: "website",
  },
  twitter: {
    title: "Akshar Sharma · Freelance Web Developer & Designer",
    description:
      "Freelance web designer & developer building high-performance, conversion-focused websites. 6+ years experience.",
  },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
      <Testimonials />
      <ContactCTA />
    </>
  );
}
