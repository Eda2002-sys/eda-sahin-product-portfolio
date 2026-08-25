import Link from "next/link";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { productReviews, reviewCategories } from "@/data/reviews";

export function ProductReviewsView() {
  return (
    <article>
      <header className="border-b border-border">
        <div className="container-page py-16 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-burgundy">
            Project 10 · Independent reviews
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl text-navy md:text-5xl lg:text-6xl">
            Selected Product Reviews
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-muted">
            Product Sense · UX · Gaming
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            Independent product reviews focused on FTUE, progression, gameplay,
            monetization, UX and interaction design. These are not official
            company projects. They go beyond observations into product
            recommendations, revised user flows, interaction concepts,
            prototypes and prioritisation.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {reviewCategories.map((category) => (
              <span
                key={category}
                className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </header>

      {productReviews.map((review, index) => (
        <section
          key={review.id}
          className={index % 2 === 0 ? "border-b border-border" : "border-b border-border bg-surface"}
          aria-labelledby={`${review.id}-heading`}
        >
          <div className="container-page py-16 md:py-20">
            <p className="text-[11px] uppercase tracking-[0.18em] text-burgundy">
              {review.label}
            </p>
            <h2
              id={`${review.id}-heading`}
              className="mt-3 font-serif text-3xl text-navy md:text-4xl"
            >
              {review.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {review.summary}
            </p>

            <div className="mt-8">
              <PlaceholderVisual
                label={review.title}
                note={review.visualNote}
                aspect="wide"
              />
            </div>

            <div className="mt-12 space-y-5">
              {review.findings.map((finding) => (
                <div
                  key={`${review.id}-${finding.observed}`}
                  className="rounded-sm border border-border bg-background p-5 md:p-7"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-burgundy">
                    {finding.category}
                  </p>
                  <div className="mt-5 grid gap-6 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-navy">
                        Observed
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-navy">
                        {finding.observed}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-navy">
                        Why it matters
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {finding.whyItMatters}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-navy">
                        Recommendation
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {finding.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="container-page py-16 md:py-20">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          These reviews are independent product-sense case studies. They are
          not presented as employment projects or official affiliations with
          the game studios.
        </p>
        <Link href="/#work" className="link-underline mt-8 inline-flex text-sm text-burgundy">
          ← Back to selected work
        </Link>
      </div>
    </article>
  );
}
