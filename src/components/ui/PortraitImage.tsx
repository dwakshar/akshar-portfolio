"use client";

import Image from "next/image";
import { useState } from "react";

interface PortraitImageProps {
  name: string;
  className?: string;
}

export default function PortraitImage({ name, className }: PortraitImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={`flex items-end justify-center ${className ?? ""}`}>
        <svg viewBox="0 0 160 280" fill="none" className="h-full w-auto opacity-20">
          <ellipse cx="80" cy="62" rx="44" ry="52" fill="#2a2a2a" />
          <path d="M4 280 Q4 158 80 158 Q156 158 156 280Z" fill="#2a2a2a" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src="/portrait.png"
      alt={name}
      width={0}
      height={0}
      sizes="(max-width: 768px) 85vw, 40vw"
      className={`h-full w-auto object-contain object-bottom grayscale ${className ?? ""}`}
      onError={() => setImgError(true)}
    />
  );
}
