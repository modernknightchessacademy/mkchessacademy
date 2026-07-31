"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModernKnightLogo } from "@/components/logo";

interface ChessSquare {
  piece: string | null; // e.g. 'wK', 'wQ', 'wR', 'bK', 'bQ', 'bR', 'bN'
  color: "light" | "dark";
}

export default function StudentPortalPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "arena" | "leaderboard">("dashboard");

  // Student Profile Data
  const student = {
    name: "Aarav Sharma",
    fideRating: 1640,
    academyXp: 3420,
    dailyStreak: 14,
    badge: "Master Tactician 🏆",
    batch: "Weekend Advanced Batch A",
  };

  // Interactive Puzzle Arena State
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);
  const [moveFeedback, setMoveFeedback] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const puzzles = [
    {
      id: 1,
      title: "Smothered Mate Sequence",
      level: "Intermediate",
      prompt: "White to move and force checkmate in 2 moves!",
      hint: "Look for a knight jump that double checks the king, forcing it into the corner!",
      solutionDesc: "1. Nf7+ Kg8 2. Nh6+ Kh8 3. Qg8+ Rxg8 4. Nf7#",
      targetMove: [1, 5], // Example target move coordinates for interactive click demo
    },
    {
      id: 2,
      title: "Back Rank Skewer Trap",
      level: "Beginner",
      prompt: "White to move and deliver back-rank mate!",
      hint: "Check the open d-file with your Rook!",
      solutionDesc: "1. Rd8+ Kh7 2. Bd3+ g6 3. Rh8#",
      targetMove: [0, 3],
    },
    {
      id: 3,
      title: "Queen Deflection Sacrifice",
      level: "Advanced",
      prompt: "White to move and checkmate!",
      hint: "Sacrifice the Queen on h8 to draw the black King out!",
      solutionDesc: "1. Qh8+ Kxh8 2. Bf7#",
      targetMove: [0, 7],
    },
  ];

  const puzzle = puzzles[currentPuzzleIdx];

  // Initial 8x8 Board Setup for Demonstration
  const initialBoard: ChessSquare[][] = Array(8)
    .fill(null)
    .map((_, r) =>
      Array(8)
        .fill(null)
        .map((_, c) => ({
          piece: null,
          color: (r + c) % 2 === 0 ? "light" : "dark",
        }))
    );

  // Position setup for Smothered Mate puzzle demo
  // Row 0: Black King at (0,7)=bK, Black Rook at (0,5)=bR, Black Pawns at (1,6),(1,7)
  initialBoard[0][7].piece = "♚"; // Black King
  initialBoard[0][5].piece = "♜"; // Black Rook
  initialBoard[1][6].piece = "♟"; // Black Pawn
  initialBoard[1][7].piece = "♟"; // Black Pawn

  // White Queen at (3,6)=wQ, White Knight at (2,4)=wN, White King at (7,4)=wK
  initialBoard[3][6].piece = "♕"; // White Queen
  initialBoard[2][4].piece = "♘"; // White Knight
  initialBoard[7][4].piece = "♔"; // White King

  const [boardState, setBoardState] = useState<ChessSquare[][]>(initialBoard);

  const handleSquareClick = (r: number, c: number) => {
    if (!selectedSquare) {
      if (boardState[r][c].piece) {
        setSelectedSquare([r, c]);
        setMoveFeedback(null);
      }
    } else {
      const [fromR, fromC] = selectedSquare;
      if (fromR === r && fromC === c) {
        setSelectedSquare(null);
        return;
      }

      // Execute move
      const newBoard = boardState.map((row) => row.map((sq) => ({ ...sq })));
      const pieceToMove = newBoard[fromR][fromC].piece;
      newBoard[fromR][fromC].piece = null;
      newBoard[r][c].piece = pieceToMove;
      setBoardState(newBoard);
      setSelectedSquare(null);

      // Check if correct puzzle solution step
      if (r === puzzle.targetMove[0] && c === puzzle.targetMove[1]) {
        setMoveFeedback("🎉 EXCELLENT! Correct tactical move! Checkmate delivered (+15 XP)");
      } else {
        setMoveFeedback("⚡ Good try! That move is legal, but look deeper for the forcing line. Try Again!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Student Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <ModernKnightLogo size="sm" />
          <span className="px-3 py-1 bg-pink-900/60 text-pink-300 font-extrabold text-xs rounded-md border border-pink-500/30">
            ♟ Student Tactical Portal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-xs font-bold bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-amber-400">🔥 {student.dailyStreak} Day Streak</span>
            <span className="text-[#E11D48]">⭐ {student.fideRating} FIDE</span>
            <span className="text-blue-400">⚡ {student.academyXp} XP</span>
          </div>

          <Link
            href="/"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-700 text-slate-300"
          >
            Website Home
          </Link>
        </div>
      </header>

      {/* Student Nav Bar */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm font-bold">
          {[
            { id: "dashboard", label: "👤 Student Dashboard" },
            { id: "arena", label: "⚔️ Interactive Puzzle Arena" },
            { id: "leaderboard", label: "🏆 Academy Leaderboard" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-[#0B4398] text-white"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-8">
        
        {/* 1. DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Student Welcome Banner */}
            <div className="bg-gradient-to-r from-[#0B4398] via-[#0052CC] to-[#E11D48] rounded-3xl p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider">
                  {student.batch}
                </span>
                <h1 className="text-3xl font-black">Welcome Back, {student.name}! 👋</h1>
                <p className="text-white/90 text-sm">
                  You have <strong className="text-amber-300">3 assigned tactical puzzles</strong> waiting in your Arena today. Keep your daily streak going!
                </p>
              </div>

              <button
                onClick={() => setActiveTab("arena")}
                className="px-6 py-3.5 bg-white text-slate-900 font-black rounded-xl shadow-lg hover:scale-105 transition-transform text-xs shrink-0"
              >
                Launch Puzzle Arena →
              </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">FIDE Rating</span>
                <p className="text-3xl font-black text-amber-400">{student.fideRating}</p>
                <p className="text-[11px] text-emerald-400">+45 points this month</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">Academy Rank</span>
                <p className="text-3xl font-black text-pink-400">#1 Top Solver</p>
                <p className="text-[11px] text-slate-400">Monthly Championship Leader</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">Daily Streak</span>
                <p className="text-3xl font-black text-emerald-400">{student.dailyStreak} Days 🔥</p>
                <p className="text-[11px] text-slate-400">Active Solver Badge Unlocked</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total XP Points</span>
                <p className="text-3xl font-black text-blue-400">{student.academyXp}</p>
                <p className="text-[11px] text-slate-400">Master Level Tier</p>
              </div>
            </div>

            {/* Assigned Puzzles List */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white">Assigned Puzzles for Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {puzzles.map((p, i) => (
                  <div key={p.id} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-extrabold text-[#E11D48]">{p.level}</span>
                      <span className="text-slate-500">Puzzle #{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-slate-400">{p.prompt}</p>
                    <button
                      onClick={() => {
                        setCurrentPuzzleIdx(i);
                        setActiveTab("arena");
                      }}
                      className="w-full py-2.5 bg-[#0B4398] hover:bg-blue-800 text-white font-bold text-xs rounded-lg transition-colors"
                    >
                      Solve in Arena
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. PUZZLE ARENA TAB (INTERACTIVE CHESSBOARD) */}
        {activeTab === "arena" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Digital Chessboard */}
            <div className="lg:col-span-7 bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex justify-between items-center text-xs">
                <span className="px-3 py-1 bg-pink-900/60 text-pink-300 font-extrabold rounded-full border border-pink-500/30">
                  {puzzle.level} Level
                </span>
                <span className="text-slate-400 font-mono">Puzzle #{currentPuzzleIdx + 1} of {puzzles.length}</span>
              </div>

              <h2 className="text-2xl font-black text-white">{puzzle.title}</h2>
              <p className="text-xs text-amber-300 font-semibold bg-slate-950 p-3 rounded-xl border border-slate-800">
                🎯 {puzzle.prompt}
              </p>

              {/* 8x8 Chessboard Visual */}
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl grid grid-cols-8 grid-rows-8 bg-slate-950 select-none">
                {boardState.map((row, rIdx) =>
                  row.map((sq, cIdx) => {
                    const isSelected = selectedSquare && selectedSquare[0] === rIdx && selectedSquare[1] === cIdx;
                    return (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        onClick={() => handleSquareClick(rIdx, cIdx)}
                        className={`flex items-center justify-center text-3xl cursor-pointer transition-all ${
                          sq.color === "light" ? "bg-[#e2d6b5] text-slate-900" : "bg-[#7b8b6f] text-slate-950"
                        } ${isSelected ? "ring-4 ring-amber-400 z-10 scale-105" : ""}`}
                      >
                        {sq.piece || ""}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Feedback Alert */}
              {moveFeedback && (
                <div
                  className={`p-4 rounded-xl text-xs font-bold text-center ${
                    moveFeedback.includes("EXCELLENT")
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                      : "bg-amber-950 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  {moveFeedback}
                </div>
              )}

              {/* Action Buttons: Hint, Retry, Next */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl border border-slate-700"
                >
                  💡 {showHint ? "Hide Hint" : "Need Hint?"}
                </button>

                <button
                  onClick={() => {
                    setBoardState(initialBoard);
                    setSelectedSquare(null);
                    setMoveFeedback(null);
                    setShowHint(false);
                  }}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700"
                >
                  🔄 Reset Board
                </button>

                <button
                  onClick={() => {
                    setCurrentPuzzleIdx((currentPuzzleIdx + 1) % puzzles.length);
                    setSelectedSquare(null);
                    setMoveFeedback(null);
                    setShowHint(false);
                  }}
                  className="px-5 py-2.5 bg-[#0B4398] hover:bg-blue-800 text-white font-extrabold text-xs rounded-xl"
                >
                  Next Puzzle →
                </button>
              </div>

              {showHint && (
                <div className="p-4 bg-amber-950/40 rounded-xl border border-amber-500/30 text-xs text-amber-200 space-y-1">
                  <p className="font-bold">💡 Solution Hint:</p>
                  <p>{puzzle.hint}</p>
                </div>
              )}
            </div>

            {/* Puzzle Details & Solution Breakdown */}
            <div className="lg:col-span-5 bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                PGN Solution Breakdown
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-slate-400 font-semibold uppercase">Official PGN Notation</span>
                  <p className="font-mono text-amber-300 text-sm font-bold">{puzzle.solutionDesc}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-slate-400 font-semibold uppercase">Key Tactical Themes</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-blue-900/40 text-blue-300 rounded-md border border-blue-500/30">
                      Smothered Mate
                    </span>
                    <span className="px-2.5 py-1 bg-pink-900/40 text-pink-300 rounded-md border border-pink-500/30">
                      Double Check
                    </span>
                    <span className="px-2.5 py-1 bg-amber-900/40 text-amber-300 rounded-md border border-amber-500/30">
                      Queen Sacrifice
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                  <p>✔ Solved by 142 Academy Students</p>
                  <p>⭐ Average Solving Time: 1 min 45 sec</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 3. LEADERBOARD TAB */}
        {activeTab === "leaderboard" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Academy Monthly Leaderboard</h2>
              <p className="text-xs text-slate-400">Monthly rankings updated based on solved tactical puzzles and accuracy.</p>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="p-6 divide-y divide-slate-800">
                {[
                  { rank: 1, name: "Aarav Sharma", xp: "3,420 XP", streak: "14 Days", rating: "1640 FIDE", medal: "🥇 Gold" },
                  { rank: 2, name: "Kavya Patel", xp: "3,100 XP", streak: "12 Days", rating: "1710 FIDE", medal: "🥈 Silver" },
                  { rank: 3, name: "Sanya Reddy", xp: "2,950 XP", streak: "10 Days", rating: "1520 FIDE", medal: "🥉 Bronze" },
                  { rank: 4, name: "Rohan Nambiar", xp: "2,400 XP", streak: "8 Days", rating: "1485 FIDE", medal: "Top 5" },
                  { rank: 5, name: "Vihaan Verma", xp: "1,850 XP", streak: "5 Days", rating: "1050 FIDE", medal: "Top 5" },
                ].map((s) => (
                  <div key={s.rank} className="py-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-slate-800 font-extrabold flex items-center justify-center text-amber-400 text-sm">
                        #{s.rank}
                      </span>
                      <div>
                        <p className="font-bold text-white text-sm">{s.name}</p>
                        <p className="text-slate-400 text-[11px]">{s.medal} • {s.rating}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-extrabold text-amber-400 text-sm">{s.xp}</p>
                      <p className="text-emerald-400 font-semibold">{s.streak}</p>
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
