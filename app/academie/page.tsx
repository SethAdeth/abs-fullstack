"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Award,
  Wrench,
  Users,
  Calendar,
  Monitor,
  ChevronDown,
  Building,
  Video,
  Laptop,
  Settings,
  Star,
  Crown,
  Quote,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { ACADEMY_PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SKOOL_URL = "https://beta.komunitya.pro/about/d64f3d48-27aa-4da5-953a-8fd2169052e6";

/* ══════════════════════════════════════════════════════════════════
   ABS Academie Page
   ══════════════════════════════════════════════════════════════════ */

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Award,
  Wrench,
  Users,
};

const FORMATS = [
  {
    icon: Building,
    title: "Présentiel",
    description: "Formation en salle avec nos experts",
  },
  {
    icon: Video,
    title: "Distanciel",
    description: "Formation en ligne interactive en direct",
  },
  {
    icon: Laptop,
    title: "Hybride",
    description: "Combinaison présentiel et distanciel",
  },
  {
    icon: Settings,
    title: "Sur-mesure",
    description: "Programme adapté à votre entreprise",
  },
];

const CERTIFICATIONS = [
  {
    icon: Star,
    title: "Certifié Prompt Engineer ABS",
    level: "Niveau 1",
    description:
      "Maîtrisez les fondamentaux et techniques avancées du Prompt Engineering pour la création de contenu IA.",
  },
  {
    icon: Award,
    title: "Certifié Branding IA ABS",
    level: "Niveau 2",
    description:
      "Expertise en construction de marque personnelle augmentée par l'intelligence artificielle.",
  },
  {
    icon: Crown,
    title: "Expert Digital Human ABS",
    level: "Niveau 3",
    description:
      "Certification complète couvrant l'ensemble de l'écosystème Digital Human Branding.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "La formation en Prompt Engineering d'ABS Académie a complètement transformé ma façon de travailler. Je produis maintenant du contenu 10x plus vite avec une qualité supérieure.",
    author: "Amadou Diallo",
    role: "Directeur Marketing, Dakar",
    rating: 5,
    avatar: "/images/testimonials/amadou-diallo.jpg",
  },
  {
    quote:
      "Grâce à la certification Branding IA, j'ai pu repositionner ma marque personnelle et tripler mon audience en 3 mois. Un investissement inestimable.",
    author: "Fatima Ouedraogo",
    role: "Coach Business, Ouagadougou",
    rating: 5,
    avatar: "/images/testimonials/fatima-ouedraogo.jpg",
  },
  {
    quote:
      "L'équipe pédagogique est exceptionnelle. Chaque module est concret, actionnable et directement applicable à mon business. Je recommande à 100%.",
    author: "Jean-Paul Mensah",
    role: "CEO Tech, Lomé",
    rating: 5,
    avatar: "/images/testimonials/jean-paul-mensah.jpg",
  },
];

