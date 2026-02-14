"use client";

import React from "react";
import { Star, Quote, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Parent of Grade 4 Student",
    text: "The coding and logic programs have completely changed how my son approaches problems. He's more patient, analytical, and excited about technology than ever before.",
    rating: 5,
    initials: "SJ",
    gradient: "from-[#01539D]/20 to-[#01539D]/5"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Parent of Grade 2 Student",
    text: "Since joining the memory and abacus classes, her concentration levels in school have skyrocketed. The trainers are incredibly patient and know how to keep kids engaged.",
    rating: 5,
    initials: "DC",
    gradient: "from-[#46B94A]/20 to-[#46B94A]/5"
  },
  {
    id: 3,
    name: "Robert Wilson",
    role: "Parent of Grade 6 Student",
    text: "The strategic thinking taught in the chess program has translated into better decision-making in his daily life. It's the best investment we've made in his extracurriculars.",
    rating: 5,
    initials: "RW",
    gradient: "from-[#01539D]/20 to-[#01539D]/5"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Mother of 7-year-old",
    text: "The communication skills workshops gave my daughter the confidence to speak up in class. She’s no longer shy about sharing her ideas or leading a group project.",
    rating: 5,
    initials: "ER",
    gradient: "from-[#46B94A]/20 to-[#46B94A]/5"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      
      {/* --- Subtle Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#01539D] blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#46B94A] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* --- Centered Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            <Users className="w-3.5 h-3.5 text-[#01539D]" />
            <span>The FutureMind Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Loved by Parents, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01539D] to-[#46B94A]">
              Empowering Students
            </span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#01539D] to-[#46B94A] mx-auto rounded-full"></div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-[#01539D]/5 transition-all duration-500 group"
            >
              
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={50} className="fill-[#01539D] text-[#01539D]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#46B94A] fill-[#46B94A]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium italic">
                "{item.text}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                {/* Initials Avatar */}
                <div className={`w-12 h-12 rounded-2xl shrink-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-[#01539D] font-black text-lg shadow-sm border border-white`}>
                  {item.initials}
                </div>
                
                <div className="min-w-0">
                  <h4 className="text-slate-900 font-bold text-base">
                    {item.name}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- Centered Footer Action --- */}
        <div className="mt-20 text-center">
          <Link 
            href="/bookdemo"
            className="group inline-flex items-center gap-4 bg-[#01539D] hover:bg-[#01427a] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-200 active:scale-95"
          >
            Join the Academy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
              Trusted by 500+ Families
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}