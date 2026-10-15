import Link from "next/link";
import { getPublishedArticlesFromDatabase } from "@/lib/articles";
 
type RelatedArticlesProps = {
  currentSlug: string;
  category: string;
  series?: string;
};
 
export default async function RelatedArticles({
  currentSlug,
  category,
  series,
}: RelatedArticlesProps) {
  const allArticles = await getPublishedArticlesFromDatabase();
 
  const isCaseFile = category.toLowerCase() === "case files";
 
  let relatedArticles;
 
  if (isCaseFile && series) {
    // Case Files: only show articles from the same series
    relatedArticles = allArticles
      .filter(
        (article) =>
          article.category?.toLowerCase() === "case files" &&
          article.series?.toLowerCase() === series.toLowerCase() &&
          article.slug !== currentSlug
      )
      .sort((a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999))
      .slice(0, 3);
  } else {
    // Normal articles: show articles from the same category
    relatedArticles = allArticles
      .filter(
        (article) =>
          article.category?.toLowerCase() === category.toLowerCase() &&
          article.slug !== currentSlug
      )
      .slice(0, 3);
  }
 
  if (relatedArticles.length === 0) {
    return null;
  }
 
  // Spacing above and the divider line are handled by the article page.
  return (
    <section>
      {/* Heading */}
      <div className="mb-8 border-b border-zinc-800 pb-5 md:mb-10">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
          <span className="h-px w-8 bg-red-500" />
          {isCaseFile ? "Case File" : "More to read"}
        </p>
 
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
          {isCaseFile ? "More From This Case" : "Related Stories"}
        </h2>
      </div>
 
      {/* Cards */}
      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group flex flex-col"
          >
            <div className="overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 group-hover:ring-red-500/60">
              {article.featuredImage ? (
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
              )}
            </div>
 
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-red-500">
              {isCaseFile && article.seriesOrder
                ? `Case File · Part ${String(article.seriesOrder).padStart(2, "0")}`
                : article.category}
            </p>
 
            <h3 className="mt-2 font-serif text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-2xl">
              {article.title}
            </h3>
 
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
              {article.description}
            </p>
 
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
              Read story &rarr;
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
 