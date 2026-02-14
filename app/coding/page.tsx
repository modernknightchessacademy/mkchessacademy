"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Cpu, Code2, Rocket, Terminal, 
  CheckCircle2, ChevronRight, Home, Star, 
  MessageSquare, HelpCircle, ArrowUp, 
  Award, Globe, GraduationCap, ChevronDown, 
  ArrowRight, Binary, Bot, Laptop, Box
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DATA & CONFIG                               */
/* -------------------------------------------------------------------------- */

const STRATEGY_LEVELS = [
  {
    level: "Level 1: Creator",
    title: "Visual Programming",
    desc: "Introduction to logic through block-based coding. Building games and animations without syntax stress.",
    skills: ["Scratch Lab", "Logic Flows", "Sprite Animation", "Game Design"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Level 2: Architect",
    title: "Python Foundation",
    desc: "Transitioning to real-world syntax. Learning the world's most popular language for AI and Data.",
    skills: ["Data Types", "Loops & Logic", "Automation", "Basic Algorithms"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
  {
    level: "Level 3: Developer",
    title: "Web & App Design",
    desc: "Building functional websites and mobile applications using professional-grade frameworks.",
    skills: ["HTML/CSS/JS", "UI/UX Design", "API Integration", "Mobile Dev"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Level 4: Futurist",
    title: "AI & Machine Learning",
    desc: "Training models, understanding neural networks, and exploring the ethical use of Artificial Intelligence.",
    skills: ["ML Models", "Neural Nets", "Natural Language", "AI Ethics"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
];

const METHODOLOGY = [
  {
    icon: <Box className="w-6 h-6" />,
    title: "Project-Based Learning",
    desc: "Students don't just learn syntax; they build real products like weather apps, chatbots, and arcade games."
  },
  {
    icon: <Binary className="w-6 h-6" />,
    title: "Algorithmic Thinking",
    desc: "We prioritize the logic behind the code. If a child can solve the problem on paper, they can code it in any language."
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Pair Programming",
    desc: "Encouraging collaborative coding sessions to simulate real-world software engineering environments."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Literacy",
    desc: "Beyond just coding, we teach children how to prompt, use, and build with AI responsibly and effectively."
  }
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kannan",
    role: "Software Engineer & Parent",
    text: "I was amazed at how my 10-year-old explained 'Nested Loops' to me. The depth of understanding provided here is far superior to standard online apps.",
    initials: "RK"
  },
  {
    name: "Ishanvi S.",
    role: "Level 3 Student",
    text: "I used to just play games, but now I build them! Last month I created a fully functional task manager for my mom. It feels amazing to create.",
    initials: "IS"
  }
];

const FAQS = [
  {
    question: "Do children need a math background to start coding?",
    answer: "Not at all. Coding actually helps improve mathematical reasoning. We start with visual blocks that focus on logical sequencing rather than complex math."
  },
  {
    question: "Which programming language is taught first?",
    answer: "We usually start with Scratch for younger children to build logic. For older kids or those ready for syntax, Python is our primary foundational language."
  },
  {
    question: "Are laptops provided at the academy?",
    answer: "Our Hyderabad hub is fully equipped with high-spec workstations. However, we encourage students to bring their own laptops to continue their projects at home."
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function CodingAIPage() {
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
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#46B94A 1px, transparent 1px), linear-gradient(90deg, #46B94A 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01539D]/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-green-50 border border-green-100 animate-fade-in">
            <Terminal className="w-4 h-4 text-[#46B94A]" />
            <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">Future-Ready Tech Curriculum</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            From Gamers to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Game Creators</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mb-12 leading-relaxed font-medium">
            Empower your child with the <span className="text-slate-900 font-bold">literacy of the 21st century</span>. We teach the code that powers the world and the AI that will define the future.
          </p>
          <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">Coding & AI</span>
          </nav>
        </div>
      </section>

      {/* ----------------- 2. TECH STATS ----------------- */}
      <section className="py-12 border-b border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Lines of Code Written", value: "1M+", icon: <Code2 className="text-[#01539D]" /> },
              { label: "AI Models Trained", value: "500+", icon: <Bot className="text-[#46B94A]" /> },
              { label: "Projects Deployed", value: "2500+", icon: <Rocket className="text-[#01539D]" /> },
              { label: "Digital Literacy", value: "100%", icon: <Cpu className="text-[#46B94A]" /> },
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

      {/* ----------------- 3. WHY CODING & AI? ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/ai.webp" alt="Student Coding" className="w-full aspect-[7/5] object-cover" />
            </div>
            {/* Floating Tech Badge */}
            <div className="absolute -top-10 -right-6 z-20 bg-[#46B94A] text-white p-8 rounded-[2.5rem] shadow-xl animate-pulse">
                <p className="text-4xl font-black mb-1">AI</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Next-Gen Ready<br/>Curriculum</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
              <Code2 className="w-4 h-4 text-[#01539D]" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Why Code?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Giving your child the <br />
              <span className="text-[#01539D]">Ultimate Superpower.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Building Infinite Logic", desc: "Coding is the ultimate workout for the brain, requiring rigorous logical structuring." },
                { title: "AI Native Workforce", desc: "Understanding AI today ensures they won't just use technology in the future; they will command it." },
                { title: "Creative Entrepreneurship", desc: "The ability to build your own app or website is the first step toward starting a global business." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#46B94A] shrink-0 transition-all group-hover:bg-[#46B94A] group-hover:text-white group-hover:scale-110 shadow-sm">
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

      {/* ----------------- 4. THE TECH ROADMAP ----------------- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Development Path</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#46B94A] to-[#01539D] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGY_LEVELS.map((level, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:border-[#01539D]/20">
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
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Engineering <span className="text-[#46B94A]">Mindset</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">We don't just teach languages; we teach the ability to adapt to any technology the future might bring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {METHODOLOGY.map((item, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#01539D] text-white rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-blue-100">
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
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #46B94A 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16">Creator Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
                  <MessageSquare className="text-[#46B94A] mb-8" size={32} />
                  <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-10 opacity-90">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#01539D] rounded-xl flex items-center justify-center font-black text-white">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-black text-white">{t.name}</h4>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. TECH FAQ ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Code Console</h2>
            <p className="text-slate-500 font-medium">Clear your syntax errors with our frequently asked questions.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-[2rem] transition-all duration-300 ${openFaq === i ? 'border-[#01539D] bg-slate-50' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className={`font-black text-lg md:text-xl pr-8 ${openFaq === i ? 'text-[#01539D]' : 'text-slate-800'}`}>{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#01539D] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-lg leading-relaxed border-t border-slate-200/50 pt-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. FINAL CTA ----------------- */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#01539D] to-[#46B94A] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-8">Hello Future Creator.</h2>
          <p className="relative z-10 text-blue-50 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Ready to build your first app or train your first AI model? Book a free coding assessment session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 relative z-10">
            <Link href="/bookdemo" className="group inline-flex items-center gap-4 bg-white text-[#01539D] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-slate-50 shadow-2xl active:scale-95">
              Book Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/30 transition-all active:scale-95">
              Secure Admission
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
      `}</style>
    </div>
  );
}