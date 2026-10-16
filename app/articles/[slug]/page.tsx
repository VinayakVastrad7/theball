import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
 
import {
  getArticleBySlugFromDatabase,
  getPublishedArticlesFromDatabase,
} from "@/lib/articles"; 
import ArticleHeader from "@/components/articles/ArticleHeader";
import ArticleImage from "@/components/articles/ArticleImage";
import ArticleQuote from "@/components/articles/ArticleQuote";
import ArticleVideo from "@/components/articles/ArticleVideo";
import ArticleTable from "@/components/articles/ArticleTable";
import TacticalDiagram from "@/components/articles/TacticalDiagram";
//import AdSlot from "@/components/articles/AdSlot";
import RelatedArticles from "@/components/articles/RelatedArticles";
import SatireNotice from "@/components/articles/SatireNotice";
 
type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getPublishedArticlesFromDatabase();
  return articles.map((article) => ({ slug: article.slug }));
}
 
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
 
  const article = await getArticleBySlugFromDatabase(slug);
 
  if (!article) {
    return {};
  }
 
  const articleKeywords = [
    ...(article.tags ?? []),
    article.category,
    "football",
    "soccer",
  ];
 
  if (
    article.category.toLowerCase() === "opinions" ||
    article.category.toLowerCase() === "satire"
  ) {
    articleKeywords.push(
      "football opinions",
      "football satire",
      "football humor",
      "dark football humor"
    );
  }
 
  if (article.category.toLowerCase() === "case files") {
    articleKeywords.push(
      "football satire",
      "fictional football stories",
      "football humor",
      "football culture"
    );
  }
 
  if (article.category.toLowerCase() === "football & tactics") {
    articleKeywords.push(
      "football tactics",
      "football analysis",
      "tactical analysis"
    );
  }
 
  const uniqueKeywords = [...new Set(articleKeywords)];
 
  return {
    title: article.title,
 
    description: article.description,
 
    authors: [
      {
        name: article.author,
      },
    ],
 
    keywords: uniqueKeywords,
 
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
 
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
      url: `/articles/${article.slug}`,
 
      images: article.featuredImage
        ? [
            {
              url: article.featuredImage,
              alt: article.title,
            },
          ]
        : [],
    },
 
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.featuredImage ? [article.featuredImage] : [],
    },
  };
}
 
/*
 * Reading-column styles for the MDX body.
 *
 * IMPORTANT: every class here is a single token (e.g. "[&_h2]:mt-14").
 * Splitting a variant across lines like "[&_h2]:\n mt-14" does NOT work
 * in Tailwind - the pieces become separate, broken classes.
 */
const articleProse = [
  // Base text
  "mx-auto max-w-3xl text-[17px] leading-8 text-zinc-300 md:text-lg md:leading-9",
  "marker:text-red-500",
 
  // Paragraphs
  "[&_p]:mb-7",
 
  // Headings
  "[&_h2]:mb-5 [&_h2]:mt-16 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-white md:[&_h2]:text-4xl",
  "[&_h3]:mb-4 [&_h3]:mt-12 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-tight [&_h3]:text-white md:[&_h3]:text-3xl",
 
  // Inline
  "[&_strong]:font-semibold [&_strong]:text-white",
  "[&_a]:text-white [&_a]:underline [&_a]:decoration-red-500/60 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-red-500",
  "[&_code]:rounded [&_code]:bg-zinc-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_code]:text-zinc-100",
 
  // Lists
  "[&_ul]:mb-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-7",
  "[&_ol]:mb-7 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-7",
  "[&_li]:pl-1",
 
  // Pull quotes
  "[&_blockquote]:my-12 [&_blockquote]:border-l-2 [&_blockquote]:border-red-500 [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:leading-relaxed [&_blockquote]:text-zinc-100 md:[&_blockquote]:pl-8 md:[&_blockquote]:text-2xl",
  "[&_blockquote_p]:mb-0",
 
  // Media and dividers
  "[&_img]:my-10 [&_img]:w-full [&_img]:rounded-sm",
  "[&_hr]:my-12 [&_hr]:border-zinc-800",
].join(" ");
 
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
 
  const article = await getArticleBySlugFromDatabase(slug);
 
  /*
   * If the article does not exist in MDX
   * OR published = false in Supabase,
   * it will not be publicly accessible.
   */
  if (!article) {
    notFound();
  }
 
  const articleUrl = `https://theball.lol/articles/${article.slug}`;
 
  /*
   * JSON-LD structured data.
   *
   * This helps search engines understand:
   * - what the page is
   * - the article headline
   * - author
   * - publication date
   * - featured image
   * - article description
   * - publisher
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
 
    headline: article.title,
 
    description: article.description,
 
    datePublished: article.date,
 
    author: {
      "@type": "Person",
      name: article.author,
    },
 
    publisher: {
      "@type": "Organization",
      name: "Theball",
      url: "https://theball.lol",
    },
 
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
 
    url: articleUrl,
 
    articleSection: article.category,
 
    keywords: article.tags?.join(", "),
 
    ...(article.featuredImage
      ? {
          image: [`https://theball.lol${article.featuredImage}`],
        }
      : {}),
  };
 
  const components = {
    ArticleImage,
    ArticleQuote,
    ArticleVideo,
    ArticleTable,
    TacticalDiagram,
  // AdSlot,
  };
 
  return (
    <main id="top" className="min-h-screen">
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
 
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-16">
        {/* Satire disclaimer and article header */}
<div className="mx-auto max-w-4xl">
  <SatireNotice />

  <ArticleHeader
    category={article.category}
    title={article.title}
    description={article.description}
    author={article.author}
    date={article.date}
    readTime={article.readTime}
  />
</div>
 
        {/* Featured image */}
        {article.featuredImage && (
          <figure className="mt-10 md:mt-14">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </figure>
        )}
 
     
        {/* Article content */}
        <article className={articleProse}>
          <MDXRemote source={article.content} components={components} />
        </article>
 
        {/* End-of-story mark */}
        <div
          aria-hidden="true"
          className="mx-auto mt-14 flex max-w-3xl items-center gap-4"
        >
          <span className="h-px flex-1 bg-zinc-800" />
          <span className="h-2 w-2 bg-red-500" />
          <span className="h-px flex-1 bg-zinc-800" />
        </div>
 
        {/* Related articles */}
        <div className="mx-auto mt-16 max-w-5xl md:mt-20">
          <RelatedArticles
            currentSlug={article.slug}
            category={article.category}
            series={article.series}
          />
        </div>
      </div>
    </main>
  );
}