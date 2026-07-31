"use client";
import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const CoachSection: React.FC = () => {
  const coaches = [
    {
      name: "GM Ravindra Sharma",
      role: "Founder & Head Coach",
      fideRating: "Peak FIDE 2480",
      experience: "18+ Years Experience",
      specialization: "Endgame Mastery & Grandmaster Calculation",
      achievements: "Trained 45+ FIDE Rated Medalists, Former State Champion",
      image: "/ravin.png",
      borderColor: "hover:border-[#0B4398]",
      roleColor: "text-[#0B4398] bg-blue-50 border-blue-100",
      hoverColor: "group-hover:text-[#0B4398]",
    },
    {
      name: "FM Ananya Kulkarni",
      role: "Senior FIDE Master Trainer",
      fideRating: "FIDE 2290",
      experience: "12+ Years Experience",
      specialization: "Opening Repertoires & Positional Strategy",
      achievements: "Asian Youth Championship Gold Medalist Coach",
      image: "/avatar2.png",
      borderColor: "hover:border-[#E11D48]",
      roleColor: "text-[#E11D48] bg-rose-50 border-rose-100",
      hoverColor: "group-hover:text-[#E11D48]",
    },
    {
      name: "IM David Miller",
      role: "International Master Coach",
      fideRating: "FIDE 2395",
      experience: "15+ Years Experience",
      specialization: "Tactical Vision & Blitz Clock Strategy",
      achievements: "FIDE Certified Senior Instructor",
      image: "/avatar1.jpg",
      borderColor: "hover:border-[#0B4398]",
      roleColor: "text-[#0B4398] bg-blue-50 border-blue-100",
      hoverColor: "group-hover:text-[#0B4398]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
            FIDE Certified Mentors
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Learn From <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Grandmasters</span> & Masters
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Our coaching team consists of world-class title holders who possess passion, proven methodology, and years of competitive experience.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2rem] border-2 border-slate-100/90 overflow-hidden ${coach.borderColor} shadow-[0_10px_35px_rgba(11,67,152,0.02)] hover:shadow-[0_20px_50px_rgba(11,67,152,0.07)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between`}
            >
              {/* Profile Image & Rating Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10" />
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Rating Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3.5 py-1.5 bg-amber-400 text-amber-950 font-black text-[10px] tracking-widest rounded-lg shadow-sm uppercase">
                    {coach.fideRating}
                  </span>
                </div>
              </div>

              {/* Coach details content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
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
                    <span>{coach.experience}</span>
                  </div>

                  {/* Specializations & Key Achievements */}
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Specialization
                      </h4>
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {coach.specialization}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Key Achievements
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        {coach.achievements}
                      </p>
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