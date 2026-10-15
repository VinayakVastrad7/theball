type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional small count shown on the right, e.g. "24 stories" */
  meta?: string;
};
 
export default function PageHeader({
  eyebrow = "Theball",
  title,
  description,
  meta,
}: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-zinc-800 pb-8 md:mb-14 md:pb-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            <span className="h-px w-8 bg-red-500" />
            {eyebrow}
          </p>
 
          <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
 
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              {description}
            </p>
          )}
        </div>
 
        {meta && (
          <p className="hidden shrink-0 pb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 sm:block">
            {meta}
          </p>
        )}
      </div>
    </header>
  );
}