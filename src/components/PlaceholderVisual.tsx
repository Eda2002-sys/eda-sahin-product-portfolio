type PlaceholderVisualProps = {
  label: string;
  note: string;
  className?: string;
  aspect?: "wide" | "square" | "tall";
};

const aspectClass = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

export function PlaceholderVisual({
  label,
  note,
  className = "",
  aspect = "wide",
}: PlaceholderVisualProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-sm border border-border bg-surface ${aspectClass[aspect]} ${className}`}
      aria-label={label}
    >
      {/* Replace this block with real screenshots/assets when available. */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(111,44,58,0.04),transparent_45%),repeating-linear-gradient(0deg,transparent,transparent_23px,rgba(226,221,213,0.55)_24px),repeating-linear-gradient(90deg,transparent,transparent_23px,rgba(226,221,213,0.55)_24px)] transition-transform duration-500 group-hover:scale-[1.015]" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <p className="visual-kicker">
          Visual placeholder
        </p>
        <div>
          <p className="case-section max-w-md">{label}</p>
          <p className="case-meta mt-2 max-w-lg text-muted">{note}</p>
        </div>
      </div>
    </figure>
  );
}
