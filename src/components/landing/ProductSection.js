import Image from "next/image";

const COPY = {
  tr: {
    title: "KIRIŞIKLIK GİDERİCİ\nSPREY",
    imageAlt: "Kırışıklık giderici sprey ürün görseli",
    blocks: [
      {
        lead: "ÜTÜLEMEYİN",
        text:
          "Ütü yapmak için zaman kaybetmekten yorulduysanız, bu kırışıklık giderici sizin için bir alternatiftir. Dakikalar içinde kırışıklıkları azaltmak için perdelerde, masa örtüleri ve daha fazlasında kullanın.",
      },
      {
        lead: "KOLAY KULLANIM",
        text:
          "Kumaş kırışıklık spreyini püskürtün, pürüzsüzleştirin ve tamamen kuruyana kadar asın. Bütün kumaş tiplerinde etkilidir.",
        lead2: "PARA VE ZAMANDAN TASARRUF EDİN",
        text2:
          "Kullanım başına sadece kuruş maliyeti olan kuru temizleme masrafından tasarruf sağlar; enerji ve su tasarrufu sağlayan rötuş için mükemmeldir.",
      },
      {
        lead: "DOĞAL VE ETKİLİ",
        text:
          "Bitki bazlı malzemelerle çalışan kırışıklık giderme spreyimiz, herhangi bir sülfat veya sert kimyasallar olmadan diğer markalar kadar etkilidir.",
      },
    ],
  },
  en: {
    title: "WRINKLE RELEASE\nSPRAY",
    imageAlt: "Wrinkle release spray product photo",
    blocks: [
      {
        lead: "NO IRONING",
        text:
          "If you're tired of wasting time ironing, this wrinkle release spray is a practical alternative. Use it on curtains, tablecloths, and more to reduce wrinkles in minutes.",
      },
      {
        lead: "EASY TO USE",
        text:
          "Spray onto fabric, smooth by hand, and hang until fully dry. Effective on most fabric types.",
        lead2: "SAVE TIME & MONEY",
        text2:
          "Helps reduce dry-cleaning costs and is perfect for quick touch-ups while also saving energy and water.",
      },
      {
        lead: "NATURAL & EFFECTIVE",
        text:
          "Powered by plant-based ingredients, our spray works effectively without sulfates or harsh chemicals.",
      },
    ],
  },
};

const PRODUCT_MEDIA = {
  imageSrc: "/image/brandbook.webp",
  badgeSrc: "/image/spray.png",
};

function normalizeLocale(value) {
  return value === "en" ? "en" : "tr";
}

export default function ProductSection({ locale }) {
  const activeLocale = normalizeLocale(locale);
  const PRODUCT = COPY[activeLocale];

  return (
    <section id="urun" className="bg-[#f6efec]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[480px_1fr] lg:items-start lg:py-20">
        <div className="overflow-hidden rounded-[28px] bg-white/60 p-3 shadow-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-zinc-200">
            <Image
              src={PRODUCT_MEDIA.imageSrc}
              alt={PRODUCT.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="pt-2">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#f05a00] sm:text-5xl">
              {PRODUCT.title.split("\n").map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="relative mt-1 hidden shrink-0 sm:block">
              <Image
                src={PRODUCT_MEDIA.badgeSrc}
                alt=""
                width={280}
                height={280}
                sizes="(min-width: 1024px) 200px, 160px"
                className="h-auto w-32 sm:w-40 lg:w-52"
              />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-[#f05a00]/55" />

          <div className="mt-6 space-y-6 text-[17px] leading-8 text-[#7a4a27]">
            {PRODUCT.blocks.map((block, idx) => (
              <div key={idx}>
                <p>
                  <span className="font-extrabold tracking-wide">
                    {block.lead}&nbsp;
                  </span>
                  {block.text}
                </p>

                {block.lead2 ? (
                  <p className="mt-3">
                    <span className="font-extrabold tracking-wide">
                      {block.lead2}&nbsp;
                    </span>
                    {block.text2}
                  </p>
                ) : null}

                {idx !== PRODUCT.blocks.length - 1 ? (
                  <div className="mt-6 h-px w-full bg-[#f05a00]/40" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
