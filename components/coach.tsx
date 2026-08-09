"use client";
import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const CoachSection: React.FC = () => {
  const coaches = [
    {
      name: "G Karthik Gopal",
      role: "Founder & Head Coach",
      fideRating: "1848 FIDE",
      experience: "Founder & Head Coach",
      specialization: "Clear Thinking, Accurate Calculation & Tactical Awareness",
      achievements: ["Arena Grand Master", "Senior National Arbiter", "National Instructor", "Chess in Schools Trainer"],
      image: "/coach2.jpg",
      objectPosition: "object-center",
      borderColor: "hover:border-[#0B4398] hover:shadow-[0_20px_50px_rgba(11,67,152,0.08)]",
      roleColor: "text-[#0B4398] bg-blue-50 border-blue-100",
      hoverColor: "group-hover:text-[#0B4398]",
    },
    {
      name: "G Hema Chandra Mouli",
      role: "Lead Coach",
      fideRating: "1987 FIDE",
      experience: "Lead Coach",
      specialization: "Positional Strategy, Calculation Depth & Endgames",
      achievements: ["Arena Grand Master", "FIDE Arbiter", "National Instructor", "Chess in Schools Trainer"],
      image: "/founder.jpg",
      objectPosition: "center 25%",
      borderColor: "hover:border-[#E11D48] hover:shadow-[0_20px_50px_rgba(225,29,72,0.08)]",
      roleColor: "text-[#E11D48] bg-rose-50 border-rose-100",
      hoverColor: "group-hover:text-[#E11D48]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block shadow-sm">
            🛡️ Elite Mentorship
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Learn From Certified <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">FIDE Coaches</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Our coaching team consists of world-class experts with decades of tournament successes and professional teaching credentials.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2.5rem] border border-slate-100/90 overflow-hidden ${coach.borderColor} shadow-[0_10px_30px_rgba(11,67,152,0.015)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between`}
            >
              {/* Profile Image & Rating Banner */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: coach.objectPosition || "center" }}
                />
                
                {/* Floating Rating Tag */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="px-3.5 py-1.5 bg-amber-400 text-amber-950 font-black text-[10px] tracking-widest rounded-xl shadow-md uppercase border border-amber-300/30">
                    {coach.fideRating}
                  </span>
                </div>
              </div>

              {/* Coach details content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Role Tag */}
                  <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${coach.roleColor}`}>
                    {coach.role}
                  </span>
                  
                  {/* Coach Name */}
                  <h3 className={`text-2xl font-black text-slate-900 mt-2 ${coach.hoverColor} transition-colors`}>
                    {coach.name}
                  </h3>
                  
                  {/* Experience */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Experience: {coach.experience}</span>
                  </div>

                  {/* Specializations & Key Achievements */}
                  <div className="pt-6 border-t border-slate-100 space-y-5">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                        Specialization
                      </h4>
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {coach.specialization}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                        Credentials & Roles
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {coach.achievements.map((ach, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100"
                          >
                            🛡️ {ach}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meet All Coaches Button */}
        <div className="text-center mt-16">
          <Link
            href="/coaches"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0B4398] to-[#E11D48] hover:opacity-95 text-white font-extrabold text-sm rounded-xl shadow-[0_10px_20px_rgba(11,67,152,0.15)] hover:shadow-[0_15px_25px_rgba(225,29,72,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Meet All FIDE Coaches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;