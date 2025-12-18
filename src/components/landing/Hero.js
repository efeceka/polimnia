"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const DESKTOP_SLIDES = ["/image/hero111.webp", "/image/hero21.webp", "/image/hero3.webp"];
const MOBILE_SLIDES = [
  "/image/herom1.webp",
  "/image/herom2.webp",
  "/image/herom3.webp",
];

function subscribe(callback) {
  const mq = window.matchMedia("(max-width: 768px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function Hero() {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const slides = useMemo(() => {
    const source = isMobile ? MOBILE_SLIDES : DESKTOP_SLIDES;
    return source.filter(Boolean);
  }, [isMobile]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedSlides = useMemo(() => {
    if (slides.length === 0) return [];
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [slides]);

  const displayIndex =
    slides.length === 0 ? 0 : ((activeIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((i) => i + 1);
    }, 4500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="top"
      className="relative h-[calc(100svh-var(--site-header-h,64px))] w-full overflow-hidden bg-[color:var(--hero-gray)]"
    >
      <div
        onTransitionEnd={() => {
          if (slides.length <= 1) return;

          if (activeIndex === slides.length + 1) {
            setTransitionEnabled(false);
            setActiveIndex(1);
            requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)));
          }

          if (activeIndex === 0) {
            setTransitionEnabled(false);
            setActiveIndex(slides.length);
            requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)));
          }
        }}
        className={`flex h-full w-full ${
          transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {extendedSlides.map((src, i) => (
          <div key={`${i}-${src}`} className="relative h-full min-w-full">
            <Image
              src={src}
              alt=""
              fill
              priority={i === 1}
              sizes="100vw"
              quality={100}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="pointer-events-auto absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => {
            const isActive = i === displayIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Görsel ${i + 1}`}
                aria-current={isActive ? "true" : "false"}
                onClick={() => {
                  setTransitionEnabled(true);
                  setActiveIndex(i + 1);
                }}
                className={`h-2.5 w-2.5 rounded-full border transition-all ${
                  isActive
                    ? "border-white/90 bg-white/90"
                    : "border-white/55 bg-white/20 hover:border-white/85 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
