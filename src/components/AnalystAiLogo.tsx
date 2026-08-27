import Image from "next/image";
import Link from "next/link";

const LOGO_PATH = "/images/analystai-logo.png";
const LOGO_ASPECT = 984 / 421;

const sizes = {
  sm: 22,
  md: 30,
  lg: 42,
} as const;

type AnalystAiLogoProps = {
  size?: keyof typeof sizes;
  showWordmark?: boolean;
  href?: string;
  className?: string;
  dark?: boolean;
};

export function AnalystAiLogo({
  size = "md",
  showWordmark = false,
  href = "https://www.analystai.ai",
  className = "",
  dark = false,
}: AnalystAiLogoProps) {
  const height = sizes[size];
  const width = Math.round(height * LOGO_ASPECT);

  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt="AnalystAI logo"
        width={width}
        height={height}
        className="object-contain"
        style={{ width, height }}
      />
      {showWordmark ? (
        <span
          className={`text-lg font-medium tracking-tight ${
            dark ? "text-background" : "text-navy"
          }`}
        >
          AnalystAI
        </span>
      ) : null}
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transition-opacity hover:opacity-80"
      aria-label="AnalystAI (opens in new tab)"
    >
      {mark}
    </Link>
  );
}
