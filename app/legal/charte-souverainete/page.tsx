import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Charte de Souveraineté Numérique",
  description:
    "Charte de Souveraineté Numérique d'ABS Corporation. Notre engagement pour la protection, la transparence et l'éthique dans la création d'identités numériques IA.",
};

export default function CharteSouverainetePage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="container-abs max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8">
          <Link href="/" className="hover:text-[#5B21B6] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B21B6]">Charte de Souveraineté Numérique</span>
        </nav>

        {/* Premium Container with Violet Border */}
        <div className="border border-[#5B21B6]/30 rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[#F5F3FF]/50 to-[#FFFFFF]/50 relative overflow-hidden">
          {/* Decorative violet corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#5B21B6]/40 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#5B21B6]/40 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#5B21B6]/40 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#5B21B6]/40 rounded-br-2xl" />

          {/* Shield Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#5B21B6]/10 flex items-center justify-center">
              <Shield className="w-10 h-10 text-[#5B21B6]" />
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4 text-center"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Charte de Souveraineté Numérique
          </h1>

          <p
            className="text-center text-[#5B21B6] text-lg mb-12"
            style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
          >
            ABS Corporation™ -- Avatar Branding System Corporation
          </p>

          {/* Content */}
          <div className="space-y-10 text-[#6B7280] text-base leading-relaxed">
            {/* Préambule */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#5B21B6] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Préambule
              </h2>
              <p className="mb-3">
                ABS Corporation™ (Avatar Branding System Corporation), en sa qualité de premier cabinet
                africain de Digital Human Branding, s&apos;engage solennellement à respecter et à faire
                respecter les principes fondamentaux de souveraineté numérique énoncés dans la présente
                charte.
              </p>
              <p className="mb-3">
                Dans un monde où l&apos;intelligence artificielle permet désormais de reproduire
                fidèlement l&apos;apparence, la voix et les expressions d&apos;un individu, la protection
                de l&apos;identité numérique n&apos;est plus une option mais un impératif éthique.
              </p>
              <p>
                Cette charte constitue le socle de notre engagement envers chaque client, partenaire et
                utilisateur. Elle est contraignante pour l&apos;ensemble des collaborateurs, prestataires
                et partenaires d&apos;ABS Corporation™ et fait partie intégrante de nos contrats de
                service.
              </p>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#5B21B6]/30 to-transparent" />

            {/* Article 1 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 1 — Propriété de l&apos;Identité Numérique
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">Le client reste le propriétaire exclusif
                et inaliénable de son identité numérique.</span>
              </p>
              <p className="mb-3">
                L&apos;avatar créé par ABS Corporation™ -- qu&apos;il s&apos;agisse du modèle facial,
                du clone vocal, des expressions gestuelles captées ou de tout contenu dérivé -- appartient
                intégralement et exclusivement au client qui en est l&apos;origine biométrique.
              </p>
              <p className="mb-3">
                ABS Corporation™ agit en qualité de prestataire technique et créatif. À aucun moment,
                ABS Corporation™ ne revendique la propriété des données biométriques, des modèles
                entraînés ou des contenus produits à partir de l&apos;identité du client.
              </p>
              <p>
                Le client dispose d&apos;un droit total de contrôle sur l&apos;utilisation, la diffusion,
                la modification et la suppression de son identité numérique, dans le respect des
                conditions contractuelles convenues.
              </p>
            </section>

            {/* Article 2 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 2 — Consentement Éclairé
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">Aucun avatar ne sera créé sans le
                consentement explicite, libre et éclairé du client.</span>
              </p>
              <p className="mb-3">
                Avant toute session de captation, le client reçoit une information complète et
                transparente sur :
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside mb-3">
                <li>La nature exacte des données biométriques qui seront collectées</li>
                <li>Les technologies utilisées pour créer l&apos;avatar (modèles IA, API, processus)</li>
                <li>Les finalités précises de l&apos;utilisation de l&apos;avatar</li>
                <li>Les mesures de sécurité mises en place pour protéger ses données</li>
                <li>Ses droits en matière de modification, de limitation et de suppression</li>
                <li>Les conditions de conservation et de stockage de ses données</li>
              </ul>
              <p>
                Le consentement est recueilli par écrit (formulaire dédié) avant le début de toute
                captation. Le client peut retirer son consentement à tout moment, entraînant la cessation
                de l&apos;utilisation de son avatar et la suppression de ses données conformément à
                l&apos;Article 5 de la présente charte.
              </p>
            </section>

            {/* Article 3 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 3 — Transparence
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">Tout contenu généré par intelligence
                artificielle est identifié comme tel.</span>
              </p>
              <p className="mb-3">
                ABS Corporation™ s&apos;engage à ce que chaque vidéo, audio ou contenu produit via ses
                technologies d&apos;avatar IA porte la mention visible :
              </p>
              <div className="bg-[#F5F3FF] border border-[#5B21B6]/20 rounded-lg p-4 my-4 text-center">
                <span
                  className="text-[#5B21B6] font-bold text-lg"
                  style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
                >
                  &laquo; Verified by ABS Corp™ &raquo;
                </span>
              </div>
              <p className="mb-3">
                Ce watermark garantit l&apos;authenticité de l&apos;origine du contenu et permet à toute
                personne de vérifier qu&apos;il s&apos;agit d&apos;un contenu produit par une IA de
                manière éthique et autorisée.
              </p>
              <p>
                ABS Corporation™ s&apos;oppose fermement à toute utilisation de ses technologies à des
                fins de tromperie, de désinformation ou de manipulation. La transparence n&apos;est pas
                négociable.
              </p>
            </section>

            {/* Article 4 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 4 — Sécurité des Données
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">Les données biométriques du client sont
                protégées par notre système Identité Vault.</span>
              </p>
              <p className="mb-3">
                L&apos;Identité Vault est l&apos;infrastructure de sécurité propriétaire d&apos;ABS
                Corporation™, spécifiquement conçue pour la protection des identités numériques. Elle
                comprend :
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside mb-3">
                <li>
                  <span className="text-[#1F2937] font-semibold">Chiffrement de bout en bout :</span> toutes
                  les données biométriques (visages, voix, modèles entraînés) sont chiffrées en transit
                  et au repos avec des algorithmes de chiffrement de niveau bancaire
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Accès restreint :</span> seuls les techniciens
                  habilités et authentifiés peuvent accéder aux données du client, et uniquement dans le
                  cadre de la prestation convenue
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Isolation des données :</span> chaque client
                  dispose d&apos;un espace de stockage isolé, empêchant tout croisement ou mélange de données
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Journalisation des accès :</span> chaque accès
                  aux données est tracé et auditable, garantissant une traçabilité complète
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Sauvegardes sécurisées :</span> les données
                  sont sauvegardées de manière redondante et sécurisée pour prévenir toute perte
                </li>
                <li>
                  <span className="text-[#1F2937] font-semibold">Audits réguliers :</span> des audits de
                  sécurité sont conduits régulièrement pour identifier et corriger toute vulnérabilité
                </li>
              </ul>
              <p>
                ABS Corporation™ s&apos;engage à notifier le client dans un délai de 72 heures en cas
                d&apos;incident de sécurité pouvant affecter ses données personnelles.
              </p>
            </section>

            {/* Article 5 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 5 — Droit à l&apos;Oubli Numérique
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">Le client peut demander la suppression
                complète et irréversible de son identité numérique à tout moment.</span>
              </p>
              <p className="mb-3">
                Sur simple demande écrite du client, ABS Corporation™ s&apos;engage à procéder à la
                suppression totale et définitive de :
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside mb-3">
                <li>L&apos;ensemble des données biométriques captées (visage, voix, gestuelle)</li>
                <li>Tous les modèles IA entraînés à partir de ces données</li>
                <li>L&apos;intégralité des contenus générés (vidéos, audios, images)</li>
                <li>Toutes les sauvegardes contenant des données du client</li>
                <li>Les métadonnées et logs associés à l&apos;identité numérique du client</li>
              </ul>
              <p className="mb-3">
                Cette suppression est effectuée dans un délai maximum de 30 jours calendaires à compter
                de la réception de la demande. Un certificat de suppression est délivré au client à
                l&apos;issue de la procédure.
              </p>
              <p>
                Les seules données pouvant être conservées après suppression sont celles nécessaires au
                respect des obligations légales (données de facturation, archives légales) et elles seront
                traitées conformément à notre{" "}
                <Link href="/legal/confidentialite" className="text-[#5B21B6] hover:underline">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </section>

            {/* Article 6 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 6 — Non-Détournement
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">ABS Corporation™ ne détournera jamais
                les actifs numériques du client à des fins non autorisées.</span>
              </p>
              <p className="mb-3">
                ABS Corporation™ s&apos;interdit formellement de :
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside mb-3">
                <li>
                  Utiliser l&apos;avatar, la voix clonée ou toute donnée biométrique du client à des
                  fins autres que celles expressément convenues dans le contrat de service
                </li>
                <li>
                  Vendre, louer, prêter ou transférer les données biométriques ou les modèles IA du
                  client à des tiers, quelles que soient les circonstances
                </li>
                <li>
                  Utiliser les données du client pour entraîner des modèles IA génériques ou destinés
                  à d&apos;autres clients
                </li>
                <li>
                  Exploiter l&apos;image du client à des fins promotionnelles sans son accord préalable
                  et écrit
                </li>
                <li>
                  Créer des contenus au nom du client sans son autorisation explicite pour chaque
                  production
                </li>
              </ul>
              <p>
                Toute violation de cet article par un collaborateur ou un prestataire d&apos;ABS
                Corporation™ entraîne des sanctions disciplinaires immédiates et peut donner lieu à des
                poursuites judiciaires.
              </p>
            </section>

            {/* Article 7 */}
            <section>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Article 7 — Évolution Éthique
              </h2>
              <p className="mb-3">
                <span className="text-[#5B21B6] font-semibold">ABS Corporation™ s&apos;engage à faire
                évoluer ses standards éthiques au rythme des avancées technologiques.</span>
              </p>
              <p className="mb-3">
                L&apos;intelligence artificielle évolue à une vitesse sans précédent. ABS Corporation™
                reconnaît que les enjeux éthiques liés à l&apos;identité numérique sont en constante
                mutation et s&apos;engage à :
              </p>
              <ul className="space-y-2 ml-4 list-disc list-inside mb-3">
                <li>
                  Réviser annuellement la présente charte pour intégrer les nouvelles bonnes pratiques
                  et répondre aux défis émergents
                </li>
                <li>
                  Participer activement aux débats et initiatives sur l&apos;éthique de l&apos;IA en
                  Afrique et à l&apos;international
                </li>
                <li>
                  Former continuellement ses équipes aux enjeux éthiques de l&apos;intelligence
                  artificielle et de l&apos;identité numérique
                </li>
                <li>
                  Collaborer avec les autorités de régulation et les organismes de normalisation pour
                  contribuer à l&apos;élaboration de standards responsables
                </li>
                <li>
                  Informer ses clients de toute évolution significative de ses pratiques éthiques et
                  de la présente charte
                </li>
                <li>
                  Maintenir un dialogue ouvert avec la société civile sur l&apos;impact social de ses
                  technologies
                </li>
              </ul>
              <p>
                ABS Corporation™ aspire à être un modèle de référence en matière d&apos;éthique IA sur
                le continent africain et au-delà, prouvant que innovation technologique et responsabilité
                peuvent avancer main dans la main.
              </p>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#5B21B6]/30 to-transparent" />

            {/* Signature Area */}
            <section className="text-center pt-4">
              <p
                className="text-2xl font-bold text-gradient-gold mb-2"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                ABS Corporation™
              </p>
              <p
                className="text-[#6B7280] text-sm mb-6"
                style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
              >
                Avatar Branding System Corporation
              </p>

              {/* Violet Divider */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#5B21B6]" />
                <div className="w-2 h-2 rounded-full bg-[#5B21B6]" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#5B21B6]" />
              </div>

              <p className="text-sm text-[#9CA3AF]">
                Charte adoptée et effective depuis Janvier 2025
              </p>
              <p className="text-sm text-[#9CA3AF] mt-1">
                Lomé, Togo
              </p>
            </section>
          </div>
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
