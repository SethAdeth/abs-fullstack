/* ═══════════════════════════════════════════════════════════════
   DEMO DATA — ABS Corporation™ Backoffice
   Test data for presentation purposes
   ═══════════════════════════════════════════════════════════════ */

export type InscriptionStatus = "en_attente" | "confirmee" | "annulee";
export type DemandeStatus = "nouvelle" | "en_cours" | "traitee" | "archivee";
export type DiagnosticStatus = "planifie" | "en_cours" | "termine" | "annule";
export type CoursStatus = "actif" | "a_venir" | "termine";

export interface Client {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
  pays: string;
  dateInscription: string;
  plan: string;
  statut: "actif" | "inactif" | "prospect";
}

export interface Inscription {
  id: string;
  clientId: string;
  clientNom: string;
  formation: string;
  date: string;
  statut: InscriptionStatus;
  montant: number;
  modePaiement: string;
}

export interface Cours {
  id: string;
  titre: string;
  formateur: string;
  dateDebut: string;
  dateFin: string;
  format: string;
  places: number;
  inscrits: number;
  statut: CoursStatus;
}

export interface Demande {
  id: string;
  clientNom: string;
  email: string;
  type: string;
  sujet: string;
  message: string;
  date: string;
  statut: DemandeStatus;
  priorite: "haute" | "moyenne" | "basse";
}

export interface Diagnostic {
  id: string;
  clientNom: string;
  entreprise: string;
  email: string;
  telephone: string;
  dateRdv: string;
  heureRdv: string;
  statut: DiagnosticStatus;
  notes: string;
  typeService: string;
}

export interface Message {
  id: string;
  nom: string;
  email: string;
  sujet: string;
  message: string;
  date: string;
  lu: boolean;
  repondu: boolean;
}

// ── Clients ──
export const DEMO_CLIENTS: Client[] = [
  {
    id: "CLT-001",
    nom: "Diallo",
    prenom: "Amadou",
    email: "amadou.diallo@techcorp.sn",
    telephone: "+221 77 123 4567",
    entreprise: "TechCorp Sénégal",
    pays: "Sénégal",
    dateInscription: "2025-01-15",
    plan: "Gold",
    statut: "actif",
  },
  {
    id: "CLT-002",
    nom: "Ouedraogo",
    prenom: "Fatima",
    email: "fatima.ouedraogo@coachbiz.bf",
    telephone: "+226 70 234 5678",
    entreprise: "CoachBiz Academy",
    pays: "Burkina Faso",
    dateInscription: "2025-01-20",
    plan: "Silver",
    statut: "actif",
  },
  {
    id: "CLT-003",
    nom: "Mensah",
    prenom: "Jean-Paul",
    email: "jp.mensah@innovtech.tg",
    telephone: "+228 90 345 6789",
    entreprise: "InnovTech Togo",
    pays: "Togo",
    dateInscription: "2025-02-01",
    plan: "Bronze",
    statut: "actif",
  },
  {
    id: "CLT-004",
    nom: "Kouamé",
    prenom: "Aya",
    email: "aya.kouame@groupeelite.ci",
    telephone: "+225 07 456 7890",
    entreprise: "Groupe Élite CI",
    pays: "Côte d'Ivoire",
    dateInscription: "2025-02-10",
    plan: "Gold",
    statut: "actif",
  },
  {
    id: "CLT-005",
    nom: "Adeyemi",
    prenom: "Oluwaseun",
    email: "oluwaseun@lagosdigital.ng",
    telephone: "+234 80 567 8901",
    entreprise: "Lagos Digital Hub",
    pays: "Nigeria",
    dateInscription: "2025-02-15",
    plan: "Silver",
    statut: "actif",
  },
  {
    id: "CLT-006",
    nom: "Ndong",
    prenom: "Pierre",
    email: "pierre.ndong@ministere.ga",
    telephone: "+241 66 678 9012",
    entreprise: "Ministère Communication",
    pays: "Gabon",
    dateInscription: "2025-02-20",
    plan: "Gold",
    statut: "actif",
  },
  {
    id: "CLT-007",
    nom: "Traoré",
    prenom: "Ibrahim",
    email: "ibrahim.traore@bamako.ml",
    telephone: "+223 76 789 0123",
    entreprise: "Bamako Invest",
    pays: "Mali",
    dateInscription: "2025-03-01",
    plan: "Bronze",
    statut: "prospect",
  },
  {
    id: "CLT-008",
    nom: "Zinsou",
    prenom: "Marie-Claire",
    email: "mc.zinsou@benincom.bj",
    telephone: "+229 97 890 1234",
    entreprise: "BéninCom Agency",
    pays: "Bénin",
    dateInscription: "2025-03-05",
    plan: "Silver",
    statut: "prospect",
  },
];

