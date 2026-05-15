import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
}

export default function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-hairline bg-white/5 px-3 py-1 text-xs font-sans text-bone-dim tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
}
