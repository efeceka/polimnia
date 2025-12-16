import Image from "next/image";

import { BRAND, PRODUCT } from "./content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--hero-gray)]">
      <div className="absolute inset-0">
        <Image
          src="/image/hero.jpg"
          alt="Hero görseli"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/35 to-zinc-900/55" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col items-center justify-center gap-6 px-6 py-24 text-center sm:min-h-[580px]">
        <div className="text-xs tracking-[0.45em] uppercase text-zinc-200">
          {BRAND.name}
        </div>
        <h1 className="text-4xl font-medium tracking-[0.22em] text-[color:var(--brand-gold)] sm:text-5xl md:text-6xl">
          {BRAND.tagline}
        </h1>
      </div>
    </section>
  );
}

