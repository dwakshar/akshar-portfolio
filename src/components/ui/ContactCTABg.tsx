"use client";

import { useEffect, useRef } from "react";

export default function ContactCTABg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let last = 0;
    const FPS = 12;
    const INTERVAL = 1000 / FPS;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < INTERVAL) return;
      last = now;

      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
        data[i + 3] = Math.random() * 80;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden
    />
  );
}
