
export default function SatireNotice() {
  return (
    <aside
      aria-label="Satire disclaimer"
      className="mb-6 flex items-start gap-3 rounded-sm border border-amber-500/20 bg-amber-500/[0.04] px-4 py-3"
    >
      <span
        aria-hidden="true"
        className="mt-0.5 text-amber-500"
      >
        ℹ
      </span>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-500">
          Satire & Fiction
        </p>

        <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm">
          This article is satire. Characters, quotes, events and scenarios
          may be fictional or exaggerated for humorous purposes.
        </p>
      </div>
    </aside>
  );
}
