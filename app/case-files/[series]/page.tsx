import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
 
import Navbar from "@/components/layout/Navbar";
import { getArticlesBySeriesFromDatabase } from "@/lib/articles";
 
type SeriesPageProps = {
  params: Promise<{
    series: string;
  }>;
};
 
export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { series } = await params;
 
  const articles = await getArticlesBySeriesFromDatabase(series);
 
  if (articles.length === 0) {
    return {};
  }
 
  const seriesName = articles[0]?.series ?? series;
 
  const description = `Follow ${seriesName}, an ongoing Case File investigation from Theball.`;
 
  return {
    title: seriesName,
 
    description,
 
    alternates: {
      canonical: `/case-files/${series}`,
    },
 
    openGraph: {
      title: `${seriesName} | Theball`,
      description,
      url: `https://theball.lol/case-files/${series}`,
      type: "website",
    },
 
    twitter: {
      card: "summary_large_image",
      title: `${seriesName} | Theball`,
      description,
    },
  };
}
 
const pad = (n: number) => String(n).padStart(2, "0");
 
export default async function SeriesPage({ params }: SeriesPageProps) {
  const { series } = await params;
 
  // Find articles using the clean URL slug
  const found = await getArticlesBySeriesFromDatabase(series);
 
  if (found.length === 0) {
    notFound();
  }
 
  // Always show parts in order
  const articles = [...found].sort(
    (a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999)
  );
 
  // Get the real series name from the article
  const seriesName = articles[0]?.series ?? series;
 
  const first = articles[0];
  const partCount = articles.length;
 
  return (
    <>
      <Navbar />
 
      <main className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-14">
        {/* Back link */}
        <Link
          href="/case-files"
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-red-500"
        >
          &larr; All case files
        </Link>
 
        {/* Cover */}
        <header className="relative mt-6 aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 sm:aspect-[16/10] lg:aspect-[21/9]">
          {first?.featuredImage ? (
            <img
              src={first.featuredImage}
              alt={seriesName}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
          )}
 
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
 
          <div className="absolute left-4 top-4 flex items-center gap-2 md:left-6 md:top-6">
            <span className="bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Open case
            </span>
            <span className="border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-sm">
              {partCount} {partCount === 1 ? "part" : "parts"}
            </span>
          </div>
 
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              <span className="h-px w-8 bg-red-500" />
              Investigation
            </p>
 
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {seriesName}
            </h1>
 
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
              A continuing investigation. New evidence may be added as the
              case develops.
            </p>
 
            {first && (
              <Link
                href={`/articles/${first.slug}`}
                className="mt-6 inline-block bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:brightness-110"
              >
                {partCount === 1
                  ? "Read the file"
                  : `Start from Part ${pad(first.seriesOrder ?? 1)}`}{" "}
                &rarr;
              </Link>
            )}
          </div>
        </header>
 
        {/* Contents */}
        <section className="mt-14 md:mt-20">
          <div className="mb-2 flex items-center gap-4">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
              The file
            </h2>
            <span className="h-px flex-1 bg-zinc-800" />
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              In order
            </p>
          </div>
 
          <div className="divide-y divide-zinc-800 border-b border-zinc-800">
            {articles.map((article, index) => {
              const number = article.seriesOrder ?? index + 1;
              const isLatest = partCount > 1 && index === partCount - 1;
 
              return (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex gap-4 py-8 md:gap-8 md:py-10"
                >
                  {/* Part number */}
                  <span className="w-12 shrink-0 font-serif text-4xl font-bold leading-none text-zinc-700 transition-colors duration-300 group-hover:text-red-500 md:w-20 md:text-6xl">
                    {pad(number)}
                  </span>
 
                  <div className="grid min-w-0 flex-1 gap-5 md:grid-cols-[260px_1fr] md:items-center md:gap-8">
                    {/* Image */}
                    <div className="overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5">
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
 
                    {/* Text */}
                    <div className="min-w-0">
                      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-red-500">
                        Part {pad(number)}
                        {isLatest && (
                          <span className="bg-red-600 px-2 py-0.5 text-[10px] text-white">
                            Latest
                          </span>
                        )}
                      </p>
 
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300 md:text-3xl">
                        {article.title}
                      </h3>
 
                      <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base md:leading-7">
                        {article.description}
                      </p>
 
                      <p className="mt-4 flex items-center gap-3 text-xs uppercase tracking-wider text-zinc-500">
                        <span className="font-semibold text-zinc-300">
                          {article.author}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-red-500" />
                        <span>{article.readTime}</span>
                      </p>
 
                      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
                        Read part {pad(number)} &rarr;
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}