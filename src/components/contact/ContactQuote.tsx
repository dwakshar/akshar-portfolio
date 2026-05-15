export default function ContactQuote() {
  return (
    <div>
      <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
        What Clients Say
      </span>

      <div className="mt-5 pl-5 border-l-2 border-flush">
        {/* Decorative opening quote */}
        <span
          className="font-display text-flush block leading-none select-none"
          aria-hidden="true"
          style={{
            fontSize: "clamp(4rem, 8vw, 6rem)",
            fontVariationSettings: '"wdth" 65',
            lineHeight: 0.75,
            marginBottom: "0.25em",
          }}>
          &ldquo;
        </span>

        <blockquote className="font-sans text-bone text-base md:text-[1.0625rem] leading-relaxed">
          Akshar shipped our entire site in three weeks. It outperformed the
          version we&apos;d been planning for six months.
        </blockquote>

        <footer className="mt-5 flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-8 h-8 rounded-full bg-ink-soft border border-hairline shrink-0 overflow-hidden flex items-center justify-center">
            <span className="font-sans text-xs text-bone-dim">PM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xs text-bone tracking-wide">
              Priya Mehta
            </span>
            <span className="font-sans text-[11px] text-bone-dim">
              Founder · Lumen Studio
            </span>
          </div>
        </footer>

        <p className="mt-4 font-sans text-[10px] text-bone-dim/40 uppercase tracking-widest">
          Placeholder — swap in P11
        </p>
      </div>
    </div>
  );
}
