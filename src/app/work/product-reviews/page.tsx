import type { Metadata } from "next";
import { ProductReviewsView } from "@/components/ProductReviewsView";

export const metadata: Metadata = {
  title: "Selected Product Reviews — Eda Sahin",
  description:
    "Independent product reviews of Critical Strike and Polygun Arena focused on FTUE, progression, gameplay, monetization, UX and interaction design.",
  openGraph: {
    title: "Selected Product Reviews — Eda Sahin",
    description:
      "Independent product-sense case studies covering FTUE, progression, gameplay, monetization and UX recommendations.",
    type: "article",
  },
};

export default function ProductReviewsPage() {
  return <ProductReviewsView />;
}
