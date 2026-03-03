import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente d'ABS Corporation. Informations sur nos services, tarifs, paiement, livraison et responsabilité.",
};

export default function CGVPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="container-abs max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#5B21B6] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B21B6]">Conditions Générales de Vente</span>
        </nav>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gradient-gold mb-12"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Conditions Générales de Vente
        </h1>

        {/* Content */}
        <div className="space-y-10 text-[#6B7280] text-base leading-relaxed">
          {/* Objet */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              1. Objet
            </h2>
            <p className="mb-3">
              Les présentes Conditions Générales de Vente (ci-après «&nbsp;CGV&nbsp;») régissent l&apos;ensemble
              des relations commerciales entre ABS Corporation™ (Avatar Branding System Corporation), SAS au
              capital de 2 000 000 FCFA, dont le siège social est situé à Lomé, Togo, ci-après dénommée
              «&nbsp;le Prestataire&nbsp;», et toute personne physique ou morale, ci-après dénommée
              «&nbsp;le Client&nbsp;», souhaitant bénéficier des services proposés par le Prestataire.
            </p>
            <p>
              Toute commande de services implique l&apos;acceptation sans réserve des présentes CGV par le
              Client. Ces CGV prévalent sur tout autre document du Client, sauf accord écrit contraire.
            </p>
          </section>

          {/* Services proposés */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              2. Services proposés
            </h2>
            <p className="mb-3">
              ABS Corporation™ propose les services suivants dans le domaine du Digital Human Branding :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">L&apos;Avatar System™ :</span> création d&apos;un
                avatar numérique IA (clone vidéo et vocal) du Client, incluant la captation professionnelle
                4K, l&apos;entraînement du modèle facial et le clonage vocal
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Branding IA 360° :</span> audit et refonte complète
                de l&apos;identité visuelle et textuelle du Client assistée par intelligence artificielle
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Ambassadeur Immortel™ :</span> pack premium combinant
                l&apos;Avatar System™, le Branding IA 360° et une stratégie de diffusion avec suivi sur 3 mois
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Clonage Vocal Multilingue :</span> reproduction de
                la voix du Client dans plus de 10 langues, incluant les langues locales africaines
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Abonnements de contenu :</span> production régulière
                de contenu vidéo via l&apos;avatar du Client (formules Bronze, Silver, Gold)
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">ABS Académie :</span> programmes de formation en
                prompt engineering, branding IA et maîtrise des outils d&apos;IA
              </li>
            </ul>
            <p className="mt-3">
              Le détail de chaque service, ses caractéristiques et ses livrables sont définis dans le devis
              ou la proposition commerciale acceptée par le Client.
            </p>
          </section>

          {/* Commandes */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              3. Commandes
            </h2>
            <p className="mb-3">
              Toute commande de services est formalisée par l&apos;une des modalités suivantes :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>Signature d&apos;un devis ou d&apos;une proposition commerciale</li>
              <li>Validation d&apos;une commande en ligne sur le site abscorporation.com</li>
              <li>Confirmation écrite par email</li>
            </ul>
            <p className="mt-3">
              La commande est considérée comme ferme et définitive après réception du paiement initial
              (acompte ou paiement intégral selon les modalités convenues). ABS Corporation™ se réserve le
              droit de refuser toute commande pour un motif légitime, notamment en cas d&apos;utilisation
              contraire à l&apos;éthique des services demandés.
            </p>
          </section>

          {/* Tarifs et paiement */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              4. Tarifs et paiement
            </h2>
            <p className="mb-3">
              Les tarifs des services sont indiqués en Francs CFA (FCFA) et sont consultables sur notre page{" "}
              <Link href="/tarifs" className="text-[#5B21B6] hover:underline">
                Tarifs
              </Link>
              . Les prix sont exprimés hors taxes et peuvent être soumis à la TVA applicable.
            </p>
            <p className="mb-3">
              ABS Corporation™ se réserve le droit de modifier ses tarifs à tout moment. Les tarifs
              applicables sont ceux en vigueur au jour de la commande.
            </p>
            <p className="mb-3 text-[#1F2937] font-semibold">Modalités de paiement :</p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Pack EMPREINTE :</span> paiement intégral à la
                commande
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Abonnements :</span> paiement mensuel par
                prélèvement automatique ou virement bancaire, dû en début de chaque période
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Packs premium :</span> 50% à la commande, 50% à la
                livraison des livrables finaux
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Formations :</span> paiement intégral avant le début
                de la formation
              </li>
            </ul>
            <p className="mt-3">
              Les moyens de paiement acceptés incluent : virement bancaire, mobile money (Flooz, T-Money),
              paiement en ligne sécurisé. Tout retard de paiement entraîne de plein droit l&apos;application
              de pénalités de retard calculées au taux légal en vigueur.
            </p>
          </section>

          {/* Livraison */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              5. Livraison des services
            </h2>
            <p className="mb-3">Les délais de livraison indicatifs sont les suivants :</p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>
                <span className="text-[#1F2937] font-semibold">Avatar System™ :</span> 72 heures après la session
                de captation
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Clonage Vocal Multilingue :</span> 48 heures après
                réception des fichiers audio
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Branding IA 360° :</span> 2 semaines à compter de la
                validation du brief créatif
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Ambassadeur Immortel™ :</span> 4 semaines pour le
                déploiement initial, suivi de 3 mois d&apos;accompagnement
              </li>
              <li>
                <span className="text-[#1F2937] font-semibold">Abonnements contenu :</span> selon la fréquence
                définie dans la formule choisie (2 à 5 vidéos par semaine)
              </li>
            </ul>
            <p className="mt-3">
              Les livrables sont transmis via un canal sécurisé ou directement déployés sur les plateformes
              du Client selon les modalités convenues. Tout retard de livraison ne donne pas droit à
              annulation sauf si le retard excède 30 jours ouvrés.
            </p>
          </section>

          {/* Droit de rétractation */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              6. Droit de rétractation
            </h2>
            <p className="mb-3">
              Conformément à la réglementation en vigueur, le Client consommateur dispose d&apos;un délai de
              14 jours calendaires à compter de la conclusion du contrat pour exercer son droit de
              rétractation, sans avoir à justifier de motif ni à payer de pénalité.
            </p>
            <p className="mb-3">
              Toutefois, le droit de rétractation ne peut être exercé pour les services pleinement exécutés
              avant la fin du délai de rétractation avec l&apos;accord préalable exprès du Client, notamment :
            </p>
            <ul className="space-y-2 ml-4 list-disc list-inside">
              <li>Les sessions de captation déjà réalisées</li>
              <li>Les avatars dont la création a été entamée ou finalisée</li>
              <li>Les formations déjà commencées</li>
            </ul>
            <p className="mt-3">
              Pour exercer votre droit de rétractation, envoyez votre demande par email à{" "}
              <a href="mailto:contact@abscorporation.com" className="text-[#5B21B6] hover:underline">
                contact@abscorporation.com
              </a>{" "}
              avant l&apos;expiration du délai. Le remboursement sera effectué dans un délai de 14 jours
              suivant la réception de la demande.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              7. Responsabilité
            </h2>
            <p className="mb-3">
              ABS Corporation™ s&apos;engage à exécuter les services commandés avec diligence et
              professionnalisme, dans le respect des règles de l&apos;art et de notre{" "}
              <Link href="/legal/charte-souverainete" className="text-[#5B21B6] hover:underline">
                Charte de Souveraineté Numérique
              </Link>
              .
            </p>
            <p className="mb-3">
              L&apos;obligation du Prestataire est une obligation de moyens. ABS Corporation™ ne saurait
              être tenue responsable des résultats commerciaux obtenus par le Client grâce à l&apos;utilisation
              de son avatar ou de ses services de branding.
            </p>
            <p>
              La responsabilité d&apos;ABS Corporation™ est limitée au montant des sommes effectivement
              perçues au titre du contrat concerné. En aucun cas, ABS Corporation™ ne pourra être tenue
              responsable des dommages indirects, tels que la perte de chiffre d&apos;affaires, la perte de
              données ou le préjudice d&apos;image.
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              8. Propriété intellectuelle
            </h2>
            <p className="mb-3">
              Conformément à notre Charte de Souveraineté Numérique, le Client reste le propriétaire
              exclusif de son identité numérique, incluant son avatar, sa voix clonée et l&apos;ensemble
              des contenus produits à partir de ses données biométriques.
            </p>
            <p className="mb-3">
              ABS Corporation™ conserve la propriété intellectuelle de ses technologies, méthodologies,
              outils propriétaires et savoir-faire, notamment l&apos;Avatar System™, l&apos;Identité Vault
              et les processus de création.
            </p>
            <p>
              Le Client accorde à ABS Corporation™ le droit de mentionner la collaboration dans ses
              références commerciales, sauf opposition écrite du Client. Toute utilisation de l&apos;avatar
              du Client à des fins promotionnelles par ABS Corporation™ nécessite l&apos;accord préalable et
              écrit du Client.
            </p>
          </section>

          {/* Confidentialité */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              9. Confidentialité
            </h2>
            <p>
              Chacune des parties s&apos;engage à maintenir confidentielles les informations et documents
              concernant l&apos;autre partie, quelle que soit leur nature, auxquels elle aurait pu avoir
              accès au cours de l&apos;exécution du contrat. Cette obligation de confidentialité subsiste
              pendant une durée de 5 ans après la fin du contrat. Pour plus de détails, consultez notre{" "}
              <Link href="/legal/confidentialite" className="text-[#5B21B6] hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          {/* Résiliation */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              10. Résiliation
            </h2>
            <p className="mb-3">
              <span className="text-[#1F2937] font-semibold">Abonnements :</span> le Client peut résilier son
              abonnement à tout moment avec un préavis de 30 jours avant la prochaine date de facturation.
              La résiliation prend effet à la fin de la période en cours déjà payée.
            </p>
            <p className="mb-3">
              <span className="text-[#1F2937] font-semibold">Projets ponctuels :</span> en cas de résiliation
              anticipée par le Client, les sommes déjà versées restent acquises au Prestataire au prorata
              du travail réalisé. Les livrables produits restent la propriété du Client.
            </p>
            <p>
              En cas de manquement grave de l&apos;une des parties à ses obligations contractuelles, l&apos;autre
              partie peut résilier le contrat de plein droit après mise en demeure restée infructueuse
              pendant 15 jours.
            </p>
          </section>

          {/* Force majeure */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              11. Force majeure
            </h2>
            <p>
              Aucune des parties ne sera tenue responsable de l&apos;inexécution totale ou partielle de ses
              obligations si cette inexécution est due à un cas de force majeure tel que défini par la
              jurisprudence, incluant notamment : catastrophes naturelles, incendies, pannes de réseau
              internet ou de télécommunications, défaillance des prestataires d&apos;hébergement, actes
              gouvernementaux, grèves, et tout autre événement imprévisible, irrésistible et extérieur
              aux parties.
            </p>
          </section>

          {/* Loi applicable */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              12. Loi applicable et litiges
            </h2>
            <p className="mb-3">
              Les présentes CGV sont soumises au droit togolais. En cas de litige relatif à
              l&apos;interprétation, l&apos;exécution ou la résiliation des présentes, les parties
              s&apos;engagent à rechercher une solution amiable dans un délai de 30 jours.
            </p>
            <p>
              À défaut de résolution amiable, le litige sera porté devant les tribunaux compétents de
              Lomé, Togo, auxquels il est fait attribution exclusive de juridiction.
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
