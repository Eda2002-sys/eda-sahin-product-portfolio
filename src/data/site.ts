export const siteConfig = {
  name: "Eda Sahin",
  title: "Eda Sahin · Product Portfolio",
  description:
    "Product portfolio of Eda Sahin, Product & Operations Associate: AI products, client delivery and implementation across workforce intelligence, digital health and investment technology.",
  // The canonical origin, in ONE place. `metadataBase` in app/layout.tsx used
  // to hardcode this separately, so pointing the site at a custom domain meant
  // editing a file that holds no other config - and forgetting it silently
  // leaves every Open Graph and Twitter card pointing at the old origin.
  url: "https://eda-sahin-product-portfolio.vercel.app",
  location: "Istanbul",
  email: "edashn2002@gmail.com",
  phone: "+90 536 795 45 17",
  github: "https://github.com/Eda2002-sys",
  linkedin: "https://www.linkedin.com/in/eda-%C5%9Fahin-b79300231/",
  resumePath: "/resume",
  resumePdfPath: "/resume.pdf",
  portraitPath: "/images/eda-sahin-portrait.jpg",
  year: 2026,
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "CV", href: siteConfig.resumePath },
] as const;

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
] as const;
