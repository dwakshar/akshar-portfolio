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
            </div>
            <Skeleton className="hidden md:block h-10 w-36 rounded-full mt-10" />
          </div>
        </div>
      </section>

      {/* Starting Prices */}
      <section className="py-14 md:py-20 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 mb-12">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-5 w-full max-w-lg" />
          </div>
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
          <div className="flex flex-col gap-3 mb-12">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-9 w-52" />
            <Skeleton className="h-5 w-full max-w-lg" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
