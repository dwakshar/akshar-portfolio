"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly do you reply?",
    a: "Usually within 24 hours, often faster. If it's urgent, mention it in your message.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Landing pages: 1–2 weeks. Full sites: 3–6 weeks. Depends on scope and your responsiveness with feedback.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I'm based in India but work with clients worldwide. Async-friendly, timezone-flexible.",
  },
  {
    q: "What if I don't have a clear brief yet?",
    a: "That's fine. Drop me what you have — even a half-formed idea — and we'll shape it together on a free 30-min call.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
        Quick Questions
      </span>

      <div className="mt-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-hairline last:border-b-0">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group w-full flex items-start justify-between gap-4 py-4 text-left"
              >
                <span className="font-sans text-sm text-bone leading-snug">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="shrink-0 mt-0.5 text-bone-dim group-hover:text-bone transition-colors duration-200"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.2, ease: "easeOut" },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="font-sans text-sm text-bone-dim leading-relaxed pb-4 pr-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
