import Image from "next/image";

export default function StorySection() {
  return (
    <section
      id="hikaye"
      className="relative overflow-hidden bg-[color:var(--hero-gray)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/image/4.jpg"
          alt="Marka hikayesi görseli"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/45 to-zinc-900/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.45em] uppercase text-zinc-200">
            Marka Hikâyesi
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-[0.18em] text-[color:var(--brand-gold)] sm:text-4xl">
            Sadelik bir seçimdir.
          </h2>
          <p className="mt-6 text-sm leading-7 text-zinc-200 sm:text-base">
            Bu geniş bant alanı, görsel şablondaki büyük banner mantığını tek ürün
            hikâyesi için yeniden kurgular. Buraya kısa bir manifesto, üretim
            yaklaşımı veya sürdürülebilirlik notları ekleyin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#galeri"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-semibold tracking-[0.22em] text-zinc-900 uppercase transition-colors hover:bg-zinc-100"
            >
              Galeriyi Gör
            </a>
            <a
              href="#iletisim"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-xs font-semibold tracking-[0.22em] text-white uppercase transition-colors hover:bg-white/10"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

