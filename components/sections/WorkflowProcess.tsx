"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { WORKFLOW_STEPS } from "@/lib/constants";

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function WorkflowProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-blanc-alt">
      <div className="container-abs">
        <SectionTitle
          title="De votre Expertise à votre Avatar en 72H"
          subtitle="Un processus rigoureux en 7 étapes pour garantir un résultat premium."
        />

        <div ref={ref}>
          {/* ── Desktop: Horizontal Timeline ── */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-violet/20 via-gold to-violet/20"
                aria-hidden="true"
              />

              <div className="grid grid-cols-7 gap-4 relative">
                {WORKFLOW_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    custom={index}
                    variants={stepVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Numbered circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-violet text-white flex items-center justify-center text-lg font-bold shadow-[0_0_20px_rgba(91,33,182,0.3)] mb-5 ring-2 ring-gold/30 ring-offset-2 ring-offset-blanc-alt">
                      {step.step}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-bold text-noir mb-2"
                      style={{
                        fontFamily: "var(--font-sub), system-ui, sans-serif",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gris leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile/Tablet: Vertical Timeline ── */}
          <div className="lg:hidden">
            <div className="relative pl-10 md:pl-14">
              {/* Vertical connecting line */}
              <div
                className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet via-gold to-violet/20"
                aria-hidden="true"
              />

              <div className="space-y-10">
                {WORKFLOW_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    custom={index}
                    variants={stepVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative"
                  >
                    {/* Numbered circle */}
                    <div className="absolute -left-10 md:-left-14 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-violet text-white flex items-center justify-center text-sm md:text-base font-bold shadow-[0_0_16px_rgba(91,33,182,0.3)] ring-2 ring-gold/30 ring-offset-2 ring-offset-blanc-alt">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3
                        className="text-base md:text-lg font-bold text-noir mb-1"
                        style={{
                          fontFamily:
                            "var(--font-sub), system-ui, sans-serif",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-gris leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
