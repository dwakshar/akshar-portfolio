'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CURRENCY_META } from '@/lib/currency-map';

type Props = {
  current: string;
  onChange: (currency: string) => void;
};

export default function CurrencyDropdown({ current, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentMeta = CURRENCY_META[current];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-hairline bg-white/5 hover:border-flush/40 transition-colors duration-200"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select currency"
      >
        <span className="text-base leading-none">{currentMeta.flag}</span>
        <span className="text-sm font-sans font-medium text-bone">{currentMeta.code}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-bone-dim transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute right-0 top-full mt-2 w-44 bg-ink-soft border border-hairline rounded-2xl py-2 z-50 shadow-xl"
          >
            {Object.entries(CURRENCY_META).map(([code, meta]) => (
              <li key={code}>
                <button
                  onClick={() => {
                    onChange(code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-sans hover:bg-ink transition-colors ${
                    code === current ? 'text-flush' : 'text-bone'
                  }`}
                  role="option"
                  aria-selected={code === current}
                >
                  <span className="text-base leading-none">{meta.flag}</span>
                  <span>{meta.code}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
