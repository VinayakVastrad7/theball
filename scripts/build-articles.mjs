import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/articles");
const out = path.join(process.cwd(), "lib/articles.generated.json");

const articles = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    return { ...data, content };
  });

fs.writeFileSync(out, JSON.stringify(articles));
console.log(`Generated ${articles.length} articles`);