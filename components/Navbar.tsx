"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";
import { PillButton } from "./PillButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isDark ? "bg-ink text-cream shadow-sm" : "bg-transparent text-ink"
      }`}
    >
      <nav className="container-portfolio flex items-center justify-between py-5">
        <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
              isDark ? "bg-cream text-ink" : "bg-ink text-cream"
            }`}
          >
            {siteConfig.shortName[0]}
          </span>
          <span>{siteConfig.shortName}</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <PillButton href="#contact" variant={isDark ? "light" : "dark"}>
            Book A Call
          </PillButton>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-cream/10 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <PillButton href="#contact" variant="light" className="w-fit">
              Book A Call
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
