"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BrainCircuit, Lightbulb, Search, Workflow, 
  CheckCircle2, ChevronRight, Home, Star, 
  MessageSquare, HelpCircle, ArrowUp, Zap, 
  Award, Globe, GraduationCap, ChevronDown, 
  ArrowRight, Compass, Network, Scale, Split
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DATA & CONFIG                               */
/* -------------------------------------------------------------------------- */

const STRATEGY_LEVELS = [
  {
    level: "Phase 1: Visualist",
    title: "Non-Verbal Mastery",
    desc: "Training the eye to see patterns in shapes, mirrors, and spatial rotations before moving to words.",
    skills: ["Mirror Images", "Cube Folding", "Pattern Completion", "Visual Series"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Phase 2: Decoder",
    title: "Verbal & Semantic Logic",
    desc: "Decoding hidden languages and understanding complex relationships within data sets.",
    skills: ["Coding-Decoding", "Blood Relations", "Direction Sense", "Ranking Logic"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
  {
    level: "Phase 3: Strategist",
    title: "Analytical Reasoning",
    desc: "Building the ability to handle multi-variable puzzles and complex sitting arrangements.",
    skills: ["Linear Seating", "Circular Logic", "Distribution Puzzles", "Venn Logic"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Phase 4: Elite",
    title: "Critical Deduction",
    desc: "The highest level of logic: Syllogisms, Statement-Assumptions, and Data Sufficiency.",
    skills: ["Syllogisms", "Critical Path", "Cause & Effect", "Inference Logic"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
];

const METHODOLOGY = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Heuristic Discovery",
    desc: "We don't give answers. We provide 'rules of thumb' that allow students to navigate any unfamiliar puzzle."
  },
  {
    icon: <Split className="w-6 h-6" />,
    title: "The Elimination Protocol",
    desc: "Training the mind to quickly identify and discard logical fallacies to arrive at the truth faster."
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Structural Deconstruction",
    desc: "Breaking down complex 5-variable paragraphs into simple, visual 2D grids for 100% accuracy."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Decision Frameworks",
    desc: "Applying logical frameworks to real-life scenarios, helping kids make better choices daily."
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Arvind Swamy",
    role: "Parent & Researcher",
    text: "My daughter's analytical speed improved tremendously. She recently cleared a national talent search exam, and I give 100% credit to the logic training here.",
    initials: "AS"
  },
  {
    name: "Kavya P.",
    role: "Olympiad Gold Medalist",
    text: "I used to get confused with verbal reasoning, but the grid method I learned at FutureMind makes every puzzle look like a simple math equation.",
    initials: "KP"
  }
];

const FAQS = [
  {
    question: "Is Logical Reasoning different from Math?",
    answer: "Absolutely. While math involves calculation, Logic involves 'Inference.' It is the ability to derive a conclusion from given premises without necessarily using numbers."
  },
  {
    question: "How does this help in school?",
    answer: "It improves comprehension and critical reading. A student with strong logic can understand science and history concepts much faster because they see the 'cause-effect' links."
  },
  {
    question: "Is this program suitable for 7-year-olds?",
    answer: "Yes, we have a specialized 'Junior Logic' track that uses gamified puzzles and visual patterns suitable for ages 7-10."
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function LogicalReasoningPage() {
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
        {/* Background Logic Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#01539D 1px, transparent 1px), linear-gradient(90deg, #01539D 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#46B94A]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
            <BrainCircuit className="w-4 h-4 text-[#46B94A]" />
            <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">The Architecture of Thought</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Reasoning</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mb-12 leading-relaxed font-medium">
            We don't teach what to think; we teach <span className="text-slate-900 font-bold">how to think</span>. Transform your child's brain into a high-performance analytical engine.
          </p>
          <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">Logical Reasoning</span>
          </nav>
        </div>
      </section>

      {/* ----------------- 2. LOGIC STATS ----------------- */}
      <section className="py-12 border-b border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Processing Speed", value: "2.5x ↑", icon: <Zap className="text-[#01539D]" /> },
              { label: "Puzzle Solving", value: "1000+", icon: <Network className="text-[#46B94A]" /> },
              { label: "Competitive Rank", value: "Top 2%", icon: <Award className="text-[#01539D]" /> },
              { label: "Cognitive Agility", value: "98%", icon: <Scale className="text-[#46B94A]" /> },
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

      {/* ----------------- 3. THE CORE EDGE ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            {/* Geometric visual for logic */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[7/5] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                    <img src="/logic.jpg" alt="Logic Abstract" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 p-12 text-center">
                    <Lightbulb className="w-24 h-24 text-[#01539D] mx-auto mb-6" />
                    <p className="text-2xl font-black text-slate-800 tracking-tight">Logic is the foundation of every modern breakthrough.</p>
                </div>
            </div>
            <div className="absolute -bottom-10 -right-6 z-20 bg-[#46B94A] text-white p-8 rounded-[2.5rem] shadow-xl">
                <p className="text-4xl font-black mb-1">A+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Critical Thinking<br/>Standard</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
              <Scale className="w-4 h-4 text-[#01539D]" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Why Logic?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Bridging the gap between <br />
              <span className="text-[#01539D]">Knowledge</span> and <span className="text-[#46B94A]">Application.</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Deductive Power", desc: "Teaching children to draw valid conclusions from available data, a skill missing in traditional school books." },
                { title: "Verbal Reasoning", desc: "Sharpening linguistic intelligence through analogies, syllogisms, and classification logic." },
                { title: "Non-Verbal Agility", desc: "Developing spatial awareness and visual-thinking capabilities to solve modern engineering problems." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#46B94A] shrink-0 transition-all group-hover:bg-[#46B94A] group-hover:text-white group-hover:scale-110 shadow-sm border border-slate-100">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. THE ROADMAP ----------------- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Logic Staircase</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#01539D] to-[#46B94A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGY_LEVELS.map((level, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl">
                <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${level.accent}`}>
                  {level.level}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{level.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{level.desc}</p>
                <div className="space-y-3 pt-6 border-t border-slate-50">
                   {level.skills.map((skill, si) => (
                     <div key={si} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#46B94A]" /> {skill}
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Thinking <span className="text-[#01539D]">Protocol</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">We utilize globally recognized logic frameworks to ensure every student develops a repeatable approach to thinking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {METHODOLOGY.map((item, i) => (
              <div key={i} className="group text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-[#01539D] text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-blue-100 transition-transform group-hover:rotate-12 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. VOICES ----------------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col">
                <MessageSquare className="text-[#46B94A] mb-8" size={40} />
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-10 opacity-90">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-gradient-to-tr from-[#01539D] to-[#46B94A] rounded-2xl flex items-center justify-center font-black text-xl">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-lg">{t.name}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. FAQ ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Logic Lab FAQ</h2>
            <p className="text-slate-500 font-medium">Answering the analytical queries of our parents.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-[2.5rem] transition-all duration-300 ${openFaq === i ? 'border-[#01539D] bg-[#01539D]/[0.02] shadow-xl shadow-blue-900/5' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className={`font-black text-lg md:text-xl pr-8 ${openFaq === i ? 'text-[#01539D]' : 'text-slate-800'}`}>{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#01539D] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-100 pt-6 font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. FINAL CTA ----------------- */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#01539D] to-[#46B94A] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '30px 30px'}}></div>
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-8">Sharpen Their Advantage.</h2>
          <p className="relative z-10 text-blue-50 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Give your child the cognitive foundation required for global success. Book a free logical diagnostic test today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 relative z-10">
            <Link href="/bookdemo" className="group inline-flex items-center gap-4 bg-white text-[#01539D] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-slate-50 shadow-2xl active:scale-95">
              Request Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/30 transition-all active:scale-95">
              Talk to Advisor
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
      `}</style>
    </div>
  );
}