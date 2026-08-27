import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="eyebrow">404</p>
      <h1 className="case-title mt-4">Page not found</h1>
      <p className="case-body mt-4 max-w-md">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link href="/" className="link-underline case-meta mt-8 inline-flex text-burgundy">
        ← Back home
      </Link>
    </div>
  );
}
