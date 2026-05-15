"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  glass?: boolean;
  noHover?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Card({
  glass = false,
  noHover = false,
  className,
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={noHover ? undefined : { y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 180, damping: 28 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-hairline shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        glass ? "bg-white/5 backdrop-blur-md" : "bg-ink-soft",
        className
      )}>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[65%]"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(255,31,143,0.95) 0%, rgba(161,17,106,0.80) 25%, rgba(100,10,60,0.55) 55%, transparent 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
