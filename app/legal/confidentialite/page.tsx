import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité d'ABS Corporation. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="container-abs max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#5B21B6] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B21B6]">Politique de Confidentialité</span>
        </nav>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gradient-gold mb-12"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Politique de Confidentialité
        </h1>

        {/* Content */}
        <div className="space-y-10 text-[#6B7280] text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <p>
              ABS Corporation™ (Avatar Branding System Corporation) accorde une importance majeure à la
              protection de vos données personnelles. La présente politique de confidentialité a pour
              objectif de vous informer sur la manière dont nous collectons, utilisons, stockons et
              protégeons vos informations personnelles conformément au Règlement Général sur la Protection
              des Données (RGPD) et aux lois applicables en matière de protection des données.
            </p>
          </section>

          {/* Données collectées */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              1. Données collectées
            </h2>
            <p className="mb-3">
              Dans le cadre de nos activités, nous sommes amenés à collecter les catégories de données
              personnelles suivantes :
            </p>
            <ul className="space-y-3 ml-4">
              <li>
                <span className="text-[#1F2937] font-semibold">Données d&apos;identification :</span> nom, prénom,
                adresse email, numéro de téléphone, fonction professionnelle, nom de l&apos;entreprise.
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données biométriques (services Avatar) :</span> données
                faciales, empreinte vocale, gestuelle captée lors des sessions de captation. Ces données sont
                exclusivement collectées avec votre consentement explicite et sont nécessaires à la création de
                votre avatar IA.
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de navigation :</span> adresse IP, type de
                navigateur, pages visitées, durée de visite, cookies (voir notre{" "}
                <Link href="/legal/cookies" className="text-[#5B21B6] hover:underline">
                  Politique de Cookies
                </Link>
                ).
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de facturation :</span> informations de
                paiement, historique des transactions, adresse de facturation.
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de communication :</span> messages envoyés
                via le formulaire de contact, échanges par email ou WhatsApp, demandes de devis.
              </li>
            </ul>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              2. Utilisation des données
            </h2>
            <p className="mb-3">Vos données personnelles sont utilisées pour les finalités suivantes :</p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>Fourniture et gestion de nos services de Digital Human Branding</li>
              <li>Création et maintenance de votre avatar IA et de vos actifs numériques</li>
              <li>Gestion de la relation client et communication relative à nos services</li>
              <li>Traitement des commandes, facturation et suivi des paiements</li>
              <li>Amélioration de nos services et de l&apos;expérience utilisateur du site</li>
              <li>Envoi de newsletters et communications marketing (avec votre consentement)</li>
              <li>Respect de nos obligations légales et réglementaires</li>
              <li>Analyse statistique et amélioration de notre site web</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              3. Base légale du traitement
            </h2>
            <p className="mb-3">Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Exécution contractuelle :</span> traitement nécessaire à
                l&apos;exécution de nos services (création d&apos;avatar, branding, formation)
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Consentement :</span> collecte des données biométriques,
                envoi de communications marketing, dépôt de cookies non essentiels
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Intérêt légitime :</span> amélioration de nos services,
                sécurité du site, prévention de la fraude
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Obligation légale :</span> conservation des données
                de facturation conformément aux obligations comptables et fiscales
              </li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              4. Durée de conservation
            </h2>
            <p className="mb-3">
              Vos données personnelles sont conservées pour la durée strictement nécessaire aux finalités
              pour lesquelles elles ont été collectées :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Données clients :</span> pendant toute la durée de la
                relation contractuelle, puis 5 ans après la fin du contrat à des fins de preuve
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données biométriques (avatars) :</span> pendant la durée
                du contrat. Elles sont supprimées dans un délai de 30 jours après une demande de suppression,
                conformément à notre{" "}
                <Link href="/legal/charte-souverainete" className="text-[#5B21B6] hover:underline">
                  Charte de Souveraineté Numérique
                </Link>
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de facturation :</span> 10 ans conformément aux
                obligations comptables
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de navigation :</span> 13 mois maximum
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Données de prospection :</span> 3 ans à compter du
                dernier contact
              </li>
            </ul>
          </section>

          {/* Vos droits */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              5. Vos droits (RGPD)
            </h2>
            <p className="mb-3">
              Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Droit d&apos;accès :</span> obtenir la confirmation que
                vos données sont traitées et en recevoir une copie
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit de rectification :</span> faire corriger vos données
                inexactes ou incomplètes
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit à l&apos;effacement :</span> demander la suppression
                de vos données dans les cas prévus par la loi
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit à la limitation :</span> demander la limitation du
                traitement de vos données
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit à la portabilité :</span> recevoir vos données dans
                un format structuré et lisible par machine
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit d&apos;opposition :</span> vous opposer au traitement
                de vos données pour des motifs légitimes
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit de retirer votre consentement :</span> retirer votre
                consentement à tout moment pour les traitements basés sur celui-ci
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Droit à l&apos;oubli numérique :</span> conformément à
                notre Charte de Souveraineté Numérique, vous pouvez demander la suppression complète de votre
                identité numérique (avatar, voix clonée, données biométriques)
              </li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à l&apos;adresse{" "}
              <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                contact@abscorporation.com
              </a>
              . Nous nous engageons à répondre dans un délai de 30 jours.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              6. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir
              plus sur les cookies que nous utilisons et comment les gérer, veuillez consulter notre{" "}
              <Link href="/legal/cookies" className="text-[#5B21B6] hover:underline">
                Politique de Cookies
              </Link>
              .
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              7. Sécurité des données
            </h2>
            <p className="mb-3">
              ABS Corporation™ met en oeuvre des mesures techniques et organisationnelles appropriées pour
              assurer la sécurité et la confidentialité de vos données personnelles :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>Chiffrement des données sensibles en transit et au repos</li>
              <li>Stockage sécurisé des données biométriques dans notre Identité Vault</li>
              <li>Contrôle d&apos;accès strict aux données personnelles</li>
              <li>Audits de sécurité réguliers</li>
              <li>Formation du personnel aux bonnes pratiques de protection des données</li>
            </ul>
          </section>

          {/* Transferts de données */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              8. Transferts de données
            </h2>
            <p>
              Certaines de vos données peuvent être transférées vers des prestataires situés en dehors de
              votre pays de résidence, notamment pour l&apos;hébergement (Vercel, USA) et les services
              d&apos;authentification. Ces transferts sont encadrés par des garanties appropriées (clauses
              contractuelles types, certifications) conformément aux exigences du RGPD.
            </p>
          </section>

          {/* Délégué à la Protection des Données */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              9. Délégué à la Protection des Données
            </h2>
            <p>
              Pour toute question relative à la protection de vos données personnelles, vous pouvez
              contacter notre responsable de la protection des données à l&apos;adresse suivante :{" "}
              <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                contact@abscorporation.com
              </a>
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              10. Modifications
            </h2>
            <p>
              ABS Corporation™ se réserve le droit de modifier la présente politique de confidentialité à
              tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour
              révisée. Nous vous encourageons à consulter régulièrement cette page pour rester informé de
              nos pratiques en matière de protection des données.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              11. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              vous pouvez nous contacter :
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
