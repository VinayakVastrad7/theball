import Link from "next/link";
 
import { getArticlesByCategoryFromDatabase } from "@/lib/articles";
 
type CategorySectionProps = {
  title: string;
};
 
const categoryRoutes: Record<string, string> = {
  "Investigation Pieces": "/investigation-pieces",
  "Case Files": "/case-files",
};
 
export default async function CategorySection({
  title,
}: CategorySectionProps) {
  const articles = (await getArticlesByCategoryFromDatabase(title)).slice(0, 3);
 
  if (articles.length === 0) {
    return null;
  }
 
  const route = categoryRoutes[title];
 
  // NOTE: no max-w / padding container here on purpose.
  // The wrapper in app/page.tsx already provides it.
  return (
    <section>
      {/* Heading */}
      <div className="mb-8 flex items-end justify-between border-b border-zinc-800 pb-5 md:mb-10">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            <span className="h-px w-8 bg-red-500" />
            Section
          </p>
 
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
 
        {route && (
          <Link
            href={route}
            className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors hover:text-red-500"
          >
            View all &rarr;
          </Link>
        )}
      </div>
 
      {/* Poster-style story cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-red-500/60 sm:aspect-[4/5]"
          >
            {/* Image */}
            {article.featuredImage ? (
              <img
                src={article.featuredImage}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}
 
            {/* Gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
 
            {/* File number */}
            <span className="absolute left-4 top-4 border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-sm md:left-5 md:top-5">
              No. {String(index + 1).padStart(2, "0")}
            </span>
 
            {/* Text */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                {article.category}
              </p>
 
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                {article.title}
              </h3>
 
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-300">
                {article.description}
              </p>
 
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
                Read story &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
 