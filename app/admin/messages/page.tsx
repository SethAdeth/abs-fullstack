"use client";

import { useState, useMemo } from "react";
import { DEMO_MESSAGES, type Message } from "@/lib/demo-data";
import {
  Mail,
  MailOpen,
  Inbox,
  Clock,
  CheckCircle2,
  Search,
  X,
  ArrowLeft,
  Reply,
  Calendar,
  User,
  AtSign,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type FilterTab = "tous" | "non_lus" | "en_attente" | "repondus";

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusBadge(msg: Message) {
  if (msg.repondu) {
    return {
      label: "Repondu",
      className:
        "bg-emerald-50 text-emerald-700 border border-emerald-200",
    };
  }
  if (msg.lu && !msg.repondu) {
    return {
      label: "En attente",
      className: "bg-amber-50 text-amber-700 border border-amber-200",
    };
  }
  return {
    label: "Nouveau",
    className: "bg-blue-50 text-blue-700 border border-blue-200",
  };
}

function getInitials(nom: string) {
  const parts = nom.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return nom.slice(0, 2).toUpperCase();
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
   MESSAGE DETAIL PANEL
   ═══════════════════════════════════════════════════════════════ */

function MessageDetail({
  message,
  onClose,
}: {
  message: Message;
  onClose: () => void;
}) {
  const status = getStatusBadge(message);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Detail Header */}
      <div className="border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#5B21B6] transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Retour a la liste
        </button>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      {/* Detail Content */}
      <div className="p-5 lg:p-6">
        {/* Subject */}
        <h2 className="text-lg lg:text-xl font-bold text-[#1F2937] mb-4">
          {message.sujet}
        </h2>

        {/* Sender Info */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="w-11 h-11 rounded-full bg-[#5B21B6]/10 flex items-center justify-center text-[#5B21B6] font-semibold text-sm shrink-0">
            {getInitials(message.nom)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <p className="font-semibold text-[#1F2937]">{message.nom}</p>
              <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <Calendar size={12} />
                <span>{formatDate(message.date)}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#6B7280] mt-0.5">
              <AtSign size={13} className="shrink-0" />
              <span className="truncate">{message.email}</span>
            </div>
          </div>
        </div>

        {/* Message Body */}
        <div className="bg-[#F9FAFB] rounded-xl p-5 text-sm text-[#374151] leading-relaxed whitespace-pre-wrap">
          {message.message}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#5B21B6] text-white rounded-xl text-sm font-medium hover:bg-[#4C1D95] transition-colors duration-200 shadow-sm">
            <Reply size={16} />
            Repondre
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-[#1F2937] rounded-xl text-sm font-medium hover:bg-[#F5F3FF] hover:border-[#5B21B6]/20 transition-colors duration-200">
            <MailOpen size={16} />
            Marquer comme lu
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MESSAGE ROW
   ═══════════════════════════════════════════════════════════════ */

function MessageRow({
  message,
  isSelected,
  onSelect,
}: {
  message: Message;
  isSelected: boolean;
  onSelect: (msg: Message) => void;
}) {
  const status = getStatusBadge(message);
  const isUnread = !message.lu;

  return (
    <div
      onClick={() => onSelect(message)}
      className={`group flex items-start gap-3 lg:gap-4 p-4 lg:p-5 border-b border-gray-50 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-[#F5F3FF] border-l-2 border-l-[#5B21B6]"
          : isUnread
          ? "bg-blue-50/30 hover:bg-[#F5F3FF]/60"
          : "bg-white hover:bg-[#F9FAFB]"
      }`}
    >
      {/* Unread Indicator + Avatar */}
      <div className="relative shrink-0">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            isUnread
              ? "bg-[#5B21B6]/15 text-[#5B21B6]"
              : "bg-gray-100 text-[#6B7280]"
          }`}
        >
          {getInitials(message.nom)}
        </div>
        {isUnread && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Top row: Name + Date */}
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <p
            className={`text-sm truncate ${
              isUnread
                ? "font-bold text-[#1F2937]"
                : "font-medium text-[#374151]"
            }`}
          >
            {message.nom}
          </p>
          <span className="text-xs text-[#6B7280] whitespace-nowrap shrink-0">
            {formatDate(message.date)}
          </span>
        </div>

        {/* Email */}
        <p className="text-xs text-[#6B7280] truncate mb-1">
          {message.email}
        </p>

        {/* Subject */}
        <p
          className={`text-sm truncate mb-1 ${
            isUnread ? "font-semibold text-[#1F2937]" : "text-[#374151]"
          }`}
        >
          {message.sujet}
        </p>

        {/* Message Preview */}
        <p className="text-xs text-[#6B7280] line-clamp-1">
          {message.message}
        </p>
      </div>

      {/* Status Badge */}
      <div className="shrink-0 hidden sm:block">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${status.className}`}
        >
          {status.label}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MESSAGE CARD
   ═══════════════════════════════════════════════════════════════ */

function MobileMessageCard({
  message,
  onSelect,
}: {
  message: Message;
  onSelect: (msg: Message) => void;
}) {
  const status = getStatusBadge(message);
  const isUnread = !message.lu;

  return (
    <div
      onClick={() => onSelect(message)}
      className={`bg-white rounded-xl border border-gray-100 p-4 shadow-sm cursor-pointer transition-all duration-200 active:scale-[0.99] ${
        isUnread ? "border-l-4 border-l-blue-500" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                isUnread
                  ? "bg-[#5B21B6]/15 text-[#5B21B6]"
                  : "bg-gray-100 text-[#6B7280]"
              }`}
            >
              {getInitials(message.nom)}
            </div>
            {isUnread && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white" />
            )}
          </div>
          <div className="min-w-0">
            <p
              className={`text-sm truncate ${
                isUnread ? "font-bold text-[#1F2937]" : "font-medium text-[#374151]"
              }`}
            >
              {message.nom}
            </p>
            <p className="text-xs text-[#6B7280] truncate">{message.email}</p>
          </div>
        </div>
        <span className="text-xs text-[#6B7280] whitespace-nowrap shrink-0">
          {formatDate(message.date)}
        </span>
      </div>

      {/* Subject */}
      <p
        className={`text-sm truncate mb-1 ${
          isUnread ? "font-semibold text-[#1F2937]" : "text-[#374151]"
        }`}
      >
        {message.sujet}
      </p>

      {/* Preview */}
      <p className="text-xs text-[#6B7280] line-clamp-1 mb-3">
        {message.message}
      </p>

      {/* Badge */}
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${status.className}`}
      >
        {status.label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AdminMessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterTab>("tous");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  /* ── Compute stats from data ── */
  const stats = useMemo(() => {
    const total = DEMO_MESSAGES.length;
    const nonLus = DEMO_MESSAGES.filter((m) => !m.lu).length;
    const enAttente = DEMO_MESSAGES.filter((m) => m.lu && !m.repondu).length;
    const repondus = DEMO_MESSAGES.filter((m) => m.repondu).length;
    return { total, nonLus, enAttente, repondus };
  }, []);

  /* ── Filter tabs config ── */
  const filterTabs: { key: FilterTab; label: string; count: number }[] = [
    { key: "tous", label: "Tous", count: stats.total },
    { key: "non_lus", label: "Non lus", count: stats.nonLus },
    { key: "en_attente", label: "En attente", count: stats.enAttente },
    { key: "repondus", label: "Repondus", count: stats.repondus },
  ];

  /* ── Filtered messages ── */
  const filteredMessages = useMemo(() => {
    return DEMO_MESSAGES.filter((msg) => {
      // Filter by tab
      switch (activeFilter) {
        case "non_lus":
          if (msg.lu) return false;
          break;
        case "en_attente":
          if (!msg.lu || msg.repondu) return false;
          break;
        case "repondus":
          if (!msg.repondu) return false;
          break;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          msg.nom.toLowerCase().includes(q) ||
          msg.email.toLowerCase().includes(q) ||
          msg.sujet.toLowerCase().includes(q) ||
          msg.message.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [searchQuery, activeFilter]);

  /* ── Handle message selection ── */
  function handleSelectMessage(msg: Message) {
    setSelectedMessage(msg);
  }

  function handleCloseDetail() {
    setSelectedMessage(null);
  }

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1F2937]">
          Messages & Contact
        </h1>
        <p className="text-[#6B7280] mt-1">
          Consultez et gerez les messages recus via le formulaire de contact.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Inbox}
          label="Total messages"
          value={stats.total}
          accent="#5B21B6"
        />
        <StatCard
          icon={Mail}
          label="Non lus"
          value={stats.nonLus}
          accent="#2563EB"
        />
        <StatCard
          icon={Clock}
          label="En attente de reponse"
          value={stats.enAttente}
          accent="#D97706"
        />
        <StatCard
          icon={CheckCircle2}
          label="Repondus"
          value={stats.repondus}
          accent="#059669"
        />
      </div>

      {/* ── Search & Filters ── */}
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />
          <input
            type="text"
            placeholder="Rechercher par nom, email, sujet ou contenu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#1F2937] placeholder:text-[#6B7280]/60 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveFilter(tab.key);
                setSelectedMessage(null);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.key
                  ? "bg-[#5B21B6] text-white shadow-sm shadow-[#5B21B6]/20"
                  : "bg-white border border-gray-200 text-[#6B7280] hover:border-[#5B21B6]/30 hover:text-[#5B21B6]"
              }`}
            >
              {tab.label}
              <span
                className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold ${
                  activeFilter === tab.key
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="text-sm text-[#6B7280]">
        {filteredMessages.length} message{filteredMessages.length !== 1 && "s"}{" "}
        {activeFilter === "tous"
          ? ""
          : activeFilter === "non_lus"
          ? "non lu" + (filteredMessages.length !== 1 ? "s" : "")
          : activeFilter === "en_attente"
          ? "en attente"
          : "repondu" + (filteredMessages.length !== 1 ? "s" : "")}
      </p>

      {/* ── Message Detail View ── */}
      {selectedMessage ? (
        <MessageDetail message={selectedMessage} onClose={handleCloseDetail} />
      ) : (
        <>
          {/* ── Desktop Inbox List ── */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {filteredMessages.map((msg) => (
              <MessageRow
                key={msg.id}
                message={msg}
                isSelected={false}
                onSelect={handleSelectMessage}
              />
            ))}

            {/* Empty state */}
            {filteredMessages.length === 0 && (
              <div className="py-16 text-center">
                <Mail size={40} className="mx-auto text-[#6B7280]/30 mb-3" />
                <p className="text-[#6B7280] font-medium">Aucun message trouve</p>
                <p className="text-sm text-[#6B7280]/60 mt-1">
                  Essayez de modifier vos criteres de recherche.
                </p>
              </div>
            )}
          </div>

          {/* ── Mobile Cards ── */}
          <div className="md:hidden space-y-3">
            {filteredMessages.map((msg) => (
              <MobileMessageCard
                key={msg.id}
                message={msg}
                onSelect={handleSelectMessage}
              />
            ))}

            {/* Empty state */}
            {filteredMessages.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-100 py-16 text-center">
                <Mail size={40} className="mx-auto text-[#6B7280]/30 mb-3" />
                <p className="text-[#6B7280] font-medium">Aucun message trouve</p>
                <p className="text-sm text-[#6B7280]/60 mt-1">
                  Essayez de modifier vos criteres de recherche.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
