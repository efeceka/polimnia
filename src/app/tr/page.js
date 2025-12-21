import ContactSection from "../../components/landing/ContactSection";
import DetailSection from "../../components/landing/DetailSection";
import GallerySection from "../../components/landing/GallerySection";
import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import ProductSection from "../../components/landing/ProductSection";
import StorySection from "../../components/landing/StorySection";

function normalizeBasePath(value) {
  if (!value) return "";
  let basePath = String(value).trim();
  if (!basePath || basePath === "/") return "";
  if (!basePath.startsWith("/")) basePath = `/${basePath}`;
  return basePath.replace(/\/+$/, "");
}

export function generateMetadata() {
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
  const withBase = (path) => `${basePath}${path}`;

  const title = "Kırışıklık Giderici Sprey";
  const description =
    "Ütüsüz pürüzsüz görünüm için POLIMNIA Kırışıklık Giderici Sprey. Polyester, pamuk, ipek, yün ve daha fazlasında güvenle kullanın; bitki bazlı, pratik kullanım.";
  const ogImage = withBase("/image/hero1.webp");

  return {
    title,
    description,
    alternates: {
      canonical: withBase("/tr/"),
      languages: {
        tr: withBase("/tr/"),
        en: withBase("/en/"),
      },
    },
    openGraph: {
      title,
      description,
      url: withBase("/tr/"),
      locale: "tr_TR",
      images: [{ url: ogImage }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function HomeTr() {
  const locale = "tr";

  return (
    <div className="min-h-screen bg-[color:var(--page-bg)] text-zinc-900">
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <ProductSection locale={locale} />
        <StorySection locale={locale} />
        <DetailSection locale={locale} />
        <GallerySection locale={locale} />
        <ContactSection locale={locale} />
      </main>
    </div>
  );
}
