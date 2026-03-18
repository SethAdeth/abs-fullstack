"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.5,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("fr-FR")
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Counter({
  end,
  suffix = "",
  label,
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={cn("text-center", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B21B6] tabular-nums">
        <AnimatedNumber value={isInView ? end : 0} />
        {suffix && (
          <span className="text-[#D4AF37]">{suffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm md:text-base text-[#6B7280] font-medium">
        {label}
      </p>
    </motion.div>
  );
}
