"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const { documentElement, body } = document;
    const previous = {
      htmlOverflow: documentElement.style.overflow,
      bodyOverflow: body.style.overflow,
    };

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      documentElement.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-surface-elevated/95 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-200 max-md:fixed max-md:inset-x-0 ${
          scrolled || open
            ? "border-border-strong shadow-[0_12px_32px_rgba(26,31,46,0.07)]"
            : "border-border"
        }`}
      >
        <div className="container-page flex h-14 items-center justify-between md:h-16">
          <Link
            href="/"
            className="type-brand-nav ml-0.5 shrink-0 transition-colors hover:text-burgundy-soft md:ml-1.5 lg:ml-2"
            onClick={() => setOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="case-meta rounded-sm px-2.5 py-2 text-muted transition-colors hover:bg-surface hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumePath}
              className="case-meta ml-2 rounded-sm border border-burgundy bg-background px-3.5 py-1.5 text-navy transition-[border-color,color,background-color] hover:border-burgundy-soft hover:bg-surface hover:text-burgundy"
            >
              CV
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-navy transition-colors hover:border-border-strong hover:bg-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/40 to-transparent"
          aria-hidden="true"
        />
      </header>

      {/* Offset fixed mobile header height */}
      <div className="h-[3.5625rem] shrink-0 md:hidden" aria-hidden="true" />

      {open ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 top-[3.5625rem] bg-navy/30"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[3.5625rem] max-h-[calc(100dvh-3.5625rem)] overflow-y-auto overscroll-contain border-b border-border bg-surface-elevated shadow-[0_18px_40px_rgba(26,31,46,0.12)]"
          >
            <nav
              className="container-page flex flex-col gap-1 py-3"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="case-meta rounded-sm px-2 py-3 text-navy transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteConfig.resumePath}
                className="case-meta mt-1 rounded-sm border border-burgundy px-3 py-3 text-navy transition-colors hover:border-burgundy-soft hover:text-burgundy"
                onClick={() => setOpen(false)}
              >
                CV
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
