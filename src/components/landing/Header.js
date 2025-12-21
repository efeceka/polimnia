"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
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

const NAV_LABELS = {
  tr: {
    product: "Ürün",
    story: "Hikâye",
    gallery: "Galeri",
    contact: "İletişim",
  },
  en: {
    product: "Product",
    story: "About",
    gallery: "Gallery",
    contact: "Contact",
  },
};

const A11Y = {
  tr: {
    home: "ana sayfa",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    tr: "Türkçe",
    en: "English",
  },
  en: {
    home: "home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    tr: "Turkish",
    en: "English",
  },
};

function normalizeLocale(value) {
  return value === "en" ? "en" : "tr";
}

function normalizeBasePath(value) {
  if (!value) return "";
  let basePath = String(value).trim();
  if (!basePath || basePath === "/") return "";
  if (!basePath.startsWith("/")) basePath = `/${basePath}`;
  return basePath.replace(/\/+$/, "");
}

function stripBasePath(pathname, basePath) {
  if (!basePath) return pathname;
  if (pathname === basePath) return "/";
  return pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname;
}

export default function Header({ locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
  const currentPathname = stripBasePath(pathname || "/", basePath);
  const inferredLocale = currentPathname.startsWith("/en") ? "en" : "tr";
  const activeLocale = normalizeLocale(locale || inferredLocale);
  const labels = NAV_LABELS[activeLocale];
  const a11y = A11Y[activeLocale];

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

  useEffect(() => {
    document.documentElement.lang = activeLocale;
  }, [activeLocale]);

  const localeHref = (targetLocale) => {
    const prefix = basePath || "";
    const target = normalizeLocale(targetLocale);
    return `${prefix}/${target}/`;
  };

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
            aria-label={`${BRAND.name} ${a11y.home}`}
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
                {link.href === "#urun"
                  ? labels.product
                  : link.href === "#hikaye"
                    ? labels.story
                    : link.label}
              </a>
            ))}

            <a
              href="#top"
              className="mx-2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
              aria-label={`${BRAND.name} ${a11y.home}`}
            >
              <BrandLogo className="h-9" />
            </a>

            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
              >
                {link.href === "#galeri"
                  ? labels.gallery
                  : link.href === "#iletisim"
                    ? labels.contact
                    : link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 flex items-center justify-end gap-3">
            <div className="hidden items-center gap-2 text-xs tracking-[0.28em] text-zinc-600 md:flex">
              <a
                className={`hover:text-zinc-900 ${
                  activeLocale === "tr" ? "font-semibold text-zinc-900" : ""
                }`}
                href={localeHref("tr")}
                aria-label="Türkçe"
              >
                TR
              </a>
              <span className="text-zinc-300">/</span>
              <a
                className={`hover:text-zinc-900 ${
                  activeLocale === "en" ? "font-semibold text-zinc-900" : ""
                }`}
                href={localeHref("en")}
                aria-label="English"
              >
                EN
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? a11y.closeMenu : a11y.openMenu}
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
                      {link.href === "#urun"
                        ? labels.product
                        : link.href === "#hikaye"
                          ? labels.story
                          : link.href === "#galeri"
                            ? labels.gallery
                            : link.href === "#iletisim"
                              ? labels.contact
                              : link.label}
                    </a>
                  ))}
                </nav>

                <div className="px-6 pb-6 pt-4">
                  <div className="h-px w-full bg-zinc-100" />
                  <div className="mt-5 flex flex-col items-center gap-4">
                    <SocialLinks />
                    <div className="flex items-center gap-2 text-xs tracking-[0.28em] text-zinc-600">
                      <a
                        className={`hover:text-zinc-900 ${
                          activeLocale === "tr" ? "font-semibold text-zinc-900" : ""
                        }`}
                        href={localeHref("tr")}
                        aria-label="Türkçe"
                      >
                        TR
                      </a>
                      <span className="text-zinc-300">/</span>
                      <a
                        className={`hover:text-zinc-900 ${
                          activeLocale === "en" ? "font-semibold text-zinc-900" : ""
                        }`}
                        href={localeHref("en")}
                        aria-label="English"
                      >
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
