import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-serif text-lg text-navy transition-colors hover:text-burgundy"
        >
          {siteConfig.name}
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
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
