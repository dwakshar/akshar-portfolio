"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  hideIcon?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-flush text-ink font-semibold hover:bg-blush hover:shadow-[0_0_24px_rgba(255,31,143,0.35)] transition-[background-color,box-shadow] duration-300",
  ghost:
    "bg-transparent border border-hairline text-bone hover:border-bone/20 transition-colors duration-300",
  glass:
    "bg-white/5 backdrop-blur-md border border-hairline text-bone hover:bg-white/10 transition-colors duration-300",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-2",
  md: "text-base px-5 py-3 gap-2.5",
  lg: "text-lg px-7 py-4 gap-3",
};

const iconSizeStyles: Record<Size, string> = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
};

const iconInnerStyles: Record<Size, string> = {
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5",
  lg: "w-4 h-4",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  hideIcon = false,
  href,
  className,
  children,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center rounded-pill font-sans transition-colors duration-200 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const iconContainerClass = cn(
    "rounded-full flex items-center justify-center shrink-0",
    iconSizeStyles[size],
    variant === "primary" ? "bg-ink/20" : "bg-white/10"
  );

  const content = (
    <>
      <span>{children}</span>
      {!hideIcon && (
        <span className={iconContainerClass}>
          {icon ?? <ArrowRight className={iconInnerStyles[size]} />}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="inline-block"
      >
        <Link href={href} className={baseClass}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </motion.button>
  );
}
