import Image from "next/image";

export default function StorySection() {
  const BANNER = {
    title: "PRATİK\nVE HİJYENİK",
    description:
      "Polyester, pamuk, ipek, yün ve daha bir çok kumaş türünde güvenle kullanılabilir. Hassas kumaşlarda bile liflere zarar vermeden etkili sonuç verir.",
    imageSrc: "/image/pratik.webp",
  };

  return (
    <section id="hikaye" className="bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-8xl px-6 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-[40px] border border-zinc-200 bg-[#9b98b7]">
          <Image
            src={BANNER.imageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-right"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#9b98b7] via-[#9b98b7]/35 to-transparent" />

          <div className="relative px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div className="max-w-[620px]">
              <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {BANNER.title.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[560px] text-lg leading-7 text-white/90">
                {BANNER.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
