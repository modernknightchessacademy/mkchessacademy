"use client";
import React from "react";
import Link from "next/link";

export const DemoBookingCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0B4398] via-[#041C32] to-[#E11D48] text-white relative overflow-hidden">
      {/* Background Glowing Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        {/* Slogan & Subtext */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-white/20 shadow-sm select-none">
            👑 Free 45-Minute Trial Class
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Unlock Your Child's <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent italic font-serif">Strategic Potential</span> Today
          </h2>

          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Book a 1-on-1 trial class with our FIDE Certified Master Coach. Get a complete chess tactical assessment and personalized learning roadmap.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <Link
            href="/bookdemo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0B4398] font-black text-base shadow-[0_10px_20px_rgba(255,255,255,0.05)] hover:bg-amber-400 hover:text-slate-900 hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
          >
            Claim Free Demo Slot →
          </Link>
          
          <a
            href="https://wa.me/916281250967?text=Hi%20Modern%20Knight%20Chess%20Academy,%20I%20want%20to%20book%20a%20trial%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {/* Simple WhatsApp icon SVG */}
            <svg
              className="w-5 h-5 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.48 1.879 14.004 1.848 12.11 1.848c-5.442 0-9.869 4.42-9.873 9.864-.001 1.702.46 3.366 1.334 4.825L2.553 20.2l3.856-.77a9.79 9.79 0 0 0 4.849 1.455zM12.012 20.316z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingCTA;