"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModernKnightLogo } from "@/components/logo";
import { Mail, Facebook, Instagram, ChevronUp, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B122F] via-[#080E24] to-[#040714] text-white pt-24 pb-12 relative mt-20">
      
      {/* Curved Wavy Top Separator */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#0B122F]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.42,26.83,164.06,47.46,242.92,67.92,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/60">
          
          {/* Column 1: Brand & Socials (Width: col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <ModernKnightLogo size="lg" variant="light" className="brightness-125 hover:opacity-95 transition-opacity" />
            <p className="text-xs font-black uppercase tracking-widest text-[#E11D48] opacity-90">
              Learn to be limitless
            </p>
            
            {/* Email Capsule */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 max-w-sm hover:border-slate-700/80 transition-colors">
              <Mail className="w-4 h-4 text-[#E11D48]" />
              <a href="mailto:modernknightchessacademy@gmail.com" className="text-slate-300 text-xs md:text-sm truncate hover:text-white transition-colors">
                modernknightchessacademy@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-[#0B4398] hover:bg-[#0B4398]/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links (Width: col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white">
                Useful Links
              </h3>
              <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 rounded-full" />
            </div>
            <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#E11D48] transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#E11D48] transition-colors duration-300">Curriculum</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E11D48] transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#E11D48] transition-colors duration-300">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Company (Width: col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white">
                Our Company
              </h3>
              <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-[#E11D48] mt-2 rounded-full" />
            </div>
            <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-300">
              <li>
                <Link href="/contact" className="hover:text-[#E11D48] transition-colors duration-300">Contact Us</Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#E11D48] transition-colors duration-300">Achievements</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E11D48] transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/bookdemo" className="hover:text-[#E11D48] transition-colors duration-300">Registration</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#E11D48] transition-colors duration-300">Policies</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Branches (Width: col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white">
                Our Branches
              </h3>
              <div className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-400 mt-2 rounded-full" />
            </div>
            <div className="space-y-4">
              {/* Danavaipeta Branch */}
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] flex items-center gap-1.5 opacity-90">
                  📍 Danavaipeta Branch
                </span>
                <p className="text-xs text-slate-300 font-bold ml-1">
                  Manasa Hospital Road, Rajahmundry, Andhra Pradesh, India.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <a href="https://wa.me/919885302468" target="_blank" rel="noopener noreferrer" className="text-slate-200 text-xs md:text-sm font-extrabold hover:text-[#E11D48] transition-colors">
                      +91 98853 02468
                    </a>
                    <p className="text-[10px] text-slate-400 font-light">Click for WhatsApp Form</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* Left: WhatsApp CTA Pill */}
          <a
            href="https://wa.me/919885302468"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-[0_5px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Center: Copyright & Designer credit */}
          <div className="text-center space-y-1 select-none">
            <p className="text-[10px] md:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              © 2010 - 2026 Modern Knight Chess Academy. All Rights Reserved.
            </p>
            <p className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
              Designed by <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent font-black">Jinesh Mehta</span>
            </p>
          </div>

          {/* Right: Scroll to top utility */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#0B4398] hover:bg-[#E11D48] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <ChevronUp className="w-5 h-5 stroke-[3px]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;