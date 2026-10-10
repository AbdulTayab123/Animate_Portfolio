'use client';

import React, { useRef, useEffect, useState } from 'react';
import { TIMELINE } from '@/lib/data';
import { TechLogo } from '@/components/ui/TechLogo';

// Helper: period string se year nikaalo (e.g. "2020 — 2022" → "2022", "Sep 2025 — Present" → "2025")
function extractYear(period: string): string {
  const matches = period.match(/\d{4}/g);
  if (!matches) return '';
  // Last year mention (usually the end year)
  return matches[matches.length - 1];
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // IntersectionObserver — items fade in as they scroll into view
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-timeline-item]');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-timeline-item'));
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding container-max relative">
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono-tag block mb-2">05 — Career &amp; Education</span>
        <h2 className="section-title">
          Education &amp;{' '}
          <span className="font-serif-italic text-[#77756f]">experience.</span>
        </h2>
      </div>

      {/* Timeline container */}
      <div ref={containerRef} className="relative max-w-[1080px] mx-auto">
        {/* ═══ MOBILE — line on left ═══ */}
        <div className="md:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#0d0d0d]/15" />

          <div className="space-y-14">
            {TIMELINE.map((item, index) => {
              const year = extractYear(item.period);
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={item.id}
                  data-timeline-item={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute -left-[42px] top-3 w-3 h-3 rounded-full bg-[#0d0d0d] ring-[3px] ring-[#f5f1ea]" />

                  {/* Big year */}
                  <span className="block text-[3.25rem] font-bold tracking-tighter text-[#0d0d0d] leading-none">
                    {year}
                  </span>

                  {/* Card */}
                  <div className="mt-5">
                    <TimelineCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══ DESKTOP — center line, alternating ═══ */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-[#0d0d0d]/15 -translate-x-1/2" />

          <div className="space-y-24">
            {TIMELINE.map((item, index) => {
              const year = extractYear(item.period);
              const cardOnLeft = index % 2 === 0; // alternate
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={item.id}
                  data-timeline-item={index}
                  className={`relative grid grid-cols-2 gap-x-24 items-start transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* LEFT column */}
                  <div>
                    {cardOnLeft ? (
                      <TimelineCard item={item} />
                    ) : (
                      <div className="pt-6 text-right pr-6">
                        <span className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-tighter text-[#0d0d0d] leading-none">
                          {year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* RIGHT column */}
                  <div>
                    {cardOnLeft ? (
                      <div className="pt-6 text-left pl-6">
                        <span className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-tighter text-[#0d0d0d] leading-none">
                          {year}
                        </span>
                      </div>
                    ) : (
                      <TimelineCard item={item} />
                    )}
                  </div>

                  {/* Center dot — aligned with the top of the row */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-[#0d0d0d] ring-[3px] ring-[#f5f1ea]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════
// Card component — uses TIMELINE item fields
// ═══════════════════════════════════════════════════
function TimelineCard({ item }: { item: typeof TIMELINE[number] }) {
  return (
    <div className="relative bg-white/85 backdrop-blur-sm rounded-2xl border border-[#0d0d0d]/[0.06] p-6 shadow-[0_4px_28px_-12px_rgba(0,0,0,0.08)]">
      {/* Date range top-right */}
      <span className="absolute top-5 right-6 text-[10px] font-mono text-[#a3a19a] tracking-wider">
        {item.period}
      </span>

      {/* Type pill */}
      <span className="inline-block text-[9px] font-mono uppercase tracking-[0.2em] text-[#77756f] bg-[#f5f1ea] px-2.5 py-1 rounded-md mb-3">
        {item.type}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#0d0d0d] leading-tight pr-24">
        {item.title}
      </h3>

      {/* Organization */}
      <p className="text-[13px] text-[#77756f] mt-1">
        {item.organization}
        {item.location && <span className="text-[#a3a19a]"> • {item.location}</span>}
      </p>

      {/* Details */}
      {item.details && item.details.length > 0 && (
        <ul className="mt-4 space-y-2">
          {item.details.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[12px] text-[#3a3a3a] leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/5">
          {item.technologies.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#f5f1ea] rounded font-mono text-[10px] text-[#0d0d0d] border border-black/[0.04]"
            >
              <TechLogo name={tech} size={10} />
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}