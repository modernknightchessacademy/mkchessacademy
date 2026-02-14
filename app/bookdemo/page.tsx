"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Target,
  Brain,
  MessageSquare,
  Cpu,
  Loader2,
  Trophy
} from "lucide-react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    course: "Chess Coaching",
    experience: "beginner",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          age: "",
          course: "Chess Coaching",
          experience: "beginner",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* --- HERO & FORM SECTION --- */}
      <section className="relative pt-16 pb-24 lg:pt-0 lg:pb-40 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#46B94A]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#01539D]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* LEFT: CONTENT SIDE */}
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <Sparkles className="w-4 h-4 text-[#46B94A]" />
                <span className="text-[10px] md:text-xs font-black text-[#01539D] uppercase tracking-widest">
                  Experience Global Standards
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Unlock Your Child's <br />
                <span className="text-[#01539D]">Cognitive</span> <span className="text-[#46B94A]">Potential</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Book a <strong className="text-slate-900 underline decoration-[#46B94A] decoration-4 underline-offset-4">free 30-minute demo</strong> session. 
                Experience our professional trainers and specialized curriculum in Chess, Coding, and Logic.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 {[
                   { icon: <Target className="w-5 h-5 text-[#01539D]" />, title: "Skill Assessment", desc: "Detailed mapping of child's strengths." },
                   { icon: <Zap className="w-5 h-5 text-[#46B94A]" />, title: "Live Interaction", desc: "Real-time learning with experts." },
                   { icon: <Brain className="w-5 h-5 text-[#01539D]" />, title: "Logic Roadmap", desc: "Customized future learning plan." },
                   { icon: <MessageSquare className="w-5 h-5 text-[#46B94A]" />, title: "Counseling", desc: "1-on-1 session with our team." },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* RIGHT: FORM SIDE */}
            <div className="w-full lg:w-[480px]">
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#01539D]/10 border border-slate-50 p-8 md:p-10 relative">
                
                {/* Header within form */}
                <div className="text-center mb-8">
                   <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Request Demo</h3>
                   <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Admissions Open 2024</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-4">
                    <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required placeholder="Child's Full Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-[#01539D] transition-all outline-none" />
                    <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="Parent/Guardian Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-[#01539D] transition-all outline-none" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-[#01539D] transition-all outline-none" />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-[#01539D] transition-all outline-none" />
                      <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="Age" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-[#01539D] transition-all outline-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <select name="course" value={formData.course} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-black text-slate-700 appearance-none cursor-pointer focus:bg-white focus:border-[#01539D] transition-all outline-none">
                          <option value="Chess Coaching">Chess Coaching</option>
                          <option value="Coding & AI">Coding & AI</option>
                          <option value="Logical Reasoning">Logical Reasoning</option>
                          <option value="Memory Mastery">Memory Mastery</option>
                          <option value="Communication">Communication</option>
                        </select>
                      </div>
                      <select name="experience" value={formData.experience} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-black text-slate-700 appearance-none cursor-pointer focus:bg-white focus:border-[#01539D] transition-all outline-none">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Status Alerts */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 text-[#46B94A] text-xs font-black rounded-xl flex items-center gap-3 animate-bounce">
                      <CheckCircle2 className="w-5 h-5" /> ENQUIRY SENT! WE WILL CALL YOU SOON.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 text-xs font-black rounded-xl flex items-center gap-3">
                      FAILED TO SEND. PLEASE TRY WHATSAPP.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#01539D] hover:bg-[#01427a] text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70 uppercase tracking-widest text-sm"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Confirm Free Demo <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>

                <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Secure Enrollment • Trusted by 500+ Parents
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-[#01539D]" />
                <span className="font-black text-slate-800 uppercase tracking-tighter">Cognitive Growth</span>
             </div>
             <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6 text-[#46B94A]" />
                <span className="font-black text-slate-800 uppercase tracking-tighter">Tech-Innovation</span>
             </div>
             <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-[#01539D]" />
                <span className="font-black text-slate-800 uppercase tracking-tighter">Certified Mastery</span>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}