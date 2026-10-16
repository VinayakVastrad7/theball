
import { getPublishedArticlesFromDatabase } from "@/lib/articles";

const siteUrl = "https://theball.lol";

export async function GET() {
  const articles = await getPublishedArticlesFromDatabase();

  const staticPages = [
    siteUrl,
    `${siteUrl}/latest`,
    `${siteUrl}/features`,
    `${siteUrl}/investigation-pieces`,
    `${siteUrl}/case-files`,
  ];

  const articleUrls = articles.map(
    (article) => `${siteUrl}/articles/${article.slug}`
  );

  const body = [...staticPages, ...articleUrls].join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
