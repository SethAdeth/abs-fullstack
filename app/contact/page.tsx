"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MessageCircle,
  Mail,
  CalendarDays,
  Clock,
  Lock,
  Shield,
  Quote,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */
interface FormData {
  prenom: string;
  nom: string;
  titre: string;
  entreprise: string;
  email: string;
  whatsapp: string;
  pays: string;
  ville: string;
  secteur: string;
  services: string[];
  objectif: string;
  message: string;
  confidentialite: boolean;
}

const INITIAL_FORM: FormData = {
  prenom: "",
  nom: "",
  titre: "",
  entreprise: "",
  email: "",
  whatsapp: "",
  pays: "",
  ville: "",
  secteur: "",
  services: [],
  objectif: "",
  message: "",
  confidentialite: false,
};

/* ─────────────────────────────────────────────
   Options
   ───────────────────────────────────────────── */
const SECTEURS = [
  "Technologies",
  "Finance",
  "Santé",
  "Éducation",
  "Gouvernement",
  "Médias",
  "Commerce",
  "Consulting",
  "Autre",
];

const SERVICES_LIST = [
  "Avatar System",
  "Branding IA 360°",
  "Ambassadeur Immortel",
  "Clonage Vocal",
  "ABS Académie",
];

const OBJECTIFS = [
  "Visibilité",
  "Génération de leads",
  "Formation",
  "Personal Branding",
  "Autre",
];

const PAYS = [
  "Togo",
  "Bénin",
  "Côte d'Ivoire",
  "Sénégal",
  "Cameroun",
  "Gabon",
  "Congo",
  "Burkina Faso",
  "Mali",
  "Guinée",
  "Niger",
  "Ghana",
  "Nigeria",
  "France",
  "Belgique",
  "Canada",
  "Suisse",
  "Autre",
];

/* ─────────────────────────────────────────────
   Shared input styles
   ───────────────────────────────────────────── */
const inputClasses =
  "w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#1F2937] placeholder-[#6B7280]/50 focus:border-[#5B21B6] focus:outline-none focus:ring-1 focus:ring-[#5B21B6]/30 transition-all duration-300 text-sm";

const selectClasses =
  "w-full bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[#1F2937] focus:border-[#5B21B6] focus:outline-none focus:ring-1 focus:ring-[#5B21B6]/30 transition-all duration-300 text-sm appearance-none cursor-pointer";

