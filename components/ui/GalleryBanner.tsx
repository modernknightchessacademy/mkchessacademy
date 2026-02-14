"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight, Camera, Brain, Trophy, Sparkles } from 'lucide-react';

const GalleryBanner: React.FC = () => {
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

      {/* 2. Glassmorphism Glows (Academy Colors) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01539D]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#46B94A]/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      {/* 3. Floating Skills Icons */}
      {/* Camera - Top Left */}
      <div className="absolute top-24 left-10 md:left-20 opacity-10 text-[#01539D] animate-bounce-slow">
        <Camera className="w-16 h-16" />
      </div>

      {/* Brain/Logic - Right Side */}
      <div className="absolute top-1/3 right-10 md:right-32 opacity-[0.05] text-slate-400 transform rotate-12 hidden md:block">
        <Brain className="w-24 h-24" />
      </div>

      {/* Sparkles - Near Text */}
      <div className="absolute bottom-20 left-1/4 text-[#46B94A] opacity-30 animate-pulse">
        <Sparkles className="w-10 h-10" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
          <Trophy className="w-4 h-4 text-[#46B94A]" />
          <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">
            Visual Journey
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
          Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Moments</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
          Witness the <span className="text-slate-900 font-bold">transformation and joy</span> of students mastering 
          new-age skills at our campus.
        </p>

        {/* Minimal Breadcrumb Navigation */}
        <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
          <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
          
          <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">
            Gallery Showcase
          </span>
        </nav>

      </div>

      {/* --- CSS Animation --- */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
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

export default GalleryBanner;