type CaptionProps = { children: React.ReactNode };

export function Caption({ children }: CaptionProps) {
  return <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>;
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
      className={`rounded-sm border p-5 md:p-7 ${
        dark
          ? "border-navy bg-navy text-background"
          : "border-border bg-surface-elevated"
      } ${className}`}
    >
      {children}
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
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <p
          className={`text-[11px] uppercase tracking-[0.18em] ${
            dark ? "text-burgundy-soft" : "text-burgundy"
          }`}
        >
          {eyebrow}
        </p>
        <h3
          className={`mt-2 font-serif text-2xl md:text-3xl ${
            dark ? "text-background" : "text-navy"
          }`}
        >
          {title}
        </h3>
        {subtitle ? (
          <p
            className={`mt-2 text-sm ${dark ? "text-background/65" : "text-muted"}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {badge ? (
        <span
          className={`rounded-sm px-2.5 py-1 text-xs ${
            dark
              ? "border border-burgundy/45 text-burgundy-soft"
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
            className={`text-[11px] uppercase tracking-[0.14em] ${
              dark ? "text-background/50" : "text-muted"
            }`}
          >
            {item.label}
          </p>
          <p
            className={`mt-1 text-sm ${dark ? "text-background" : "text-navy"}`}
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
          className={`rounded-sm px-2.5 py-1 text-xs ${
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
          <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
            {card.number}
          </p>
          <h3 className="mt-3 font-serif text-xl text-navy md:text-2xl">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
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
            className={`text-[11px] uppercase tracking-[0.18em] ${
              dark ? "text-burgundy-soft" : "text-burgundy"
            }`}
          >
            0{index + 1}
          </p>
          <h3
            className={`mt-3 font-serif text-xl md:text-2xl ${
              dark ? "text-background" : "text-navy"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed ${
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
    <div className="grid gap-4 md:grid-cols-2">
      <Panel>
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
          {beforeLabel}
        </p>
        <ul className="mt-4 space-y-3">
          {before.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1 text-burgundy" aria-hidden="true">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Panel>
      <Panel dark>
        <p className="text-[11px] uppercase tracking-[0.18em] text-background/55">
          {afterLabel}
        </p>
        <ul className="mt-4 space-y-3">
          {after.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-background/85"
            >
              <span className="mt-1 text-burgundy-soft" aria-hidden="true">
                —
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
}: {
  steps: {
    number: string;
    label?: string;
    title: string;
    body: string;
  }[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}) {
  const gridClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2 xl:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {steps.map((step, index) => (
        <Panel
          key={step.number}
          dark={dark}
          className={`h-full ${index === 0 && !dark ? "border-burgundy/40" : ""}`}
        >
          <p
            className={`text-[11px] uppercase tracking-[0.18em] ${
              dark ? "text-burgundy-soft" : "text-burgundy"
            }`}
          >
            {step.number}
            {step.label ? ` · ${step.label}` : ""}
          </p>
          <h3
            className={`mt-3 font-serif text-xl ${
              dark ? "text-background" : "text-navy"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed ${
              dark ? "text-background/70" : "text-muted"
            }`}
          >
            {step.body}
          </p>
        </Panel>
      ))}
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
          <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
            {pillar.label}
          </p>
          <h3 className="mt-3 font-serif text-2xl text-navy">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
        </Panel>
      ))}
    </div>
  );
}
