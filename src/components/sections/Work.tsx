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
        {/* ═══ 01 — Object Detection ═══ */}
        {projectId.includes('object-detection') ? (
          <div className="h-full relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-md overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              }}
            />
            <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[7px] font-mono text-white/70">
              <span>📹 WEBCAM · 30 FPS</span>
              <span className="text-[#28c840]">● REC</span>
            </div>
            {/* Person box */}
            <div className="absolute top-[30%] left-[18%] w-[26%] h-[50%] border-2 border-[#28c840] rounded">
              <div className="absolute -top-4 -left-[2px] bg-[#28c840] text-black text-[6px] font-mono font-bold px-1 py-0.5 rounded-t">
                Person · 96%
              </div>
            </div>
            {/* Car box */}
            <div className="absolute bottom-[18%] right-[12%] w-[30%] h-[22%] border-2 border-[#febc2e] rounded">
              <div className="absolute -top-4 -left-[2px] bg-[#febc2e] text-black text-[6px] font-mono font-bold px-1 py-0.5 rounded-t">
                Car · 92%
              </div>
            </div>
            {/* Laptop box */}
            <div className="absolute top-[15%] right-[22%] w-[16%] h-[14%] border border-[#22d3ee] rounded">
              <div className="absolute -top-3 -left-[1px] bg-[#22d3ee] text-black text-[5px] font-mono font-bold px-1 rounded-t">
                Laptop
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 flex items-center justify-between text-[7px] font-mono">
              <span className="text-[#28c840]">✓ 3 objects detected</span>
              <span className="text-white/60">Confidence avg: 91%</span>
            </div>
          </div>
        ) : projectId.includes('linux-ids') ? (
          /* ═══ 02 — Linux IDS ═══ */
          <div className="h-full bg-black rounded-md font-mono text-[7px] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#1a1a1a] border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                <span className="text-[#28c840]">root@linux-ids:~</span>
              </div>
              <span className="text-[#dc2626] animate-pulse">● 3 ALERTS</span>
            </div>
            <div className="flex-1 p-2 space-y-1 leading-relaxed overflow-hidden">
              <div className="text-[#28c840]">[12:04:23] ✓ auth.log loaded · 342 events</div>
              <div className="text-[#febc2e]">[12:04:24] ⚠ Failed login × 12 · IP 10.0.14.88</div>
              <div className="text-[#dc2626]">[12:04:25] 🔴 INTRUSION · Port scan detected</div>
              <div className="text-[#dc2626]">[12:04:26] 🔴 Suspicious · 192.168.4.21:8080</div>
              <div className="text-[#28c840]">[12:04:27] ✓ Firewall rule applied</div>
              <div className="text-[#febc2e]">[12:04:28] ⚠ Anomaly 0.87 (ML model)</div>
              <div className="text-[#28c840]">[12:04:29] ✓ System scan complete</div>
              <div className="text-white/40">[12:04:30] ─ awaiting ─</div>
            </div>
            <div className="px-3 py-1 border-t border-white/5 flex justify-between text-[6px]">
              <span className="text-white/40">Packets: 12.4k/s</span>
              <span className="text-[#28c840]">Scikit-learn · Active</span>
            </div>
          </div>
        ) : projectId.includes('navsight') ? (
          /* ═══ 03 — NavSight AI ═══ */
          <div className="h-full relative bg-black rounded-md overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(31,39,80,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(31,39,80,0.5) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            />
            <div className="absolute top-[22%] left-[14%] w-[24%] h-[30%] border border-[#febc2e] rounded">
              <span className="text-[6px] text-[#febc2e] font-mono bg-black/70 px-1 rounded">
                Chair · 1.8m
              </span>
            </div>
            <div className="absolute top-[50%] right-[16%] w-[22%] h-[28%] border border-[#ea580c] rounded">
              <span className="text-[6px] text-[#ea580c] font-mono bg-black/70 px-1 rounded">
                Table · 2.5m
              </span>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-16 bg-[#28c840]/10" />
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#28c840]/60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#28c840]/20 ring-2 ring-[#28c840]/60 flex items-center justify-center">
              <span className="text-[7px] text-[#28c840] font-bold">SAFE</span>
            </div>
            <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[7px] font-mono">
              <span className="text-white/70">📷 Vision Active</span>
              <span className="text-[#28c840]">● AI ON</span>
            </div>
            <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm border border-[#28c840]/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#28c840]/20 flex items-center justify-center text-[10px]">
                🔊
              </div>
              <div className="flex-1">
                <div className="text-[7px] text-white font-medium">
                  &quot;Move forward — path is clear&quot;
                </div>
                <div className="text-[6px] text-white/50">Gemini AI · 0.4s response</div>
              </div>
            </div>
          </div>
        ) : projectId.includes('civitwin') ? (
          /* ═══ 04 — CiviTwin AI ═══ */
          <div className="h-full relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.3) 25%, transparent 25%)',
                backgroundSize: '20px 20px',
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              viewBox="0 0 300 200"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect x="40" y="60" width="80" height="120" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <rect x="140" y="40" width="100" height="140" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="140" y1="80" x2="240" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <line x1="140" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </svg>
            <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[7px] font-mono">
              <span className="text-white/90">🏗 Site Analysis</span>
              <span className="text-[#28c840] bg-black/40 px-1.5 py-0.5 rounded">● ACTIVE</span>
            </div>
            <div className="absolute top-[38%] right-3 bg-white/90 rounded-md px-2 py-1 shadow-lg">
              <div className="text-[6px] font-mono text-[#77756f] uppercase">BOQ Est.</div>
              <div className="text-[9px] font-bold text-[#0d0d0d]">$1,247,890</div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1.5">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-1.5">
                <div className="text-[6px] font-mono text-white/60 uppercase">Progress</div>
                <div className="text-[11px] font-bold text-[#28c840]">68%</div>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-1.5">
                <div className="text-[6px] font-mono text-white/60 uppercase">Cost</div>
                <div className="text-[11px] font-bold text-white">$1.2M</div>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-1.5">
                <div className="text-[6px] font-mono text-white/60 uppercase">Days</div>
                <div className="text-[11px] font-bold text-[#febc2e]">142</div>
              </div>
            </div>
          </div>
        ) : projectId.includes('paperpilot') ? (
          /* ═══ 05 — PaperPilot AI ═══ */
          <div className="h-full bg-[#faf7f0] rounded-md overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-black/5">
              <div className="text-[7px] font-mono uppercase tracking-widest text-[#77756f]">
                Research Workspace
              </div>
              <div className="text-[7px] font-mono text-[#1f2750] bg-[#1f2750]/10 px-1.5 py-0.5 rounded">
                RAG
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="w-[38%] bg-white border-r border-black/5 p-2 flex flex-col gap-1.5">
                <div className="text-[6px] font-mono uppercase text-[#a3a19a]">Sources</div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-[#f5f1ea] rounded p-1">
                    <div className="w-4 h-5 rounded bg-white border border-black/10 flex items-center justify-center text-[5px] text-red-500 font-bold">
                      PDF
                    </div>
                    <div className="flex-1">
                      <div className="h-1 w-full bg-[#0d0d0d]/60 rounded" />
                      <div className="h-0.5 w-3/4 bg-[#77756f]/30 rounded mt-0.5" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 p-2 flex flex-col gap-1.5">
                <div className="bg-[#1f2750] text-white rounded-lg p-1.5 text-[7px] leading-tight">
                  <div className="text-[6px] opacity-60 mb-0.5">Q:</div>
                  What are the key findings?
                </div>
                <div className="bg-white rounded-lg p-1.5 border border-black/5 text-[7px] leading-tight text-[#3a3a3a]">
                  <div className="text-[6px] text-[#1f2750] font-bold mb-0.5">A:</div>
                  Based on 3 papers reviewed, key findings indicate significant improvements in efficiency. Citation 1, 2, 3.
                </div>
                <div className="flex gap-1 mt-auto">
                  <span className="text-[6px] font-mono bg-[#1f2750]/10 text-[#1f2750] px-1.5 py-0.5 rounded">
                    ✓ 3 sources
                  </span>
                  <span className="text-[6px] font-mono bg-[#16a34a]/10 text-[#16a34a] px-1.5 py-0.5 rounded">
                    ✓ Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : projectId.includes('modelforge') ? (
          /* ═══ 06 — ModelForge AI ═══ */
          <div className="h-full bg-[#faf7f0] rounded-md overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-black/5">
              <div className="text-[7px] font-mono uppercase tracking-widest text-[#77756f]">
                ML Studio
              </div>
              <div className="text-[7px] font-mono text-[#16a34a] bg-[#16a34a]/10 px-1.5 py-0.5 rounded">
                ● TRAINED
              </div>
            </div>
            <div className="flex-1 p-2 grid grid-cols-3 gap-1.5">
              <div className="col-span-2 space-y-1.5">
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { l: 'ACC', v: '94.2%', c: '#16a34a' },
                    { l: 'F1', v: '0.91', c: '#1f2750' },
                    { l: 'RMSE', v: '0.08', c: '#ea580c' },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded p-1.5 border border-black/5">
                      <div className="text-[5px] font-mono text-[#77756f]">{x.l}</div>
                      <div className="text-[10px] font-bold mt-0.5" style={{ color: x.c }}>
                        {x.v}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded p-1.5 border border-black/5">
                  <div className="text-[5px] font-mono text-[#77756f] uppercase mb-1">
                    Training Loss
                  </div>
                  <svg viewBox="0 0 200 40" className="w-full h-10">
                    <polyline
                      points="0,5 20,8 40,12 60,18 80,22 100,26 120,28 140,30 160,32 180,33 200,34"
                      fill="none"
                      stroke="#1f2750"
                      strokeWidth="1.5"
                    />
                    <polyline
                      points="0,10 20,15 40,20 60,24 80,27 100,29 120,30 140,31 160,32 180,32 200,32"
                      fill="none"
                      stroke="#ea580c"
                      strokeWidth="1.5"
                      strokeDasharray="3 2"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded p-1.5 border border-black/5 flex flex-col gap-1">
                <div className="text-[5px] font-mono text-[#77756f] uppercase">
                  Predictions
                </div>
                {[0.92, 0.85, 0.71, 0.58, 0.34].map((p, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="flex-1 h-1 bg-[#0d0d0d]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${p * 100}%`,
                          backgroundColor: p > 0.7 ? '#16a34a' : '#ea580c',
                        }}
                      />
                    </div>
                    <span className="text-[6px] font-mono text-[#0d0d0d] w-6 text-right">
                      {Math.round(p * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : projectId.includes('xray') || projectId.includes('ai-xray') ? (
          /* ═══ 07 — AI X-Ray Hospital ═══ */
          <div className="h-full bg-black rounded-md overflow-hidden flex flex-col relative">
            <div className="absolute top-2 left-3 right-3 z-10 flex items-center justify-between text-[7px] font-mono">
              <span className="text-white/70">🏥 X-Ray · PA View</span>
              <span className="text-[#28c840]">● LIVE</span>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-3 rounded-lg bg-gradient-to-b from-slate-800 via-slate-900 to-black overflow-hidden">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <path
                      key={i}
                      d={`M 20 ${40 + i * 15} Q 100 ${30 + i * 15} 180 ${40 + i * 15}`}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                  ))}
                  <ellipse cx="60" cy="100" rx="35" ry="55" fill="rgba(255,255,255,0.05)" />
                  <ellipse cx="140" cy="100" rx="35" ry="55" fill="rgba(255,255,255,0.05)" />
                </svg>
                <div className="absolute top-[32%] left-[24%]">
                  <div className="w-8 h-8 rounded-full bg-red-500/50 blur-md" />
                  <div className="absolute inset-0 w-8 h-8 rounded-full ring-2 ring-red-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold bg-red-600/80 px-1 rounded">A</span>
                  </div>
                </div>
                <div className="absolute bottom-[28%] right-[26%]">
                  <div className="w-9 h-9 rounded-full bg-orange-500/40 blur-md" />
                  <div className="absolute inset-0 w-9 h-9 rounded-full ring-2 ring-orange-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold bg-orange-600/80 px-1 rounded">B</span>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-1/3 h-[1px] bg-[#28c840]/60 shadow-[0_0_8px_#28c840]" />
              </div>
              <div className="absolute right-2 top-8 w-[85px] space-y-1">
                <div className="text-[6px] font-mono text-[#28c840] uppercase mb-1">Findings</div>
                {[
                  { l: 'Nodule', c: 94, col: '#dc2626', pos: 'A' },
                  { l: 'Effusion', c: 71, col: '#ea580c', pos: 'B' },
                  { l: 'Normal', c: 8, col: '#16a34a', pos: '—' },
                ].map((x, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded p-1.5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] font-mono text-white/80 uppercase">{x.l}</span>
                      {x.pos !== '—' && (
                        <span className="text-[5px] font-mono text-white bg-white/20 px-1 rounded">
                          {x.pos}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] font-bold leading-none mt-0.5" style={{ color: x.col }}>
                      {x.c}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 flex items-center justify-between text-[7px] font-mono border-t border-white/10">
              <span className="text-white/60">Patient: PT-4821 · Dr. Ahmed</span>
              <span className="text-[#28c840]">AI Conf: 94%</span>
            </div>
          </div>
        ) : (
          /* Fallback */
          <div className="h-full bg-[#faf7f0] rounded-md p-3 flex flex-col gap-2">
            <div className="text-[7px] font-mono uppercase text-[#77756f]">Interface Preview</div>
            <div className="flex-1 bg-white rounded-md p-2 flex flex-col gap-1.5 border border-black/5">
              <div className="h-1.5 w-3/4 bg-[#0d0d0d] rounded" />
              <div className="h-1 w-1/2 bg-[#77756f]/30 rounded" />
              <div className="grid grid-cols-3 gap-1 mt-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-8 bg-[#f5f1ea] rounded" />
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
          Things I&apos;ve{' '}
          <span className="font-serif-italic text-[#77756f]">built.</span>
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
                        {project.index} / {String(PROJECTS.length).padStart(2, '0')}
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

                    {/* ⭐ Action buttons — Live Demo + GitHub + Paper */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-primary text-[11px] h-9 px-3.5 inline-flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                          Live Demo ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-secondary text-[11px] h-9 px-3.5"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-secondary text-[11px] h-9 px-3.5"
                        >
                          Paper ↗
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

                  {/* Mobile buttons */}
                  <div className="flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill-primary text-xs h-9 px-4 inline-flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                        Live Demo ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill-secondary text-xs h-9 px-4 inline-flex"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}