"use client";
import React, { useState, useEffect } from "react";
import SubpageBanner from "@/components/ui/SubpageBanner";
import Link from "next/link";

type Category = "all" | "events" | "training" | "wins" | "family";

const fallbackGalleryItems: { src: string; category: Category }[] = [
  { src: "/hero.jpg",              category: "family" },
  { src: "/hero1.png",             category: "training" },
  { src: "/hero2.png",             category: "training" },
  { src: "/hero3.png",             category: "family" },
  { src: "/founder.jpg",           category: "family" },
  { src: "/ravin.png",             category: "training" },
  { src: "/inter.jpg",             category: "events" },
  { src: "/comm.jpg",              category: "events" },
  { src: "/playi.png",             category: "training" },
  { src: "/advan.jpg",             category: "training" },
  { src: "/logic.jpg",             category: "wins" },
  { src: "/problem.jpg",           category: "wins" },
  { src: "/chess.webp",            category: "wins" },
  { src: "/chess-grandmaster.png", category: "events" },
  { src: "/central-knight.png",    category: "wins" },
  { src: "/beginer.webp",          category: "training" },
  { src: "/abourrr.png",           category: "family" },
  { src: "/mission.png",           category: "family" },
  { src: "/stat.png",              category: "wins" },
  { src: "/ai.webp",               category: "wins" },
  { src: "/demo.png",              category: "training" },
  { src: "/faq-image.png",         category: "family" },
  { src: "/kings.png",             category: "wins" },
  { src: "/knight.png",            category: "wins" },
];

const tabs: { id: Category; label: string }[] = [
  { id: "all",      label: "All Moments" },
  { id: "events",   label: "Events" },
  { id: "training", label: "Training" },
  { id: "wins",     label: "Wins" },
  { id: "family",   label: "Our Family" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [dynamicItems, setDynamicItems] = useState<{ src: string; category: Category }[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped = data.map((item: any) => {
            const cat = (item.category || "events").toLowerCase();
            const validCategory: Category = ["events", "training", "wins", "family"].includes(cat)
              ? (cat as Category)
              : "events";
            return { src: item.imageUrl, category: validCategory };
          });
          setDynamicItems(mapped);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const galleryItems = [...dynamicItems, ...fallbackGalleryItems];


  const filtered = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F5F5FA]">

      {/* Banner */}
      <SubpageBanner
        title="Academy"
        highlight="Moments."
        subtitle="Glimpses of offline arenas, tournament halls, and trophy celebrations."
        breadcrumbLabel="Gallery"
        bgImage="/galbg.png"
        widgetLeft1Icon="Image"
        widgetLeft1Label="Media Hub"
        widgetLeft1Value="200+ Captures"
        widgetLeft2Icon="MapPin"
        widgetLeft2Label="Venues"
        widgetLeft2Value="State & Local"
        widgetRightIcon="Heart"
        widgetRightLabel="Memories"
        widgetRightValue="Building Champions"
      />

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 relative">
          {/* Watermark quote mark */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] font-black text-slate-200 select-none pointer-events-none leading-none hidden lg:block">"</span>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Visual Excellence</span>
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#041C32]">
            Capture the{" "}
            <span className="text-[#E11D48] italic">Movement.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-200 border-2 ${
                activeTab === tab.id
                  ? "bg-[#041C32] text-white border-[#041C32] shadow-md"
                  : "bg-transparent text-slate-600 border-slate-300 hover:border-[#041C32] hover:text-[#041C32]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid — 3 columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item, idx) => (
            <div
              key={`${item.src}-${idx}`}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-slate-400 gap-4">
            <span className="text-6xl">♟</span>
            <p className="text-lg font-bold">No images in this category yet.</p>
          </div>
        )}
      </section>

      {/* Compact CTA Banner */}
      <section className="pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#041C32] via-[#0B4398] to-[#041C32] shadow-2xl">
          {/* Knight watermark */}
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 text-[180px] leading-none text-white/[0.04] select-none pointer-events-none font-black">
            ♞
          </div>
          {/* Glow blobs */}
          <div className="absolute -left-10 -top-10 w-52 h-52 rounded-full bg-[#0B4398]/40 blur-3xl pointer-events-none" />
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#E11D48]/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-14 py-10 md:py-12">
            <div className="flex flex-col gap-5 z-10">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Admissions Open 2025–26
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
                Every champion started<br />
                with a single{" "}
                <span className="italic text-[#E11D48]">move.</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/bookdemo"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(225,29,72,0.4)]"
                >
                  Book Free Trial
                </Link>
                <a
                  href="https://wa.me/916281250967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative shrink-0 z-10 flex items-center gap-8">
              <div className="hidden md:flex flex-col gap-5">
                {[
                  { val: "2,000+", label: "Students" },
                  { val: "15+",    label: "Years" },
                  { val: "500+",   label: "Trophies" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-black text-white leading-none">{s.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <img
                src="/chess.webp"
                alt="Chess board"
                className="w-44 lg:w-60 h-auto object-contain drop-shadow-2xl rounded-xl hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
