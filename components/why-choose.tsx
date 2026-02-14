"use client";

import React from 'react';
import { 
  Trophy, 
  Cpu, 
  Lightbulb, 
  Target, 
  MessageSquare, 
  Zap 
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const features = [
    {
      title: 'Strategic Thinking',
      desc: 'Master the art of planning and foresight through professional chess coaching.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'text-[#01539D]',
      bg: 'bg-blue-50'
    },
    {
      title: 'Digital Literacy',
      desc: 'Learn future-ready skills in Coding and AI to transition from consumers to creators.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-[#46B94A]',
      bg: 'bg-green-50'
    },
    {
      title: 'Logical Reasoning',
      desc: 'Structured problem-solving exercises that build sharp analytical minds.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'text-[#01539D]',
      bg: 'bg-blue-50'
    },
    {
      title: 'Memory Mastery',
      desc: 'Advanced Abacus and memory techniques to boost focus and mental calculation.',
      icon: <Target className="w-6 h-6" />,
      color: 'text-[#46B94A]',
      bg: 'bg-green-50'
    },
    {
      title: 'Communication',
      desc: 'Develop the confidence to express ideas clearly and lead with conviction.',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'text-[#01539D]',
      bg: 'bg-blue-50'
    },
    {
      title: 'Holistic Growth',
      desc: 'A curriculum designed to balance academic excellence with creative intelligence.',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-[#46B94A]',
      bg: 'bg-green-50'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- CENTERED HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
            Why Choose <span className="text-[#01539D]">FutureMind</span>{" "}
            <span className="text-[#46B94A]">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#01539D] to-[#46B94A] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg font-medium">
            We bridge the gap between traditional schooling and modern skill requirements through our specialized training programs.
          </p>
        </div>

        {/* --- COMPACT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1"
            >
              {/* Compact Icon Circle */}
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- SUBTLE STATS BAR (Optional) --- */}
        <div className="mt-16 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#01539D]">500+</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trained</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#46B94A]">10+</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Programs</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#01539D]">98%</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Success Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}