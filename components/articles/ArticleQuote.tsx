type ArticleQuoteProps = {
  children: React.ReactNode;
  author?: string;
};
 
export default function ArticleQuote({
  children,
  author,
}: ArticleQuoteProps) {
  // Border, spacing and padding intentionally match the blockquote styles in
  // the article page, so quotes look identical whether written as markdown
  // ("> quote") or with <ArticleQuote>.
  return (
    <blockquote className="my-12 border-l-2 border-red-500 pl-6 md:pl-8">
      <span
        aria-hidden="true"
        className="block font-serif text-5xl leading-none text-red-500 md:text-6xl"
      >
        &ldquo;
      </span>
 
      <div className="mt-2 font-serif text-xl italic leading-relaxed text-zinc-100 md:text-2xl md:leading-10">
        {children}
      </div>
 
      {author && (
        <footer className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 not-italic">
          <span className="h-px w-6 bg-red-500" />
          {author}
        </footer>
      )}
    </blockquote>
  );
}
 