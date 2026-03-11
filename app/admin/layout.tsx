"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  MessageSquare,
  ClipboardList,
  Stethoscope,
  Mail,
  Menu,
  X,
  ChevronLeft,
  Bell,
  Search,
} from "lucide-react";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Clients", href: "/admin/clients", icon: Users },
  { label: "Inscriptions", href: "/admin/inscriptions", icon: GraduationCap },
  { label: "Cours", href: "/admin/cours", icon: ClipboardList },
  { label: "Demandes", href: "/admin/demandes", icon: MessageSquare },
  { label: "Diagnostics", href: "/admin/diagnostics", icon: Stethoscope },
  { label: "Messages", href: "/admin/messages", icon: Mail },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7FC] flex">
        {/* ── Sidebar ── */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-[#1F1135] text-white flex flex-col transition-transform duration-300 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Logo */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#5B21B6] flex items-center justify-center text-sm font-bold">
                ABS
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide">ABS Corp</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider">
                  Backoffice
                </p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white/50 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#5B21B6] text-white shadow-lg shadow-[#5B21B6]/30"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Back to site */}
          <div className="p-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
              Retour au site
            </Link>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
          {/* Top bar */}
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#5B21B6]/10 px-4 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-[#1F2937] hover:text-[#5B21B6] transition-colors"
                >
                  <Menu size={22} />
                </button>
                <div className="hidden sm:flex items-center gap-2 bg-[#F5F3FF] rounded-lg px-4 py-2 w-72">
                  <Search size={16} className="text-[#6B7280]" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-transparent text-sm text-[#1F2937] placeholder:text-[#6B7280]/60 outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                  Mode Démo
                </span>
                <button className="relative text-[#6B7280] hover:text-[#5B21B6] transition-colors">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                    3
                  </span>
                </button>
                <div className="w-9 h-9 rounded-full bg-[#5B21B6] flex items-center justify-center text-white text-sm font-bold">
                  RS
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 p-4 lg:p-8">{children}</div>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
  );
}
