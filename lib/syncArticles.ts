
import { getAllArticles } from "@/lib/articles";
import { supabase } from "@/lib/supabase";

export async function syncArticlesToSupabase() {
  const articles = getAllArticles();

  for (const article of articles) {
    const { error } = await supabase
      .from("articles")
      .upsert(
        {
          slug: article.slug,

          published: article.published !== false,
          featured: article.featured === true,
          most_read: article.mostRead === true,

          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "slug",
        }
      );

    if (error) {
      console.error(
        `Failed to sync ${article.slug}:`,
        error
      );
    }
  }
}
