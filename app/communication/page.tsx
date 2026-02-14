"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  MessageSquare, Mic2, Users, Volume2, 
  CheckCircle2, ChevronRight, Home, Star, 
  HelpCircle, ArrowUp, Zap, Award, Globe, 
  GraduationCap, ChevronDown, ArrowRight, 
  Megaphone, Languages, Sparkles, Smile
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DATA & CONFIG                               */
/* -------------------------------------------------------------------------- */

const STRATEGY_LEVELS = [
  {
    level: "Stage 1: The Expressor",
    title: "Overcoming Stage Fear",
    desc: "Building the core confidence to stand in front of an audience and share thoughts clearly.",
    skills: ["Body Language", "Eye Contact", "Voice Projection", "Self-Introduction"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Stage 2: The Storyteller",
    title: "Narrative Mastery",
    desc: "Learning the art of storytelling and structure. Turning information into engaging narratives.",
    skills: ["Story Mapping", "Vocabulary Building", "Emotional Range", "Active Listening"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
  {
    level: "Stage 3: The Debater",
    title: "Persuasive Logic",
    desc: "Developing the ability to construct arguments, handle counter-points, and speak impromptu.",
    skills: ["Critical Thinking", "Debate Ethics", "JAM Sessions", "Logical Flow"],
    accent: "bg-[#01539D]/10 text-[#01539D]",
  },
  {
    level: "Stage 4: The Leader",
    title: "Global Articulation",
    desc: "Polishing executive presence, interpersonal communication, and leadership oratory.",
    skills: ["Public Speaking", "Interview Prep", "Conflict Resolution", "Charisma"],
    accent: "bg-[#46B94A]/10 text-[#46B94A]",
  },
];

const METHODOLOGY = [
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: "Impromptu Training",
    desc: "We use 'Just A Minute' (JAM) sessions to train the brain to think and speak instantly under pressure."
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Performance Feedback",
    desc: "Recording student speeches and providing detailed video-based analysis on tone and posture."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Role-Play Dynamics",
    desc: "Simulating real-world scenarios like interviews, debates, and group discussions to build adaptability."
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Vocabulary Enrichment",
    desc: "Systematic introduction of high-impact words and idioms to make their speech sophisticated and sharp."
  }
];

const TESTIMONIALS = [
  {
    name: "Mrs. Kavitha Rao",
    role: "Mother of 6th Grader",
    text: "My son used to hide behind me during family gatherings. After 6 months at FutureMind, he hosted his school's annual day function. Truly life-changing!",
    initials: "KR"
  },
  {
    name: "Siddharth M.",
    role: "Stage 4 Student",
    text: "I learned that communication isn't just about talking; it's about connecting. The debate sessions helped me think faster and stay calm during exams.",
    initials: "SM"
  }
];

const FAQS = [
  {
    question: "Is this just an English grammar class?",
    answer: "No. While we ensure correct usage, this is a 'Performance & Soft Skills' program. We focus on 'Confidence, Body Language, and Logic' rather than just grammar."
  },
  {
    question: "Can an extremely shy child benefit from this?",
    answer: "Yes, our Level 1 is specifically designed for introverts. We use gentle, 1-on-1 techniques to slowly build their comfort zone before they face a group."
  },
  {
    question: "Do you offer certifications?",
    answer: "Yes, students receive a 'Young Orator' certification upon completion of each level, following a formal presentation assessment."
  }
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function CommunicationSkillsPage() {
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
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#01539D 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#46B94A]/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
            <Volume2 className="w-4 h-4 text-[#46B94A]" />
            <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-[0.2em]">The Leader's Voice Lab</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            Speak with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
            Turning shy students into <span className="text-slate-900 font-bold">magnetic speakers</span>. We build the confidence, vocabulary, and presence required to lead in a global world.
          </p>
          <nav className="flex items-center gap-3 text-sm font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <Link href="/" className="text-slate-400 hover:text-[#01539D] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight className="w-4 h-4 text-slate-200" strokeWidth={3} />
            <span className="bg-gradient-to-r from-[#01539D] to-[#46B94A] bg-clip-text text-transparent uppercase tracking-widest text-xs">Communication Skills</span>
          </nav>
        </div>
      </section>

      {/* ----------------- 2. PERFORMANCE STATS ----------------- */}
      <section className="py-12 border-b border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Confidence Boost", value: "100%", icon: <Zap className="text-[#01539D]" /> },
              { label: "Vocabulary Range", value: "2x ↑", icon: <Languages className="text-[#46B94A]" /> },
              { label: "Stage Time", value: "50+ Hrs", icon: <Mic2 className="text-[#01539D]" /> },
              { label: "Success Rate", value: "99%", icon: <Award className="text-[#46B94A]" /> },
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

      {/* ----------------- 3. WHY COMMUNICATION? ----------------- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/comm.jpg" alt="Student Presenting" className="w-full aspect-[7/5] object-cover" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-6 z-20 bg-[#01539D] text-white p-8 rounded-[2.5rem] shadow-xl">
                <p className="text-4xl font-black mb-1">Top</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Skill for 21st<br/>Century Success</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
              <Sparkles className="w-4 h-4 text-[#46B94A]" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">The Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Giving them the <br />
              <span className="text-[#01539D]">Confidence to Lead.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Academic Presence", desc: "Improved grades in viva, presentations, and group projects at school." },
                { title: "Social Intelligence", desc: "Developing empathy and conversational skills to build strong relationships." },
                { title: "Leadership Foundation", desc: "Training the mind to organize thoughts logically and persuade effectively." }
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

      {/* ----------------- 4. THE ROADMAP ----------------- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Oratory Path</h2>
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
                <div className="space-y-3 pt-6 border-t border-slate-100">
                   {level.skills.map((skill, si) => (
                     <div key={si} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-tighter">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Training <span className="text-[#01539D]">Dynamics</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">We focus on 80% practical performance and 20% theory to ensure students learn by doing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {METHODOLOGY.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 hover:bg-[#01539D] group transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white text-[#01539D] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-white">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed group-hover:text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. VOICES OF COMMUNITY ----------------- */}
      <section className="py-24 bg-[#01539D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="commPattern" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="1" fill="white"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#commPattern)" />
            </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16">
            <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-black mb-6">Confidence Unleashed</h2>
                <p className="text-blue-100 font-medium mb-8">Join the community of parents who have seen their children conquer the stage.</p>
                <div className="flex gap-1 text-[#46B94A]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl">
                  <MessageSquare className="text-[#01539D] mb-6" size={32} />
                  <p className="text-slate-600 font-medium leading-relaxed italic mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#46B94A]/20 rounded-xl flex items-center justify-center font-black text-[#01539D]">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900">{t.name}</h4>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Speaker's Corner</h2>
            <p className="text-slate-500 font-medium">Common questions about our Communication Skills lab.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${openFaq === i ? 'border-[#46B94A] bg-[#46B94A]/[0.02]' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className={`font-black text-lg pr-8 ${openFaq === i ? 'text-[#01539D]' : 'text-slate-800'}`}>{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#46B94A] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 font-medium leading-relaxed border-t border-slate-200/50 pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. FINAL CTA ----------------- */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#01539D] to-[#46B94A] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-8">Unmute Their Talent. <br/>Start Today.</h2>
          <p className="relative z-10 text-blue-50 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Give your child the unfair advantage of clear communication. Book a free diagnostic speaking assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 relative z-10">
            <Link href="/bookdemo" className="group inline-flex items-center gap-4 bg-white text-[#01539D] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-slate-100 shadow-2xl active:scale-95">
              Book Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/30 transition-all active:scale-95">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- 9. SCROLL TO TOP ----------------- */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#01539D] rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:bg-[#46B94A] text-white ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <ArrowUp size={24} strokeWidth={3} />
      </button>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
      `}</style>
    </div>
  );
}