"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubpageBanner from "@/components/ui/SubpageBanner";
import { blogs } from "@/lib/blogs-data";

const categories = ["All", "Chess Tips", "Tournament Tips", "Educational", "Mindset", "Academy News"];

const categoryColors: Record<string, string> = {
  "Chess Tips":      "bg-blue-100 text-[#0B4398]",
  "Tournament Tips": "bg-amber-100 text-amber-700",
  "Educational":     "bg-emerald-100 text-emerald-700",
  "Mindset":         "bg-purple-100 text-purple-700",
  "Academy News":    "bg-rose-100 text-[#E11D48]",
};

function CategoryBadge({ cat, overlay = false }: { cat: string; overlay?: boolean }) {
  if (overlay) {
    return (
      <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-[#E11D48] text-[9px] font-black uppercase tracking-wider shadow-sm">
        {cat}
      </span>
    );
  }
  const cls = categoryColors[cat] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${cls}`}>
      {cat}
    </span>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const [hero, second, third, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <SubpageBanner
        title="Chess"
        highlight="Insights."
        subtitle="Tactical guides, grandmaster analyses, academy news and training tips."
        breadcrumbLabel="Blogs"
        bgImage="/inter.jpg"
        widgetLeft1Icon="FileText"
        widgetLeft1Label="Articles"
        widgetLeft1Value="10+ Guides"
        widgetLeft2Icon="Layers"
        widgetLeft2Label="Analysis"
        widgetLeft2Value="GM Breakdowns"
        widgetRightIcon="Bell"
        widgetRightLabel="Updates"
        widgetRightValue="Weekly Posts"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">From the Academy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#041C32] leading-none">
              Latest <span className="text-[#E11D48] italic">Articles.</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#041C32] text-white border-[#041C32]"
                    : "bg-white text-slate-500 border-slate-200 hover:border-[#041C32] hover:text-[#041C32]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            <p className="text-5xl mb-4">♟</p>
            <p className="font-bold text-lg">No articles in this category yet.</p>
          </div>
        )}

        {/* ── TOP ROW: Large hero + 2 side cards ── */}
        {hero && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">

            {/* Hero card — full overlay style */}
            <Link
              href={`/blogs/${hero.slug}`}
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden block min-h-[420px] shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={hero.image}
                alt={hero.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

              {/* Top: Featured badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <CategoryBadge cat={hero.category} overlay />
                <span className="px-2.5 py-1 rounded-lg bg-[#E11D48] text-white text-[9px] font-black uppercase tracking-wider">
                  Featured
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/60 text-[10px] font-semibold mb-2 uppercase tracking-widest">{hero.date} · {hero.readTime}</p>
                <h2 className="text-xl md:text-2xl font-black text-white leading-snug mb-3 group-hover:text-blue-200 transition-colors">
                  {hero.title}
                </h2>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4">{hero.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-[10px] font-semibold">✍️ {hero.author}</span>
                  <span className="text-xs font-black text-white border border-white/30 px-3 py-1.5 rounded-lg group-hover:bg-white group-hover:text-[#041C32] transition-all duration-200">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>

            {/* Right: 2 stacked side cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[second, third].filter(Boolean).map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group flex gap-4 bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg rounded-2xl p-4 transition-all duration-300 flex-1"
                >
                  <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between min-w-0">
                    <div className="space-y-1.5">
                      <CategoryBadge cat={blog.category} />
                      <h3 className="text-sm font-black text-[#041C32] group-hover:text-[#0B4398] transition-colors leading-snug line-clamp-3">
                        {blog.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-slate-400 font-semibold">{blog.readTime}</span>
                      <span className="text-[10px] font-black text-[#0B4398]">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── REMAINING CARDS: 3-col grid ── */}
        {rest.length > 0 && (
          <>
            <div className="flex items-center gap-3 my-8">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">More Articles</span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <CategoryBadge cat={blog.category} overlay />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                      <span>{blog.date}</span>
                      <span className="text-slate-200">·</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-sm font-black text-[#041C32] group-hover:text-[#0B4398] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 flex-1">{blog.summary}</p>

                    <div className="pt-3 mt-auto border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#0B4398] flex items-center justify-center text-white text-[8px] font-black shrink-0">
                          {blog.author.split(" ").slice(-1)[0][0]}
                        </div>
                        <span className="text-[10px] text-slate-500 font-semibold truncate max-w-[110px]">{blog.author}</span>
                      </div>
                      <span className="text-[10px] font-black text-[#0B4398] group-hover:underline shrink-0">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}