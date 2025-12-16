import Image from "next/image";

import { BRAND } from "./content";

export default function BrandLogo({ variant = "header", className = "" }) {
  const src =
    variant === "footer" ? "/image/logofooter.png" : "/image/logoheader.png";
  const alt =
    variant === "footer"
      ? `${BRAND.name} footer logo`
      : `${BRAND.name} header logo`;

  return (
    <Image
      src={src}
      alt={alt}
      width={variant === "footer" ? 360 : 240}
      height={variant === "footer" ? 72 : 48}
      className={`w-auto object-contain ${className}`}
      priority={variant === "header"}
    />
  );
}

