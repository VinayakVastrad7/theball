import { supabase } from "@/lib/supabase";

export type ArticleSettings = {
  slug: string;
  published: boolean;
  featured: boolean;
  most_read: boolean;
  views: number;
};

export async function getArticleSettings(
  slug: string
): Promise<ArticleSettings | null> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "slug, published, featured, most_read, views"
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(
      `Failed to load article settings for ${slug}:`,
      error
    );

    return null;
  }

  return data;
}