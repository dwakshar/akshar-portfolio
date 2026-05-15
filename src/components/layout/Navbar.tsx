"use client";

import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/"
              className="font-display font-medium text-2xl uppercase tracking-tight text-bone">
              AKSHAR SHARMA
            </Link>

            {/* Center nav — desktop only */}
            <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-hairline rounded-pill px-1 py-1 gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 font-sans text-sm rounded-pill transition-colors duration-200 ${
                      isActive
                        ? "text-ink font-semibold"
                        : "text-bone-dim hover:text-bone"
                    }`}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-flush rounded-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA — desktop only */}
            <div className="hidden lg:flex items-center">
              <Button href="/contact" size="sm">
                Start a Project
              </Button>
            </div>

            {/* Hamburger — mobile only */}
            <motion.button
              ref={hamburgerRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-hairline text-bone"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              <span className="relative flex flex-col justify-center items-center w-5 h-5">
                <span
                  className="absolute block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    transform: mobileOpen
                      ? "rotate(45deg)"
                      : "translateY(-5px)",
                  }}
                />
                <span
                  className="absolute block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                <span
                  className="absolute block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    transform: mobileOpen
                      ? "rotate(-45deg)"
                      : "translateY(5px)",
                  }}
                />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerRef={hamburgerRef}
      />
    </>
  );
}
