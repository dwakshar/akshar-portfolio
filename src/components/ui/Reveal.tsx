"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade" | "rise" | "reveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
  margin?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  className,
  variant = "rise",
  margin = "-10%",
}: RevealProps) {
  const initial =
    variant === "fade"
      ? { opacity: 0 }
      : variant === "reveal"
      ? { opacity: 0, y: 30 }
      : { opacity: 0, y: 20 };

  const animate =
    variant === "fade" ? { opacity: 1 } : { opacity: 1, y: 0 };

  const duration = variant === "reveal" ? 1.0 : 0.8;

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
