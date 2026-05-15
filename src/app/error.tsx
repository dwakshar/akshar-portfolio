"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[100dvh] bg-ink flex flex-col items-center justify-center px-6 text-center gap-8">
      <span className="font-sans text-xs text-flush uppercase tracking-[0.2em]">
        ✦ Something went wrong
      </span>
      <h1
        className="font-display font-black text-bone leading-none tracking-tight"
        style={{
          fontSize: "clamp(3rem, 10vw, 7rem)",
          fontVariationSettings: '"wdth" 65',
        }}>
        Error
      </h1>
      <p className="font-sans text-bone-dim text-base max-w-sm leading-relaxed">
        Something broke on our end. Try refreshing — if it keeps happening, come
        back later.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-flush text-ink font-sans text-sm font-semibold hover:bg-blush transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flush focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border border-hairline text-bone-dim font-sans text-sm hover:text-bone hover:border-bone/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flush focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          Go home
        </Link>
      </div>
    </div>
  );
}
