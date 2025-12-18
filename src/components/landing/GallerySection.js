export default function GallerySection() {
  const cards = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
  }));

  return (
    <section id="galeri" className="bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-[44px] bg-[#eef0eb] px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="grid aspect-square place-items-center rounded-2xl bg-white shadow-sm"
              >
                {index === 0 ? (
                  <div className="px-6 text-center text-xl font-extrabold tracking-wide text-[#2f5b59]">
                    SİZDEN GELENLER
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
