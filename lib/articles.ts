import { cache } from "react";
import generated from "./articles.generated.json";
import { getArticleSettings } from "@/lib/articleSettings";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

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

function sortArticlesByDate(articles: Article[]): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllArticles(): Article[] {
  return sortArticlesByDate([...(generated as unknown as Article[])]);
}

export async function getArticleWithSettings(
  article: Article
): Promise<Article> {
  let settings = await getArticleSettings(article.slug);

  if (!settings) {
    const { data, error } = await supabaseAdmin
      .from("articles")
      .insert({
        slug: article.slug,
        published: true,
        featured: false,
        most_read: false,
        views: 0,
      })
      .select("slug, published, featured, most_read, views")
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

export const getAllArticlesWithSettings = cache(
  async (): Promise<Article[]> => {
    const articles = getAllArticles();
    const slugs = articles.map((a) => a.slug);

    const { data: rows, error } = await supabaseAdmin
      .from("articles")
      .select("slug, published, featured, most_read, views")
      .in("slug", slugs);

    if (error) throw error;

    const bySlug = new Map((rows ?? []).map((r) => [r.slug, r]));

    const missing = articles.filter((a) => !bySlug.has(a.slug));
    if (missing.length > 0) {
      const { data: created, error: insertError } = await supabaseAdmin
        .from("articles")
        .upsert(
          missing.map((a) => ({
            slug: a.slug,
            published: true,
            featured: false,
            most_read: false,
            views: 0,
          })),
          { onConflict: "slug", ignoreDuplicates: true }
        )
        .select("slug, published, featured, most_read, views");

      if (insertError) {
        console.error("Failed to create Supabase rows:", insertError);
      } else {
        (created ?? []).forEach((r) => bySlug.set(r.slug, r));
      }
    }

    return sortArticlesByDate(
      articles.map((article) => {
        const s = bySlug.get(article.slug);
        return {
          ...article,
          published: s?.published ?? false,
          featured: s?.featured ?? false,
          mostRead: s?.most_read ?? false,
          views: s?.views ?? 0,
        };
      })
    );
  }
);

export const getPublishedArticlesFromDatabase = cache(
  async (): Promise<Article[]> => {
    const articles = await getAllArticlesWithSettings();
    return articles.filter((article) => article.published === true);
  }
);

export const getArticleBySlugFromDatabase = cache(
  async (slug: string): Promise<Article | undefined> => {
    const articles = await getPublishedArticlesFromDatabase();
    return articles.find((article) => article.slug === slug);
  }
);

export async function getArticlesByCategoryFromDatabase(
  category: string
): Promise<Article[]> {
  const articles = await getPublishedArticlesFromDatabase();

  return articles.filter(
    (article) => article.category?.toLowerCase() === category.toLowerCase()
  );
}

export async function getArticlesByCategory(
  category: string
): Promise<Article[]> {
  return getArticlesByCategoryFromDatabase(category);
}

export async function getFeaturedArticlesFromDatabase(): Promise<Article[]> {
  const articles = await getPublishedArticlesFromDatabase();
  return articles.filter((article) => article.featured === true);
}

export async function getLatestArticlesFromDatabase(
  limit?: number
): Promise<Article[]> {
  const articles = await getPublishedArticlesFromDatabase();
  const sortedArticles = sortArticlesByDate([...articles]);

  return limit ? sortedArticles.slice(0, limit) : sortedArticles;
}

export async function getMostReadArticlesFromDatabase(
  limit?: number
): Promise<Article[]> {
  const articles = await getPublishedArticlesFromDatabase();
  const mostRead = articles.filter((article) => article.mostRead === true);

  return limit ? mostRead.slice(0, limit) : mostRead;
}

export async function getCaseFileArticlesFromDatabase(): Promise<Article[]> {
  const articles = await getPublishedArticlesFromDatabase();

  return articles.filter(
    (article) => article.category?.toLowerCase() === "case files"
  );
}

export async function getArticlesBySeriesFromDatabase(
  seriesSlug: string
): Promise<Article[]> {
  const articles = await getCaseFileArticlesFromDatabase();

  return articles
    .filter((article) => {
      if (!article.series) {
        return false;
      }

      return createSeriesSlug(article.series) === seriesSlug.toLowerCase();
    })
    .sort((a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999));
}

export async function getCaseFileSeriesFromDatabase(): Promise<string[]> {
  const articles = await getCaseFileArticlesFromDatabase();

  return Array.from(
    new Set(
      articles
        .map((article) => article.series)
        .filter((series): series is string => Boolean(series))
    )
  );
}