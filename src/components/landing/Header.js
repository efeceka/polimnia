"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";

import { BRAND, NAV_LINKS, SOCIAL_LINKS } from "./content";

const SOCIAL_ICONS = {
  Instagram,
  YouTube: Youtube,
  "X (Twitter)": X,
  Facebook,
};

function BrandLogo({ className = "" }) {
  return (
    <Image
      src="/image/logoh.png"
      alt={`${BRAND.name} header logo`}
      width={240}
      height={48}
      priority
      className={`w-auto object-contain ${className}`}
    />
  );
}

function SocialLinks({ className = "", itemClassName = "", iconClassName = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const LucideIcon = SOCIAL_ICONS[social.label];
        if (!LucideIcon) return null;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noreferrer"
            className={`grid h-7 w-7 place-items-center rounded bg-[color:var(--brand-olive)] text-white transition-colors hover:bg-[color:var(--brand-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)] ${itemClassName}`}
          >
            <LucideIcon className={iconClassName || "h-4 w-4"} />
          </a>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    const setVar = () => {
      const height = Math.round(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--site-header-h", `${height}px`);
    };

    setVar();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(setVar) : null;
    resizeObserver?.observe(header);
    window.addEventListener("resize", setVar);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <>
      <header
        data-site-header
        className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur"
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 py-3 sm:justify-between">
          <div className="hidden items-center gap-2 sm:flex">
            <SocialLinks />
          </div>

          <a
            href="#top"
            className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
            aria-label={`${BRAND.name} ana sayfa`}
          >
            <BrandLogo className="h-8" />
          </a>

          <nav className="hidden items-center justify-center gap-8 text-xs tracking-[0.28em] uppercase text-zinc-700 md:flex">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#top"
              className="mx-2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
              aria-label={`${BRAND.name} ana sayfa`}
            >
              <BrandLogo className="h-9" />
            </a>

            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 flex items-center justify-end gap-3">
            <div className="hidden items-center gap-2 text-xs tracking-[0.28em] text-zinc-600 md:flex">
              <a className="hover:text-zinc-900" href="#" aria-label="Türkçe">
                TR
              </a>
              <span className="text-zinc-300">/</span>
              <a className="hover:text-zinc-900" href="#" aria-label="English">
                EN
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 z-40 md:hidden"
          style={{
            top: "var(--site-header-h, 64px)",
            maxHeight: "calc(100svh - var(--site-header-h, 64px))",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 pb-5 sm:px-6">
            <div className="mt-3 overflow-hidden rounded-3xl border border-zinc-200 bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur">
              <div className="max-h-[calc(100svh-var(--site-header-h,64px)-24px)] overflow-y-auto">
                <nav className="divide-y divide-zinc-100 px-2 py-2 text-sm tracking-[0.22em] uppercase text-zinc-800">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="px-6 pb-6 pt-4">
                  <div className="h-px w-full bg-zinc-100" />
                  <div className="mt-5 flex flex-col items-center gap-4">
                    <SocialLinks />
                    <div className="flex items-center gap-2 text-xs tracking-[0.28em] text-zinc-600">
                      <a className="hover:text-zinc-900" href="#" aria-label="Türkçe">
                        TR
                      </a>
                      <span className="text-zinc-300">/</span>
                      <a className="hover:text-zinc-900" href="#" aria-label="English">
                        EN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
