import Image from "next/image";

import Feature from "./Feature";
import { BRAND } from "./content";
import { CreditCard, Headset, RefreshCcw, Truck } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="galeri" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-lg font-semibold tracking-wide text-zinc-900">
            On the Gram
          </h2>
          <div className="text-xs tracking-[0.22em] text-zinc-500">
            {BRAND.handle}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
            >
              <Image
                src={`/image/${(i % 3) + 1}.jpg`}
                alt={`Galeri görseli ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/35 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Ücretsiz Kargo"
            description="Belirli tutar üzeri gönderim."
            icon={<Truck className="h-5 w-5" />}
          />
          <Feature
            title="Kolay İade"
            description="Hızlı değişim ve iade süreci."
            icon={<RefreshCcw className="h-5 w-5" />}
          />
          <Feature
            title="Online Destek"
            description="Haftanın 7 günü yardımcı oluruz."
            icon={<Headset className="h-5 w-5" />}
          />
          <Feature
            title="Güvenli Ödeme"
            description="Kart ve alternatif yöntemler."
            icon={<CreditCard className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
}
