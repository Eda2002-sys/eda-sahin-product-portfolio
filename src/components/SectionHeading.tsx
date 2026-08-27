type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  /** Wider measure for longer section intros (e.g. Selected Work). */
  wide?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  wide = false,
}: SectionHeadingProps) {
  return (
    <div className={wide ? "max-w-5xl" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="case-section">
        {title}
      </h2>
      {description ? (
        <p className="case-body mt-4">{description}</p>
      ) : null}
    </div>
  );
}
