'use client';

import React from 'react';
import { CERTIFICATIONS } from '@/lib/data';

export function Certifications() {
  return (
    <section id="certifications" className="bg-white border-y border-black/10 section-padding">
      <div className="container-max grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 items-start">
        {/* Left Sticky Heading */}
        <div className="lg:sticky lg:top-28">
          <span className="font-mono-tag block mb-2">04 — Certifications</span>
          <h2 className="section-title mb-4">
            Always <span className="font-serif-italic text-[#77756f]">learning.</span>
          </h2>
          <p className="text-sm text-[#77756f] font-mono">
            {CERTIFICATIONS.length} Global Certifications &amp; Professional Specializations
          </p>
        </div>

        {/* Right Numbered List with Ink-Flood Rows */}
        <div className="space-y-2">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.index}
              href={cert.verifyUrl || '#'}
              target={cert.verifyUrl ? '_blank' : '_self'}
              rel={cert.verifyUrl ? 'noopener noreferrer' : ''}
              className="group relative block w-full p-6 rounded-2xl border border-black/5 bg-[#f4f2ee]/40 overflow-hidden transition-colors duration-300"
            >
              {/* Ink-Flood Background Overlay (scaleX 0 -> 1 on hover) */}
              <div
                className="absolute inset-0 bg-[#0d0d0d] transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                aria-hidden="true"
              />

              {/* Row Content */}
              <div className="relative z-10 flex items-center justify-between gap-4 transition-colors duration-300 group-hover:text-[#f4f2ee]">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-sm text-[#77756f] group-hover:text-white/60 transition-colors">
                    {cert.index}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0d0d0d] group-hover:text-white tracking-tight transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#77756f] group-hover:text-white/70 font-mono transition-colors mt-0.5">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                {/* Sliding ↗ Arrow */}
                <div className="flex items-center gap-2">
                  {cert.verifyUrl && (
                    <span className="font-mono text-xs uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">
                      Verify
                    </span>
                  )}
                  <span className="text-lg font-bold transform translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-white">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
