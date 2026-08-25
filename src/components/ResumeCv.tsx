import Image from "next/image";
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
    <section
      className={`grid gap-4 border-t pt-5 ${
        variant === "print"
          ? "border-[#6f2c3a]/25 pt-4"
          : "border-border pt-6"
      } sm:grid-cols-[7.5rem_1fr] sm:gap-8`}
    >
      <h2
        className={`text-[11px] font-medium uppercase tracking-[0.16em] ${
          variant === "print" ? "text-[#6f2c3a]" : "text-burgundy"
        }`}
      >
        {label}
      </h2>
      <div>{children}</div>
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
      <header className="flex items-start justify-between gap-6 border-b border-[#6f2c3a]/20 pb-6">
        <div className="min-w-0 flex-1">
          <h1
            className={`font-serif leading-none ${
              isPrint
                ? "text-[2.35rem] text-[#6f2c3a]"
                : "text-4xl text-burgundy md:text-5xl"
            }`}
          >
            {resumeProfile.name}
          </h1>
          <p
            className={`mt-3 text-sm leading-relaxed ${
              isPrint ? "text-[#4a5568]" : "text-muted"
            }`}
          >
            {resumeProfile.location} · {resumeProfile.phone} ·{" "}
            {resumeProfile.email}
          </p>
          <p className={`mt-1 text-sm ${isPrint ? "text-[#4a5568]" : "text-muted"}`}>
            {resumeProfile.github} · {resumeProfile.linkedin}
          </p>
        </div>
        <figure
          className={`relative shrink-0 overflow-hidden ${
            isPrint ? "h-[88px] w-[68px]" : "h-28 w-[5.5rem] sm:h-32 sm:w-24"
          }`}
        >
          <Image
            src={resumeProfile.portraitPath}
            alt=""
            fill
            className="object-cover object-[center_18%]"
            sizes="96px"
            priority
          />
        </figure>
      </header>

      <div className={`space-y-0 ${isPrint ? "mt-5" : "mt-8"}`}>
        <Section label="Contact" variant={variant}>
          <ul className={`space-y-1 text-sm ${isPrint ? "text-[#1a1f2e]" : "text-navy"}`}>
            <li>{resumeProfile.phone}</li>
            <li>{resumeProfile.email}</li>
            <li>{resumeProfile.location}</li>
          </ul>
        </Section>

        <Section label="Experience" variant={variant}>
          <ul className="space-y-5">
            {resumeExperience.map((role) => (
              <li key={`${role.company}-${role.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className={`text-sm ${isPrint ? "text-[#1a1f2e]" : "text-navy"}`}>
                    <span className="font-medium">{role.title}</span>
                    <span className={isPrint ? "text-[#6f2c3a]" : "text-burgundy"}>
                      {" "}
                      | {role.company}
                    </span>
                  </p>
                  <p className={`text-sm ${isPrint ? "text-[#4a5568]" : "text-muted"}`}>
                    {role.period}
                  </p>
                </div>
                {role.website ? (
                  <p className={`mt-0.5 text-sm ${isPrint ? "text-[#4a5568]" : "text-muted"}`}>
                    {role.website}
                  </p>
                ) : null}
                <ul className={`mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed ${isPrint ? "text-[#1a1f2e]" : "text-muted"}`}>
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
            {resumeEducation.map((item) => {
              const logoHeight = item.logoHeight ?? 22;
              const logoWidth = Math.round(logoHeight * (item.logoAspect ?? 4));

              return (
                <li key={item.institution}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      {item.logo ? (
                        <a
                          href={item.logoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-0.5 shrink-0 transition-opacity hover:opacity-80 ${
                            item.logoContained ? "overflow-hidden rounded-sm" : ""
                          }`}
                          aria-label={`${item.institution} (opens in new tab)`}
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={logoWidth}
                            height={logoHeight}
                            className="object-contain"
                            style={{ width: logoWidth, height: logoHeight }}
                          />
                        </a>
                      ) : null}
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-medium ${isPrint ? "text-[#1a1f2e]" : "text-navy"}`}
                        >
                          {item.institution}
                        </p>
                        <p
                          className={`mt-1 text-sm ${isPrint ? "text-[#1a1f2e]" : "text-muted"}`}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`shrink-0 text-sm ${isPrint ? "text-[#4a5568]" : "text-muted"}`}
                    >
                      {item.period}
                    </p>
                  </div>
                  {item.notes ? (
                    <ul
                      className={`mt-2 space-y-0.5 text-sm ${isPrint ? "text-[#4a5568]" : "text-muted"}`}
                      style={
                        item.logo
                          ? { paddingLeft: `calc(${logoWidth}px + 0.75rem)` }
                          : undefined
                      }
                    >
                      {item.notes.map((note) => (
                        <li key={note.text}>
                          {note.href && !isPrint ? (
                            <a
                              href={note.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-border underline-offset-2 transition-colors hover:text-burgundy"
                            >
                              {note.text}
                            </a>
                          ) : note.href && isPrint ? (
                            <>
                              {note.text}{" "}
                              <span className="text-[#4a5568]">({note.href})</span>
                            </>
                          ) : (
                            note.text
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section label="Languages" variant={variant}>
          <ul className={`space-y-1 text-sm ${isPrint ? "text-[#1a1f2e]" : "text-navy"}`}>
            {resumeProfile.languages.map((entry) => (
              <li key={entry.language}>
                {entry.language} — {entry.level}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </article>
  );
}
