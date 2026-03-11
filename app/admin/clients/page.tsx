"use client";

import { useState, useMemo } from "react";
import { DEMO_CLIENTS, type Client } from "@/lib/demo-data";
import {
  Users,
  UserCheck,
  UserPlus,
  Crown,
  Search,
  SlidersHorizontal,
  Eye,
  ChevronDown,
  Building2,
  Mail,
  Phone,
  Globe,
  CalendarDays,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

type StatutFilter = "tous" | "actif" | "inactif" | "prospect";

function getPlanBadge(plan: string) {
  switch (plan.toLowerCase()) {
    case "gold":
      return "bg-[#5B21B6]/10 text-[#5B21B6] border border-[#5B21B6]/20";
    case "silver":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "bronze":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    default:
      return "bg-gray-50 text-gray-600 border border-gray-200";
  }
}

function getStatutBadge(statut: Client["statut"]) {
  switch (statut) {
    case "actif":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "inactif":
      return "bg-red-50 text-red-600 border border-red-200";
    case "prospect":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    default:
      return "bg-gray-50 text-gray-600 border border-gray-200";
  }
}

function getStatutLabel(statut: Client["statut"]) {
  switch (statut) {
    case "actif":
      return "Actif";
    case "inactif":
      return "Inactif";
    case "prospect":
      return "Prospect";
    default:
      return statut;
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
   STATS CARD
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
   MOBILE CLIENT CARD
   ═══════════════════════════════════════════════════════════════ */

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5B21B6]/10 flex items-center justify-center text-[#5B21B6] font-semibold text-sm">
            {client.prenom[0]}
            {client.nom[0]}
          </div>
          <div>
            <p className="font-semibold text-[#1F2937]">
              {client.prenom} {client.nom}
            </p>
            <p className="text-xs text-[#6B7280]">{client.id}</p>
          </div>
        </div>
        <button
          className="w-9 h-9 rounded-lg bg-[#F5F3FF] flex items-center justify-center text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white transition-colors duration-200"
          title="Voir le profil"
        >
          <Eye size={16} />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2.5 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <Mail size={14} className="shrink-0" />
          <span className="truncate">{client.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <Building2 size={14} className="shrink-0" />
          <span className="truncate">{client.entreprise}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <Globe size={14} className="shrink-0" />
          <span>{client.pays}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <CalendarDays size={14} className="shrink-0" />
          <span>{formatDate(client.dateInscription)}</span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getPlanBadge(
            client.plan
          )}`}
        >
          {client.plan}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatutBadge(
            client.statut
          )}`}
        >
          {getStatutLabel(client.statut)}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AdminClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statutFilter, setStatutFilter] = useState<StatutFilter>("tous");

  /* ── Compute stats from data ── */
  const stats = useMemo(() => {
    const total = DEMO_CLIENTS.length;
    const actifs = DEMO_CLIENTS.filter((c) => c.statut === "actif").length;
    const prospects = DEMO_CLIENTS.filter(
      (c) => c.statut === "prospect"
    ).length;
    const gold = DEMO_CLIENTS.filter(
      (c) => c.plan.toLowerCase() === "gold"
    ).length;
    return { total, actifs, prospects, gold };
  }, []);

  /* ── Filtered clients ── */
  const filteredClients = useMemo(() => {
    return DEMO_CLIENTS.filter((client) => {
      // Filter by statut
      if (statutFilter !== "tous" && client.statut !== statutFilter) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          client.nom.toLowerCase().includes(q) ||
          client.prenom.toLowerCase().includes(q) ||
          client.email.toLowerCase().includes(q) ||
          client.entreprise.toLowerCase().includes(q) ||
          client.pays.toLowerCase().includes(q) ||
          client.telephone.includes(q)
        );
      }

      return true;
    });
  }, [searchQuery, statutFilter]);

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1F2937]">
          Gestion des Clients
        </h1>
        <p className="text-[#6B7280] mt-1">
          Consultez et gerez l&apos;ensemble de vos clients, prospects et
          abonnements.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Total clients"
          value={stats.total}
          accent="#5B21B6"
        />
        <StatCard
          icon={UserCheck}
          label="Clients actifs"
          value={stats.actifs}
          accent="#059669"
        />
        <StatCard
          icon={UserPlus}
          label="Prospects"
          value={stats.prospects}
          accent="#D97706"
        />
        <StatCard
          icon={Crown}
          label="Plans Gold"
          value={stats.gold}
          accent="#7C3AED"
        />
      </div>

      {/* ── Search & Filters ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />
          <input
            type="text"
            placeholder="Rechercher par nom, email, entreprise, pays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#1F2937] placeholder:text-[#6B7280]/60 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all duration-200"
          />
        </div>

        {/* Statut Filter Dropdown */}
        <div className="relative">
          <SlidersHorizontal
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
          />
          <select
            value={statutFilter}
            onChange={(e) =>
              setStatutFilter(e.target.value as StatutFilter)
            }
            className="appearance-none w-full sm:w-48 pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#1F2937] outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all duration-200 cursor-pointer"
          >
            <option value="tous">Tous</option>
            <option value="actif">Actif</option>
            <option value="inactif">Inactif</option>
            <option value="prospect">Prospect</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
          />
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="text-sm text-[#6B7280]">
        {filteredClients.length} client{filteredClients.length !== 1 && "s"}{" "}
        trouv{filteredClients.length !== 1 ? "es" : "e"}
      </p>

      {/* ── Desktop Table ── */}
      <div className="hidden md:block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-[#F9FAFB]">
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Client
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Entreprise
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Pays
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Date inscription
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredClients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-[#F5F3FF]/40 transition-colors duration-150"
                >
                  {/* Client */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5B21B6]/10 flex items-center justify-center text-[#5B21B6] font-semibold text-xs shrink-0">
                        {client.prenom[0]}
                        {client.nom[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1F2937]">
                          {client.prenom} {client.nom}
                        </p>
                        <p className="text-xs text-[#6B7280]">{client.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-5 py-4 text-sm text-[#6B7280]">
                    {client.email}
                  </td>

                  {/* Entreprise */}
                  <td className="px-5 py-4 text-sm text-[#1F2937] font-medium">
                    {client.entreprise}
                  </td>

                  {/* Pays */}
                  <td className="px-5 py-4 text-sm text-[#6B7280]">
                    {client.pays}
                  </td>

                  {/* Plan */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getPlanBadge(
                        client.plan
                      )}`}
                    >
                      {client.plan}
                    </span>
                  </td>

                  {/* Statut */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatutBadge(
                        client.statut
                      )}`}
                    >
                      {getStatutLabel(client.statut)}
                    </span>
                  </td>

                  {/* Date inscription */}
                  <td className="px-5 py-4 text-sm text-[#6B7280]">
                    {formatDate(client.dateInscription)}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right">
                    <button
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#F5F3FF] text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white transition-colors duration-200"
                      title="Voir le profil"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {filteredClients.length === 0 && (
          <div className="py-16 text-center">
            <Users size={40} className="mx-auto text-[#6B7280]/30 mb-3" />
            <p className="text-[#6B7280] font-medium">Aucun client trouve</p>
            <p className="text-sm text-[#6B7280]/60 mt-1">
              Essayez de modifier vos criteres de recherche.
            </p>
          </div>
        )}
      </div>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden space-y-3">
        {filteredClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}

        {/* Empty state */}
        {filteredClients.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-100 py-16 text-center">
            <Users size={40} className="mx-auto text-[#6B7280]/30 mb-3" />
            <p className="text-[#6B7280] font-medium">Aucun client trouve</p>
            <p className="text-sm text-[#6B7280]/60 mt-1">
              Essayez de modifier vos criteres de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
