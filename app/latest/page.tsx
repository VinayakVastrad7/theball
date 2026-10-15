import type { Metadata } from "next";
import Link from "next/link";
 
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/layout/PageHeader";
import { getLatestArticlesFromDatabase } from "@/lib/articles";
 
export const metadata: Metadata = {
  title: "Latest Articles",
  description:
    "The latest football stories, analysis, tactics, opinions and ideas from Theball.",
 
  alternates: {
    canonical: "/latest",
  },
 
  openGraph: {
    title: "Latest Football Stories | Theball",
    description:
      "The latest football stories, analysis, tactics, opinions and ideas from Theball.",
    url: "https://theball.lol/latest",
    type: "website",
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Latest Football Stories | Theball",
    description:
      "The latest football stories, analysis, tactics, opinions and ideas from Theball.",
  },
};
 
export default async function LatestPage() {
  const articles = await getLatestArticlesFromDatabase();
 
  const [lead, ...rest] = articles;
 
  return (
    <>
      <Navbar />
 
      <main className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <PageHeader
          title="Latest"
          description="The latest stories, analysis and ideas from the world of football."
          meta={
            articles.length > 0
              ? `${articles.length} ${articles.length === 1 ? "story" : "stories"}`
              : undefined
          }
        />
 
        {/* Empty state */}
        {articles.length === 0 && (
          <div className="border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-20 text-center">
            <p className="font-serif text-2xl font-bold text-white">
              Nothing here yet
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              New stories are on the way. Check back soon.
            </p>
          </div>
        )}
 
        {/* Lead story */}
        {lead && (
          <Link
            href={`/articles/${lead.slug}`}
            className="group grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-12"
          >
            <div className="relative overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 lg:col-span-7">
              {lead.featuredImage ? (
                <img
                  src={lead.featuredImage}
                  alt={lead.title}
                  className="aspect-16/10 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="aspect-16/10 w-full bg-linear-to-br from-zinc-800 to-zinc-950" />
              )}
 
              <span className="absolute left-4 top-4 bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white md:left-5 md:top-5">
                Newest
              </span>
            </div>
 
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                {lead.category}
              </p>
 
              <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-4xl xl:text-5xl">
                {lead.title}
              </h2>
 
              <p className="mt-4 line-clamp-4 text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                {lead.description}
              </p>
 
              <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-wider text-zinc-500">
                <span className="font-semibold text-zinc-300">
                  {lead.author}
                </span>
                <span className="h-1 w-1 rounded-full bg-red-500" />
                <span>{lead.readTime}</span>
              </p>
 
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
                Read story &rarr;
              </p>
            </div>
          </Link>
        )}
 
        {/* Earlier stories */}
        {rest.length > 0 && (
          <section className="mt-16 md:mt-20">
            <div className="mb-2 flex items-center gap-4">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
                Earlier stories
              </h2>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
 
            <div className="grid border-b border-zinc-800 lg:grid-cols-2 lg:gap-x-14">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex gap-5 border-t border-zinc-800 py-7 first:border-t-0 sm:gap-6 lg:first:border-t lg:nth-2:border-t-0"
                >
                  <div className="h-fit w-32 shrink-0 overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 sm:w-44">
                    {article.featuredImage ? (
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="aspect-4/3 w-full bg-linear-to-br from-zinc-800 to-zinc-950" />
                    )}
                  </div>
 
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                      {article.category}
                    </p>
 
                    <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-xl">
                      {article.title}
                    </h3>
 
                    <p className="mt-2 hidden line-clamp-2 text-sm leading-6 text-zinc-400 sm:block">
                      {article.description}
                    </p>
 
                    <p className="mt-3 flex items-center gap-2.5 text-xs uppercase tracking-wider text-zinc-500">
                      <span>{article.author}</span>
                      <span className="h-1 w-1 rounded-full bg-red-500" />
                      <span>{article.readTime}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
 