const labelClasses = "block text-[#1F2937] text-sm font-medium mb-2";

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
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ── Handlers ── */
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    // Clear the field error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleServiceToggle(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.prenom.trim()) newErrors.prenom = "Requis";
    if (!form.nom.trim()) newErrors.nom = "Requis";
    if (!form.titre.trim()) newErrors.titre = "Requis";
    if (!form.entreprise.trim()) newErrors.entreprise = "Requis";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email invalide";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "Requis";
    if (!form.pays) newErrors.pays = "Requis";
    if (!form.ville.trim()) newErrors.ville = "Requis";
    if (!form.secteur) newErrors.secteur = "Requis";
    if (!form.confidentialite)
      newErrors.confidentialite = "Vous devez accepter la charte";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function buildWhatsAppMessage(): string {
    const lines = [
      `Bonjour ABS Corporation,`,
      ``,
      `Je souhaite un Diagnostic d'Autorité gratuit.`,
      ``,
      `--- Mes informations ---`,
      `Nom : ${form.prenom} ${form.nom}`,
      `Poste : ${form.titre}`,
      `Entreprise : ${form.entreprise}`,
      `Email : ${form.email}`,
      `WhatsApp : ${form.whatsapp}`,
      `Pays : ${form.pays}`,
      `Ville : ${form.ville}`,
      `Secteur : ${form.secteur}`,
    ];
    if (form.services.length > 0) {
      lines.push(`Services d'intérêt : ${form.services.join(", ")}`);
    }
    if (form.objectif) {
      lines.push(`Objectif principal : ${form.objectif}`);
    }
    if (form.message.trim()) {
      lines.push(``, `Message :`, form.message.trim());
    }
    lines.push(``, `Merci de votre retour !`);
    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/22892813232?text=${encodeURIComponent(message)}`;

    // Small delay for UX, then redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 800);
  }

  /* ── WhatsApp link ── */
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <>
      {/* SEO */}
      <title>Contact | ABS Corporation&trade;</title>
      <meta
        name="description"
        content="Contactez ABS Corporation pour votre Diagnostic d'Autorité gratuit. Demandez une démonstration de nos services de Digital Human Branding."
      />

      {/* ════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════ */}
      <section className="relative bg-[#F5F3FF] pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />
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
            <span className="text-[#5B21B6]">Contact</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Parlons de votre{" "}
              <span className="text-gradient-gold">Projet</span>
            </h1>
            <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed">
              Remplissez le formulaire ci-dessous pour recevoir votre{" "}
              <span className="text-[#5B21B6] font-medium">
                Diagnostic d&apos;Autorité gratuit
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MAIN SECTION — Two Column Layout
          ════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] section-padding pt-0">
        <div className="container-abs">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── LEFT COLUMN: FORM (3/5) ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={0}
              className="lg:col-span-3"
            >
              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E7EB] shadow-sm relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#5B21B6]/5 rounded-full blur-[60px]" />

                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center relative z-10"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#5B21B6]/10 mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#5B21B6]" />
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4"
                      style={{
                        fontFamily:
                          "var(--font-heading), Georgia, serif",
                      }}
                    >
                      Message prêt sur WhatsApp !
                    </h2>
                    <p className="text-[#6B7280] text-lg max-w-md mx-auto mb-2">
                      Merci{form.prenom ? ` ${form.prenom}` : ""} ! Votre
                      message a été préparé et ouvert dans WhatsApp.{" "}
                      <span className="text-[#5B21B6] font-semibold">
                        Appuyez sur Envoyer
                      </span>{" "}
                      pour nous contacter.
                    </p>
                    <p className="text-[#6B7280] text-sm mt-4">
                      Notre équipe vous répondra dans les 24 heures.
                    </p>
                    <div className="mt-8">
                      <Button href="/" variant="secondary">
                        Retour à l&apos;accueil
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative z-10"
                  >
                    <h2
                      className="text-xl md:text-2xl font-bold text-gradient-gold mb-8"
                      style={{
                        fontFamily:
                          "var(--font-heading), Georgia, serif",
                      }}
                    >
                      Diagnostic d&apos;Autorité Gratuit
                    </h2>

                    {/* Row: Prénom + Nom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="prenom" className={labelClasses}>
                          Prénom <span className="text-[#5B21B6]">*</span>
                        </label>
                        <input
                          id="prenom"
                          name="prenom"
                          type="text"
                          placeholder="Votre prénom"
                          value={form.prenom}
                          onChange={handleChange}
                          className={cn(
                            inputClasses,
                            errors.prenom && "border-red-500/60"
                          )}
                        />
                        {errors.prenom && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.prenom}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="nom" className={labelClasses}>
                          Nom <span className="text-[#5B21B6]">*</span>
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          placeholder="Votre nom"
                          value={form.nom}
                          onChange={handleChange}
                          className={cn(
                            inputClasses,
                            errors.nom && "border-red-500/60"
                          )}
                        />
                        {errors.nom && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.nom}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Titre / Poste */}
                    <div className="mb-4">
                      <label htmlFor="titre" className={labelClasses}>
                        Titre / Poste{" "}
                        <span className="text-[#5B21B6]">*</span>
                      </label>
                      <input
                        id="titre"
                        name="titre"
                        type="text"
                        placeholder="Ex: CEO, Directeur Marketing, Coach..."
                        value={form.titre}
                        onChange={handleChange}
                        className={cn(
                          inputClasses,
                          errors.titre && "border-red-500/60"
                        )}
                      />
                      {errors.titre && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.titre}
                        </p>
                      )}
                    </div>

                    {/* Entreprise */}
                    <div className="mb-4">
                      <label htmlFor="entreprise" className={labelClasses}>
                        Entreprise / Organisation{" "}
                        <span className="text-[#5B21B6]">*</span>
                      </label>
                      <input
                        id="entreprise"
                        name="entreprise"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        value={form.entreprise}
                        onChange={handleChange}
                        className={cn(
                          inputClasses,
                          errors.entreprise && "border-red-500/60"
                        )}
                      />
                      {errors.entreprise && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.entreprise}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className={labelClasses}>
                        Email professionnel{" "}
                        <span className="text-[#5B21B6]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={cn(
                          inputClasses,
                          errors.email && "border-red-500/60"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="mb-4">
                      <label htmlFor="whatsapp" className={labelClasses}>
                        Numéro WhatsApp (avec indicatif){" "}
                        <span className="text-[#5B21B6]">*</span>
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="+228 XX XX XX XX"
                        value={form.whatsapp}
                        onChange={handleChange}
                        className={cn(
                          inputClasses,
                          errors.whatsapp && "border-red-500/60"
                        )}
                      />
                      {errors.whatsapp && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>

                    {/* Row: Pays + Ville */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="pays" className={labelClasses}>
                          Pays <span className="text-[#5B21B6]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="pays"
                            name="pays"
                            value={form.pays}
                            onChange={handleChange}
                            className={cn(
                              selectClasses,
                              !form.pays && "text-[#6B7280]/50",
                              errors.pays && "border-red-500/60"
                            )}
                          >
                            <option value="" disabled>
                              Sélectionnez
                            </option>
                            {PAYS.map((p) => (
                              <option key={p} value={p} className="text-[#1F2937] bg-white">
                                {p}
                              </option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] rotate-90 pointer-events-none" />
                        </div>
                        {errors.pays && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.pays}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="ville" className={labelClasses}>
                          Ville <span className="text-[#5B21B6]">*</span>
                        </label>
                        <input
                          id="ville"
                          name="ville"
                          type="text"
                          placeholder="Votre ville"
                          value={form.ville}
                          onChange={handleChange}
                          className={cn(
                            inputClasses,
                            errors.ville && "border-red-500/60"
                          )}
                        />
                        {errors.ville && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.ville}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Secteur */}
                    <div className="mb-4">
                      <label htmlFor="secteur" className={labelClasses}>
                        Secteur d&apos;activité{" "}
                        <span className="text-[#5B21B6]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="secteur"
                          name="secteur"
                          value={form.secteur}
                          onChange={handleChange}
                          className={cn(
                            selectClasses,
                            !form.secteur && "text-[#6B7280]/50",
                            errors.secteur && "border-red-500/60"
                          )}
                        >
                          <option value="" disabled>
                            Sélectionnez votre secteur
                          </option>
                          {SECTEURS.map((s) => (
                            <option key={s} value={s} className="text-[#1F2937] bg-white">
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] rotate-90 pointer-events-none" />
                      </div>
                      {errors.secteur && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.secteur}
                        </p>
                      )}
                    </div>

                    {/* Services checkboxes */}
                    <div className="mb-4">
                      <span className={labelClasses}>
                        Service d&apos;intérêt
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                        {SERVICES_LIST.map((service) => {
                          const isChecked =
                            form.services.includes(service);
                          return (
                            <label
                              key={service}
                              className={cn(
                                "flex items-center gap-3 cursor-pointer group p-3 rounded-lg border transition-all duration-300",
                                isChecked
                                  ? "border-[#5B21B6]/40 bg-[#5B21B6]/5"
                                  : "border-[#E5E7EB] hover:border-[#5B21B6]/30 bg-transparent"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300",
                                  isChecked
                                    ? "bg-[#5B21B6] border-[#5B21B6]"
                                    : "border-[#5B21B6]/30 bg-transparent group-hover:border-[#5B21B6]/60"
                                )}
                                onClick={() =>
                                  handleServiceToggle(service)
                                }
                              >
                                {isChecked && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                  handleServiceToggle(service)
                                }
                                className="sr-only"
                              />
                              <span className="text-[#1F2937] text-sm">
                                {service}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Objectif */}
                    <div className="mb-4">
                      <label htmlFor="objectif" className={labelClasses}>
                        Objectif principal
                      </label>
                      <div className="relative">
                        <select
                          id="objectif"
                          name="objectif"
                          value={form.objectif}
                          onChange={handleChange}
                          className={cn(
                            selectClasses,
                            !form.objectif && "text-[#6B7280]/50"
                          )}
                        >
                          <option value="" disabled>
                            Sélectionnez votre objectif
                          </option>
                          {OBJECTIFS.map((o) => (
                            <option key={o} value={o} className="text-[#1F2937] bg-white">
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className={labelClasses}>
                        Message libre
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez votre projet, vos attentes, ou posez-nous vos questions..."
                        value={form.message}
                        onChange={handleChange}
                        className={cn(inputClasses, "resize-none")}
                      />
                    </div>

                    {/* Confidentialité */}
                    <div className="mb-8">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div
                          className={cn(
                            "flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center transition-all duration-300",
                            form.confidentialite
                              ? "bg-[#5B21B6] border-[#5B21B6]"
                              : "border-[#5B21B6]/30 bg-transparent group-hover:border-[#5B21B6]/60",
                            errors.confidentialite && "border-red-500/60"
                          )}
                        >
                          {form.confidentialite && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name="confidentialite"
                          checked={form.confidentialite}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-[#6B7280] text-sm leading-relaxed">
                          J&apos;accepte la{" "}
                          <Link
                            href="/legal/confidentialite"
                            className="text-[#5B21B6] underline underline-offset-2 hover:text-[#7C3AED] transition-colors"
                          >
                            Charte de Confidentialité
                          </Link>{" "}
                          ABS Corporation{" "}
                          <span className="text-[#5B21B6]">*</span>
                        </span>
                      </label>
                      {errors.confidentialite && (
                        <p className="text-red-400 text-xs mt-2 ml-8">
                          {errors.confidentialite}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Redirection WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5" />
                          Envoyer via WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: INFO (2/5) ── */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Card 1 — Contact Direct */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={1}
                  className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5E7EB] shadow-sm"
                >
                  <h3
                    className="text-lg font-bold text-[#1F2937] mb-5"
                    style={{
                      fontFamily:
                        "var(--font-sub), system-ui, sans-serif",
                    }}
                  >
                    Contact Direct
                  </h3>

                  {/* WhatsApp */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-all duration-300 mb-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <span className="text-[#1F2937] text-sm font-medium group-hover:text-[#25D366] transition-colors">
                      Contacter via WhatsApp
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5B21B6]/5 transition-all duration-300 mb-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#5B21B6]" />
                    </div>
                    <span className="text-[#6B7280] text-sm group-hover:text-[#5B21B6] transition-colors">
                      {SITE_CONFIG.email}
                    </span>
                  </a>

                  {/* Calendly */}
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#7C3AED]/10 border border-[#7C3AED]/20 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                      <CalendarDays className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <span className="text-[#1F2937] text-sm font-medium group-hover:text-[#7C3AED] transition-colors">
                      Réserver un créneau
                    </span>
                  </a>
                </motion.div>

                {/* Card 2 — Reassurance Badges */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={2}
                  className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5E7EB] shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#5B21B6]" />
                      </div>
                      <div>
                        <span className="text-[#1F2937] text-sm font-medium block">
                          Réponse garantie sous 24H
                        </span>
                        <span className="text-[#6B7280] text-xs">
                          Jours ouvrés
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-[#5B21B6]/10" />

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-[#5B21B6]" />
                      </div>
                      <div>
                        <span className="text-[#1F2937] text-sm font-medium block">
                          Diagnostic confidentiel
                        </span>
                        <span className="text-[#6B7280] text-xs">
                          Données protégées
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-[#5B21B6]/10" />

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#5B21B6]" />
                      </div>
                      <div>
                        <span className="text-[#1F2937] text-sm font-medium block">
                          Charte de Souveraineté Numérique
                        </span>
                        <span className="text-[#6B7280] text-xs">
                          Vous restez propriétaire
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 — Quick Testimonial */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={3}
                  className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5E7EB] shadow-sm relative overflow-hidden"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#5B21B6]/10" />
                  <div className="relative z-10">
                    <p className="text-[#1F2937] text-sm leading-relaxed italic mb-4">
                      &ldquo;Premier contact professionnel et réactif.
                      L&apos;équipe ABS m&apos;a immédiatement compris mes
                      besoins.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">
                        C
                      </div>
                      <div>
                        <p className="text-[#1F2937] text-sm font-medium">
                          CEO
                        </p>
                        <p className="text-[#6B7280] text-xs">
                          Entreprise Tech Lomé
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MAP — Lomé, Hedranawé
          ════════════════════════════════════════ */}
      <section className="bg-[#F5F3FF] pb-16">
        <div className="container-abs">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm"
          >
            {/* Location header */}
            <div className="bg-white px-6 py-4 flex items-center gap-3 border-b border-[#E5E7EB]">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#5B21B6]" />
              </div>
              <div>
                <p
                  className="text-[#1F2937] font-bold"
                  style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                >
                  Hedranawé, Lomé, Togo
                </p>
                <p className="text-[#6B7280] text-sm">
                  Siège Social — {SITE_CONFIG.fullName}
                </p>
              </div>
            </div>
            {/* Real map embed */}
            <iframe
              title="ABS Corporation - Lomé, Hedranawé"
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.1950%2C6.1650%2C1.2250%2C6.1850&layer=mapnik&marker=6.1756%2C1.2100"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
