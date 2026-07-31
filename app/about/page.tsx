"use client";
import React from "react";
import Link from "next/link";
import { ModernKnightLogo } from "@/components/logo";
import AboutBanner from "@/components/ui/AboutBanner";
import { ShieldCheck, Crown, Brain, Zap, Trophy, Eye, Target, Award, BookOpen, Globe, Users, TrendingUp, Swords, BarChart3 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Redesigned Hero Banner */}
      <AboutBanner />

      {/* 1. Redesigned Academy Introduction */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Overlapping Images & Floating Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start min-h-[460px] md:min-h-[500px]">
              {/* Top-Left Larger Image */}
              <div className="relative w-[65%] aspect-[3/4] rounded-[2rem] overflow-hidden border-[6px] border-[#041c32] shadow-2xl z-10">
                <img
                  src="/playi.png"
                  alt="Students playing chess"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Smaller Overlapping Image */}
              <div className="absolute right-4 bottom-0 w-[50%] aspect-[4/3] rounded-[2rem] overflow-hidden border-[6px] border-[#041c32] shadow-2xl z-20">
                <img
                  src="/comm.jpg"
                  alt="Chess classroom training"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Orange/Pink Trophy Badge */}
              <div className="absolute left-[-10px] bottom-16 md:bottom-24 bg-gradient-to-br from-[#0B4398] to-[#E11D48] text-white p-5 rounded-[1.5rem] border-[4px] border-[#041c32] shadow-2xl z-30 flex flex-col items-center justify-center text-center w-28 h-28 select-none">
                <Trophy className="w-7 h-7 text-white" />
                <span className="text-xl font-black mt-1 leading-none">15+</span>
                <span className="text-[7px] font-black uppercase tracking-widest mt-0.5 whitespace-nowrap">Years Expert</span>
              </div>
            </div>

            {/* Right Column: Information, Grid of Features & Academy Logo */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Badge Capsule */}
              <div className="space-y-4">
                <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 border border-slate-800 shadow-sm select-none">
                  ⚡ Elite Academy
                </span>
                
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                  ELITE STRATEGY. <br />
                  <span className="bg-gradient-to-r from-[#0B4398] via-pink-500 to-[#E11D48] bg-clip-text text-transparent uppercase italic font-serif">
                    LOCAL CHAMPIONS.
                  </span>
                </h2>
                
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                  We turn potential into strategy. Modern Knight Chess Academy provides structured, FIDE-aligned coaching for competitive youth growth.
                </p>
              </div>

              {/* 2x2 Feature Grid with little text descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1 */}
                <div className="bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-2xl p-5 flex gap-4 transition-all duration-200 group shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-extrabold text-sm text-slate-900 tracking-wider uppercase">FIDE Certified</span>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                      Curriculum mapped to official FIDE coaching standards.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-2xl p-5 flex gap-4 transition-all duration-200 group shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-extrabold text-sm text-slate-900 tracking-wider uppercase">Academy Hub</span>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                      State-of-the-art offline and digital training portals.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-2xl p-5 flex gap-4 transition-all duration-200 group shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-extrabold text-sm text-slate-900 tracking-wider uppercase">Logic Focused</span>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                      Improving tactical pattern recognition & calculation speed.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-2xl p-5 flex gap-4 transition-all duration-200 group shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-extrabold text-sm text-slate-900 tracking-wider uppercase">Proven Results</span>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                      State championships, medals, and FIDE ratings achieved.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Academy Logo Banner Row */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center p-2 shrink-0">
                  <ModernKnightLogo size="xs" showText={false} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-extrabold text-slate-900 text-sm leading-snug">MODERN KNIGHT ACADEMY</span>
                  <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest mt-0.5 truncate">
                    BUILDING THE GRANDMASTERS OF LIFE
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Redesigned Premium Mission & Vision using BRAND COLORS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              MISSION & <span className="text-[#E11D48]">VISION</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Mission Card (Navy/Dark Slate) */}
            <div className="bg-[#0B122F] text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl group border border-slate-800">
              {/* Target Watermark SVG on Bottom Right */}
              <div className="absolute right-[-10%] bottom-[-10%] w-72 h-72 text-white/5 pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                </svg>
              </div>

              <div className="space-y-6 relative z-10">
                {/* Icon Capsule */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#E11D48]" />
                </div>
                
                <h3 className="text-3xl font-black tracking-tight uppercase">Our Mission</h3>
                
                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                  To make <strong className="text-white font-bold">high-quality chess education accessible</strong> to every enthusiast in Punjab. We nurture intelligent, confident individuals by using chess as a tool for critical thinking, memory, and decision-making.
                </p>

                {/* Key Pillars */}
                <ul className="space-y-3 pt-6 border-t border-white/10 text-xs font-black uppercase tracking-wider text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    <span>Experienced Professional Coaches</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    <span>Modern Teaching Methodologies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    <span>Beginner to Competitive Training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Card (Vibrant Brand Rose/Pink) */}
            <div className="bg-[#E11D48] text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl group">
              {/* Eye Watermark SVG on Bottom Right */}
              <div className="absolute right-[-10%] bottom-[-10%] w-72 h-72 text-white/10 pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M10,50 C30,20 70,20 90,50 C70,80 30,80 10,50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                </svg>
              </div>

              <div className="space-y-6 relative z-10">
                {/* Icon Capsule */}
                <div className="w-12 h-12 rounded-xl bg-rose-700/30 border border-white/20 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-3xl font-black tracking-tight uppercase">Our Vision</h3>
                
                <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                  To establish <strong className="text-white font-bold">Amritsar</strong> as a leading hub for chess excellence in India. We strive to build a vibrant community that inspires success in state, national, and international competitions.
                </p>

                {/* Key Pillars */}
                <ul className="space-y-3 pt-6 border-t border-white/20 text-xs font-black uppercase tracking-wider text-white">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>District, State & National Success</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>Vibrant Chess Community Building</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>Regular Tournaments & Workshops</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Founder & Head Coach Information */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Offset Frame & FIDE Badge */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              
              {/* Offset Background Shape */}
              <div className="absolute top-4 left-4 w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] bg-[#0B4398] rounded-[2.5rem] rounded-tr-[8rem] -z-10 shadow-2xl" />

              {/* Founder Image Wrapper */}
              <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] bg-white border-[12px] border-white shadow-2xl rounded-[2.5rem] rounded-tr-[8rem] overflow-hidden">
                <img
                  src="/founder.jpg"
                  alt="Shubham Trikha - Founder"
                  className="w-full h-full object-cover rounded-[1.5rem] rounded-tr-[7rem]"
                />
              </div>

              {/* Floating FIDE ID Badge */}
              <div className="absolute -left-4 bottom-8 bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 select-none z-20">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">FIDE Certified</p>
                  <p className="text-xs font-black text-white mt-0.5">FIDE ID: 5021626</p>
                </div>
              </div>

            </div>

            {/* Right Column: Founder Details, Bio & FIDE Credentials */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tag Label */}
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#E11D48]">
                <span className="w-8 h-[2px] bg-[#E11D48]" />
                <span>Founder & Head Coach</span>
              </div>

              {/* Title Name */}
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Shubham <span className="text-[#E11D48]">Trikha.</span>
              </h3>

              {/* Bio Description Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm md:text-base font-light leading-relaxed">
                <p>
                  As the Founder of <strong className="text-slate-950 font-bold">Modern Knight Chess Academy</strong>, Shubham Trikha is dedicated to raising the standard of chess coaching. He blends deep positional knowledge with modern software analysis to train the next generation of chess masters.
                </p>
                <p>
                  His coaching philosophy focuses on building strong fundamentals, improving calculation skills, and developing strategic thinking, while ensuring chess remains an engaging tool for academic and personal growth.
                </p>
              </div>

              {/* FIDE Credentials Grid */}
              <div className="pt-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3.5">FIDE Credentials</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Target className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-xs font-black text-slate-800">FIDE 1987</span>
                  </div>

                  {/* AGM */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Crown className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs font-black text-slate-800">Arena GM</span>
                  </div>

                  {/* Arbiter */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-purple-500 shrink-0" />
                    <span className="text-xs font-black text-slate-800">FIDE Arbiter</span>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-black text-slate-800">Nat. Instructor</span>
                  </div>

                  {/* Trainer */}
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl sm:col-span-2">
                    <Trophy className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="text-xs font-black text-slate-800">Schools Trainer</span>
                  </div>

                </div>
              </div>

              {/* Quote Block */}
              <div className="relative bg-slate-50/70 border-l-4 border-l-[#E11D48] p-6 rounded-2xl rounded-l-none font-serif italic text-slate-700 text-sm leading-relaxed shadow-sm">
                "We don't just teach moves; we cultivate the discipline, patience, and strategic foresight required for life beyond the 64 squares."
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Why choose <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">us?</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              We go beyond standard chess lessons by building analytical thinking, emotional resilience, and strategic problem-solving skills that last a lifetime.
            </p>
          </div>

          {/* Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 6 Stacked Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Certified coaches",
                  desc: "Learn directly from FIDE-rated trainers and arbiter level experts with tournament lineages.",
                  icon: Award,
                  color: "bg-blue-50 text-blue-500",
                },
                {
                  title: "Structured curriculum",
                  desc: "Comprehensive progressive syllabus taking players from beginners to master calculation drills.",
                  icon: BookOpen,
                  color: "bg-purple-50 text-purple-500",
                },
                {
                  title: "Online & offline classes",
                  desc: "Flexible batches available in physical branch centers and interactive zoom portals.",
                  icon: Globe,
                  color: "bg-rose-50 text-[#E11D48]",
                },
                {
                  title: "Tournament preparation",
                  desc: "Simulated match scrambles, opening databases, and tactical analysis preparation.",
                  icon: Trophy,
                  color: "bg-emerald-50 text-emerald-500",
                },
                {
                  title: "Personal attention",
                  desc: "Low student-to-teacher batch ratios ensuring individual attention and guidance.",
                  icon: Users,
                  color: "bg-amber-50 text-amber-500",
                },
                {
                  title: "Regular assessments",
                  desc: "Weekly diagnostic reviews, game analyses, and progress charts tracking growth curves.",
                  icon: Target,
                  color: "bg-teal-50 text-teal-500",
                },
              ].map((pt, idx) => {
                const IconComp = pt.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex items-center gap-5 group"
                  >
                    {/* Icon Wrapper */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300 ${pt.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base uppercase tracking-wider">
                        {pt.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed font-light">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Large curved image frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Offset border background shape */}
              <div className="absolute top-4 left-4 w-full max-w-[380px] aspect-[4/5] bg-gradient-to-br from-[#0B4398] to-[#E11D48] rounded-[2.5rem] rounded-tr-[8rem] opacity-30 blur-sm -z-10" />
              <div className="absolute top-4 left-4 w-full max-w-[380px] aspect-[4/5] border-4 border-[#0B4398] rounded-[2.5rem] rounded-tr-[8rem] -z-20" />

              {/* Curvaceous Picture Container */}
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] rounded-tr-[8rem] overflow-hidden border-[10px] border-white shadow-2xl bg-white">
                <img
                  src="/demo.png"
                  alt="Chess Academy Training Room"
                  className="w-full h-full object-cover rounded-[1.5rem] rounded-tr-[7rem] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Our Teaching Methodology Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-rose-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#0B4398] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 inline-block">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Our Teaching <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Methodology</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              A structured, algorithmic approach to building master-level positional understanding, tactical speed, and long-term calculation accuracy.
            </p>
          </div>

          {/* 3x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Beginner to advanced pathway",
                desc: "Progressive modular curriculum guiding students from base chess rules to international FIDE ratings.",
                icon: TrendingUp,
                color: "bg-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)]",
                barColor: "bg-gradient-to-r from-blue-500 to-sky-400",
                step: "01"
              },
              {
                title: "Tactical training",
                desc: "Algorithmic calculation drills, pattern recognition exercises, and intensive speed chess tests.",
                icon: Zap,
                color: "bg-amber-500 text-white shadow-[0_8px_20px_rgba(245,158,11,0.25)]",
                barColor: "bg-gradient-to-r from-amber-500 to-yellow-400",
                step: "02"
              },
              {
                title: "Strategic concepts",
                desc: "Positioning theory, pawn structure control, piece coordination, and planning positional blockades.",
                icon: Brain,
                color: "bg-purple-500 text-white shadow-[0_8px_20px_rgba(147,51,234,0.25)]",
                barColor: "bg-gradient-to-r from-purple-500 to-indigo-400",
                step: "03"
              },
              {
                title: "Endgame mastery",
                desc: "Essential theoretical endings, king opposition calculation, and rook-and-pawn promoting mechanics.",
                icon: Target,
                color: "bg-[#E11D48] text-white shadow-[0_8px_20px_rgba(225,29,72,0.25)]",
                barColor: "bg-gradient-to-r from-[#E11D48] to-rose-400",
                step: "04"
              },
              {
                title: "Practice games",
                desc: "Weekly training matches, simulated classical environments, and digital practice arenas.",
                icon: Swords,
                color: "bg-emerald-500 text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)]",
                barColor: "bg-gradient-to-r from-emerald-500 to-green-400",
                step: "05"
              },
              {
                title: "Analysis sessions",
                desc: "Deep engine-assisted review of student tournament games to diagnose positional errors.",
                icon: BarChart3,
                color: "bg-teal-500 text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]",
                barColor: "bg-gradient-to-r from-teal-500 to-cyan-400",
                step: "06"
              }
            ].map((method, idx) => {
              const IconComp = method.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(11,67,152,0.06)] hover:border-slate-200/80 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5"
                >
                  {/* Glowing Top Border Accent (Always fully active) */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${method.barColor} z-20`} />

                  {/* Step Number in Top Right (Elegantly visible watermark) */}
                  <span className="absolute top-6 right-8 text-3xl font-black text-slate-100 transition-colors select-none z-0">
                    {method.step}
                  </span>

                  <div className="space-y-6 relative z-10">
                    {/* Icon Container (Always in premium state) */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${method.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Text Details */}
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight uppercase leading-snug group-hover:text-[#0B4398] transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                        {method.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
              Values
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Our Core <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Values</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              The foundational pillars guiding our training methodology, sportsmanship, and student growth.
            </p>
          </div>

          {/* Alternating Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Discipline",
                desc: "Cultivating deep focus, dedication, and consistent practice habits on and off the board.",
                step: "1",
                isLeft: true,
                circleBg: "bg-sky-500",
                borderStyle: "border-l-[6px] border-l-[#0B4398]",
              },
              {
                title: "Critical Thinking",
                desc: "Evaluating positions logically, calculating variations, and making informed choices.",
                step: "2",
                isLeft: false,
                circleBg: "bg-slate-400",
                borderStyle: "border-r-[6px] border-r-slate-400",
              },
              {
                title: "Sportsmanship",
                desc: "Accepting outcomes with grace, respecting opponents, and valuing match etiquette.",
                step: "3",
                isLeft: true,
                circleBg: "bg-[#E11D48]",
                borderStyle: "border-l-[6px] border-l-[#E11D48]",
              },
              {
                title: "Confidence",
                desc: "Building mental toughness, trusting calculations, and playing fearlessly against all ratings.",
                step: "4",
                isLeft: false,
                circleBg: "bg-amber-500",
                borderStyle: "border-r-[6px] border-r-amber-500",
              },
              {
                title: "Continuous Learning",
                desc: "Analyzing past mistakes, researching theory, and constantly updating positional play.",
                step: "5",
                isLeft: true,
                circleBg: "bg-sky-500",
                borderStyle: "border-l-[6px] border-l-[#0B4398]",
              },
              {
                title: "Integrity",
                desc: "Upholding absolute fair play standards, tournament rules, and honesty in every match.",
                step: "6",
                isLeft: false,
                circleBg: "bg-slate-400",
                borderStyle: "border-r-[6px] border-r-slate-400",
              },
            ].map((val, idx) => {
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 flex items-center justify-between gap-6 group hover:-translate-y-1 ${val.borderStyle}`}
                >
                  {val.isLeft ? (
                    /* Left aligned text, circle on left */
                    <div className="flex items-center gap-6 text-left w-full">
                      {/* Number circle */}
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${val.circleBg} text-white font-black text-lg md:text-xl flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-300`}>
                        {val.step}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight">
                          {val.title}
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Right aligned text, circle on right */
                    <div className="flex flex-row-reverse items-center justify-between gap-6 text-right w-full">
                      {/* Number circle */}
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${val.circleBg} text-white font-black text-lg md:text-xl flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-300`}>
                        {val.step}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight">
                          {val.title}
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Gallery of Excellence Auto-Scrolling Marquee Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Gallery of <span className="text-[#E11D48]">Excellence</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-widest leading-relaxed">
            Capturing the moments of victory across tournaments
          </p>
        </div>

        {/* Endless Marquee Loop Wrapper */}
        <div className="relative w-full overflow-hidden select-none py-4">
          {/* Subtle overlay gradients on sides for depth */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <div className="flex gap-6 w-max animate-marquee">
            {/* Set 1 */}
            {[
              "/playi.png",
              "/comm.jpg",
              "/demo.png",
              "/galbg.png",
              "/abourrr.png",
              "/hero1.png",
              "/hero2.png",
              "/hero3.png"
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="w-64 h-80 rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-sm shrink-0 bg-slate-50 transition-all duration-300 hover:scale-102 hover:shadow-md"
              >
                <img
                  src={imgSrc}
                  alt={`Moment of victory ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Set 2 (Duplicated for seamless loop) */}
            {[
              "/playi.png",
              "/comm.jpg",
              "/demo.png",
              "/galbg.png",
              "/abourrr.png",
              "/hero1.png",
              "/hero2.png",
              "/hero3.png"
            ].map((imgSrc, index) => (
              <div
                key={`dup-${index}`}
                className="w-64 h-80 rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-sm shrink-0 bg-slate-50 transition-all duration-300 hover:scale-102 hover:shadow-md"
              >
                <img
                  src={imgSrc}
                  alt={`Moment of victory duplicated ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0B122F] hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Join the hall of fame</span>
          </Link>
        </div>

        {/* Marquee Animation Keyframes Style */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}</style>
      </section>      {/* 5. Enhanced Call-to-Action (CTA) */}
      <section className="py-24 bg-gradient-to-br from-[#0B4398] via-[#041C32] to-[#E11D48] text-white relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Chess piece background watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <span className="text-[25rem] md:text-[35rem] font-black leading-none select-none">♞</span>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="space-y-3">
            <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-500/10 rounded-full border border-rose-500/20 inline-block">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
              Ready to Start Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Chess Journey?</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Join Modern Knight Chess Academy and experience world-class master mentorship. Secure your free assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/bookdemo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book Free Trial Class</span>
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
