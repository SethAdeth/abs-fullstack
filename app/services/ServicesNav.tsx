"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicesNavProps {
  services: { id: string; title: string }[];
}

export default function ServicesNav({ services }: ServicesNavProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(service.id);
          }
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [services]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-[72px] z-30 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#5B21B6]/10">
      <div className="container-abs">
        <nav
          className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center"
          aria-label="Service navigation"
        >
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => handleClick(service.id)}
                className={cn(
                  "relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
                  isActive
                    ? "text-white"
                    : "text-[#6B7280] hover:text-[#1F2937] hover:bg-[#1F2937]/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServicePill"
                    className="absolute inset-0 bg-[#5B21B6] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{service.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
