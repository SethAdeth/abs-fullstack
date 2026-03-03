"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Counter from "@/components/ui/Counter";

export default function VideoDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo" className="section-padding bg-blanc-alt">
      <div className="container-abs" ref={ref}>
        <SectionTitle
          title="Voyez la Magie en Action"
          subtitle="Découvrez comment votre avatar IA peut transformer votre présence numérique en quelques secondes."
        />

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-violet/20 bg-white group cursor-pointer hover:border-violet/50 transition-all duration-500 shadow-sm">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 25%, #5B21B6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #7C3AED 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />

            {/* Center glow */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(91,33,182,0.15) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full bg-violet/20 animate-ping" />
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-violet flex items-center justify-center shadow-[0_0_40px_rgba(91,33,182,0.3)] group-hover:shadow-[0_0_60px_rgba(91,33,182,0.5)] transition-shadow duration-500">
                  <Play
                    size={36}
                    className="text-white ml-1"
                    fill="white"
                  />
                </div>
              </div>
            </div>

            {/* Corner labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-white/80 border border-violet/20 text-xs text-violet font-medium">
              Démonstration Avatar IA
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-md bg-white/80 border border-violet/20 text-xs text-gris">
              2:45
            </div>
          </div>
        </motion.div>

        {/* Verified badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-16"
        >
          <CheckCircle size={18} className="text-violet" />
          <span className="text-sm text-gris">
            <span className="text-violet font-semibold">
              Verified by ABS Corp&#8482;
            </span>{" "}
            &mdash; Authenticité IA Garantie
          </span>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <Counter end={50} suffix="+" label="Avatars Créés" />
          <Counter end={10} suffix="+" label="Langues Disponibles" />
          <Counter end={72} suffix="H" label="Délai de Production" />
        </div>
      </div>
    </section>
  );
}