// ── Inscriptions ──
export const DEMO_INSCRIPTIONS: Inscription[] = [
  {
    id: "INS-001",
    clientId: "CLT-001",
    clientNom: "Amadou Diallo",
    formation: "Prompt Engineering Avancé",
    date: "2025-03-15",
    statut: "confirmee",
    montant: 250000,
    modePaiement: "Wave",
  },
  {
    id: "INS-002",
    clientId: "CLT-002",
    clientNom: "Fatima Ouedraogo",
    formation: "Branding IA pour Leaders",
    date: "2025-03-20",
    statut: "confirmee",
    montant: 350000,
    modePaiement: "Orange Money",
  },
  {
    id: "INS-003",
    clientId: "CLT-003",
    clientNom: "Jean-Paul Mensah",
    formation: "Maîtrise des Outils IA",
    date: "2025-04-01",
    statut: "en_attente",
    montant: 200000,
    modePaiement: "Virement",
  },
  {
    id: "INS-004",
    clientId: "CLT-004",
    clientNom: "Aya Kouamé",
    formation: "Prompt Engineering Avancé",
    date: "2025-04-05",
    statut: "confirmee",
    montant: 250000,
    modePaiement: "FedaPay",
  },
  {
    id: "INS-005",
    clientId: "CLT-005",
    clientNom: "Oluwaseun Adeyemi",
    formation: "Formation Équipes Marketing",
    date: "2025-04-10",
    statut: "en_attente",
    montant: 500000,
    modePaiement: "Virement",
  },
  {
    id: "INS-006",
    clientId: "CLT-007",
    clientNom: "Ibrahim Traoré",
    formation: "Branding IA pour Leaders",
    date: "2025-04-15",
    statut: "annulee",
    montant: 350000,
    modePaiement: "MTN MoMo",
  },
];

// ── Cours ──
export const DEMO_COURS: Cours[] = [
  {
    id: "CRS-001",
    titre: "Prompt Engineering Avancé — Session Mars",
    formateur: "Aimé Kook",
    dateDebut: "2025-03-15",
    dateFin: "2025-04-12",
    format: "Hybride",
    places: 20,
    inscrits: 18,
    statut: "actif",
  },
  {
    id: "CRS-002",
    titre: "Branding IA pour Leaders — Session Avril",
    formateur: "Raphael Sossoe",
    dateDebut: "2025-04-01",
    dateFin: "2025-05-13",
    format: "Présentiel",
    places: 15,
    inscrits: 12,
    statut: "a_venir",
  },
  {
    id: "CRS-003",
    titre: "Maîtrise des Outils IA — Atelier Intensif",
    formateur: "Aimé Kook",
    dateDebut: "2025-04-15",
    dateFin: "2025-05-06",
    format: "Présentiel",
    places: 12,
    inscrits: 8,
    statut: "a_venir",
  },
  {
    id: "CRS-004",
    titre: "Formation Équipes Marketing — TechCorp",
    formateur: "Équipe Forge",
    dateDebut: "2025-02-01",
    dateFin: "2025-02-28",
    format: "Sur-mesure",
    places: 10,
    inscrits: 10,
    statut: "termine",
  },
  {
    id: "CRS-005",
    titre: "Prompt Engineering Avancé — Session Février",
    formateur: "Aimé Kook",
    dateDebut: "2025-02-10",
    dateFin: "2025-03-10",
    format: "Distanciel",
    places: 25,
    inscrits: 22,
    statut: "termine",
  },
];

