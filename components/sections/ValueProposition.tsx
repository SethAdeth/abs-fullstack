"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const VALUE_CARDS = [
  {
    icon: Zap,
    title: "Soyez partout sans être nulle part",
    description:
      "Votre avatar IA vous représente simultanément sur LinkedIn, YouTube, Instagram et toutes vos plateformes. Une omniprésence numérique qui multiplie votre impact sans fragmenter votre énergie.",
  },
  {
    icon: Shield,
    title: "Votre expertise, immortalisée",
    description:
      "Votre savoir-faire, votre voix, votre charisme — capturés et préservés dans un actif numérique qui travaille pour vous indéfiniment. Votre identité digitale devient un patrimoine transmissible.",
  },
  {
    icon: Clock,
    title: "Libérez-vous du contenu",
    description:
      "Plus besoin de tourner, monter, publier. Votre clone numérique produit du contenu premium en continu pendant que vous vous concentrez sur ce qui compte : la stratégie et la croissance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#FFFFFF]">
      <div className="container-abs">
        <SectionTitle
          title="Notre Promesse"
          subtitle="Trois piliers fondamentaux qui redéfinissent votre présence numérique."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={cn(
                  "bg-[#FFFFFF] border border-[#5B21B6]/20 rounded-xl p-8",
                  "hover:border-[#5B21B6] hover:shadow-[0_0_30px_rgba(91,33,182,0.1)]",
                  "transition-all duration-300 group"
                )}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg bg-[#5B21B6]/10 text-[#5B21B6] group-hover:bg-[#5B21B6]/20 transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl font-semibold text-[#1F2937] mb-3"
                  style={{
                    fontFamily: "var(--font-sub), system-ui, sans-serif",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
