"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, Instagram, Youtube, Linkedin, 
  MapPin, Phone, Mail, ArrowUpRight, 
  Send, Brain, Cpu, MessageCircle 
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-slate-400 pt-20 pb-10 overflow-hidden">
      
      {/* -------------------- PREMIUM WHATSAPP FAB -------------------- */}
      <a
        href="https://wa.me/919948198809"
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="relative p-4 bg-[#25D366] text-white rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 flex items-center gap-3">
          <WhatsAppIcon className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 font-bold whitespace-nowrap text-xs uppercase tracking-widest">
            Chat with Experts
          </span>
        </div>
      </a>

      {/* -------------------- BACKGROUND ACCENTS -------------------- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#01539D] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#46B94A] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- TOP SECTION: BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Brand Card */}
          <div className="md:col-span-5 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-22 h-22 bg-white rounded-xl flex items-center justify-center p-2">
                   <img src="/future.jpeg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                   <h2 className="font-black text-2xl text-white tracking-tighter leading-none">FutureMind<span className="text-[#46B94A]">Skills</span></h2>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">Academy</p>
                </div>
              </div>
              <p className="text-lg font-medium text-slate-300 leading-relaxed mb-8">
                Pioneering a new era of cognitive development. We equip the next generation with the mental tools to navigate and lead the future.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[Facebook, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#01539D] hover:border-[#01539D] transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
             <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10">
                <h3 className="text-white font-black text-[10px] uppercase tracking-widest mb-6 opacity-50">Programs</h3>
                <ul className="space-y-4 font-bold text-sm">
                  <li><Link href="/chess" className="hover:text-[#46B94A] transition-colors">Chess</Link></li>
                  <li><Link href="/coding" className="hover:text-[#46B94A] transition-colors">Coding</Link></li>
                  <li><Link href="/logic" className="hover:text-[#46B94A] transition-colors">Logic</Link></li>
                  <li><Link href="/memory" className="hover:text-[#46B94A] transition-colors">Memory</Link></li>
                  <li><Link href="/problem-solving" className="hover:text-[#46B94A] transition-colors">Problem Solving</Link></li>
                  <li><Link href="/communication" className="hover:text-[#46B94A] transition-colors">Communication Skills</Link></li>
                </ul>
             </div>
             <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10">
                <h3 className="text-white font-black text-[10px] uppercase tracking-widest mb-6 opacity-50">Company</h3>
                <ul className="space-y-4 font-bold text-sm">
                  <li><Link href="/about" className="hover:text-[#01539D] transition-colors">About</Link></li>
                  <li><Link href="/gallery" className="hover:text-[#01539D] transition-colors">Gallery</Link></li>
                  <li><Link href="/contact" className="hover:text-[#01539D] transition-colors">Contact</Link></li>
                  <li><Link href="/bookdemo" className="hover:text-[#01539D] transition-colors">Book Demo</Link></li>
                </ul>
             </div>
          </div>

          {/* Newsletter / CTA Card */}
          <div className="md:col-span-3 bg-gradient-to-br from-[#01539D] to-[#01427a] rounded-[2.5rem] p-8 text-white flex flex-col justify-between overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain size={120} />
             </div>
             <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Stay Future Ready</h3>
                <p className="text-blue-100 text-sm font-medium mb-6">Join 2000+ parents receiving weekly cognitive growth tips.</p>
                <div className="relative">
                   <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-sm placeholder:text-blue-200 outline-none focus:bg-white/20 transition-all" />
                   <button className="absolute right-2 top-2 w-10 h-10 bg-[#46B94A] rounded-xl flex items-center justify-center shadow-lg">
                      <Send size={18} />
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: CONTACT BAR --- */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16">
           <div className="flex-1 bg-white/5 rounded-[2rem] p-6 border border-white/5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#01539D]/20 text-[#01539D] flex items-center justify-center shrink-0">
                 <MapPin size={24} />
              </div>
              <p className="text-sm font-medium text-slate-300">Prestige High Fields, Flat No. 7028, ISB Road, Financial District, Nanakramguda, Hyderabad, Telangana, India</p>
           </div>
           <div className="flex-1 bg-white/5 rounded-[2rem] p-6 border border-white/5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#46B94A]/20 text-[#46B94A] flex items-center justify-center shrink-0">
                 <Phone size={24} />
              </div>
              <p className="text-sm font-bold text-white">+91 99481 98809</p>
           </div>
           <div className="flex-1 bg-white/5 rounded-[2rem] p-6 border border-white/5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                 <Mail size={24} />
              </div>
              <p className="text-sm font-bold text-white">futuremindskills@gmail.com</p>
           </div>
        </div>

        {/* --- BOTTOM SECTION: LEGAL --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <span>© {currentYear} Future Mind Skills Academy</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
             <Cpu size={14} />
             <span className="text-[10px] font-bold uppercase tracking-widest italic">Designed for the Next Generation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}