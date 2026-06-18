"use client";

import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/nav";
import { Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({
  isOpen,
  onClose,
  triggerRef,
}: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key + focus restoration
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, triggerRef]);

  // Auto-focus first link when menu opens
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const first = menuRef.current.querySelector<HTMLElement>("a, button");
    first?.focus();
  }, [isOpen]);

  // Focus trap: cycle Tab/Shift+Tab within menu
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !menuRef.current) return;
    const focusable = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-ink flex flex-col">
          {/* Spacer to account for fixed navbar height */}
          <div className="h-16" />

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-0">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{
                    delay: 0.08 + i * 0.055,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block font-display font-medium text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none py-1 transition-colors focus-visible:outline-none focus-visible:text-flush ${
                      isActive ? "text-flush" : "text-bone hover:text-bone-dim"
                    }`}>
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.42,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-6 pb-10">
            <div className="flex flex-col gap-3">
              <Button href="/contact" size="lg" className="w-full justify-center">
                Start a Project
              </Button>
              <Button
                href="https://drive.google.com/file/d/15PohY4regGHHzk6oYah26lx03B11Mwt_/view?usp=sharing"
                variant="glass"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                className="w-full justify-center">
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
