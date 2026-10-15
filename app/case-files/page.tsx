import type { Metadata } from "next";
import Link from "next/link";
 
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/layout/PageHeader";
import {
  getCaseFileArticlesFromDatabase,
  getCaseFileSeriesFromDatabase,
} from "@/lib/articles";
 
export const metadata: Metadata = {
  title: "Case Files",
  description:
    "Ongoing investigations into strange, fictional and absurd events from the world of football and beyond.",
 
  alternates: {
    canonical: "/case-files",
  },
 
  openGraph: {
    title: "Case Files | Theball",
    description:
      "Ongoing investigations into strange, fictional and absurd events from the world of football and beyond.",
    url: "https://theball.lol/case-files",
    type: "website",
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Case Files | Theball",
    description:
      "Ongoing investigations into strange, fictional and absurd events from the world of football and beyond.",
  },
};
 
function createSeriesSlug(seriesName: string) {
  return seriesName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
 
const pad = (n: number) => String(n).padStart(2, "0");
 
export default async function CaseFilesPage() {
  const series = await getCaseFileSeriesFromDatabase();
  const articles = await getCaseFileArticlesFromDatabase();
 
  // Build the data each series card needs
  const cases = series.map((seriesName, index) => {
    const parts = articles
      .filter((article) => article.series === seriesName)
      .sort((a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999));
 
    return {
      name: seriesName,
      slug: createSeriesSlug(seriesName),
      number: index + 1,
      parts,
      cover: parts[0]?.featuredImage,
      latest: parts[parts.length - 1],
    };
  });
 
  const [featured, ...others] = cases;
 
  return (
    <>
      <Navbar />
 
      <main className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <PageHeader
          title="Case Files"
          description="Ongoing investigations into events that may or may not have happened."
          meta={
            cases.length > 0
              ? `${cases.length} ${cases.length === 1 ? "case" : "cases"}`
              : undefined
          }
        />
 
        {/* Empty state */}
        {cases.length === 0 && (
          <div className="border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-20 text-center">
            <p className="font-serif text-2xl font-bold text-white">
              No case files yet
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              New investigations will appear here.
            </p>
          </div>
        )}
 
        {/* Featured case */}
        {featured && (
          <Link
            href={`/case-files/${featured.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-red-500/60 sm:aspect-[16/10] lg:aspect-[21/9]"
          >
            {featured.cover ? (
              <img
                src={featured.cover}
                alt={featured.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}
 
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
 
            <div className="absolute left-4 top-4 flex items-center gap-2 md:left-6 md:top-6">
              <span className="bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                Open case
              </span>
              <span className="border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-sm">
                Case {pad(featured.number)}
              </span>
            </div>
 
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                Case File
              </p>
 
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl">
                {featured.name}
              </h2>
 
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-zinc-400">
                <span className="font-semibold text-zinc-200">
                  {featured.parts.length}{" "}
                  {featured.parts.length === 1 ? "part" : "parts"}
                </span>
 
                {featured.latest && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    <span className="max-w-full truncate normal-case tracking-normal text-sm text-zinc-400">
                      Latest: {featured.latest.title}
                    </span>
                  </>
                )}
              </p>
 
              <p className="mt-6 inline-block border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 group-hover:border-red-500 group-hover:bg-red-600">
                Open the file &rarr;
              </p>
            </div>
          </Link>
        )}
 
        {/* Other cases */}
        {others.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:mt-8 md:gap-6 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/case-files/${item.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-red-500/60 sm:aspect-[4/5]"
              >
                {item.cover ? (
                  <img
                    src={item.cover}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
                )}
 
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
 
                <span className="absolute left-4 top-4 border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-200 backdrop-blur-sm md:left-5 md:top-5">
                  Case {pad(item.number)}
                </span>
 
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-red-500">
                    Case File
                  </p>
 
                  <h3 className="mt-2 font-serif text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                    {item.name}
                  </h3>
 
                  <p className="mt-3 text-xs uppercase tracking-wider text-zinc-400">
                    {item.parts.length}{" "}
                    {item.parts.length === 1 ? "part" : "parts"}
                  </p>
 
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
                    Open the file &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
 