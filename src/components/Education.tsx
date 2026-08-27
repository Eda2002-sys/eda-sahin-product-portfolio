import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { resumeEducation, type ResumeEducationNote } from "@/data/resume";

function EducationNotes({ notes }: { notes: ResumeEducationNote[] }) {
  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.text} className="case-meta text-muted">
          <span className="min-w-0 break-words">
            {note.href ? (
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline underline-offset-2 transition-colors hover:text-burgundy"
              >
                {note.text}
              </a>
            ) : (
              note.text
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InstitutionLogo({
  logo,
  logoHref,
  logoHeight,
  logoAspect,
  logoContained,
  institution,
}: {
  logo: string;
  logoHref?: string;
  logoHeight: number;
  logoAspect: number;
  logoContained?: boolean;
  institution: string;
}) {
  const width = Math.round(logoHeight * logoAspect);

  const image = (
    <Image
      src={logo}
      alt=""
      width={width}
      height={logoHeight}
      className="max-w-full object-contain"
      style={{ width, height: logoHeight, maxWidth: "100%" }}
    />
  );

  if (!logoHref) {
    return (
      <span
        className={`mt-0.5 block shrink-0 ${logoContained ? "overflow-hidden rounded-sm" : ""}`}
      >
        {image}
      </span>
    );
  }

  return (
    <Link
      href={logoHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-0.5 block shrink-0 transition-opacity hover:opacity-80 ${
        logoContained ? "overflow-hidden rounded-sm" : ""
      }`}
      aria-label={`${institution} (opens in new tab)`}
    >
      {image}
    </Link>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-y border-border bg-surface"
      aria-labelledby="education-heading"
    >
      <div className="container-page section-space">
        <SectionHeading id="education-heading" title="Education" />

        <ol className="mt-10 space-y-0 md:mt-14">
          {resumeEducation.map((item) => {
            const logoHeight = item.logoHeight ?? 22;
            const logoAspect = item.logoAspect ?? 4;

            return (
              <li
                key={item.institution}
                className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-6 md:py-10"
              >
                <div className="min-w-0 md:col-span-5">
                  <div className="flex items-start justify-between gap-4 md:block">
                    <div className="flex min-w-0 items-start gap-3">
                      {item.logo ? (
                        <InstitutionLogo
                          logo={item.logo}
                          logoHref={item.logoHref}
                          logoHeight={logoHeight}
                          logoAspect={logoAspect}
                          logoContained={item.logoContained}
                          institution={item.institution}
                        />
                      ) : null}
                      <div className="min-w-0">
                        <h3 className="case-subhead">{item.institution}</h3>
                        <p className="case-meta mt-1 text-muted">{item.detail}</p>
                      </div>
                    </div>
                    <p className="case-meta shrink-0 text-muted md:hidden">
                      {item.period}
                    </p>
                  </div>
                </div>

                <div className="hidden md:col-span-2 md:block">
                  <p className="case-meta text-muted">{item.period}</p>
                </div>

                <div className="min-w-0 md:col-span-5">
                  {item.notes?.length ? (
                    <EducationNotes notes={item.notes} />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
