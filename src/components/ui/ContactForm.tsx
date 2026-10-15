'use client';

import React, { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  // ⭐ Instant submit — no waiting
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save payload before clearing
    const payload = { ...form };

    // 1️⃣ IMMEDIATELY clear form + show success
    setForm({ name: '', email: '', message: '' });
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);

    // 2️⃣ Send in background (no await, no blocking)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error('Background send failed:', err);
    });
  };

  const buttonLabel = status === 'success' ? 'Sent' : 'Send message';

  return (
    <form
      onSubmit={handleSubmit}
      className="group/form relative mt-12 p-6 lg:p-10 rounded-[32px] bg-white border border-[#0d0d0d]/[0.08] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)] max-w-2xl overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-[#1f2750]/[0.05] to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-tr from-[#dc2626]/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative mb-8">
        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0d0d0d] mb-2">
          Ask anything<span className="text-[#dc2626]">.</span>
        </h3>
        <div className="h-[2px] w-12 bg-gradient-to-r from-[#0d0d0d] to-transparent rounded-full" />
      </div>

      {/* Fields */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <FloatingInput
          id="name"
          label="Your name"
          value={form.name}
          focused={focused === 'name'}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          onChange={(v) => setForm({ ...form, name: v })}
          type="text"
        />
        <FloatingInput
          id="email"
          label="Your email"
          value={form.email}
          focused={focused === 'email'}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          onChange={(v) => setForm({ ...form, email: v })}
          type="email"
        />
      </div>

      <div className="relative mb-6">
        <FloatingInput
          id="message"
          label="Your message"
          value={form.message}
          focused={focused === 'message'}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          onChange={(v) => setForm({ ...form, message: v })}
          type="textarea"
        />
      </div>

      {/* Animated Send Button */}
      <div className="relative flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'success'}
          className={`group/btn relative inline-flex items-center gap-3 h-14 pl-7 pr-2 rounded-full font-semibold text-sm overflow-hidden transition-all duration-500 ${
            status === 'success'
              ? 'bg-[#16a34a] text-white'
              : 'bg-[#0d0d0d] text-[#f5f1ea] hover:shadow-[0_12px_32px_-8px_rgba(13,13,13,0.5)] hover:-translate-y-0.5'
          }`}
        >
          {/* Shimmer */}
          {status === 'idle' && (
            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none" />
          )}

          <span className="relative z-10 tracking-tight transition-all duration-300">
            {buttonLabel}
          </span>

          <span
            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              status === 'success'
                ? 'bg-white/20'
                : 'bg-[#f5f1ea] text-[#0d0d0d] group-hover/btn:rotate-45 group-hover/btn:scale-110'
            }`}
          >
            {status === 'success' && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {status === 'idle' && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </span>
        </button>

        {/* Success pill */}
        {status === 'success' && (
          <span className="text-sm text-[#16a34a] font-medium inline-flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
            </span>
            Message sent
          </span>
        )}
      </div>
    </form>
  );
}

/* ══════════════════════════════════════════
   Floating Label Input
   ══════════════════════════════════════════ */
function FloatingInput({
  id,
  label,
  value,
  focused,
  onFocus,
  onBlur,
  onChange,
  type = 'text',
}: {
  id: string;
  label: string;
  value: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
  type?: string;
}) {
  const active = focused || value.length > 0;

  const inputClass = `w-full bg-transparent text-[15px] text-[#0d0d0d] focus:outline-none placeholder:text-transparent ${
    type === 'textarea'
      ? 'pt-6 pb-3 px-4 min-h-[130px] resize-none'
      : 'pt-6 pb-2.5 px-4 h-16'
  }`;

  return (
    <div className="relative">
      <div
        className={`relative rounded-2xl border transition-all duration-300 ${
          focused
            ? 'border-[#0d0d0d] shadow-[0_4px_20px_-8px_rgba(13,13,13,0.25)]'
            : 'border-[#0d0d0d]/15 hover:border-[#0d0d0d]/30'
        } bg-white`}
      >
        <label
          htmlFor={id}
          className={`absolute left-4 pointer-events-none font-mono uppercase tracking-[0.14em] transition-all duration-300 ${
            active
              ? 'top-2.5 text-[10px] text-[#0d0d0d]'
              : 'top-1/2 -translate-y-1/2 text-[11px] text-[#a3a19a]'
          }`}
        >
          {label}
        </label>

        {type === 'textarea' ? (
          <textarea
            id={id}
            required
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          />
        ) : (
          <input
            id={id}
            type={type}
            required
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          />
        )}
      </div>
    </div>
  );
}