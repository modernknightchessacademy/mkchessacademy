"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Trophy, Brain, Target, ShieldCheck, Users, 
  CheckCircle2, ChevronRight, Home, Star, 
  MessageSquare, HelpCircle, ArrowUp, Zap, 
  Play, Award, Clock, Globe, GraduationCap,
  ChevronDown, Plus, Minus, ArrowRight, Sparkles
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DATA & CONFIG                               */
/* -------------------------------------------------------------------------- */

const STRATEGY_LEVELS = [
  {
    level: "Pawn to Knight",
    title: "Beginner Foundation",
    desc: "Understanding board geometry, piece movements, and basic checkmate patterns.",
    skills: ["Piece Values", "Opening Principles", "Capture Mechanics", "Notation"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Bishop to Rook",
    title: "Intermediate Tactics",
    desc: "Mastering forks, pins, skewers, and mid-game combination thinking.",
    skills: ["Tactical Patterns", "Basic Endgames", "Calculation", "Pawn Structures"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
  {
    level: "Queen to King",
    title: "Advanced Strategy",
    desc: "Deep positional understanding, complex endgame theory, and tournament prep.",
    skills: ["Opening Repertoire", "Manoeuvring", "Prophylaxis", "Time Management"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Grandmaster Track",
    title: "FIDE Professional",
    desc: "Intensive training for official ratings, state/national championships, and elite theory.",
    skills: ["Engine Analysis", "Elite Theory", "Tournament Psychology", "FIDE Rating"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
];

const METHODOLOGY = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalized Coaching",
    desc: "Small batch sizes (max 10) or 1-on-1 sessions to ensure every move is analyzed correctly."
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "Active Game Analysis",
    desc: "We analyze every student's game using professional engines to identify recurring mistakes."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Weekly Club Tournaments",
    desc: "Real-world tournament simulation every Sunday to build confidence and handle pressure."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Hybrid Learning",
    desc: "Flexible schedules with a mix of physical campus coaching and high-quality online sessions."
  }
];

const TESTIMONIALS = [
  {
    name: "Arjun Reddy",
    role: "Parent of U-9 State Winner",
    text: "FutureMind didn't just teach my son how to play chess; they taught him how to focus. His concentration in school has improved 100% since joining.",
    initials: "AR"
  },
  {
    name: "Dr. K. Sastri",
    role: "Grandmaster Program Student",
    text: "Ravindra Raju sir is a legend. His positional understanding is unmatched. The FIDE prep here is top-notch and highly professional.",
    initials: "KS"
  }
];

const FAQS = [
  {
    question: "What is the best age for my child to start Chess?",
    answer: "We recommend starting at age 5 or 6. At this age, children develop the cognitive ability to follow rules and visualize basic patterns on the board."
  },
  {
    question: "Do you prepare students for FIDE Ratings?",
    answer: "Yes. Our academy is led by a FIDE Instructor. We guide students through the registration process and prepare them for FIDE-rated tournaments."
  },
  {
    question: "Can we switch between online and offline classes?",
    answer: "Absolutely. We offer a hybrid model that allows students to attend at our Hyderabad hub or join remotely via our interactive platform."
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ChessProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* ----------------- 1. HERO BANNER ----------------- */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#01539D 1px, transparent 1px), linear-gradient(90deg, #01539D 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01539D]/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#46B94A]/10 rounded-full blur-[100px] -z-10 translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
            <Trophy className="w-4 h-4 text-[#46B94A]" />
            <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">FIDE Certified Academy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
            Learn Chess from an <span className="text-slate-900 font-bold">International Coach & FIDE Instructor</span>. Build logic, focus, and foresight for a future-ready life.
          </p>
          <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">Chess Academy</span>
          </nav>
        </div>
      </section>

      {/* ----------------- 2. QUICK STATS ----------------- */}
      <section className="py-12 border-b border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "FIDE Instructor", value: "Verified", icon: <ShieldCheck className="text-[#01539D]" /> },
              { label: "State Winners", value: "50+", icon: <Award className="text-[#46B94A]" /> },
              { label: "Professional Years", value: "25+", icon: <Clock className="text-[#01539D]" /> },
              { label: "Global Ranking Track", value: "Available", icon: <Globe className="text-[#46B94A]" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 3. WHY CHOOSE OUR CHESS ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/chess.webp" alt="Chess Strategy" className="w-full aspect-[7/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-6 z-20 bg-[#01539D] text-white p-8 rounded-[2.5rem] shadow-xl">
                <p className="text-4xl font-black mb-1">#1</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Academy in<br/>Financial District</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
              <Sparkles className="w-4 h-4 text-[#46B94A]" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              More than just a game. <br />
              <span className="text-[#01539D]">A Mental Gymnasium.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Cognitive Superiority", desc: "Proven to boost IQ, memory retention, and abstract reasoning." },
                { title: "Strategic Resilience", desc: "Teaches kids to think five steps ahead and handle failure with grace." },
                { title: "Academic Performance", desc: "Scientific studies show 20% better math and reading scores in chess students." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#46B94A] shrink-0 transition-colors group-hover:bg-[#46B94A] group-hover:text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. THE STRATEGY ROADMAP ----------------- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Evolution Roadmap</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#01539D] to-[#46B94A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGY_LEVELS.map((level, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${level.accent}`}>
                  {level.level}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{level.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{level.desc}</p>
                <div className="space-y-3 pt-6 border-t border-slate-50">
                   {level.skills.map((skill, si) => (
                     <div key={si} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#46B94A]" /> {skill}
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. METHODOLOGY ----------------- */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Our Pro-Training <br/><span className="text-[#01539D]">Methodology</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#46B94A]/20 flex items-center justify-center animate-spin-slow">
                <Target className="text-[#46B94A]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {METHODOLOGY.map((item, i) => (
              <div key={i} className="relative">
                <div className="w-14 h-14 bg-[#01539D] text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. VOICES OF COMMUNITY ----------------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#46B94A]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Voices of Success</h2>
            <div className="flex items-center justify-center gap-1 text-[#46B94A]">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm">
                <MessageSquare className="text-[#46B94A] mb-8" size={32} />
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-10 opacity-90">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#01539D] to-[#46B94A] rounded-2xl flex items-center justify-center font-black text-xl">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-lg">{t.name}</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. CHESS FAQ ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Common Queries</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about the Chess program.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${openFaq === i ? 'border-[#01539D] bg-[#01539D]/[0.02]' : 'border-slate-100 hover:border-slate-200'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className={`font-bold text-lg md:text-xl pr-8 ${openFaq === i ? 'text-[#01539D]' : 'text-slate-800'}`}>{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#01539D] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. FINAL CTA ----------------- */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#01539D] to-[#01427a] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-8">Ready to Make Your <br/>First Move?</h2>
          <p className="relative z-10 text-blue-100 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Book a free professional assessment and let our experts guide your child's chess journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="/bookdemo" className="group inline-flex items-center gap-4 bg-[#46B94A] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-[#3da341] shadow-2xl active:scale-95">
              Book Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/20 transition-all active:scale-95">
              Call Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- 9. SCROLL TO TOP ----------------- */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#01539D] rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:bg-slate-900 text-white ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <ArrowUp size={24} strokeWidth={3} />
      </button>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}