"use client";

import { useState } from "react";
import {
  BookOpen,
  PlayCircle,
  Clock,
  CheckCircle2,
  Users,
  Calendar,
  User,
  Monitor,
} from "lucide-react";
import { DEMO_COURS, type CoursStatus } from "@/lib/demo-data";

/* ── Status config ── */
const STATUS_CONFIG: Record<
  CoursStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  actif: {
    label: "Actif",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  a_venir: {
    label: "A venir",
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },
  termine: {
    label: "Termine",
    bg: "bg-gray-100",
    text: "text-gray-600",
    dot: "bg-gray-400",
  },
};

/* ── Filter tabs ── */
type FilterKey = "tous" | CoursStatus;

const FILTER_TABS: { key: FilterKey; label: string; icon: React.ElementType }[] = [
  { key: "tous", label: "Tous", icon: BookOpen },
  { key: "actif", label: "Actifs", icon: PlayCircle },
  { key: "a_venir", label: "A venir", icon: Clock },
  { key: "termine", label: "Termines", icon: CheckCircle2 },
];

/* ── Helpers ── */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function fillColor(pct: number): string {
  if (pct >= 90) return "bg-emerald-500";
  if (pct >= 70) return "bg-[#5B21B6]";
  if (pct >= 50) return "bg-amber-500";
  return "bg-blue-500";
}

function fillTextColor(pct: number): string {
  if (pct >= 90) return "text-emerald-600";
  if (pct >= 70) return "text-[#5B21B6]";
  if (pct >= 50) return "text-amber-600";
  return "text-blue-600";
}

function fillLabel(pct: number): string {
  if (pct >= 90) return "Presque complet";
  if (pct >= 70) return "Bien rempli";
  if (pct >= 50) return "En progression";
  return "Places disponibles";
}

/* ══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function AdminCoursPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("tous");

  /* Computed */
  const totalCours = DEMO_COURS.length;
  const coursActifs = DEMO_COURS.filter((c) => c.statut === "actif").length;
  const coursAVenir = DEMO_COURS.filter((c) => c.statut === "a_venir").length;
  const coursTermines = DEMO_COURS.filter((c) => c.statut === "termine").length;

  const filteredCours =
    activeFilter === "tous"
      ? DEMO_COURS
      : DEMO_COURS.filter((c) => c.statut === activeFilter);

  /* ── Stats cards data ── */
  const stats = [
    {
      label: "Total cours",
      value: totalCours,
      icon: BookOpen,
      iconColor: "text-[#5B21B6]",
      lightBg: "bg-[#F5F3FF]",
    },
    {
      label: "Cours actifs",
      value: coursActifs,
      icon: PlayCircle,
      iconColor: "text-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      label: "A venir",
      value: coursAVenir,
      icon: Clock,
      iconColor: "text-blue-600",
      lightBg: "bg-blue-50",
    },
    {
      label: "Termines",
      value: coursTermines,
      icon: CheckCircle2,
      iconColor: "text-gray-500",
      lightBg: "bg-gray-100",
    },
  ];

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1F1135]">
          Gestion des Cours
        </h1>
        <p className="text-sm text-[#6B7280] mt-1">
          Suivez et gerez l&apos;ensemble de vos formations et ateliers
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-[#5B21B6]/5 p-5 flex items-center gap-4 shadow-sm"
            >
              <div
                className={`${s.lightBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={22} className={s.iconColor} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1135]">{s.value}</p>
                <p className="text-xs text-[#6B7280] font-medium">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex items-center gap-2 flex-wrap">
        {FILTER_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeFilter === tab.key;
          const count =
            tab.key === "tous"
              ? totalCours
              : DEMO_COURS.filter((c) => c.statut === tab.key).length;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5B21B6] text-white shadow-lg shadow-[#5B21B6]/25"
                  : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#5B21B6]/30 hover:text-[#5B21B6]"
              }`}
            >
              <Icon size={16} />
              {tab.label}
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Course Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredCours.map((cours) => {
          const statusConf = STATUS_CONFIG[cours.statut];
          const pct = Math.round((cours.inscrits / cours.places) * 100);

          return (
            <div
              key={cours.id}
              className="bg-white rounded-xl border border-[#5B21B6]/5 shadow-sm hover:shadow-md hover:border-[#5B21B6]/15 transition-all duration-300 overflow-hidden group"
            >
              {/* Card top accent */}
              <div
                className={`h-1 w-full ${
                  cours.statut === "actif"
                    ? "bg-emerald-500"
                    : cours.statut === "a_venir"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              />

              <div className="p-5 space-y-4">
                {/* Status badge + ID */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusConf.bg} ${statusConf.text}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${statusConf.dot}`}
                    />
                    {statusConf.label}
                  </span>
                  <span className="text-[10px] text-[#9CA3AF] font-mono">
                    {cours.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#1F1135] leading-snug line-clamp-2 group-hover:text-[#5B21B6] transition-colors duration-200">
                  {cours.titre}
                </h3>

                {/* Formateur */}
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <User size={14} className="text-[#5B21B6] flex-shrink-0" />
                  <span>{cours.formateur}</span>
                </div>

                {/* Dates */}
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Calendar size={14} className="text-[#5B21B6] flex-shrink-0" />
                  <span>
                    {formatDate(cours.dateDebut)} &rarr; {formatDate(cours.dateFin)}
                  </span>
                </div>

                {/* Format badge */}
                <div className="flex items-center gap-2">
                  <Monitor size={14} className="text-[#5B21B6]" />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#F5F3FF] text-[#5B21B6] text-xs font-semibold">
                    {cours.format}
                  </span>
                </div>

                {/* Separator */}
                <div className="border-t border-[#F3F4F6]" />

                {/* Progress section */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#9CA3AF]" />
                      <span className="text-sm text-[#6B7280] font-medium">
                        {cours.inscrits}/{cours.places} inscrits
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold ${fillTextColor(pct)}`}
                    >
                      {pct}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${fillColor(pct)}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  {/* Fill level label */}
                  <p className={`text-xs font-medium ${fillTextColor(pct)}`}>
                    {fillLabel(pct)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Empty state ── */}
      {filteredCours.length === 0 && (
        <div className="text-center py-16">
          <BookOpen size={48} className="mx-auto text-[#D1D5DB] mb-4" />
          <p className="text-[#6B7280] font-medium">
            Aucun cours trouve pour ce filtre.
          </p>
        </div>
      )}
    </div>
  );
}
