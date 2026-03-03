import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site ABS Corporation - Avatar Branding System Corporation. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="container-abs max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#5B21B6] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B21B6]">Mentions Légales</span>
        </nav>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gradient-gold mb-12"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Mentions Légales
        </h1>

        {/* Content */}
        <div className="space-y-10 text-[#6B7280] text-base leading-relaxed">
          {/* Éditeur du site */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              1. Éditeur du site
            </h2>
            <p className="mb-3">
              Le site <span className="text-[#1F2937] font-semibold">abscorporation.com</span> est édité par :
            </p>
            <ul className="space-y-2 ml-4">
              <li>
                <span className="text-[#1F2937] font-semibold">Raison sociale :</span> ABS Corporation™ (Avatar Branding System Corporation)
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Forme juridique :</span> SAS (Société par Actions Simplifiée)
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Capital social :</span> 2 000 000 FCFA
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Siège social :</span> Lomé, Togo
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Email :</span>{" "}
                <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                  contact@abscorporation.com
                </a>
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Site web :</span>{" "}
                <a href="https://abscorporation.com" className="text-[#5B21B6] hover:underline">
                  https://abscorporation.com
                </a>
              </li>
            </ul>
          </section>

          {/* Directeur de la publication */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est <span className="text-[#1F2937] font-semibold">Raphael Sossoe</span>,
              en sa qualité de CEO & Fondateur d&apos;ABS Corporation™.
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              3. Hébergeur
            </h2>
            <p className="mb-3">Le site est hébergé par :</p>
            <ul className="space-y-2 ml-4">
              <li>
                <span className="text-[#1F2937] font-semibold">Raison sociale :</span> Vercel Inc.
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, San Francisco, CA, USA
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Site web :</span>{" "}
                <a href="https://vercel.com" className="text-[#5B21B6] hover:underline" target="_blank" rel="noopener noreferrer">
                  https://vercel.com
                </a>
              </li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              4. Propriété intellectuelle
            </h2>
            <p className="mb-3">
              L&apos;ensemble du contenu du site abscorporation.com, incluant de façon non limitative les textes,
              graphismes, images, photographies, vidéos, logos, icônes, sons, logiciels et tout autre élément,
              est la propriété exclusive d&apos;ABS Corporation™ ou de ses partenaires et est protégé par les lois
              françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mb-3">
              Toute reproduction, représentation, modification, publication, distribution, retransmission,
              adaptation, ou exploitation de quelque manière que ce soit, de tout ou partie du site, de ses
              éléments ou de son contenu, sans l&apos;autorisation écrite préalable d&apos;ABS Corporation™,
              est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la
              Propriété Intellectuelle.
            </p>
            <p>
              Les marques «&nbsp;ABS Corporation™&nbsp;», «&nbsp;Avatar Branding System&nbsp;»,
              «&nbsp;Avatar System™&nbsp;», «&nbsp;Ambassadeur Immortel™&nbsp;», «&nbsp;Identité Vault&nbsp;»
              et «&nbsp;Verified by ABS Corp™&nbsp;» sont des marques déposées ou en cours de dépôt par
              ABS Corporation. Toute utilisation non autorisée de ces marques est interdite.
            </p>
          </section>

          {/* Crédits */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              5. Crédits
            </h2>
            <p className="mb-3">
              Le site abscorporation.com a été conçu et développé par l&apos;équipe technologique d&apos;ABS Corporation™.
            </p>
            <p className="mb-2 text-[#1F2937] font-semibold">Technologies utilisées :</p>
            <ul className="space-y-1 ml-4 list-disc list-inside">
              <li>Next.js (Framework React)</li>
              <li>Tailwind CSS (Framework CSS)</li>
              <li>Vercel (Hébergement et déploiement)</li>
              <li>TypeScript (Langage de programmation)</li>
              <li>Clerk (Authentification)</li>
            </ul>
          </section>

          {/* Limitation de responsabilité */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              6. Limitation de responsabilité
            </h2>
            <p className="mb-3">
              ABS Corporation™ s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout
              moment et sans préavis. Toutefois, ABS Corporation™ ne peut garantir l&apos;exactitude, la précision
              ou l&apos;exhaustivité des informations mises à disposition sur le site.
            </p>
            <p>
              En conséquence, ABS Corporation™ décline toute responsabilité pour toute imprécision, inexactitude
              ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages
              résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des
              informations mises à la disposition sur le site.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit togolais. En cas de litige, et après
              tentative de résolution amiable, compétence est attribuée aux tribunaux compétents de Lomé, Togo.
            </p>
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