// ── Demandes ──
export const DEMO_DEMANDES: Demande[] = [
  {
    id: "DEM-001",
    clientNom: "Amadou Diallo",
    email: "amadou.diallo@techcorp.sn",
    type: "Avatar System",
    sujet: "Création avatar multilingue",
    message: "Je souhaite créer un avatar capable de s'exprimer en français, anglais et wolof pour mes communications LinkedIn et YouTube.",
    date: "2025-03-08",
    statut: "en_cours",
    priorite: "haute",
  },
  {
    id: "DEM-002",
    clientNom: "Aya Kouamé",
    email: "aya.kouame@groupeelite.ci",
    type: "Ambassadeur Immortel",
    sujet: "Pack complet pour groupe d'entreprises",
    message: "Notre groupe souhaite déployer l'Ambassadeur Immortel pour nos 3 dirigeants principaux. Pouvons-nous avoir un devis groupé ?",
    date: "2025-03-07",
    statut: "nouvelle",
    priorite: "haute",
  },
  {
    id: "DEM-003",
    clientNom: "Pierre Ndong",
    email: "pierre.ndong@ministere.ga",
    type: "Branding 360°",
    sujet: "Refonte image institutionnelle",
    message: "Le ministère souhaite moderniser sa communication digitale. Nous cherchons une refonte complète de notre identité numérique avec intégration d'avatars IA pour les communications officielles.",
    date: "2025-03-06",
    statut: "en_cours",
    priorite: "haute",
  },
  {
    id: "DEM-004",
    clientNom: "Marie-Claire Zinsou",
    email: "mc.zinsou@benincom.bj",
    type: "Clonage Vocal",
    sujet: "Clonage vocal pour podcast",
    message: "Je produis un podcast hebdomadaire et j'aimerais cloner ma voix pour produire des versions en fon et yoruba de mes épisodes.",
    date: "2025-03-05",
    statut: "nouvelle",
    priorite: "moyenne",
  },
  {
    id: "DEM-005",
    clientNom: "Ibrahim Traoré",
    email: "ibrahim.traore@bamako.ml",
    type: "Avatar System",
    sujet: "Démonstration avatar",
    message: "Avant de m'engager, je souhaiterais voir une démonstration personnalisée de l'Avatar System avec un échantillon de ma voix.",
    date: "2025-03-04",
    statut: "traitee",
    priorite: "basse",
  },
  {
    id: "DEM-006",
    clientNom: "Fatima Ouedraogo",
    email: "fatima.ouedraogo@coachbiz.bf",
    type: "Formation",
    sujet: "Formation équipe en branding IA",
    message: "Mon équipe de 5 personnes aimerait suivre la formation Branding IA. Est-il possible d'organiser une session privée ?",
    date: "2025-03-03",
    statut: "traitee",
    priorite: "moyenne",
  },
];

// ── Diagnostics ──
export const DEMO_DIAGNOSTICS: Diagnostic[] = [
  {
    id: "DIAG-001",
    clientNom: "Amadou Diallo",
    entreprise: "TechCorp Sénégal",
    email: "amadou.diallo@techcorp.sn",
    telephone: "+221 77 123 4567",
    dateRdv: "2025-03-12",
    heureRdv: "10:00",
    statut: "planifie",
    notes: "CEO tech — intéressé par Avatar System + Clonage Vocal multilingue. Budget conséquent.",
    typeService: "Avatar System",
  },
  {
    id: "DIAG-002",
    clientNom: "Aya Kouamé",
    entreprise: "Groupe Élite CI",
    email: "aya.kouame@groupeelite.ci",
    telephone: "+225 07 456 7890",
    dateRdv: "2025-03-13",
    heureRdv: "14:00",
    statut: "planifie",
    notes: "DG groupe hôtelier — projet Ambassadeur Immortel pour 3 dirigeants. Prospect VIP.",
    typeService: "Ambassadeur Immortel",
  },
  {
    id: "DIAG-003",
    clientNom: "Oluwaseun Adeyemi",
    entreprise: "Lagos Digital Hub",
    email: "oluwaseun@lagosdigital.ng",
    telephone: "+234 80 567 8901",
    dateRdv: "2025-03-10",
    heureRdv: "11:00",
    statut: "en_cours",
    notes: "Fondateur incubateur tech Lagos — veut clonage vocal en yoruba et anglais.",
    typeService: "Clonage Vocal",
  },
  {
    id: "DIAG-004",
    clientNom: "Pierre Ndong",
    entreprise: "Ministère Communication",
    email: "pierre.ndong@ministere.ga",
    telephone: "+241 66 678 9012",
    dateRdv: "2025-03-05",
    heureRdv: "09:00",
    statut: "termine",
    notes: "Audit complet réalisé. Proposition envoyée pour refonte identité numérique. Budget validé.",
    typeService: "Branding 360°",
  },
  {
    id: "DIAG-005",
    clientNom: "Ibrahim Traoré",
    entreprise: "Bamako Invest",
    email: "ibrahim.traore@bamako.ml",
    telephone: "+223 76 789 0123",
    dateRdv: "2025-03-03",
    heureRdv: "15:00",
    statut: "termine",
    notes: "Diagnostic terminé. Client intéressé mais budget limité. Orienté vers Pack Empreinte.",
    typeService: "Avatar System",
  },
];

