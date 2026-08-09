"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";
import { CoursesSection } from "@/components/courses-section";
import { TestimonialsSection } from "@/components/testimonials-section";

const courseDetails = [
  {
    id: "beginner",
    no: "01",
    title: "Foundations & Pieces",
    subtitle: "Pawn to Knight Program",
    badge: "Beginner",
    badgeColor: "bg-blue-100 text-blue-700",
    accentColor: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-200",
    accentText: "text-blue-600",
    icon: "/bishop.png",

    duration: "3 Months",
    sessions: "24 Live Sessions",
    weeklyClasses: "2 classes / week (90 min each)",
    practiceSession: "1 guided puzzle session / week",
    certificate: "Yes — Course Completion Certificate",
    mode: "Online & Offline",
    overview:
      "The Foundations & Pieces program is designed for complete beginners and casual players who want to build a solid chess foundation. Students master piece rules, basic tactical patterns, and elementary checkmates through structured live sessions and guided puzzle practice.",
    whoFor: "Absolute beginners with no prior chess knowledge, school students (Age 6+), casual players wanting to improve fundamentals, parents learning alongside children.",
    whatLearn: [
      "How every chess piece moves and captures",
      "Board geometry — files, ranks, diagonals, and square colours",
      "Centre control and why it matters in every game",
      "Basic checkmate patterns — Scholar's Mate, Back Rank, 2-Rook",
      "Elementary tactics — forks, pins, skewers",
      "Opening principles: development, castling, king safety",
      "How to read and write chess moves (chess notation)",
    ],
    outcomes: [
      "Play complete games with full understanding of rules",
      "Spot and execute basic checkmates confidently",
      "Avoid common beginner blunders",
      "Calculate 1–2 moves ahead in positions",
      "Complete puzzles on the student portal independently",
    ],
  },
  {
    id: "intermediate",
    no: "02",
    title: "Tactics & Positions",
    subtitle: "Bishop & Rook Tactics Program",
    badge: "Intermediate",
    badgeColor: "bg-purple-100 text-purple-700",
    accentColor: "from-purple-500 to-indigo-700",
    borderColor: "border-purple-200",
    accentText: "text-purple-600",
    icon: "/knight.png",

    duration: "4 Months",
    sessions: "32 Live Sessions",
    weeklyClasses: "2 classes / week (90 min each)",
    practiceSession: "1 live weekly online tournament",
    certificate: "Yes — Intermediate Proficiency Certificate",
    mode: "Online & Offline",
    overview:
      "The Tactics & Positions program takes students from basic knowledge to competitive club strength. Students develop deeper calculation habits, learn to exploit pawn structure advantages, control open files with rooks, and handle essential endgame positions with confidence.",
    whoFor: "Players rated 800–1400 (or equivalent skill), students who have completed our Beginner Program, juniors preparing for their first school or district tournaments.",
    whatLearn: [
      "Advanced tactical patterns — discovered attacks, deflection, decoys",
      "Middle-game planning around pawn structures",
      "Open and half-open file control with rooks",
      "Piece activity and outpost squares for knights",
      "Basic endgame positions — K+P vs K, rook endgames",
      "How to analyse your own games and find improvement points",
      "Blitz and rapid clock management strategies",
    ],
    outcomes: [
      "Calculate 3–4 moves deep in tactical positions",
      "Build coherent middle-game plans",
      "Defend and win basic rook endgames",
      "Prepare and play in district-level tournaments",
      "Earn a FIDE rapid/blitz rating for the first time",
    ],
  },
  {
    id: "advanced",
    no: "03",
    title: "Strategy & Masterclass",
    subtitle: "Queen & King Elite Program",
    badge: "Advanced",
    badgeColor: "bg-rose-100 text-rose-700",
    accentColor: "from-rose-500 to-red-600",
    borderColor: "border-rose-200",
    accentText: "text-rose-600",
    icon: "/king.png",

    duration: "6 Months",
    sessions: "48 Live Sessions",
    weeklyClasses: "2 classes / week (2 hours each)",
    practiceSession: "2 practice sessions / week + puzzle analysis",
    certificate: "Yes — Advanced Excellence Certificate (FIDE-endorsed training)",
    mode: "Online & Offline",
    overview:
      "The Strategy & Masterclass program is our flagship competitive track for rated players aiming to break through to 1800+ FIDE. Students train with structured opening repertoires, deep calculation exercises, complex pawn structure battles, and positional sacrifices — the weapons of titled players.",
    whoFor: "Rated players (1400–1800 FIDE or equivalent), students with serious tournament ambitions, juniors targeting state and national championships.",
    whatLearn: [
      "Candidate move discipline — listing and calculating all key moves",
      "Prophylaxis — anticipating opponent's threats before they happen",
      "Positional pawn sacrifices for long-term compensation",
      "Opening repertoire construction for White and Black",
      "Complex endgame theory — bishop pairs, opposite-colour bishops",
      "FIDE rated opponent analysis and pre-game preparation",
      "Psychological clock play and time pressure technique",
    ],
    outcomes: [
      "Reach 1600–1800 FIDE rating within the program",
      "Build and memorise a complete opening repertoire",
      "Spot and execute positional sacrifices",
      "Compete confidently at state-level events",
      "Prepare for FIDE title norms (candidate FM)",
    ],
  },
  {
    id: "gm",
    no: "04",
    title: "Grandmaster Preparation",
    subtitle: "1-on-1 FIDE Mentorship Program",
    badge: "Elite / GM Track",
    badgeColor: "bg-amber-100 text-amber-700",
    accentColor: "from-amber-500 to-orange-600",
    borderColor: "border-amber-200",
    accentText: "text-amber-600",
    icon: "/mission.png",

    duration: "Ongoing — custom per student",
    sessions: "Custom flexible schedule",
    weeklyClasses: "2–4 personalised 1-on-1 sessions / week",
    practiceSession: "Daily puzzle sets + post-game video analysis",
    certificate: "Performance report + FIDE norm preparation documentation",
    mode: "Online & Offline",
    overview:
      "The Grandmaster Preparation program is our elite, fully personalised track for title-aspiring players. Conducted directly by our FIDE Instructors and GM-level coaches, every session is custom-built around the student's tournament schedule, current rating, and specific weaknesses identified through PGN analysis.",
    whoFor: "FIDE rated players (1800+) targeting FM/IM/GM norms, students with full-time chess ambitions, players actively competing in state, national, or international events.",
    whatLearn: [
      "Deep opening preparation with personalised repertoire databases",
      "Opponent-specific pre-tournament profiling and game analysis",
      "Advanced endgame theory — rook and pawn, opposite bishops, fortresses",
      "Psychological conditioning for multi-day events",
      "Time trouble technique and increment exploitation",
      "Post-game video breakdown of every tournament game",
      "FIDE norm calculation and tournament selection strategy",
    ],
    outcomes: [
      "Systematic rating improvement toward FM/IM norm",
      "Full personalised opening repertoire built and tested",
      "Tournament-ready mental and clock management",
      "FIDE norm opportunities identified and pursued",
      "1-on-1 mentorship continuity across every stage",
    ],
  },
];

