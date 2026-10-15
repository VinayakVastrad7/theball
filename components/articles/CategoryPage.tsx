import Link from "next/link";
 
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/layout/PageHeader";
import { getArticlesByCategoryFromDatabase } from "@/lib/articles";
 
type CategoryPageProps = {
  title: string;
  description: string;
  category: string;
  /**
   * Group stories by their `series` and order them by `seriesOrder`.
   * Meant for Case Files: <CategoryPage groupBySeries ... />
   */
  groupBySeries?: boolean;
};
 
type Article = Awaited<
  ReturnType<typeof getArticlesByCategoryFromDatabase>
>[number];
 
const pad = (n: number) => String(n).padStart(2, "0");
 
/* ------------------------------------------------------------------ */
/* Poster card: full-bleed image, text on a gradient                   */
/* ------------------------------------------------------------------ */
function PosterCard({ article, label }: { article: Article; label: string }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-red-500/60 sm:aspect-[4/5]"
    >
      {article.featuredImage ? (
        <img
          src={article.featuredImage}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
      )}
 
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
 
      <span className="absolute left-4 top-4 border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-sm md:left-5 md:top-5">
        {label}
      </span>
 
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
  );
}
 
/* ------------------------------------------------------------------ */
/* Lead story: wide cinematic card                                     */
/* ------------------------------------------------------------------ */
function LeadStory({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-red-500/60 sm:aspect-[16/10] lg:aspect-[21/9]"
    >
      {article.featuredImage ? (
        <img
          src={article.featuredImage}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
      )}
 
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
 
      <span className="absolute left-4 top-4 bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white md:left-6 md:top-6">
        Newest
      </span>
 
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
          {article.category}
        </p>
 
        <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl">
          {article.title}
        </h2>
 
        <p className="mt-4 hidden max-w-2xl line-clamp-2 text-base leading-7 text-zinc-300 sm:block">
          {article.description}
        </p>
 
        <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-wider text-zinc-400">
          <span className="font-semibold text-zinc-200">{article.author}</span>
          <span className="h-1 w-1 rounded-full bg-red-500" />
          <span>{article.readTime}</span>
        </p>
      </div>
    </Link>
  );
}
 
/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default async function CategoryPage({
  title,
  description,
  category,
  groupBySeries = false,
}: CategoryPageProps) {
  const articles = await getArticlesByCategoryFromDatabase(category);
 
  const countLabel =
    articles.length > 0
      ? `${articles.length} ${articles.length === 1 ? "story" : "stories"}`
      : undefined;
 
  // Group by series (Case Files)
  let seriesGroups: { name: string | null; items: Article[] }[] = [];
 
  if (groupBySeries && articles.length > 0) {
    const map = new Map<string, Article[]>();
    const standalone: Article[] = [];
 
    for (const article of articles) {
      const key = article.series?.trim();
 
      if (!key) {
        standalone.push(article);
        continue;
      }
 
      map.set(key, [...(map.get(key) ?? []), article]);
    }
 
    seriesGroups = [...map.entries()].map(([name, items]) => ({
      name,
      items: [...items].sort(
        (a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999)
      ),
    }));
 
    if (standalone.length > 0) {
      seriesGroups.push({ name: null, items: standalone });
    }
  }
 
  const [lead, ...rest] = articles;
 
  return (
    <>
      <Navbar />
 
      <main className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <PageHeader
          eyebrow="Theball"
          title={title}
          description={description}
          meta={countLabel}
        />
 
        {/* Empty state */}
        {articles.length === 0 && (
          <div className="border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-20 text-center">
            <p className="font-serif text-2xl font-bold text-white">
              No articles published yet
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Check back soon for new stories.
            </p>
          </div>
        )}
 
        {/* Series view (Case Files) */}
        {groupBySeries && articles.length > 0 && (
          <div className="space-y-16 md:space-y-20">
            {seriesGroups.map((group) => (
              <section key={group.name ?? "standalone"}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-zinc-800 pb-5">
                  <div>
                    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                      <span className="h-px w-8 bg-red-500" />
                      {group.name ? "Series" : "Standalone"}
                    </p>
 
                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                      {group.name ?? "Standalone files"}
                    </h2>
                  </div>
 
                  <p className="shrink-0 pb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "part" : "parts"}
                  </p>
                </div>
 
                <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                  {group.items.map((article, index) => (
                    <PosterCard
                      key={article.slug}
                      article={article}
                      label={
                        group.name
                          ? `Part ${pad(article.seriesOrder ?? index + 1)}`
                          : `File ${pad(index + 1)}`
                      }
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
 
        {/* Standard view (Features, Investigation Pieces) */}
        {!groupBySeries && articles.length > 0 && (
          <>
            <LeadStory article={lead} />
 
            {rest.length > 0 && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 md:mt-8 md:gap-6 lg:grid-cols-3">
                {rest.map((article, index) => (
                  <PosterCard
                    key={article.slug}
                    article={article}
                    label={`No. ${pad(index + 2)}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
 