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
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.25rem]">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-navy transition-colors hover:text-burgundy md:text-[1.35rem]"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteConfig.resumePath}
            className="rounded-sm border border-border-strong px-3 py-1.5 text-sm text-navy transition-colors hover:border-burgundy hover:text-burgundy"
          >
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-navy md:hidden"
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
            <span className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
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
              className="mt-2 rounded-sm border border-border-strong px-3 py-3 text-base text-navy"
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
