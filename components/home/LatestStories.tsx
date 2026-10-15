import Link from "next/link";
import { getLatestArticlesFromDatabase } from "@/lib/articles";
 
export default async function LatestStories() {
  const articles = await getLatestArticlesFromDatabase(6);
 
  if (articles.length === 0) {
    return null;
  }
 
  return (
    <section>
      {/* Heading */}
      <div className="mb-2 flex items-end justify-between border-b border-zinc-800 pb-5">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            <span className="h-px w-8 bg-red-500" />
            The latest
          </p>
 
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            Latest Stories
          </h2>
        </div>
 
        <Link
          href="/articles"
          className="hidden text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors hover:text-red-500 sm:block"
        >
          View all &rarr;
        </Link>
      </div>
 
      {/* Story list */}
      <div className="divide-y divide-zinc-800">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group grid gap-4 py-7 sm:grid-cols-[240px_1fr] sm:gap-7 md:grid-cols-[280px_1fr]"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5">
              {article.featuredImage ? (
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
              )}
            </div>
 
            {/* Text */}
            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                {article.category}
              </p>
 
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-2xl">
                {article.title}
              </h3>
 
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400 md:line-clamp-3 md:text-base md:leading-7">
                {article.description}
              </p>
 
              {(article.author || article.readTime) && (
                <p className="mt-4 flex items-center gap-3 text-xs uppercase tracking-wider text-zinc-500">
                  {article.author && (
                    <span className="font-semibold text-zinc-300">
                      {article.author}
                    </span>
                  )}
                  {article.author && article.readTime && (
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                  )}
                  {article.readTime && <span>{article.readTime}</span>}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
 
      {/* Mobile "view all" */}
      <Link
        href="/articles"
        className="mt-4 block border border-zinc-800 py-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:border-red-500 hover:text-red-500 sm:hidden"
      >
        View all stories
      </Link>
    </section>
  );
}
 