export default function CoursesPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <SubpageBanner
        title="Featured"
        highlight="Programs."
        subtitle="Structured FIDE-aligned learning paths from beginner to master level."
        breadcrumbLabel="Courses"
        bgImage="/advan.jpg"
        widgetLeft1Icon="BookOpen"
        widgetLeft1Label="Modules"
        widgetLeft1Value="4 Progressive Tiers"
        widgetLeft2Icon="Award"
        widgetLeft2Label="Certified"
        widgetLeft2Value="FIDE Instructors"
        widgetRightIcon="Globe"
        widgetRightLabel="Portal"
        widgetRightValue="24/7 Practice Arenas"
      />

      {/* Homepage Courses Overview */}
      <CoursesSection />

      {/* ── Course Details Section ── */}
      <section className="py-20 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">What's inside</span>
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32]">
              Course <span className="text-[#E11D48] italic">Details.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Everything you need to know about each program — overview, curriculum, schedule, and outcomes.
            </p>
          </div>

          {/* Course Detail Cards */}
          <div className="space-y-8">
            {courseDetails.map((course) => {
              const isOpen = open === course.id;
              return (
                <div
                  key={course.id}
                  className={`bg-white rounded-3xl border-2 ${course.borderColor} shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
                >
                  {/* Card Header — always visible */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* Left: Gradient accent strip + icon */}
                    <div className={`lg:col-span-1 bg-gradient-to-b ${course.accentColor} flex items-center justify-center py-6 lg:py-0 min-h-[80px]`}>
                      <img src={course.icon} alt={course.title} className="w-12 h-12 object-contain drop-shadow-md" />
                    </div>

                    {/* Center: Title + badges */}
                    <div className="lg:col-span-9 px-6 md:px-8 py-6 flex flex-col justify-center gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Program {course.no}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-wider">
                          {course.mode}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-[#041C32] leading-snug">
                        {course.title}
                        <span className={`ml-3 text-sm font-semibold italic ${course.accentText}`}>{course.subtitle}</span>
                      </h3>

                      {/* Quick stats row */}
                      <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1">
                        {[
                          { icon: "🗓", label: course.duration },
                          { icon: "📚", label: course.sessions },
                          { icon: "⏰", label: course.weeklyClasses },
                          { icon: "🏅", label: course.certificate.startsWith("Yes") ? "Certificate Included" : "No Certificate" },
                        ].map((s, i) => (
                          <span key={i} className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                            <span>{s.icon}</span> {s.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Toggle */}
                    <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col items-center justify-center gap-3 py-6 px-4">
                      <button
                        onClick={() => setOpen(isOpen ? null : course.id)}
                        className={`w-full py-2 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200 border-2 ${
                          isOpen
                            ? `bg-gradient-to-r ${course.accentColor} text-white border-transparent`
                            : `bg-transparent ${course.accentText} ${course.borderColor} hover:opacity-80`
                        }`}
                      >
                        {isOpen ? "Hide Details ↑" : "View Details ↓"}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isOpen && (
                    <div className="border-t-2 border-dashed border-slate-100 px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                      {/* Column 1: Overview + Who it's for */}
                      <div className="lg:col-span-1 space-y-7">
                        <div>
                          <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 ${course.accentText}`}>Overview</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{course.overview}</p>
                        </div>
                        <div>
                          <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 ${course.accentText}`}>Who It's For</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{course.whoFor}</p>
                        </div>

                        {/* Schedule details */}
                        <div className="bg-slate-50 rounded-2xl p-5 space-y-3 border border-slate-100">
                          <h4 className={`text-[10px] font-black uppercase tracking-widest ${course.accentText}`}>Schedule & Logistics</h4>
                          {[
                            { label: "Duration", value: course.duration },
                            { label: "Total Sessions", value: course.sessions },
                            { label: "Weekly Classes", value: course.weeklyClasses },
                            { label: "Practice Sessions", value: course.practiceSession },
                            { label: "Mode", value: course.mode },
                            { label: "Certificate", value: course.certificate },
                          ].map((item) => (
                            <div key={item.label} className="flex flex-col gap-0.5">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                              <span className="text-xs font-semibold text-slate-700">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: What You'll Learn */}
                      <div className="lg:col-span-1 space-y-4">
                        <h4 className={`text-[10px] font-black uppercase tracking-widest ${course.accentText}`}>What You'll Learn</h4>
                        <ul className="space-y-3">
                          {course.whatLearn.map((item, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                              <span className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${course.accentColor} flex items-center justify-center text-white text-[9px] font-black shrink-0`}>
                                {i + 1}
                              </span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Learning Outcomes + CTA */}
                      <div className="lg:col-span-1 space-y-6">
                        <div>
                          <h4 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${course.accentText}`}>Learning Outcomes</h4>
                          <ul className="space-y-3">
                            {course.outcomes.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                                <span className="mt-0.5 text-emerald-500 font-black text-base leading-none">✓</span>
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className={`rounded-2xl bg-gradient-to-br ${course.accentColor} p-6 text-white space-y-4 relative overflow-hidden`}>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[80px] text-white/10 leading-none select-none font-black">♟</div>
                          <div className="relative z-10 space-y-1">
                            <p className="text-base font-black">Ready to get started?</p>
                            <p className="text-xs text-white/70">Book a free demo class with our coach and find the right program for your level.</p>
                          </div>
                          <Link
                            href="/bookdemo"
                            className="relative z-10 block w-full py-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-black text-xs uppercase tracking-widest rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                          >
                            Book Free Demo →
                          </Link>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What You'll Receive ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Included in every program</span>
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32]">
              What You'll <span className="text-[#E11D48] italic">Receive.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Every student at Modern Knight Academy gets a complete learning ecosystem — not just live classes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📘", title: "Structured Curriculum",     desc: "FIDE-aligned progressive syllabus designed to take you from beginner to tournament-ready systematically.", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100" },
              { icon: "📄", title: "Study Materials",           desc: "Curated PDFs, annotated PGN game files, and reference sheets for every lesson topic covered in class.", color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100" },
              { icon: "🎥", title: "Recorded Sessions",         desc: "Online batch students receive session recordings to revisit lessons, review missed content, and self-study at any time.", color: "bg-rose-50 border-rose-100", iconBg: "bg-rose-100" },
              { icon: "🏆", title: "Tournament Guidance",       desc: "Coach-assisted tournament selection, preparation strategy, and post-event PGN game analysis for every round.", color: "bg-amber-50 border-amber-100", iconBg: "bg-amber-100" },
              { icon: "📊", title: "Progress Reports",          desc: "Monthly written progress reports with rating trajectory, strengths, areas of improvement, and next-step recommendations.", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100" },
              { icon: "💬", title: "Doubt Support",             desc: "Dedicated WhatsApp doubt channel answered by your coach within 24 hours for any lesson or puzzle question.", color: "bg-cyan-50 border-cyan-100", iconBg: "bg-cyan-100" },
              { icon: "📝", title: "Practice Worksheets",       desc: "Weekly printed or digital worksheets with themed puzzles, opening drills, and endgame positions to reinforce class content.", color: "bg-indigo-50 border-indigo-100", iconBg: "bg-indigo-100" },
              { icon: "🌐", title: "Student Portal Access",     desc: "24/7 access to the Modern Knight student portal featuring ranked puzzles, live arenas, PGN libraries, and progress dashboards.", color: "bg-slate-50 border-slate-100", iconBg: "bg-slate-100" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${item.color} flex flex-col gap-4 hover:shadow-md transition-shadow duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-[#041C32] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Progress Journey ── */}
      <section className="py-20 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Your learning journey</span>
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32]">
              Student <span className="text-[#E11D48] italic">Progress.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              A clear, structured pathway that takes every student from first moves to national competitions.
            </p>
          </div>

          {/* Progress steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-rose-200 to-amber-300 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "Level 1",
                  label: "Foundations",
                  icon: "♟",
                  color: "bg-gradient-to-br from-blue-500 to-indigo-600",
                  border: "border-blue-200",
                  bg: "bg-blue-50",
                  text: "text-blue-700",
                  rating: "Unrated → 800",
                  points: ["Piece rules & movement", "Basic checkmates", "Elementary tactics", "Opening principles"],
                },
                {
                  step: "Level 2",
                  label: "Tactics & Play",
                  icon: "♜",
                  color: "bg-gradient-to-br from-purple-500 to-indigo-700",
                  border: "border-purple-200",
                  bg: "bg-purple-50",
                  text: "text-purple-700",
                  rating: "800 → 1400",
                  points: ["Deep tactical patterns", "Middle-game planning", "Rook endgame basics", "Weekly club tournaments"],
                },
                {
                  step: "Level 3",
                  label: "Strategy & Mastery",
                  icon: "♛",
                  color: "bg-gradient-to-br from-rose-500 to-red-600",
                  border: "border-rose-200",
                  bg: "bg-rose-50",
                  text: "text-rose-700",
                  rating: "1400 → 1800",
                  points: ["Opening repertoire", "Candidate move method", "Complex endgames", "State-level prep"],
                },
                {
                  step: "Elite",
                  label: "Tournament Player",
                  icon: "👑",
                  color: "bg-gradient-to-br from-amber-500 to-orange-600",
                  border: "border-amber-200",
                  bg: "bg-amber-50",
                  text: "text-amber-700",
                  rating: "1800+ FIDE",
                  points: ["1-on-1 GM mentorship", "Opponent profiling", "FIDE norm pursuit", "National competitions"],
                },
              ].map((stage, i) => (
                <div key={i} className={`flex flex-col items-center text-center`}>
                  {/* Icon circle */}
                  <div className={`w-16 h-16 rounded-full ${stage.color} flex items-center justify-center text-white text-2xl shadow-lg mb-4 border-4 border-white`}>
                    {stage.icon}
                  </div>

                  {/* Card */}
                  <div className={`w-full rounded-2xl border-2 ${stage.border} ${stage.bg} p-5 space-y-3`}>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest ${stage.text} mb-0.5`}>{stage.step}</p>
                      <h3 className="font-black text-[#041C32] text-base">{stage.label}</h3>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${stage.bg} ${stage.text} border ${stage.border}`}>
                        {stage.rating}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-left">
                      {stage.points.map((pt, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${stage.color} shrink-0`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Success Stories (homepage testimonials) ── */}
      <TestimonialsSection />

      {/* Bottom CTA */}
      <section className="py-10 px-4 md:px-8 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#041C32] via-[#0B4398] to-[#041C32] shadow-xl">
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-[#0B4398]/40 blur-3xl pointer-events-none" />
            <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-[#E11D48]/20 blur-3xl pointer-events-none" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[130px] text-white/[0.04] font-black select-none pointer-events-none leading-none hidden lg:block">♞</div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-8">
              {/* Left */}
              <div className="flex flex-col gap-3 max-w-lg">
                <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admissions Open 2025–26
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                  Not sure which course fits{" "}
                  <span className="italic text-[#E11D48]">you best?</span>
                </h2>
                <p className="text-blue-200 text-xs leading-relaxed">
                  Book a free 45-min trial class. Our coach will evaluate your level and give a personalised recommendation.
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Link href="/bookdemo" className="inline-flex items-center px-5 py-2.5 bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(225,29,72,0.4)]">
                    Book Free Evaluation
                  </Link>
                  <a href="https://wa.me/919885302468" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="flex items-center gap-8 shrink-0">
                {[
                  { val: "2,000+", label: "Students" },
                  { val: "15+",    label: "Years" },
                  { val: "500+",   label: "Trophies" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-black text-white leading-none">{s.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
