import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getArticleSettings } from "@/lib/articleSettings";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const articlesDirectory = path.join(
  process.cwd(),
  "content/articles"
);

export type Article = {
  title: string;
  description: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;

  published?: boolean;
  featured?: boolean;
  mostRead?: boolean;
  views?: number;

  tags?: string[];

  series?: string;
  seriesOrder?: number;

  content: string;
};

function createSeriesSlug(series: string): string {
  return series
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function sortArticlesByDate(
  articles: Article[]
): Article[] {
  return articles.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(articlesDirectory);

  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(
        articlesDirectory,
        file
      );

      const fileContent = fs.readFileSync(
        filePath,
        "utf8"
      );

      const { data, content } =
        matter(fileContent);

      return {
        ...data,
        content,
      } as Article;
    });

  return sortArticlesByDate(articles);
}

/*
 * Gets Supabase settings.
 *
 * If the article does not have a row yet,
 * automatically creates one.
 *
 * New MDX articles are published by default.
 */
export async function getArticleWithSettings(
  article: Article
): Promise<Article> {
  let settings = await getArticleSettings(
    article.slug
  );

  if (!settings) {
    const { data, error } =
      await supabaseAdmin
        .from("articles")
        .insert({
          slug: article.slug,
          published: true,
          featured: false,
          most_read: false,
          views: 0,
        })
        .select(
          "slug, published, featured, most_read, views"
        )
        .single();

    if (error) {
      console.error(
        `Failed to create Supabase settings for ${article.slug}:`,
        error
      );

      return {
        ...article,
        published: false,
        featured: false,
        mostRead: false,
        views: 0,
      };
    }

    settings = data;
  }

  return {
    ...article,
    published: settings.published,
    featured: settings.featured,
    mostRead: settings.most_read,
    views: settings.views,
  };
}

export async function getAllArticlesWithSettings(): Promise<
  Article[]
> {
  const articles = getAllArticles();

  const articlesWithSettings =
    await Promise.all(
      articles.map((article) =>
        getArticleWithSettings(article)
      )
    );

  return sortArticlesByDate(
    articlesWithSettings
  );
}

export async function getPublishedArticlesFromDatabase(): Promise<
  Article[]
> {
  const articles =
    await getAllArticlesWithSettings();

  return articles.filter(
    (article) => article.published === true
  );
}

export async function getArticleBySlugFromDatabase(
  slug: string
): Promise<Article | undefined> {
  const articles =
    await getPublishedArticlesFromDatabase();

  return articles.find(
    (article) => article.slug === slug
  );
}

export async function getArticlesByCategoryFromDatabase(
  category: string
): Promise<Article[]> {
  const articles =
    await getPublishedArticlesFromDatabase();

  return articles.filter(
    (article) =>
      article.category?.toLowerCase() ===
      category.toLowerCase()
  );
}

export async function getArticlesByCategory(
  category: string
): Promise<Article[]> {
  return getArticlesByCategoryFromDatabase(category);
}

export async function getFeaturedArticlesFromDatabase(): Promise<
  Article[]
> {
  const articles =
    await getPublishedArticlesFromDatabase();

  return articles.filter(
    (article) => article.featured === true
  );
}

export async function getLatestArticlesFromDatabase(
  limit?: number
): Promise<Article[]> {
  const articles =
    await getPublishedArticlesFromDatabase();

  const sortedArticles =
    sortArticlesByDate(articles);

  return limit
    ? sortedArticles.slice(0, limit)
    : sortedArticles;
}

export async function getMostReadArticlesFromDatabase(
  limit?: number
): Promise<Article[]> {
  const articles =
    await getPublishedArticlesFromDatabase();

  const mostRead = articles.filter(
    (article) => article.mostRead === true
  );

  return limit
    ? mostRead.slice(0, limit)
    : mostRead;
}

export async function getCaseFileArticlesFromDatabase(): Promise<
  Article[]
> {
  const articles =
    await getPublishedArticlesFromDatabase();

  return articles.filter(
    (article) =>
      article.category?.toLowerCase() ===
      "case files"
  );
}

export async function getArticlesBySeriesFromDatabase(
  seriesSlug: string
): Promise<Article[]> {
  const articles =
    await getCaseFileArticlesFromDatabase();

  return articles
    .filter((article) => {
      if (!article.series) {
        return false;
      }

      return (
        createSeriesSlug(article.series) ===
        seriesSlug.toLowerCase()
      );
    })
    .sort(
      (a, b) =>
        (a.seriesOrder ?? 999) -
        (b.seriesOrder ?? 999)
    );
}

export async function getCaseFileSeriesFromDatabase(): Promise<
  string[]
> {
  const articles =
    await getCaseFileArticlesFromDatabase();

  return Array.from(
    new Set(
      articles
        .map((article) => article.series)
        .filter(
          (series): series is string =>
            Boolean(series)
        )
    )
  );
}