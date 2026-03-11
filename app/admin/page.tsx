"use client";

import Link from "next/link";
import {
  DollarSign,
  Users,
  ClipboardList,
  Mail,
  TrendingUp,
  TrendingDown,
  Calendar,
  ArrowRight,
  UserPlus,
  Stethoscope,
  MessageSquare,
  GraduationCap,
  Clock,
  AlertCircle,
} from "lucide-react";

import {
  DASHBOARD_STATS,
  REVENUE_CHART_DATA,
  SERVICE_DISTRIBUTION,
  DEMO_DEMANDES,
  DEMO_DIAGNOSTICS,
} from "@/lib/demo-data";

/* ═══════════════════════════════════════════════════════════════
   ADMIN DASHBOARD — ABS Corporation™ Backoffice
   ═══════════════════════════════════════════════════════════════ */

/** Format a number as FCFA with French locale */
function formatPrice(value: number): string {
  return value.toLocaleString("fr-FR") + " FCFA";
}

/** Compute percentage change between two values */
function percentChange(current: number, previous: number): number {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
}

/* ── Priority badge colors ── */
const priorityColors: Record<string, string> = {
  haute: "bg-red-100 text-red-700",
  moyenne: "bg-amber-100 text-amber-700",
  basse: "bg-green-100 text-green-700",
};

/* ── Status badge colors ── */
const statusColors: Record<string, string> = {
  nouvelle: "bg-blue-100 text-blue-700",
  en_cours: "bg-amber-100 text-amber-700",
  traitee: "bg-green-100 text-green-700",
  archivee: "bg-gray-100 text-gray-600",
  planifie: "bg-violet-100 text-violet-700",
  termine: "bg-green-100 text-green-700",
  annule: "bg-red-100 text-red-700",
};

const statusLabels: Record<string, string> = {
  nouvelle: "Nouvelle",
  en_cours: "En cours",
  traitee: "Traitee",
  archivee: "Archivee",
  planifie: "Planifie",
  termine: "Termine",
  annule: "Annule",
};

