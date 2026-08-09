"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Link from "next/link";

interface BookDemoContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookDemoContext = createContext<BookDemoContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useBookDemoModal = () => useContext(BookDemoContext);

export function BookDemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => {
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Global click interceptor for links pointing to /bookdemo
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href="/bookdemo"], a[href="#bookdemo"], [data-book-demo]');
      if (anchor) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <BookDemoContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* Global Book Demo Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg transition-colors"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* ── LEFT COLUMN: Contact Details & Academy Info ── */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#041C32] via-[#0B4398] to-[#041C32] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background Glows & Knight Watermark */}
              <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-[#0B4398]/50 blur-3xl pointer-events-none" />
              <div className="absolute -right-16 -bottom-16 w-60 h-60 rounded-full bg-[#E11D48]/30 blur-3xl pointer-events-none" />
              <div className="absolute right-4 bottom-4 text-[160px] text-white/[0.04] font-black select-none pointer-events-none leading-none">
                ♞
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Free 45-Min Evaluation
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Book Your Free <br />
                    <span className="italic text-[#E11D48]">Demo Class.</span>
                  </h2>
                  <p className="text-blue-100 text-xs mt-2 leading-relaxed">
                    Evaluate your child's chess level with our FIDE-certified coach. No payment or credit card required.
                  </p>
                </div>

                {/* Contact Details List */}
                <div className="space-y-4 text-xs pt-2 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="font-black text-white">Academy Center</p>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Danavai Peta, Rajamahendravaram, AP 533103
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">📞</span>
                    <div>
                      <p className="font-black text-white">Direct Helpline</p>
                      <p className="text-slate-300 text-[11px]">
                        +91 98853 02468 / +91 62812 50967
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">💬</span>
                    <div>
                      <p className="font-black text-white">WhatsApp Support</p>
                      <a
                        href="https://wa.me/919885302468"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-300 text-[11px] font-bold hover:underline"
                      >
                        +91 98853 02468 (Instant Reply)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">✉️</span>
                    <div>
                      <p className="font-black text-white">Email Address</p>
                      <p className="text-slate-300 text-[11px] break-all">
                        modernknightchessacademy@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FIDE Footer Badge */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center font-bold text-sm shrink-0 border border-[#E11D48]/30">
                  🛡️
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-white tracking-wider">FIDE Certified Academy</p>
                  <p className="text-[9px] text-blue-200">ID: 5021626 · International Standards</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Interactive Booking Form ── */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-white flex flex-col justify-center">
              {submitted ? (
                <div className="py-10 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                    🎉
                  </div>
                  <h3 className="text-2xl font-black text-[#041C32]">Demo Class Reserved!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our head coach will call or WhatsApp you within 2 hours to confirm your preferred batch timing.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 max-w-xs mx-auto">
                    <p className="font-bold text-[#041C32]">Next Steps:</p>
                    <p className="text-slate-600">1. Keep your phone handy for our coordinator's call.</p>
                    <p className="text-slate-600">2. Prepare a laptop/tablet if taking an online trial.</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="px-8 py-3 bg-[#041C32] hover:bg-[#0B4398] text-white font-black rounded-xl text-xs uppercase tracking-widest transition-colors shadow-md"
                  >
                    Done & Close
                  </button>
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
                    <h3 className="text-xl md:text-2xl font-black text-[#041C32]">Schedule Evaluation</h3>
                    <p className="text-slate-500 text-[11px]">Fill in student details for customized batch placement.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Student Age / Grade *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 9 Years / Grade 4"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Parent Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Current Skill Level *</label>
                      <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 font-medium">
                        <option>Complete Beginner (Knows zero/basic rules)</option>
                        <option>Casual Player (Unrated, plays with family)</option>
                        <option>Intermediate (Knows tactics, 1000+ online)</option>
                        <option>Rated Competitor (FIDE Rated player)</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Preferred Mode *</label>
                      <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 font-medium">
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
        </div>
      )}
    </BookDemoContext.Provider>
  );
}
