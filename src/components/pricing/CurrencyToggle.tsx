"use client";

import { motion } from "framer-motion";
import { useCurrency } from "./CurrencyContext";
import type { Currency } from "@/data/pricing";

const OPTIONS: { value: Currency; label: string }[] = [
  { value: "USD", label: "USD" },
  { value: "INR", label: "INR" },
];

export default function CurrencyToggle({ instanceId = "default" }: { instanceId?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Currency selector"
      className="inline-flex items-center rounded-pill border border-hairline bg-white/5 p-1 gap-0.5"
    >
      {OPTIONS.map(({ value, label }) => {
        const isActive = currency === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setCurrency(value)}
            className="relative px-4 py-1.5 rounded-pill text-sm font-sans font-medium cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId={`currency-pill-${instanceId}`}
                className="absolute inset-0 rounded-pill bg-flush"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-ink" : "text-bone-dim hover:text-bone"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
