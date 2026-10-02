import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function ProductSkills() {
  return (
    <section
      id="what-i-do"
      className="scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-page section-space">
        <SectionHeading
          id="skills-heading"
          title="What I actually do"
          description="The recurring work behind most of the products and projects in this portfolio."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t border-border pt-5 transition-colors"
            >
              <h3 className="case-subhead">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="case-meta flex gap-2 text-muted">
                    <span
                      className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-burgundy"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
