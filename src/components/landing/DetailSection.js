import Image from "next/image";

export default function DetailSection() {
  return (
    <section id="detay" className="bg-[#eef0ed]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="text-xs tracking-[0.45em] uppercase text-zinc-500">
              Ürün Detayları
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-wide text-zinc-900">
              Günlük kullanıma uygun, minimal deneyim
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
              Bülten bölümünü kaldırdım. Bunun yerine tek ürün sayfası için hızlı
              bilgi alanı ekledim.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["İçerik", "Kısa ve anlaşılır içerik yaklaşımı."],
                ["Kullanım", "Sabah/akşam rutininize ekleyin."],
                ["SSS", "Kargo, iade ve ödeme seçenekleri."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-6"
                >
                  <div className="text-xs font-semibold tracking-[0.28em] uppercase text-zinc-800">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
            <div className="relative aspect-[3/4]">
              <Image
                src="/image/3.jpg"
                alt="Ürün detay görseli"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

