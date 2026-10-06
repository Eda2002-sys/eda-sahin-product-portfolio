import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <Link
            href="/"
            className="type-brand transition-colors hover:text-burgundy"
          >
            {siteConfig.name}
          </Link>
          <p className="case-meta mt-2 text-muted">
            Product · Operations · Founder facing work
          </p>
        </div>
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
