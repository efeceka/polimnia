import Image from "next/image";

import { BRAND, PRODUCT } from "./content";

export default function ProductSection() {
  return (
    <section id="urun" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-[color:var(--brand-gold)]">
              Ürün Tanıtımı
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
              Aşağıdaki alanlar tek ürün için tasarlandı. Ürün adı, fiyat ve
              içerikleri kendi içeriğinize göre düzenleyin.
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200 text-zinc-500">
              ‹
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200 text-zinc-500">
              ›
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200/70">
            <div className="relative aspect-[16/10] bg-zinc-300">
              <Image
                src="/image/1.jpg"
                alt={`${BRAND.name} ${PRODUCT.name} ürün görseli`}
                fill
                priority
                className="object-cover"
              />
            </div>
            <figcaption className="bg-white px-5 py-4">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    {BRAND.name} {PRODUCT.name}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">
                    {PRODUCT.size} • {PRODUCT.usage}
                  </div>
                </div>
                <div className="text-sm font-semibold text-zinc-900">
                  {PRODUCT.price}
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200/70">
            <div className="relative aspect-[16/10] bg-zinc-300">
              <Image
                src="/image/2.jpg"
                alt="Kullanım/lifestyle görseli"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="bg-white px-5 py-4">
              <div className="text-sm font-semibold text-zinc-900">
                Sade bir rutin, tek imza dokunuş.
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                Bu alanı ürünün hikâyesi veya kullanım önerisiyle doldurun.
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] uppercase text-zinc-700">
              Öne Çıkanlar
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
              {PRODUCT.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xs font-semibold tracking-[0.28em] uppercase text-zinc-700">
              Notlar
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
              {PRODUCT.notes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-zinc-700">
              Satın Alma
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Tek ürün için birincil aksiyonu burada toplayın: satın alma, teklif
              formu veya WhatsApp yönlendirmesi.
            </p>
            <a
              href="#iletisim"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-xs font-semibold tracking-[0.22em] text-white uppercase transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-gold)]"
            >
              Formu Aç
            </a>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11px] text-zinc-600">
              {["Hızlı Kargo", "Güvenli Ödeme", "Kolay İade"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-zinc-200 bg-white px-3 py-4"
                >
                  {t}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-zinc-500">
              * Fiyat ve metinler örnek amaçlıdır.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

