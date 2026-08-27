"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups, type SkillItem } from "@/data/skills";

function SkillListItem({ item }: { item: SkillItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!item.proof) {
    return <li className="case-meta text-muted">{item.label}</li>;
  }

  return (
    <li ref={rootRef} className="relative">
      <button
        type="button"
        className={`case-meta inline-flex cursor-help items-center gap-2 text-left transition-colors duration-150 ${
          open ? "text-burgundy" : "text-navy hover:text-burgundy"
        }`}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={(event) => {
          // Desktop: hover/focus only. Touch: tap to toggle.
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
          }
          event.preventDefault();
          setOpen((value) => !value);
        }}
      >
        <span>{item.label}</span>
        <span
          className="mt-px h-1 w-1 shrink-0 rounded-full bg-burgundy"
          aria-hidden="true"
        />
      </button>

      <div
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-0 z-20 w-[min(16.5rem,calc(100vw-2.5rem))] rounded-sm border border-border bg-surface-elevated px-3.5 py-3 shadow-[0_12px_28px_-18px_rgba(26,31,46,0.35)] transition-[opacity,transform] duration-150 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        <p className="case-meta leading-relaxed text-navy">{item.proof}</p>
      </div>
    </li>
  );
}

export function ProductSkills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-page section-space">
        <SectionHeading id="skills-heading" title="Capabilities" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t border-border pt-5 transition-colors"
            >
              <h3 className="case-subhead">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <SkillListItem key={item.label} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
