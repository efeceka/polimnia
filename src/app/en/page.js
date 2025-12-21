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

  const title = "Wrinkle Release Spray";
  const description =
    "Meet POLIMNIA Wrinkle Release Spray—smooth-looking fabrics without ironing. Safe for cotton, polyester, silk, wool and more; plant-based, easy to use.";
  const ogImage = withBase("/image/hero1.webp");

  return {
    title,
    description,
    alternates: {
      canonical: withBase("/en/"),
      languages: {
        tr: withBase("/tr/"),
        en: withBase("/en/"),
      },
    },
    openGraph: {
      title,
      description,
      url: withBase("/en/"),
      locale: "en_US",
      images: [{ url: ogImage }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function HomeEn() {
  const locale = "en";

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
