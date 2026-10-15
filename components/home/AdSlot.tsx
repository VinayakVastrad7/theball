import type { ReactNode } from "react";
 
type AdSlotProps = {
  /** Real ad code (AdSense tag, banner image, etc.). Placeholder shows when empty. */
  children?: ReactNode;
};
 
export default function AdSlot({ children }: AdSlotProps) {
  return (
    <div className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        {/* Label with rules on both sides */}
        <div className="mb-4 flex items-center gap-4">
          <span className="h-px flex-1 bg-zinc-800" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Advertisement
          </span>
          <span className="h-px flex-1 bg-zinc-800" />
        </div>
 
        {/* Slot (sized for a 970x90 / 728x90 leaderboard) */}
        <div className="mx-auto flex min-h-[100px] w-full max-w-[970px] items-center justify-center overflow-hidden rounded-sm border border-dashed border-zinc-800 bg-zinc-900/40 md:min-h-[120px]">
          {children ?? (
            <span className="text-xs uppercase tracking-widest text-zinc-700">
              Your ad here
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
 