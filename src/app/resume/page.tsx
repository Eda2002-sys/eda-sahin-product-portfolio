import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ResumeCv } from "@/components/ResumeCv";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "CV · Eda Sahin",
  description:
    "CV for Eda Sahin, Chief of Staff with experience across AI products, operations and M&A. Based in Istanbul.",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function ResumePage() {
  return (
    <div className="border-b border-border">
      <div className="container-page py-10 md:py-24">
        <Link
          href="/"
          className="link-underline case-meta inline-flex text-burgundy"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-6 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <p className="case-body text-pretty">
              Chief of Staff with experience across AI products, operations and
              M&A. Based in Istanbul.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <ButtonLink
              href={siteConfig.resumePdfPath}
              external
              className="w-full min-[420px]:w-auto"
            >
              Download PDF
            </ButtonLink>
            <ButtonLink
              href={siteConfig.linkedin}
              variant="secondary"
              external
              className="w-full min-[420px]:w-auto"
            >
              LinkedIn
            </ButtonLink>
            <ButtonLink
              href={siteConfig.github}
              variant="secondary"
              external
              className="w-full min-[420px]:w-auto"
            >
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
