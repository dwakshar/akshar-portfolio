"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one full loop
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
}

export default function Marquee({
  children,
  speed = 30,
  className,
  itemClassName,
  reverse = false,
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={cn("overflow-hidden w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          animationDirection: reverse ? "reverse" : "normal",
        }}>
        <div className={cn("flex items-center gap-8 pr-8", itemClassName)}>
          {children}
        </div>
        <div
          className={cn("flex items-center gap-8 pr-8", itemClassName)}
          aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
