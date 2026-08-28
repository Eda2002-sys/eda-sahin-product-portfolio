import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
} from "@/data/resume";

type ResumeCvProps = {
  variant?: "web" | "print";
};

function Section({
  label,
  children,
  variant,
}: {
  label: string;
  children: React.ReactNode;
  variant: "web" | "print";
}) {
  return (
    <section className="grid items-start gap-3 py-6 sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:py-7">
      <h2
        className={
          variant === "print"
            ? "text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#6f2c3a]"
            : "eyebrow leading-none"
        }
      >
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function ResumeCv({ variant = "web" }: ResumeCvProps) {
  const isPrint = variant === "print";

  return (
    <article
      className={
        isPrint
          ? "mx-auto max-w-[820px] bg-white px-10 py-9 text-[#1a1f2e]"
          : "rounded-sm border border-border bg-surface-elevated p-6 md:p-10"
      }
    >
      <header
        className={`pb-6 ${
          isPrint ? "border-b-[1.5px] border-[#6f2c3a]" : "border-b border-border"
        }`}
      >
        <h1
          className={
            isPrint
              ? "type-brand text-[2.6rem] leading-none tracking-tight text-[#6f2c3a]"
              : "case-title text-burgundy"
          }
        >
          {resumeProfile.name}
        </h1>
        <p
          className={
            isPrint
              ? "mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#6b6f7a]"
              : "eyebrow mt-3 text-muted"
          }
        >
          Product · Operations · AI
        </p>
        <p
          className={
            isPrint
              ? "mt-3 text-sm leading-relaxed text-[#6b6f7a]"
              : "case-meta mt-3 text-muted"
          }
        >
          {resumeProfile.location} · {resumeProfile.phone} ·{" "}
          {resumeProfile.email}
        </p>
        <p
          className={
            isPrint
              ? "mt-1 text-sm text-[#6b6f7a]"
              : "case-meta mt-1 text-muted"
          }
        >
          {resumeProfile.github} · {resumeProfile.linkedin}
        </p>
      </header>

      <div
        className={`divide-y ${
          isPrint
            ? "divide-[#6f2c3a]/18"
            : "divide-border border-t-0"
        }`}
      >
        {isPrint ? (
          <Section label="Contact" variant={variant}>
            <ul
              className="space-y-1 text-sm text-[#1a1f2e]"
              {...{ "x-apple-data-detectors": "false" }}
            >
              <li>{resumeProfile.phone}</li>
              <li>{resumeProfile.email}</li>
              <li>{resumeProfile.location}</li>
            </ul>
          </Section>
        ) : null}

        <Section label="Experience" variant={variant}>
          <ul className="space-y-6">
            {resumeExperience.map((role) => (
              <li key={`${role.company}-${role.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p
                    className={
                      isPrint
                        ? "text-[15px] font-semibold tracking-tight text-[#1a1f2e]"
                        : "case-subhead text-navy"
                    }
                  >
                    {role.title}
                    <span
                      className={`font-normal ${
                        isPrint ? "text-[#6b6f7a]" : "text-muted"
                      }`}
                    >
                      {" "}
                      · {role.company}
                    </span>
                  </p>
                  <p
                    className={
                      isPrint
                        ? "text-sm font-medium text-[#6b6f7a]"
                        : "case-meta text-muted"
                    }
                  >
                    {role.period}
                  </p>
                </div>
                {role.website ? (
                  <p
                    className={`case-meta mt-0.5 tracking-wide ${
                      isPrint ? "text-[#8a909c]" : "text-muted"
                    }`}
                  >
                    {role.website}
                  </p>
                ) : null}
                <ul
                  className={
                    isPrint
                      ? "mt-2.5 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-[#2a3040] marker:text-burgundy/70"
                      : "case-meta mt-2.5 list-disc space-y-1.5 pl-4 marker:text-burgundy/70 text-muted"
                  }
                >
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Education" variant={variant}>
          <ul className="space-y-5">
            {resumeEducation.map((item) => (
              <li key={item.institution}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p
                      className={
                        isPrint
                          ? "text-[15px] font-semibold tracking-tight text-[#1a1f2e]"
                          : "case-subhead text-navy"
                      }
                    >
                      {item.institution}
                    </p>
                    <p
                      className={
                        isPrint
                          ? "mt-0.5 text-sm text-[#2a3040]"
                          : "case-meta mt-0.5 text-muted"
                      }
                    >
                      {item.detail}
                    </p>
                  </div>
                  <p
                    className={`shrink-0 text-sm font-medium ${
                      isPrint ? "text-[#6b6f7a]" : "text-muted"
                    }`}
                  >
                    {item.period}
                  </p>
                </div>
                {item.notes ? (
                  <ul
                    className={
                      isPrint
                        ? "mt-2 space-y-1 text-sm leading-relaxed text-[#6b6f7a]"
                        : "case-meta mt-2 space-y-1 text-muted"
                    }
                  >
                    {item.notes.map((note) => (
                      <li key={note.text}>{note.text}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Languages" variant={variant}>
          <ul
            className={
              isPrint
                ? "flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#1a1f2e]"
                : "case-meta flex flex-wrap gap-x-6 gap-y-1 text-navy"
            }
          >
            {resumeProfile.languages.map((entry) => (
              <li key={entry.language}>
                {entry.language}
                <span className={isPrint ? "text-[#6b6f7a]" : "text-muted"}>
                  {" "}
                  · {entry.level}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </article>
  );
}
