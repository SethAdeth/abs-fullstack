"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Hide navbar on admin pages
  const isAdmin = pathname.startsWith("/admin");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (isAdmin) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="container-abs flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 font-heading text-xl md:text-2xl font-bold text-[#5B21B6] hover:text-[#7C3AED] transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md",
                  isActive
                    ? "text-[#5B21B6]"
                    : "text-[#1F2937] hover:text-[#5B21B6]"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#5B21B6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="px-4 py-2 text-sm font-medium text-[#1F2937] hover:text-[#5B21B6] transition-colors duration-300"
          >
            Se connecter
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-bold bg-[#5B21B6] text-white rounded-lg hover:bg-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:shadow-[#5B21B6]/20"
          >
            Diagnostic Gratuit
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 p-2 text-[#1F2937] hover:text-[#5B21B6] transition-colors duration-300"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <span
                  className="text-2xl font-bold text-[#5B21B6]"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {SITE_CONFIG.name}
                </span>
              </motion.div>

              {/* Mobile Nav Links */}
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.05 * (index + 1) }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-2xl font-medium transition-colors duration-300",
                        isActive
                          ? "text-[#5B21B6]"
                          : "text-[#1F2937] hover:text-[#5B21B6]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (NAV_LINKS.length + 1) }}
                className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs"
              >
                <Link
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1F2937] hover:text-[#5B21B6] transition-colors duration-300"
                >
                  Se connecter
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-6 py-3 text-lg font-bold bg-[#5B21B6] text-white rounded-lg hover:bg-[#7C3AED] transition-all duration-300"
                >
                  Diagnostic Gratuit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
