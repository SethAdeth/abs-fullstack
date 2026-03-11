"use client";

import { useState, useMemo } from "react";
import {
  DEMO_DIAGNOSTICS,
  type DiagnosticStatus,
  type Diagnostic,
} from "@/lib/demo-data";
import {
  Stethoscope,
  CalendarCheck,
  Loader,
  CheckCircle2,
  ClipboardList,
  CalendarDays,
  Clock,
  Mail,
  Phone,
  Building2,
  User,
  FileText,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type TabFilter = "tous" | DiagnosticStatus;

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function getStatusBadge(statut: DiagnosticStatus) {
  switch (statut) {
    case "planifie":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "en_cours":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "termine":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "annule":
      return "bg-red-50 text-red-600 border border-red-200";
    default:
      return "bg-gray-50 text-gray-600 border border-gray-200";
  }
}

function getStatusLabel(statut: DiagnosticStatus) {
  switch (statut) {
    case "planifie":
      return "Planifie";
    case "en_cours":
      return "En cours";
    case "termine":
      return "Termine";
    case "annule":
      return "Annule";
    default:
      return statut;
  }
}

function getStatusDot(statut: DiagnosticStatus) {
  switch (statut) {
    case "planifie":
      return "bg-blue-500";
    case "en_cours":
      return "bg-amber-500";
    case "termine":
      return "bg-emerald-500";
    case "annule":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
}

function formatDate(dateStr: string) {
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
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${accent}15` }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1F2937]">{value}</p>
        <p className="text-sm text-[#6B7280]">{label}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DIAGNOSTIC CARD
   ═══════════════════════════════════════════════════════════════ */

function DiagnosticCard({ diagnostic }: { diagnostic: Diagnostic }) {
  const [notesExpanded, setNotesExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header: Status badge + Service type */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
            diagnostic.statut
          )}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${getStatusDot(
              diagnostic.statut
            )}`}
          />
          {getStatusLabel(diagnostic.statut)}
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#5B21B6]/10 text-[#5B21B6] border border-[#5B21B6]/20">
          <Briefcase size={12} />
          {diagnostic.typeService}
        </span>
      </div>

      {/* Client name + Company */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <User size={16} className="text-[#5B21B6] shrink-0" />
          <p className="text-base font-semibold text-[#1F2937]">
            {diagnostic.clientNom}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Building2 size={14} className="text-[#6B7280] shrink-0" />
          <p className="text-sm text-[#6B7280]">{diagnostic.entreprise}</p>
        </div>
      </div>

      {/* Date + Heure */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5 text-sm text-[#1F2937]">
          <CalendarDays size={14} className="text-[#5B21B6] shrink-0" />
          <span className="font-medium">{formatDate(diagnostic.dateRdv)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#1F2937]">
          <Clock size={14} className="text-[#5B21B6] shrink-0" />
          <span className="font-medium">{diagnostic.heureRdv}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-3" />

      {/* Contact info */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <Mail size={14} className="shrink-0" />
          <span className="truncate">{diagnostic.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <Phone size={14} className="shrink-0" />
          <span>{diagnostic.telephone}</span>
        </div>
      </div>

      {/* Notes (expandable) */}
      {diagnostic.notes && (
        <div className="mt-3">
          <button
            onClick={() => setNotesExpanded(!notesExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-[#5B21B6] hover:text-[#4C1D95] transition-colors duration-200"
          >
            <FileText size={13} />
            Notes
            {notesExpanded ? (
              <ChevronUp size={13} />
            ) : (
              <ChevronDown size={13} />
            )}
          </button>
          {notesExpanded && (
            <div className="mt-2 p-3 bg-[#F5F3FF] rounded-lg">
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {diagnostic.notes}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ID */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-[11px] font-mono text-[#9CA3AF]">
          {diagnostic.id}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FILTER TABS
   ═══════════════════════════════════════════════════════════════ */

const TABS: { key: TabFilter; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "planifie", label: "Planifies" },
  { key: "en_cours", label: "En cours" },
  { key: "termine", label: "Termines" },
  { key: "annule", label: "Annules" },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AdminDiagnosticsPage() {
  const [activeTab, setActiveTab] = useState<TabFilter>("tous");

  /* ── Compute stats from data ── */
  const stats = useMemo(() => {
    const total = DEMO_DIAGNOSTICS.length;
    const planifies = DEMO_DIAGNOSTICS.filter(
      (d) => d.statut === "planifie"
    ).length;
    const enCours = DEMO_DIAGNOSTICS.filter(
      (d) => d.statut === "en_cours"
    ).length;
    const termines = DEMO_DIAGNOSTICS.filter(
      (d) => d.statut === "termine"
    ).length;
    return { total, planifies, enCours, termines };
  }, []);

  /* ── Filtered diagnostics ── */
  const filteredDiagnostics = useMemo(() => {
    if (activeTab === "tous") return DEMO_DIAGNOSTICS;
    return DEMO_DIAGNOSTICS.filter((d) => d.statut === activeTab);
  }, [activeTab]);

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1F2937]">
          Gestion des Diagnostics
        </h1>
        <p className="text-[#6B7280] mt-1">
          Suivez et gerez les rendez-vous de diagnostic pour vos clients et
          prospects.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={ClipboardList}
          label="Total diagnostics"
          value={stats.total}
          accent="#5B21B6"
        />
        <StatCard
          icon={CalendarCheck}
          label="Planifies"
          value={stats.planifies}
          accent="#2563EB"
        />
        <StatCard
          icon={Loader}
          label="En cours"
          value={stats.enCours}
          accent="#D97706"
        />
        <StatCard
          icon={CheckCircle2}
          label="Termines"
          value={stats.termines}
          accent="#059669"
        />
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5B21B6] text-white shadow-md shadow-[#5B21B6]/25"
                  : "bg-white text-[#6B7280] border border-gray-200 hover:border-[#5B21B6]/30 hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Results count ── */}
      <p className="text-sm text-[#6B7280]">
        {filteredDiagnostics.length} diagnostic
        {filteredDiagnostics.length !== 1 && "s"}{" "}
        trouv{filteredDiagnostics.length !== 1 ? "es" : "e"}
      </p>

      {/* ── Card Grid ── */}
      {filteredDiagnostics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredDiagnostics.map((diagnostic) => (
            <DiagnosticCard key={diagnostic.id} diagnostic={diagnostic} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 py-16 text-center shadow-sm">
          <Stethoscope
            size={40}
            className="mx-auto text-[#6B7280]/30 mb-3"
          />
          <p className="text-[#6B7280] font-medium">
            Aucun diagnostic trouve
          </p>
          <p className="text-sm text-[#6B7280]/60 mt-1">
            Aucun diagnostic ne correspond au filtre selectionne.
          </p>
        </div>
      )}
    </div>
  );
}
