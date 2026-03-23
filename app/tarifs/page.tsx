"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Clock,
  Crown,
  ChevronRight,
  Sparkles,
  Star,
  Zap,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQ from "@/components/ui/FAQ";
import { PRICING_PLANS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Metadata (exported from a client component
   via a head-level <title> fallback pattern)
   ───────────────────────────────────────────── */
// Note: metadata export is not supported in 'use client' components.
// For SEO, consider adding a separate metadata export in a layout or
// using the <title> tag approach below.

/* ─────────────────────────────────────────────
   Comparison table data
   ───────────────────────────────────────────── */
const COMPARISON_ROWS: {
  label: string;
  bronze: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
}[] = [
  {
    label: "Nombre de vidéos",
    bronze: "8/mois",
    silver: "12/mois",
    gold: "20/jour",
  },
  {
    label: "Langues incluses",
    bronze: "1",
    silver: "2",
    gold: "Illimitées",
  },
  { label: "Scripts IA", bronze: true, silver: true, gold: true },
  {
    label: "Réponses commentaires IA",
    bronze: false,
    silver: true,
    gold: true,
  },
  { label: "Multi-plateforme", bronze: false, silver: false, gold: true },
  { label: "Ghostwriting VIP", bronze: false, silver: false, gold: true },
  {
    label: "Account Manager dédié",
    bronze: false,
    silver: false,
    gold: true,
  },
  { label: "Rapport mensuel", bronze: false, silver: true, gold: true },
  { label: "Groupe WhatsApp VIP", bronze: false, silver: true, gold: true },
  { label: "Support prioritaire", bronze: false, silver: false, gold: true },
];

const FAQ_PRICING = [
  {
    question: "Y a-t-il un engagement minimum ?",
    answer:
      "Non, nos abonnements sont sans engagement. Vous pouvez résilier à tout moment avec un préavis de 30 jours.",
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    answer:
      "Absolument ! Vous pouvez upgrader ou downgrader votre formule à tout moment. Le changement prend effet au prochain cycle de facturation.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les paiements via Mobile Money (Orange Money, Wave, MTN MoMo), virement bancaire, FedaPay et PayDunya.",
  },
  {
    question: "Quelle est la garantie de qualité ?",
    answer:
      "Chaque production passe par notre processus de Contrôle Qualité en 7 étapes. Si le résultat ne vous satisfait pas, nous le refaisons gratuitement.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "Votre satisfaction est notre priorité. Nous offrons une reprise gratuite sur chaque livraison. Si après la reprise vous n'êtes toujours pas satisfait, nous vous remboursons intégralement.",
  },
];

/* ─────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────── */
const ABS_WHATSAPP = "22879199394";

function formatPrice(price: number): string {
  return price.toLocaleString("fr-FR");
}

function getWhatsAppUrl(planName: string, price: string): string {
  const message = `Bonjour ABS Corporation,\n\nJe suis intéressé(e) par la formule *${planName}* à *${price}*.\n\nJ'aimerais en savoir plus et démarrer. Merci !`;
  return `https://wa.me/${ABS_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function CellIcon({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return (
      <span className="text-[#1F2937] text-sm font-medium">{value}</span>
    );
  }
  return value ? (
    <Check className="w-5 h-5 text-[#5B21B6] mx-auto" />
  ) : (
    <X className="w-5 h-5 text-[#6B7280]/40 mx-auto" />
  );
}

/* ─────────────────────────────────────────────
   Animation variants
   ───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ─────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────── */
export default function TarifsPage() {
  const { empreinte, subscriptions } = PRICING_PLANS;

  return (
    <>
      {/* SEO Title fallback */}
      <title>Tarifs | ABS Corporation&trade;</title>
      <meta
        name="description"
        content="Découvrez nos formules de Digital Human Branding : Pack Empreinte et abonnements Bronze, Silver, Gold. Tarification transparente."
      />

      {/* ════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════ */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#5B21B6]/5 blur-[120px]" />
        </div>

        <div className="container-abs relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
            <Link
              href="/"
              className="hover:text-[#5B21B6] transition-colors"
            >
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#5B21B6]">Tarifs</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Investissez dans votre{" "}
              <span className="text-gradient-gold">Omniprésence</span>
            </h1>

            {/* Exclusivity notice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 border border-[#5B21B6] rounded-full px-6 py-3 bg-[#5B21B6]/5"
            >
              <Sparkles className="w-5 h-5 text-[#5B21B6] flex-shrink-0" />
              <span className="text-[#5B21B6] text-sm md:text-base font-medium">
                Tarification Premium — Nous sélectionnons les leaders que nous
                accompagnons
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 1 — Pack EMPREINTE
          ════════════════════════════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Pack EMPREINTE — Votre Jumeau Numérique"
            subtitle={empreinte.description}
            centered
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className="bg-white border-2 border-[#5B21B6] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm"
          >
            {/* Decorative corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#5B21B6]/10 rounded-full blur-[60px]" />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
              {/* Left — Features */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-2"
                  style={{
                    fontFamily: "var(--font-sub), system-ui, sans-serif",
                  }}
                >
                  {empreinte.name}
                </h3>
                <p className="text-[#6B7280] mb-8">{empreinte.subtitle}</p>

                <ul className="space-y-4">
                  {empreinte.includes.map((item, i) => (
                    <motion.li
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-[#5B21B6]" />
                      </span>
                      <span className="text-[#1F2937] text-base md:text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right — Pricing */}
              <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
                {/* Strikethrough price */}
                <p className="text-[#6B7280] text-xl line-through mb-2">
                  {formatPrice(empreinte.price)} {empreinte.currency}
                </p>

                {/* Promo price */}
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B21B6] mb-2">
                  {formatPrice(empreinte.promoPrice)}{" "}
                  <span className="text-2xl md:text-3xl">
                    {empreinte.currency}
                  </span>
                </p>

                {/* Launch badge */}
                <span className="inline-flex items-center gap-2 bg-[#5B21B6]/10 text-[#5B21B6] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#5B21B6]/30 mb-4">
                  <Zap className="w-4 h-4" />
                  Offre de lancement
                </span>

                {/* Delivery */}
                <div className="flex items-center gap-2 text-[#6B7280] mb-8">
                  <Clock className="w-5 h-5 text-[#5B21B6]" />
                  <span>Livraison en 72 heures</span>
                </div>

                <a
                  href={getWhatsAppUrl("Pack EMPREINTE", `${formatPrice(empreinte.promoPrice)} FCFA`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#1da851] transition-all duration-300 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Commencer maintenant
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Abonnements Mensuels
          ════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Abonnements Mensuels"
            subtitle="Choisissez la formule qui correspond à votre ambition"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {subscriptions.map((plan, index) => {
              const isPopular = plan.id === "silver";
              const isGold = plan.id === "gold";

              return (
                <motion.div
                  key={plan.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                  custom={index}
                  className={cn(
                    "relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm",
                    isPopular && "border-2 border-[#5B21B6] lg:scale-105 lg:z-10 shadow-[0_0_40px_rgba(91,33,182,0.15)]",
                    isGold && "border border-[#5B21B6]/50",
                    !isPopular && !isGold && "border border-[#5B21B6]/20"
                  )}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-0 right-0 bg-[#5B21B6] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                      <Star className="w-3 h-3 inline mr-1 -mt-0.5" />
                      Populaire
                    </div>
                  )}

                  {/* Top band */}
                  <div
                    className={cn(
                      "p-6 pb-4 border-b",
                      isPopular
                        ? "border-[#5B21B6]/30 bg-[#5B21B6]/5"
                        : "border-[#5B21B6]/10"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {isGold && (
                        <Crown className="w-5 h-5 text-[#5B21B6]" />
                      )}
                      <h3
                        className={cn(
                          "text-xl font-bold",
                          isGold ? "text-[#5B21B6]" : "text-[#1F2937]"
                        )}
                        style={{
                          fontFamily:
                            "var(--font-sub), system-ui, sans-serif",
                        }}
                      >
                        {plan.name}
                      </h3>
                    </div>
                    <p className="text-[#6B7280] text-sm">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="px-6 pt-6 pb-4">
                    {plan.promoPrice ? (
                      <>
                        {/* Old price - large, strikethrough */}
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className="text-3xl md:text-4xl font-bold text-[#6B7280] line-through">
                            {formatPrice(plan.price)}
                          </span>
                          <span className="text-[#6B7280] text-sm ml-1 line-through">
                            FCFA/mois
                          </span>
                        </div>
                        {/* Promo price - smaller with yellow badge */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl md:text-3xl font-bold text-[#5B21B6]">
                              {formatPrice(plan.promoPrice)}
                            </span>
                            <span className="text-[#6B7280] text-xs ml-1">
                              FCFA/mois
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                            <Zap className="w-3 h-3" />
                            Offre Spéciale
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-bold text-[#5B21B6]">
                          {formatPrice(plan.price)}
                        </span>
                        <span className="text-[#6B7280] text-sm ml-1">
                          FCFA/mois
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="px-6 pb-6 flex-1">
                    <ul className="space-y-3">
                      {plan.featureList.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#5B21B6] flex-shrink-0 mt-0.5" />
                          <span className="text-[#1F2937] text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {/* Show what's NOT included for Bronze / Silver */}
                      {plan.id === "bronze" && (
                        <>
                          <li className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280] text-sm">
                              Réponses commentaires IA
                            </span>
                          </li>
                          <li className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280] text-sm">
                              Multi-plateforme
                            </span>
                          </li>
                          <li className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280] text-sm">
                              Account Manager dédié
                            </span>
                          </li>
                        </>
                      )}
                      {plan.id === "silver" && (
                        <>
                          <li className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280] text-sm">
                              Multi-plateforme
                            </span>
                          </li>
                          <li className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280] text-sm">
                              Ghostwriting VIP
                            </span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <a
                      href={getWhatsAppUrl(
                        plan.name,
                        `${formatPrice(plan.promoPrice || plan.price)} FCFA/mois`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-300 text-base",
                        isPopular
                          ? "bg-[#25D366] text-white hover:bg-[#1da851]"
                          : "border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                      )}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {isGold ? "Devenir Gold" : "Choisir cette formule"}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Comparateur de Formules
          ════════════════════════════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Comparateur de Formules"
            subtitle="Comparez nos offres en un coup d'oeil"
            centered
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="overflow-x-auto"
          >
            <div className="min-w-[640px]">
              <div className="bg-white rounded-xl overflow-hidden border border-[#5B21B6]/20 shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-4 bg-[#F5F3FF]">
                  <div className="p-4 md:p-5 text-[#6B7280] text-sm font-medium">
                    Fonctionnalité
                  </div>
                  <div className="p-4 md:p-5 text-center">
                    <span className="text-[#1F2937] font-bold text-sm md:text-base">
                      BRONZE
                    </span>
                  </div>
                  <div className="p-4 md:p-5 text-center border-x border-[#5B21B6]/20">
                    <span className="text-[#5B21B6] font-bold text-sm md:text-base">
                      SILVER
                    </span>
                    <span className="block text-[10px] text-[#5B21B6]/70 mt-0.5">
                      Populaire
                    </span>
                  </div>
                  <div className="p-4 md:p-5 text-center bg-[#5B21B6]/5">
                    <span className="text-[#5B21B6] font-bold text-sm md:text-base flex items-center justify-center gap-1">
                      <Crown className="w-4 h-4" />
                      GOLD
                    </span>
                  </div>
                </div>

                {/* Table Body */}
                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className={cn(
                      "grid grid-cols-4 border-t border-[#5B21B6]/10",
                      i % 2 === 0 ? "bg-white" : "bg-white/60"
                    )}
                  >
                    <div className="p-4 md:p-5 text-[#1F2937] text-sm flex items-center">
                      {row.label}
                    </div>
                    <div className="p-4 md:p-5 flex items-center justify-center">
                      <CellIcon value={row.bronze} />
                    </div>
                    <div className="p-4 md:p-5 flex items-center justify-center border-x border-[#5B21B6]/10">
                      <CellIcon value={row.silver} />
                    </div>
                    <div className="p-4 md:p-5 flex items-center justify-center bg-[#5B21B6]/5">
                      <CellIcon value={row.gold} />
                    </div>
                  </div>
                ))}

                {/* Price row */}
                <div className="grid grid-cols-4 border-t-2 border-[#5B21B6]/20 bg-[#F5F3FF]">
                  <div className="p-4 md:p-5 text-[#5B21B6] text-sm font-bold flex items-center">
                    Prix mensuel
                  </div>
                  {subscriptions.map((plan) => (
                    <div
                      key={plan.id}
                      className={cn(
                        "p-4 md:p-5 text-center",
                        plan.id === "gold" && "bg-[#5B21B6]/5",
                        plan.id === "silver" && "border-x border-[#5B21B6]/20"
                      )}
                    >
                      {plan.promoPrice ? (
                        <>
                          <span className="text-[#6B7280] font-bold text-sm line-through block">
                            {formatPrice(plan.price)}
                          </span>
                          <span className="text-[#5B21B6] font-bold text-lg">
                            {formatPrice(plan.promoPrice)}
                          </span>
                        </>
                      ) : (
                        <span className="text-[#5B21B6] font-bold text-lg">
                          {formatPrice(plan.price)}
                        </span>
                      )}
                      <span className="text-[#6B7280] text-xs block">
                        FCFA/mois
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — FAQ Pricing
          ════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Questions sur nos Tarifs"
            subtitle="Tout ce que vous devez savoir avant de vous lancer"
            centered
          />

          <div className="max-w-3xl mx-auto">
            <FAQ items={FAQ_PRICING} />
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 text-center"
          >
            <p className="text-[#6B7280] mb-6 text-lg">
              Une question spécifique ? Notre équipe est à votre disposition.
            </p>
            <a
              href={`https://wa.me/${ABS_WHATSAPP}?text=${encodeURIComponent("Bonjour ABS Corporation,\n\nJ'ai une question sur vos tarifs. Pouvez-vous m'aider ?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#1da851] transition-all duration-300 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Contactez-nous sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
