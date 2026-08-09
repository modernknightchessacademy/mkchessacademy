"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5FA]">
      {/* Banner */}
      <SubpageBanner
        title="Free"
        highlight="Trial Slot."
        subtitle="Book your 45-minute 1-on-1 strategic assessment and trial class today."
        breadcrumbLabel="Book Demo"
        bgImage="/demo.png"
        widgetLeft1Icon="UserCheck"
        widgetLeft1Label="Class Format"
        widgetLeft1Value="45-Min 1-on-1 Session"
        widgetLeft2Icon="Target"
        widgetLeft2Label="Assessment"
        widgetLeft2Value="Chess Strength Score"
        widgetRightIcon="Sparkles"
        widgetRightLabel="Cost"
        widgetRightValue="₹0 Registration Fee"
      />

      {/* Main Split Container: Left Contact Details & Right Form */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* ── LEFT COLUMN: Contact Details & Academy Info ── */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#041C32] via-[#0B4398] to-[#041C32] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Background Glows & Knight Watermark */}
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#0B4398]/50 blur-3xl pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#E11D48]/30 blur-3xl pointer-events-none" />
            <div className="absolute right-4 bottom-4 text-[180px] text-white/[0.04] font-black select-none pointer-events-none leading-none">
              ♞
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Free 45-Min Evaluation
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Book Your Free <br />
                  <span className="italic text-[#E11D48]">Demo Class.</span>
                </h2>
                <p className="text-blue-100 text-xs md:text-sm mt-3 leading-relaxed">
                  Evaluate your child's chess level with our FIDE-certified coach. No payment or credit card required.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-5 text-xs pt-4 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">Academy Center</p>
                    <p className="text-slate-300 text-xs leading-relaxed mt-0.5">
                      Manasa Hospital Rd, Danavai Peta, Rajamahendravaram, AP 533103
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">Direct Helpline</p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      +91 98853 02468 / +91 62812 50967
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                    💬
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">WhatsApp Support</p>
                    <a
                      href="https://wa.me/919885302468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 text-xs font-bold hover:underline"
                    >
                      +91 98853 02468 (Instant Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">Email Address</p>
                    <p className="text-slate-300 text-xs break-all mt-0.5">
                      modernknightchessacademy@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FIDE Footer Badge */}
            <div className="relative z-10 pt-6 mt-8 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center font-bold text-base shrink-0 border border-[#E11D48]/30">
                🛡️
              </div>
              <div>
                <p className="text-xs font-black uppercase text-white tracking-wider">FIDE Certified Academy</p>
                <p className="text-[10px] text-blue-200">FIDE ID: 5021626 · International Curriculum</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Interactive Booking Form ── */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto">
                  🎉
                </div>
                <h3 className="text-3xl font-black text-[#041C32]">Demo Slot Reserved!</h3>
                <p className="text-xs md:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our head coach will call or WhatsApp you within 2 hours to confirm your preferred batch timing.
                </p>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-2 max-w-sm mx-auto">
                  <p className="font-bold text-[#041C32]">What Happens Next:</p>
                  <p className="text-slate-600">1. Keep your phone handy for our coordinator's call.</p>
                  <p className="text-slate-600">2. Prepare a laptop/tablet if taking an online trial.</p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-block px-8 py-3.5 bg-[#041C32] hover:bg-[#0B4398] text-white font-black rounded-xl text-xs uppercase tracking-widest transition-colors shadow-md"
                  >
                    Return to Home →
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-black text-[#041C32]">Schedule Trial Class</h3>
                  <p className="text-slate-500 text-xs">Fill in student details for customized batch placement.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Student Age / Grade *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 9 Years / Grade 4"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Parent Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Current Skill Level *</label>
                    <select className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 font-medium text-xs">
                      <option>Absolute Beginner (Zero/basic rules)</option>
                      <option>Casual Player (Unrated, plays with family)</option>
                      <option>Intermediate (Plays online, unrated or under 1200)</option>
                      <option>Rated Competitor (Above 1200 FIDE)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Preferred Mode *</label>
                    <select className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 font-medium text-xs">
                      <option>💻 Live Online Interactive Batch</option>
                      <option>♟ Offline Physical Branch Center</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 rounded-xl bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest shadow-[0_6px_20px_rgba(225,29,72,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Confirm Free Trial Booking →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}