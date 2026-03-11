import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Check, X, ChevronRight, User, Palette, Crown, Mic, Clock, ArrowRight, Sparkles } from "lucide-react";
import ServicesNav from "./ServicesNav";

/* ═══════════════════════════════════════════════════════════════
   SERVICES PAGE — ABS Corporation™
   ═══════════════════════════════════════════════════════════════ */

export const metadata = {
  title: "Services",
  description:
    "Découvrez nos services de Digital Human Branding : Avatar System, Branding IA 360°, Ambassadeur Immortel et Clonage Vocal Multilingue.",
};

/* ── Icon mapping ── */
const iconMap: Record<string, React.ElementType> = {
  User,
  Palette,
  Crown,
  Mic,
};

/* ── CTA labels per service ── */
const ctaMap: Record<string, { label: string; href: string }> = {
  "avatar-system": { label: "Créer mon Avatar", href: "/contact" },
  "branding-ia-360": { label: "Demander un Audit Gratuit", href: "/contact" },
  "ambassadeur-immortel": { label: "Devenir Immortel", href: "/contact" },
  "clonage-vocal": { label: "Cloner ma Voix", href: "/contact" },
};

/* ── Decorative gradients per service ── */
const gradientMap: Record<string, string> = {
  "avatar-system":
    "from-[#5B21B6]/20 via-[#7C3AED]/10 to-[#FFFFFF]",
  "branding-ia-360":
    "from-[#7C3AED]/20 via-[#5B21B6]/10 to-[#F5F3FF]",
  "ambassadeur-immortel":
    "from-[#5B21B6]/30 via-[#7C3AED]/20 to-[#FFFFFF]",
  "clonage-vocal":
    "from-[#7C3AED]/20 via-[#5B21B6]/15 to-[#F5F3FF]",
};

/* ── FAQ items ── */
const SERVICE_FAQ = [
  {
    question: "Quelle est la différence entre l'Avatar System et l'Ambassadeur Immortel ?",
    answer:
      "L'Avatar System se concentre sur la création de votre clone numérique vidéo et vocal. L'Ambassadeur Immortel est notre offre premium qui inclut l'Avatar System, le Branding IA 360° complet, une stratégie de diffusion et un suivi sur 3 mois avec un Account Manager dédié.",
  },
  {
    question: "Combien de temps faut-il pour créer un avatar ?",
    answer:
      "L'Avatar System est livré en 72 heures après votre session de captation. Le Branding IA 360° nécessite environ 2 semaines. L'Ambassadeur Immortel, étant notre offre la plus complète, est déployé en 4 semaines avec un suivi de 3 mois.",
  },
  {
    question: "Dans quelles langues mon avatar peut-il s'exprimer ?",
    answer:
      "Avec le Clonage Vocal Multilingue, votre avatar peut parler dans plus de 10 langues, incluant le français, l'anglais, l'espagnol, l'arabe et plusieurs langues locales africaines (éwé, mina, fon, yoruba, etc.). Votre accent et timbre naturel sont préservés dans chaque langue.",
  },
  {
    question: "Puis-je tester un service avant de m'engager ?",
    answer:
      "Absolument. Nous proposons un audit de marque gratuit qui vous permet de découvrir notre méthodologie. Contactez-nous pour planifier votre session découverte et voir une démonstration personnalisée.",
  },
  {
    question: "Comment sont protégées mes données et mon image ?",
    answer:
      "Votre identité numérique est stockée dans notre Identité Vault sécurisé. Nous appliquons notre Charte de Souveraineté Numérique : vous restez propriétaire exclusif de votre avatar, de votre voix clonée et de tous les contenus produits. Chaque vidéo porte le watermark « Verified by ABS Corp™ ».",
  },
  {
    question: "Quel service choisir pour démarrer ?",
    answer:
      "Si vous souhaitez une présence vidéo automatisée, commencez par l'Avatar System. Pour une refonte complète de votre image, optez pour le Branding IA 360°. Si vous visez l'excellence totale avec suivi, l'Ambassadeur Immortel est votre meilleur investissement. Le Clonage Vocal est idéal en complément ou pour des besoins multilingues spécifiques.",
  },
];

