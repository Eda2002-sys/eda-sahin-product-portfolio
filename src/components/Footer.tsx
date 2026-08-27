import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <Link
            href="/"
            className="type-brand text-[1.35rem] transition-colors hover:text-burgundy"
          >
            {siteConfig.name}
          </Link>
          <p className="case-meta mt-2 text-muted">
            Product · Operations · Founder-facing work
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          aria-label="Social and contact"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="link-underline text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="case-meta text-muted sm:text-right">
          {siteConfig.location}
          <span className="mx-2 text-border-strong" aria-hidden="true">
            ·
          </span>
          {siteConfig.year}
        </p>
      </div>
    </footer>
  );
}
