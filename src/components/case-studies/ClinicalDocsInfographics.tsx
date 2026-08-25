import {
  ApproachCards,
  BeforeAfter,
  BuildPillars,
  Caption,
  JourneySteps,
  Panel,
  ProblemCards,
  SectionLabel,
  StatStrip,
} from "@/components/case-studies/InfographicPrimitives";

export function ClinicalDocsHeroVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <Panel className="!p-0 overflow-hidden">
        <div className="border-b border-border bg-surface px-5 py-4 md:px-7">
          <SectionLabel
            eyebrow="Document intake"
            title="Upload → extract → compare"
            subtitle="Every value stays tied to the page it came from."
            badge="Sanitized workflow"
          />
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-5 lg:col-span-4 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-sm font-medium text-navy">Clinical PDF / image</p>
            <p className="text-xs text-muted">Original retained in workflow</p>
            <div className="mt-4 rounded-sm border border-dashed border-burgundy/35 bg-burgundy/[0.03] p-4 text-center">
              <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
                Drop zone
              </p>
              <p className="mt-2 text-xs text-muted">
                lab-report.pdf · body-composition scan
              </p>
            </div>
            <div className="mt-4 space-y-2 font-mono text-xs leading-relaxed text-navy">
              <p className="text-muted">PAGE 2 · BIOCHEMISTRY</p>
              <p>HbA1c · 5.8%</p>
              <p className="rounded-sm bg-burgundy/10 px-1.5 py-1">
                LDL-Chol · 3.4 mmol/L
              </p>
              <p>ALT · 32 U/L</p>
            </div>
          </div>

          <div className="border-b border-border p-5 lg:col-span-4 lg:border-b-0 lg:border-r md:p-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Extraction
            </p>
            <p className="mt-1 text-xs text-muted">
              Candidate observations with source location
            </p>
            <ul className="mt-4 space-y-2">
              {[
                ["HbA1c", "5.8%", "Above range"],
                ["LDL Cholesterol", "3.4 mmol/L", "Selected"],
                ["ALT", "32 U/L", "In range"],
              ].map(([name, value, status]) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-sm border border-border px-3 py-2"
                >
                  <div>
                    <p className="text-sm text-navy">{name}</p>
                    <p className="text-xs text-muted">{value}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-burgundy">
                    {status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              Extraction structures information — not clinical interpretation.
            </p>
          </div>

          <div className="bg-navy p-5 text-background md:p-6 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy-soft">
              Longitudinal record
            </p>
            <p className="mt-2 font-serif text-xl">After approval</p>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Canonical marker", "LDL Cholesterol"],
                ["Original label", "LDL-Chol"],
                ["Unit", "mmol/L · normalized"],
                ["Source", "Page 2 · line 19"],
                ["Reviewer", "Required for exceptions"],
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
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsProblemVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <ProblemCards
        cards={[
          {
            number: "01",
            title: "Same marker, different forms",
            body: "Test names, units, decimal conventions, ranges and panel layouts varied across providers — PDFs and images alike.",
          },
          {
            number: "02",
            title: "Manual entry detached evidence",
            body: "Re-keying slowed recurring document processing and could separate a number from its page, date, unit or range.",
          },
          {
            number: "03",
            title: "Trends need review boundaries",
            body: "Longitudinal views are only trustworthy after normalization, exception handling and authorized approval — not raw extraction.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsApproachVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <ApproachCards
        cards={[
          {
            title: "Keep source beside every value",
            body: "Side-by-side comparison between structured fields and original pages — including labels, units and reference ranges.",
          },
          {
            title: "Normalize without erasing context",
            body: "Canonical markers and units sit alongside original labels, document dates and source locations for auditability.",
          },
          {
            title: "Draw a clear clinical boundary",
            body: "The product structures information; authorized professionals review exceptions and own interpretation and care decisions.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsBuildVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <BuildPillars
        pillars={[
          {
            label: "Intake",
            title: "PDF & image preparation",
            body: "Upload paths, page handling, metadata capture and visible failure states when extraction cannot proceed.",
          },
          {
            label: "Extract",
            title: "Observation capture",
            body: "Test name, result, unit, range, date, panel and location within the source — including body-composition layouts.",
          },
          {
            label: "Normalize",
            title: "Schema matching",
            body: "Marker mapping, unit handling and conflict detection while original labels remain available for review.",
          },
          {
            label: "Approve",
            title: "Exception review",
            body: "Confidence states, reviewer queues and explicit approval before fields enter the longitudinal record.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsJourneyVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <JourneySteps
        steps={[
          {
            number: "01",
            label: "Upload",
            title: "Approved clinical document enters intake",
            body: "PDF or image with document context recorded — original file stays in the workflow throughout.",
          },
          {
            number: "02",
            label: "Extract",
            title: "Candidate observations captured",
            body: "Markers, units, ranges and panel context extracted with source page and location retained.",
          },
          {
            number: "03",
            label: "Compare",
            title: "Structured values checked against source",
            body: "Side-by-side review surfaces conflicts, uncertain matches and missing fields before approval.",
          },
          {
            number: "04",
            label: "Approve",
            title: "Authorized reviewer signs off",
            body: "Only approved fields feed longitudinal trends — extraction is never treated as diagnosis.",
          },
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsReviewVisual({ caption }: { caption?: string }) {
  const stepper = ["Upload", "Extract", "Compare", "Resolve", "Approve"];

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
        </div>
        <StatStrip
          items={[
            { label: "Document", value: "lab-report.pdf" },
            { label: "Markers found", value: "6" },
            { label: "Approved", value: "3 of 6" },
            { label: "Conflicts", value: "1 open" },
          ]}
        />
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-border p-5 lg:border-b-0 lg:border-r md:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy">
              Source page
            </p>
            <div className="mt-4 rounded-sm border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-navy">
              <p className="text-muted">METABOLIC PANEL</p>
              <p>HbA1c (IFCC aligned) · 5.8%</p>
              <p className="mt-2 rounded-sm bg-burgundy/10 px-1.5 py-1">
                LDL-Chol · 3.4 mmol/L · ref 0.0–3.0
              </p>
              <p className="mt-2 text-muted">BODY COMPOSITION</p>
              <p>Body fat · 24.1%</p>
            </div>
          </div>
          <div className="bg-navy p-5 text-background md:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-burgundy-soft">
              Reviewer decision
            </p>
            <p className="mt-2 font-serif text-2xl">LDL Cholesterol conflict</p>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Extracted", "3.4 mmol/L"],
                ["Alternate reading", "3.6 mmol/L · addendum"],
                ["Action", "Select primary · flag addendum"],
                ["Boundary", "Processing only — not diagnosis"],
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
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="rounded-sm bg-background px-3 py-2.5 text-center text-sm text-navy">
                Approve 3.4
              </div>
              <div className="rounded-sm border border-background/20 px-3 py-2.5 text-center text-sm">
                Request re-scan
              </div>
            </div>
          </div>
        </div>
      </Panel>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}

export function ClinicalDocsOutcomeVisual({ caption }: { caption?: string }) {
  return (
    <figure>
      <BeforeAfter
        before={[
          "Values manually re-keyed from varied PDF and image layouts",
          "Structured records could lose page, unit or range context",
          "Trend preparation and exception review happened in separate tools",
        ]}
        after={[
          "Extraction retains source location for every candidate observation",
          "Reviewers compare original and structured views in one workspace",
          "Approved fields feed longitudinal records with clinical judgment staying human",
        ]}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
