export const Skeleton = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`block bg-zinc-200 dark:bg-zinc-800 motion-safe:animate-[skeleton-pulse_2s_ease-in-out_infinite] ${className}`}
  />
);

export const CardSkeleton = () => (
  <div aria-hidden="true" className="surface flex min-w-0 flex-col">
    <Skeleton className="aspect-square w-full rounded-t-[calc(var(--radius-xl)-1px)]" />
    <div className="flex flex-1 flex-col items-start gap-4 p-4">
      <div className="flex h-[1.375rem] w-full items-center justify-between gap-3">
        <Skeleton className="h-4 w-3/5 rounded" />
        <Skeleton className="h-3 w-1/5 rounded" />
      </div>
      <Skeleton className="mt-auto h-11 w-28 rounded-lg" />
    </div>
  </div>
);
