import ContactSection from "../components/landing/ContactSection";
import DetailSection from "../components/landing/DetailSection";
import GallerySection from "../components/landing/GallerySection";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import ProductSection from "../components/landing/ProductSection";
import StorySection from "../components/landing/StorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--page-bg)] text-zinc-900">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <StorySection />
        <DetailSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
}

