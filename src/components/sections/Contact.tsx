'use client';

import React, { useState } from 'react';
import { PROFILE } from '@/lib/data';
import { scrollToTarget } from '@/lib/scroll';
import { ContactForm } from '@/components/ui/ContactForm';

function BouncingText({ text }: { text: string }) {
  const letters = text.split('');

  return (
    <span className="inline-block">
      {letters.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:italic cursor-default"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      label: 'GitHub',
      href: PROFILE.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: PROFILE.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      label: 'Blog',
      href: 'https://abdultayab696.blogspot.com/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding container-max relative flex flex-col justify-between min-h-[90vh]"
    >
      <div>
        {/* Section Tag */}
        <span className="font-mono-tag block mb-4">07 — Contact</span>

        {/* Heading */}
        <h2 className="section-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-[0.95] mb-12">
          <BouncingText text="Let's build" /> <br />
          <span className="font-serif-italic text-[#77756f] font-normal">
            <BouncingText text="something together." />
          </span>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center mb-16">
          {/* LEFT — email + channels */}
          <div className="space-y-8">
            {/* Email */}
            <div className="inline-flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0d0d] underline underline-offset-8 decoration-black/20 hover:decoration-black transition-colors"
              >
                {PROFILE.email}
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="px-3.5 py-1.5 rounded-full bg-[#0d0d0d] text-[#f4f2ee] font-mono text-xs font-semibold hover:scale-105 transition-transform"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>

              <span aria-live="polite" className="sr-only">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>

            {/* Channel chips */}
            <div className="flex flex-wrap items-center gap-3">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 h-11 pl-4 pr-5 rounded-full bg-white border border-[#0d0d0d]/10 text-[#0d0d0d] text-sm font-medium shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:bg-[#0d0d0d] hover:text-[#f5f1ea] hover:border-[#0d0d0d] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="shrink-0">{ch.icon}</span>
                  <span className="tracking-tight">{ch.label}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Phone */}
            <a
              href={PROFILE.phoneHref}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#77756f] hover:text-[#0d0d0d] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PROFILE.phone}
            </a>
          </div>

          {/* RIGHT — spinning badge */}
          <div className="relative w-40 h-40 flex items-center justify-center select-none">
            <div
              className="absolute inset-0"
              style={{ animation: 'spin 20s linear infinite' }}
            >
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                </defs>
                <text className="font-mono text-[9px] tracking-[0.3em] uppercase fill-[#0d0d0d]">
                  <textPath href="#circlePath">
                    SAY HELLO • GET IN TOUCH • LET&apos;S TALK •
                  </textPath>
                </text>
              </svg>
            </div>

            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send email"
              className="relative w-14 h-14 rounded-full bg-[#0d0d0d] text-[#f5f1ea] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        {/* ⭐ Contact Form */}
        <div className="mt-20">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-16 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77756f]">
        <div>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Built with Next.js 15 &amp; React 19</span>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#hero');
            }}
            className="text-[#0d0d0d] font-semibold hover:underline"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}