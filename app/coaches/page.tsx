"use client";
import React from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";

export default function CoachesPage() {
  const coaches = [
    {
      name: "GM Ravindra Sharma",
      title: "Grandmaster & Head Coach",
      fideRating: "2480 FIDE",
      experience: "18+ Years",
      qualifications: "FIDE Senior Trainer, International Grandmaster Title Holder",
      specialization: "Endgame Mastery, Calculation Depth, Classical Repertoire",
      achievements: [
        "Former National Premier Champion",
        "Coached 45+ FIDE Rated Medalists",
        "Chief Strategist for State Olympic Squad",
      ],
      bio: "GM Ravindra believes that chess teaches emotional control and logical clarity. He conducts masterclasses for advanced rated players.",
      avatar: "👑",
      bg: "from-blue-700 to-slate-900",
    },
    {
      name: "FM Ananya Kulkarni",
      title: "Senior FIDE Master Trainer",
      fideRating: "2290 FIDE",
      experience: "12+ Years",
      qualifications: "FIDE Master, Silver Medalist in Asian Junior Championship",
      specialization: "Tactical Patterns, Opening Theory, Dynamic Position Play",
      achievements: [
        "Coached 12 National Age-Group Medalists",
        "FIDE Trainer Certification since 2016",
        "Active commentator for international championships",
      ],
      bio: "FM Ananya focuses on speed calculation and deep visualization exercises to build dynamic tactics in junior players.",
      avatar: "⚡",
      bg: "from-rose-700 to-slate-900",
    },
    {
      name: "WFM Priya Nambiar",
      title: "Head of Foundation Batches",
      fideRating: "2110 FIDE",
      experience: "9+ Years",
      qualifications: "Woman FIDE Master, 3-time State Women Champion",
      specialization: "Foundational Mechanics, Cognitive Focus, Kid-Friendly Play",
      achievements: [
        "Specialized in U-7 and U-9 junior growth",
        "Curated Academy foundation syllabus",
        "Over 300 beginner kids graduated to rated tournaments",
      ],
      bio: "WFM Priya creates a welcoming, inspiring environment for young kids starting their journey from scratch.",
      avatar: "🌟",
      bg: "from-emerald-700 to-slate-900",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Redesigned Banner */}
      <SubpageBanner
        title="Fide Certified"
        highlight="Mentors."
        subtitle="Learn directly from International Masters, FIDE Trainers, and Senior Experts."
        breadcrumbLabel="Coaches"
        bgImage="/chess-grandmaster.png"
        widgetLeft1Icon="Crown"
        widgetLeft1Label="Mentors"
        widgetLeft1Value="IM & FIDE Trainers"
        widgetLeft2Icon="Award"
        widgetLeft2Label="Experience"
        widgetLeft2Value="15+ Yrs Average"
        widgetRightIcon="Zap"
        widgetRightLabel="Approach"
        widgetRightValue="Interactive PGNs"
      />

      {/* ── Intro Section ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Meet the team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32] leading-tight">
                Coached by the{" "}
                <span className="text-[#E11D48] italic">Best.</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Every coach at Modern Knight Chess Academy is a FIDE-certified professional with real competitive tournament experience. We don't just teach chess — we've played it at the highest levels.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                Our coaching philosophy is built on three pillars: deep positional understanding, tactical sharpness, and the mental resilience that separates good players from great ones.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-100">
                {[
                  { val: "3+",    label: "Expert Coaches" },
                  { val: "15+",   label: "Avg. Years Experience" },
                  { val: "2000+", label: "Students Trained" },
                  { val: "500+",  label: "Trophies Guided" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-[#041C32]">{s.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3 coach avatar teaser cards */}
            <div className="flex flex-col gap-4">
              {[
                { name: "GM Ravindra Sharma", role: "Head Coach · 2480 FIDE", icon: "👑", color: "from-blue-700 to-slate-900" },
                { name: "FM Ananya Kulkarni", role: "Senior Trainer · 2290 FIDE", icon: "⚡", color: "from-rose-700 to-slate-900" },
                { name: "WFM Priya Nambiar",  role: "Foundation Batches · 2110 FIDE", icon: "🌟", color: "from-emerald-700 to-slate-900" },
              ].map((c, i) => (
                <div key={i} className={`flex items-center gap-4 bg-gradient-to-r ${c.color} rounded-2xl p-4 shadow-md`}>
                  <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-2xl shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">{c.name}</p>
                    <p className="text-xs text-blue-200 font-semibold">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Section (from About page) ── */}
      <section className="py-24 bg-[#F5F5FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Image with offset frame & FIDE badge */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              {/* Offset background shape */}
              <div className="absolute top-4 left-4 w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] bg-[#0B4398] rounded-[2.5rem] rounded-tr-[8rem] -z-10 shadow-2xl" />

              {/* Founder image */}
              <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] bg-white border-[12px] border-white shadow-2xl rounded-[2.5rem] rounded-tr-[8rem] overflow-hidden">
                <img
                  src="/founder.jpg"
                  alt="Shubham Trikha - Founder"
                  className="w-full h-full object-cover rounded-[1.5rem] rounded-tr-[7rem]"
                />
              </div>

              {/* Floating FIDE badge */}
              <div className="absolute -left-4 bottom-8 bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 select-none z-20">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">FIDE Certified</p>
                  <p className="text-xs font-black text-white mt-0.5">FIDE ID: 5021626</p>
                </div>
              </div>
            </div>

            {/* Right: Founder details */}
            <div className="lg:col-span-7 space-y-6">

              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#E11D48]">
                <span className="w-8 h-[2px] bg-[#E11D48]" />
                <span>Founder & Head Coach</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-[#041C32] tracking-tight leading-none">
                Shubham <span className="text-[#E11D48]">Trikha.</span>
              </h3>

              <div className="space-y-4 text-slate-600 text-sm md:text-base font-light leading-relaxed">
                <p>
                  As the Founder of <strong className="text-slate-900 font-bold">Modern Knight Chess Academy</strong>, Shubham Trikha is dedicated to raising the standard of chess coaching. He blends deep positional knowledge with modern software analysis to train the next generation of chess masters.
                </p>
                <p>
                  His coaching philosophy focuses on building strong fundamentals, improving calculation skills, and developing strategic thinking, while ensuring chess remains an engaging tool for academic and personal growth.
                </p>
              </div>

              {/* FIDE Credentials */}
              <div className="pt-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3.5">FIDE Credentials</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "FIDE 1987", color: "text-blue-500", icon: "🎯" },
                    { label: "Arena GM",   color: "text-amber-500", icon: "👑" },
                    { label: "FIDE Arbiter", color: "text-purple-500", icon: "🛡" },
                    { label: "Nat. Instructor", color: "text-emerald-500", icon: "⚡" },
                    { label: "Schools Trainer", color: "text-rose-500", icon: "🏆" },
                  ].map((c, i) => (
                    <div key={i} className={`flex items-center gap-2 px-3.5 py-2.5 bg-white border border-slate-100 rounded-xl ${i === 4 ? "sm:col-span-2" : ""}`}>
                      <span className="text-sm">{c.icon}</span>
                      <span className="text-xs font-black text-slate-800">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-white border-l-4 border-l-[#E11D48] p-6 rounded-2xl rounded-l-none italic text-slate-700 text-sm leading-relaxed shadow-sm">
                "We don't just teach moves; we cultivate the discipline, patience, and strategic foresight required for life beyond the 64 squares."
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {coaches.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 hover:shadow-xl transition-all"
            >
              {/* Left Profile Box */}
              <div className={`lg:col-span-4 p-8 bg-gradient-to-br ${c.bg} text-white flex flex-col items-center justify-center text-center space-y-4`}>
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center text-6xl shadow-2xl">
                  {c.avatar}
                </div>
                <span className="px-3 py-1 bg-amber-400/20 text-amber-300 font-extrabold text-xs rounded-full border border-amber-400/30">
                  {c.fideRating}
                </span>
                <h2 className="text-2xl font-black">{c.name}</h2>
                <p className="text-xs font-semibold text-blue-200">{c.title}</p>
                <p className="text-xs text-slate-300">⏱ Experience: {c.experience}</p>
              </div>

              {/* Right Profile Details */}
              <div className="lg:col-span-8 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed italic">{c.bio}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Qualifications</p>
                      <p className="text-xs font-semibold text-slate-900">{c.qualifications}</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Coaching Specialization</p>
                      <p className="text-xs font-semibold text-slate-900">{c.specialization}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Achievements</p>
                    <ul className="space-y-1 text-xs text-slate-700 font-medium">
                      {c.achievements.map((ach, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-amber-500">🏆</span> {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/bookdemo"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0B4398] text-white font-bold text-xs transition-colors"
                  >
                    Request Trial Class with {c.name.split(" ")[1]} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
