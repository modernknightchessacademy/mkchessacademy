"use client";
import React from "react";
import Link from "next/link";
import { Award, BookOpen, Brain, Trophy, ArrowRight } from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl -z-10" />

      {/* Subtle watermark pattern behind content */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center -z-10">
        <span className="text-[30rem] font-black leading-none select-none">♔</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why choose <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">us?</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We go beyond standard chess lessons by building analytical thinking, emotional resilience, and strategic problem-solving skills that last a lifetime.
          </p>
        </div>

        {/* Three-Column Grid sitting directly on the main background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column - Cards with Blue & Pink borders */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
            {/* Feature 1 - Blue Theme Card */}
            <div className="group text-center flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-blue-100/85 hover:border-[#0B4398] shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4398] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#0B4398] group-hover:text-white transition-all duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                FIDE Certified Coaches
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Learn directly from international masters and FIDE-rated coaches with decades of professional tournament experience.
              </p>
            </div>

            {/* Feature 2 - Pink Theme Card */}
            <div className="group text-center flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-rose-100/85 hover:border-[#E11D48] shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Structured 5-Tier Syllabus
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Step-by-step progressive learning modules taking students from absolute fundamentals to grandmaster opening repertoires.
              </p>
            </div>
          </div>

          {/* Center Column - Image & CTA */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-10">
            {/* Image Container with Gradient Offset Background Card */}
            <div className="relative w-full max-w-[280px]">
              {/* Gradient Offset decorative background shadow block using brand colors */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-[#0B4398]/20 to-[#E11D48]/20 rounded-2xl -z-10" />

              {/* Main image card */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/hero3.png"
                  alt="Chess Academy Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CTA Button using brand gradient */}
            <Link
              href="/bookdemo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0B4398] to-[#E11D48] hover:opacity-95 text-white font-extrabold text-base rounded-xl shadow-[0_10px_20px_rgba(11,67,152,0.15)] hover:shadow-[0_15px_25px_rgba(225,29,72,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column - Cards with Blue & Pink borders */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
            {/* Feature 3 - Blue Theme Card */}
            <div className="group text-center flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-blue-100/85 hover:border-[#0B4398] shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4398] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#0B4398] group-hover:text-white transition-all duration-300">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Interactive Puzzle Arena
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                24/7 access to our custom Student Portal with interactive PGN tactics, instant engine analysis, and monthly leaderboards.
              </p>
            </div>

            {/* Feature 4 - Pink Theme Card */}
            <div className="group text-center flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-rose-100/85 hover:border-[#E11D48] shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                1-on-1 Game Analysis
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Deep computer-aided review of student tournament games to identify calculation flaws, positional weaknesses, and missed opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;