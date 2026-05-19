import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/providers/MotionProvider";
import PageTransition from "@/components/providers/PageTransition";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { TawkChat } from "@/components/chat/TawkChat";
import Cursor from "@/components/ui/Cursor";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "../../public/fonts/archivo-vf.woff2",
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Akshar Sharma · Freelance Web Developer & Designer",
    template: "%s — Akshar Sharma",
  },
  description:
    "Freelance web designer & developer building high-performance, conversion-focused websites for ambitious businesses. 6+ years experience. Based in India, working globally.",
  openGraph: {
    siteName: "Akshar Sharma",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Akshar Sharma — Freelance Web Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  // P11: add real favicon + apple-touch-icon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-ink">
        {/* Skip-to-content — visually hidden until focused */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-flush focus:text-ink focus:font-sans focus:text-sm focus:font-semibold">
          Skip to content
        </a>
        <MotionProvider>
          <SmoothScroll>
            <Cursor />
            <Navbar />
            <PageTransition>
              <main id="main" className="flex-1 pt-16">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
        <TawkChat />
      </body>
    </html>
  );
}
