type ArticleVideoProps = {
  src: string;
  title?: string;
};
 
export default function ArticleVideo({ src, title }: ArticleVideoProps) {
  return (
    // On large screens the video breaks out slightly wider than the text column.
    <figure className="my-12 md:my-14 lg:-mx-12">
      <div className="overflow-hidden rounded-sm bg-zinc-950 ring-1 ring-white/5">
        <div className="aspect-video">
          <iframe
            src={src}
            title={title ?? "Article video"}
            className="h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
 
      {/* Caption only shows when a title is passed in */}
      {title && (
        <figcaption className="mt-3 flex gap-3 text-xs leading-5 text-zinc-400 md:text-sm md:leading-6">
          <span
            aria-hidden="true"
            className="mt-1.5 h-3 w-0.5 shrink-0 bg-red-500 md:mt-2 md:h-3.5"
          />
          <span>{title}</span>
        </figcaption>
      )}
    </figure>
  );
}
 