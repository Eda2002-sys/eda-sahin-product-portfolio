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

/** Hero: clinical document → structured record (sanitized editorial mock). */
export function HautonomyHeroVisual({ caption }: { caption?: string }) {
  return (
    <figure className="@container min-w-0">
      <Panel className="overflow-visible !p-0">
        <div className="border-b border-border bg-surface px-4 py-4 @[28rem]:px-5 @[42rem]:px-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
            Lab ingestion
          </p>
          <p className="mt-2 font-serif text-xl text-navy @[28rem]:text-2xl @[42rem]:text-3xl">
            From clinical document to review-ready record
          </p>
        </div>

        <div className="grid gap-0 @[36rem]:grid-cols-2">
          <div className="border-b border-border p-4 @[28rem]:p-5 @[36rem]:border-b-0 @[36rem]:border-r @[42rem]:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-navy">Clinical document</p>
                <p className="text-xs text-muted">Original retained</p>
              </div>
              <span className="rounded-sm border border-border px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                PDF
              </span>
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-2 rounded-sm bg-border/80" />
              <div className="h-2 w-4/5 rounded-sm bg-border/70" />
              <div className="h-2 w-3/5 rounded-sm bg-border/60" />
            </div>
            <div className="mt-4 rounded-sm border border-dashed border-burgundy/40 bg-burgundy/[0.04] p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
                Extraction zone
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-navy">
                LDL-Chol · 3.4 mmol/L
                <br />
                HbA1c · 5.8%
              </p>
            </div>
          </div>

          <div className="bg-navy p-4 text-background @[28rem]:p-5 @[42rem]:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium">Structured record</p>
                <p className="text-xs text-background/60">Ready for review</p>
              </div>
              <span className="rounded-sm bg-burgundy px-2 py-1 text-[10px] uppercase tracking-[0.12em]">
                Linked
              </span>
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Marker", "Canonical name"],
                ["Unit", "Normalized"],
                ["Range", "Source-linked"],
                ["Trend", "Awaiting approval"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-background/10 pb-2"
                >
                  <dt className="text-background/55">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-background/60">
              Extraction structures information: clinical judgment stays human.
            </p>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function HautonomyProblemVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      number: "01",
      title: "The same marker appeared in different forms",
      body: "Names, units, decimal conventions, ranges, panels, and page layouts varied across providers and document types.",
    },
    {
      number: "02",
      title: "Manual entry separated value from evidence",
      body: "Re-keying slowed the process and could detach a number from the page, date, unit, range, or document where it appeared.",
    },
    {
      number: "03",
      title: "Trends required normalization and review",
      body: "A longitudinal view was only meaningful after field matching, unit handling, date alignment, exception review, and professional approval.",
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

export function HautonomyApproachVisual({ caption }: { caption?: string }) {
  const cards = [
    {
      title: "Keep the original beside the extraction",
      body: "Reviewers can compare the structured value with the source page, including surrounding labels, units, and reference ranges.",
    },
    {
      title: "Normalize without erasing context",
      body: "Canonical marker names and longitudinal organization sit alongside the original label, unit, range, document date, and source.",
    },
    {
      title: "Separate processing from clinical judgment",
      body: "The system structures information; authorized professionals review exceptions and remain responsible for interpretation and care decisions.",
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

export function HautonomyBuildVisual({ caption }: { caption?: string }) {
  const pillars = [
    {
      label: "Intake",
      title: "Document and image processing",
      body: "Approved upload, page handling, source metadata, extraction status, and visible failure states.",
    },
    {
      label: "Extract",
      title: "Structured observation capture",
      body: "Candidate test name, result, unit, range, date, panel, and the location within the original source.",
    },
    {
      label: "Organize",
      title: "Normalization and trends",
      body: "Canonical markers, original labels, historical observations, reference context, and longitudinal views.",
    },
    {
      label: "Review",
      title: "Professional exception handling",
      body: "Side-by-side source comparison, uncertain matches, corrections, approval, and retained reviewer state.",
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

export function HautonomyJourneyVisual({ caption }: { caption?: string }) {
  const steps = [
    {
      number: "01",
      label: "Intake",
      title: "Upload an approved PDF or image",
      body: "The workflow records document context and prepares pages for text and visual extraction.",
    },
    {
      number: "02",
      label: "Extract",
      title: "Identify candidate observations",
      body: "Test names, values, units, ranges, dates, and panel context are captured from the source material.",
    },
    {
      number: "03",
      label: "Normalize",
      title: "Map observations into the longitudinal record",
      body: "Markers are matched to the maintained schema while original labels and source context remain available.",
    },
    {
      number: "04",
      label: "Review",
      title: "Resolve exceptions before professional use",
      body: "An authorized reviewer compares the original and structured views, corrects uncertain matches, and approves the record.",
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

/** Sanitized review workspace: inspired by product, no real patient data. */
export function HautonomyReviewVisual({ caption }: { caption?: string }) {
  const stepper = [
    "Upload",
    "Extract",
    "Compare",
    "Resolve",
    "Approve",
  ];

  const markers = [
    {
      name: "Haemoglobin A1c",
      value: "5.8%",
      status: "Above range",
      tone: "warn" as const,
    },
    {
      name: "LDL Cholesterol",
      value: "3.4 mmol/L",
      status: "Selected",
      tone: "active" as const,
    },
    {
      name: "LDL Cholesterol",
      value: "3.6 mmol/L",
      status: "Conflict",
      tone: "conflict" as const,
    },
    {
      name: "Alanine aminotransferase",
      value: "32 U/L",
      status: "In range",
      tone: "ok" as const,
    },
  ];

  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border px-5 py-4 md:px-7">
          <div className="flex flex-wrap gap-2">
            {stepper.map((step, index) => (
              <span
                key={step}
                className={`rounded-sm px-2.5 py-1 text-xs ${
                  index === 3
                    ? "bg-burgundy text-background"
                    : "border border-border text-muted"
                }`}
              >
                {index + 1}. {step}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">
            Approved intake:{" "}
            <span className="text-navy">approved-lab-report.pdf</span>: original
            stays in the workflow.
          </p>
        </div>

        <div className="grid gap-0 border-b border-border sm:grid-cols-5">
          {[
            ["Document", "approved-lab-report.pdf"],
            ["Markers found", "4"],
            ["Approved", "0 of 4"],
            ["Open review", "4"],
            ["Conflicts", "1"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-border px-4 py-3 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                {label}
              </p>
              <p className="mt-1 text-sm text-navy">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-4 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Original document
            </p>
            <p className="mt-1 text-xs text-muted">Sanitized sample</p>
            <div className="mt-4 space-y-2 rounded-sm border border-border bg-surface p-3 font-mono text-xs leading-relaxed text-navy">
              <p className="text-muted">BIOCHEMISTRY / METABOLIC</p>
              <p>HbA1c (IFCC aligned) · 5.8%</p>
              <p className="rounded-sm bg-burgundy/10 px-1.5 py-1">
                LDL-Chol · 3.4 mmol/L
              </p>
              <p>LDL (handwritten addendum) · 3.6 mmol/L</p>
              <p>ALT (SGPT) · 32 U/L</p>
            </div>
          </div>

          <div className="border-b border-border p-5 lg:col-span-4 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Extracted markers
            </p>
            <p className="mt-1 text-xs text-muted">
              Original label, value, unit and source location retained
            </p>
            <ul className="mt-4 space-y-2">
              {markers.map((marker) => (
                <li
                  key={`${marker.name}-${marker.value}`}
                  className={`rounded-sm border px-3 py-2 ${
                    marker.tone === "active"
                      ? "border-burgundy/40 bg-burgundy/[0.04]"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-navy">{marker.name}</p>
                      <p className="text-xs text-muted">{marker.value}</p>
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-[0.12em] ${
                        marker.tone === "ok" ? "text-muted" : "text-burgundy"
                      }`}
                    >
                      {marker.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy p-5 text-background lg:col-span-4 md:p-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy-on-dark">
              Reviewer decision
            </p>
            <p className="mt-2 font-serif text-2xl">LDL Cholesterol</p>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Original label", "LDL-Chol"],
                ["Structured result", "3.4 mmol/L"],
                ["Document range", "0.0–3.0"],
                ["Source location", "Page 2 · line 19"],
                ["Confidence", "Medium"],
                ["Exception", "Unit and label match"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-3 border-b border-background/10 pb-2"
                >
                  <dt className="text-background/55">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-sm bg-background px-3 py-2.5 text-center text-sm text-navy">
              Approve this marker
            </div>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

/** Program + markers dashboard pattern: sanitized, no real product chrome. */
export function HautonomyProgramVisual({ caption }: { caption?: string }) {
  const metrics = [
    { label: "LDL-Chol", value: "3.95", unit: "mmol/L", trend: "Improving" },
    { label: "HDL-Chol", value: "1.42", unit: "mmol/L", trend: "Stable" },
    { label: "Diet compliance", value: "90", unit: "%", trend: "High" },
    { label: "Zone 2 minutes", value: "150", unit: "min", trend: "Tracked" },
  ];

  const markers = [
    { name: "HbA1c", latest: "5.2%", points: 4 },
    { name: "ALT / SGPT", latest: "21 U/L", points: 5 },
    { name: "Apolipoprotein B", latest: "108 mg/dL", points: 9 },
    { name: "Ferritin", latest: "22 ng/mL", points: 2 },
  ];

  return (
    <figure>
      <div className="grid gap-4 lg:grid-cols-12">
        <Panel className="lg:col-span-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                Active program
              </p>
              <h3 className="mt-2 font-serif text-2xl text-navy">
                Cholesterol optimisation
              </h3>
              <p className="mt-1 text-sm text-muted">
                Phase 2: Active intervention
              </p>
            </div>
            <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
              Sanitized product pattern
            </span>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs text-muted">
              <span>Phase progress</span>
              <span>Step 2 of 4</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 rounded-full ${
                    step <= 2 ? "bg-burgundy" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-sm border border-border bg-background p-3"
              >
                <p className="text-xs text-muted">{metric.label}</p>
                <p className="mt-1 font-serif text-2xl text-navy">
                  {metric.value}
                  <span className="ml-1 text-sm text-muted">{metric.unit}</span>
                </p>
                <div className="mt-3 flex h-8 items-end gap-1">
                  {[40, 55, 48, 62, 58, 70, 65, 72].map((height, index) => (
                    <span
                      key={`${metric.label}-${index}`}
                      className="flex-1 rounded-[1px] bg-burgundy/35"
                      style={{ height: `${height}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-muted">
                  {metric.trend}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
            My markers
          </p>
          <p className="mt-2 text-sm text-muted">
            Labs, devices, check-ins and derivatives in one longitudinal view.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["All sources", "Lab", "Program check-in", "Devices"].map(
              (filter, index) => (
                <span
                  key={filter}
                  className={`rounded-sm px-2.5 py-1 text-xs ${
                    index === 0
                      ? "bg-navy text-background"
                      : "border border-border text-muted"
                  }`}
                >
                  {filter}
                </span>
              ),
            )}
          </div>
          <ul className="mt-5 space-y-0">
            {markers.map((marker) => (
              <li
                key={marker.name}
                className="flex items-center justify-between gap-3 border-t border-border py-3 text-sm"
              >
                <div>
                  <p className="text-navy">{marker.name}</p>
                  <p className="text-xs text-muted">
                    {marker.points} data points
                  </p>
                </div>
                <p className="text-navy">{marker.latest}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function HautonomyOutcomeVisual({ caption }: { caption?: string }) {
  const before = [
    "Staff manually re-entered values from varied PDF and image layouts.",
    "Structured records could lose the original label, unit, range, or page context.",
    "Trend preparation and exception review happened in separate steps.",
  ];
  const after = [
    "Candidate observations are extracted with source context retained.",
    "Normalized and original values can be reviewed together.",
    "Approved observations feed a longitudinal view while professional interpretation stays human.",
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
