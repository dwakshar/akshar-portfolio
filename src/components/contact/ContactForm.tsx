"use client";

import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const inputClass =
  "bg-transparent w-full border-0 border-b border-hairline focus:border-flush focus:outline-none text-bone placeholder:text-bone-dim transition-colors duration-200 py-3 font-sans text-base";
const labelClass =
  "block font-sans text-xs text-bone-dim uppercase tracking-widest mb-2";

// ── Custom Select ────────────────────────────────────────────────────────────

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  onInteract?: () => void;
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  hasError,
  onInteract,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  const borderColor = hasError
    ? "var(--color-flush)"
    : open
    ? "var(--color-flush)"
    : "var(--color-hairline)";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          type="button"
          id={id}
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => {
            setOpen((v) => !v);
            onInteract?.();
          }}
          className="w-full flex items-center justify-between border-b py-3 text-left focus:outline-none transition-colors duration-200 group"
          style={{ borderColor }}>
          <span
            className={`font-sans text-base transition-colors duration-200 ${
              selectedLabel ? "text-bone" : "text-bone-dim"
            }`}>
            {selectedLabel ?? placeholder}
          </span>

          <span
            className={`shrink-0 transition-all duration-[220ms] ease-in-out ${
              open ? "text-flush rotate-180" : "text-bone-dim group-hover:text-bone rotate-0"
            }`}>
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>

        {hasError && !open && (
          <p className="font-sans text-[11px] text-flush mt-1">
            Please select an option.
          </p>
        )}

        {/* Dropdown panel */}
        <AnimatePresence>
          {open && (
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-50 top-full mt-2 left-0 right-0 rounded-xl overflow-hidden border border-hairline bg-ink shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {options.map((option, i) => {
                const isSelected = value === option.value;
                return (
                  <li
                    key={option.value}
                    className={
                      i < options.length - 1 ? "border-b border-hairline" : ""
                    }>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        onChange(option.value);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 font-sans text-sm text-left transition-colors duration-150 ${
                        isSelected
                          ? "text-flush bg-flush/5"
                          : "text-bone-dim hover:text-bone hover:bg-white/[0.04]"
                      }`}>
                      <span>{option.label}</span>
                      {isSelected && (
                        <span className="text-flush text-xs shrink-0">✦</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Success state ────────────────────────────────────────────────────────────

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-6 py-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-20 h-20 rounded-full bg-flush flex items-center justify-center shrink-0">
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <motion.path
            d="M10 20 L18 28 L30 14"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.35, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <div className="flex flex-col gap-2">
        <h2
          className="font-display text-bone"
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontVariationSettings: '"wdth" 65',
            lineHeight: 0.92,
          }}>
          Message sent.
        </h2>
        <p className="font-sans text-bone-dim text-sm leading-relaxed max-w-xs mx-auto">
          I&apos;ll reply within 24 hours. While you wait, peek at my{" "}
          <Link
            href="/work"
            className="text-flush hover:text-blush transition-colors duration-200">
            recent work
          </Link>
          .
        </p>
      </div>

      <Button variant="ghost" size="sm" onClick={onReset} hideIcon>
        Send another message
      </Button>
    </motion.div>
  );
}

// ── Option data ──────────────────────────────────────────────────────────────

const projectOptions: SelectOption[] = [
  { value: "New website", label: "New website" },
  { value: "Redesign", label: "Redesign" },
  { value: "Landing page", label: "Landing page" },
  { value: "Other", label: "Other" },
];

const budgetOptions: SelectOption[] = [
  { value: "Under $1k (~₹85k)", label: "Under $1k (~₹85k)" },
  { value: "$1k–3k (~₹85k–2.5L)", label: "$1k–3k (~₹85k–2.5L)" },
  { value: "$3k–7k (~₹2.5L–6L)", label: "$3k–7k (~₹2.5L–6L)" },
  { value: "$7k+ (~₹6L+)", label: "$7k+ (~₹6L+)" },
  { value: "Let's discuss", label: "Let's discuss" },
];

// ── Main form ────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Set<string>>(new Set());

  const clearError = (field: string) =>
    setErrors((prev) => {
      const next = new Set(prev);
      next.delete(field);
      return next;
    });

  const updateText =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      clearError(field);
    };

  const updateSelect = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const next = new Set<string>();
    if (!form.name.trim()) next.add("name");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.add("email");
    if (!form.projectType) next.add("projectType");
    if (!form.budget) next.add("budget");
    if (!form.message.trim()) next.add("message");
    if (next.size > 0) {
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          budget: form.budget,
          message: form.message,
          subject: "New contact form submission from akshars.com",
          from_name: form.name,
        }),
      });
      const data = await res.json();
      setStatus(data.success === true ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(initialForm);
    setStatus("idle");
    setErrors(new Set());
  };

  return (
    <div className="rounded-2xl border border-hairline bg-ink-soft p-8 md:p-10">
      {status === "success" ? (
        <SuccessState onReset={reset} />
      ) : (
        <>
          {/* Card heading */}
          <div className="mb-8">
            <h2
              className="font-display text-bone"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontVariationSettings: '"wdth" 65',
                lineHeight: 0.92,
              }}>
              DROP A LINE
            </h2>
            <p className="font-sans text-bone-dim text-sm mt-2 leading-relaxed">
              Tell me about your project. I read everything.
            </p>
            <p className="font-sans text-bone-dim text-xs mt-3 leading-relaxed border-t border-hairline pt-3">
              Have a project in mind? Use this form — I&apos;ll reply by email within 24 hours.{" "}
              <span className="text-bone">Quick question?</span> The chat bubble in the corner is faster.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            {/* Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Screen-reader live region */}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {status === "submitting" && "Sending your message…"}
              {status === "error" && "There was an error sending your message."}
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="cf-name" className={labelClass}>
                Name
              </label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateText("name")}
                className={`${inputClass} ${errors.has("name") ? "border-flush" : ""}`}
              />
              {errors.has("name") && (
                <p className="font-sans text-[11px] text-flush mt-1">Please enter your name.</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="cf-email" className={labelClass}>
                Email
              </label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={updateText("email")}
                className={`${inputClass} ${errors.has("email") ? "border-flush" : ""}`}
              />
              {errors.has("email") && (
                <p className="font-sans text-[11px] text-flush mt-1">Please enter a valid email address.</p>
              )}
            </div>

            {/* Project type — custom select */}
            <SelectField
              id="cf-project"
              label="Project type"
              placeholder="Select type…"
              options={projectOptions}
              value={form.projectType}
              onChange={updateSelect("projectType")}
              hasError={errors.has("projectType")}
              onInteract={() => clearError("projectType")}
            />

            {/* Budget — custom select */}
            <SelectField
              id="cf-budget"
              label="Budget range"
              placeholder="Select budget…"
              options={budgetOptions}
              value={form.budget}
              onChange={updateSelect("budget")}
              hasError={errors.has("budget")}
              onInteract={() => clearError("budget")}
            />

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="cf-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={updateText("message")}
                className={`${inputClass} resize-y ${errors.has("message") ? "border-flush" : ""}`}
              />
              {errors.has("message") && (
                <p className="font-sans text-[11px] text-flush mt-1">Please tell me about your project.</p>
              )}
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-4 pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === "submitting"}
                className="w-full justify-center">
                {status === "submitting" ? "SENDING…" : "SEND MESSAGE"}
              </Button>

              {status === "error" && (
                <p className="font-sans text-xs text-flush">
                  Something went wrong. Email me directly at{" "}
                  <a
                    href="mailto:hello@aksharsharma.com"
                    className="underline hover:text-blush transition-colors duration-200">
                    hello@aksharsharma.com
                  </a>
                  .
                </p>
              )}

              <p className="font-sans text-xs text-bone-dim">
                I reply within 24 hours. No spam, ever.
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
