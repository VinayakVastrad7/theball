import Link from "next/link";

import { getMostReadArticlesFromDatabase } from "@/lib/articles";

export default async function MostRead() {
  const articles = await getMostReadArticlesFromDatabase(5);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-6 md:p-7">
      {/* Heading */}
      <div className="mb-2 border-b border-zinc-800 pb-5">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
          <span className="h-px w-8 bg-red-500" />
          Trending
        </p>

        <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
          Most Read
        </h2>
      </div>

      {/* List */}
      <div className="divide-y divide-zinc-800">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group flex items-start gap-5 py-5 last:pb-0"
          >
            <span
              className={`min-w-[2.75rem] font-serif text-4xl font-bold leading-none transition-colors duration-300 group-hover:text-red-500 ${
                index === 0 ? "text-red-500" : "text-zinc-700"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                {article.category}
              </p>

              <h3 className="mt-1.5 font-serif text-base font-semibold leading-snug text-zinc-200 transition-colors duration-300 group-hover:text-white md:text-lg">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}