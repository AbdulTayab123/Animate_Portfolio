'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PROFILE } from '@/lib/data';

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const swingRef = useRef<HTMLDivElement | null>(null);

  const firstName = PROFILE.name.split(' ')[0];
  const lastName = PROFILE.name.split(' ')[1] ?? '';

  useEffect(() => {
    const el = swingRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let angle = 0;
    let velocity = 0;
    let lastX: number | null = null;
    let animId = 0;

    const onMove = (e: MouseEvent) => {
      if (lastX === null) { lastX = e.clientX; return; }
      const dx = Math.max(-40, Math.min(40, e.clientX - lastX));
      lastX = e.clientX;
      velocity += dx * 0.02;
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      const k = 0.06;
      const d = 0.94;
      velocity = (velocity - k * angle) * d;
      angle += velocity;
      angle = Math.max(-14, Math.min(14, angle));
      const idle = reduceMotion ? 0 : Math.sin(Date.now() * 0.0016) * 1.4;
      el.style.transform = `rotate(${angle + idle}deg)`;
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((v) => !v);
    }
  };

  const backItems = [
    { title: 'Full Stack Developer', desc: 'Builds frontend and backend applications.' },
    { title: 'Mobile App Developer', desc: 'Creates apps for mobile devices.' },
    { title: 'iOS Developer', desc: 'Builds apps for Apple devices.' },
    { title: 'AI & Web Builder', desc: 'Builds AI-powered websites and applications.' },
  ];

  const quickFacts = [
    { label: 'Location', value: 'Karachi, Pakistan' },
    { label: 'Education', value: 'B.E. Software Engineering' },
    { label: 'Institution', value: 'Iqra University, Karachi' },
    { label: 'Interned at ', value: 'NFTCipher-2026' },
    { label: 'Focus', value: 'Full Stack. AI. Web' },
  ];

  const barcodeBars = [
    { w: 2, h: '100%' }, { w: 1, h: '80%' }, { w: 3, h: '100%' }, { w: 1, h: '70%' },
    { w: 2, h: '100%' }, { w: 2, h: '90%' }, { w: 1, h: '75%' }, { w: 3, h: '100%' },
    { w: 1, h: '85%' }, { w: 2, h: '100%' }, { w: 1, h: '70%' }, { w: 4, h: '100%' },
    { w: 1, h: '80%' }, { w: 2, h: '100%' }, { w: 3, h: '90%' }, { w: 1, h: '75%' },
    { w: 2, h: '100%' }, { w: 1, h: '85%' }, { w: 3, h: '100%' }, { w: 2, h: '70%' },
    { w: 1, h: '100%' }, { w: 2, h: '80%' }, { w: 3, h: '100%' }, { w: 1, h: '90%' },
    { w: 2, h: '100%' }, { w: 4, h: '75%' }, { w: 1, h: '100%' }, { w: 2, h: '85%' },
    { w: 1, h: '100%' }, { w: 3, h: '70%' }, { w: 2, h: '100%' }, { w: 1, h: '80%' },
    { w: 3, h: '100%' }, { w: 1, h: '90%' }, { w: 2, h: '75%' }, { w: 4, h: '100%' },
    { w: 1, h: '85%' }, { w: 2, h: '100%' }, { w: 1, h: '70%' }, { w: 3, h: '100%' },
  ];

  return (
    <section id="about" className="relative px-5 lg:px-12 pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_340px_minmax(0,0.95fr)] gap-12 lg:gap-10 items-center">
        {/* ================= LEFT: intro ================= */}
        <div className="order-2 lg:order-1 text-center lg:text-left pt-4 lg:pt-24">
          <span className="font-mono-tag block mb-6 tracking-[0.2em] uppercase text-xs text-[#77756f]">
            01 — About
          </span>

          <h2 className="font-bold tracking-tight text-[#0d0d0d] leading-[1.02] text-[clamp(2.6rem,6vw,5.2rem)]">
            Hi, I&apos;m{' '}
            <span className="font-serif-italic font-normal text-[#2b2a28]">{firstName}.</span>
          </h2>

          {/* SHORT BIO — paragraph 1 */}
          <p className="mt-6 text-base sm:text-lg text-[#2b2a28] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Motivated Software Engineer and Full-Stack Developer skilled in building scalable
            web and mobile applications using React, Node.js, Python, and modern technologies.
          </p>

          {/* SHORT BIO — paragraph 2 */}
          <p className="mt-4 text-sm sm:text-base text-[#77756f] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Exploring AI/ML, Cybersecurity, and Blockchain through research on emerging
            technologies and innovative solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a href={PROFILE.resumePdf} download="Abdul_Tayab_CV.pdf" className="btn-pill-primary">
              Résumé ↓
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-pill-secondary">
              GitHub ↗
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-pill-secondary">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ================= CENTER: ID card ================= */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div
            ref={swingRef}
            className="flex flex-col items-center"
            style={{ transformOrigin: 'top center', willChange: 'transform' }}
          >
            {/* Strap */}
            <div className="relative w-6 h-16 bg-[#2d3561] rounded-b-[3px] shadow-md overflow-hidden">
              <div
                className="absolute left-1/2 top-0 flex flex-col items-center"
                style={{ animation: 'strap-scroll 6s linear infinite' }}
              >
                <span className="[writing-mode:vertical-rl] rotate-180 text-[7px] font-mono tracking-[0.3em] uppercase text-white/85 whitespace-nowrap">
                  Abdul Tayab • Abdul Tayab • Abdul Tayab • Abdul Tayab •
                </span>
              </div>
            </div>

            {/* Clip */}
            <div className="-mt-1 w-8 h-10 rounded-md bg-[#cfccc5] border border-black/20 shadow-sm flex items-end justify-center pb-1.5 z-10">
              <div className="w-4 h-1.5 rounded-full bg-[#8d8a83]" />
            </div>

            {/* Card */}
            <div
              tabIndex={0}
              role="button"
              aria-label="Developer ID Card. Press Enter to flip."
              onKeyDown={handleKeyDown}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              onClick={() => setIsFlipped((v) => !v)}
              className="-mt-2 relative w-[320px] h-[440px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d3561] rounded-[22px]"
              style={{ perspective: '1000px' }}
            >
              <div
                className="w-full h-full relative transition-transform duration-700 rounded-[22px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 bg-white rounded-[22px] overflow-hidden border border-[#eae7e1] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-[#2d3561] text-white px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-bold tracking-tight">
                        {firstName[0]}
                        {lastName[0]}
                      </div>
                      <div className="leading-tight">
                        <div className="text-[11px] tracking-[0.16em] uppercase font-bold">
                          Developer ID
                        </div>
                        <div className="text-[9px] tracking-[0.14em] uppercase text-white/60 mt-0.5">
                          Portfolio · 2026
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <span className="w-1 h-1 rounded-full bg-white/70" />
                      <span className="w-1 h-1 rounded-full bg-white/70" />
                    </div>
                  </div>

                  <div className="bg-white px-6 pt-6 pb-5 flex-1 flex flex-col">
                    <div className="mx-auto">
                      <div className="w-[130px] h-[150px] rounded-2xl overflow-hidden bg-transparent p-0">
                        <div className="w-full h-full rounded-[12px] overflow-hidden bg-transparent">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/portrait-bust.webp"
                            alt={PROFILE.name}
                            className="w-full h-full object-cover object-top bg-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-5">
                      <div className="text-[15px] font-bold tracking-tight text-[#0d0d0d] uppercase">
                        {PROFILE.name}
                      </div>
                      <div className="text-[10px] tracking-[0.14em] uppercase text-[#77756f] mt-1">
                        Full Stack Developer
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-[1fr_1.4fr_1fr] gap-x-2 text-[10px]">
                      <div>
                        <div className="tracking-[0.14em] uppercase text-[#a3a19a] text-[9px]">
                          ID NO.
                        </div>
                        <div className="font-mono text-[#0d0d0d] mt-1.5 font-bold">63639</div>
                      </div>
                      <div className="text-center">
                        <div className="tracking-[0.14em] uppercase text-[#a3a19a] text-[9px]">
                          DEPT
                        </div>
                        <div className="font-mono text-[#0d0d0d] mt-1.5 font-bold text-[9px] leading-tight">
                          Software Engineering
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="tracking-[0.14em] uppercase text-[#a3a19a] text-[9px]">
                          VALID TILL
                        </div>
                        <div className="font-mono text-[#0d0d0d] mt-1.5 font-bold">2026</div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 flex items-end justify-between gap-3">
                      <div className="flex items-end h-7" style={{ gap: '1.5px' }}>
                        {barcodeBars.map((bar, i) => (
                          <span
                            key={i}
                            className="bg-[#0d0d0d]"
                            style={{ width: `${bar.w}px`, height: bar.h }}
                          />
                        ))}
                      </div>
                      <div className="flex flex-col items-center gap-0.5 pb-0.5 shrink-0">
                        <div className="w-5 h-5 rounded-full border border-[#c9c5bd] flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                            <path
                              d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z"
                              fill="#c9c5bd"
                            />
                          </svg>
                        </div>
                        <span className="text-[6px] tracking-[0.16em] uppercase text-[#a3a19a]">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 bg-[#faf7f0] rounded-[22px] overflow-hidden border border-[#eae7e1] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] flex flex-col"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="px-7 pt-7 pb-6 flex-1 flex flex-col">
                    <h5 className="text-[17px] font-bold tracking-tight text-[#0d0d0d]">
                      What I am
                    </h5>

                    <ul className="mt-6 space-y-5 text-[11px] text-[#2b2a28] leading-snug">
                      {backItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-[1px] w-[18px] h-[18px] rounded-full bg-[#2d3561] flex items-center justify-center shrink-0">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#faf7f0"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-[10px] h-[10px]"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <div className="flex flex-col">
                            <span className="font-bold text-[11.5px] text-[#0d0d0d] leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-[#77756f] leading-snug mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <div className="font-serif-italic text-[26px] text-[#0d0d0d] leading-none">
                        {firstName}
                      </div>
                      <div className="mt-2 text-[8px] tracking-[0.18em] uppercase text-[#a3a19a]">
                        If found, say hello ↗
                      </div>
                    </div>
                  </div>

                  <div className="h-1 w-full bg-[#2d3561]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: Quick facts + quote ================= */}
        <div className="order-3 w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end pt-4 lg:pt-24">
          <span className="font-mono-tag block mb-4 tracking-[0.2em] uppercase text-xs text-[#77756f]">
            Quick facts
          </span>

          <dl className="divide-y divide-black/10 border-y border-black/10">
            {quickFacts.map((fact, i) => (
              <div key={i} className="flex items-baseline justify-between gap-6 py-3">
                <dt className="text-xs tracking-[0.14em] uppercase text-[#77756f]">{fact.label}</dt>
                <dd className="text-sm sm:text-base font-medium text-[#0d0d0d] text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {/* ⭐ NEW quote */}
          <p className="mt-8 font-serif-italic text-xl sm:text-2xl text-[#2b2a28] leading-snug">
            &ldquo;Aspiring researcher driving innovation through advanced global education.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}