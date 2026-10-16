import type { MetadataRoute } from "next";

import {
  getPublishedArticlesFromDatabase,
} from "@/lib/articles";

const siteUrl = "https://theball.lol";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles =
    await getPublishedArticlesFromDatabase();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/latest`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/case-files`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/investigation-pieces`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
  url: `${siteUrl}/features`,
  changeFrequency: "weekly",
  priority: 0.8,
},
  ];

  const articlePages: MetadataRoute.Sitemap =
    articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticPages,
    ...articlePages,
  ];
}