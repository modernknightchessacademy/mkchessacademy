"use client";

import React, { useState, useEffect } from "react";
import { Plus, Search, Trash2, Pencil } from "lucide-react";

interface Student {
  id: string;
  name: string;
  age: number;
  email?: string;
  password?: string;
  phone?: string;
  batch: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  rating: number;
  status: string;
  allowAllCourses?: boolean;
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [batches, setBatches] = useState<{ id: string; name: string }[]>([]);
  const [folders, setFolders] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [studentSearch, setStudentSearch] = useState("");

  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "10",
    email: "",
    password: "",
    phone: "",
    batch: "Beginner Morning",
    level: "BEGINNER" as "BEGINNER" | "INTERMEDIATE" | "ADVANCED",
    rating: "1200",
    allowAllCourses: false,
  });

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const [resS, resB, resF] = await Promise.all([
        fetch("/api/students"),
        fetch("/api/batches"),
        fetch("/api/puzzles/folders"),
      ]);
      if (resS.ok) setStudents(await resS.json());
      if (resB.ok) setBatches(await resB.json());
      if (resF.ok) setFolders(await resF.json());
    } catch (e) {
      console.error("Error fetching students:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      if (res.ok) {
        const created = await res.json();
        setStudents([created, ...students]);
        setShowAddStudent(false);
        setNewStudent({
          name: "",
          age: "10",
          email: "",
          password: "",
          phone: "",
          batch: "Beginner Morning",
          level: "BEGINNER",
          rating: "1200",
          allowAllCourses: false,
        });
      }
    } catch (e) {
      alert("Failed to add student");
    }
  };

  const handleUpdateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;
    try {
      const res = await fetch("/api/students", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingStudent),
      });
      if (res.ok) {
        const updated = await res.json();
        setStudents((prev) =>
          prev.map((s) => (s.id === updated.id ? { ...s, ...updated } : s))
        );
        setEditingStudent(null);
      } else {
        alert("Failed to update student");
      }
    } catch (e) {
      alert("Error updating student");
    }
  };

  const handleDeleteStudent = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete student "${name}"?`)) return;
    try {
      const res = await fetch(`/api/students?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
      } else {
        alert("Failed to delete student");
      }
    } catch (e) {
      alert("Error deleting student");
    }
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.batch.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Student Directory & Registration</h2>
          <p className="text-xs text-slate-400">View, edit login credentials, or manage enrolled academy students.</p>
        </div>
        <button
          onClick={() => setShowAddStudent(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Student
        </button>
      </div>

      <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-2xl border border-slate-800">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search students by name or batch..."
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Login Email & Password</th>
                <th className="p-4">Age</th>
                <th className="p-4">Points</th>
                <th className="p-4">Bypass Locks</th>
                <th className="p-4">Phone</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-slate-500">
                    Loading student directory...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-slate-500">
                    No students registered yet.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-white">{s.name}</td>
                    <td className="p-4">
                      <div className="font-mono text-slate-300">{s.email || "-"}</div>
                      {s.password && (
                        <div className="text-[10px] text-blue-400 font-mono">Pass: {s.password}</div>
                      )}
                    </td>
                    <td className="p-4">{s.age} yrs</td>
                    <td className="p-4 font-bold text-amber-400">{s.rating}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md border ${
                        s.allowAllCourses
                          ? "bg-emerald-950 text-emerald-300 border-emerald-500/30"
                          : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}>
                        {s.allowAllCourses ? "Bypassed" : "Locked"}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">{s.phone || "-"}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => setEditingStudent(s)}
                          className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-xl transition-all border border-transparent hover:border-blue-800/50 inline-flex items-center gap-1 text-xs font-bold"
                          title="Edit Student"
                        >
                          <Pencil className="w-3.5 h-3.5 text-blue-400" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteStudent(s.id, s.name)}
                          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl transition-all border border-transparent hover:border-rose-800/50 inline-flex items-center gap-1 text-xs font-bold"
                          title="Delete Student"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: ADD STUDENT */}
      {showAddStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 relative shadow-2xl">
            <button onClick={() => setShowAddStudent(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-lg font-bold text-white">Add New Student</h3>
            <form onSubmit={handleAddStudent} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Login Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Login Password *</label>
                  <input
                    type="text"
                    required
                    placeholder="Set password..."
                    value={newStudent.password}
                    onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Age</label>
                  <input
                    type="number"
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Starting Points</label>
                  <input
                    type="number"
                    value={newStudent.rating}
                    onChange={(e) => setNewStudent({ ...newStudent, rating: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id="add-student-bypass"
                  checked={newStudent.allowAllCourses}
                  onChange={(e) => setNewStudent({ ...newStudent, allowAllCourses: e.target.checked })}
                  className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label htmlFor="add-student-bypass" className="text-slate-400 block cursor-pointer">
                  Allow Access to All Courses (Bypass Locks)
                </label>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Phone Number</label>
                <input
                  type="text"
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-[#E11D48] text-white font-extrabold rounded-xl">
                Register Student
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT STUDENT */}
      {editingStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 relative shadow-2xl">
            <button onClick={() => setEditingStudent(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-lg font-bold text-white">Edit Student Profile</h3>
            <form onSubmit={handleUpdateStudent} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Login Email Address *</label>
                  <input
                    type="email"
                    required
                    value={editingStudent.email || ""}
                    onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Login Password *</label>
                  <input
                    type="text"
                    required
                    value={editingStudent.password || ""}
                    onChange={(e) => setEditingStudent({ ...editingStudent, password: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Age</label>
                  <input
                    type="number"
                    value={editingStudent.age}
                    onChange={(e) => setEditingStudent({ ...editingStudent, age: parseInt(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Points</label>
                  <input
                    type="number"
                    value={editingStudent.rating}
                    onChange={(e) => setEditingStudent({ ...editingStudent, rating: parseInt(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id="edit-student-bypass"
                  checked={editingStudent.allowAllCourses || false}
                  onChange={(e) => setEditingStudent({ ...editingStudent, allowAllCourses: e.target.checked })}
                  className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label htmlFor="edit-student-bypass" className="text-slate-400 block cursor-pointer">
                  Allow Access to All Courses (Bypass Locks)
                </label>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Phone Number</label>
                <input
                  type="text"
                  value={editingStudent.phone || ""}
                  onChange={(e) => setEditingStudent({ ...editingStudent, phone: e.target.value })}
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl transition-colors">
                Save Changes
              </button>

              <div className="border-t border-slate-800 pt-4 mt-4 space-y-3">
                <h4 className="text-sm font-bold text-white">Reset Course Progress</h4>
                <p className="text-[10px] text-slate-400">If a student gets stuck or it is impossible to reach 70% points, you can reset their progress for a specific course.</p>
                <div className="flex gap-2">
                  <select
                    id="reset-course-select"
                    className="flex-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none text-[11px]"
                  >
                    <option value="">-- Select Course --</option>
                    {folders.map((f) => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={async () => {
                      const select = document.getElementById("reset-course-select") as HTMLSelectElement;
                      const folderId = select?.value;
                      if (!folderId) {
                        alert("Please select a course to reset");
                        return;
                      }
                      if (!confirm("Are you sure you want to reset progress for this course? This will clear all solutions and attempts in this course for this student.")) {
                        return;
                      }
                      try {
                        const res = await fetch("/api/students/reset-course", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ studentId: editingStudent.id, folderId }),
                        });
                        if (res.ok) {
                          alert("Course progress reset successfully!");
                          setEditingStudent(null);
                          fetchStudents();
                        } else {
                          alert("Failed to reset course progress");
                        }
                      } catch (err) {
                        console.error(err);
                        alert("Error resetting progress");
                      }
                    }}
                    className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-colors text-[11px]"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
