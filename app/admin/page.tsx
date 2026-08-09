"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Users, 
  Puzzle as PuzzleIcon, 
  Trophy, 
  Image as ImageIcon, 
  CalendarCheck, 
  ArrowRight,
  TrendingUp,
  Layers,
  BookOpen
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  age: number;
  batch: string;
  level: string;
  rating: number;
}

interface Puzzle {
  id: string;
  title: string;
  level: string;
}

interface Achievement {
  id: string;
  title: string;
}

interface GalleryItem {
  id: string;
  title: string;
}

export default function AdminOverviewDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resStu, resPuz, resAch, resGal, resBlog] = await Promise.all([
        fetch("/api/students"),
        fetch("/api/puzzles"),
        fetch("/api/achievements"),
        fetch("/api/gallery"),
        fetch("/api/blogs"),
      ]);

      if (resStu.ok) setStudents(await resStu.json());
      if (resPuz.ok) setPuzzles(await resPuz.json());
      if (resAch.ok) setAchievements(await resAch.json());
      if (resGal.ok) setGallery(await resGal.json());
      if (resBlog.ok) setBlogs(await resBlog.json());
    } catch (e) {
      console.error("Error fetching overview data:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase">Total Students</span>
          <p className="text-3xl font-black text-white">{students.length}</p>
          <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Active Enrolled
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase">Tactical Puzzles</span>
          <p className="text-3xl font-black text-white">{puzzles.length}</p>
          <p className="text-[11px] text-blue-400 font-medium">3 Difficulty Tiers</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase">Hall of Fame</span>
          <p className="text-3xl font-black text-white">{achievements.length}</p>
          <p className="text-[11px] text-amber-400 font-medium">Tournament Trophies</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase">Gallery Photos</span>
          <p className="text-3xl font-black text-white">{gallery.length}</p>
          <p className="text-[11px] text-purple-400 font-medium">Events & Media</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase">Blogs & News</span>
          <p className="text-3xl font-black text-white">{blogs.length}</p>
          <p className="text-[11px] text-rose-400 font-medium">Published Articles</p>
        </div>
      </div>

      {/* Navigation Quick Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Management Sections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/students"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Users className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Students Roster & Logins</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Add new students, set login emails and passwords, and manage active student directory.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/batches"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <Layers className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Batch Management</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Create new academy training batches, define schedule days, timing slots, and skill tiers.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/puzzles"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
                <PuzzleIcon className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Puzzle Arena & PGN</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Upload chess PGN notation puzzles categorized by Beginner, Intermediate, and Advanced tiers.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/attendance"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Daily Attendance</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Track and mark daily attendance records (Present / Absent / Late) for all enrolled batches.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/achievements"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                <Trophy className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Hall of Fame Achievements</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Highlight student tournament champions, state titles, and grandmaster trophies.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/gallery"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <ImageIcon className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Academy Photo Gallery</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Upload and manage high-resolution photos of classes, events, and facilities.
              </p>
            </div>
          </Link>

          <Link
            href="/admin/blogs"
            className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all space-y-4 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Blogs & News</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Publish chess tactical guides, tournament results, and academy news updates.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
