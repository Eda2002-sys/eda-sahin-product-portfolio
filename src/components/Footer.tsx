import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-serif text-lg text-navy transition-colors hover:text-burgundy"
        >
          {siteConfig.name}
        </Link>
        <p className="text-sm text-muted">
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