/* ── Comparison table data ── */
const comparisonRows = [
  { label: "Création Avatar Vidéo", avatar: true, branding: false, ambassadeur: true, clonage: false },
  { label: "Clonage Vocal", avatar: true, branding: false, ambassadeur: true, clonage: true },
  { label: "Stratégie de Marque", avatar: false, branding: true, ambassadeur: true, clonage: false },
  { label: "Multilingue", avatar: false, branding: false, ambassadeur: true, clonage: true },
  { label: "Suivi & Gestion Contenu", avatar: false, branding: false, ambassadeur: true, clonage: false },
  { label: "Délai de livraison", avatar: "72H", branding: "2 sem.", ambassadeur: "4 sem.", clonage: "48H" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding pt-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-[#5B21B6]/5 blur-[120px]" />
          <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] rounded-full bg-[#7C3AED]/5 blur-[100px]" />
        </div>

        <div className="container-abs relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#6B7280]">
              <li>
                <Link
                  href="/"
                  className="text-[#5B21B6] hover:text-[#7C3AED] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight size={14} className="text-[#6B7280]/50" />
              </li>
              <li className="text-[#6B7280]">Services</li>
            </ol>
          </nav>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Nos Services{" "}
            <span className="text-gradient-gold">&amp; Programmes</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed">
            Des solutions d&apos;ing&eacute;nierie identitaire sur-mesure pour
            les leaders qui refusent l&apos;ordinaire.
          </p>
        </div>
      </section>

      {/* ═══════════════════ QUICK NAV ═══════════════════ */}
      <ServicesNav services={SERVICES.map((s) => ({ id: s.id, title: s.title }))} />

      {/* ═══════════════════ SERVICE SECTIONS ═══════════════════ */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon] ?? User;
        const cta = ctaMap[service.id] ?? { label: "Nous contacter", href: "/contact" };
        const gradient = gradientMap[service.id] ?? "from-[#5B21B6]/20 to-[#FFFFFF]";
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${isEven ? "bg-[#FFFFFF]" : "bg-[#F5F3FF]"} section-padding scroll-mt-20`}
          >
            <div className="container-abs">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                {/* ── Left: Content ── */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  {/* Icon + badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5B21B6]/10 border border-[#5B21B6]/20">
                      <Icon size={32} className="text-[#5B21B6]" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#5B21B6]/10 rounded-full border border-[#5B21B6]/20">
                      <Clock size={14} className="text-[#5B21B6]" />
                      <span className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider">
                        {service.delay}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2"
                    style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-base font-medium text-[#5B21B6] mb-5"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#5B21B6]/10">
                          <Check size={14} className="text-[#5B21B6]" />
                        </span>
                        <span className="text-[#1F2937] text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button href={cta.href} size="lg">
                    {cta.label}
                    <ArrowRight size={18} />
                  </Button>
                </div>

                {/* ── Right: Visual ── */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div
                    className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${gradient} border border-[#5B21B6]/10 overflow-hidden`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-[#5B21B6]/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#5B21B6]" />
                        </div>
                        {/* Inner ring */}
                        <div className="absolute inset-4 md:inset-6 rounded-full border border-[#7C3AED]/30 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#7C3AED]" />
                        </div>
                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#FFFFFF] border border-[#5B21B6]/30 flex items-center justify-center shadow-[0_0_40px_rgba(91,33,182,0.15)]">
                            <Icon size={40} className="text-[#5B21B6]" strokeWidth={1} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#5B21B6]/20 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#5B21B6]/20 rounded-br-lg" />

                    {/* Floating particles */}
                    <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-[#5B21B6]/40 animate-float" />
                    <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#7C3AED]/40 animate-float" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-[60%] right-[25%] w-1 h-1 rounded-full bg-[#5B21B6]/30 animate-float" style={{ animationDelay: "2s" }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════ COMPARISON TABLE ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Comparatif des Services"
            subtitle="Trouvez le service qui correspond parfaitement à vos ambitions."
          />

          {/* Table wrapper */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[640px] bg-[#FFFFFF] rounded-xl border border-[#5B21B6]/20 overflow-hidden shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-5 bg-[#F5F3FF]">
                <div className="p-4 md:p-5 text-sm font-medium text-[#6B7280] border-b border-[#5B21B6]/10" />
                <div className="p-4 md:p-5 text-center border-b border-[#5B21B6]/10">
                  <p
                    className="text-sm md:text-base font-semibold text-[#1F2937]"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    Avatar System
                  </p>
                </div>
                <div className="p-4 md:p-5 text-center border-b border-[#5B21B6]/10">
                  <p
                    className="text-sm md:text-base font-semibold text-[#1F2937]"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    Branding 360&deg;
                  </p>
                </div>
                {/* Premium column header */}
                <div className="p-4 md:p-5 text-center border-b border-[#5B21B6]/40 bg-[#5B21B6]/10 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#5B21B6] text-white rounded-full">
                      Premium
                    </span>
                  </div>
                  <p
                    className="text-sm md:text-base font-semibold text-[#5B21B6] mt-1"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    Ambassadeur Immortel
                  </p>
                </div>
                <div className="p-4 md:p-5 text-center border-b border-[#5B21B6]/10">
                  <p
                    className="text-sm md:text-base font-semibold text-[#1F2937]"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    Clonage Vocal
                  </p>
                </div>
              </div>

              {/* Data rows */}
              {comparisonRows.map((row, index) => {
                const isLast = index === comparisonRows.length - 1;
                return (
                  <div
                    key={row.label}
                    className={`grid grid-cols-5 ${!isLast ? "border-b border-[#5B21B6]/10" : ""} ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]/50"}`}
                  >
                    <div className="p-4 md:p-5 flex items-center">
                      <span className="text-sm md:text-base text-[#1F2937] font-medium">
                        {row.label}
                      </span>
                    </div>
                    {(["avatar", "branding", "ambassadeur", "clonage"] as const).map((col) => {
                      const val = row[col];
                      const isPremium = col === "ambassadeur";
                      return (
                        <div
                          key={col}
                          className={`p-4 md:p-5 flex items-center justify-center ${isPremium ? "bg-[#5B21B6]/5" : ""}`}
                        >
                          {typeof val === "boolean" ? (
                            val ? (
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isPremium ? "bg-[#5B21B6]/20" : "bg-[#5B21B6]/10"}`}>
                                <Check size={16} className={isPremium ? "text-[#5B21B6]" : "text-[#5B21B6]"} />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#1F2937]/5">
                                <X size={14} className="text-[#6B7280]/40" />
                              </div>
                            )
                          ) : (
                            <span className={`text-sm font-semibold ${isPremium ? "text-[#5B21B6]" : "text-[#1F2937]"}`}>
                              {val}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA below table */}
          <div className="mt-10 text-center">
            <p className="text-[#6B7280] mb-5">
              Besoin d&apos;aide pour choisir ? Nos experts sont l&agrave; pour vous guider.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              <Sparkles size={18} />
              Parler &agrave; un Expert
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs max-w-3xl">
          <SectionTitle
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir sur nos services de Digital Human Branding."
          />
          <ServicesFAQ items={SERVICE_FAQ} />
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="bg-[#4C1D95] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5B21B6]/5 blur-[150px]" />
        </div>
        <div className="container-abs relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Pr&ecirc;t &agrave; Transformer Votre Pr&eacute;sence ?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Rejoignez les leaders africains qui ont d&eacute;j&agrave; fait le
            choix de l&apos;immortalit&eacute; num&eacute;rique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              D&eacute;marrer Mon Projet
              <ArrowRight size={18} />
            </Button>
            <Button href="/tarifs" variant="outline-light" size="lg">
              Voir les Tarifs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CLIENT WRAPPER — FAQ (needs "use client" for accordion state)
   ═══════════════════════════════════════════════════════════════ */
import FAQ from "@/components/ui/FAQ";

function ServicesFAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <FAQ items={items} />;
}
