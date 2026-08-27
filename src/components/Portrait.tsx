import Image from "next/image";
import { siteConfig } from "@/data/site";

type PortraitProps = {
  size?: "hero" | "about" | "compact";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  hero: "aspect-[4/5] w-full max-w-[18rem] md:max-w-none",
  about: "aspect-[4/5] w-full max-w-sm",
  compact: "aspect-[4/5] w-28 sm:w-32",
};

export function Portrait({
  size = "about",
  className = "",
  priority = false,
}: PortraitProps) {
  return (
    <figure className={`min-w-0 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-sm border border-border-strong bg-surface shadow-[0_18px_40px_-28px_rgba(26,31,46,0.35)] ${sizeClasses[size]}`}
      >
        <Image
          src={siteConfig.portraitPath}
          alt={`${siteConfig.name}, product and operations portfolio portrait`}
          fill
          priority={priority}
          sizes={
            size === "compact"
              ? "128px"
              : size === "hero"
                ? "(max-width: 768px) 288px, 320px"
                : "(max-width: 768px) 384px, 420px"
          }
          className="object-cover object-[center_18%] transition-transform duration-500 ease-out hover:scale-[1.02]"
        />
      </div>
    </figure>
  );
}
