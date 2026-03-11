"use client";

import { useState } from "react";
import {
  GraduationCap,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  MoreHorizontal,
  Search,
  Download,
  Filter,
  CreditCard,
} from "lucide-react";
import { DEMO_INSCRIPTIONS, type InscriptionStatus } from "@/lib/demo-data";

/* ── Filter types ── */
type FilterTab = "toutes" | InscriptionStatus;

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "toutes", label: "Toutes" },
  { key: "confirmee", label: "Confirmees" },
  { key: "en_attente", label: "En attente" },
  { key: "annulee", label: "Annulees" },
];

/* ── Status badge config ── */
const STATUS_CONFIG: Record<
  InscriptionStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  confirmee: {
    label: "Confirmee",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  en_attente: {
    label: "En attente",
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  annulee: {
    label: "Annulee",
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
  },
};

/* ── Format currency ── */
function formatFCFA(montant: number): string {
  return montant.toLocaleString("fr-FR") + " FCFA";
}

/* ── Format date ── */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function InscriptionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("toutes");
  const [searchQuery, setSearchQuery] = useState("");

  /* ── Compute stats ── */
  const stats = {
    total: DEMO_INSCRIPTIONS.length,
    confirmees: DEMO_INSCRIPTIONS.filter((i) => i.statut === "confirmee").length,
    enAttente: DEMO_INSCRIPTIONS.filter((i) => i.statut === "en_attente").length,
    annulees: DEMO_INSCRIPTIONS.filter((i) => i.statut === "annulee").length,
  };

  /* ── Filter inscriptions ── */
  const filtered = DEMO_INSCRIPTIONS.filter((ins) => {
    const matchesFilter =
      activeFilter === "toutes" || ins.statut === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      ins.clientNom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ins.formation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ins.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  /* ── Stats cards data ── */
  const statCards = [
    {
      label: "Total inscriptions",
      value: stats.total,
      icon: GraduationCap,
      color: "bg-[#5B21B6]",
      lightBg: "bg-violet-50",
      textColor: "text-[#5B21B6]",
    },
    {
      label: "Confirmees",
      value: stats.confirmees,
      icon: CheckCircle2,
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      label: "En attente",
      value: stats.enAttente,
      icon: Clock,
      color: "bg-amber-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      label: "Annulees",
      value: stats.annulees,
      icon: XCircle,
      color: "bg-red-500",
      lightBg: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1F1135]">
            Gestion des Inscriptions
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Suivez et gerez toutes les inscriptions aux formations
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B21B6] hover:bg-[#4C1D95] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5B21B6]/25">
          <Download size={16} />
          Exporter
        </button>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 ${card.lightBg} rounded-xl flex items-center justify-center`}
              >
                <Icon size={22} className={card.textColor} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1135]">{card.value}</p>
                <p className="text-xs text-[#6B7280] font-medium">{card.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Filters & Search ── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === tab.key
                  ? "bg-[#5B21B6] text-white shadow-md shadow-[#5B21B6]/25"
                  : "text-[#6B7280] hover:text-[#1F1135] hover:bg-gray-50"
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
            placeholder="Rechercher par nom, formation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-[#1F1135] placeholder:text-[#6B7280]/50 outline-none w-full"
          />
        </div>
      </div>

      {/* ── Table Card ── */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Table header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-[#5B21B6]" />
            <span className="text-sm font-semibold text-[#1F1135]">
              {filtered.length} inscription{filtered.length > 1 ? "s" : ""}
            </span>
            {activeFilter !== "toutes" && (
              <span className="text-xs text-[#6B7280]">
                (filtre : {FILTER_TABS.find((t) => t.key === activeFilter)?.label})
              </span>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-[#FAFAFE]">
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Formation
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Mode de paiement
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-16 text-center text-sm text-[#6B7280]"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <GraduationCap
                        size={40}
                        className="text-[#D1D5DB]"
                      />
                      <p>Aucune inscription trouvee</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((inscription) => {
                  const statusConf = STATUS_CONFIG[inscription.statut];
                  return (
                    <tr
                      key={inscription.id}
                      className="hover:bg-[#FAFAFE] transition-colors"
                    >
                      {/* ID */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-mono font-semibold text-[#5B21B6]">
                          {inscription.id}
                        </span>
                      </td>

                      {/* Client */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-[#1F1135]">
                          {inscription.clientNom}
                        </span>
                      </td>

                      {/* Formation */}
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#374151]">
                          {inscription.formation}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#6B7280]">
                          {formatDate(inscription.date)}
                        </span>
                      </td>

                      {/* Montant */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-[#1F1135]">
                          {formatFCFA(inscription.montant)}
                        </span>
                      </td>

                      {/* Mode de paiement */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <CreditCard size={14} className="text-[#9CA3AF]" />
                          <span className="text-sm text-[#374151]">
                            {inscription.modePaiement}
                          </span>
                        </div>
                      </td>

                      {/* Statut */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusConf.bg} ${statusConf.text}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${statusConf.dot}`}
                          />
                          {statusConf.label}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-2 rounded-lg text-[#6B7280] hover:text-[#5B21B6] hover:bg-violet-50 transition-colors"
                            title="Voir les details"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            className="p-2 rounded-lg text-[#6B7280] hover:text-[#5B21B6] hover:bg-violet-50 transition-colors"
                            title="Plus d'options"
                          >
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        {filtered.length > 0 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-[#FAFAFE]">
            <p className="text-xs text-[#6B7280]">
              Affichage de {filtered.length} sur {DEMO_INSCRIPTIONS.length} inscriptions
            </p>
            <p className="text-xs font-semibold text-[#5B21B6]">
              Total :{" "}
              {formatFCFA(
                filtered.reduce((sum, ins) => sum + ins.montant, 0)
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
