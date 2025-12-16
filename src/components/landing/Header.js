import BrandLogo from "./BrandLogo";
import SocialLinks from "./SocialLinks";
import Icon from "./Icon";
import { BRAND, NAV_LINKS } from "./content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 py-3 sm:justify-between">
        <div className="hidden items-center gap-2 sm:flex">
          <SocialLinks />
        </div>

        <a
          href="#top"
          className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
          aria-label={`${BRAND.name} ana sayfa`}
        >
          <BrandLogo className="h-9" />
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
            <BrandLogo className="h-10" />
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
          <details className="relative md:hidden">
            <summary className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]">
              <Icon className="h-5 w-5">
                <path d="M4 7h16v2H4V7Zm0 8h16v2H4v-2Zm0-4h16v2H4v-2Z" />
              </Icon>
            </summary>
            <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg">
              <div className="border-b border-zinc-100 px-4 py-3">
                <div className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                  Menü
                </div>
              </div>
              <div className="flex flex-col p-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-zinc-800 hover:bg-zinc-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="border-t border-zinc-100 px-4 py-3">
                <div className="flex items-center justify-between">
                  <SocialLinks />
                  <div className="flex items-center gap-2 text-xs tracking-[0.28em] text-zinc-600">
                    <a className="hover:text-zinc-900" href="#">
                      TR
                    </a>
                    <span className="text-zinc-300">/</span>
                    <a className="hover:text-zinc-900" href="#">
                      EN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
