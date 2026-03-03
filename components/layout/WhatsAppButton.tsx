"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Hide on /contact page
  if (pathname === "/contact") {
    return null;
  }

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        {/* Icon */}
        <MessageCircle size={26} className="text-white relative z-10" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-white text-[#1F2937] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-lg border border-[#E5E7EB]">
          Contactez-nous sur WhatsApp
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-[#E5E7EB]" />
        </span>
      </a>
    </motion.div>
  );
}
