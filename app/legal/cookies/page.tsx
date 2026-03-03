import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Cookies",
  description:
    "Politique de cookies d'ABS Corporation. Découvrez les types de cookies utilisés sur notre site et comment les gérer.",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="container-abs max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#5B21B6] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B21B6]">Politique de Cookies</span>
        </nav>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gradient-gold mb-12"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Politique de Cookies
        </h1>

        {/* Content */}
        <div className="space-y-10 text-[#6B7280] text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <p>
              La présente politique de cookies explique comment ABS Corporation™ (Avatar Branding System
              Corporation) utilise des cookies et des technologies similaires sur son site web
              abscorporation.com. Elle vous informe sur les types de cookies utilisés, les finalités de
              ces cookies et les moyens dont vous disposez pour les gérer.
            </p>
          </section>

          {/* Qu'est-ce qu'un cookie */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="mb-3">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
              smartphone) lors de votre visite sur un site web. Il permet au site de mémoriser des
              informations relatives à votre visite, comme vos préférences de langue, vos identifiants
              de connexion, ou le contenu de votre panier, ce qui facilite votre navigation lors de
              visites ultérieures.
            </p>
            <p>
              Les cookies peuvent être déposés par le site que vous visitez (cookies de première partie)
              ou par des services tiers intégrés au site (cookies de tiers).
            </p>
          </section>

          {/* Types de cookies utilisés */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              2. Types de cookies utilisés
            </h2>

            {/* Cookies essentiels */}
            <div className="bg-[#F5F3FF] rounded-xl p-6 mb-6">
              <h3
                className="text-lg font-bold text-[#5B21B6] mb-3"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Cookies essentiels (strictement nécessaires)
              </h3>
              <p className="mb-3">
                Ces cookies sont indispensables au bon fonctionnement du site. Ils vous permettent de
                naviguer sur le site et d&apos;utiliser ses fonctionnalités de base. Sans ces cookies,
                le site ne peut pas fonctionner correctement.
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside text-sm">
                <li>
                  <span className="text-[#1F2937] font-semibold">Cookies de session :</span> maintien de votre
                  session de navigation
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Cookies d&apos;authentification :</span> gestion
                  de votre connexion à votre espace client (via Clerk)
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Cookies de sécurité :</span> protection contre
                  les attaques CSRF et autres menaces
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Cookies de préférences :</span> mémorisation de
                  vos choix en matière de cookies
                </li>
              </ul>
              <p className="mt-3 text-sm text-[#6B7280]/80">
                <span className="text-[#1F2937] font-semibold">Base légale :</span> intérêt légitime (ces cookies
                ne nécessitent pas votre consentement car ils sont strictement nécessaires).
              </p>
            </div>

            {/* Cookies analytiques */}
            <div className="bg-[#F5F3FF] rounded-xl p-6 mb-6">
              <h3
                className="text-lg font-bold text-[#5B21B6] mb-3"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Cookies analytiques (mesure d&apos;audience)
              </h3>
              <p className="mb-3">
                Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site
                en collectant et rapportant des informations de manière anonyme. Ils nous permettent
                d&apos;améliorer continuellement l&apos;expérience utilisateur.
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside text-sm">
                <li>
                  <span className="text-[#1F2937] font-semibold">Vercel Analytics :</span> analyse du trafic
                  et des performances du site (pages vues, durée de session, taux de rebond)
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Vercel Speed Insights :</span> mesure des
                  performances de chargement et identification des axes d&apos;optimisation
                </li>
              </ul>
              <p className="mt-3 text-sm text-[#6B7280]/80">
                <span className="text-[#1F2937] font-semibold">Base légale :</span> consentement. Ces cookies
                ne sont déposés qu&apos;après obtention de votre accord.
              </p>
            </div>

            {/* Cookies marketing */}
            <div className="bg-[#F5F3FF] rounded-xl p-6">
              <h3
                className="text-lg font-bold text-[#5B21B6] mb-3"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Cookies marketing (publicité ciblée)
              </h3>
              <p className="mb-3">
                Ces cookies sont utilisés pour suivre les visiteurs à travers les sites web afin
                d&apos;afficher des publicités pertinentes et personnalisées. Ils permettent également de
                mesurer l&apos;efficacité de nos campagnes publicitaires.
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside text-sm">
                <li>
                  <span className="text-[#1F2937] font-semibold">Pixel Meta (Facebook) :</span> suivi des
                  conversions et remarketing sur les plateformes Meta
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">LinkedIn Insight Tag :</span> suivi des
                  conversions et analyses de l&apos;audience professionnelle
                </li>
              </ul>
              <p className="mt-3 text-sm text-[#6B7280]/80">
                <span className="text-[#1F2937] font-semibold">Base légale :</span> consentement. Ces cookies ne
                sont déposés qu&apos;après obtention de votre accord explicite.
              </p>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              3. Durée de conservation des cookies
            </h2>
            <p className="mb-3">
              La durée de conservation des cookies varie selon leur type :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Cookies de session :</span> supprimés
                automatiquement à la fermeture de votre navigateur
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Cookies persistants :</span> conservés pendant
                une durée maximale de 13 mois conformément aux recommandations de la CNIL
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Cookies d&apos;authentification :</span> durée
                variable selon vos paramètres de connexion (session ou connexion persistante)
              </li>
            </ul>
            <p className="mt-3">
              Au-delà de ces durées, les cookies sont automatiquement supprimés de votre terminal.
            </p>
          </section>

          {/* Gestion des cookies */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              4. Gestion des cookies
            </h2>
            <p className="mb-3">
              Vous disposez de plusieurs moyens pour gérer vos préférences en matière de cookies :
            </p>

            <h3
              className="text-base font-bold text-[#1F2937] mb-2 mt-4"
              style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
            >
              Via notre bandeau de cookies
            </h3>
            <p className="mb-3">
              Lors de votre première visite, un bandeau de consentement vous permet d&apos;accepter ou de
              refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment en cliquant
              sur le lien «&nbsp;Gérer les cookies&nbsp;» disponible en pied de page.
            </p>

            <h3
              className="text-base font-bold text-[#1F2937] mb-2 mt-4"
              style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
            >
              Via votre navigateur
            </h3>
            <p className="mb-3">
              Vous pouvez également configurer votre navigateur pour accepter ou refuser les cookies.
              Voici les liens vers les instructions des principaux navigateurs :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937]">Google Chrome :</span> Paramètres &gt; Confidentialité et sécurité &gt; Cookies
              </li>
              <li>
                <span className="text-[#1F2937]">Mozilla Firefox :</span> Paramètres &gt; Vie privée et sécurité &gt; Cookies
              </li>
              <li>
                <span className="text-[#1F2937]">Safari :</span> Préférences &gt; Confidentialité &gt; Cookies
              </li>
              <li>
                <span className="text-[#1F2937]">Microsoft Edge :</span> Paramètres &gt; Cookies et autorisations de site
              </li>
            </ul>
            <p className="mt-3 text-sm">
              <span className="text-[#5B21B6]">Attention :</span> la désactivation de certains cookies peut
              affecter le fonctionnement du site et limiter l&apos;accès à certaines fonctionnalités.
            </p>
          </section>

          {/* Vos droits */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              5. Vos droits
            </h2>
            <p className="mb-3">
              Conformément au RGPD, vous disposez des droits suivants concernant les données collectées
              via les cookies :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>Droit d&apos;accès aux données collectées via les cookies</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit d&apos;opposition au traitement des données collectées par les cookies non essentiels</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à l&apos;adresse{" "}
              <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                contact@abscorporation.com
              </a>
              .
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              6. Modifications de la politique de cookies
            </h2>
            <p>
              ABS Corporation™ se réserve le droit de modifier cette politique de cookies à tout moment
              pour refléter les changements dans nos pratiques ou pour se conformer aux évolutions
              réglementaires. Toute modification sera publiée sur cette page avec une date de mise à jour
              révisée. En cas de modification substantielle, nous vous en informerons via un nouveau
              bandeau de consentement.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              7. Contact
            </h2>
            <p>
              Pour toute question relative à notre utilisation des cookies, vous pouvez nous contacter :
            </p>
            <ul className="space-y-2 ml-4 mt-3">
              <li>
                <span className="text-[#1F2937] font-semibold">Email :</span>{" "}
                <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                  contact@abscorporation.com
                </a>
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Adresse :</span> ABS Corporation™, Lomé, Togo
              </li>
            </ul>
          </section>

          {/* Date de mise à jour */}
          <section className="pt-6 border-t border-[#E5E7EB]">
            <p className="text-sm text-[#9CA3AF]">
              Dernière mise à jour : Février 2025
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#5B21B6] hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