/* ── Expandable Program Card ── */
function ProgramCard({
  program,
  index,
}: {
  program: (typeof ACADEMY_PROGRAMS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[program.icon] || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-[#5B21B6]/20 p-6 md:p-8 hover:border-[#5B21B6]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,33,182,0.08)] group shadow-sm"
    >
      {/* Icon */}
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B21B6]/20 to-[#5B21B6]/5 text-[#5B21B6] group-hover:from-[#5B21B6]/30 group-hover:to-[#5B21B6]/10 transition-all duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-bold text-[#1F2937] mb-3"
        style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
      >
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-[#6B7280] leading-relaxed mb-6">
        {program.description}
      </p>

      {/* Duration & Format Badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3FF] border border-[#5B21B6]/20 text-sm text-[#6B7280]">
          <Calendar size={14} className="text-[#5B21B6]" />
          {program.duration}
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3FF] border border-[#5B21B6]/20 text-sm text-[#6B7280]">
          <Monitor size={14} className="text-[#5B21B6]" />
          {program.format}
        </span>
      </div>

      {/* Expandable Modules */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-[#5B21B6] font-medium text-sm hover:text-[#7C3AED] transition-colors duration-300 mb-4 cursor-pointer"
      >
        <span>
          {expanded ? "Masquer les modules" : "Voir les modules"}
        </span>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 mb-6 pl-1">
              {program.modules.map((mod, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-[#6B7280]"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#5B21B6] shrink-0" />
                  {mod}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#5B21B6] text-[#5B21B6] text-sm font-medium hover:bg-[#5B21B6] hover:text-white transition-all duration-300"
      >
        Intégrer l&apos;Academy
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}

/* ── Main Page ── */
export default function AcademiePage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5B21B6]/8 rounded-full blur-[100px]" />
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
            <span className="text-[#5B21B6]">ABS Académie</span>
          </nav>

          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5B21B6]/10 border border-[#5B21B6]/30 text-[#5B21B6] text-sm font-medium mb-6"
            >
              <GraduationCap size={16} />
              Plateforme de Formation
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-[#1F2937]"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Devenez{" "}
              <span className="text-gradient-gold">Expert en Digital Human Branding</span>{" "}
              assisité par l'IA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-3xl mb-10"
            >
              ABS Académie — La plateforme de formation de référence en Prompt
              Engineering et IA Branding en Afrique francophone.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#5B21B6] text-white font-medium hover:bg-[#4C1D95] transition-all duration-300 text-base"
              >
                Intégrer l&apos;Academy
                <ArrowRight size={18} />
              </a>
              <Button href="/contact" variant="secondary" size="lg">
                Nous contacter
              </Button>
            </motion.div>
          </div>

          {/* Decorative Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#5B21B6]/10"
          >
            {[
              { value: "500+", label: "Apprenants formés" },
              { value: "4", label: "Programmes certifiants" },
              { value: "98%", label: "Taux de satisfaction" },
              { value: "3", label: "Niveaux de certification" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#5B21B6]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#6B7280] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* ─── Programs Section ─── */}
      <section id="programmes" className="section-padding bg-[#F5F3FF]">
        <div className="container-abs">
          <SectionTitle
            title="Nos Programmes de Formation"
            subtitle="Des formations certifiantes conçues pour transformer votre approche du branding et de la création de contenu grâce à l'IA."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {ACADEMY_PROGRAMS.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Formation Formats Section ─── */}
      <section className="section-padding bg-white">
        <div className="container-abs">
          <SectionTitle
            title="Formats de Formation"
            subtitle="Choisissez le format qui s'adapte le mieux à votre emploi du temps et à vos objectifs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMATS.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-xl border border-[#5B21B6]/20 p-6 text-center hover:border-[#5B21B6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,182,0.08)] shadow-sm"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B21B6]/15 to-transparent text-[#5B21B6] group-hover:from-[#5B21B6]/25 transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold text-[#1F2937] mb-2"
                    style={{
                      fontFamily: "var(--font-sub), system-ui, sans-serif",
                    }}
                  >
                    {format.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {format.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Certifications Section ─── */}
      <section className="section-padding bg-[#F5F3FF]">
        <div className="container-abs">
          <SectionTitle
            title="Certifications ABS Corporation"
            subtitle="Validez vos compétences avec nos certifications reconnues dans l'écosystème IA et branding."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-xl border-2 border-[#5B21B6]/30 p-8 text-center hover:border-[#5B21B6] transition-all duration-500 hover:shadow-[0_0_60px_rgba(91,33,182,0.12)] shadow-sm"
                >
                  {/* Level Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] rounded-full text-white text-xs font-bold tracking-wider uppercase">
                    {cert.level}
                  </div>

                  {/* Icon Container */}
                  <div className="mx-auto mt-4 mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#5B21B6]/20 via-[#5B21B6]/10 to-transparent border border-[#5B21B6]/30 group-hover:border-[#5B21B6]/60 transition-all duration-500">
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="text-[#5B21B6]"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-[#1F2937] mb-3"
                    style={{
                      fontFamily: "var(--font-sub), system-ui, sans-serif",
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Decorative Shimmer */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#5B21B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="section-padding bg-white">
        <div className="container-abs">
          <SectionTitle
            title="Témoignages d'Apprenants"
            subtitle="Découvrez ce que nos apprenants disent de leur expérience avec ABS Académie."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl border border-[#5B21B6]/20 p-6 md:p-8 hover:border-[#5B21B6]/40 transition-all duration-300 relative shadow-sm"
              >
                {/* Quote Icon */}
                <div className="mb-5">
                  <Quote
                    size={32}
                    className="text-[#5B21B6]/30 group-hover:text-[#5B21B6]/50 transition-colors duration-300"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-[#6B7280] italic leading-relaxed mb-6 text-sm md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#5B21B6] fill-[#5B21B6]"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t flex flex-col border-[#5B21B6]/10 pt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex items-center gap-3">
                    <p
                      className="text-[#1F2937] font-semibold text-sm"
                      style={{
                        fontFamily: "var(--font-sub), system-ui, sans-serif",
                      }}
                    >
                      {testimonial.author}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-1">
                      {testimonial.role}
                    </p>
                  </div>

                </div>
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
              Prêt pour devenir le pionnier du Digital Human Branding en Afrique?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Rejoignez la prochaine session de formation ABS Académie et
              transformez votre approche du business digital.
            </p>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#5B21B6] font-medium hover:bg-white/90 transition-all duration-300 text-base"
            >
              Intégrer l&apos;Academy
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
