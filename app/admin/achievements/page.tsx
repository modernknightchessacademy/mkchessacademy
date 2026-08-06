"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { CloudinaryUpload } from "@/components/CloudinaryUpload";

interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  studentName?: string;
}

export default function AdminAchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(false);

  const [showAddAchievement, setShowAddAchievement] = useState(false);
  const [newAchievement, setNewAchievement] = useState({
    title: "",
    category: "Tournament Winner",
    description: "",
    imageUrl: "",
    year: new Date().getFullYear().toString(),
    studentName: "",
  });

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/achievements");
      if (res.ok) setAchievements(await res.json());
    } catch (e) {
      console.error("Error fetching achievements:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAchievement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAchievement.imageUrl) return alert("Please upload an achievement image first");
    try {
      const res = await fetch("/api/achievements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAchievement),
      });
      if (res.ok) {
        const created = await res.json();
        setAchievements([created, ...achievements]);
        setShowAddAchievement(false);
        setNewAchievement({
          title: "",
          category: "Tournament Winner",
          description: "",
          imageUrl: "",
          year: new Date().getFullYear().toString(),
          studentName: "",
        });
      }
    } catch (e) {
      alert("Failed to save achievement");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Achievements & Hall of Fame</h2>
          <p className="text-xs text-slate-400">Highlight student tournament victories, trophies, and academy milestones.</p>
        </div>
        <button
          onClick={() => setShowAddAchievement(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-500">
            Loading achievements...
          </div>
        ) : achievements.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-500">
            No achievements added yet.
          </div>
        ) : (
          achievements.map((ach) => (
            <div key={ach.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 space-y-3">
              {ach.imageUrl && (
                <div className="relative h-44 bg-slate-950">
                  <img src={ach.imageUrl} alt={ach.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-md">
                    {ach.year}
                  </span>
                </div>
              )}
              <div className="p-4 space-y-2">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{ach.category}</span>
                <h3 className="font-bold text-white text-base">{ach.title}</h3>
                {ach.studentName && (
                  <p className="text-xs text-amber-400 font-medium">👤 Winner: {ach.studentName}</p>
                )}
                <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL: ADD ACHIEVEMENT */}
      {showAddAchievement && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 relative shadow-2xl">
            <button onClick={() => setShowAddAchievement(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-lg font-bold text-white">Add Hall of Fame Achievement</h3>
            <form onSubmit={handleAddAchievement} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Achievement Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. State Junior Champion 2026"
                  value={newAchievement.title}
                  onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Category</label>
                  <input
                    type="text"
                    value={newAchievement.category}
                    onChange={(e) => setNewAchievement({ ...newAchievement, category: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Year</label>
                  <input
                    type="text"
                    value={newAchievement.year}
                    onChange={(e) => setNewAchievement({ ...newAchievement, year: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Student Name (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Rao"
                  value={newAchievement.studentName}
                  onChange={(e) => setNewAchievement({ ...newAchievement, studentName: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Details about tournament victory..."
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Achievement Image *</label>
                <CloudinaryUpload
                  value={newAchievement.imageUrl}
                  onChange={(url: string) => setNewAchievement({ ...newAchievement, imageUrl: url })}
                />
                {newAchievement.imageUrl && (
                  <p className="text-[11px] text-emerald-400 mt-1">✓ Image uploaded successfully</p>
                )}
              </div>
              <button type="submit" className="w-full py-3 bg-[#E11D48] text-white font-extrabold rounded-xl">
                Save Achievement
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
