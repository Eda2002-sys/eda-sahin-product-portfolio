export const siteConfig = {
  name: "Eda Sahin",
  title: "Eda Sahin — Product Portfolio",
  description:
    "Product portfolio covering AI products, product operations, UX, QA, implementation and selected case studies across workforce, markets, compliance, real estate and clinical workflows.",
  location: "Istanbul",
  email: "edashn2002@gmail.com",
  phone: "+90 536 795 45 17",
  github: "https://github.com/Eda2002-sys",
  linkedin: "https://www.linkedin.com/in/eda-%C5%9Fahin-b79300231/",
  resumePath: "/resume",
  resumePdfPath: "/resume.pdf",
  portraitPath: "/images/eda-sahin.jpg",
  year: 2026,
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "Email", href: `mailto:${siteConfig.email}` },
] as const;

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
] as const;
