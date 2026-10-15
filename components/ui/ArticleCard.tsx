import Link from "next/link";

type ArticleCardProps = {
  title: string;
  category: string;
  excerpt?: string;
  image?: string;
  slug: string;
};

export default function ArticleCard({
  title,
  category,
  excerpt,
  image,
  slug,
}: ArticleCardProps) {
  return (
    <article className="group">
      <Link href={`/articles/${slug}`} className="block">
        {image && (
          <div className="mb-4 aspect-[16/9] overflow-hidden bg-zinc-900">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        )}

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {category}
        </p>

        <h3 className="mt-1.5 font-serif text-xl font-bold leading-tight tracking-tight text-zinc-100 transition-colors group-hover:text-white md:text-[22px]">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {excerpt}
          </p>
        )}
      </Link>
    </article>
  );
}