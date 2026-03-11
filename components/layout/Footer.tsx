"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SERVICES } from "@/lib/constants";

const SERVICE_LINKS = SERVICES.map((service) => ({
  label: service.title,
  href: `/services#${service.id}`,
}));

const LEGAL_LINKS = [
  { label: "Mentions l\u00e9gales", href: "/legal/mentions-legales" },
  { label: "Confidentialit\u00e9", href: "/legal/confidentialite" },
  { label: "CGV", href: "/legal/cgv" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Charte Souverainet\u00e9", href: "/legal/charte-souverainete" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: "Twitter" },
  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: "Instagram" },
  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: "YouTube" },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on admin pages
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#4C1D95] text-white">
      {/* Main Footer */}
      <div className="container-abs section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  {SITE_CONFIG.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Adresse
                </span>
                <span className="text-white/60 text-sm">
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-abs py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <p className="text-white/40 text-xs">
                &copy; 2025 {SITE_CONFIG.name} &mdash; {SITE_CONFIG.fullName}
              </p>
              <Link
                href="/admin"
                className="text-white/20 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Admin
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-xs transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
