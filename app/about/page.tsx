import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { TeamCard } from "@/components/ui/Card";
import Counter from "@/components/ui/Counter";
import {
  ChevronRight,
  Eye,
  Target,
  Ear,
  Briefcase,
  RefreshCw,
  Award,
  Shield,
  Lock,
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  Sparkles,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE — ABS Corporation™
   ═══════════════════════════════════════════════════════════════ */

export const metadata = {
  title: "\u00C0 Propos",
  description:
    "D\u00e9couvrez ABS Corporation, le premier cabinet africain de Digital Human Branding. Notre vision, notre \u00e9quipe, nos valeurs et notre engagement \u00e9thique.",
};

/* ── Values data ── */
const VALUES = [
  {
    icon: Ear,
    title: "\u00C9coute",
    description:
      "Chaque projet commence par une \u00e9coute approfondie de vos besoins, vos ambitions et votre vision. Nous ne cr\u00e9ons pas des avatars g\u00e9n\u00e9riques \u2014 nous capturons votre essence unique.",
  },
  {
    icon: Briefcase,
    title: "Professionnalisme",
    description:
      "L\u2019excellence guide chaque \u00e9tape de notre travail. De la captation \u00e0 la livraison, nous appliquons les standards les plus \u00e9lev\u00e9s de l\u2019industrie du Digital Human Branding.",
  },
  {
    icon: RefreshCw,
    title: "Flexibilit\u00e9",
    description:
      "Nous nous adaptons \u00e0 votre rythme, vos contraintes et vos objectifs. Nos solutions sont modulaires et \u00e9volutives pour accompagner votre croissance.",
  },
  {
    icon: Award,
    title: "Cr\u00e9dibilit\u00e9",
    description:
      "Nos r\u00e9sultats parlent pour nous. Chaque projet est document\u00e9, chaque promesse est tenue. La confiance se construit par les actes, pas par les mots.",
  },
];

/* ── Timeline milestones ── */
const MILESTONES = [
  {
    year: "2023",
    title: "La Gen\u00e8se",
    description:
      "Naissance de l\u2019id\u00e9e : face au manque de temps des leaders africains pour leur pr\u00e9sence num\u00e9rique, Raphael Sossoe imagine un syst\u00e8me de clonage num\u00e9rique professionnel.",
  },
  {
    year: "2024",
    title: "Premiers Avatars",
    description:
      "Lancement de l\u2019Avatar System\u2122. Les premiers avatars IA sont cr\u00e9\u00e9s pour des CEO et coaches business en Afrique de l\u2019Ouest. Les r\u00e9sultats d\u00e9passent les attentes.",
  },
  {
    year: "2024",
    title: "Expansion Multilingue",
    description:
      "Int\u00e9gration du clonage vocal multilingue avec support des langues locales africaines. Partenariats strat\u00e9giques avec ElevenLabs et HeyGen.",
  },
  {
    year: "2025",
    title: "ABS Corporation\u2122",
    description:
      "Structuration en cabinet de Digital Human Branding. Lancement de l\u2019Ambassadeur Immortel\u2122 et de l\u2019ABS Acad\u00e9mie pour former la prochaine g\u00e9n\u00e9ration.",
  },
];

/* ── Tech partners ── */
const TECH_PARTNERS = [
  { name: "ElevenLabs", description: "Clonage Vocal IA", icon: Zap },
  { name: "HeyGen", description: "Avatars Vid\u00e9o IA", icon: Globe },
  { name: "Midjourney", description: "G\u00e9n\u00e9ration d\u2019Images", icon: Sparkles },
  { name: "OpenAI", description: "Intelligence Artificielle", icon: Cpu },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding pt-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-[15%] w-[350px] h-[350px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />
          <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] rounded-full bg-[#5B21B6]/5 blur-[120px]" />
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
              <li className="text-[#6B7280]">&Agrave; Propos</li>
            </ol>
          </nav>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Notre Vision,{" "}
            <span className="text-gradient-gold">Notre Mission</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed">
            B&acirc;tir l&apos;avenir du branding africain, un avatar &agrave;
            la fois.
          </p>
        </div>
      </section>

      {/* ═══════════════════ NOTRE HISTOIRE ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Notre Histoire"
            subtitle="De l&apos;id&eacute;e visionnaire &agrave; la r&eacute;alit&eacute; : comment ABS Corporation est n&eacute;e."
          />

          {/* Intro prose */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-[#6B7280] mb-6">
              En Afrique, les leaders les plus brillants partagent un m&ecirc;me
              d&eacute;fi : le temps. Entre la gestion de leurs entreprises, leurs
              engagements strat&eacute;giques et leur vie personnelle, leur
              pr&eacute;sence num&eacute;rique est souvent sacrifi&eacute;e. Pourtant,
              dans un monde hyper-connect&eacute;, l&apos;invisibilit&eacute;
              num&eacute;rique est la mort lente de l&apos;autorit&eacute;.
            </p>
            <p className="text-lg leading-relaxed text-[#6B7280]">
              ABS Corporation est n&eacute;e d&apos;une conviction simple mais
              puissante : <strong className="text-[#1F2937]">chaque leader m&eacute;rite
                une pr&eacute;sence num&eacute;rique &agrave; la hauteur de son
                expertise</strong>. Gr&acirc;ce &agrave; l&apos;intelligence
              artificielle et &agrave; l&apos;ing&eacute;nierie identitaire, nous
              transformons l&apos;expertise des leaders africains en actifs
              num&eacute;riques immortels et automatis&eacute;s.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#5B21B6] via-[#5B21B6]/40 to-transparent" />

            <div className="space-y-12">
              {MILESTONES.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#5B21B6] border-4 border-[#FFFFFF] z-10 mt-2" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                        }`}
                    >
                      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#5B21B6] bg-[#5B21B6]/10 rounded-full border border-[#5B21B6]/20 mb-3">
                        {milestone.year}
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-2"
                        style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-[#6B7280] text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Spacer for the other side on desktop */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VISION & MISSION ═══════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Vision & Mission"
            subtitle="Ce qui nous anime et nous guide chaque jour."
          />

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Vision card */}
            <div className="bg-[#FFFFFF] rounded-xl border border-[#5B21B6]/20 p-8 md:p-10 hover:border-[#5B21B6] hover:shadow-[0_0_30px_rgba(91,33,182,0.1)] transition-all duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#5B21B6]/10 text-[#5B21B6] mb-6 group-hover:bg-[#5B21B6]/20 transition-colors">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3
                className="text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Notre Vision
              </h3>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
                Devenir la <strong className="text-[#5B21B6]">r&eacute;f&eacute;rence
                  n&deg;1 en Afrique</strong> dans le branding assist&eacute; par
                l&apos;IA.
              </p>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
                Pionnier du <strong className="text-[#1F2937]">Digital Human
                  Branding en Afrique</strong>, nous tra&ccedil;ons la voie vers un
                futur o&ugrave; chaque leader poss&egrave;de un jumeau
                num&eacute;rique qui perp&eacute;tue son h&eacute;ritage.
              </p>
            </div>

            {/* Mission card */}
            <div className="bg-[#FFFFFF] rounded-xl border border-[#7C3AED]/30 p-8 md:p-10 hover:border-[#7C3AED] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] mb-6 group-hover:bg-[#7C3AED]/20 transition-colors">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3
                className="text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Notre Mission
              </h3>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
                Transformer l&apos;expertise des leaders africains en{" "}
                <strong className="text-[#1F2937]">actifs num&eacute;riques
                  immortels et automatis&eacute;s</strong>, gr&acirc;ce &agrave;
                l&apos;intelligence artificielle et la strat&eacute;gie de
                contenu. Nous rendons l&apos;excellence accessible, la
                pr&eacute;sence permanente et l&apos;influence
                in&eacute;puisable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NOS VALEURS ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Nos Valeurs"
            subtitle="Les piliers qui fondent chacune de nos d\u00e9cisions et de nos cr\u00e9ations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#FFFFFF] rounded-xl border border-[#5B21B6]/20 p-6 hover:border-[#5B21B6] hover:shadow-[0_0_30px_rgba(91,33,182,0.1)] transition-all duration-300 group text-center shadow-sm"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#5B21B6]/10 text-[#5B21B6] mb-5 mx-auto group-hover:bg-[#5B21B6]/20 transition-colors">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1F2937] mb-3"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE SQUAD ═══════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="L'équipe"
            subtitle="L&apos;\u00e9quipe qui transforme la vision en r\u00e9alit\u00e9."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard
                key={member.name}
                avatar={member.avatar}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ENGAGEMENT ETHIQUE ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs">
          <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-2xl border-2 border-[#5B21B6]/30 p-8 md:p-12 relative overflow-hidden shadow-sm">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#5B21B6]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#5B21B6]/10 text-[#5B21B6]">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#5B21B6]/10 text-[#5B21B6]">
                  <Lock size={28} strokeWidth={1.5} />
                </div>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-gradient-gold mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Notre Engagement &Eacute;thique
              </h2>

              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
                Chez ABS Corporation, l&apos;&eacute;thique n&apos;est pas une
                option &mdash; c&apos;est un pilier fondateur. Notre{" "}
                <strong className="text-[#1F2937]">Charte de
                  Souverainet&eacute; Num&eacute;rique</strong> garantit que vous
                restez le propri&eacute;taire exclusif et souverain de votre
                identit&eacute; num&eacute;rique.
              </p>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
                Chaque avatar cr&eacute;&eacute; est prot&eacute;g&eacute; dans
                notre <strong className="text-[#5B21B6]">Identit&eacute;
                  Vault</strong> s&eacute;curis&eacute;. Chaque vid&eacute;o
                produite porte le watermark{" "}
                <span className="text-[#5B21B6] font-semibold">
                  &laquo; Verified by ABS Corp&trade; &raquo;
                </span>{" "}
                pour garantir l&apos;authenticit&eacute; et la
                tra&ccedil;abilit&eacute;.
              </p>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
                Nous croyons en la transparence totale : tout contenu
                g&eacute;n&eacute;r&eacute; par IA est clairement
                identifi&eacute; comme tel, dans le respect de notre audience et
                de nos clients.
              </p>

              <Button href="/legal/charte-souverainete" variant="secondary" size="lg">
                Lire la Charte Compl&egrave;te
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PARTENARIATS TECHNOLOGIQUES ═══════════════════ */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Nos Partenaires Technologiques"
            subtitle="Les technologies de pointe qui alimentent notre \u00e9cosyst\u00e8me d&apos;innovation."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {TECH_PARTNERS.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="bg-[#FFFFFF] rounded-xl border border-[#5B21B6]/10 p-6 hover:border-[#5B21B6]/40 hover:shadow-[0_0_20px_rgba(91,33,182,0.05)] transition-all duration-300 flex flex-col items-center text-center group shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#5B21B6]/5 border border-[#5B21B6]/10 flex items-center justify-center mb-4 group-hover:bg-[#5B21B6]/10 transition-colors">
                    <Icon size={28} className="text-[#5B21B6]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-base font-semibold text-[#1F2937] mb-1"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    {partner.name}
                  </h3>
                  <p className="text-xs text-[#6B7280]">{partner.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CHIFFRES CLES ═══════════════════ */}
      <section className="bg-[#FFFFFF] section-padding relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#5B21B6]/3 blur-[150px]" />
        </div>

        <div className="container-abs relative z-10">
          <SectionTitle
            title="Chiffres clés"
            subtitle="L&apos;impact mesurable de notre mission."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            <Counter end={50} suffix="+" label="Avatars Cr\u00e9\u00e9s" />
            <Counter end={30} suffix="+" label="Clients Actifs" />
            <Counter end={10} suffix="+" label="Langues Disponibles" />
            <Counter end={5000} suffix="+" label="Heures \u00C9conomis\u00e9es" />
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="bg-[#4C1D95] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[150px]" />
        </div>
        <div className="container-abs relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Rejoignez l&apos;Aventure
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Pr&ecirc;t &agrave; transformer votre expertise en un actif
            num&eacute;rique immortel ? Parlons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Nous Contacter
              <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="outline-light" size="lg">
              D&eacute;couvrir Nos Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
