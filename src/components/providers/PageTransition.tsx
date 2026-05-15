"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Module-level: true on first client load, false after first mount.
// Safe: never runs on server (no useEffect), StrictMode-safe (not reset on double-invoke).
let firstLoad = true;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initial = firstLoad ? false : { opacity: 0 };

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={initial}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
