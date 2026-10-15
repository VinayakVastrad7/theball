import { getAllArticles, Article } from "@/lib/articles";
import { getArticleSettings } from "@/lib/articleSettings";

export type ArticleWithSettings = Article & {
  published: boolean;
  featured: boolean;
  mostRead: boolean;
  views: number;
};

export async function getArticlesWithSettings(): Promise<
  ArticleWithSettings[]
> {
  const articles = getAllArticles();

  const results = await Promise.all(
    articles.map(async (article) => {
      const settings = await getArticleSettings(
        article.slug
      );

      return {
        ...article,

        published:
          settings?.published ??
          article.published !== false,

        featured:
          settings?.featured ??
          article.featured === true,

        mostRead:
          settings?.most_read ??
          article.mostRead === true,

        views:
          settings?.views ??
          0,
      };
    })
  );

  return results;
}