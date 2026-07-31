"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModernKnightLogo } from "@/components/logo";

interface Student {
  id: string;
  name: string;
  age: number;
  batch: string;
  rating: number;
  puzzlesSolved: number;
  accuracy: string;
  status: "Active" | "Inactive";
}

interface Puzzle {
  id: string;
  title: string;
  pgn: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  assignedBatch: string;
  solvedCount: number;
}

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "students" | "puzzles" | "analytics">("dashboard");

  // Sample Students State
  const [students, setStudents] = useState<Student[]>([
    { id: "STU-101", name: "Aarav Sharma", age: 11, batch: "Weekend Advanced", rating: 1640, puzzlesSolved: 342, accuracy: "89%", status: "Active" },
    { id: "STU-102", name: "Sanya Reddy", age: 13, batch: "Tournament Masterclass", rating: 1520, puzzlesSolved: 298, accuracy: "92%", status: "Active" },
    { id: "STU-103", name: "Rohan Nambiar", age: 10, batch: "Intermediate Evening", rating: 1485, puzzlesSolved: 215, accuracy: "85%", status: "Active" },
    { id: "STU-104", name: "Kavya Patel", age: 14, batch: "Tournament Masterclass", rating: 1710, puzzlesSolved: 410, accuracy: "94%", status: "Active" },
    { id: "STU-105", name: "Vihaan Verma", age: 9, batch: "Beginner Morning", rating: 1050, puzzlesSolved: 112, accuracy: "78%", status: "Active" },
  ]);

  // Sample Puzzles State
  const [puzzles, setPuzzles] = useState<Puzzle[]>([
    { id: "PZ-001", title: "Smothered Mate in 2", pgn: "1. Nf7+ Kg8 2. Nh6+ Kh8 3. Qg8+ Rxg8 4. Nf7#", level: "Intermediate", assignedBatch: "Weekend Advanced", solvedCount: 142 },
    { id: "PZ-002", title: "Back Rank Skewer Trap", pgn: "1. Rd8+ Kh7 2. Bd3+ g6 3. Rh8#", level: "Beginner", assignedBatch: "Beginner Morning", solvedCount: 210 },
    { id: "PZ-003", title: "Queen Sacrifice Deflection", pgn: "1. Qh8+ Kxh8 2. Bf7#", level: "Advanced", assignedBatch: "Tournament Masterclass", solvedCount: 88 },
  ]);

  // New Student Form Modal State
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", age: "", batch: "Weekend Advanced", rating: "1200" });

  // PGN Import State
  const [showPgnUpload, setShowPgnUpload] = useState(false);
  const [pgnText, setPgnText] = useState("");
  const [pgnLevel, setPgnLevel] = useState<"Beginner" | "Intermediate" | "Advanced">("Intermediate");

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name) return;
    const created: Student = {
      id: `STU-${100 + students.length + 1}`,
      name: newStudent.name,
      age: parseInt(newStudent.age) || 10,
      batch: newStudent.batch,
      rating: parseInt(newStudent.rating) || 1200,
      puzzlesSolved: 0,
      accuracy: "100%",
      status: "Active",
    };
    setStudents([...students, created]);
    setShowAddStudent(false);
    setNewStudent({ name: "", age: "", batch: "Weekend Advanced", rating: "1200" });
  };

  const handleImportPgn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pgnText) return;
    const created: Puzzle = {
      id: `PZ-00${puzzles.length + 1}`,
      title: `Tactical Puzzle #${puzzles.length + 1}`,
      pgn: pgnText,
      level: pgnLevel,
      assignedBatch: "All Batches",
      solvedCount: 0,
    };
    setPuzzles([...puzzles, created]);
    setShowPgnUpload(false);
    setPgnText("");
  };

  const toggleStudentStatus = (id: string) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, status: s.status === "Active" ? "Inactive" : "Active" } : s))
    );
  };

  const deleteStudent = (id: string) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <ModernKnightLogo size="sm" />
          <span className="px-3 py-1 bg-blue-900/60 text-blue-300 font-extrabold text-xs rounded-md border border-blue-500/30">
            ⚙️ Admin Panel
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/student"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-700 transition-colors"
          >
            Switch to Student Portal
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-gradient-to-r from-[#0B4398] to-[#E11D48] text-white text-xs font-bold rounded-xl"
          >
            Exit to Website
          </Link>
        </div>
      </header>

      {/* Admin Navigation Tabs */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm font-bold">
          {[
            { id: "dashboard", label: "📊 Dashboard" },
            { id: "students", label: "👥 Student Management" },
            { id: "puzzles", label: "🧩 Puzzle Management" },
            { id: "analytics", label: "📈 Analytics & Leaderboards" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-[#E11D48] text-white"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Admin Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-8">
        
        {/* 1. DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Overview Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Enrolled Students</span>
                <p className="text-3xl font-black text-white">{students.length}</p>
                <p className="text-[11px] text-emerald-400 font-medium">↑ +12% this month</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-semibold uppercase">Active PGN Puzzles</span>
                <p className="text-3xl font-black text-pink-400">{puzzles.length}</p>
                <p className="text-[11px] text-slate-400">Categorized in 3 Difficulty Levels</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Solved Attempts</span>
                <p className="text-3xl font-black text-amber-400">1,437</p>
                <p className="text-[11px] text-emerald-400">Average Accuracy 87.4%</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-semibold uppercase">Active Batches</span>
                <p className="text-3xl font-black text-blue-400">6</p>
                <p className="text-[11px] text-slate-400">Weekend & Weekday Regular</p>
              </div>
            </div>

            {/* Recent Activity Feed & Progress Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center justify-between">
                  <span>Recent Student Activity</span>
                  <span className="text-xs text-[#E11D48] font-semibold">Live Feed</span>
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">Aarav Sharma</span> solved <span className="text-amber-400">Smothered Mate in 2</span>
                    </div>
                    <span className="text-[10px] text-slate-500">2 mins ago</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">Sanya Reddy</span> completed <span className="text-emerald-400">10 Daily Puzzles</span>
                    </div>
                    <span className="text-[10px] text-slate-500">15 mins ago</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">Rohan Nambiar</span> reached <span className="text-pink-400">Rating Milestone 1485 FIDE</span>
                    </div>
                    <span className="text-[10px] text-slate-500">1 hour ago</span>
                  </div>
                </div>
              </div>

              {/* Progress Reports Card */}
              <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white">Progress Reports</h3>
                <p className="text-xs text-slate-400">Generate downloadable PDF progress reports for parents & batch evaluations.</p>
                <button
                  onClick={() => alert("Downloading Monthly Academy Progress Report PDF...")}
                  className="w-full py-3 rounded-xl bg-[#0B4398] hover:bg-blue-800 text-white font-extrabold text-xs transition-colors"
                >
                  📥 Export Monthly Batch PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. STUDENT MANAGEMENT TAB */}
        {activeTab === "students" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Student Management</h2>
                <p className="text-xs text-slate-400">Add, edit, assign batches, and activate student accounts.</p>
              </div>
              <button
                onClick={() => setShowAddStudent(true)}
                className="px-5 py-2.5 bg-[#E11D48] hover:bg-pink-600 text-white font-bold text-xs rounded-xl shadow-md"
              >
                + Add New Student
              </button>
            </div>

            {/* Students Table */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">ID</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Age</th>
                      <th className="p-4">Batch</th>
                      <th className="p-4">Rating</th>
                      <th className="p-4">Puzzles Solved</th>
                      <th className="p-4">Accuracy</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {students.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-mono font-bold text-blue-400">{s.id}</td>
                        <td className="p-4 font-bold text-white">{s.name}</td>
                        <td className="p-4">{s.age} yrs</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                            {s.batch}
                          </span>
                        </td>
                        <td className="p-4 font-bold text-amber-400">{s.rating} FIDE</td>
                        <td className="p-4">{s.puzzlesSolved}</td>
                        <td className="p-4 text-emerald-400 font-bold">{s.accuracy}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                              s.status === "Active" ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30" : "bg-red-950 text-red-300 border border-red-500/30"
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => toggleStudentStatus(s.id)}
                            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-[11px]"
                          >
                            Toggle Status
                          </button>
                          <button
                            onClick={() => deleteStudent(s.id)}
                            className="px-2.5 py-1 bg-red-900/50 hover:bg-red-800 text-red-200 rounded-md text-[11px]"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add Student */}
        {showAddStudent && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full space-y-6 relative shadow-2xl">
              <button onClick={() => setShowAddStudent(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
              <h3 className="text-xl font-bold text-white">Add New Academy Student</h3>
              <form onSubmit={handleAddStudent} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Student Full Name</label>
                  <input
                    type="text"
                    required
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Age</label>
                  <input
                    type="number"
                    required
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Assigned Batch</label>
                  <select
                    value={newStudent.batch}
                    onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  >
                    <option>Beginner Morning</option>
                    <option>Intermediate Evening</option>
                    <option>Weekend Advanced</option>
                    <option>Tournament Masterclass</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Initial Rating</label>
                  <input
                    type="number"
                    value={newStudent.rating}
                    onChange={(e) => setNewStudent({ ...newStudent, rating: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-[#E11D48] text-white font-extrabold rounded-xl">
                  Save & Register Student
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 3. PUZZLE MANAGEMENT TAB */}
        {activeTab === "puzzles" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Puzzle Management & PGN Upload</h2>
                <p className="text-xs text-slate-400">Import PGN notation tactical puzzles and assign to student batches.</p>
              </div>
              <button
                onClick={() => setShowPgnUpload(true)}
                className="px-5 py-2.5 bg-[#0B4398] hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md"
              >
                + PGN Bulk Import
              </button>
            </div>

            {/* Puzzles List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {puzzles.map((p) => (
                <div key={p.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-blue-900/40 text-blue-300 text-[10px] font-bold rounded-md border border-blue-500/30">
                      {p.level}
                    </span>
                    <span className="text-[10px] text-slate-400">{p.solvedCount} Solved</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-amber-300">
                    {p.pgn}
                  </p>
                  <p className="text-[11px] text-slate-400">Assigned: {p.assignedBatch}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: PGN Import */}
        {showPgnUpload && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full space-y-6 relative shadow-2xl">
              <button onClick={() => setShowPgnUpload(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
              <h3 className="text-xl font-bold text-white">Import PGN Tactical Puzzle</h3>
              <form onSubmit={handleImportPgn} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">PGN Moves Sequence *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="e.g. 1. Nf7+ Kg8 2. Nh6+ Kh8 3. Qg8+ Rxg8 4. Nf7#"
                    value={pgnText}
                    onChange={(e) => setPgnText(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Difficulty Level</label>
                  <select
                    value={pgnLevel}
                    onChange={(e: any) => setPgnLevel(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Beginner">Beginner Level</option>
                    <option value="Intermediate">Intermediate Level</option>
                    <option value="Advanced">Advanced Level</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3 bg-[#0B4398] text-white font-extrabold rounded-xl">
                  Upload PGN & Assign to Arena
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 4. ANALYTICS & LEADERBOARD MANAGEMENT TAB */}
        {activeTab === "analytics" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Analytics & Monthly Rankings</h2>
              <p className="text-xs text-slate-400">Monitor puzzle accuracy, streak completion, and monthly academy standings.</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Academy Monthly Leaderboard</h3>
              <div className="space-y-3 text-xs">
                {students.map((s, idx) => (
                  <div key={s.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-[10px]">
                        #{idx + 1}
                      </span>
                      <span className="font-bold text-white">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-amber-400 font-bold">{s.puzzlesSolved * 10} XP</span>
                      <span className="text-emerald-400 font-bold">{s.accuracy} Accuracy</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
