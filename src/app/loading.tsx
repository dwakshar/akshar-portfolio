export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-ink">
      <p
        className="font-display font-black uppercase tracking-tight leading-none select-none animate-pulse text-bone/30"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontVariationSettings: '"wdth" 65',
        }}>
        AKSHAR
      </p>
    </div>
  );
}
