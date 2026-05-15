import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/nav";
import { Briefcase, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const socials = [
  { label: "Twitter / X", href: "https://x.com/dwakshar", Icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/dwakshar", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dwakshar/", Icon: Briefcase },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-hairline overflow-hidden">
      {/* Top zone — CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-hairline">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-medium text-flush tracking-widest uppercase">
              ✦ Let&apos;s Build Together
            </span>
            <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight text-bone leading-[0.92]">
              Not just a website,
              <br />
              real business results.
            </h2>
          </div>
          <div className="shrink-0">
            <Button href="/contact" size="lg" className="hidden sm:inline-flex">
              Start a Project
            </Button>
            <Button href="/contact" size="md" className="sm:hidden">
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Middle zone — three columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-hairline">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand blurb */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-medium text-2xl uppercase tracking-tight text-bone">
              Akshar Sharma
            </span>
            <p className="font-sans text-bone-dim text-sm leading-relaxed max-w-xs">
              Freelance web designer &amp; developer crafting high-performance,
              conversion-focused websites for ambitious businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold text-bone tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-bone-dim hover:text-bone transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold text-bone tracking-widest uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:akshar2.dnd@gmail.com"
                  className="flex items-center gap-2.5 font-sans text-sm text-bone-dim hover:text-bone transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-flush" />
                  akshar2.dnd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-2.5 font-sans text-sm text-bone-dim hover:text-bone transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-flush" />
                  +91 98715 63366
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2.5 mt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-hairline text-bone-dim hover:text-bone hover:border-white/20 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom zone — giant wordmark */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
          <p
            className="font-display text-center font-black uppercase tracking-tight leading-none select-none text-[clamp(4.5rem,16vw,20rem)] text-white/[0.06]"
            aria-hidden="true"
            style={{ margin: "-0.1em" }}>
            AKSHAR
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-sans text-xs text-bone-dim">
              © 2026 Akshar Sharma — All rights reserved
            </span>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-bone-dim hover:text-bone transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
