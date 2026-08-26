type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2
        id={id}
        className="font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
