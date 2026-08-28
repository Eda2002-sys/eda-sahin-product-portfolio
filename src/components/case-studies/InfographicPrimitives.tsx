type CaptionProps = { children: React.ReactNode };

export function Caption({ children }: CaptionProps) {
  return <p className="visual-caption">{children}</p>;
}

export function Panel({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`${dark ? "visual-panel visual-panel--dark" : "visual-panel"} p-5 md:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function VisualHeader({
  eyebrow,
  title,
  subtitle,
  end,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  end?: React.ReactNode;
}) {
  return (
    <div className="visual-header">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="visual-kicker">{eyebrow}</p>
          <h3 className="case-subhead mt-2">{title}</h3>
          {subtitle ? (
            <p className="case-meta mt-2 text-muted">{subtitle}</p>
          ) : null}
        </div>
        {end ? <div className="shrink-0">{end}</div> : null}
      </div>
    </div>
  );
}

export function SectionLabel({
  eyebrow,
  title,
  subtitle,
  badge,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  badge?: string;
  dark?: boolean;
}) {
  return (
    <div className="@container flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0">
        <p
          className={
            dark ? "visual-kicker visual-kicker--on-dark" : "visual-kicker"
          }
        >
          {eyebrow}
        </p>
        <h3
          className={`case-subhead mt-2 ${
            dark ? "!text-background" : ""
          }`}
        >
          {title}
        </h3>
        {subtitle ? (
          <p
            className={`case-meta mt-2 ${dark ? "text-background/65" : "text-muted"}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {badge ? (
        <span
          className={`rounded-sm px-2.5 py-1 visual-ui-mock ${
            dark
              ? "border border-burgundy-on-dark/45 text-burgundy-on-dark"
              : "border border-border text-muted"
          }`}
        >
          {badge}
        </span>
      ) : null}
    </div>
  );
}

export function StatStrip({
  items,
  dark = false,
}: {
  items: { label: string; value: string }[];
  dark?: boolean;
}) {
  return (
    <div
      className={`grid border-t ${
        dark ? "border-background/15" : "border-border"
      }`}
      style={{
        gridTemplateColumns: `repeat(${Math.min(items.length, 5)}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={`border-b px-4 py-3 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
            dark ? "border-background/15" : "border-border"
          }`}
        >
          <p
            className={
              dark
                ? "visual-kicker text-background/50"
                : "visual-kicker text-muted"
            }
          >
            {item.label}
          </p>
          <p
            className={`mt-1 case-meta ${dark ? "text-background" : "text-navy"}`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PillRow({
  pills,
  activeIndex = 0,
  dark = false,
}: {
  pills: string[];
  activeIndex?: number;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill, index) => (
        <span
          key={pill}
          className={`rounded-sm px-2.5 py-1 visual-ui-mock ${
            index === activeIndex
              ? dark
                ? "bg-burgundy text-background"
                : "bg-navy text-background"
              : dark
                ? "border border-background/15 text-background/60"
                : "border border-border text-muted"
          }`}
        >
          {pill}
        </span>
      ))}
    </div>
  );
}

export function ProblemCards({
  cards,
}: {
  cards: { number: string; title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Panel key={card.number} className="h-full">
          <p className="visual-kicker">
            {card.number}
          </p>
          <h3 className="case-subhead mt-3">{card.title}</h3>
          <p className="case-meta mt-3 text-muted">{card.body}</p>
        </Panel>
      ))}
    </div>
  );
}

export function ApproachCards({
  cards,
  dark = false,
}: {
  cards: { title: string; body: string }[];
  dark?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <Panel key={card.title} dark={dark} className="h-full">
          <p
            className={
              dark
                ? "visual-kicker visual-kicker--on-dark"
                : "visual-kicker"
            }
          >
            0{index + 1}
          </p>
          <h3
            className={`case-subhead mt-3 ${
              dark ? "!text-background" : ""
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`case-meta mt-3 ${
              dark ? "text-background/70" : "text-muted"
            }`}
          >
            {card.body}
          </p>
        </Panel>
      ))}
    </div>
  );
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string[];
  after: string[];
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
      <Panel className="h-full">
        <p className="visual-kicker text-muted">
          {beforeLabel}
        </p>
        <ul className="mt-4 space-y-3.5">
          {before.map((item) => (
            <li key={item} className="flex gap-3 case-meta text-muted">
              <span className="mt-1.5 text-border-strong" aria-hidden="true">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Panel>
      <Panel dark className="h-full">
        <p className="visual-kicker visual-kicker--on-dark">
          {afterLabel}
        </p>
        <ul className="mt-4 space-y-3.5">
          {after.map((item) => (
            <li
              key={item}
              className="flex gap-3 case-meta text-background/85"
            >
              <span
                className="mt-1.5 text-burgundy-on-dark"
                aria-hidden="true"
              >
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export function JourneySteps({
  steps,
  columns = 4,
  dark = false,
  highlightIndex,
}: {
  steps: {
    number: string;
    label?: string;
    title: string;
    body: string;
  }[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
  highlightIndex?: number;
}) {
  const gridClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2 xl:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {steps.map((step, index) => {
        const isHighlight = highlightIndex === index;
        return (
        <Panel
          key={step.number}
          dark={dark}
          className={`h-full ${
            isHighlight
              ? "!border-burgundy/45 bg-burgundy/[0.04]"
              : index === 0 && !dark && highlightIndex === undefined
                ? "!border-burgundy/35"
                : ""
          }`}
        >
          <p
            className={
              dark
                ? "visual-kicker visual-kicker--on-dark"
                : "visual-kicker"
            }
          >
            {step.number}
            {step.label ? ` · ${step.label}` : ""}
          </p>
          <h3
            className={`case-subhead mt-3 ${
              dark ? "!text-background" : ""
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`case-meta mt-3 ${
              dark ? "text-background/70" : "text-muted"
            }`}
          >
            {step.body}
          </p>
        </Panel>
        );
      })}
    </div>
  );
}

export function BuildPillars({
  pillars,
  columns = 2,
}: {
  pillars: { label: string; title: string; body: string }[];
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 3
      ? "sm:grid-cols-3"
      : columns === 4
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {pillars.map((pillar) => (
        <Panel key={pillar.label} className="h-full">
          <p className="visual-kicker">
            {pillar.label}
          </p>
          <h3 className="case-subhead mt-3">{pillar.title}</h3>
          <p className="case-meta mt-3 text-muted">{pillar.body}</p>
        </Panel>
      ))}
    </div>
  );
}
