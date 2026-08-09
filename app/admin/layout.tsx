"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModernKnightLogo } from "@/components/logo";
import { 
  Users, 
  Puzzle as PuzzleIcon, 
  Trophy, 
  Image as ImageIcon, 
  CalendarCheck, 
  Sparkles,
  LayoutDashboard,
  Layers,
  BookOpen
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "📊 Overview", icon: LayoutDashboard },
    { href: "/admin/students", label: "👥 Students", icon: Users },
    { href: "/admin/batches", label: "📚 Batches", icon: Layers },
    { href: "/admin/puzzles", label: "🧩 Puzzles (PGN)", icon: PuzzleIcon },
    { href: "/admin/attendance", label: "📅 Attendance", icon: CalendarCheck },
    { href: "/admin/achievements", label: "🏆 Achievements", icon: Trophy },
    { href: "/admin/gallery", label: "🖼️ Gallery", icon: ImageIcon },
    { href: "/admin/blogs", label: "📝 Blogs", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <ModernKnightLogo size="sm" variant="light" />
          <span className="px-3 py-1 bg-blue-900/60 text-blue-300 font-extrabold text-xs rounded-md border border-blue-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Admin Control Hub
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/student"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-700 transition-colors text-slate-200"
          >
            Student Portal
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-gradient-to-r from-[#0B4398] to-[#E11D48] text-white text-xs font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity"
          >
            Exit to Academy Website
          </Link>
        </div>
      </header>

      {/* Admin Navigation Tabs */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-6 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-bold overflow-x-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? "border-[#E11D48] text-white font-extrabold"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-8">
        {children}
      </main>
    </div>
  );
}
