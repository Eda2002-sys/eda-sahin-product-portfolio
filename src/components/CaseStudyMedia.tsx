import Image from "next/image";

type CaseStudyMediaProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  /** Prefer natural height for wide infographics; use framed for tall product shots. */
  layout?: "natural" | "framed" | "phone";
  className?: string;
};

export function CaseStudyMedia({
  src,
  alt,
  caption,
  priority = false,
  layout = "natural",
  className = "",
}: CaseStudyMediaProps) {
  if (layout === "phone") {
    return (
      <figure className={`mx-auto w-full max-w-[22rem] ${className}`}>
        <div className="relative aspect-[9/16] overflow-hidden rounded-sm border border-border bg-surface">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 88vw, 352px"
            className="object-cover object-top"
          />
        </div>
        {caption ? (
          <figcaption className="visual-caption mt-3">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (layout === "framed") {
    return (
      <figure className={className}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border bg-surface">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover object-top"
          />
        </div>
        {caption ? (
          <figcaption className="visual-caption mt-3">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="visual-caption mt-3">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
