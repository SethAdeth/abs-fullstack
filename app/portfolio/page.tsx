"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
  Filter,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { CASE_STUDIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ══════════════════════════════════════════════════════════════════
   Portfolio / Case Studies Page
   ══════════════════════════════════════════════════════════════════ */

const SECTOR_FILTERS = [
  "Tous",
  "Entreprise",
  "Institution",
  "Coach/Consultant",
  "Infopreneur",
];

const SERVICE_FILTERS = [
  "Tous",
  "Avatar System",
  "Branding 360\u00b0",
  "Ambassadeur Immortel",
  "Clonage Vocal",
];

const METRIC_ICONS: Record<string, React.ElementType> = {
  engagement: TrendingUp,
  leads: Users,
  time: Clock,
};

const METRIC_LABELS: Record<string, string> = {
  engagement: "Engagement",
  leads: "Résultats",
  time: "Temps économisé",
};

const AVATAR_STYLES = [
  { label: "Avatar Professionnel", style: "Costume" },
  { label: "Avatar Professionnel", style: "Pagne" },
  { label: "Avatar Professionnel", style: "Boubou" },
  { label: "Avatar Professionnel", style: "Tenue Traditionnelle" },
  { label: "Avatar Professionnel", style: "Tenue Formelle" },
  { label: "Avatar Professionnel", style: "Style Decontracte" },
  { label: "Avatar Professionnel", style: "Tenue Diplomatique" },
  { label: "Avatar Professionnel", style: "Style Creatif" },
];

/* ── Case Study Card ── */
function CaseStudyCardCustom({
  study,
  index,
}: {
  study: (typeof CASE_STUDIES)[0];
  index: number;
}) {
  const results = study.results as Record<string, string>;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-xl border border-[#5B21B6]/20 overflow-hidden hover:border-[#5B21B6]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,33,182,0.08)] flex flex-col shadow-sm"
    >
      {/* Image Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
            <Sparkles size={32} className="text-[#5B21B6]/40" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#5B21B6]/10 rounded-full blur-[30px] translate-y-1/2 -translate-x-1/2" />

        {/* Sector Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#5B21B6] text-white rounded-full">
          {study.sector}
        </span>

        {/* Service Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-white/80 text-[#5B21B6] rounded-full border border-[#5B21B6]/30">
          {study.service}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold text-[#1F2937] mb-2"
          style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
        >
          {study.title}
        </h3>

        {/* Client Profile */}
        <p className="text-sm text-[#5B21B6]/80 mb-3">{study.client}</p>

        {/* Challenge */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-wider text-[#5B21B6] font-semibold mb-1">
            Le Défi
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
            {study.challenge}
          </p>
        </div>

        {/* Results Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-y border-[#5B21B6]/10">
          {Object.entries(results).map(([key, value]) => {
            const Icon = METRIC_ICONS[key] || TrendingUp;
            return (
              <div key={key} className="text-center">
                <Icon
                  size={14}
                  className="mx-auto mb-1 text-[#5B21B6]/60"
                />
                <p className="text-lg font-bold text-[#5B21B6]">{value}</p>
                <p className="text-[10px] text-[#6B7280] mt-0.5">
                  {METRIC_LABELS[key] || key}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Snippet */}
        <div className="mb-5 flex-grow">
          <div className="flex gap-2 items-start">
            <Quote
              size={14}
              className="text-[#5B21B6]/40 shrink-0 mt-0.5"
            />
            <p className="text-xs text-[#6B7280] italic leading-relaxed line-clamp-3">
              {study.testimonial}
            </p>
          </div>
        </div>

        {/* CTA Link */}
        <Link
          href={`/portfolio/${study.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5B21B6] hover:text-[#7C3AED] transition-colors duration-300 group/link mt-auto"
        >
          Lire l&apos;étude complète
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Filter Pill Button ── */
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
        active
          ? "bg-[#5B21B6] text-white shadow-[0_0_20px_rgba(91,33,182,0.3)]"
          : "bg-transparent border border-[#5B21B6]/20 text-[#6B7280] hover:border-[#5B21B6]/50 hover:text-[#1F2937]"
      )}
    >
      {label}
    </button>
  );
}

/* ── Main Page ── */
export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState("Tous");
  const [activeService, setActiveService] = useState("Tous");

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const sectorMatch =
      activeSector === "Tous" || study.sector === activeSector;
    const serviceMatch =
      activeService === "Tous" || study.service === activeService;
    return sectorMatch && serviceMatch;
  });

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#5B21B6]/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#7C3AED]/8 rounded-full blur-[100px]" />
        </div>

        <div className="container-abs relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
            <Link
              href="/"
              className="hover:text-[#5B21B6] transition-colors duration-300"
            >
              Accueil
            </Link>
            <span className="text-[#5B21B6]">/</span>
            <span className="text-[#5B21B6]">Portfolio</span>
          </nav>

          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5B21B6]/10 border border-[#5B21B6]/30 text-[#5B21B6] text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Études de cas
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-[#1F2937]"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Nos Résultats Parlent{" "}
              <span className="text-gradient-gold">d&apos;Eux-Memes</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-3xl"
            >
              Découvrez comment nous avons transformé la présence numérique de
              leaders africains.
            </motion.p>
          </div>

          {/* Hero Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#5B21B6]/10"
          >
            {[
              { value: "50+", label: "Projets réalisés" },
              { value: "+340%", label: "Engagement moyen" },
              { value: "15+", label: "Pays touchés" },
              { value: "100%", label: "Clients satisfaits" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#5B21B6]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#6B7280] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Section ─── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md py-4 md:py-5 border-b border-[#5B21B6]/20">
        <div className="container-abs">
          <div className="space-y-3">
            {/* Sector Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs uppercase tracking-wider text-[#5B21B6] font-semibold flex items-center gap-1.5 mr-1">
                <Filter size={12} />
                Secteur
              </span>
              <div className="flex flex-wrap gap-2">
                {SECTOR_FILTERS.map((filter) => (
                  <FilterPill
                    key={filter}
                    label={filter}
                    active={activeSector === filter}
                    onClick={() => setActiveSector(filter)}
                  />
                ))}
              </div>
            </div>

            {/* Service Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs uppercase tracking-wider text-[#5B21B6] font-semibold flex items-center gap-1.5 mr-1">
                <Filter size={12} />
                Service
              </span>
              <div className="flex flex-wrap gap-2">
                {SERVICE_FILTERS.map((filter) => (
                  <FilterPill
                    key={filter}
                    label={filter}
                    active={activeService === filter}
                    onClick={() => setActiveService(filter)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Case Studies Grid ─── */}
      <section className="section-padding bg-white">
        <div className="container-abs">
          {/* Results count */}
          <div className="mb-8 text-sm text-[#6B7280]">
            <span className="text-[#5B21B6] font-semibold">
              {filteredStudies.length}
            </span>{" "}
            {filteredStudies.length === 1 ? "étude trouvée" : "études trouvées"}
          </div>

          <AnimatePresence mode="wait">
            {filteredStudies.length > 0 ? (
              <motion.div
                key={`${activeSector}-${activeService}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
              >
                {filteredStudies.map((study, index) => (
                  <CaseStudyCardCustom
                    key={study.id}
                    study={study}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F5F3FF] flex items-center justify-center border border-[#5B21B6]/20">
                  <Filter size={32} className="text-[#5B21B6]/40" />
                </div>
                <h3
                  className="text-xl font-semibold text-[#1F2937] mb-2"
                  style={{
                    fontFamily: "var(--font-sub), system-ui, sans-serif",
                  }}
                >
                  Aucune étude de cas trouvée
                </h3>
                <p className="text-[#6B7280] text-sm mb-6">
                  Essayez de modifier vos filtres pour voir plus de résultats.
                </p>
                <button
                  onClick={() => {
                    setActiveSector("Tous");
                    setActiveService("Tous");
                  }}
                  className="text-[#5B21B6] text-sm font-medium hover:text-[#7C3AED] transition-colors cursor-pointer"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Avatar Gallery Section ─── */}
      <section className="section-padding bg-[#F5F3FF]">
        <div className="container-abs">
          <SectionTitle
            title="Galerie d'Avatars"
            subtitle="Découvrez la diversité et le réalisme de nos avatars IA professionnels, conçus pour refléter l'identité unique de chaque leader."
          />

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {AVATAR_STYLES.map((avatar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group relative rounded-xl aspect-square bg-white overflow-hidden border border-transparent hover:border-[#5B21B6] transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_rgba(91,33,182,0.12)] shadow-sm"
              >
                {/* Gradient Overlay Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]" />

                {/* Decorative Abstract Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className={cn(
                      "absolute w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500",
                      index % 3 === 0
                        ? "bg-[#5B21B6] top-1/4 left-1/4"
                        : index % 3 === 1
                        ? "bg-[#7C3AED] top-1/3 right-1/4"
                        : "bg-[#002366] bottom-1/4 left-1/3"
                    )}
                  />
                  {/* Silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#5B21B6]/10 group-hover:bg-[#5B21B6]/20 transition-all duration-500 flex items-center justify-center">
                      <Users
                        size={24}
                        className="text-[#5B21B6]/30 group-hover:text-[#5B21B6]/60 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Scale Effect on Hover */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />

                {/* Bottom Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white/80 to-transparent">
                  <p
                    className="text-sm font-semibold text-[#1F2937]"
                    style={{
                      fontFamily: "var(--font-sub), system-ui, sans-serif",
                    }}
                  >
                    {avatar.label}
                  </p>
                  <p className="text-xs text-[#5B21B6]">{avatar.style}</p>
                </div>

                {/* Violet Border Glow on Hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#5B21B6]/0 group-hover:ring-[#5B21B6]/50 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Violet Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6] via-[#6D28D9] to-[#4C1D95]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        <div className="container-abs relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles
              size={40}
              className="mx-auto mb-6 text-white/70"
            />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Obtenir des résultats similaires
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Rejoignez les leaders africains qui ont déjà transformé leur
              présence numérique avec ABS Corporation.
            </p>
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Demander un Devis
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
