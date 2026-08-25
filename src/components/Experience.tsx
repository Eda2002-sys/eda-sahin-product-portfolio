import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Founder-facing roles with product at the centre"
          description="A concise timeline. The work above is the fuller story."
        />

        <ol className="mt-14 space-y-0">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-navy">{item.company}</h3>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <div className="md:col-span-6">
                {item.focus ? (
                  <ul className="flex flex-wrap gap-2">
                    {item.focus.map((focusItem) => (
                      <li
                        key={focusItem}
                        className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {focusItem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted">—</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
