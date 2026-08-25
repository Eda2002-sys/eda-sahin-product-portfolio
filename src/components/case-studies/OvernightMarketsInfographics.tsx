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

export function OvernightHeroVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel dark className="overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-soft">
              Morning markets
            </p>
            <h3 className="mt-2 font-serif text-3xl text-background">
              Overnight briefing
            </h3>
          </div>
          <span className="rounded-sm border border-burgundy/50 px-2.5 py-1 text-xs text-burgundy-soft">
            Review ready
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Equities", "Moved"],
            ["FX", "Tracked"],
            ["Rates", "Updated"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-sm border border-background/15 bg-background/5 px-3 py-3"
            >
              <p className="text-xs text-background/55">{label}</p>
              <p className="mt-1 text-sm text-background">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <div className="rounded-sm border border-background/15 bg-background/5 p-4 lg:col-span-7">
            <p className="text-xs text-background/55">Cross-asset move</p>
            <svg
              viewBox="0 0 320 96"
              className="mt-4 h-24 w-full"
              aria-hidden="true"
            >
              <path
                d="M0 70 C40 68, 55 40, 90 48 C125 56, 140 22, 175 30 C210 38, 230 18, 260 28 C285 35, 300 20, 320 24"
                fill="none"
                stroke="var(--burgundy-soft)"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <ol className="space-y-2 lg:col-span-5">
            {["Macro", "Companies", "Commodities"].map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-sm border border-background/15 bg-background/5 px-3 py-3"
              >
                <span className="text-[11px] tracking-[0.14em] text-burgundy-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-background">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-background/65">
          Sources, material moves, and the first editorial draft stay in one
          review surface.
        </p>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function OvernightProblemVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      number: "01",
      title: "Collection competed with analysis",
      body: "Skilled professionals spent the earliest part of the day assembling recurring inputs before they could interpret what mattered.",
    },
    {
      number: "02",
      title: "The story crossed asset classes",
      body: "Equities, rates, foreign exchange, commodities, macro releases, and company events had to form one coherent market narrative.",
    },
    {
      number: "03",
      title: "Consistency still required judgment",
      body: "The report needed a stable structure and tone, but materiality, emphasis, and final wording remained editorial decisions.",
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
            <h3 className="mt-3 font-serif text-xl text-navy md:text-2xl">
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

export function OvernightApproachVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      title: "Start from the approved source universe",
      body: "The workflow uses the team's defined market-data, news, macroeconomic, and company-information inputs.",
    },
    {
      title: "Separate collection from editorial judgment",
      body: "Assembly and first drafting happen automatically; significance, interpretation, and publication stay with the professional team.",
    },
    {
      title: "Preserve a repeatable report grammar",
      body: "Recurring sections, terminology, timing context, and review states remain consistent from one morning to the next.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Panel key={card.title} dark className="h-full">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy-soft">
              0{index + 1}
            </p>
            <h3 className="mt-3 font-serif text-xl text-background md:text-2xl">
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

export function OvernightBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Monitor",
      title: "Scheduled source collection",
      body: "A defined overnight intake for market data, macro releases, news, and company developments.",
    },
    {
      label: "Triage",
      title: "Cross-market prioritization",
      body: "Events grouped by relevance to the report rather than presented as an undifferentiated feed.",
    },
    {
      label: "Compose",
      title: "Structured report editor",
      body: "Recurring sections arrive populated in the team's format, with source context available beside the draft.",
    },
    {
      label: "Control",
      title: "Editorial review and release",
      body: "Fact checks, comments, edits, approval status, and the final distribution handoff remain visible.",
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
            <h3 className="mt-3 font-serif text-2xl text-navy">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function OvernightJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      label: "Collect",
      title: "Gather the overnight source set",
      body: "The scheduled run assembles market moves, macro events, company developments, and the inputs required by each report section.",
    },
    {
      number: "02",
      label: "Prioritize",
      title: "Rank developments by report relevance",
      body: "Events are organized into the cross-asset picture, with source and timing context retained for the reviewer.",
    },
    {
      number: "03",
      label: "Draft",
      title: "Build the report in the established format",
      body: "The workflow prepares the market wrap and recurring asset, sector, company, and macro sections.",
    },
    {
      number: "04",
      label: "Review",
      title: "An analyst edits and releases the report",
      body: "The team checks facts, adjusts emphasis and interpretation, approves the final wording, and distributes through its existing process.",
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
            <h3 className="mt-3 font-serif text-xl text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </Panel>
        ))}
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Sanitized report preview — public-source walkthrough pattern, not a bank report. */
export function OvernightReportVisual({ caption }: { caption?: string }) {
  const regions = [
    {
      region: "Türkiye",
      instrument: "BIST 100",
      move: "−1.90%",
      note: "Official exchange close retained for local-market section.",
      source: "Borsa İstanbul",
    },
    {
      region: "Asia",
      instrument: "Nikkei 225",
      move: "about −4%",
      note: "Technology-led risk-off session in the regional wrap.",
      source: "Public market wrap",
    },
    {
      region: "Europe",
      instrument: "European shares",
      move: "opened lower",
      note: "Global technology weakness set the stated context.",
      source: "Public market report",
    },
    {
      region: "United States",
      instrument: "Wall Street",
      move: "indices lower",
      note: "Named company move retained for editorial review.",
      source: "Public market close",
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="grid lg:grid-cols-12">
          <aside className="border-b border-border bg-navy p-5 text-background lg:col-span-3 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy-soft">
              Morning markets
            </p>
            <p className="mt-3 text-sm text-background/70">
              17 July 2026 · 06:30 TRT
            </p>
            <p className="mt-1 text-xs text-background/50">
              English edition · Türkiye desk
            </p>
            <nav className="mt-6 space-y-2 text-sm">
              {["Report preview", "Source ledger", "Editorial review"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-sm px-3 py-2 ${
                      index === 0
                        ? "bg-burgundy text-background"
                        : "text-background/60"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </nav>
            <dl className="mt-8 space-y-3 border-t border-background/15 pt-4 text-xs">
              <div className="flex justify-between gap-3">
                <dt className="text-background/50">Source cutoff</dt>
                <dd>05:55 TRT</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-background/50">Evidence</dt>
                <dd>4 linked sources</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-background/50">Release</dt>
                <dd>Desk approval required</dd>
              </div>
            </dl>
          </aside>

          <div className="p-5 lg:col-span-9 md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Daily public-markets report
                </p>
                <h3 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                  Report preview
                </h3>
              </div>
              <span className="rounded-sm border border-border-strong px-2.5 py-1 text-xs text-muted">
                Draft · review required
              </span>
            </div>

            <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-burgundy">
              Morning note · public-source walkthrough
            </p>
            <p className="mt-2 max-w-3xl font-serif text-xl leading-snug text-navy md:text-2xl">
              Global technology selling crosses regions; Türkiye close requires
              desk review
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Sanitized product pattern using public-source style evidence
              handling — not a reproduction of a bank proprietary report.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {regions.map((item) => (
                <div
                  key={item.region}
                  className="rounded-sm border border-border bg-background p-3"
                >
                  <p className="text-xs text-muted">{item.region}</p>
                  <p className="mt-1 text-sm text-navy">
                    {item.instrument}{" "}
                    <span className="text-burgundy">{item.move}</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.note}
                  </p>
                  <p className="mt-2 text-[11px] text-burgundy">{item.source}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-sm bg-navy p-4 text-background">
                <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy-soft">
                  Market read
                </p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">
                  Cross-region technology weakness preceded lower European
                  trading and a lower U.S. close. Source summaries are retained
                  for review — not treated as analyst conclusions.
                </p>
              </div>
              <div className="rounded-sm border border-burgundy/30 bg-burgundy/[0.05] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
                  Türkiye implication · analyst-owned
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy">
                  The editor must decide whether the global risk-off context
                  changes the local-market read. The system preserves evidence;
                  it does not make that causal judgment.
                </p>
              </div>
            </div>

            <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
              The workflow makes the source-cutoff and editorial boundary
              explicit. The analyst owns the final Türkiye view and release.
            </p>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function OvernightOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Analysts began with repeated source collection and manual section assembly.",
    "Material developments had to be reconciled across multiple market views.",
    "Review began only after much of the morning production work was complete.",
  ];
  const after = [
    "A scheduled draft arrives in the established report structure.",
    "Sources and timing context remain attached to material statements.",
    "The professional team starts with review, interpretation, and editing.",
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
            After
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
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
