import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const base =
    "case-meta inline-flex items-center justify-center rounded-sm px-5 py-2.5 transition-[color,background-color,border-color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy";

  const styles = {
    primary:
      "bg-burgundy text-background hover:bg-burgundy-soft active:translate-y-px",
    secondary:
      "border border-border-strong text-navy hover:border-burgundy hover:text-burgundy active:translate-y-px",
    ghost:
      "text-navy link-underline px-0 py-0 rounded-none",
  }[variant];

  const shared = `${base} ${styles} ${className}`;
  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  if (external || isMailOrTel) {
    return (
      <a
        href={href}
        className={shared}
        {...(!isMailOrTel
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={shared}>
      {children}
    </Link>
  );
}
