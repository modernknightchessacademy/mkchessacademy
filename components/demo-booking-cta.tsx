"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";

export default function CTASection() {
  const benefits = [
    "Free Skill Assessment",
    "Personalized Growth Roadmap",
    "Expert Trainer Interaction"
  ];

  return (
    <section className="py-12 md:py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- COMPACT BOX --- */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#01539D]/5 to-transparent border border-[#01539D]/10 p-8 md:p-12 lg:p-16">
          
          {/* Decorative Background Icons */}
          <div className="absolute -top-10 -right-10 opacity-[0.03] text-[#01539D] rotate-12">
            <Zap size={300} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* LEFT: CONTENT */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46B94A]/10 text-[#46B94A] font-bold text-[10px] uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join 500+ Future-Ready Kids</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                Ready to Sharpen Your <br className="hidden md:block" />
                <span className="text-[#01539D]">Child's Cognitive Skills?</span>
              </h2>

              <p className="text-slate-600 text-lg font-medium mb-8 max-w-xl mx-auto lg:mx-0">
                Experience our professional coaching in Chess, Coding, and Logic. 
                Start their journey to excellence with a free session.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 mb-10">
                {benefits.map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#46B94A]">
                    <CheckCircle2 size={18} strokeWidth={3} />
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-tight">{text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/bookdemo" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#01539D] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#01427a] transition-all shadow-xl shadow-blue-100 active:scale-95">
                    Get Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <Link href="tel:+91 9948198809" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#46B94A] hover:text-[#46B94A] transition-all active:scale-95">
                    <Phone className="w-4 h-4" />
                    Talk to Expert
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT: COMPACT VISUAL */}
            <div className="lg:w-1/3 flex items-center justify-center">
              <div className="relative">
                {/* Floating Card Design */}
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 flex flex-col items-center text-center max-w-[260px] animate-bounce-slow">
                  <div className="w-16 h-16 rounded-2xl bg-[#46B94A] flex items-center justify-center text-white mb-4 shadow-lg shadow-green-100">
                    <Zap size={32} fill="currentColor" />
                  </div>
                  <h4 className="font-black text-slate-800 text-xl leading-tight mb-2">Next Batch Starting Soon!</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Limited Seats</p>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#01539D]" />
                  </div>
                  <p className="mt-3 text-[10px] text-slate-500 font-bold italic">75% slots filled this week</p>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#01539D]/10 rounded-full blur-xl -z-10" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#46B94A]/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}