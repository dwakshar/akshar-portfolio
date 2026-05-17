function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-ink-soft ${className ?? ""}`}
    />
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-hairline bg-ink-soft p-6 flex flex-col gap-5 h-full min-h-[420px]">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-36" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
      <Skeleton className="h-10 w-32 rounded-full" />
    </div>
  );
}

function AddonSkeleton() {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl border border-hairline bg-ink-soft">
      <Skeleton className="h-3 w-3 mt-0.5 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}

export default function PricingLoading() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-20 w-3/4" />
              <Skeleton className="h-5 w-full max-w-xl" />
              <Skeleton className="h-5 w-2/3 max-w-xl" />
              {/* Mobile currency dropdown */}
              <Skeleton className="md:hidden h-10 w-36 rounded-full mt-1" />
            </div>
            {/* Desktop currency dropdown */}
            <Skeleton className="hidden md:block h-10 w-36 rounded-full mt-10" />
          </div>
        </div>
      </section>

      {/* Starting Prices */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 mb-4">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-9 w-48" />
          </div>
          <Skeleton className="h-5 w-full max-w-lg mb-12" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 mb-4">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-9 w-52" />
          </div>
          <Skeleton className="h-5 w-full max-w-lg mb-12" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 mb-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-9 w-56" />
          </div>
          <Skeleton className="h-5 w-full max-w-lg mb-12" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <AddonSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Model */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 mb-14">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-9 w-60" />
          </div>
          <div className="grid grid-cols-1 gap-px border border-hairline rounded-2xl overflow-hidden md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 px-6 py-8 bg-ink-soft">
                <Skeleton className="h-12 w-20" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 mb-4">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-9 w-44" />
          </div>
          <Skeleton className="h-5 w-full max-w-lg mb-12" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-hairline bg-ink-soft">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-8 w-36 rounded-full mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6">
          <Skeleton className="h-6 w-44 rounded-full" />
          <Skeleton className="h-16 w-3/4 max-w-lg" />
          <Skeleton className="h-5 w-full max-w-sm" />
          <Skeleton className="h-5 w-2/3 max-w-sm" />
          <Skeleton className="h-12 w-48 rounded-full mt-2" />
        </div>
      </section>
    </div>
  );
}
