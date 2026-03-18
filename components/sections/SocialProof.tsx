"use client";

import { cn } from "@/lib/utils";

const PARTNERS = [
  { name: "ElevenLabs", initials: "XI" },
  { name: "HeyGen", initials: "HG" },
  { name: "OpenAI", initials: "AI" },
  { name: "Midjourney", initials: "MJ" },
  { name: "Runway", initials: "RW" },
  { name: "Synthesia", initials: "SY" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#F5F3FF] py-12 md:py-16 border-t border-b border-[#5B21B6]/10">
      {/* Label */}
      <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-[#6B7280]/60 font-medium mb-8">
        <span className="text-[#D4AF37]">&bull;</span> Technologies &amp; Partenaires de confiance <span className="text-[#D4AF37]">&bull;</span>
      </p>

      {/* Scrolling band */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F3FF] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F3FF] to-transparent" />

        <div
          className="flex w-max animate-scroll-left"
          style={{ animationDuration: "30s" }}
        >
          {/* Original set */}
          {PARTNERS.map((partner, index) => (
            <div
              key={`partner-a-${index}`}
              className={cn(
                "flex items-center gap-3 mx-6 md:mx-10 flex-shrink-0",
                "px-6 py-3 rounded-lg border border-[#5B21B6]/10 bg-[#FFFFFF]/70",
                "hover:border-[#5B21B6]/30 transition-all duration-300"
              )}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold">
                {partner.initials}
              </span>
              <span
                className="text-sm md:text-base font-semibold text-[#1F2937]/70 tracking-wide whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-sub), system-ui, sans-serif",
                }}
              >
                {partner.name}
              </span>
            </div>
          ))}

          {/* Duplicated set for seamless loop */}
          {PARTNERS.map((partner, index) => (
            <div
              key={`partner-b-${index}`}
              className={cn(
                "flex items-center gap-3 mx-6 md:mx-10 flex-shrink-0",
                "px-6 py-3 rounded-lg border border-[#5B21B6]/10 bg-[#FFFFFF]/70",
                "hover:border-[#5B21B6]/30 transition-all duration-300"
              )}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold">
                {partner.initials}
              </span>
              <span
                className="text-sm md:text-base font-semibold text-[#1F2937]/70 tracking-wide whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-sub), system-ui, sans-serif",
                }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
