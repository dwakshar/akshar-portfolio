"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [dark, setDark] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.2 });

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setPointer(
        el.closest(
          "a, button, [role='button'], input, textarea, select, label"
        ) !== null
      );
      setDark(el.closest("[data-cursor-dark]") !== null);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, visible, isTouch]);

  if (!mounted || isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] select-none"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.5 } }}>
      <motion.span
        className="block font-sans leading-none"
        animate={{
          scale: pointer ? 1.6 : 1,
          color: dark ? "#0a0a0a" : pointer ? "#ff6fb5" : "#ff1f8f",
          filter: dark
            ? "drop-shadow(0 0 4px #0a0a0a66)"
            : pointer
            ? "drop-shadow(0 0 8px #ff1f8f) drop-shadow(0 0 20px #ff1f8f88)"
            : "drop-shadow(0 0 4px #ff1f8f99)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        style={{ fontSize: "30px" }}>
        ✦
      </motion.span>
    </motion.div>
  );
}
