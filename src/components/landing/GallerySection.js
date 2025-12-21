import Image from "next/image";
import { Quote, Star } from "lucide-react";

function normalizeLocale(value) {
  return value === "en" ? "en" : "tr";
}

const COPY = {
  tr: {
    title: "SİZDEN GELENLER",
    subtitle:
      "Kırışıklık Giderici Sprey’i deneyenlerden kısa notlar. Pratik kullanım, hızlı sonuç.",
    verified: "Doğrulanmış",
    testimonials: [
      {
        avatar: "/image/women1.webp",
        name: "Elif K.",
        meta: "İstanbul",
        rating: 5,
        text:
          "Perdelerde ve gömleklerde inanılmaz pratik. Ütüye ayırdığım zaman resmen geri geldi.",
      },
      {
        avatar: "/image/man1.webp",
        name: "Mert A.",
        meta: "Ankara",
        rating: 5,
        text:
          "Seyahatte kurtarıcı oldu. Bavuldan çıkan kıyafetleri birkaç dakikada toparlıyor.",
      },
      {
        avatar: "/image/women2.webp",
        name: "Zeynep S.",
        meta: "İzmir",
        rating: 5,
        text:
          "Hassas kumaşlarda da gönül rahatlığıyla kullandım. Kokusu hafif, etkisi güçlü.",
      },
      {
        avatar: "/image/man2.webp",
        name: "Deniz T.",
        meta: "Bursa",
        rating: 5,
        text:
          "Gün içinde hızlı tazeleme için ideal. Özellikle ceket ve pantolonda çok iyi.",
      },
    ],
  },
  en: {
    title: "TESTIMONIALS",
    subtitle:
      "Short notes from people who tried the Wrinkle Release Spray—quick, easy, and effective.",
    verified: "Verified",
    testimonials: [
      {
        avatar: "/image/women1.webp",
        name: "Elif K.",
        meta: "Istanbul",
        rating: 5,
        text:
          "So practical on curtains and shirts. I’ve genuinely gained back the time I used to spend ironing.",
      },
      {
        avatar: "/image/man1.webp",
        name: "Mert A.",
        meta: "Ankara",
        rating: 5,
        text:
          "A lifesaver while traveling. It refreshes clothes right out of the suitcase in minutes.",
      },
      {
        avatar: "/image/women2.webp",
        name: "Zeynep S.",
        meta: "Izmir",
        rating: 4,
        text:
          "I used it on delicate fabrics with confidence. Light scent, strong effect.",
      },
      {
        avatar: "/image/man2.webp",
        name: "Deniz T.",
        meta: "Bursa",
        rating: 5,
        text:
          "Perfect for quick touch-ups during the day—especially on jackets and trousers.",
      },
    ],
  },
};

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1 text-[color:var(--brand-gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-30"}`}
        />
      ))}
    </div>
  );
}

export default function GallerySection({ locale }) {
  const activeLocale = normalizeLocale(locale);
  const content = COPY[activeLocale];

  return (
    <section id="galeri" className="bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-[44px] bg-[#eef0eb] px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-extrabold tracking-wide text-[#2f5b59] sm:text-2xl">
                {content.title}
              </h2>
              <p className="mt-2 text-base leading-7 text-[#6f655d]">
                {content.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.testimonials.map((t) => (
              <article
                key={`${t.name}-${t.meta}`}
                className="relative overflow-hidden rounded-3xl bg-white px-6 py-7 shadow-sm ring-1 ring-black/5"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#eef0eb]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#2f5b59]/10 ring-1 ring-black/5">
                      {t.avatar ? (
                        <Image
                          src={t.avatar}
                          alt=""
                          width={44}
                          height={44}
                          sizes="44px"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-sm font-bold text-[#2f5b59]">
                          {t.name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        {t.name}
                      </div>
                      <div className="text-xs tracking-wide text-[#8b8076]">
                        {t.meta}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#eef0eb] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#2f5b59]">
                    {content.verified}
                  </span>
                </div>

                <div className="relative mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <Stars rating={t.rating} />
                    <Quote className="h-5 w-5 text-[#2f5b59]/35" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#6f655d]">
                    {t.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
