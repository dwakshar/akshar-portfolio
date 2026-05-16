"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/home";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function ServicesAccordion() {
  const [openId, setOpenId] = useState<string>(services[0].id);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? "" : id));

  return (
    <section className="py-14 md:py-20 border-t border-hairline">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="✦ Services" title="How I Help You Grow" />
        </Reveal>

        <div className="mt-10 md:mt-14">
          {services.map((service, i) => {
            const isOpen = openId === service.id;

            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <div className="border-t border-hairline last:border-b">
                  <button
                    onClick={() => toggle(service.id)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left">
                    <span
                      className={cn(
                        "font-display text-sm tabular-nums shrink-0 w-7 transition-colors duration-200",
                        isOpen ? "text-flush" : "text-bone-dim"
                      )}>
                      {service.number}
                    </span>

                    <span
                      className={cn(
                        "flex-1 font-display text-2xl md:text-3xl lg:text-4xl leading-tight transition-colors duration-200",
                        isOpen
                          ? "text-flush"
                          : "text-bone-dim group-hover:text-bone"
                      )}
                      style={{ fontVariationSettings: '"wdth" 65' }}>
                      {service.title}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                        ease: "easeInOut",
                      }}
                      className={cn(
                        "shrink-0 text-2xl leading-none select-none transition-colors duration-200",
                        isOpen ? "text-flush" : "text-bone-dim"
                      )}>
                      +
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
                          height: {
                            duration: shouldReduceMotion ? 0 : 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: shouldReduceMotion ? 0 : 0.25,
                            ease: "easeOut",
                          },
                        }}
                        style={{ overflow: "hidden" }}>
                        <div className="pb-8 pl-12 md:pl-15">
                          <p className="text-bone-dim leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                            {service.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-bone-dim">
                                <span className="text-flush text-xs shrink-0">
                                  ✦
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
