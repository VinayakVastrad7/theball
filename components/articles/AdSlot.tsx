import type { ReactNode } from "react";
 
type AdSlotProps = {
  label?: string;
  /** Real ad code (AdSense tag, banner image, etc.). Placeholder shows when empty. */
  children?: ReactNode;
};
 
export default function AdSlot({
  label = "Advertisement",
  children,
}: AdSlotProps) {
  return (
    <aside
      aria-label={label}
      className="mx-auto my-12 w-full max-w-3xl md:my-14"
    >
      {/* Label with rules on both sides */}
      <div className="mb-3 flex items-center gap-4">
        <span className="h-px flex-1 bg-zinc-800" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
          {label}
        </span>
        <span className="h-px flex-1 bg-zinc-800" />
      </div>
 
      {/* Slot (sized for a 728x90 leaderboard / 300x250 on mobile) */}
      <div className="mx-auto flex min-h-[110px] w-full max-w-[728px] items-center justify-center overflow-hidden rounded-sm border border-dashed border-zinc-800 bg-zinc-900/40 md:min-h-[120px]">
        {children ?? (
          <span className="text-xs uppercase tracking-widest text-zinc-700">
            Your ad here
          </span>
        )}
      </div>
    </aside>
  );
}
 