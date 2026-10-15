import Link from "next/link";
import { getFeaturedArticlesFromDatabase } from "@/lib/articles";
 
export default async function FeaturedStories() {
  const featured = (await getFeaturedArticlesFromDatabase()).slice(0, 4);
 
  if (featured.length === 0) {
    return null;
  }
 
  const [mainStory, ...secondaryStories] = featured;
  const hasSidebar = secondaryStories.length > 0;
 
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-16">
      {/* Section heading */}
      <div className="mb-8 flex items-end justify-between border-b border-zinc-800 pb-5 md:mb-10">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            <span className="h-px w-8 bg-red-500" />
            Featured
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            Featured Stories
          </h2>
        </div>
      </div>
 
      <div
        className={
          hasSidebar
            ? "grid gap-10 lg:grid-cols-12 lg:gap-0"
            : "grid gap-10"
        }
      >
        {/* Lead story */}
        <Link
          href={`/articles/${mainStory.slug}`}
          className={`group block ${hasSidebar ? "lg:col-span-8 lg:pr-10" : ""}`}
        >
          <div className="relative overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5">
            {mainStory.featuredImage ? (
              <img
                src={mainStory.featuredImage}
                alt={mainStory.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}
 
            {/* Gradient for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
 
            {/* Category tag on image */}
            {mainStory.category && (
              <span className="absolute left-4 top-4 bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white md:left-5 md:top-5">
                {mainStory.category}
              </span>
            )}
          </div>
 
          <div className="mt-6">
            <h3 className="max-w-3xl font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-5xl">
              {mainStory.title}
            </h3>
 
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              {mainStory.description}
            </p>
 
            <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-wider text-zinc-500">
              <span className="font-semibold text-zinc-300">
                {mainStory.author}
              </span>
              <span className="h-1 w-1 rounded-full bg-red-500" />
              <span>{mainStory.readTime}</span>
            </p>
          </div>
        </Link>
 
        {/* Secondary stories */}
        {hasSidebar && (
          <div className="border-t border-zinc-800 pt-2 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="hidden pb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 lg:block">
              More to read
            </p>
 
            <div className="divide-y divide-zinc-800">
              {secondaryStories.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex gap-4 py-6 first:pt-4 last:pb-0 sm:gap-5 lg:py-6"
                >
                  {article.featuredImage && (
                    <div className="w-28 shrink-0 overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 sm:w-36 lg:w-28 xl:w-32">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
 
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                      {article.category}
                    </p>
 
                    <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-xl lg:text-lg xl:text-xl">
                      {article.title}
                    </h3>
 
                    <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
                      {article.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
 