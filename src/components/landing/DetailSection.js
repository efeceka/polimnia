import Image from "next/image";

export default function DetailSection() {
  const SECTION = {
    title: "KURUMSAL İŞ BİRLİKLERİ",
    images: [
      { src: "/image/macfit.png", label: "Macfit" },
      { src: "/image/ibis.png", label: "Ibis" },
      { src: "/image/hilton.png", label: "Hilton" },
      { src: "/image/memorial.png", label: "Memorial" },
      { src: "/image/rixos.png", label: "Rixos" },
    ],
  };

  return (
    <section id="detay" className="bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-[44px] bg-[#d6dacb] px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          <h2 className="text-lg font-extrabold tracking-wide text-[#2f5b59]">
            {SECTION.title}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SECTION.images.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <div className="px-4 pb-4">
                    <div className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-900">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
