"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, ArrowLeft, Loader2, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

interface Blog {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Partial<Blog> | null>(null);

  // Form Fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Chess Tips");
  const [author, setAuthor] = useState("");
  const [authorRole, setAuthorRole] = useState("Staff Coach");
  const [image, setImage] = useState("/blog1.jpg");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const categories = ["Chess Tips", "Tournament Tips", "Educational", "Mindset", "Academy News"];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        const data = await res.json();
        // Fallback static data is mapped differently if it has no id
        const normalized = data.map((b: any, idx: number) => ({
          id: b.id || `static-${idx}`,
          slug: b.slug,
          title: b.title,
          category: b.category,
          author: b.author,
          authorRole: b.authorRole,
          date: b.date,
          readTime: b.readTime,
          image: b.image,
          summary: b.summary,
          content: b.content,
        }));
        setBlogs(normalized);
      }
    } catch (e) {
      console.error("Error fetching blogs:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setCurrentBlog(null);
    setTitle("");
    setCategory("Chess Tips");
    setAuthor("G Karthik Gopal");
    setAuthorRole("Founder & Head Coach");
    setImage("/blog1.jpg");
    setSummary("");
    setContent("");
    setIsEditing(true);
  };

  const handleOpenEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    setTitle(blog.title);
    setCategory(blog.category);
    setAuthor(blog.author);
    setAuthorRole(blog.authorRole);
    setImage(blog.image);
    setSummary(blog.summary);
    setContent(blog.content);
    setIsEditing(true);
  };

  const handleDelete = async (id: string, title: string) => {
    if (id.startsWith("static-")) {
      alert("Static default articles cannot be deleted. You can delete articles you upload.");
      return;
    }
    if (!confirm(`Are you sure you want to delete the blog "${title}"?`)) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchBlogs();
      } else {
        alert("Failed to delete blog");
      }
    } catch (e) {
      alert("Error deleting blog");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !content.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      title: title.trim(),
      category,
      author: author.trim(),
      authorRole: authorRole.trim(),
      image: image.trim(),
      summary: summary.trim() || content.substring(0, 150) + "...",
      content: content.trim(),
    };

    try {
      let res;
      if (currentBlog && currentBlog.id && !currentBlog.id.startsWith("static-")) {
        res = await fetch(`/api/blogs/${currentBlog.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (res.ok) {
        setIsEditing(false);
        fetchBlogs();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to save blog");
      }
    } catch (e) {
      alert("Error saving blog");
    }
  };

  return (
    <div className="space-y-8 text-slate-100">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-rose-500" /> Academy Blogs Roster
          </h2>
          <p className="text-xs text-slate-400">
            Publish educational guides, match analyses, and tournament updates directly to the website.
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={handleOpenCreate}
            className="px-5 py-2.5 bg-gradient-to-r from-[#0B4398] to-[#E11D48] text-white font-extrabold text-xs rounded-xl shadow-lg hover:opacity-95 transition-opacity flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Create Article
          </button>
        )}
      </div>

      {isEditing ? (
        /* Blog Edit / Create Form */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-lg font-black text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {currentBlog ? "Edit Article Details" : "Compose New Article"}
            </h3>
            <button
              onClick={() => setIsEditing(false)}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" /> Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-slate-400 uppercase">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Opening Principles for Beginners"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 uppercase">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-900">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-slate-400 uppercase">Author Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. G Karthik Gopal"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 uppercase">Author Role</label>
                <input
                  type="text"
                  placeholder="e.g. Founder & Head Coach"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 uppercase">Cover Image Path/URL</label>
              <input
                type="text"
                placeholder="e.g. /blog1.jpg or external url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 uppercase">Short Summary *</label>
              <textarea
                required
                rows={2}
                placeholder="Brief sentence describing the article summary for teaser cards..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 uppercase">Full Body Content (Markdown Supported) *</label>
              <textarea
                required
                rows={10}
                placeholder="Write the full content. Use double newlines for paragraphs and '## Title' for headers."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-rose-500 font-medium font-mono leading-relaxed"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 bg-slate-850 hover:bg-slate-800 rounded-xl border border-slate-700 text-slate-300 font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg transition-all"
              >
                Save & Publish
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Blog List Table */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          {loading ? (
            <div className="text-center py-20 flex flex-col items-center justify-center gap-2 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
              <span>Fetching published articles...</span>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-semibold">
              ♟ No articles published yet. Click Create Article to write your first post!
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[800px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase font-black tracking-wider">
                    <th className="py-4 px-6 w-[35%]">Title</th>
                    <th className="py-4 px-6 w-[15%]">Category</th>
                    <th className="py-4 px-6 w-[20%]">Author</th>
                    <th className="py-4 px-6 w-[15%]">Publish Date</th>
                    <th className="py-4 px-6 w-[15%] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-slate-850/60 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-12 h-8 object-cover rounded-lg shrink-0 border border-slate-800"
                          />
                          <div>
                            <span className="font-extrabold text-white block text-sm max-w-[280px] truncate" title={blog.title}>
                              {blog.title}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium block mt-0.5 truncate max-w-[280px]">
                              {blog.summary}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-0.5 bg-blue-950 text-blue-400 font-extrabold rounded border border-blue-500/30">
                          {blog.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <span className="text-slate-200 font-bold block">{blog.author}</span>
                          <span className="text-[10px] text-slate-500 block">{blog.authorRole}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-400 font-mono font-bold">
                        {blog.date} <span className="text-[10px] text-slate-500 block">{blog.readTime}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(blog)}
                            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id, blog.title)}
                            disabled={blog.id.startsWith("static-")}
                            className={`p-2 rounded-lg border transition-colors ${
                              blog.id.startsWith("static-")
                                ? "bg-slate-900 border-slate-850 text-slate-600 cursor-not-allowed"
                                : "bg-red-950/60 hover:bg-red-900 text-red-400 border-red-500/20"
                            }`}
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
