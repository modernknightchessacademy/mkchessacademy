"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone, HelpCircle, Trophy } from "lucide-react";
import Link from "next/link";

export default function ChessFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the best age to start Chess?",
      answer: "We recommend starting as early as 5 years old! At this age, children grasp patterns quickly, building strong cognitive foundations for strategic thinking.",
      theme: "amber",
    },
    {
      question: "Do you offer Online or Offline classes?",
      answer: "We offer both formats! Our offline centers provide a tactile physical board experience, while our online classes use interactive tools like Lichess & Chess.com.",
      theme: "blue",
    },
    {
      question: "How do students get FIDE Rated?",
      answer: "We guide students through official District and State tournaments. Once they accumulate rating points against rated opponents, they receive their international FIDE Rating.",
      theme: "rose",
    },
    {
      question: "What is the student-to-coach ratio in batches?",
      answer: "To ensure customized guidance, we maintain a small batch size with a low student-to-coach ratio (typically under 10 students per class).",
      theme: "blue",
    },
    {
      question: "Can my child participate in tournaments through the academy?",
      answer: "Absolutely! We actively register, prepare, and mentor our students for school, state, national, and international chess championships.",
      theme: "amber",
    },
  ];

  const getColors = (theme: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50/50 border-blue-100/80 text-blue-700 hover:border-blue-300",
      amber: "bg-amber-50/50 border-amber-100/80 text-amber-700 hover:border-amber-300",
      rose: "bg-rose-50/50 border-rose-100/80 text-rose-700 hover:border-rose-300",
    };
    return colors[theme] || colors.blue;
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Centered Heading Layout */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-flex items-center gap-2 select-none">
            <HelpCircle size={14} /> Parent Queries
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Mastering the <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Details</span> ♟️
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Got questions about tournaments, ratings, or schedules? We've got the moves figured out.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: THE FAQS Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const colorClasses = getColors(faq.theme);

              return (
                <div
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`
                    cursor-pointer rounded-2xl border-2 p-1 transition-all duration-300
                    ${
                      isOpen
                        ? "bg-white shadow-[0_15px_30px_rgba(11,67,152,0.03)] scale-[1.01] border-slate-100"
                        : "bg-transparent border-transparent"
                    }
                  `}
                >
                  <div
                    className={`
                      flex flex-col rounded-xl border-2 p-5 transition-all duration-300
                      ${colorClasses}
                      ${isOpen ? "border-transparent bg-opacity-100 bg-white" : "bg-opacity-60"}
                    `}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-extrabold text-base md:text-lg text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      <span
                        className={`
                          flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-955 transition-all duration-300 border border-slate-100 shadow-sm
                          ${isOpen ? "rotate-180 bg-slate-900 text-white" : ""}
                        `}
                      >
                        {isOpen ? (
                          <Minus size={16} strokeWidth={3} />
                        ) : (
                          <Plus size={16} strokeWidth={3} />
                        )}
                      </span>
                    </div>

                    <div
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
                      `}
                    >
                      <p className="text-slate-600 text-sm leading-relaxed font-light pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: FAQ IMAGE & DECORATIONS */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative group">

              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <img
                  src="/faq-image.png"
                  alt="FAQ Chess Mentorship"
                  className="w-full aspect-[4/5] md:h-[520px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Floating Card 1: Call Us */}
              <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3.5 animate-float z-20">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shadow-sm shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Talk to Coach</p>
                  <p className="text-base font-black text-slate-800 tracking-tight">+91 99481 98809</p>
                </div>
              </div>

              {/* Floating Card 2: Next Tournament */}
              <div className="absolute top-12 -right-6 bg-slate-950 p-4 pr-6 rounded-2xl rounded-tr-none shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-slate-800 animate-bounce-slow z-20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 shadow-md">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-xs">Next Tournament</p>
                    <Link
                      href="/bookdemo"
                      className="text-[10px] text-amber-400 font-black uppercase tracking-widest hover:underline block mt-0.5"
                    >
                      Register Now!
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Animations style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: float 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}