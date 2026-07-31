"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Trophy, Zap, Crown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const ScallopedWave = ({ flip }: { flip?: boolean }) => (
    <div className={`absolute left-0 w-full leading-[0] z-20 ${flip ? "bottom-0" : "top-0 rotate-180"}`}>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] lg:h-[75px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1440V48C1410 48 1395 36 1365 36C1335 36 1320 48 1290 48C1260 48 1245 36 1215 36C1185 36 1170 48 1140 48C1110 48 1095 36 1065 36C1035 36 1020 48 990 48C960 48 945 36 915 36C885 36 870 48 840 48C810 48 795 36 765 36C735 36 720 48 690 48C660 48 645 36 615 36C585 36 570 48 540 48C510 48 495 36 465 36C435 36 420 48 390 48C360 48 345 36 315 36C285 36 270 48 240 48C210 48 195 36 165 36C135 36 120 48 90 48C60 48 45 36 15 36C7.5 36 0 42 0 48Z"
          fill="white"
        />
      </svg>
    </div>
  );

  return (
    <div className="relative flex flex-col w-full bg-[#0A1128]">
      {/* --- HERO SECTION --- */}
      <section
        className="relative w-full flex items-center bg-[#0A1128] overflow-hidden transition-all duration-500 font-sans min-h-[85vh] py-20 lg:py-28 pt-20 lg:pt-18"
      >
        {/* --- SCALLOPED EDGES --- */}
        <ScallopedWave />
        <ScallopedWave flip />

        {/* --- BACKGROUND AMBIENCE --- */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E11D48]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px]" />
        </div>

        <div className="container relative z-30 mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* --- LEFT CONTENT (TEXT) --- */}
            <div className="text-white text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="inline-block">
                <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <Crown className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
                    FIDE Certified Master Coaching Academy
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-[1000] leading-[1.1] tracking-tighter uppercase">
                SHAPING FUTURE <br />
                <span className="text-[#E11D48] italic">GRANDMASTERS</span> <br />
                ONE MOVE AT A TIME.
              </h1>

              <p className="text-slate-350 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Develop strategic vision, spatial calculation, and tournament-winning discipline under FIDE-rated trainers. Launch your champion's chess career today.
              </p>

              {/* Checkmark Features */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48]" />
                  <span className="font-bold text-sm md:text-base text-white">FIDE Masters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48]" />
                  <span className="font-bold text-sm md:text-base text-white">Structured Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48]" />
                  <span className="font-bold text-sm md:text-base text-white">Medals & Milestones</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/bookdemo">
                  <button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 bg-[#E11D48] hover:bg-pink-700 text-white rounded-2xl md:rounded-[2rem] text-sm md:text-base font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                    Book A Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="/courses">
                  <button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-white hover:bg-white/10 rounded-2xl md:rounded-[2rem] text-sm md:text-base font-bold border-2 border-white/20 backdrop-blur-sm uppercase tracking-widest transition-all">
                    Explore Courses
                  </button>
                </Link>
              </div>
            </div>

            {/* --- RIGHT CONTENT (IMAGE VISUAL CARD) --- */}
            <div className="relative order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto">
              <div className="relative z-10 w-full aspect-square sm:aspect-video lg:aspect-[4/3] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[16px] border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-[#0f172a]">
                <img
                  src="/hero-chess-unique.png"
                  alt="Chess learning begins at Modern Knight Academy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Trophy Badge top-right */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20 bg-[#E11D48] p-6 rounded-3xl shadow-2xl border-4 border-[#0A1128] hidden md:block"
              >
                <Trophy className="w-10 h-10 text-white fill-current" />
              </motion.div>

              {/* Floating Lightning Badge bottom-left */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border-4 border-[#0A1128] hidden md:block"
              >
                <Zap className="w-10 h-10 text-[#0B4398] fill-current" />
              </motion.div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-white/5 rounded-full hidden md:block" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;