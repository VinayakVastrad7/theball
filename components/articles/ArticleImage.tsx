type ArticleImageProps = {
  src: string;
  alt: string;
  caption?: string;
};
 
export default function ArticleImage({
  src,
  alt,
  caption,
}: ArticleImageProps) {
  return (
    // On large screens the image breaks out slightly wider than the text column.
    <figure className="my-12 md:my-14 lg:-mx-12">
      <div className="overflow-hidden rounded-sm bg-zinc-900 ring-1 ring-white/5">
        {/* !my-0 overrides the article page's [&_img] margin, which would
            otherwise add empty space inside the frame. */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="!my-0 !rounded-none h-auto w-full object-cover"
        />
      </div>
 
      {caption && (
        <figcaption className="mt-3 flex gap-3 text-xs leading-5 text-zinc-400 md:text-sm md:leading-6">
          <span
            aria-hidden="true"
            className="mt-1.5 h-3 w-0.5 shrink-0 bg-red-500 md:mt-2 md:h-3.5"
          />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}