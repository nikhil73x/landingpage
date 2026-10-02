'use client';

import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Check,
  AlertCircle,
  Command,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ModernLoginFormProps {
  className?: string;
  onSuccess?: (user: { email: string }) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  title?: string;
  brandSubtitle?: string;
}

export function ModernLoginForm({
  className,
  onSuccess,
  onForgotPassword,
  onSignUp,
  title = 'Welcome back',
  brandSubtitle = 'Sign in to access your dashboard',
}: ModernLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Validation & status states
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email format validator
  const validateEmail = (val: string): boolean => {
    if (!val.trim()) {
      setEmailError('Email is required');
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError(null);
    return true;
  };

  // Password validator
  const validatePassword = (val: string): boolean => {
    if (!val) {
      setPasswordError('Password is required');
      return false;
    }
    if (val.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(e.target.value);
    if (generalError) setGeneralError(null);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) validatePassword(e.target.value);
    if (generalError) setGeneralError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError(null);

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate authentic API request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Demo validation: reject if user enters test failure condition
      if (email.toLowerCase().includes('fail')) {
        throw new Error('Invalid email or password. Please verify your credentials.');
      }

      setIsSuccess(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess({ email });
        }, 600);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Authentication failed';
      setGeneralError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: 'Google' | 'GitHub') => {
    setGeneralError(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      if (onSuccess) {
        setTimeout(() => onSuccess({ email: `user@${provider.toLowerCase()}.com` }), 500);
      }
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'w-full max-w-[420px] rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80',
        'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl',
        'p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.04),0_1px_3px_rgb(0,0,0,0.02)]',
        'dark:shadow-[0_8px_30px_rgb(0,0,0,0.4),0_1px_1px_rgb(255,255,255,0.05)]',
        'relative overflow-hidden',
        className
      )}
    >
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl rounded-full dark:from-indigo-400/15"
      />

      {/* Header with Icon */}
      <div className="flex flex-col items-center text-center mb-7">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="w-11 h-11 rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center mb-4 shadow-sm"
        >
          <Command className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
        </motion.div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">{brandSubtitle}</p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          disabled={isLoading || isSuccess}
          onClick={() => handleSocialLogin('Google')}
          className={cn(
            'flex items-center justify-center gap-2.5 h-10 px-3 rounded-lg',
            'border border-zinc-200 dark:border-zinc-800',
            'bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80',
            'text-xs font-medium text-zinc-700 dark:text-zinc-200',
            'transition-all duration-200 active:scale-[0.98]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {/* Authentic Google Multi-Color SVG */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.28-2.09 3.66-5.18 3.66-9.14z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.41l4.04-3.13z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.13c.95-2.83 3.6-4.97 6.72-4.97z"
            />
          </svg>
          Google
        </button>

        <button
          type="button"
          disabled={isLoading || isSuccess}
          onClick={() => handleSocialLogin('GitHub')}
          className={cn(
            'flex items-center justify-center gap-2.5 h-10 px-3 rounded-lg',
            'border border-zinc-200 dark:border-zinc-800',
            'bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80',
            'text-xs font-medium text-zinc-700 dark:text-zinc-200',
            'transition-all duration-200 active:scale-[0.98]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {/* GitHub SVG */}
          <svg
            className="w-4 h-4 shrink-0 fill-current text-zinc-900 dark:text-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200/90 dark:border-zinc-800" />
        </div>
        <span className="relative bg-white dark:bg-zinc-950 px-3 text-[11px] font-medium tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
          Or continue with
        </span>
      </div>

      {/* Error Alert Banner */}
      <AnimatePresence mode="wait">
        {generalError && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            className="mb-4 flex items-start gap-2.5 rounded-lg border border-red-200/80 bg-red-50/70 p-3 text-xs text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{generalError}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Email Field */}
        <div>
          <label
            htmlFor="login-email"
            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            <input
              id="login-email"
              type="email"
              name="email"
              autoComplete="email"
              disabled={isLoading || isSuccess}
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              placeholder="name@example.com"
              aria-invalid={!!emailError}
              aria-describedby={emailError ? 'email-error-msg' : undefined}
              className={cn(
                'w-full h-10 pl-9 pr-3 rounded-lg text-sm',
                'bg-zinc-50/50 dark:bg-zinc-900/50',
                'border border-zinc-200 dark:border-zinc-800',
                'text-zinc-900 dark:text-zinc-100',
                'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
                'transition-all duration-150',
                'focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600',
                'focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10',
                emailError && 'border-red-400 dark:border-red-600 focus:ring-red-400/20'
              )}
            />
          </div>
          {emailError && (
            <p id="email-error-msg" className="mt-1 text-[11px] text-red-500 dark:text-red-400">
              {emailError}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="login-password"
              className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
            {onForgotPassword && (
              <button
                type="button"
                onClick={onForgotPassword}
                tabIndex={0}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors focus:outline-none focus:underline"
              >
                Forgot password?
              </button>
            )}
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              disabled={isLoading || isSuccess}
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => validatePassword(password)}
              placeholder="••••••••"
              aria-invalid={!!passwordError}
              aria-describedby={passwordError ? 'password-error-msg' : undefined}
              className={cn(
                'w-full h-10 pl-9 pr-10 rounded-lg text-sm',
                'bg-zinc-50/50 dark:bg-zinc-900/50',
                'border border-zinc-200 dark:border-zinc-800',
                'text-zinc-900 dark:text-zinc-100',
                'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
                'transition-all duration-150',
                'focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600',
                'focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10',
                passwordError && 'border-red-400 dark:border-red-600 focus:ring-red-400/20'
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {passwordError && (
            <p id="password-error-msg" className="mt-1 text-[11px] text-red-500 dark:text-red-400">
              {passwordError}
            </p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="sr-only"
            />
            <div
              className={cn(
                'w-4 h-4 rounded border transition-all flex items-center justify-center',
                rememberMe
                  ? 'bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100 text-white dark:text-zinc-900'
                  : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900'
              )}
            >
              {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <span className="text-xs text-zinc-600 dark:text-zinc-400">Remember me</span>
          </label>
        </div>

        {/* Primary Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading || isSuccess}
          whileHover={!isLoading && !isSuccess ? { scale: 1.008 } : undefined}
          whileTap={!isLoading && !isSuccess ? { scale: 0.985 } : undefined}
          className={cn(
            'w-full h-10 mt-1 rounded-lg text-sm font-medium',
            'bg-zinc-900 hover:bg-zinc-800 text-white',
            'dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900',
            'shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] dark:shadow-none',
            'flex items-center justify-center gap-2',
            'transition-all duration-150',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100',
            'disabled:opacity-60 disabled:cursor-not-allowed'
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Signing in...</span>
            </>
          ) : isSuccess ? (
            <>
              <Check className="w-4 h-4" />
              <span>Signed in</span>
            </>
          ) : (
            <>
              <span>Sign in</span>
              <ArrowRight className="w-4 h-4 ml-0.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Footer link to Sign Up */}
      <div className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={onSignUp}
          className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline transition-colors focus:outline-none"
        >
          Sign up
        </button>
      </div>
    </motion.div>
  );
}