export default function AdminDashboardPage() {
  const stats = DASHBOARD_STATS;
  const revenueChange = percentChange(stats.revenuMensuel, stats.revenuPrecedent);

  /* 3 most recent demands */
  const recentDemandes = [...DEMO_DEMANDES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  /* Upcoming diagnostics (planifie or en_cours) */
  const upcomingDiagnostics = DEMO_DIAGNOSTICS.filter(
    (d) => d.statut === "planifie" || d.statut === "en_cours"
  ).slice(0, 2);

  /* Revenue chart max for scaling */
  const maxRevenue = Math.max(...REVENUE_CHART_DATA.map((d) => d.montant));

  /* ── Stats cards config ── */
  const statsCards = [
    {
      label: "Revenu mensuel",
      value: formatPrice(stats.revenuMensuel),
      icon: DollarSign,
      trend: revenueChange,
      trendLabel: `${revenueChange > 0 ? "+" : ""}${revenueChange}% vs mois precedent`,
      color: "bg-[#5B21B6]",
    },
    {
      label: "Clients actifs",
      value: stats.clientsActifs.toString(),
      icon: Users,
      trend: null,
      trendLabel: `${stats.totalClients} clients au total`,
      color: "bg-[#7C3AED]",
    },
    {
      label: "Inscriptions en cours",
      value: stats.inscriptionsEnCours.toString(),
      icon: ClipboardList,
      trend: null,
      trendLabel: `${stats.diagnosticsPlanifies} diagnostics planifies`,
      color: "bg-[#4C1D95]",
    },
    {
      label: "Messages non lus",
      value: stats.messagesNonLus.toString(),
      icon: Mail,
      trend: null,
      trendLabel: `${stats.demandesNouvelles} nouvelles demandes`,
      color: "bg-[#6D28D9]",
    },
  ];

  return (
    <div className="space-y-8">
      {/* ═══ Page Title ═══ */}
      <div>
        <h1
          className="text-2xl lg:text-3xl font-bold text-[#1F1135]"
          style={{ fontFamily: "var(--font-sub)" }}
        >
          Dashboard
        </h1>
        <p className="mt-1 text-[#6B7280] text-sm">
          Bienvenue sur le backoffice ABS Corporation. Voici un apercu de votre activite.
        </p>
      </div>

      {/* ═══ Stats Grid ═══ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {statsCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div
                className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#6B7280] font-medium">{card.label}</p>
                <p
                  className="text-xl lg:text-2xl font-bold text-[#1F1135] mt-0.5 truncate"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  {card.value}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  {card.trend !== null && (
                    <>
                      {card.trend >= 0 ? (
                        <TrendingUp size={14} className="text-emerald-500" />
                      ) : (
                        <TrendingDown size={14} className="text-red-500" />
                      )}
                    </>
                  )}
                  <span className="text-xs text-[#6B7280]">{card.trendLabel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ Charts Row ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* ── Revenue Chart ── */}
        <div className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-lg font-bold text-[#1F1135]"
              style={{ fontFamily: "var(--font-sub)" }}
            >
              Revenus mensuels
            </h2>
            <span className="text-xs text-[#6B7280] bg-[#F5F3FF] px-3 py-1 rounded-full">
              6 derniers mois
            </span>
          </div>
          <div className="space-y-3">
            {REVENUE_CHART_DATA.map((item) => {
              const widthPercent = (item.montant / maxRevenue) * 100;
              return (
                <div key={item.mois} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#6B7280] w-8 text-right">
                    {item.mois}
                  </span>
                  <div className="flex-1 h-8 bg-[#F5F3FF] rounded-lg overflow-hidden relative">
                    <div
                      className="h-full rounded-lg transition-all duration-700 ease-out"
                      style={{
                        width: `${widthPercent}%`,
                        background: "linear-gradient(90deg, #5B21B6, #7C3AED)",
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-end pr-3 text-xs font-semibold text-[#1F1135]">
                      {item.montant.toLocaleString("fr-FR")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Service Distribution ── */}
        <div className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-lg font-bold text-[#1F1135]"
              style={{ fontFamily: "var(--font-sub)" }}
            >
              Repartition des services
            </h2>
            <span className="text-xs text-[#6B7280] bg-[#F5F3FF] px-3 py-1 rounded-full">
              Ce mois
            </span>
          </div>
          <div className="space-y-4">
            {SERVICE_DISTRIBUTION.map((item) => (
              <div key={item.service}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#1F1135]">
                    {item.service}
                  </span>
                  <span className="text-sm font-bold text-[#5B21B6]">
                    {item.pourcentage}%
                  </span>
                </div>
                <div className="w-full h-3 bg-[#F5F3FF] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${item.pourcentage}%`,
                      backgroundColor: item.couleur,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Extra metrics */}
          <div className="mt-6 pt-4 border-t border-[#5B21B6]/10 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#5B21B6]" style={{ fontFamily: "var(--font-sub)" }}>
                {stats.tauxConversion}%
              </p>
              <p className="text-xs text-[#6B7280] mt-0.5">Taux de conversion</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#5B21B6]" style={{ fontFamily: "var(--font-sub)" }}>
                {stats.tauxSatisfaction}%
              </p>
              <p className="text-xs text-[#6B7280] mt-0.5">Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Recent Activity ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* ── Latest Demands ── */}
        <div className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-lg font-bold text-[#1F1135]"
              style={{ fontFamily: "var(--font-sub)" }}
            >
              Dernieres demandes
            </h2>
            <Link
              href="/admin/demandes"
              className="text-xs text-[#5B21B6] hover:text-[#7C3AED] font-medium flex items-center gap-1 transition-colors"
            >
              Voir tout <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {recentDemandes.map((demande) => (
              <div
                key={demande.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#FAFAFE] hover:bg-[#F5F3FF] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-[#5B21B6]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-[#1F1135] truncate">
                      {demande.clientNom}
                    </p>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        priorityColors[demande.priorite] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {demande.priorite}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5 truncate">
                    {demande.type} — {demande.sujet}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        statusColors[demande.statut] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {statusLabels[demande.statut] || demande.statut}
                    </span>
                    <span className="text-[10px] text-[#9CA3AF] flex items-center gap-1">
                      <Calendar size={10} />
                      {new Date(demande.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Upcoming Diagnostics ── */}
        <div className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-lg font-bold text-[#1F1135]"
              style={{ fontFamily: "var(--font-sub)" }}
            >
              Diagnostics a venir
            </h2>
            <Link
              href="/admin/diagnostics"
              className="text-xs text-[#5B21B6] hover:text-[#7C3AED] font-medium flex items-center gap-1 transition-colors"
            >
              Voir tout <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingDiagnostics.length > 0 ? (
              upcomingDiagnostics.map((diag) => (
                <div
                  key={diag.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#FAFAFE] hover:bg-[#F5F3FF] transition-colors border border-[#5B21B6]/5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
                    <Stethoscope size={16} className="text-[#5B21B6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-[#1F1135]">
                        {diag.clientNom}
                      </p>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          statusColors[diag.statut] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {statusLabels[diag.statut] || diag.statut}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      {diag.entreprise} — {diag.typeService}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-[#5B21B6] font-medium flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(diag.dateRdv).toLocaleDateString("fr-FR", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="text-xs text-[#5B21B6] font-medium flex items-center gap-1">
                        <Clock size={12} />
                        {diag.heureRdv}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] mt-1.5 line-clamp-2">
                      {diag.notes}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <AlertCircle size={28} className="text-[#D1D5DB] mb-2" />
                <p className="text-sm text-[#9CA3AF]">
                  Aucun diagnostic planifie pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══ Quick Actions ═══ */}
      <div className="bg-white rounded-xl border border-[#5B21B6]/10 shadow-sm p-6">
        <h2
          className="text-lg font-bold text-[#1F1135] mb-5"
          style={{ fontFamily: "var(--font-sub)" }}
        >
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {[
            {
              label: "Gerer les clients",
              href: "/admin/clients",
              icon: Users,
              description: "Voir et gerer la base clients",
              color: "bg-[#5B21B6]",
            },
            {
              label: "Voir les demandes",
              href: "/admin/demandes",
              icon: MessageSquare,
              description: "Traiter les demandes recues",
              color: "bg-[#7C3AED]",
            },
            {
              label: "Diagnostics",
              href: "/admin/diagnostics",
              icon: Stethoscope,
              description: "Planifier et suivre les RDV",
              color: "bg-[#4C1D95]",
            },
            {
              label: "Inscriptions",
              href: "/admin/inscriptions",
              icon: GraduationCap,
              description: "Gerer les inscriptions aux formations",
              color: "bg-[#6D28D9]",
            },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                className="group flex items-center gap-4 p-4 rounded-xl border border-[#5B21B6]/10 hover:border-[#5B21B6]/30 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`${action.color} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1F1135] group-hover:text-[#5B21B6] transition-colors">
                    {action.label}
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{action.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#D1D5DB] group-hover:text-[#5B21B6] group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
