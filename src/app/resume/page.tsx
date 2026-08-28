import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ResumeCv } from "@/components/ResumeCv";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume — Eda Sahin",
  description:
    "Resume for Eda Sahin — Chief of Staff across AI products and M&A technology.",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function ResumePage() {
  return (
    <div className="border-b border-border">
      <div className="container-page py-16 md:py-24">
        <Link
          href="/"
          className="link-underline case-meta inline-flex text-burgundy"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Resume</p>
            <p className="case-body mt-4">
              Chief of Staff across AI products and M&A technology. Istanbul.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.resumePdfPath} external>
              Download PDF
            </ButtonLink>
            <ButtonLink href={siteConfig.linkedin} variant="secondary" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={siteConfig.github} variant="secondary" external>
              GitHub
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10">
          <ResumeCv />
        </div>
      </div>
    </div>
  );
}
