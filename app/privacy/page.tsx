"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  UserCheck,
  FileText,
  Database,
  Bell,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  KeyRound,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Award
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("collection");

  const lastUpdatedDate = "March 28, 2026";

  const quickHighlights = [
    {
      icon: ShieldCheck,
      title: "100% Student Data Protection",
      description:
        "Student learning records, ratings, and attendance logs are strictly confidential and never sold or shared with commercial third parties.",
      color: "from-blue-600 to-[#0B4398]",
      badge: "Child Safe",
    },
    {
      icon: EyeOff,
      title: "Zero Third-Party Advertising",
      description:
        "Our platform, student puzzle arena, and demo portals are completely free of third-party ads, tracking trackers, or sponsored ad networks.",
      color: "from-purple-600 to-indigo-700",
      badge: "No Ad Trackers",
    },
    {
      icon: Lock,
      title: "Encrypted Data & Payments",
      description:
        "All transactions, session tokens, and passwords utilize industry-grade 256-bit SSL encryption and tokenized authentication protocols.",
      color: "from-[#E11D48] to-rose-700",
      badge: "Bank-Grade SSL",
    },
    {
      icon: UserCheck,
      title: "Parental Consent & Rights",
      description:
        "Parents maintain complete ownership and control over their child's profile, with rights to review, export, or request permanent deletion at any time.",
      color: "from-emerald-600 to-teal-700",
      badge: "Full Parental Control",
    },
  ];

  const tableOfContents = [
    { id: "introduction", label: "1. Overview & Commitment" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "usage", label: "3. How We Use Your Data" },
    { id: "children", label: "4. Child & Student Safety" },
    { id: "payments", label: "5. Fee & Payment Security" },
    { id: "sharing", label: "6. Third-Party Integrations" },
    { id: "storage", label: "7. Data Security & Storage" },
    { id: "parental-rights", label: "8. Parental Rights & Deletion" },
    { id: "cookies", label: "9. Cookies & Portal Sessions" },
    { id: "updates", label: "10. Policy Modifications" },
    { id: "contact", label: "11. Data Protection Officer" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5FA]">
      {/* Subpage Banner Header */}
      <SubpageBanner
        title="Privacy"
        highlight="Policy."
        subtitle="Learn how Modern Knight Chess Academy collects, protects, uses, and safeguards your student and parental information."
        breadcrumbLabel="Privacy Policy"
        bgImage="/inter.jpg"
        widgetLeft1Icon="ShieldCheck"
        widgetLeft1Label="Compliance"
        widgetLeft1Value="DPDP & Child Safe"
        widgetLeft2Icon="Lock"
        widgetLeft2Label="Encryption"
        widgetLeft2Value="256-Bit SSL Secured"
        widgetRightIcon="Clock"
        widgetRightLabel="Effective Date"
        widgetRightValue={lastUpdatedDate}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Top Highlight Summary Banner */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0B4398] text-[10px] font-black uppercase tracking-widest border border-blue-100 inline-block">
              Privacy at a Glance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#041C32] tracking-tight">
              Our Commitment to <span className="text-[#E11D48] italic">Transparency.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Modern Knight Chess Academy, we prioritize the safety and privacy of young minds and their families. Here are our core privacy principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#041C32] text-base leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#0B4398] group-hover:text-[#E11D48] transition-colors">
                    <span>Verified Clause</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-auto" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Layout Grid: Table of Contents + Policy Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sticky Sidebar: Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <BookOpen className="w-5 h-5 text-[#0B4398]" />
                <h3 className="font-black text-sm uppercase tracking-wider text-[#041C32]">
                  Table of Contents
                </h3>
              </div>

              <nav className="mt-4 space-y-1 text-xs">
                {tableOfContents.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between font-bold ${
                        isActive
                          ? "bg-[#0B4398] text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#0B4398]"
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-2xl p-4 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Need Help or Clarification?
                </p>
                <p className="text-xs text-slate-600">
                  Email our Privacy Officer directly:
                </p>
                <a
                  href="mailto:modernknightchessacademy@gmail.com"
                  className="text-xs font-black text-[#E11D48] hover:underline block break-all"
                >
                  modernknightchessacademy@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-[#041C32] to-[#0B4398] text-white rounded-3xl p-6 shadow-md border border-[#0B4398]/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  🛡️
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Direct Privacy Helpline</h4>
                  <p className="text-[10px] text-blue-200">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Parents can request copies of student match logs, attendance files, or request data deletion via WhatsApp or phone.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919885302468"
                  className="w-full py-2.5 bg-white text-[#041C32] hover:bg-slate-100 rounded-xl text-xs font-black uppercase tracking-wider text-center transition-colors shadow-sm"
                >
                  📞 Call +91 98853 02468
                </a>
                <a
                  href="https://wa.me/919885302468?text=Hello%20Modern%20Knight%20Chess%20Academy,%20I%20have%20a%20privacy%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-wider text-center transition-colors shadow-sm"
                >
                  💬 WhatsApp Support
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Sections */}
          <main className="lg:col-span-8 space-y-8 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            
            {/* Document Meta Header */}
            <div className="border-b border-slate-100 pb-6 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-md border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Policy Status
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Last Updated: <strong className="text-slate-800">{lastUpdatedDate}</strong>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Jurisdiction: <strong className="text-slate-800">Andhra Pradesh, India</strong>
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-[#041C32] pt-2">
                Modern Knight Chess Academy Privacy Policy
              </h1>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                This document sets forth the complete privacy policy of <strong>Modern Knight Chess Academy</strong> ("Academy", "we", "us", or "our"), governing the collection, processing, protection, and retention of personal data collected via our website (<strong>modernknightchess.com</strong>), interactive student portal, puzzle arena, demo registration systems, and physical academy branch locations.
              </p>
            </div>

            {/* Section 1: Overview */}
            <section id="introduction" className="space-y-4 pt-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h2 className="text-xl font-black text-[#041C32]">1. Overview & Core Commitment</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Modern Knight Chess Academy is dedicated to providing high-quality, FIDE-aligned chess education, tournament preparation, and cognitive training. Because many of our students are minors and school-age youths, we maintain the highest standards of data governance, complying with the Digital Personal Data Protection Act (DPDP Act) and international child privacy benchmarks.
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                <p className="font-bold text-[#041C32] uppercase tracking-wide">Summary of Guarantees:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>We collect only necessary information required for chess coaching, scheduling, and portal access.</li>
                  <li>We never sell, rent, or lease personal student data to data brokers or advertising agencies.</li>
                  <li>Parents possess the absolute right to inspect, correct, or delete their child's training records at any moment.</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="collection" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h2 className="text-xl font-black text-[#041C32]">2. Information We Collect</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We gather information in two primary categories: information provided directly by parents/students and technical data collected automatically during platform use.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-black text-sm text-[#041C32] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#0B4398]" />
                    A. Information You Provide Directly
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed pl-1">
                    <li>
                      <strong>Parent / Guardian Details:</strong> Full name, phone number, WhatsApp contact, residential city, and email address.
                    </li>
                    <li>
                      <strong>Student Profile Information:</strong> Student name, age / date of birth, school name, current chess experience level (Beginner, Intermediate, Advanced), FIDE ID / rating (if applicable), and profile photograph.
                    </li>
                    <li>
                      <strong>Booking & Demo Requests:</strong> Preferred batch timing, online vs. offline center choice (e.g. Danavaipeta Branch), and trial session notes.
                    </li>
                    <li>
                      <strong>Communication Records:</strong> Messages, feedback, attendance queries, or tournament entries sent via our contact forms or support channels.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-black text-sm text-[#041C32] flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#E11D48]" />
                    B. Academic & Training Data Generated During Coaching
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed pl-1">
                    <li>
                      <strong>Chess Puzzle & Match Logs:</strong> PGN game notations, puzzle solve speed, accuracy ratings, tactical evaluation scores, and study assignments completed on our portal.
                    </li>
                    <li>
                      <strong>Attendance & Progress Records:</strong> Class attendance dates, coach assessment notes, tournament rankings, and certificate issuances.
                    </li>
                    <li>
                      <strong>Login Credentials:</strong> Encrypted username and password credentials for student and administrative dashboards.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Data */}
            <section id="usage" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h2 className="text-xl font-black text-[#041C32]">3. How We Use Your Information</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Every piece of information collected is strictly utilized to operate, optimize, and enhance the chess coaching experience. Specifically:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {[
                  {
                    title: "Personalized Coaching",
                    desc: "Tailoring openings, tactical puzzles, and match preparation to each student's rating and skill curve.",
                  },
                  {
                    title: "Attendance & Batch Scheduling",
                    desc: "Managing online classroom links, offline center slots, and dispatching reminders to parents.",
                  },
                  {
                    title: "Tournament Entries & FIDE Arbiter Sync",
                    desc: "Assisting students with district, state, and FIDE rated tournament enrollment and registration.",
                  },
                  {
                    title: "Parent Progress Reports",
                    desc: "Providing periodic diagnostic summaries, puzzle accuracy charts, and developmental feedback.",
                  },
                  {
                    title: "Account Security & Authentication",
                    desc: "Verifying student logins, resetting passwords, and preventing unauthorized portal access.",
                  },
                  {
                    title: "Emergency & Operational Notices",
                    desc: "Broadcasting schedule modifications, holiday announcements, or tournament fixtures via SMS/WhatsApp.",
                  },
                ].map((use, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
                    <p className="font-extrabold text-[#041C32]">{use.title}</p>
                    <p className="text-slate-600 leading-relaxed font-light">{use.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Child & Student Safety */}
            <section id="children" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h2 className="text-xl font-black text-[#041C32]">4. Child & Minor Protection (Under 18)</h2>
              </div>
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-3">
                <div className="flex items-center gap-2 text-[#E11D48]">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <h4 className="font-extrabold text-sm">Strict Parental Consent Policy</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  We recognize our paramount duty to protect children under the age of 18. Modern Knight Chess Academy requires that all student enrollments, trial requests, and fee submissions be initiated and authorized by a parent or legal guardian.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside pl-1">
                  <li>We never solicit personal contact information directly from minor children without verifiable parental oversight.</li>
                  <li>Student portal profiles do not expose personal telephone numbers, home addresses, or private messages publicly.</li>
                  <li>Photographs taken during tournaments or academy events are published in our gallery or social media only with parental awareness, and can be removed upon written request immediately.</li>
                </ul>
              </div>
            </section>

            {/* Section 5: Fee & Payment Security */}
            <section id="payments" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm">
                  5
                </div>
                <h2 className="text-xl font-black text-[#041C32]">5. Fee & Payment Security</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                When parents pay academy tuition fees, tournament entry dues, or subscription packages:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                <p className="font-bold text-[#041C32]">Zero Storage of Financial Credentials:</p>
                <p className="leading-relaxed">
                  Modern Knight Chess Academy <strong>does not process or store credit card numbers, debit card CVVs, net-banking PINs, or UPI passcodes</strong> on its servers. All electronic fee settlements occur through PCI-DSS compliant Indian payment gateways (such as Razorpay, UPI QR, or direct bank IMPS/NEFT transfers).
                </p>
              </div>
            </section>

            {/* Section 6: Third-Party Integrations */}
            <section id="sharing" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  6
                </div>
                <h2 className="text-xl font-black text-[#041C32]">6. Third-Party Services & Infrastructure</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We work with reputable technology infrastructure providers solely to deliver academy services:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside leading-relaxed pl-1">
                <li>
                  <strong>Cloudinary:</strong> Secure cloud media storage for academy event photos, certificates, and student avatar images.
                </li>
                <li>
                  <strong>WhatsApp & Telephony APIs:</strong> Used solely to dispatch automated class schedules, attendance reminders, and tournament alerts to registered parents.
                </li>
                <li>
                  <strong>Vercel & Next.js Analytics:</strong> Used strictly in an anonymized, aggregated format to ensure portal uptime, fast page delivery, and prevent cyber threats.
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                We never permit these third parties to use your data for marketing or independent profiling.
              </p>
            </section>

            {/* Section 7: Data Security & Storage */}
            <section id="storage" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  7
                </div>
                <h2 className="text-xl font-black text-[#041C32]">7. Data Security & Storage Measures</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We implement robust technical and administrative safeguards to protect your data against unauthorized access, loss, alteration, or disclosure:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <KeyRound className="w-5 h-5 text-[#0B4398] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-[#041C32]">Bcrypt Password Hashing</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">All portal passwords are salted and hashed cryptographically before database persistence.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-[#041C32]">HTTPS SSL Encryption</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">End-to-end transport layer security encrypts all communications between your browser and our servers.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-[#041C32]">Role-Based Access Control</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Only certified academy coaches and authorized administrators possess credentials to view student dossiers.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <Database className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-[#041C32]">Automated Backups</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Regular encrypted backups ensure student game analysis and certificates are never permanently lost.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Parental Rights & Deletion */}
            <section id="parental-rights" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm">
                  8
                </div>
                <h2 className="text-xl font-black text-[#041C32]">8. Parental Rights & Data Deletion Requests</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Parents and guardians hold full control over their family’s personal information under applicable data protection laws. You are entitled to:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside leading-relaxed pl-1">
                <li>
                  <strong>Right to Access:</strong> Request a complete copy of all records, attendance logs, and game analyses held for your child.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of inaccurate dates of birth, misspelled names, contact numbers, or FIDE IDs.
                </li>
                <li>
                  <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request permanent deletion of student accounts and all associated data upon discontinuing training.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Opt out of academy photo publishing, SMS broadcast alerts, or newsletter communications at any time.
                </li>
              </ul>
              <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200 text-xs text-slate-800 flex items-center justify-between gap-4">
                <span>To exercise any of these rights, email us at <strong>modernknightchessacademy@gmail.com</strong>. All verified requests are processed within 7 business days.</span>
              </div>
            </section>

            {/* Section 9: Cookies */}
            <section id="cookies" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  9
                </div>
                <h2 className="text-xl font-black text-[#041C32]">9. Cookies & Local Storage</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Our web application uses essential cookies and browser LocalStorage strictly for technical functionality, such as:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside pl-1">
                <li>Maintaining your authenticated session across student and admin portal pages.</li>
                <li>Remembering your puzzle board theme, audio preferences, and sound toggle states.</li>
              </ul>
              <p className="text-xs text-slate-600">
                We do not use advertising or behavioral cross-site retargeting cookies. You can configure your browser to reject cookies, though certain portal features may require authentication to be re-entered.
              </p>
            </section>

            {/* Section 10: Policy Updates */}
            <section id="updates" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0B4398] flex items-center justify-center font-black text-sm">
                  10
                </div>
                <h2 className="text-xl font-black text-[#041C32]">10. Modifications to This Policy</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We may periodically update this Privacy Policy to reflect enhancements in academy software, FIDE regulations, or statutory legal guidelines. Any updates will be posted on this page with an updated "Last Updated" timestamp. We encourage parents to review this page periodically.
              </p>
            </section>

            {/* Section 11: Contact */}
            <section id="contact" className="space-y-4 pt-8 border-t border-slate-100 scroll-mt-28">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E11D48] text-white flex items-center justify-center font-black text-sm">
                  11
                </div>
                <h2 className="text-xl font-black text-[#041C32]">11. Contact Our Data Protection Officer</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                If you have questions, feedback, or concerns regarding our privacy practices or wish to submit a formal data request, please contact our academy desk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#041C32]">
                    <MapPin className="w-4 h-4 text-[#E11D48]" />
                    <h5 className="font-black text-xs uppercase tracking-wider">Physical Academy Location</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Modern Knight Chess Academy<br />
                    Manasa Hospital Road, Danavai Peta,<br />
                    Rajahmundry (Rajamahendravaram),<br />
                    Andhra Pradesh, India – 533103
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#041C32]">
                    <Mail className="w-4 h-4 text-[#0B4398]" />
                    <h5 className="font-black text-xs uppercase tracking-wider">Electronic Inquiries</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:modernknightchessacademy@gmail.com" className="text-[#0B4398] hover:underline break-all">
                      modernknightchessacademy@gmail.com
                    </a>
                    <br />
                    <strong>Helpline:</strong>{" "}
                    <a href="tel:+919885302468" className="text-[#0B4398] hover:underline">
                      +91 98853 02468
                    </a>
                    <br />
                    <strong>WhatsApp:</strong>{" "}
                    <a href="https://wa.me/919885302468" className="text-emerald-600 hover:underline">
                      +91 98853 02468
                    </a>
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>

        {/* Bottom Callout Section: Trust & Demo CTA */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-[#041C32] via-[#0B4398] to-[#041C32] p-8 md:p-12 text-white border-2 border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#0B4398]/50 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#E11D48]/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-black uppercase tracking-widest text-emerald-300 border border-white/20 inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trusted by 500+ Chess Families
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Ready to Experience FIDE Master Coaching?
              </h3>
              <p className="text-slate-200 text-xs md:text-sm font-light leading-relaxed">
                Book a risk-free demo session for your child today. Complete privacy and zero spam guaranteed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/bookdemo"
                className="px-6 py-3.5 bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(225,29,72,0.4)]"
              >
                👑 Book Free Trial Class
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
