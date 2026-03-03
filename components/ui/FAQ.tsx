"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border transition-all duration-300",
        isOpen
          ? "border-[#5B21B6] shadow-[0_4px_20px_rgba(91,33,182,0.08)]"
          : "border-[#E5E7EB] hover:border-[#5B21B6]/30"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-base md:text-lg font-medium transition-colors duration-300",
            isOpen ? "text-[#5B21B6]" : "text-[#1F2937]"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
            isOpen
              ? "bg-[#5B21B6] text-white"
              : "bg-[#5B21B6]/10 text-[#5B21B6]"
          )}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <div className="h-px w-full bg-[#E5E7EB] mb-4" />
              <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <FAQAccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
