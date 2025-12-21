import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://polimnia.com.tr";
  const metadataBase = (() => {
    try {
      return new URL(siteUrl);
    } catch {
      return new URL("https://polimnia.com.tr");
    }
  })();

  const defaultTitle = "Kırışıklık Giderici Sprey";
  const defaultDescription =
    "Ütüsüz pürüzsüz görünüm için POLIMNIA Kırışıklık Giderici Sprey. Polyester, pamuk, ipek, yün ve daha fazlasında güvenle kullanın; bitki bazlı, pratik kullanım.";
  const ogImage = withBase("/image/hero1.webp");

  return {
    metadataBase,
    title: {
      default: `${defaultTitle} | ${"POLIMNIA"}`,
      template: "%s | POLIMNIA",
    },
    description: defaultDescription,
    applicationName: "POLIMNIA",
    publisher: "POLIMNIA",
    category: "product",
    manifest: withBase("/favicon/site.webmanifest"),
    icons: {
      icon: [
        { url: withBase("/favicon.ico") },
        { url: withBase("/favicon/favicon-32x32.png"), type: "image/png", sizes: "32x32" },
        { url: withBase("/favicon/favicon-16x16.png"), type: "image/png", sizes: "16x16" },
      ],
      apple: [{ url: withBase("/favicon/apple-touch-icon.png"), sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      siteName: "POLIMNIA",
      title: defaultTitle,
      description: defaultDescription,
      images: [{ url: ogImage }],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
