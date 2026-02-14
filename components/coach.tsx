"use client";

import React from "react";
import { Award, GraduationCap, Globe, ShieldCheck, Trophy } from "lucide-react";

export default function CoachSection() {
  const credentials = [
    { icon: <Globe className="w-5 h-5" />, text: "International Coach" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "FIDE Instructor (FI)" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Professional Mentor" },
  ];

  const stats = [
    { label: "Experience", value: "25+ Yrs" },
    { label: "Students", value: "500+" },
    { label: "Titles Produced", value: "50+" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- CENTERED HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#01539D]/10 text-[#01539D] text-xs font-bold uppercase tracking-widest mb-6">
            <Trophy className="w-4 h-4" />
            World-Class Mentorship
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Learn from the <span className="text-[#01539D]">Best in the</span> <span className="text-[#46B94A]">World</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Our programs are led by world-renowned instructors who have trained national champions and professional athletes.
          </p>
        </div>

        {/* --- COACH PROFILE CARD --- */}
        <div className="relative bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
          {/* Subtle Chess Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="chess" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="currentColor" />
                <rect x="20" y="20" width="20" height="20" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#chess)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            
            {/* IMAGE SIDE */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12">
              <div className="relative group">
                {/* Background Decor */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#01539D] to-[#46B94A] rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                
                {/* Actual Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/profile2.jpg" // Replace with actual image path
                    alt="Ravindra Raju - International Coach"
                    className="w-full h-full object-cover"
                  />
                  {/* Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center justify-center gap-3 border border-white">
                    <Award className="text-[#01539D] w-6 h-6" />
                    <span className="font-black text-slate-800 text-sm uppercase tracking-tighter">Certified FIDE Instructor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="w-full lg:w-3/5 p-8 lg:p-16 lg:pl-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                  Ravindra <span className="text-[#01539D]">Raju</span>
                </h3>
                <p className="text-[#46B94A] font-black text-lg uppercase tracking-[0.15em] mb-8">
                  International Coach & FIDE Instructor
                </p>

                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium italic">
                  "Chess is not just a game; it is a tool to sharpen the human mind. My goal is to build strategic thinkers who can excel both on the board and in life."
                </p>

                {/* Credentials Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12">
                  {credentials.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[#01539D]">{item.icon}</div>
                      <span className="text-slate-800 font-bold text-xs uppercase tracking-tight">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 py-8 border-t border-slate-100 w-full">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <p className="text-3xl font-black text-[#01539D] leading-none mb-1">{stat.value}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 px-10 py-4 bg-[#01539D] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#01427a] transition-all shadow-xl shadow-blue-100">
                  Register for Masterclass
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}