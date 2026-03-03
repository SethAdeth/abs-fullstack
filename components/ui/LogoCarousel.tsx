"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const speedMap = {
  slow: "60s",
  normal: "30s",
  fast: "15s",
};

export default function LogoCarousel({
  logos,
  speed = "normal",
  className,
}: LogoCarouselProps) {
  if (!logos || logos.length === 0) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-8",
        className
      )}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex w-max animate-scroll-left"
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {/* Original set */}
        {logos.map((logo, index) => (
          <div
            key={`logo-a-${index}`}
            className="flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 140}
              height={logo.height ?? 50}
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}

        {/* Duplicated set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`logo-b-${index}`}
            className="flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 140}
              height={logo.height ?? 50}
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
