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

export function LpHeroVisual({ caption }: { caption?: string }) {
  const nodes = [
    { label: "Pension", position: "left-4 top-4 md:left-8 md:top-6" },
    { label: "Manager", position: "right-4 top-4 md:right-8 md:top-6" },
    { label: "Advisor", position: "left-4 bottom-16 md:left-8 md:bottom-20" },
    { label: "Fund", position: "right-4 bottom-16 md:right-8 md:bottom-20" },
  ];

  return (
    <figure>
      <Panel dark className="relative overflow-hidden min-h-[22rem]">
        <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-on-dark">
          Investor intelligence
        </p>
        <p className="mt-2 max-w-md text-2xl text-background md:text-3xl">
          Relationships stay linked to evidence
        </p>

        <div className="relative mx-auto mt-8 h-56 max-w-lg md:h-64">
          <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-burgundy/50 bg-burgundy/20 shadow-[0_0_40px_rgba(111,44,58,0.35)]">
            <span className="text-[10px] uppercase tracking-[0.14em] text-background">
              Entity
            </span>
          </div>

          {nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute ${node.position} w-[7.5rem] rounded-sm border border-background/15 bg-background/5 px-3 py-2.5 md:w-40`}
            >
              <p className="text-sm text-background">{node.label}</p>
              <p className="mt-1 text-[11px] text-background/55">
                Evidence linked
              </p>
            </div>
          ))}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <line
              x1="50%"
              y1="50%"
              x2="18%"
              y2="22%"
              stroke="color-mix(in srgb, var(--burgundy-on-dark) 70%, transparent)"
              strokeDasharray="4 4"
            />
            <line
              x1="50%"
              y1="50%"
              x2="82%"
              y2="22%"
              stroke="color-mix(in srgb, var(--burgundy-on-dark) 70%, transparent)"
              strokeDasharray="4 4"
            />
            <line
              x1="50%"
              y1="50%"
              x2="18%"
              y2="78%"
              stroke="color-mix(in srgb, var(--burgundy-on-dark) 70%, transparent)"
              strokeDasharray="4 4"
            />
            <line
              x1="50%"
              y1="50%"
              x2="82%"
              y2="78%"
              stroke="color-mix(in srgb, var(--burgundy-on-dark) 70%, transparent)"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        <div className="mx-auto mt-2 flex max-w-md items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2.5 text-sm text-background/60">
          <span aria-hidden="true">⌕</span>
          Mandate · portfolio · relationship
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function LpProblemVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      number: "01",
      title: "Evidence was fragmented",
      body: "Official sites, filings, allocation documents, manager pages, PDFs, news, and internal records each contained only part of the investor picture.",
    },
    {
      number: "02",
      title: "Identity errors compounded downstream",
      body: "Aliases, similarly named institutions, managers, funds, and subsidiaries made a weak match dangerous to normalize into a canonical profile.",
    },
    {
      number: "03",
      title: "Research decayed after the project",
      body: "One-off spreadsheets preserved conclusions but rarely preserved source lineage, conflicts, freshness, and the next verification step.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Panel key={card.number} className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {card.number}
            </p>
            <h3 className="mt-3 text-xl text-navy md:text-2xl">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function LpApproachVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      title: "Gate before writing",
      body: "Candidate evidence is checked for entity fit, relevance, duplication, and source strength before it can update a maintained record.",
    },
    {
      title: "Preserve claim-level lineage",
      body: "Mandate, allocation, portfolio, relationship, and contact signals remain connected to the source from which they were derived.",
    },
    {
      title: "Make gaps part of the product",
      body: "Missing, stale, conflicting, or review-pending fields remain visible so an analyst knows what to verify next.",
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

export function LpJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      label: "Discover",
      title: "Find candidate institutions and evidence",
      body: "Search, official sites, filings, PDFs, feeds, and reviewed internal records create a candidate evidence set.",
    },
    {
      number: "02",
      label: "Gate",
      title: "Resolve identity, relevance, and duplicates",
      body: "The system checks whether evidence belongs to the target and whether the entity already exists under another name.",
    },
    {
      number: "03",
      label: "Structure",
      title: "Extract and normalize decision signals",
      body: "Accepted evidence becomes profiles, mandate context, portfolio observations, relationships, and freshness signals.",
    },
    {
      number: "04",
      label: "Decide",
      title: "Serve a briefing with evidence and gaps",
      body: "A professional can screen fit, open the supporting source, see unresolved questions, and prepare the next verification or outreach action.",
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

export function LpSearchVisual({ caption }: { caption?: string }) {
  const steps = [
    "Define the mandate",
    "Resolve identity",
    "Check the evidence",
    "Shortlist or reject",
  ];

  const decisions = [
    {
      title: "CPPIB",
      status: "Duplicate resolved",
      detail: "Canonical entity: CPP Investments",
      active: true,
    },
    {
      title: "Unnamed pension candidate",
      status: "Hold for identity evidence",
      detail: "No canonical entity match",
      active: false,
    },
    {
      title: "Candidate research note",
      status: "Rejected from shortlist",
      detail: "Mandate evidence not sufficient",
      active: false,
    },
  ];

  const rows = [
    {
      institution: "CalPERS",
      type: "Public pension",
      hq: "United States",
      focus: "Private equity · Infrastructure",
      evidence: "Official annual report",
    },
    {
      institution: "CPP Investments",
      type: "Public pension",
      hq: "Canada",
      focus: "Infrastructure · Real assets",
      evidence: "Official annual report",
    },
    {
      institution: "AustralianSuper",
      type: "Superannuation fund",
      hq: "Australia",
      focus: "Real assets · Private markets",
      evidence: "Official investment page",
    },
    {
      institution: "Mubadala",
      type: "Sovereign investor",
      hq: "United Arab Emirates",
      focus: "Global alternatives",
      evidence: "Reviewed official results",
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Investor finder
              </p>
              <h3 className="mt-2 text-2xl text-navy md:text-3xl">
                Search and qualify institutional investors
              </h3>
            </div>
            <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
              Sanitized product view
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {steps.map((step, index) => (
              <span
                key={step}
                className={`rounded-sm px-2.5 py-1.5 text-xs ${
                  index === 1
                    ? "bg-navy text-background"
                    : "border border-border text-muted"
                }`}
              >
                {index + 1}. {step}
              </span>
            ))}
          </div>
        </div>

        <div className="border-b border-border px-5 py-5 md:px-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-navy">
                Candidate intake and entity resolution
              </p>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                Discovery is not a profile. A candidate must resolve to one
                entity, show usable evidence, and pass mandate review before it
                reaches a shortlist.
              </p>
            </div>
            <p className="text-xs text-muted">3 decision states</p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {decisions.map((item) => (
              <div
                key={item.title}
                className={`rounded-sm border p-3 ${
                  item.active
                    ? "border-burgundy/40 bg-burgundy/[0.04]"
                    : "border-border"
                }`}
              >
                <p className="text-sm text-navy">{item.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-burgundy">
                  {item.status}
                </p>
                <p className="mt-1 text-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-sm border border-border bg-surface px-3 py-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Decision trace
            </p>
            <p className="mt-1 text-sm text-navy">
              Merge this evidence with the existing profile; do not create a
              second record.
            </p>
          </div>
        </div>

        <div className="px-5 py-5 md:px-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-sm border border-border px-3 py-2.5 text-sm text-muted">
              <span aria-hidden="true">⌕</span>
              Search investor, country or focus…
            </div>
            <div className="rounded-sm border border-border px-3 py-2.5 text-sm text-muted">
              All investor types
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-[11px] uppercase tracking-[0.12em] text-muted">
                  <th className="pb-3 font-medium">Institution</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">HQ</th>
                  <th className="pb-3 font-medium">Recorded focus</th>
                  <th className="pb-3 font-medium">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.institution} className="border-b border-border/70">
                    <td className="py-3 text-navy">{row.institution}</td>
                    <td className="py-3 text-muted">{row.type}</td>
                    <td className="py-3 text-muted">{row.hq}</td>
                    <td className="py-3 text-muted">{row.focus}</td>
                    <td className="py-3">
                      <span className="rounded-sm bg-burgundy/10 px-2 py-0.5 text-xs text-burgundy">
                        {row.evidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function LpBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Search",
      title: "Entity and evidence discovery",
      body: "Institution, manager, fund, document, contact, market, and relationship discovery across defined source classes.",
    },
    {
      label: "Evidence",
      title: "Extraction and provenance",
      body: "Structured observations from accepted documents and pages, retained with source and association context.",
    },
    {
      label: "Profile",
      title: "Canonical investor record",
      body: "Normalized identity, mandate, portfolio, allocation, relationship, readiness, freshness, and conflict signals.",
    },
    {
      label: "Brief",
      title: "Decision and outreach preparation",
      body: "Source-backed briefings, relationship maps, target context, and the specific checks still required.",
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

export function LpOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Research ended in static lists and disconnected notes.",
    "Source quality and entity identity were difficult to audit later.",
    "Analysts repeated discovery whenever a new question arose.",
  ];
  const after = [
    "Profiles are built from retained, associated evidence.",
    "Conflicts, gaps, and freshness are visible beside the investor view.",
    "Briefings begin from maintained context and identify the next check.",
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
