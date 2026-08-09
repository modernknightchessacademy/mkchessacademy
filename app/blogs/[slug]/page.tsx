import React from "react";
import Link from "next/link";
import { blogs as staticBlogs } from "@/lib/blogs-data";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export async function generateStaticParams() {
  try {
    const dbBlogs = await prisma.blog.findMany({ select: { slug: true } });
    const dbSlugs = dbBlogs.map((b) => ({ slug: b.slug }));
    const staticSlugs = staticBlogs.map((b) => ({ slug: b.slug }));
    return [...dbSlugs, ...staticSlugs];
  } catch (e) {
    return staticBlogs.map((b) => ({ slug: b.slug }));
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  let blog = null;
  try {
    blog = await prisma.blog.findUnique({ where: { slug: params.slug } });
  } catch (e) {}
  if (!blog) {
    blog = staticBlogs.find((b) => b.slug === params.slug);
  }
  if (!blog) return {};
  return {
    title: `${blog.title} | Modern Knight Chess Academy`,
    description: blog.summary,
  };
}

const categoryColors: Record<string, string> = {
  "Chess Tips":      "bg-blue-100 text-[#0B4398]",
  "Tournament Tips": "bg-amber-100 text-amber-700",
  "Educational":     "bg-emerald-100 text-emerald-700",
  "Mindset":         "bg-purple-100 text-purple-700",
  "Academy News":    "bg-rose-100 text-[#E11D48]",
};

function renderContent(text: string) {
  const paragraphs = text.split("\n\n");
  return paragraphs.map((para, i) => {
    if (para.startsWith("## ")) {
      return (
        <h3 key={i} className="text-xl md:text-2xl font-black text-[#041C32] mt-10 mb-3 border-l-4 border-[#0B4398] pl-4">
          {para.replace("## ", "")}
        </h3>
      );
    }
    if (para.split("\n").every((l) => l.startsWith("- "))) {
      const items = para.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E11D48] shrink-0" />
              <span>{item.replace(/^- /, "")}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-slate-600 text-sm md:text-[15px] leading-relaxed md:leading-[1.85]">
        {para}
      </p>
    );
  });
}

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
  let blog = null;
  try {
    blog = await prisma.blog.findUnique({ where: { slug: params.slug } });
  } catch (e) {}
  if (!blog) {
    blog = staticBlogs.find((b) => b.slug === params.slug) || null;
  }
  if (!blog) notFound();

  let allBlogs = staticBlogs;
  try {
    const dbBlogs = await prisma.blog.findMany();
    if (dbBlogs.length > 0) {
      allBlogs = dbBlogs;
    }
  } catch (e) {}

  const related = allBlogs.filter(
    (b) => b.slug !== blog.slug && b.category === blog.category
  ).slice(0, 3);

  const catCls = categoryColors[blog.category] ?? "bg-slate-100 text-slate-600";
  const initials = blog.author.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <div className="min-h-screen bg-white">

      {/* Full-bleed hero */}
      <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-white/60 text-xs font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white/40 line-clamp-1">{blog.title}</span>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 md:px-8 pb-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${catCls}`}>
              {blog.category}
            </span>
            <span className="text-white/50 text-[10px] font-semibold">{blog.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">

        {/* Author + Meta card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl mb-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0B4398] to-[#041C32] flex items-center justify-center text-white font-black text-sm shadow-md">
              {initials}
            </div>
            <div>
              <p className="font-black text-[#041C32] text-sm">{blog.author}</p>
              <p className="text-[10px] text-slate-400 font-semibold">{blog.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="relative my-8 pl-6 border-l-4 border-[#E11D48]">
          <p className="italic text-slate-600 text-base md:text-lg font-semibold leading-relaxed">
            {blog.summary}
          </p>
        </blockquote>

        {/* Article Body */}
        <div className="space-y-5">
          {renderContent(blog.content)}
        </div>

        {/* CTA Box */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#041C32] via-[#0B4398] to-[#041C32] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[100px] text-white/[0.04] font-black select-none pointer-events-none leading-none">♞</div>
          <div className="flex-1 z-10">
            <span className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Admissions Open 2025–26
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
              Ready to train like a champion?<br />
              <span className="text-[#E11D48] italic">Start your journey today.</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 z-10 shrink-0">
            <Link
              href="/bookdemo"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E11D48] hover:bg-[#be1239] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(225,29,72,0.4)]"
            >
              Book Free Trial
            </Link>
            <a
              href="https://wa.me/919885302468"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-[#041C32] transition-colors uppercase tracking-widest"
          >
            ← Back to All Articles
          </Link>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-black text-[#041C32]">Related Articles</h3>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rb) => (
                <Link
                  key={rb.slug}
                  href={`/blogs/${rb.slug}`}
                  className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={rb.image}
                      alt={rb.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${categoryColors[rb.category] ?? "bg-slate-100 text-slate-600"}`}>
                      {rb.category}
                    </span>
                    <p className="text-sm font-black text-[#041C32] group-hover:text-[#0B4398] transition-colors line-clamp-2 leading-snug">
                      {rb.title}
                    </p>
                    <p className="text-[10px] text-slate-400 font-semibold">{rb.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
