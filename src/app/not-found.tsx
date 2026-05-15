import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-ink flex flex-col items-center justify-center px-6 text-center gap-8">
      <span className="font-sans text-xs text-flush uppercase tracking-[0.2em]">
        ✦ Page not found
      </span>
      <h1
        className="font-display font-black text-bone leading-none tracking-tight"
        style={{
          fontSize: "clamp(5rem, 22vw, 14rem)",
          fontVariationSettings: '"wdth" 65',
        }}>
        404
      </h1>
      <p className="font-sans text-bone-dim text-base max-w-sm leading-relaxed">
        This page doesn&apos;t exist — yet.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-flush text-ink font-sans text-sm font-semibold hover:bg-blush transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flush focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          Go home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border border-hairline text-bone-dim font-sans text-sm hover:text-bone hover:border-bone/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flush focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          See my work
        </Link>
      </div>
    </div>
  );
}
