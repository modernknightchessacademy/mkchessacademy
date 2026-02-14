"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-10 pb-20 lg:pt-5 lg:pb-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#46B94A]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#01539D]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46B94A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#46B94A]"></span>
              </span>
              <span className="text-[12px] font-bold text-[#46B94A] uppercase tracking-wider">
                Admissions Open 2024-25
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
              Empowering Kids with <br />
              <span className="text-[#01539D]">Future-Ready</span>{" "}
              <span className="text-[#46B94A]">Skills</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We go beyond traditional academics. Master 
              <span className="font-bold text-slate-800"> Chess, Coding, Logic, and Communication</span> 
              through our specialized curriculum designed to build the leaders of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/bookdemo"
                className="w-full sm:w-auto px-10 py-4 bg-[#01539D] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-[#01427a] hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free Demo
              </a>
              <a
                href="/programs"
                className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-100 hover:border-[#46B94A] hover:text-[#46B94A] transition-all duration-300"
              >
                Explore Programs
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800">500+</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Students Trained</span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800">4.9/5</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Parent Rating</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" // Replace with a photo of a child learning/playing chess
                alt="Child Learning Future Skills"
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />
            </div>

            {/* Floating Skill Tags (Matches your image list) */}
            <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold">♟</div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Mastery</p>
                    <p className="text-sm font-black text-slate-800">Chess</p>
                  </div>
               </div>
            </div>

            <div className="absolute top-1/2 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold font-mono">{"</>"}</div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Advanced</p>
                    <p className="text-sm font-black text-slate-800">Coding</p>
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-6 right-10 z-20 bg-white p-4 rounded-2xl shadow-xl">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Critical</p>
                    <p className="text-sm font-black text-slate-800">Logic</p>
                  </div>
               </div>
            </div>

            {/* Background Accent Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-[#46B94A]/20 rounded-[40px] rotate-6 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;