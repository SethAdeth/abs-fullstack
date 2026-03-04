"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} as const;

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFFFFF] flex items-center overflow-hidden">
      {/* Particles background effect */}
      <div className="particles-bg" aria-hidden="true" />

      {/* Extra ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #5B21B6 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-abs relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32 lg:py-0">
          {/* ── Left Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={childVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B21B6]/40 bg-[#5B21B6]/5 text-sm text-[#5B21B6] font-medium tracking-wide mb-8">
                <Sparkles size={14} className="text-[#5B21B6]" />
                Pioneer du Digital Human Branding en Afrique
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#1F2937] mb-6"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Votre{" "}
              <span className="text-gradient-gold">Clone Numérique</span>{" "}
              Travaille.
              <br />
              Vous Encaissez.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl mb-10"
            >
              <strong className="text-[#1F2937]">ABS Corporation&#8482;</strong>{" "}
              &mdash; Le premier cabinet africain de Digital Human Branding.
              Transformez votre expertise en actif numérique immortel grâce à
              l&apos;IA.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg">
                Obtenir mon Diagnostic Gratuit
              </Button>
              <Button href="#demo" className=" justify-center items-center flex " variant="secondary" size="lg">
                Demander une Démonstration
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" as const }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-gold"
                style={{
                  background:
                    "radial-gradient(circle, rgba(91,33,182,0.12) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Main circle */}
              <div className="absolute inset-8 rounded-full border-2 border-[#5B21B6]/30 bg-gradient-to-br from-[#F5F3FF] to-[#FFFFFF] overflow-hidden">
                {/* Scan lines */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(91,33,182,0.08) 2px, rgba(91,33,182,0.08) 4px)",
                  }}
                  aria-hidden="true"
                />

                {/* Silhouette placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <Image
                    src="/images/Emmanuel-amela.jpeg"
                    alt="Hero Avatar"
                    width={480}
                    height={480}
                    className="w-48 h-48 opacity-20"
                  /> */}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48 opacity-20"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Head */}
                    <circle cx="100" cy="65" r="35" fill="#5B21B6" />
                    {/* Body */}
                    <ellipse cx="100" cy="160" rx="55" ry="45" fill="#5B21B6" />
                  </svg>
                </div>

                {/* Animated scan bar */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B21B6]/60 to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-[#5B21B6] shadow-[0_0_12px_rgba(91,33,182,0.6)]"
                style={{ top: "50%", left: "50%" }}
                animate={{
                  x: [0, 200, 0, -200, 0],
                  y: [-200, 0, 200, 0, -200],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                aria-hidden="true"
              />

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-12 -left-4 bg-[#FFFFFF] border border-[#5B21B6]/30 rounded-xl px-4 py-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              >
                <p
                  className="text-xs font-semibold text-[#5B21B6]"
                  style={{
                    fontFamily: "var(--font-sub), system-ui, sans-serif",
                  }}
                >
                  Avatar System&#8482;
                </p>
                <p className="text-[10px] text-[#6B7280]">
                  Prêt en 72H
                </p>
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                className="absolute top-16 -right-2 bg-[#FFFFFF] border border-[#7C3AED]/30 rounded-xl px-4 py-3 shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              >
                <p
                  className="text-xs font-semibold text-[#7C3AED]"
                  style={{
                    fontFamily: "var(--font-sub), system-ui, sans-serif",
                  }}
                >
                  +10 Langues
                </p>
                <p className="text-[10px] text-[#6B7280]">
                  Clonage Vocal IA
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
