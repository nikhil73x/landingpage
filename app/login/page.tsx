'use client';

import React, { useState } from 'react';
import { ModernLoginForm } from '@/components/ui/modern-login-form';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { ThemeProvider } from '@/components/portfolio/theme-context';

export default function LoginPage() {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  );
}

function LoginContent() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 overflow-x-hidden">
      {/* Background Decorative Mesh / Dots */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl rounded-full dark:from-indigo-400/15 dark:via-purple-400/5 z-0"
      />

      {/* Header bar with branding & Theme switcher */}
      <header className="relative z-10 w-full max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 text-sm font-semibold shadow-sm">
            ✦
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
            Nexus UI
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/demo"
            className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition font-medium"
          >
            🧭 Demo Menu (/demo)
          </a>
          <a
            href="/attendance"
            className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition font-medium"
          >
            📋 Attendance Tracker
          </a>
          <ThemeToggle size="sm" />
        </div>
      </header>

      {/* Main Centered Login Section */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-4 py-8">
        <ModernLoginForm
          title="Attendance System Sign In"
          brandSubtitle="Sign in to access student roll call & attendance tracking"
          onSuccess={({ email }) => {
            showToast(`Signed in successfully as ${email}! Redirecting to Attendance Tracker...`);
            setTimeout(() => {
              window.location.href = '/attendance';
            }, 600);
          }}
          onForgotPassword={() => {
            showToast('Password reset instructions sent to your email.');
          }}
          onSignUp={() => {
            showToast('Redirecting to account creation page...');
          }}
        />

        {/* Global Toast Feedback */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="fixed bottom-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-lg backdrop-blur-md"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 w-full max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 gap-2">
        <p>© 2026 Nexus Systems, Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            Terms of Service
          </a>
          <span>·</span>
          <a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            Security
          </a>
        </div>
      </footer>
    </div>
  );
}
