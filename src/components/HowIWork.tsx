"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { howIWorkSteps } from "@/data/skills";

const ANIMATED_STEP_COUNT = howIWorkSteps.length;
const STEP_INTERVAL_MS = 1400;

export function HowIWork() {
  const [litCount, setLitCount] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setLitCount((current) =>
        current >= ANIMATED_STEP_COUNT ? 1 : current + 1,
      );
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="how-i-work"
      className="scroll-mt-24 border-y border-border bg-surface"
      aria-labelledby="how-heading"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/25 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page section-space">
        <SectionHeading
          id="how-heading"
          title="How I work."
          description="Ambiguous systems → concrete product decisions → cross-functional implementation."
        />

        <ol className="relative mt-10 md:mt-14">
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 z-0 w-px bg-gradient-to-b from-burgundy/35 via-border to-transparent md:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-4 z-0 hidden h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent md:block"
            aria-hidden="true"
          />

          <div className="grid gap-0 md:grid-cols-5 md:gap-3">
            {howIWorkSteps.map((step, index) => {
              const isLit = reduceMotion
                ? index < ANIMATED_STEP_COUNT
                : index < litCount;

              return (
                <li
                  key={step.number}
                  className="relative z-10 grid grid-cols-[auto_1fr] items-start gap-x-4 border-t border-border py-6 first:border-t-0 first:pt-0 md:flex md:flex-col md:items-center md:border-t-0 md:px-2 md:py-0 md:text-center"
                >
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.6875rem] tracking-[0.14em] shadow-[0_0_0_4px_var(--surface)] transition-[background-color,border-color,color,transform] duration-500 ease-out md:mx-auto md:h-9 md:w-9 ${
                      isLit
                        ? "scale-100 border-burgundy bg-burgundy text-background"
                        : "scale-[0.97] border-burgundy/40 bg-surface text-burgundy"
                    }`}
                  >
                    {step.number}
                  </span>
                  <p
                    className={`case-meta pt-0.5 text-navy transition-colors duration-500 md:mt-4 md:max-w-[11rem] md:pt-0 ${
                      index === howIWorkSteps.length - 1
                        ? "md:max-w-[12.5rem]"
                        : ""
                    } ${isLit ? "text-navy" : "text-muted"}`}
                  >
                    {step.title}
                  </p>
                </li>
              );
            })}
          </div>
        </ol>
      </div>
    </section>
  );
}
