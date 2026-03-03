"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { FileText, CheckSquare, BarChart3, ArrowRight, Mail, Clock, ChevronRight } from "lucide-react";

const CATEGORIES = [
  "Tous",
  "Digital Human Branding",
  "IA & Leadership",
  "Prompt Engineering",
  "Études de cas",
  "Tech Afrique",
  "Éthique IA",
];

const LEAD_MAGNETS = [
  {
    icon: FileText,
    title: "Les 10 Erreurs à Éviter dans votre Personal Branding en Afrique",
    type: "Guide PDF",
    description:
      "Un guide complet pour identifier et corriger les erreurs les plus courantes qui freinent votre personal branding sur le continent africain.",
  },
  {
    icon: CheckSquare,
    title: "Les 7 Étapes pour Préparer votre Session de Captation Avatar",
    type: "Checklist",
    description:
      "Une checklist détaillée pour arriver parfaitement préparé à votre session de captation et maximiser la qualité de votre avatar IA.",
  },
  {
    icon: BarChart3,
    title: "État de l'IA Branding en Afrique Francophone 2025",
    type: "Rapport",
    description:
      "Notre rapport annuel sur l'adoption de l'IA dans le branding en Afrique francophone : tendances, chiffres clés et prévisions.",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  const filteredPosts =
    activeCategory === "Tous"
      ? remainingPosts
      : remainingPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F5F3FF]">
        <div className="container-abs">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
            <Link href="/" className="hover:text-[#5B21B6] transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#5B21B6]">Blog</span>
          </nav>

          <h1
            className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Blog & Ressources
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl leading-relaxed">
            Décryptages, guides et analyses sur le Digital Human Branding et
            l&apos;IA en Afrique.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="bg-[#FFFFFF] py-4 sticky top-0 z-30 border-b border-[#E5E7EB]">
        <div className="container-abs">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#5B21B6] text-white"
                    : "border border-[#E5E7EB] text-[#6B7280] hover:border-[#5B21B6]/50 hover:text-[#1F2937]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === "Tous" && featuredPost && (
        <section className="bg-[#FFFFFF] section-padding">
          <div className="container-abs">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden card-hover lg:grid lg:grid-cols-2 border border-[#E5E7EB] shadow-sm">
                {/* Image Placeholder */}
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#F5F3FF] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6]/10 to-[#7C3AED]/10" />
                  <span className="text-[#5B21B6]/30 text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
                    ABS
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#5B21B6]/10 text-[#5B21B6] text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-[#6B7280]">
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#6B7280]">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#6B7280] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#5B21B6] font-semibold hover:gap-3 transition-all">
                    Lire l&apos;article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs">
          {filteredPosts.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="bg-[#FFFFFF] rounded-xl overflow-hidden card-hover h-full flex flex-col border border-[#E5E7EB] shadow-sm">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6]/5 to-[#7C3AED]/5" />
                      <span className="text-[#5B21B6]/20 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                        ABS
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block bg-[#5B21B6]/10 text-[#5B21B6] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                        {post.category}
                      </span>

                      <h3
                        className="text-lg font-bold text-[#1F2937] mb-3 leading-snug"
                        style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                      >
                        {post.title}
                      </h3>

                      <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-[#6B7280] pt-4 border-t border-[#E5E7EB]">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">
                Aucun article dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Resources / Lead Magnets */}
      <section className="bg-[#F5F3FF] section-padding">
        <div className="container-abs">
          <SectionTitle
            title="Ressources Gratuites"
            subtitle="Téléchargez nos guides, checklists et rapports pour accélérer votre transformation numérique."
            centered
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {LEAD_MAGNETS.map((magnet, index) => {
              const Icon = magnet.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-xl p-6 card-hover flex flex-col border border-[#E5E7EB] shadow-sm"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-[#5B21B6]" />
                  </div>

                  <span className="text-xs text-[#5B21B6] font-semibold uppercase tracking-wider mb-2">
                    {magnet.type}
                  </span>

                  <h3
                    className="text-lg font-bold text-[#1F2937] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                  >
                    {magnet.title}
                  </h3>

                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-1">
                    {magnet.description}
                  </p>

                  <Button variant="secondary" size="sm" href="#">
                    Télécharger gratuitement
                  </Button>

                  <p className="text-xs text-[#6B7280]/60 mt-3">
                    Email requis pour le téléchargement
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-abs flex justify-center">
          <div className="max-w-2xl w-full bg-[#FFFFFF] rounded-2xl p-8 md:p-12 text-center card-hover border border-[#E5E7EB] shadow-sm">
            <Mail className="w-12 h-12 text-[#5B21B6] mx-auto mb-6" />

            <h2
              className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Restez informé
            </h2>

            <p className="text-[#6B7280] mb-8 leading-relaxed">
              Recevez nos derniers articles et analyses directement dans votre
              boîte mail.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-white border border-[#E5E7EB] rounded text-[#1F2937] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#5B21B6] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#5B21B6] text-white font-semibold rounded hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
              >
                S&apos;abonner
              </button>
            </form>

            <p className="text-xs text-[#6B7280]/50 mt-4">
              Pas de spam. Désabonnement en un clic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
