import {
  Caption,
  Panel,
  VisualHeader,
} from "@/components/case-studies/InfographicPrimitives";

/** Hero: clinical document → structured record (sanitized editorial mock). */
export function HautonomyHeroVisual({
  caption,
  compact = false,
}: {
  caption?: string;
  compact?: boolean;
}) {
  const headerPad = compact
    ? "px-3 py-3 @[28rem]:px-4"
    : "px-4 py-4 @[28rem]:px-5 @[42rem]:px-7";
  const cellPad = compact
    ? "p-3 @[28rem]:p-4"
    : "p-4 @[28rem]:p-5 @[42rem]:p-7";
  const blockGap = compact ? "mt-3" : "mt-5";
  const zoneGap = compact ? "mt-3" : "mt-4";

  return (
    <figure className="@container min-w-0">
      <Panel className="overflow-visible !p-0">
        <div className={`border-b border-border bg-surface ${headerPad}`}>
          <p className="visual-kicker">Lab ingestion</p>
          <p className={`case-subhead ${compact ? "mt-1.5" : "mt-2"}`}>
            From clinical document to review-ready record
          </p>
        </div>

        <div className="grid gap-0 @[36rem]:grid-cols-2">
          <div
            className={`border-b border-border ${cellPad} @[36rem]:border-b-0 @[36rem]:border-r`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="case-subhead text-navy">Clinical document</p>
                <p className="case-meta text-muted">Original retained</p>
              </div>
              <span className="visual-kicker rounded-sm border border-border px-2 py-1 text-muted">
                PDF
              </span>
            </div>
            <div className={`${blockGap} space-y-2`}>
              <div className="h-2 rounded-sm bg-border/80" />
              <div className="h-2 w-4/5 rounded-sm bg-border/70" />
              <div className="h-2 w-3/5 rounded-sm bg-border/60" />
            </div>
            <div
              className={`${zoneGap} rounded-sm border border-dashed border-burgundy/40 bg-burgundy/[0.04] p-3`}
            >
              <p className="visual-kicker">Extraction zone</p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-navy">
                LDL-Chol · 3.4 mmol/L
                <br />
                HbA1c · 5.8%
              </p>
            </div>
          </div>

          <div className={`bg-navy text-background ${cellPad}`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="case-subhead">Structured record</p>
                <p className="case-meta text-background/60">Ready for review</p>
              </div>
              <span className="visual-kicker visual-kicker--on-dark rounded-sm bg-burgundy px-2 py-1">
                Linked
              </span>
            </div>
            <dl className={`${blockGap} space-y-3 case-meta`}>
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
            <p
              className={`${compact ? "mt-3" : "mt-5"} case-meta leading-relaxed text-background/60`}
            >
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
      title: "Longitudinal trends depended on consistent data",
      body: "Trends only became meaningful after marker matching, unit handling, date alignment and exception review.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Panel key={card.number} className="h-full">
            <p className="visual-kicker">
              {card.number}
            </p>
            <h3 className="case-subhead mt-3">
              {card.title}
            </h3>
            <p className="case-meta mt-3 text-muted">{card.body}</p>
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
      body: "Compare the structured value with the source page, labels, units, and ranges intact.",
    },
    {
      title: "Normalize without erasing context",
      body: "Canonical names and trends sit beside the original label, unit, range, and document date.",
    },
    {
      title: "Separate processing from clinical judgment",
      body: "The system structures information; clinicians review exceptions and own interpretation.",
    },
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Panel key={card.title} dark className="h-full">
            <p className="visual-kicker visual-kicker--on-dark">
              0{index + 1}
            </p>
            <h3 className="case-subhead mt-3 !text-background">
              {card.title}
            </h3>
            <p className="case-meta mt-3 text-background/70">
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
            <p className="visual-kicker">
              {pillar.label}
            </p>
            <h3 className="case-subhead mt-3">{pillar.title}</h3>
            <p className="case-meta mt-3 text-muted">{pillar.body}</p>
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
            <p className="visual-kicker">
              {step.number} · {step.label}
            </p>
            <h3 className="case-subhead mt-3">{step.title}</h3>
            <p className="case-meta mt-3 text-muted">{step.body}</p>
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
        <VisualHeader
          eyebrow="Review workspace"
          title="Source beside extraction"
          subtitle="Conflicts stay visible until a reviewer resolves them."
          end={
            <div className="flex flex-wrap gap-2">
              {stepper.map((step, index) => (
                <span
                  key={step}
                  className={`rounded-sm px-2.5 py-1 visual-ui-mock ${
                    index === 3
                      ? "bg-burgundy text-background"
                      : "border border-border text-muted"
                  }`}
                >
                  {index + 1}. {step}
                </span>
              ))}
            </div>
          }
        />

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
              <p className="visual-kicker text-muted">
                {label}
              </p>
              <p className="mt-1 case-meta text-navy">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-4 lg:border-b-0 lg:border-r md:p-6">
            <p className="visual-kicker">
              Original document
            </p>
            <p className="case-meta mt-1 text-muted">Sanitized sample</p>
            <div className="visual-ui-mock mt-4 space-y-2 rounded-sm border border-border bg-surface p-3 font-mono leading-relaxed text-navy">
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
            <p className="visual-kicker">
              Extracted markers
            </p>
            <p className="case-meta mt-1 text-muted">
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
                      <p className="case-meta text-navy">{marker.name}</p>
                      <p className="case-meta text-muted">{marker.value}</p>
                    </div>
                    <span
                      className={`visual-kicker ${
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
            <p className="visual-kicker visual-kicker--on-dark">
              Reviewer decision
            </p>
            <p className="case-subhead mt-2">LDL Cholesterol</p>
            <dl className="mt-5 space-y-3 case-meta">
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
            <div className="mt-6 rounded-sm bg-background px-3 py-2.5 text-center case-meta text-navy">
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
              <p className="visual-kicker">
                Active program
              </p>
              <h3 className="case-subhead mt-2">
                Cholesterol optimisation
              </h3>
              <p className="mt-1 case-meta text-muted">
                Phase 2: Active intervention
              </p>
            </div>
            <span className="tag-chip rounded-sm border border-border px-2.5 py-1 text-muted">
              Sanitized product pattern
            </span>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between case-meta text-muted">
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
                <p className="case-meta text-muted">{metric.label}</p>
                <p className="case-subhead mt-1">
                  {metric.value}
                  <span className="ml-1 case-meta text-muted">{metric.unit}</span>
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
                <p className="visual-kicker mt-2 text-muted">
                  {metric.trend}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="lg:col-span-5">
          <p className="visual-kicker">
            My markers
          </p>
          <p className="mt-2 case-meta text-muted">
            Labs, devices, check-ins and derivatives in one longitudinal view.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["All sources", "Lab", "Program check-in", "Devices"].map(
              (filter, index) => (
                <span
                  key={filter}
                  className={`rounded-sm px-2.5 py-1 visual-ui-mock ${
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
                className="flex items-center justify-between gap-3 border-t border-border py-3 case-meta"
              >
                <div>
                  <p className="text-navy">{marker.name}</p>
                  <p className="case-meta text-muted">
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
    "Lab data arrived disconnected from source context and program state.",
    "Phase routing, retesting and re-enrolment were easy to misread across roles.",
    "Trend preparation and exception review lived in separate steps.",
  ];
  const after = [
    "Source-linked values can be reviewed before they enter programs.",
    "Lifecycle logic is testable across patient and clinician views together.",
    "Clinician review surfaces exceptions without claiming clinical judgment.",
  ];

  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        <Panel className="h-full">
          <p className="visual-kicker text-muted">
            Before
          </p>
          <ul className="mt-5 space-y-4">
            {before.map((item) => (
              <li
                key={item}
                className="case-meta flex gap-3 text-muted"
              >
                <span className="mt-1.5 text-burgundy-ink" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel dark className="h-full">
          <p className="visual-kicker visual-kicker--on-dark">
            After
          </p>
          <ul className="mt-5 space-y-4">
            {after.map((item) => (
              <li
                key={item}
                className="case-meta flex gap-3 text-background/85"
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
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
