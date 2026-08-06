import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-cream md:px-10 md:py-20">
      <div className="container-portfolio">
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-10 md:flex-row md:items-end md:justify-between">
          <nav className="flex flex-wrap gap-6 text-sm text-cream/70">
            {footerContent.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-cream">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={`mailto:${footerContent.email}`}
            className="font-display text-3xl italic hover:text-accent md:text-5xl"
          >
            {footerContent.email}
          </Link>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>{footerContent.legal}</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
