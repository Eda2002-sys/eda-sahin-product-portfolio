type CaptionProps = { children: React.ReactNode };

function Caption({ children }: CaptionProps) {
  return <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>;
}

function Panel({
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

export function CreHeroVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel dark className="overflow-hidden">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2.5 text-sm text-background/60">
            <span aria-hidden="true">⌕</span>
            Search address, city, or ZIP
          </div>
          <span className="rounded-sm border border-background/15 px-3 py-2 text-sm text-background/70">
            Map
          </span>
        </div>

        <div className="relative mt-5 h-48 overflow-hidden rounded-sm border border-background/15 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-[28%] top-[42%] h-3 w-3 rounded-full bg-burgundy-on-dark ring-4 ring-burgundy/30" />
          <div className="absolute left-[48%] top-[36%] h-3 w-3 rounded-full bg-background/50" />
          <div className="absolute left-[62%] top-[58%] h-3 w-3 rounded-full bg-background/50" />
          <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-xs text-background">
            ⊕
          </div>
          <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.14em] text-background/45">
            Sanitized geographic canvas
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-background/15 bg-background/5 px-4 py-3">
          <div>
            <p className="text-sm text-background">Selected property</p>
            <p className="mt-1 text-xs text-background/55">
              Auction · location · bid context · source status
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-sm border border-burgundy/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-burgundy-on-dark">
              Map ↔ table synced
            </span>
            <span className="rounded-sm bg-burgundy px-2.5 py-1 text-xs text-background">
              Sanitized
            </span>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreApproachVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      title: "Map and table describe the same record",
      body: "Every filter and selection updates both views so geography and underlying fields do not become separate versions of the market.",
    },
    {
      title: "Qualification remains inspectable",
      body: "Source, status, asset attributes, location context, bid information, and analyst corrections are visible on the selected record.",
    },
    {
      title: "Failure states are part of the interface",
      body: "Unavailable map services, missing coordinates, incomplete rows, and empty results are presented clearly rather than disguised as usable data.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Panel key={card.title} dark className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-on-dark">
              0{index + 1}
            </p>
            <h3 className="mt-3 text-xl text-background md:text-2xl">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              {card.body}
            </p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreWorkspaceVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Property intelligence
              </p>
              <h3 className="mt-2 text-2xl text-navy md:text-3xl">
                Market map and property review
              </h3>
            </div>
            <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
              Sanitized interactive product view
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-sm border border-border px-3 py-2.5 text-sm text-muted">
              <span aria-hidden="true">⌕</span>
              Search sanitized market, asset type or record…
            </div>
            <span className="rounded-sm border border-border px-3 py-2.5 text-sm text-muted">
              All asset types
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-6 lg:border-b-0 lg:border-r md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium text-navy">Market map</p>
                <p className="text-xs text-muted">4 synchronized sanitized records</p>
              </div>
              <span className="rounded-sm border border-border px-2 py-0.5 text-[11px] text-muted">
                Map + table share one selection
              </span>
            </div>
            <div className="relative mt-4 h-56 overflow-hidden rounded-sm border border-border bg-[linear-gradient(0deg,rgba(26,31,46,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,31,46,0.04)_1px,transparent_1px)] bg-[size:20px_20px]">
              <div className="absolute left-[30%] top-[40%] h-3.5 w-3.5 rounded-full bg-burgundy ring-4 ring-burgundy/20" />
              <div className="absolute left-[52%] top-[28%] h-3 w-3 rounded-full bg-navy/30" />
              <div className="absolute left-[44%] top-[62%] h-3 w-3 rounded-full bg-navy/30" />
              <div className="absolute left-[68%] top-[48%] h-3 w-3 rounded-full bg-navy/30" />
              <p className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.12em] text-muted">
                Not a live listing map
              </p>
            </div>
          </div>

          <div className="p-5 lg:col-span-6 md:p-6">
            <p className="text-2xl text-navy">Northside retail parcel</p>
            <p className="mt-1 text-sm text-muted">Central corridor · Retail</p>

            <dl className="mt-5 space-y-2">
              {[
                ["Auction state", "Open review"],
                ["Source state", "Source record linked"],
                ["Qualification", "Needs analyst review"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 rounded-sm border border-border px-3 py-2.5 text-sm"
                >
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-navy">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 text-xs text-muted">
              Address and pricing deliberately withheld in this sanitized
              demonstration.
            </p>

            <div className="mt-4 rounded-sm border border-border bg-background p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
                Analyst note or correction
              </p>
              <p className="mt-2 text-sm text-muted">
                Record a source correction or qualification note…
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-sm border border-border px-3 py-2 text-sm text-muted">
                Save note
              </span>
              <span className="rounded-sm border border-border px-3 py-2 text-sm text-muted">
                Compare record
              </span>
              <span className="rounded-sm bg-navy px-3 py-2 text-sm text-background">
                Mark reviewed handoff
              </span>
            </div>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      label: "Ingest",
      title: "Structure property and auction records",
      body: "Incoming data is normalized into consistent asset, location, status, bid, and source fields.",
    },
    {
      number: "02",
      label: "Explore",
      title: "Filter the market geographically and analytically",
      body: "Users narrow by market, property attributes, auction state, and other criteria while the map and list stay synchronized.",
    },
    {
      number: "03",
      label: "Review",
      title: "Open the full context for a selected asset",
      body: "A record view combines location, property facts, auction and bid context, source status, and analyst notes.",
    },
    {
      number: "04",
      label: "Carry",
      title: "Correct, compare, and hand off the qualified set",
      body: "Analysts update reviewed fields and move the selected opportunity set into the next advisory or investment workflow.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Panel
            key={step.number}
            className={`h-full ${index === 0 ? "border-burgundy/40" : ""}`}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {step.number} · {step.label}
            </p>
            <h3 className="mt-3 text-xl text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Data",
      title: "Property and auction intake",
      body: "Structured ingestion, field normalization, location handling, status tracking, and correction workflows.",
    },
    {
      label: "Explore",
      title: "Interactive market map",
      body: "Geographic search, synchronized pins and records, clustering context, filters, zoom, and selected-asset focus.",
    },
    {
      label: "Qualify",
      title: "Property detail and comparison",
      body: "Asset facts, auction timing, bid context, source state, analyst review, and comparable records.",
    },
    {
      label: "Deliver",
      title: "Reviewed opportunity output",
      body: "Corrected, qualified sets that can move into advisory analysis, discussion, or client materials.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <Panel key={pillar.label} className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {pillar.label}
            </p>
            <h3 className="mt-3 text-2xl text-navy">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreSheetVisual({ caption }: { caption?: string }) {
  const rows = [
    {
      name: "Corridor retail parcel",
      city: "City A",
      type: "Retail",
      size: "4,500 SF",
      status: "Did not sell",
    },
    {
      name: "Flex industrial unit",
      city: "City B",
      type: "Industrial",
      size: "12,000 SF",
      status: "Sold",
    },
    {
      name: "Office conversion site",
      city: "City C",
      type: "Office",
      size: "8 units",
      status: "Pending",
    },
    {
      name: "Mixed-use land tract",
      city: "City D",
      type: "Land",
      size: "2.1 acres",
      status: "Open review",
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Properties sheet
              </p>
              <h3 className="mt-2 text-2xl text-navy">
                Structured market records
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All properties", "Upcoming auctions", "Insights"].map(
                (tab, index) => (
                  <span
                    key={tab}
                    className={`rounded-sm px-2.5 py-1.5 text-xs ${
                      index === 0
                        ? "bg-navy text-background"
                        : "border border-border text-muted"
                    }`}
                  >
                    {tab}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto px-5 py-5 md:px-7">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-navy text-[11px] uppercase tracking-[0.12em] text-background">
                <th className="px-3 py-3 font-medium">Property</th>
                <th className="px-3 py-3 font-medium">City</th>
                <th className="px-3 py-3 font-medium">Asset type</th>
                <th className="px-3 py-3 font-medium">Size</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-b border-border/70">
                  <td className="px-3 py-3 text-navy">{row.name}</td>
                  <td className="px-3 py-3 text-muted">{row.city}</td>
                  <td className="px-3 py-3 text-muted">{row.type}</td>
                  <td className="px-3 py-3 text-muted">{row.size}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-muted">
            Sanitized sheet pattern: addresses, bids and live volumes withheld.
          </p>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreInsightsVisual({ caption }: { caption?: string }) {
  const bars = [
    { label: "Retail", height: 88 },
    { label: "Industrial", height: 64 },
    { label: "Office", height: 52 },
    { label: "Multifamily", height: 70 },
    { label: "Land", height: 40 },
    { label: "Hotel", height: 58 },
  ];

  return (
    <figure>
      <Panel>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
              Insights
            </p>
            <h3 className="mt-2 text-2xl text-navy">
              Market pattern review
            </h3>
            <p className="mt-1 text-sm text-muted">
              Illustrative product pattern, not live auction performance.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-surface px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
              Review signal
            </p>
            <p className="mt-1 text-sm text-navy">Sell-through by asset type</p>
          </div>
        </div>

        <div className="mt-6 flex h-40 items-end gap-3 border-b border-border pb-0">
          {bars.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-sm bg-burgundy/70"
                style={{ height: `${bar.height}%` }}
                aria-hidden="true"
              />
              <span className="text-[10px] text-muted">{bar.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Map filters", "Asset · date · size"],
            ["List sync", "Same selection as map"],
            ["Handoff", "Reviewed opportunity set"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-sm border border-border px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                {label}
              </p>
              <p className="mt-1 text-sm text-navy">{value}</p>
            </div>
          ))}
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function CreOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Property, location, auction, and bid context lived in separate files and tools.",
    "Analysts manually recreated filters and geographic comparisons.",
    "Review notes and corrected records were difficult to carry forward consistently.",
  ];
  const after = [
    "Map and table operate on one structured property record.",
    "Market filters, selected-asset context, and auction information stay synchronized.",
    "Reviewed records and opportunity sets can be corrected and carried forward from the same workspace.",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Before
          </p>
          <ul className="mt-4 space-y-3">
            {before.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-1 text-burgundy" aria-hidden="true">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel dark>
          <p className="text-[11px] uppercase tracking-[0.18em] text-background/55">
            After
          </p>
          <ul className="mt-4 space-y-3">
            {after.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-background/85"
              >
                <span className="mt-1 text-burgundy-on-dark" aria-hidden="true">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
