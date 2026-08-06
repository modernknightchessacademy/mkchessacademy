"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Calendar, 
  Search, 
  CheckCheck, 
  UserX, 
  TrendingUp,
  Sparkles,
  RefreshCw
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  age: number;
  email?: string;
  phone?: string;
  batch: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  rating: number;
  status: string;
}

export default function AdminAttendancePage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [savingStatus, setSavingStatus] = useState<string | null>(null);
  
  // Date State
  const getTodayStr = () => new Date().toISOString().split("T")[0];
  const [attendanceDate, setAttendanceDate] = useState(getTodayStr());

  // Filters & Search
  const [selectedBatch, setSelectedBatch] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Attendance Records State: { [studentId]: "PRESENT" | "ABSENT" | "LATE" }
  const [attendanceState, setAttendanceState] = useState<{ [studentId: string]: "PRESENT" | "ABSENT" | "LATE" }>({});

  useEffect(() => {
    fetchData();
  }, [attendanceDate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resStu, resAtt] = await Promise.all([
        fetch("/api/students"),
        fetch(`/api/attendance?date=${attendanceDate}`),
      ]);

      let stuList: Student[] = [];
      if (resStu.ok) {
        stuList = await resStu.json();
        setStudents(stuList);
      }

      if (resAtt.ok) {
        const attList = await resAtt.json();
        const stateMap: { [studentId: string]: "PRESENT" | "ABSENT" | "LATE" } = {};
        attList.forEach((att: any) => {
          if (att.studentId) {
            stateMap[att.studentId] = att.status;
          }
        });
        
        // Default unassigned students to PRESENT for fast workflow
        const initialMap: { [studentId: string]: "PRESENT" | "ABSENT" | "LATE" } = {};
        stuList.forEach((s) => {
          initialMap[s.id] = stateMap[s.id] || "PRESENT";
        });

        setAttendanceState(initialMap);
      }
    } catch (e) {
      console.error("Error fetching attendance data:", e);
    } finally {
      setLoading(false);
    }
  };

  // Unique batches list
  const batches = useMemo(() => {
    const set = new Set(students.map((s) => s.batch || "General"));
    return ["ALL", ...Array.from(set)];
  }, [students]);

  // Filtered Students
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchBatch = selectedBatch === "ALL" || (s.batch || "General") === selectedBatch;
      const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBatch && matchSearch;
    });
  }, [students, selectedBatch, searchQuery]);

  // Attendance Metrics
  const stats = useMemo(() => {
    const total = filteredStudents.length;
    let present = 0;
    let absent = 0;
    let late = 0;

    filteredStudents.forEach((s) => {
      const status = attendanceState[s.id] || "PRESENT";
      if (status === "PRESENT") present++;
      else if (status === "ABSENT") absent++;
      else if (status === "LATE") late++;
    });

    const presentPercentage = total > 0 ? Math.round((present / total) * 100) : 0;

    return { total, present, absent, late, presentPercentage };
  }, [filteredStudents, attendanceState]);

  // Handle Individual Attendance Change (Optimistic 0ms UI update)
  const handleStatusChange = async (studentId: string, status: "PRESENT" | "ABSENT" | "LATE") => {
    setAttendanceState((prev) => ({ ...prev, [studentId]: status }));
    setSavingStatus("Syncing...");

    try {
      await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          status,
          date: attendanceDate,
        }),
      });
      setSavingStatus("Saved ✓");
      setTimeout(() => setSavingStatus(null), 1500);
    } catch (e) {
      console.error("Error saving attendance:", e);
      setSavingStatus("Error saving!");
    }
  };

  // Bulk Action: Mark All Filtered Students as PRESENT
  const handleBulkMarkAll = async (targetStatus: "PRESENT" | "ABSENT") => {
    const updatedMap = { ...attendanceState };
    const promises: Promise<any>[] = [];

    filteredStudents.forEach((s) => {
      updatedMap[s.id] = targetStatus;
      promises.push(
        fetch("/api/attendance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId: s.id,
            status: targetStatus,
            date: attendanceDate,
          }),
        })
      );
    });

    setAttendanceState(updatedMap);
    setSavingStatus(`Updating all to ${targetStatus}...`);

    try {
      await Promise.all(promises);
      setSavingStatus(`All marked ${targetStatus} ✓`);
      setTimeout(() => setSavingStatus(null), 2000);
    } catch (e) {
      console.error("Error performing bulk update:", e);
      setSavingStatus("Bulk update failed!");
    }
  };

  // Quick Date Helpers
  const setQuickDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    setAttendanceDate(d.toISOString().split("T")[0]);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Header & Date Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            📅 Attendance Manager
          </h2>
          <p className="text-xs text-slate-400">High-performance 1-click student attendance tracking.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Date Buttons */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setQuickDate(-1)}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              Yesterday
            </button>
            <button
              onClick={() => setQuickDate(0)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                attendanceDate === getTodayStr()
                  ? "bg-[#E11D48] text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Today
            </button>
          </div>

          {/* Date Picker */}
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 text-xs">
            <Calendar className="w-4 h-4 text-slate-400" />
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
            />
          </div>

          {/* Sync Status Badge */}
          {savingStatus && (
            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-lg animate-pulse">
              {savingStatus}
            </span>
          )}
        </div>
      </div>

      {/* Live Stats Cards Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold uppercase">Total Students</span>
          <p className="text-2xl font-black text-white">{stats.total}</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-emerald-400 font-semibold uppercase">Present</span>
            <span className="text-xs font-bold text-emerald-400">{stats.presentPercentage}%</span>
          </div>
          <p className="text-2xl font-black text-emerald-400">{stats.present}</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] text-amber-400 font-semibold uppercase">Late</span>
          <p className="text-2xl font-black text-amber-400">{stats.late}</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] text-rose-400 font-semibold uppercase">Absent</span>
          <p className="text-2xl font-black text-rose-400">{stats.absent}</p>
        </div>
      </div>

      {/* Control Bar: Batch Tabs, Search & Bulk Actions */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Batch Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {batches.map((batch) => (
            <button
              key={batch}
              onClick={() => setSelectedBatch(batch)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedBatch === batch
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {batch === "ALL" ? "All Batches" : batch}
            </button>
          ))}
        </div>

        {/* Bulk Quick Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleBulkMarkAll("PRESENT")}
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center gap-1.5"
            title="Mark all filtered students as Present"
          >
            <CheckCheck className="w-4 h-4" /> Mark All Present
          </button>
          <button
            onClick={() => handleBulkMarkAll("ABSENT")}
            className="px-3.5 py-2 bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5"
            title="Mark all filtered students as Absent"
          >
            <UserX className="w-4 h-4" /> Mark All Absent
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder="Filter students by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Main High-Performance Attendance Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Student Name</th>
                <th className="p-4">Assigned Batch</th>
                <th className="p-4">Skill Level</th>
                <th className="p-4 text-center">Attendance Status Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-500" />
                    Loading attendance records for {attendanceDate}...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    No students match the selected filters.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => {
                  const currentStatus = attendanceState[s.id] || "PRESENT";
                  return (
                    <tr key={s.id} className="hover:bg-slate-800/60 transition-colors">
                      <td className="p-4">
                        <div className="font-extrabold text-white text-sm">{s.name}</div>
                        <div className="text-[11px] text-slate-400">{s.phone || s.email || "No contact"}</div>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-slate-950 text-slate-300 rounded-lg border border-slate-800 font-medium">
                          {s.batch || "General"}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                          s.level === "BEGINNER"
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                            : s.level === "INTERMEDIATE"
                            ? "bg-amber-950 text-amber-300 border border-amber-500/30"
                            : "bg-purple-950 text-purple-300 border border-purple-500/30"
                        }`}>
                          {s.level}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleStatusChange(s.id, "PRESENT")}
                            className={`px-4 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                              currentStatus === "PRESENT"
                                ? "bg-emerald-600 text-white shadow-lg scale-105"
                                : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4" /> Present
                          </button>

                          <button
                            type="button"
                            onClick={() => handleStatusChange(s.id, "LATE")}
                            className={`px-4 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                              currentStatus === "LATE"
                                ? "bg-amber-600 text-white shadow-lg scale-105"
                                : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                            }`}
                          >
                            <Clock className="w-4 h-4" /> Late
                          </button>

                          <button
                            type="button"
                            onClick={() => handleStatusChange(s.id, "ABSENT")}
                            className={`px-4 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                              currentStatus === "ABSENT"
                                ? "bg-rose-600 text-white shadow-lg scale-105"
                                : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                            }`}
                          >
                            <XCircle className="w-4 h-4" /> Absent
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
