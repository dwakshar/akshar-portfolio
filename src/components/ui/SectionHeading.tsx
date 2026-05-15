import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className
      )}>
      <div
        className={cn("flex flex-col", align === "center" && "items-center")}>
        <span className="font-sans text-sm font-medium text-flush tracking-widest uppercase">
          {eyebrow}
        </span>
        <h2
          className={cn(
            "font-display font-black text-bone leading-[0.92] tracking-tight",
            "text-[clamp(2.4rem,6vw,5rem)]"
          )}>
          {title}
        </h2>
      </div>
      {action && (
        <div
          className={cn(
            "hidden md:block shrink-0",
            align === "center" && "mt-2"
          )}>
          {action}
        </div>
      )}
    </div>
  );
}
