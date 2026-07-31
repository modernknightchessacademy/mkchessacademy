"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import * as Icons from "lucide-react";

interface SubpageBannerProps {
  title: string;
  highlight: string;
  subtitle: string;
  breadcrumbLabel: string;
  bgImage?: string; // Optional background image prop
  widgetLeft1Icon: string;
  widgetLeft1Label: string;
  widgetLeft1Value: string;
  widgetLeft2Icon: string;
  widgetLeft2Label: string;
  widgetLeft2Value: string;
  widgetRightIcon: string;
  widgetRightLabel: string;
  widgetRightValue: string;
}

const SubpageBanner: React.FC<SubpageBannerProps> = ({
  title,
  highlight,
  subtitle,
  breadcrumbLabel,
  bgImage = "/inter.jpg", // Default background image
  widgetLeft1Icon,
  widgetLeft1Label,
  widgetLeft1Value,
  widgetLeft2Icon,
  widgetLeft2Label,
  widgetLeft2Value,
  widgetRightIcon,
  widgetRightLabel,
  widgetRightValue,
}) => {
  // Helper to dynamically render Lucide Icons by name
  const renderIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    if (!LucideIcon) return null;
    return <LucideIcon className="w-5 h-5" />;
  };

  return (
    <div
      className="relative w-full bg-cover bg-center pt-32 pb-48 md:pt-40 md:pb-64 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay & Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-[#041c32]/95 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] [background-size:16px_16px] z-0 pointer-events-none" />

      {/* Floating Glassmorphism Widgets (Hidden on mobile/tablet for clean spacing) */}
      
      {/* Widget 1: LEFT 1 */}
      {widgetLeft1Label && (
        <div className="hidden lg:flex absolute top-1/4 left-10 xl:left-24 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 items-center gap-3.5 shadow-2xl z-10 select-none animate-float">
          <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            {renderIcon(widgetLeft1Icon)}
          </div>
          <div>
            <p className="text-[8px] font-black uppercase text-slate-400 tracking-wider">{widgetLeft1Label}</p>
            <p className="text-xs font-black text-white mt-0.5">{widgetLeft1Value}</p>
          </div>
        </div>
      )}

      {/* Widget 2: LEFT 2 */}
      {widgetLeft2Label && (
        <div className="hidden lg:flex absolute bottom-1/4 left-16 xl:left-36 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 items-center gap-3.5 shadow-2xl z-10 select-none animate-bounce-slow">
          <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            {renderIcon(widgetLeft2Icon)}
          </div>
          <div>
            <p className="text-[8px] font-black uppercase text-slate-400 tracking-wider">{widgetLeft2Label}</p>
            <p className="text-xs font-black text-white mt-0.5">{widgetLeft2Value}</p>
          </div>
        </div>
      )}

      {/* Widget 3: RIGHT */}
      {widgetRightLabel && (
        <div className="hidden lg:flex absolute top-1/3 right-10 xl:right-28 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 items-center gap-3.5 shadow-2xl z-10 select-none animate-float">
          <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            {renderIcon(widgetRightIcon)}
          </div>
          <div>
            <p className="text-[8px] font-black uppercase text-slate-400 tracking-wider">{widgetRightLabel}</p>
            <p className="text-xs font-black text-white mt-0.5">{widgetRightValue}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Breadcrumb Navigation Capsule */}
        <nav className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-black uppercase tracking-widest text-white/90 shadow-sm transition-all hover:border-white/20 select-none mb-8">
          <Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span className="text-white/40 font-bold">&gt;</span>
          <span className="text-sky-400">{breadcrumbLabel}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-8 uppercase select-none">
          {title} <span className="bg-gradient-to-r from-sky-400 to-[#E11D48] bg-clip-text text-transparent italic font-serif">{highlight}</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-bold text-slate-300 tracking-[0.2em] leading-relaxed max-w-3xl uppercase">
          {subtitle}
        </p>

      </div>

      {/* Organic Wave Divider SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.5,123,1059.8,112.4,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: float 6s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default SubpageBanner;
