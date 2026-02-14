"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Puzzle, Lightbulb, BrainCircuit, Workflow, 
  CheckCircle2, ChevronRight, Home, Star, 
  MessageSquare, HelpCircle, ArrowUp, Zap, 
  Award, Globe, GraduationCap, ChevronDown, 
  ArrowRight, Search, Target, Infinity, Compass
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DATA & CONFIG                               */
/* -------------------------------------------------------------------------- */

const STRATEGY_LEVELS = [
  {
    level: "Level 1: Explorer",
    title: "Foundational Logic",
    desc: "Introducing basic deconstruction of patterns, riddles, and sequential reasoning.",
    skills: ["Pattern Recognition", "Classification", "Basic Deduction", "Mental Agility"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Level 2: Analyst",
    title: "Structural Reasoning",
    desc: "Mastering complex lateral thinking puzzles, Sudoku logic, and directional sense.",
    skills: ["Lateral Thinking", "Coding-Decoding", "Blood Relations", "Visual Logic"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
  {
    level: "Level 3: Strategist",
    title: "Analytical Depth",
    desc: "Focusing on data interpretation, syllogisms, and critical decision-making frameworks.",
    skills: ["Data Sufficiency", "Syllogisms", "Venn Diagrams", "Decision Matrix"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Level 4: Innovator",
    title: "Complex Solutioning",
    desc: "Solving real-world Fermi problems, Olympiad-level logic, and algorithmic thinking.",
    skills: ["Algorithm Design", "Game Theory", "Olympiad Logic", "Systems Thinking"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
];

const METHODOLOGY = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Deconstruction First",
    desc: "We teach students to break down a massive problem into tiny, manageable micro-tasks."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Heuristic Approach",
    desc: "Moving away from formulas to 'Rules of Thumb' that allow for faster, intuitive solving."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Iterative Testing",
    desc: "Teaching children that the first solution isn't always the best. We optimize through trial."
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Metacognition",
    desc: "Helping students understand *how* they think, allowing them to correct their own logic loops."
  }
];

const TESTIMONIALS = [
  {
    name: "Meera Krishnan",
    role: "Mother of 5th Grader",
    text: "The 'Problem Solving' module changed how my daughter does math. She no longer fears word problems; she sees them as puzzles to be solved.",
    initials: "MK"
  },
  {
    name: "Sandeep Varma",
    role: "Software Architect & Parent",
    text: "As a coder, I wanted my son to learn logic before syntax. FutureMind's methodology is exactly how we solve high-level engineering problems.",
    initials: "SV"
  }
];

const FAQS = [
  {
    question: "Is this different from school mathematics?",
    answer: "Yes. While school math focuses on calculation, our program focuses on 'Reasoning.' We teach the logic that exists *behind* the numbers."
  },
  {
    question: "How does this help in competitive exams?",
    answer: "Most competitive exams (Olympiads, JEE, CAT, SAT) have a massive 'Mental Ability' section. We build that foundation early on."
  },
  {
    question: "What tools do you use for training?",
    answer: "We use a mix of specialized logic grids, manipulative puzzles, computational thinking software, and real-world case studies."
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ProblemSolvingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100">
      
      {/* ----------------- 1. HERO BANNER ----------------- */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#46B94A 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#46B94A]/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-green-50 border border-green-100 animate-fade-in">
            <Zap className="w-4 h-4 text-[#46B94A]" />
            <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">Cognitive Mastery Program</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Critical Thinking</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
            Moving beyond rote learning. We equip students with the <span className="text-slate-900 font-bold">analytical frameworks</span> to solve complex problems with speed and precision.
          </p>
          <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">Problem Solving</span>
          </nav>
        </div>
      </section>

      {/* ----------------- 2. IMPACT STATS ----------------- */}
      <section className="py-12 border-b border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Logic Accuracy", value: "92%", icon: <Target className="text-[#01539D]" /> },
              { label: "Lateral Thinking", value: "3x Faster", icon: <Infinity className="text-[#46B94A]" /> },
              { label: "Olympiad Success", value: "Top 1%", icon: <Award className="text-[#01539D]" /> },
              { label: "Future Readiness", value: "100%", icon: <GraduationCap className="text-[#46B94A]" /> },
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

      {/* ----------------- 3. WHY PROBLEM SOLVING? ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/problem.jpg" alt="Problem Solving Class" className="w-full aspect-[7/5] object-cover" />
            </div>
            <div className="absolute -top-10 -left-6 z-20 bg-[#46B94A] text-white p-8 rounded-[2.5rem] shadow-xl">
                <p className="text-4xl font-black mb-1">IQ+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Measureable Brain<br/>Development</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
              <Lightbulb className="w-4 h-4 text-[#46B94A]" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">The Core Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Don't just teach them what to think. <br />
              <span className="text-[#46B94A]">Teach them HOW to think.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "First Principles Thinking", desc: "Learning to strip a problem down to its fundamental truths and building back from there." },
                { title: "Computational Logic", desc: "Understanding the binary patterns of logic used by the world's top engineers and scientists." },
                { title: "Confidence Under Ambiguity", desc: "Training children to stay calm and analytical when faced with a completely new challenge." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#01539D] shrink-0 transition-all group-hover:bg-[#01539D] group-hover:text-white group-hover:scale-110">
                    <Puzzle size={24} />
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

      {/* ----------------- 4. THE ROADMAP ----------------- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Cognitive Milestones</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#46B94A] to-[#01539D] mx-auto rounded-full" />
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
                     <div key={si} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#01539D]" /> {skill}
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
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Solving <span className="text-[#46B94A]">Protocol</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">We use a systematic 4-step framework to ensure every student develops a repeatable approach to problem solving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {METHODOLOGY.map((item, i) => (
              <div key={i} className="group text-center">
                <div className="w-20 h-20 bg-slate-50 text-[#01539D] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-[#01539D] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. VOICES OF COMMUNITY ----------------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01539D]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="flex flex-col">
                  <MessageSquare className="text-[#46B94A] mb-8" size={40} />
                  <p className="text-xl font-medium leading-relaxed italic mb-8 opacity-90">"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-[#46B94A] rounded-xl flex items-center justify-center font-black text-[#01539D]">
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
        </div>
      </section>

      {/* ----------------- 7. FAQ ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Curiosity Corner</h2>
            <p className="text-slate-500 font-medium">Answers to common questions about Logical Reasoning training.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-[2rem] transition-all duration-300 ${openFaq === i ? 'border-[#46B94A] bg-[#46B94A]/[0.02]' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className={`font-black text-lg md:text-xl pr-8 ${openFaq === i ? 'text-[#01539D]' : 'text-slate-800'}`}>{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#46B94A] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-100 pt-6">{faq.answer}</p>
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
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="nodeGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="white"/>
                <path d="M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#nodeGrid)" />
            </svg>
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-8">Empower Their Thinking.</h2>
          <p className="relative z-10 text-blue-50 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Give your child the unfair advantage of logic. Book a free diagnostic test and cognitive assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 relative z-10">
            <Link href="/bookdemo" className="group inline-flex items-center gap-4 bg-white text-[#01539D] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-slate-50 shadow-2xl active:scale-95">
              Book Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/30 transition-all active:scale-95">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- 9. SCROLL TO TOP ----------------- */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#46B94A] rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:bg-[#01539D] text-white ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <ArrowUp size={24} strokeWidth={3} />
      </button>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}