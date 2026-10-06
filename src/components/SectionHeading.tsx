type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Wider description; default stays readable (max-w-3xl). */
  descriptionWide?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptionWide = false,
  id,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id} className="case-section text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={`case-body mt-3 text-pretty md:mt-4 ${
            descriptionWide ? "max-w-none" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
