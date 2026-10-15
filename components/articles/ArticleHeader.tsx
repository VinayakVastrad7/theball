type ArticleHeaderProps = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
};
 
export default function ArticleHeader({
  category,
  title,
  description,
  author,
  date,
  readTime,
}: ArticleHeaderProps) {
  const initial = author?.trim().charAt(0).toUpperCase() || "T";
 
  return (
    <header>
      {/* Category */}
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
        <span className="h-px w-8 bg-red-500" />
        {category}
      </p>
 
      {/* Title */}
      <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h1>
 
      {/* Description */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:mt-7 md:text-xl md:leading-9">
        {description}
      </p>
 
      {/* Byline */}
      <div className="mt-9 flex items-center gap-4 border-y border-zinc-800 py-5">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 font-serif text-lg font-bold text-white"
        >
          {initial}
        </div>
 
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{author}</p>
 
          <p className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs uppercase tracking-wider text-zinc-500">
            <span>{date}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-red-500" />
            <span>{readTime}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
 