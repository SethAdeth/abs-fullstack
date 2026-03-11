"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #4C1D95 0%, #5B21B6 50%, #4C1D95 100%)",
        }}
        aria-hidden="true"
      />

      {/* Violet ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#7C3AED]/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-1 h-1 rounded-full bg-[#7C3AED]/30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-[#7C3AED]/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[35%] right-[15%] w-1 h-1 rounded-full bg-[#7C3AED]/25 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container-abs relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Votre empire mérite une voix qui ne{" "}
            <span className="text-white ">fatigue jamais.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Rejoignez l&apos;élite des leaders africains qui ont choisi
            l&apos;omniprésence numérique. Votre clone digital travaille
            pendant que vous bâtissez votre empire.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" variant="white" size="lg">
              Réserver mon Diagnostic d&apos;Autorité
              <ArrowRight size={18} />
            </Button>
            <Button href={whatsappUrl} variant="outline-light" size="lg">
              <MessageCircle size={18} />
              Contacter via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
