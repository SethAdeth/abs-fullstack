"use client";

import { useState, useMemo } from "react";
import {
  Inbox,
  Sparkles,
  Clock,
  CheckCircle2,
  Archive,
  Search,
  Mail,
  CalendarDays,
  MessageSquareText,
} from "lucide-react";
import { DEMO_DEMANDES, type DemandeStatus } from "@/lib/demo-data";

/* ═══════════════════════════════════════════════════════════════
   TYPES & CONFIG
   ═══════════════════════════════════════════════════════════════ */

type FilterTab = "toutes" | DemandeStatus;

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "toutes", label: "Toutes" },
  { key: "nouvelle", label: "Nouvelles" },
  { key: "en_cours", label: "En cours" },
  { key: "traitee", label: "Traitees" },
  { key: "archivee", label: "Archivees" },
];

const STATUS_CONFIG: Record<
  DemandeStatus,
  { label: string; bg: string; text: string; border: string }
> = {
  nouvelle: {
    label: "Nouvelle",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  en_cours: {
    label: "En cours",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  traitee: {
    label: "Traitee",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  archivee: {
    label: "Archivee",
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
  },
};

const PRIORITE_CONFIG: Record<
  "haute" | "moyenne" | "basse",
  { color: string; label: string }
> = {
  haute: { color: "bg-red-500", label: "Haute" },
  moyenne: { color: "bg-amber-500", label: "Moyenne" },
  basse: { color: "bg-emerald-500", label: "Basse" },
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ═══════════════════════════════════════════════════════════════
   STAT CARD
   ═══════════════════════════════════════════════════════════════ */

function StatCard({
  icon: Icon,
  label,
  value,
  lightBg,
  textColor,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  lightBg: string;
  textColor: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div
        className={`w-12 h-12 ${lightBg} rounded-xl flex items-center justify-center`}
      >
        <Icon size={22} className={textColor} />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1F2937]">{value}</p>
        <p className="text-xs text-[#6B7280] font-medium">{label}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DEMANDE CARD
   ═══════════════════════════════════════════════════════════════ */

function DemandeCard({
  demande,
}: {
  demande: (typeof DEMO_DEMANDES)[number];
}) {
  const statusConf = STATUS_CONFIG[demande.statut];
  const prioriteConf = PRIORITE_CONFIG[demande.priorite];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Top row: priority dot + client info + type badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          {/* Priority indicator */}
          <div className="pt-1.5 shrink-0" title={`Priorite ${prioriteConf.label}`}>
            <span
              className={`block w-2.5 h-2.5 rounded-full ${prioriteConf.color}`}
            />
          </div>

          {/* Client name & email */}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#1F2937] truncate">
              {demande.clientNom}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Mail size={12} className="text-[#9CA3AF] shrink-0" />
              <p className="text-xs text-[#6B7280] truncate">{demande.email}</p>
            </div>
          </div>
        </div>

        {/* Type badge */}
        <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#5B21B6]/10 text-[#5B21B6] border border-[#5B21B6]/20">
          {demande.type}
        </span>
      </div>

      {/* Subject */}
      <p className="text-sm font-bold text-[#1F2937] mb-1.5">{demande.sujet}</p>

      {/* Message preview */}
      <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
        {demande.message}
      </p>

      {/* Footer: date + status */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
          <CalendarDays size={13} className="shrink-0" />
          <span>{formatDate(demande.date)}</span>
        </div>

        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConf.bg} ${statusConf.text} ${statusConf.border}`}
        >
          {statusConf.label}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AdminDemandesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("toutes");
  const [searchQuery, setSearchQuery] = useState("");

  /* ── Compute stats from data ── */
  const stats = useMemo(() => {
    const total = DEMO_DEMANDES.length;
    const nouvelles = DEMO_DEMANDES.filter(
      (d) => d.statut === "nouvelle"
    ).length;
    const enCours = DEMO_DEMANDES.filter(
      (d) => d.statut === "en_cours"
    ).length;
    const traitees = DEMO_DEMANDES.filter(
      (d) => d.statut === "traitee"
    ).length;
    return { total, nouvelles, enCours, traitees };
  }, []);

  /* ── Filtered & sorted demandes ── */
  const filteredDemandes = useMemo(() => {
    const result = DEMO_DEMANDES.filter((demande) => {
      // Filter by status tab
      const matchesFilter =
        activeFilter === "toutes" || demande.statut === activeFilter;

      // Filter by search query
      if (!matchesFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          demande.clientNom.toLowerCase().includes(q) ||
          demande.email.toLowerCase().includes(q) ||
          demande.type.toLowerCase().includes(q) ||
          demande.sujet.toLowerCase().includes(q) ||
          demande.message.toLowerCase().includes(q)
        );
      }

      return true;
    });

    // Sort by date descending (newest first)
    return result.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [activeFilter, searchQuery]);

  /* ── Stats cards config ── */
  const statCards = [
    {
      label: "Total demandes",
      value: stats.total,
      icon: Inbox,
      lightBg: "bg-violet-50",
      textColor: "text-[#5B21B6]",
    },
    {
      label: "Nouvelles",
      value: stats.nouvelles,
      icon: Sparkles,
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      label: "En cours",
      value: stats.enCours,
      icon: Clock,
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      label: "Traitees",
      value: stats.traitees,
      icon: CheckCircle2,
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1F2937]">
          Gestion des Demandes
        </h1>
        <p className="text-sm text-[#6B7280] mt-1">
          Consultez et traitez les demandes de services de vos clients
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <StatCard
            key={card.label}
            icon={card.icon}
            label={card.label}
            value={card.value}
            lightBg={card.lightBg}
            textColor={card.textColor}
          />
        ))}
      </div>

      {/* ── Filters & Search ── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm overflow-x-auto">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.key
                  ? "bg-[#5B21B6] text-white shadow-md shadow-[#5B21B6]/25"
                  : "text-[#6B7280] hover:text-[#1F2937] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm w-full md:w-80">
          <Search size={16} className="text-[#6B7280] shrink-0" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, sujet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-[#1F2937] placeholder:text-[#6B7280]/50 outline-none w-full"
          />
        </div>
      </div>

      {/* ── Results count ── */}
      <div className="flex items-center gap-2">
        <MessageSquareText size={16} className="text-[#5B21B6]" />
        <span className="text-sm font-semibold text-[#1F2937]">
          {filteredDemandes.length} demande
          {filteredDemandes.length !== 1 ? "s" : ""}
        </span>
        {activeFilter !== "toutes" && (
          <span className="text-xs text-[#6B7280]">
            (filtre : {FILTER_TABS.find((t) => t.key === activeFilter)?.label})
          </span>
        )}
      </div>

      {/* ── Demande Cards List ── */}
      {filteredDemandes.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredDemandes.map((demande) => (
            <DemandeCard key={demande.id} demande={demande} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 py-16 text-center shadow-sm">
          <Inbox size={40} className="mx-auto text-[#D1D5DB] mb-3" />
          <p className="text-[#6B7280] font-medium">Aucune demande trouvee</p>
          <p className="text-sm text-[#6B7280]/60 mt-1">
            Essayez de modifier vos criteres de recherche.
          </p>
        </div>
      )}
    </div>
  );
}
