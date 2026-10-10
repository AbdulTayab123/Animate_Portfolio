'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import { TechLogo } from '@/components/ui/TechLogo';

// ⭐ Browser window mockup — topic-specific UI per project
function ProjectMockup({
  projectId,
  index,
  title,
}: {
  projectId: string;
  index: string;
  title: string;
}) {
  const url =
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 26) + '.app';

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* ─── Browser chrome ─── */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f1ea] border-b border-black/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white rounded-md px-2 py-0.5 text-[8px] font-mono text-[#77756f] truncate flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-2 h-2 shrink-0"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]/20" />
      </div>

      {/* ─── Content area ─── */}
      <div className="flex-1 p-3 overflow-hidden">
        {/* ═══ 01 — PolicyGuard AI: Legal & Privacy Analysis ═══ */}
        {projectId.includes('policyguard') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#1f2750] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-2.5 h-2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  Policy Analysis
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#16a34a] animate-pulse" />
                SCANNING
              </div>
            </div>

            {/* Contract file */}
            <div className="bg-[#f5f1ea] rounded-md p-2 flex items-center gap-2">
              <div className="w-6 h-7 rounded bg-white border border-black/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" className="w-3 h-3">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[7px] font-mono text-[#0d0d0d] font-bold">privacy_policy.pdf</div>
                <div className="text-[6px] font-mono text-[#77756f]">42 pages • 8.2 MB</div>
              </div>
              <div className="text-[7px] font-mono text-[#77756f]">100%</div>
            </div>

            {/* Risk score row */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-[#1f2750] rounded-md p-1.5 text-white">
                <div className="text-[6px] font-mono uppercase opacity-70">Risk</div>
                <div className="text-[14px] font-bold leading-none mt-0.5">72</div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Safe</div>
                <div className="text-[14px] font-bold leading-none mt-0.5 text-[#16a34a]">94%</div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Flags</div>
                <div className="text-[14px] font-bold leading-none mt-0.5 text-[#dc2626]">03</div>
              </div>
            </div>

            {/* Flagged clauses */}
            <div className="flex-1 bg-[#f5f1ea] rounded-md p-2 flex flex-col gap-1">
              <div className="text-[6px] font-mono uppercase text-[#77756f] font-bold">
                Flagged Clauses
              </div>
              {[
                { label: 'Data sharing with 3rd parties', level: 'HIGH', color: '#dc2626' },
                { label: 'Retention period unclear', level: 'MED', color: '#ea580c' },
                { label: 'Auto-renewal terms', level: 'MED', color: '#ea580c' },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white rounded px-1.5 py-1">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: x.color }} />
                  <div className="flex-1 text-[6px] font-mono text-[#0d0d0d] truncate">
                    {x.label}
                  </div>
                  <div
                    className="text-[5px] font-mono font-bold px-1 py-0.5 rounded"
                    style={{ backgroundColor: `${x.color}20`, color: x.color }}
                  >
                    {x.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : /* ═══ 02 — Car Rental: Booking Dashboard ═══ */
        projectId.includes('car') || projectId.includes('rental') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#1f2750] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <path d="M5 17h14M5 17v-5l2-4h10l2 4v5M5 17v2M19 17v2" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  Live Booking
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded">
                ● TRACKING
              </div>
            </div>

            {/* Driver card */}
            <div className="bg-[#f5f1ea] rounded-md p-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1f2750] flex items-center justify-center text-[9px] text-white font-mono font-bold">
                AK
              </div>
              <div className="flex-1">
                <div className="text-[8px] font-bold text-[#0d0d0d]">Ahmed Khan</div>
                <div className="text-[6px] font-mono text-[#77756f]">Toyota Corolla • KHI-2841</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[7px] font-mono font-bold text-[#0d0d0d]">4.9 ★</div>
                <div className="text-[6px] font-mono text-[#77756f]">1,248 trips</div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Fare</div>
                <div className="text-[12px] font-bold text-[#0d0d0d] leading-none mt-0.5">
                  $42
                </div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">ETA</div>
                <div className="text-[12px] font-bold text-[#0d0d0d] leading-none mt-0.5">
                  6 min
                </div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Dist</div>
                <div className="text-[12px] font-bold text-[#0d0d0d] leading-none mt-0.5">
                  2.4 km
                </div>
              </div>
            </div>

            {/* Map with route */}
            <div className="flex-1 bg-[#f5f1ea] rounded-md p-2 relative overflow-hidden">
              <div className="text-[6px] font-mono uppercase text-[#77756f] font-bold mb-1">
                Live Route
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-[calc(100%-14px)]" preserveAspectRatio="none">
                {/* Grid lines */}
                {[15, 30, 45].map((y) => (
                  <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#0d0d0d" strokeOpacity="0.05" strokeWidth="0.5" />
                ))}
                {[40, 80, 120, 160].map((x) => (
                  <line key={x} x1={x} y1="0" x2={x} y2="60" stroke="#0d0d0d" strokeOpacity="0.05" strokeWidth="0.5" />
                ))}
                {/* Route path */}
                <path d="M15 50 L60 45 L80 25 L130 30 L175 12" stroke="#1f2750" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                {/* Start point */}
                <circle cx="15" cy="50" r="3" fill="#0d0d0d" />
                <circle cx="15" cy="50" r="6" fill="#0d0d0d" fillOpacity="0.15" />
                {/* End point */}
                <circle cx="175" cy="12" r="3" fill="#1f2750" />
                <circle cx="175" cy="12" r="6" fill="#1f2750" fillOpacity="0.15" />
                {/* Driver mid-point */}
                <circle cx="95" cy="27" r="4" fill="#16a34a" />
                <circle cx="95" cy="27" r="7" fill="#16a34a" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        ) : /* ═══ 03 — Chest X-Ray Detection ═══ */
        projectId.includes('xray') ||
          projectId.includes('x-ray') ||
          projectId.includes('chest') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#0d0d0d] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  X-Ray Analysis
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#1f2750] bg-[#1f2750]/10 px-1.5 py-0.5 rounded">
                Grad-CAM
              </div>
            </div>

            <div className="flex-1 flex gap-2">
              {/* X-ray scan */}
              <div className="flex-1 relative bg-[#0d0d0d] rounded-md overflow-hidden">
                {/* Lung outline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[60%] h-[85%] rounded-[40%] bg-white/5 border border-white/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-white/20" />
                </div>

                {/* A - Nodule (red, high confidence) */}
                <div className="absolute top-[28%] left-[24%]">
                  <div className="w-7 h-7 rounded-full bg-red-500/40 blur-md" />
                  <div className="absolute inset-0 w-7 h-7 rounded-full ring-1 ring-red-500 flex items-center justify-center">
                    <span className="text-[7px] text-white font-bold">A</span>
                  </div>
                </div>

                {/* B - Effusion (orange, medium) */}
                <div className="absolute bottom-[22%] right-[26%]">
                  <div className="w-8 h-8 rounded-full bg-orange-500/35 blur-md" />
                  <div className="absolute inset-0 w-8 h-8 rounded-full ring-1 ring-orange-500 flex items-center justify-center">
                    <span className="text-[7px] text-white font-bold">B</span>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#28c840]/60 shadow-[0_0_8px_#28c840]" />

                {/* Overlay label */}
                <div className="absolute bottom-1.5 left-1.5 text-[6px] font-mono text-white/60">
                  PA view • 2048×2048
                </div>
              </div>

              {/* Findings */}
              <div className="w-[68px] flex flex-col gap-1">
                <div className="text-[6px] font-mono uppercase text-[#77756f] font-bold">
                  Findings
                </div>
                {[
                  { l: 'Nodule', c: 94, col: '#dc2626', pos: 'A' },
                  { l: 'Effusion', c: 71, col: '#ea580c', pos: 'B' },
                  { l: 'Normal', c: 8, col: '#16a34a', pos: '—' },
                ].map((x, i) => (
                  <div key={i} className="bg-[#f5f1ea] rounded p-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] font-mono uppercase text-[#77756f]">
                        {x.l}
                      </span>
                      {x.pos !== '—' && (
                        <span className="text-[5px] font-mono text-[#0d0d0d] bg-white px-1 rounded">
                          {x.pos}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-bold leading-none mt-1" style={{ color: x.col }}>
                      {x.c}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : /* ═══ 04 — AI Job Application Platform ═══ */
        projectId.includes('job') ||
          projectId.includes('apply') ||
          projectId.includes('career') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#1f2750] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  AI Job Matches
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#1f2750] bg-[#1f2750]/10 px-1.5 py-0.5 rounded">
                12 new today
              </div>
            </div>

            {/* Resume parsed */}
            <div className="bg-[#f5f1ea] rounded-md p-2 flex items-center gap-2">
              <div className="w-6 h-7 rounded bg-white border border-black/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1f2750" strokeWidth="2" className="w-3 h-3">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[7px] font-mono text-[#0d0d0d] font-bold">
                  resume_abdul.pdf
                </div>
                <div className="text-[6px] font-mono text-[#77756f]">
                  Parsed • 18 skills extracted
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] font-bold">✓</div>
            </div>

            {/* Job matches */}
            <div className="flex-1 flex flex-col gap-1">
              {[
                { co: 'S', role: 'Senior Full Stack @ Systems Ltd', pct: 92 },
                { co: 'N', role: 'AI Engineer @ Netsol', pct: 87 },
                { co: 'T', role: 'ML Engineer @ Techlogix', pct: 74 },
                { co: 'C', role: 'MERN Developer @ Contour', pct: 68 },
              ].map((job, i) => (
                <div key={i} className="bg-[#f5f1ea] rounded-md p-1.5 flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-white border border-black/5 flex items-center justify-center text-[8px] font-bold text-[#1f2750]">
                    {job.co}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[6.5px] font-mono text-[#0d0d0d] truncate font-bold">
                      {job.role}
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="flex-1 h-[3px] bg-[#0d0d0d]/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${job.pct}%`,
                            backgroundColor: job.pct > 85 ? '#16a34a' : job.pct > 70 ? '#ea580c' : '#77756f',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[7px] font-mono font-bold text-[#1f2750] w-7 text-right">
                    {job.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : /* ═══ 05 — AI Cyber Threat Detection ═══ */
        projectId.includes('cyber') || projectId.includes('threat') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#0d0d0d] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  Threat Monitor
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#dc2626] bg-[#dc2626]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#dc2626] animate-pulse" />
                3 ANOMALIES
              </div>
            </div>

            {/* Network traffic heatmap */}
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="text-[6px] font-mono uppercase text-[#77756f] font-bold">
                Network Traffic · Last 60s
              </div>
              <div className="grid grid-cols-10 gap-0.5">
                {Array.from({ length: 50 }).map((_, i) => {
                  const v = (Math.sin(i * 0.7) + 1) / 2;
                  const isAlert = v > 0.85;
                  const isMed = v > 0.6 && !isAlert;
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        backgroundColor: isAlert
                          ? '#dc2626'
                          : isMed
                          ? '#ea580c'
                          : `rgba(31, 39, 80, ${0.15 + v * 0.6})`,
                      }}
                    />
                  );
                })}
              </div>

              {/* Threat log */}
              <div className="bg-[#f5f1ea] rounded-md p-2 flex flex-col gap-1 mt-auto">
                <div className="text-[6px] font-mono uppercase text-[#77756f] font-bold">
                  Live Threat Log
                </div>
                {[
                  { t: 'SQL Injection attempt', ip: '192.168.4.21', sev: 'HIGH' },
                  { t: 'Unusual port scan', ip: '10.0.14.88', sev: 'MED' },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white rounded px-1.5 py-1">
                    <div
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: x.sev === 'HIGH' ? '#dc2626' : '#ea580c' }}
                    />
                    <span className="text-[6px] font-mono text-[#0d0d0d] flex-1 truncate">
                      {x.t}
                    </span>
                    <span className="text-[5px] font-mono text-[#77756f]">{x.ip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : /* ═══ 06 — AI Navigation for Visually Impaired ═══ */
        projectId.includes('navigation') ||
          projectId.includes('vision') ||
          projectId.includes('impaired') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#0d0d0d] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  AI Navigation
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#16a34a] animate-pulse" />
                ACTIVE
              </div>
            </div>

            {/* Vision view */}
            <div className="flex-1 bg-[#0d0d0d] rounded-md relative overflow-hidden">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(#1f2750 1px, transparent 1px), linear-gradient(90deg, #1f2750 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                }}
              />

              {/* Detection zones */}
              <div className="absolute top-[35%] left-[15%] w-8 h-8 rounded border border-[#febc2e] flex items-center justify-center">
                <span className="text-[6px] text-[#febc2e] font-bold">Person</span>
              </div>
              <div className="absolute top-[55%] right-[20%] w-10 h-6 rounded border border-[#ea580c] flex items-center justify-center">
                <span className="text-[6px] text-[#ea580c] font-bold">Chair</span>
              </div>
              <div className="absolute bottom-[15%] left-[40%] w-6 h-4 rounded border border-[#16a34a] flex items-center justify-center">
                <span className="text-[6px] text-[#16a34a] font-bold">Clear</span>
              </div>

              {/* Center safe path */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-[#28c840]/10" />
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#28c840]/60" />

              {/* Distance indicator */}
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[6px] font-mono text-white/70">
                <span>📷 Depth Active</span>
                <span className="text-[#28c840]">Path clear ahead</span>
              </div>
            </div>

            {/* Voice guidance */}
            <div className="bg-[#f5f1ea] rounded-md p-2 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#1f2750] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[7px] font-mono text-[#0d0d0d] font-bold">
                  "Move forward 3 meters"
                </div>
                <div className="text-[6px] font-mono text-[#77756f]">
                  Obstacle ahead in 5m
                </div>
              </div>
            </div>
          </div>
        ) : /* ═══ 07 — Blockchain Forensics ═══ */
        projectId.includes('blockchain') ||
          projectId.includes('chain') ||
          projectId.includes('forensics') ? (
          <div className="h-full flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#1f2750] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#0d0d0d] font-bold">
                  Blockchain Forensics
                </div>
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded">
                ● VERIFIED
              </div>
            </div>

            {/* Chain */}
            <div className="flex-1 flex items-center justify-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-md bg-[#1f2750] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-white/30" />
                    </div>
                    <div className="text-[5px] font-mono text-[#77756f]">#{1248 + i}</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                  </div>
                  {i < 3 && (
                    <div className="flex flex-col items-center pb-6">
                      <div className="w-3 h-[1px] bg-[#1f2750]/40" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">TX</div>
                <div className="text-[11px] font-bold text-[#0d0d0d] leading-none mt-0.5">
                  1,248
                </div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Anomalies</div>
                <div className="text-[11px] font-bold text-[#16a34a] leading-none mt-0.5">
                  0
                </div>
              </div>
              <div className="bg-[#f5f1ea] rounded-md p-1.5">
                <div className="text-[6px] font-mono uppercase text-[#77756f]">Risk</div>
                <div className="text-[11px] font-bold text-[#0d0d0d] leading-none mt-0.5">
                  Low
                </div>
              </div>
            </div>

            {/* Contract scan */}
            <div className="bg-[#f5f1ea] rounded-md p-2 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#0d0d0d] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2.5 h-2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[7px] font-mono text-[#0d0d0d] font-bold">
                  0x7a2f...b819
                </div>
                <div className="text-[6px] font-mono text-[#77756f]">
                  Smart contract verified
                </div>
              </div>
              <div className="text-[6px] font-mono font-bold text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded">
                SAFE
              </div>
            </div>
          </div>
        ) : (
          /* ═══ Default fallback ═══ */
          <div className="h-full flex flex-col gap-2">
            <div className="text-[7px] font-mono uppercase text-[#77756f]">Interface Preview</div>
            <div className="flex-1 bg-[#f5f1ea] rounded-md p-2 flex flex-col gap-1.5">
              <div className="h-1.5 w-3/4 bg-[#0d0d0d] rounded" />
              <div className="h-1 w-1/2 bg-[#77756f]/30 rounded" />
              <div className="grid grid-cols-3 gap-1 mt-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-8 bg-white rounded border border-black/5" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Status bar ─── */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#f5f1ea] border-t border-black/5">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
          <span className="text-[7px] font-mono text-[#77756f] uppercase tracking-wider">
            Connected
          </span>
        </div>
        <span className="text-[7px] font-mono text-[#77756f] uppercase">
          Built with C++ · Java · Python
        </span>
      </div>
    </div>
  );
}

export function Work() {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="section-padding container-max relative">
      {/* Section Header */}
      <div className="mb-10">
        <span className="font-mono-tag block mb-2">03 — Selected work</span>
        <h2 className="section-title">
          Things I&apos;ve <span className="font-serif-italic text-[#77756f]">built.</span>
        </h2>
      </div>

      {/* Desktop Horizontal Accordion */}
      <div className="hidden lg:flex items-stretch gap-3 h-[min(72svh,560px)]">
        {PROJECTS.map((project) => {
          const isOpen = activeProject === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onFocus={() => setActiveProject(project.id)}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-label={`Project ${project.index}: ${project.title}`}
              className={`relative overflow-hidden rounded-[26px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen
                  ? 'flex-[8] bg-[#faf7f0] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]'
                  : 'flex-[1] bg-[#faf7f0]/70 cursor-pointer hover:bg-[#faf7f0] border border-black/5'
              }`}
            >
              {isOpen ? (
                <div className="w-full h-full p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 items-center">
                  {/* LEFT: content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] text-[#77756f] px-2 py-0.5 bg-white rounded-full border border-black/5">
                        {project.index} / 06
                      </span>
                      <span className="font-mono text-[10px] text-[#77756f] uppercase tracking-wider">
                        {project.kicker}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0d0d0d] leading-[1.15]">
                      {project.title}
                    </h3>

                    <p className="text-[13px] text-[#3a3a3a] leading-snug line-clamp-2">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-2 border-t border-black/10">
                      {project.features.slice(0, 4).map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] font-mono text-[#3a3a3a] leading-tight"
                        >
                          <span className="text-[#0d0d0d] font-bold mt-[1px]">•</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.slice(0, 8).map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-white rounded-md font-mono text-[10px] text-[#0d0d0d] border border-black/5"
                        >
                          <TechLogo name={t} size={10} />
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 8 && (
                        <span className="inline-flex items-center px-2 py-0.5 bg-white rounded-md font-mono text-[10px] text-[#77756f] border border-black/5">
                          +{project.tech.length - 8}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2.5 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-primary text-[11px] h-9 px-3.5"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-secondary text-[11px] h-9 px-3.5"
                        >
                          Read Paper ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT: Browser window mockup */}
                  <div className="relative w-full h-[280px] rounded-2xl border border-black/10 overflow-hidden shadow-lg bg-white">
                    <ProjectMockup
                      projectId={project.id}
                      index={project.index}
                      title={project.title}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full py-5 flex flex-col justify-between items-center select-none">
                  <span className="font-mono text-xs font-bold text-[#0d0d0d]">
                    {project.index}
                  </span>

                  <div className="[writing-mode:vertical-rl] font-semibold text-[13px] text-[#0d0d0d] tracking-tight whitespace-nowrap overflow-hidden max-h-[300px]">
                    {project.title}
                  </div>

                  <div className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center text-xs font-bold text-[#0d0d0d] transition-transform duration-500">
                    +
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Accordion */}
      <div className="lg:hidden space-y-4">
        {PROJECTS.map((project) => {
          const isOpen = activeProject === project.id;

          return (
            <div
              key={project.id}
              className="card-base overflow-hidden p-5 border border-black/10 bg-[#faf7f0]"
            >
              <button
                onClick={() => setActiveProject(isOpen ? '' : project.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#77756f]">{project.index}</span>
                  <h3 className="text-base font-bold text-[#0d0d0d]">{project.title}</h3>
                </div>
                <span className="font-mono text-lg font-bold">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div className="mt-4 pt-4 border-t border-black/10 space-y-3">
                  <div className="relative w-full h-[280px] rounded-xl border border-black/10 overflow-hidden bg-white">
                    <ProjectMockup
                      projectId={project.id}
                      index={project.index}
                      title={project.title}
                    />
                  </div>

                  <p className="text-[13px] text-[#3a3a3a] line-clamp-3">
                    {project.description}
                  </p>
                  <div className="space-y-1">
                    {project.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="text-[11px] font-mono text-[#3a3a3a]">
                        • {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 8).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white rounded font-mono text-[10px] border border-black/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-primary text-xs h-9 px-4 inline-flex"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}