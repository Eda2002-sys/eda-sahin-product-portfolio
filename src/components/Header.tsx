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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-surface-elevated/90 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-200 ${
        scrolled || open
          ? "border-border-strong shadow-[0_12px_32px_rgba(26,31,46,0.07)]"
          : "border-border"
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link
          href="/"
          className="type-brand text-[1.4rem] transition-colors hover:text-burgundy md:text-[1.55rem]"
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
              className="rounded-sm px-3 py-2 case-meta text-muted transition-colors hover:bg-surface hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteConfig.resumePath}
            className="ml-2 rounded-sm border border-navy/12 bg-background px-3.5 py-1.5 case-meta text-navy transition-[border-color,color,background-color] hover:border-burgundy hover:bg-surface hover:text-burgundy"
          >
            Resume
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

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface-elevated md:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-3"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-3 text-base text-navy transition-colors hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumePath}
              className="mt-1 rounded-sm border border-border-strong px-3 py-3 text-base text-navy"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
