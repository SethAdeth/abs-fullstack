"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTAFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Hide on admin pages (after all hooks)
  if (pathname.startsWith("/admin")) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#5B21B6] text-white font-bold text-base hover:bg-[#7C3AED] transition-colors duration-300 shadow-lg shadow-[#5B21B6]/30"
          >
            Obtenir mon Diagnostic Gratuit
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
