"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { CloudinaryUpload } from "@/components/CloudinaryUpload";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [showAddGallery, setShowAddGallery] = useState(false);
  const [newGallery, setNewGallery] = useState({
    title: "",
    category: "Events",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery");
      if (res.ok) setGallery(await res.json());
    } catch (e) {
      console.error("Error fetching gallery:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGallery.imageUrl) return alert("Please upload a gallery image first");
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGallery),
      });
      if (res.ok) {
        const created = await res.json();
        setGallery([created, ...gallery]);
        setShowAddGallery(false);
        setNewGallery({
          title: "",
          category: "Events",
          imageUrl: "",
          description: "",
        });
      }
    } catch (e) {
      alert("Failed to save gallery image");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Academy Photo Gallery</h2>
          <p className="text-xs text-slate-400">Upload photos of training sessions, tournament events, and masterclasses.</p>
        </div>
        <button
          onClick={() => setShowAddGallery(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Photo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-500">
            Loading gallery images...
          </div>
        ) : gallery.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-500">
            No gallery images uploaded yet.
          </div>
        ) : (
          gallery.map((g) => (
            <div key={g.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 space-y-2">
              <div className="relative h-48 bg-slate-950">
                <img src={g.imageUrl} alt={g.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">{g.category}</span>
                <h4 className="font-bold text-white text-sm truncate">{g.title}</h4>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL: ADD GALLERY */}
      {showAddGallery && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 relative shadow-2xl">
            <button onClick={() => setShowAddGallery(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-lg font-bold text-white">Upload Gallery Photo</h3>
            <form onSubmit={handleAddGallery} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annual Rapid Chess Championship"
                  value={newGallery.title}
                  onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Category</label>
                <select
                  value={newGallery.category}
                  onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Events">Events</option>
                  <option value="Training">Training</option>
                  <option value="Tournaments">Tournaments</option>
                  <option value="Facility">Facility</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Description (Optional)</label>
                <input
                  type="text"
                  placeholder="Short caption..."
                  value={newGallery.description}
                  onChange={(e) => setNewGallery({ ...newGallery, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Upload Photo *</label>
                <CloudinaryUpload
                  value={newGallery.imageUrl}
                  onChange={(url: string) => setNewGallery({ ...newGallery, imageUrl: url })}
                />
                {newGallery.imageUrl && (
                  <p className="text-[11px] text-emerald-400 mt-1">✓ Photo uploaded successfully</p>
                )}
              </div>
              <button type="submit" className="w-full py-3 bg-[#E11D48] text-white font-extrabold rounded-xl">
                Save to Gallery
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
