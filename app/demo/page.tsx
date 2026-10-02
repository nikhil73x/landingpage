'use client';

import React, { useState } from 'react';
import GradientMenu from "@/components/ui/gradient-menu";
import { ArrowRight, Clock, Bell } from 'lucide-react';
import {
  IoHomeOutline,
  IoClipboardOutline,
  IoTimeOutline,
  IoNotificationsOutline
} from 'react-icons/io5';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<'none' | 'timetable' | 'notifications'>('none');

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white flex flex-col items-center justify-between p-6 overflow-x-hidden">
      {/* Top Banner / Navbar */}
      <header className="w-full max-w-5xl flex items-center justify-between py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
            ✦
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight">Navigation & Attendance Portal</h1>
            <p className="text-xs text-slate-400">Integrated with /demo, /login & /attendance</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="text-xs px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 transition font-medium"
          >
            🔐 Go to Login
          </a>
          <a
            href="/attendance"
            className="text-xs px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold flex items-center gap-1.5 text-white shadow-md shadow-blue-500/20"
          >
            📋 Attendance Tracker <ArrowRight size={13} />
          </a>
        </div>
      </header>

      {/* Center Section: Gradient Menu */}
      <section className="flex flex-col items-center justify-center my-auto py-12 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Interactive Navigation Bar
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Hover & Click to Navigate
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-10">
          Click <strong className="text-blue-400">Attendance</strong> to open the tracker, or <strong className="text-purple-400">Home</strong> to open the login page.
        </p>

        {/* The Animated Gradient Menu */}
        <GradientMenu
          items={[
            {
              title: 'Home',
              icon: <IoHomeOutline />,
              gradientFrom: '#a955ff',
              gradientTo: '#ea51ff',
              href: '/login'
            },
            {
              title: 'Attendance',
              icon: <IoClipboardOutline />,
              gradientFrom: '#56CCF2',
              gradientTo: '#2F80ED',
              href: '/attendance'
            },
            {
              title: 'Timetable',
              icon: <IoTimeOutline />,
              gradientFrom: '#FF9966',
              gradientTo: '#FF5E62',
              onClick: () => setActiveTab(activeTab === 'timetable' ? 'none' : 'timetable')
            },
            {
              title: 'Notification',
              icon: <IoNotificationsOutline />,
              gradientFrom: '#80FF72',
              gradientTo: '#7EE8FA',
              onClick: () => setActiveTab(activeTab === 'notifications' ? 'none' : 'notifications')
            }
          ]}
        />

        {/* Modal / Card for Timetable */}
        {activeTab === 'timetable' && (
          <div className="mt-8 w-full max-w-lg p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="font-semibold text-sm flex items-center gap-2 text-amber-400">
                <Clock size={16} /> Daily Class Timetable
              </span>
              <button onClick={() => setActiveTab('none')} className="text-xs text-slate-400 hover:text-white">✕ Close</button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded bg-slate-800/40">
                <span>09:00 AM - 10:30 AM</span>
                <span className="font-semibold text-blue-400">Data Structures & Algorithms</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-800/40">
                <span>10:45 AM - 12:15 PM</span>
                <span className="font-semibold text-emerald-400">Database Management Systems</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-800/40">
                <span>01:30 PM - 03:00 PM</span>
                <span className="font-semibold text-purple-400">Computer Networks Lab</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal / Card for Notifications */}
        {activeTab === 'notifications' && (
          <div className="mt-8 w-full max-w-lg p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="font-semibold text-sm flex items-center gap-2 text-emerald-400">
                <Bell size={16} /> Attendance Notifications
              </span>
              <button onClick={() => setActiveTab('none')} className="text-xs text-slate-400 hover:text-white">✕ Close</button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                ✔ Roll call for CSE Batch 2025 is synced and ready.
              </div>
              <div className="p-2.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
                ℹ️ Threshold policy: Minimum 75% attendance required before midterm exam eligibility.
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom Link Cards */}
      <footer className="w-full max-w-5xl py-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>© 2026 Integrated Attendance & Navigation System</span>
        <div className="flex items-center gap-4">
          <a href="/login" className="hover:text-slate-300 transition">Login Page</a>
          <span>·</span>
          <a href="/attendance" className="hover:text-slate-300 transition">Attendance Tracker</a>
          <span>·</span>
          <a href="/demo" className="text-blue-400 font-semibold">Demo Navigation</a>
        </div>
      </footer>
    </main>
  );
}