// ── Messages (Contact Form) ──
export const DEMO_MESSAGES: Message[] = [
  {
    id: "MSG-001",
    nom: "Seydou Konaté",
    email: "seydou.konate@gmail.com",
    sujet: "Demande d'information sur les tarifs",
    message: "Bonjour, je suis entrepreneur à Abidjan et je souhaiterais connaître vos tarifs pour la création d'un avatar IA professionnel. Merci.",
    date: "2025-03-09",
    lu: false,
    repondu: false,
  },
  {
    id: "MSG-002",
    nom: "Aïcha Bamba",
    email: "aicha.bamba@yahoo.fr",
    sujet: "Partenariat potentiel",
    message: "Je dirige une agence de communication à Dakar et je serais intéressée par un partenariat pour proposer vos services à nos clients. Pouvons-nous en discuter ?",
    date: "2025-03-08",
    lu: true,
    repondu: false,
  },
  {
    id: "MSG-003",
    nom: "Emmanuel Agbodjan",
    email: "e.agbodjan@university.tg",
    sujet: "Intervention conférence IA",
    message: "Nous organisons une conférence sur l'IA et l'entrepreneuriat en Afrique à l'Université de Lomé. Seriez-vous disponible pour intervenir en tant qu'expert en Digital Human Branding ?",
    date: "2025-03-07",
    lu: true,
    repondu: true,
  },
  {
    id: "MSG-004",
    nom: "Christelle Fotso",
    email: "christelle.fotso@douala-business.cm",
    sujet: "Formation sur-mesure pour notre équipe",
    message: "Notre entreprise de 25 employés souhaite former son département marketing aux outils IA. Proposez-vous des formations intra-entreprise au Cameroun ?",
    date: "2025-03-06",
    lu: true,
    repondu: true,
  },
  {
    id: "MSG-005",
    nom: "Moussa Diakité",
    email: "moussa.d@conakry.gn",
    sujet: "Clonage vocal en soussou",
    message: "Est-il possible de cloner ma voix en langue soussou ? Je suis un homme politique guinéen et je souhaite communiquer dans les langues locales via mon avatar.",
    date: "2025-03-05",
    lu: false,
    repondu: false,
  },
];

// ── Stats Dashboard ──
export const DASHBOARD_STATS = {
  totalClients: 8,
  clientsActifs: 6,
  revenuMensuel: 3_850_000,
  revenuPrecedent: 3_200_000,
  inscriptionsEnCours: 4,
  diagnosticsPlanifies: 2,
  demandesNouvelles: 2,
  messagesNonLus: 2,
  tauxConversion: 75,
  tauxSatisfaction: 98,
};

export const REVENUE_CHART_DATA = [
  { mois: "Oct", montant: 1_800_000 },
  { mois: "Nov", montant: 2_400_000 },
  { mois: "Déc", montant: 2_100_000 },
  { mois: "Jan", montant: 2_900_000 },
  { mois: "Fév", montant: 3_200_000 },
  { mois: "Mar", montant: 3_850_000 },
];

export const SERVICE_DISTRIBUTION = [
  { service: "Avatar System", pourcentage: 40, couleur: "#5B21B6" },
  { service: "Branding 360°", pourcentage: 25, couleur: "#7C3AED" },
  { service: "Ambassadeur Immortel", pourcentage: 20, couleur: "#4C1D95" },
  { service: "Clonage Vocal", pourcentage: 15, couleur: "#6D28D9" },
];
