"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight, Brain, Cpu, Trophy, Sparkles } from 'lucide-react';

const AboutBanner: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-50">
      
      {/* --- TECH-INSPIRED BACKGROUND --- */}
      
      {/* 1. Logic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#01539D 1px, transparent 1px), linear-gradient(90deg, #01539D 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* 2. Glassmorphism Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01539D]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#46B94A]/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      {/* 3. Floating Cognitive Elements */}
      <div className="absolute top-20 right-[15%] opacity-[0.05] text-[#01539D] transform rotate-12 hidden lg:block animate-pulse-slow">
        <Brain size={180} strokeWidth={1} />
      </div>
      
      <div className="absolute bottom-10 left-[10%] opacity-[0.05] text-[#46B94A] transform -rotate-12 hidden lg:block">
        <Cpu size={120} strokeWidth={1} />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#46B94A]" />
          <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">
            Global Support Hub
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Touch</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
          Whether you’re interested in <span className="text-slate-900 font-bold">Chess, Coding, or Logic</span>, 
          our team is ready to guide your child’s journey to excellence.
        </p>

        {/* Minimal Breadcrumb Navigation */}
        <nav className="flex items-center gap-3 text-sm font-bold">
          <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
          
          <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">
            Contact Us
          </span>
        </nav>

        {/* Skill Icons Trust Bar */}
        <div className="mt-16 flex items-center gap-8 md:gap-12 opacity-20">
            <Trophy size={24} />
            <Cpu size={24} />
            <Brain size={24} />
        </div>

      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1) rotate(12deg); }
          50% { opacity: 0.08; transform: scale(1.05) rotate(15deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
};

export default AboutBanner;