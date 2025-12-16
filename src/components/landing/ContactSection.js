import BrandLogo from "./BrandLogo";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <section id="iletisim" className="bg-[#eef0ed]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-between gap-8 lg:items-start lg:pr-10 lg:border-r lg:border-zinc-200">
            <BrandLogo
              variant="footer"
              className="h-40 w-full max-w-[620px] sm:h-44 lg:h-96"
            />

            <div className="flex flex-col items-center gap-3">
              <div className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                Follow us
              </div>
              <SocialLinks itemClassName="h-8 w-8" iconClassName="h-5 w-5" className="gap-3" />
            </div>
          </div>

          <form className="grid gap-4 lg:grid-cols-2 lg:pl-10">
            <div className="lg:col-span-1">
              <label className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                İsim
                <input
                  type="text"
                  name="name"
                  className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-[color:var(--brand-gold)]"
                  placeholder="Ad Soyad"
                />
              </label>
            </div>
            <div className="lg:col-span-1">
              <label className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                Şirket
                <input
                  type="text"
                  name="company"
                  className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-[color:var(--brand-gold)]"
                  placeholder="Şirket / Marka"
                />
              </label>
            </div>
            <div className="lg:col-span-1">
              <label className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                Şehir
                <input
                  type="text"
                  name="city"
                  className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-[color:var(--brand-gold)]"
                  placeholder="İstanbul"
                />
              </label>
            </div>
            <div className="lg:col-span-1">
              <label className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                E‑posta
                <input
                  type="email"
                  name="email"
                  className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-[color:var(--brand-gold)]"
                  placeholder="mail@ornek.com"
                />
              </label>
            </div>
            <div className="lg:col-span-2">
              <label className="text-xs tracking-[0.28em] uppercase text-zinc-500">
                Not
                <textarea
                  name="note"
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--brand-gold)]"
                  placeholder="Mesajınız..."
                />
              </label>
            </div>
            <div className="lg:col-span-2 flex items-center justify-between gap-4 pt-2">
              <div className="text-xs leading-5 text-zinc-500">
                Form aksiyonunu (mail/CRM) ihtiyacınıza göre bağlayın.
              </div>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-xs font-semibold tracking-[0.22em] text-white uppercase transition-colors hover:bg-zinc-700"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
