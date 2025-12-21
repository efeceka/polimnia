"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

import { BRAND, SOCIAL_LINKS } from "./content";

const SOCIAL_ICONS = {
  Instagram,
  YouTube: Youtube,
  Facebook,
};

const FOOTER_LINKS = [
  "Aydınlatma Metni",
  "Çerez Politikası",
  "Gizlilik Politikası",
  "Kullanım Koşulları",
  "KVKK",
  "Mesafeli Satış Sözleşmesi",
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.filter((s) => s.label !== "X (Twitter)").map((social) => {
        const LucideIcon = SOCIAL_ICONS[social.label];
        if (!LucideIcon) return null;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-xl bg-[#d8cfc7] text-white transition-colors hover:bg-[color:var(--brand-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)]"
          >
            <LucideIcon className="h-5 w-5 text-white/90" />
          </a>
        );
      })}
    </div>
  );
}

export default function ContactSection({ locale }) {
  const activeLocale = locale === "en" ? "en" : "tr";
  const copy =
    activeLocale === "en"
      ? {
          placeholders: {
            name: "Full Name",
            company: "Company",
            city: "City",
            message: "Your message",
          },
          submit: "Send",
          alerts: {
            ok: "Message sent successfully",
            fail: "Sending failed",
          },
          footerLinks: [
            "Disclosure",
            "Cookie Policy",
            "Privacy Policy",
            "Terms of Use",
            "KVKK",
            "Distance Sales Contract",
          ],
        }
      : {
          placeholders: {
            name: "Ad Soyad",
            company: "Firma",
            city: "Şehir",
            message: "Mesajınız",
          },
          submit: "Gönder",
          alerts: {
            ok: "Mesaj başarıyla gönderildi",
            fail: "Gönderim başarısız",
          },
          footerLinks: FOOTER_LINKS,
        };

  const endpoint = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/api/contact.php`;

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        alert(copy.alerts.ok);
        e.target.reset();
      } else {
        alert(copy.alerts.fail);
      }
    } catch {
      alert(copy.alerts.fail);
    }
  }

  return (
    <section id="iletisim" className="bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="overflow-hidden rounded-[44px] bg-[#f4ede7]">
          <div className="grid gap-10 px-8 py-10 sm:px-12 sm:py-12 lg:grid-cols-[340px_1fr] lg:gap-12 lg:px-14 lg:py-14">
            <div className="flex flex-col items-center justify-between gap-8">
              <div className="relative w-full max-w-[240px]">
                <Image
                  src="/image/logof.png"
                  alt={`${BRAND.name} logo`}
                  width={512}
                  height={768}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <SocialLinks className="justify-center" />
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                action={endpoint}
                method="post"
                encType="multipart/form-data"
                className="grid gap-5 lg:grid-cols-[1fr_1fr]"
              >
                <div className="grid gap-5">
                  {[
                    [copy.placeholders.name, "name", true],
                    [copy.placeholders.company, "company", false],
                    [copy.placeholders.city, "city", false],
                  ].map(([placeholder, name, required]) => (
                    <input
                      key={name}
                      type="text"
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      className="h-16 w-full rounded-none bg-[#d8cfc7] px-6 text-lg text-white placeholder:text-white/90 outline-none ring-0 focus:bg-[#cfc4bb]"
                    />
                  ))}
                </div>

                <textarea
                  name="form"
                  placeholder={copy.placeholders.message}
                  required
                  className="h-[232px] w-full resize-none rounded-none bg-[#d8cfc7] px-6 py-5 text-lg text-white placeholder:text-white/90 outline-none ring-0 focus:bg-[#cfc4bb] lg:h-full"
                />

                <div className="lg:col-span-2 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="text-base leading-7 text-[#8b8076]">
                    Altıntepe Mh. Köknarlı Sok. Köknar Apt. D blok D:18
                    Maltepe/İstanbul
                    <div className="mt-2">+90 549 800 89 21</div>
                  </div>

                  <button
                    type="submit"
                    className="h-14 w-full max-w-[220px] bg-[color:var(--brand-gold)] px-10 text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#9b761f] lg:ml-auto"
                  >
                    {copy.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-white/40 bg-[#efe7e1] px-8 py-6 sm:px-12 lg:px-14">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="hidden lg:block">
                <div className="h-1 w-10 rounded bg-[#d8cfc7]" />
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#8b8076]">
                {copy.footerLinks.map((label) => (
                  <a key={label} href="#" className="hover:text-[#6f655d]">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="hidden lg:block">
                <div className="h-1 w-10 rounded bg-[#d8cfc7]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
