import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="text-[11px] uppercase tracking-[0.2em] text-burgundy">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link href="/" className="link-underline mt-8 inline-flex text-sm text-burgundy">
        ← Back home
      </Link>
    </div>
  );
}
