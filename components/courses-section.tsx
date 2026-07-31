"use client";
import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const CoursesSection: React.FC = () => {
  const courses = [
    {
      programNo: "Program 01",
      image: "/bishop.png",
      title: "Foundations & Pieces",
      description:
        "Master piece movements, fundamental checkmates, and basic board calculation motifs in standard chess play.",
      outcomes: [
        "Basic Piece Mechanics",
        "Simple Checkmate Patterns",
        "Introduction to Forks & Pins",
        "Board Vision & Counting"
      ],
      focus: "Spatial",
      mastery: "85%",
      color: "from-blue-500 to-indigo-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-100",
      progressColor: "bg-blue-600",
      circleColor: "border-blue-200 text-blue-600",
    },
    {
      programNo: "Program 02",
      image: "/knight.png",
      title: "Tactics & Positions",
      description:
        "Deepen tactical calculation, middle-game planning, open files strategy, and basic endgame structures.",
      outcomes: [
        "Tactical Pins & Skewers",
        "Middle-Game Positional Play",
        "File & Rank Control",
        "Active Rook Endgame Basics"
      ],
      focus: "Logic",
      mastery: "75%",
      color: "from-purple-500 to-indigo-700",
      buttonColor: "bg-purple-600 hover:bg-purple-700 shadow-purple-100",
      progressColor: "bg-purple-600",
      circleColor: "border-purple-200 text-purple-600",
    },
    {
      programNo: "Program 03",
      image: "/king.png",
      title: "Strategy & Masterclass",
      description:
        "Establish structured opening systems, candidate move calculation procedures, and complex endgame theory.",
      outcomes: [
        "Opening Repertoire Setup",
        "Deep Move Calculation",
        "Minor Piece Endgame Play",
        "Positional Sacrifice Strategy"
      ],
      focus: "Tactics",
      mastery: "70%",
      color: "from-rose-500 to-red-600",
      buttonColor: "bg-rose-600 hover:bg-rose-700 shadow-rose-100",
      progressColor: "bg-rose-600",
      circleColor: "border-rose-200 text-rose-600",
    },
    {
      programNo: "Program 04",
      image: "/mission.png",
      title: "Grandmaster Preparation",
      description:
        "Opponent profiling prep, intense PGN tournament analysis, mental toughness, and clock control strategies.",
      outcomes: [
        "Opponent Profiling Tactics",
        "Intensive Clock Management",
        "FIDE Mental Conditioning",
        "Professional Game Analysis"
      ],
      focus: "Strategy",
      mastery: "90%",
      color: "from-amber-500 to-orange-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700 shadow-amber-100",
      progressColor: "bg-amber-600",
      circleColor: "border-amber-200 text-amber-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-3">
            <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
              Training Programs
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Chess <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Courses</span>
            </h2>
            <p className="text-slate-600 text-base max-w-xl font-light">
              Curriculum crafted according to FIDE international standards, suited for all age groups and rating levels.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[#0B4398] font-bold hover:text-[#E11D48] transition-colors group"
          >
            <span>View Full Syllabus & Timings</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] border-2 border-slate-100/90 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Header (Gradient background with dotted overlay & floating piece) */}
              <div className={`relative h-52 bg-gradient-to-br ${course.color} overflow-hidden flex items-center justify-center`}>
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                
                {/* Program Badge */}
                <div className="absolute top-4 left-4 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest text-white uppercase select-none">
                  {course.programNo}
                </div>

                {/* Floating Piece graphic */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-28 h-28 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] select-none group-hover:scale-110 transition-transform duration-300 z-10"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Course Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase mb-3 leading-snug group-hover:text-[#0B4398] transition-colors">
                    {course.title}
                  </h3>
                  
                  {/* Course Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    {course.description}
                  </p>

                  {/* Learning Outcomes Header */}
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">
                    Learning Outcomes
                  </div>

                  {/* Outcomes Checklist */}
                  <ul className="space-y-3 mb-8">
                    {course.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                        <span className={`w-5 h-5 rounded-full border-2 ${course.circleColor} flex items-center justify-center shrink-0`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="truncate">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Stats & Progress Section */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                        Cognitive Focus
                      </span>
                      <span className="text-sm font-extrabold text-slate-900 mt-1">
                        {course.focus}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                        Mastery Curve
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${course.progressColor}`}
                            style={{ width: course.mastery }}
                          />
                        </div>
                        <span className="text-xs font-black text-slate-900">
                          {course.mastery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href="/bookdemo"
                    className={`w-full py-4 ${course.buttonColor} text-white font-extrabold text-xs tracking-widest uppercase rounded-2xl text-center flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0`}
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
