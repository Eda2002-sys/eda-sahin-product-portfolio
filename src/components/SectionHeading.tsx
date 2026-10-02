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
    <div>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="case-section text-balance">
        {title}
      </h2>
      {description ? (
        <p className="case-body mt-3 max-w-3xl text-pretty md:mt-4">
          {description}
        </p>
      ) : null}
    </div>
  );
}
