"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";
import ChessFAQSection from "@/components/ui/chessfaq";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5FA]">
      {/* Banner */}
      <SubpageBanner
        title="Get In"
        highlight="Touch."
        subtitle="Have questions about admissions, trial classes, or batch timings? We're here to help."
        breadcrumbLabel="Contact Us"
        bgImage="/comm.jpg"
        widgetLeft1Icon="Phone"
        widgetLeft1Label="Helpline"
        widgetLeft1Value="+91 62812 50967"
        widgetLeft2Icon="Mail"
        widgetLeft2Label="Email Inquiry"
        widgetLeft2Value="modernknightchessacademy@gmail.com"
        widgetRightIcon="Clock"
        widgetRightLabel="Availability"
        widgetRightValue="24/7 Support Desk"
      />

      {/* 1. Colorful Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Reach out anytime</span>
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32]">
            Let's Talk <span className="text-[#E11D48] italic">Chess.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            Whether you want to enroll a beginner student or prepare for national tournaments, our coaches are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Colorful Cards */}
          <div className="lg:col-span-5 space-y-4">

            {/* Address Card (Navy space gradient) */}
            <div className="bg-gradient-to-br from-[#041C32] to-[#0B4398] text-white rounded-3xl p-6 shadow-md border border-[#0B4398]/50 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#E11D48]/20 blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Main Center</p>
                  <h3 className="font-black text-lg text-white">Academy Headquarters</h3>
                  <p className="text-xs text-slate-200 leading-relaxed pt-1">
                    Manasa Hospital Rd, Danavai Peta, Rajamahendravaram, Andhra Pradesh 533103
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card (Emerald/Cyan gradient) */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl p-6 shadow-md border border-emerald-400/30 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                  📞
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-200">Instant Support</p>
                  <h3 className="font-black text-lg text-white">Phone & WhatsApp</h3>
                  <div className="text-xs text-emerald-100 space-y-1 font-semibold">
                    <p>📱 Mobile: +91 62812 50967</p>
                    <p>☎️ Alt: +91 98853 02468</p>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <a
                      href="tel:+916281250967"
                      className="px-4 py-2 bg-white text-emerald-900 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-emerald-50 transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/916281250967?text=Hi%20Modern%20Knight%20Chess%20Academy,%20I%20have%20an%20enquiry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card (Crimson Red gradient) */}
            <div className="bg-gradient-to-br from-[#E11D48] to-rose-900 text-white rounded-3xl p-6 shadow-md border border-[#E11D48]/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                  ✉️
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">Direct Desk</p>
                  <h3 className="font-black text-lg text-white">Email Address</h3>
                  <p className="text-xs text-rose-100 font-medium break-all pt-1">
                    modernknightchessacademy@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#041C32]">
                <span className="text-xl">⏰</span>
                <h3 className="font-black text-sm uppercase tracking-wider">Academy Timings</h3>
              </div>
              <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                <div className="flex justify-between text-slate-600">
                  <span>Monday - Saturday:</span>
                  <span className="font-bold text-[#041C32]">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sunday:</span>
                  <span className="font-bold text-[#E11D48]">8:00 AM - 6:00 PM (Tournaments)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Colorful Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-md space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0B4398] text-[10px] font-black uppercase tracking-wider">
                  Fast Response Guaranteed
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#041C32] mt-2">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500 mt-1">Our academy counselor will get back to you within 2 hours.</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center space-y-4">
                  <span className="text-5xl">🎉</span>
                  <h4 className="text-xl font-black text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you for connecting with Modern Knight Chess Academy. Our training coordinator will call or message you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-colors"
                  >
                    Send Another Enquiry
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Student / Parent Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Mehta"
                        className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-[#041C32] block mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Enquiry Type *</label>
                    <select className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 font-medium">
                      <option>Book Free Trial Class</option>
                      <option>Admission & Course Selection</option>
                      <option>Tournament Registration</option>
                      <option>Online Portal & Software Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#041C32] block mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the student's age, current chess experience, and preferred mode (Online / Offline)..."
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B4398] focus:bg-white text-slate-900 transition-all font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest shadow-[0_6px_20px_rgba(225,29,72,0.35)] transition-all hover:-translate-y-0.5"
                  >
                    Submit Enquiry Now →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Google Maps Integration Section */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Visit our center</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#041C32]">
                Find Us on <span className="text-[#E11D48] italic">Google Maps.</span>
              </h2>
            </div>
            
            <a
              href="https://maps.google.com/?q=Danavai+Peta+Rajamahendravaram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#041C32] hover:bg-[#0B4398] text-white text-xs font-black uppercase tracking-widest transition-colors shadow-md shrink-0"
            >
              <span>Get Directions</span>
              <span>↗</span>
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <iframe
              title="Modern Knight Chess Academy Google Map Location"
              src="https://maps.google.com/maps?q=Danavai%20Peta%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E11D48] text-white flex items-center justify-center text-lg font-bold shrink-0">
                ♞
              </div>
              <div>
                <p className="font-black text-[#041C32] text-xs">Modern Knight Chess Academy</p>
                <p className="text-[10px] text-slate-500">Danavai Peta, Rajamahendravaram, AP 533103</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Homepage FAQ Section */}
      <ChessFAQSection />

      {/* 4. Unique Contact Page CTA — Direct Coach Helpline */}
      <section className="py-14 px-4 md:px-8 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#041C32] via-[#0B4398] to-[#041C32] border-2 border-[#E11D48]/30 shadow-2xl p-8 md:p-12">
            
            {/* Ambient Radial Glows */}
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#0B4398]/50 blur-3xl pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#E11D48]/25 blur-3xl pointer-events-none" />
            
            {/* Knight Watermark */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[180px] text-white/[0.04] font-black select-none pointer-events-none leading-none hidden lg:block">
              ♞
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ⚡ Instant Coach Inquiry Desk
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Still have questions? Speak directly with a <br />
                  <span className="italic text-[#E11D48]">Master Coach.</span>
                </h2>

                <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-lg">
                  Get immediate, personalized guidance on batch selection, skill level evaluation, or tournament preparation before enrolling your child.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:+916281250967"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(225,29,72,0.4)]"
                  >
                    <span>📞 Call Hotline: +91 62812 50967</span>
                  </a>

                  <Link
                    href="/bookdemo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Book Free Trial Class</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Contact Guarantee Badges */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {[
                  {
                    icon: "⚡",
                    title: "< 2 Hour Callback",
                    subtitle: "Fast response helpline policy",
                    accent: "border-blue-400/40 bg-blue-500/15 text-white"
                  },
                  {
                    icon: "🧩",
                    title: "Free Level Evaluation",
                    subtitle: "45-minute diagnostic skill assessment",
                    accent: "border-[#E11D48]/40 bg-[#E11D48]/15 text-white"
                  },
                  {
                    icon: "🛡️",
                    title: "FIDE Standard Advice",
                    subtitle: "Genuine, no-pressure guidance for parents",
                    accent: "border-emerald-400/40 bg-emerald-500/15 text-white"
                  }
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-xs"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border ${badge.accent}`}>
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs leading-tight">{badge.title}</h4>
                      <p className="text-blue-200 text-[10px] font-medium mt-0.5">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
