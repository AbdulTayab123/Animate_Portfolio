'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ACHIEVEMENTS, AchievementItem } from '@/lib/data';

// ═══ Count-up hook ═══
function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    let raf = 0;
    const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setCount(Math.floor(easeOutQuart(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setCount(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);
  return count;
}

// ═══ Brand Icon ═══
function BrandIcon({ name, color, size = 40 }: { name: string; color: string; size?: number }) {
  const n = (name || '').toLowerCase();
  const make = (label: string, bg: string, fg: string, fontSize?: number) => (
    <div
      className="rounded-xl flex items-center justify-center font-bold"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: fg,
        fontSize: fontSize ?? size * 0.42,
        letterSpacing: label.length > 3 ? '-0.02em' : 'normal',
      }}
    >
      {label}
    </div>
  );
  if (n.includes('leetcode')) return make('LC', '#ffa116', '#fff');
  if (n.includes('geek')) return make('GfG', '#2f8d46', '#fff', size * 0.34);
  if (n.includes('hackerrank')) return make('HR', '#00ea64', '#000');
  if (n.includes('codechef')) return make('CC', '#964b00', '#fff');
  if (n.includes('nasa')) return make('NASA', '#0b3d91', '#fff', size * 0.3);
  if (n.includes('lablab')) return make('lab', '#000', '#fff');
  if (n.includes('university') || n.includes('topper')) {
    return (
      <div
        className="rounded-xl flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor: color || '#6b21a8', color: '#fff' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size * 0.5, height: size * 0.5 }}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
        </svg>
      </div>
    );
  }
  return make((name || '?')[0].toUpperCase(), color || '#0d0d0d', '#fff');
}

// ═══ Card — gold tint + dark shadow ═══
function AchievementCard({ card }: { card: AchievementItem }) {
  const [seen, setSeen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(card.number, 1.4, seen);
  const brandColor = (card as any).brandColor || '#0d0d0d';
  const prefix = (card as any).numberPrefix || '';

  return (
    <div
      ref={ref}
      className="shrink-0 w-[clamp(300px,36vw,440px)] h-[260px] rounded-[28px] p-6 flex flex-col justify-between select-none"
      style={{
        // ⭐ Halka gold tone + frosted glass
        background:
          'linear-gradient(135deg, rgba(253, 248, 233, 0.9) 0%, rgba(245, 235, 210, 0.85) 100%)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(212, 190, 140, 0.4)',
        // ⭐ Dark shadow niche
        boxShadow:
          '0 12px 32px -8px rgba(80, 60, 20, 0.18), 0 6px 16px -6px rgba(80, 60, 20, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      }}
    >
      {/* TOP: Logo tile + Index */}
      <div className="flex items-start justify-between">
        <div
          className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: `0 6px 18px ${brandColor}20`,
          }}
        >
          <BrandIcon name={card.logo} color={brandColor} size={40} />
        </div>
        <span className="font-mono text-[10px] text-[#8a7a55] tracking-wider pt-1">
          {card.index}
        </span>
      </div>

      {/* BOTTOM: Content (left) + Big number (right) */}
      <div className="grid grid-cols-[1fr_auto] gap-5 items-end">
        <div className="min-w-0 space-y-1">
          <h3 className="text-[15px] font-bold text-[#3a2f10] tracking-tight leading-tight line-clamp-2">
            {card.platform}
          </h3>
          <span className="block font-mono text-[9px] text-[#8a7a55] uppercase tracking-[0.18em] truncate">
            {card.label}
          </span>
          <p className="text-[11px] text-[#7a6c48] line-clamp-2 leading-snug pt-1">
            {card.caption}
          </p>
        </div>

        <div className="text-right shrink-0 pb-1">
          {prefix && (
            <span className="block font-serif-italic text-[15px] text-[#5a4a20] leading-none mb-1">
              {prefix}
            </span>
          )}
          <span
            className="font-bold tracking-tighter text-[#3a2f10] leading-none block"
            style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)' }}
          >
            {count}
            {card.numberSuffix}
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══ Main ═══
export function Achievements() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // ⭐ Refs — no re-renders → smooth continuous motion
  const pausedRef = useRef(false);
  const manualUntilRef = useRef(0);
  const directionRef = useRef(1);

  // ⭐ AUTO-SCROLL — mounted once, runs forever (never stops)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const SPEED = 1.6;
    const RESUME_DELAY = 1800;

    const step = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const now = Date.now();
      const canAuto =
        !pausedRef.current && now >= manualUntilRef.current && maxScroll > 10;

      if (canAuto) {
        // Bounce at edges
        if (track.scrollLeft >= maxScroll - 1) directionRef.current = -1;
        else if (track.scrollLeft <= 1) directionRef.current = 1;

        track.scrollLeft += SPEED * directionRef.current;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ⭐ Progress bar + manual detection
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        setProgress(maxScroll <= 0 ? 0 : track.scrollLeft / maxScroll);
        ticking = false;
      });
    };

    const markManual = () => {
      manualUntilRef.current = Date.now() + 1800;
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    track.addEventListener('wheel', markManual, { passive: true });
    track.addEventListener('touchstart', markManual, { passive: true });
    track.addEventListener('mousedown', markManual, { passive: true });

    onScroll();
    return () => {
      track.removeEventListener('scroll', onScroll);
      track.removeEventListener('wheel', markManual);
      track.removeEventListener('touchstart', markManual);
      track.removeEventListener('mousedown', markManual);
    };
  }, []);

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-transparent">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-12">
        <div className="mb-8">
          <span className="font-mono-tag block mb-2">06 — Achievements</span>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-bold tracking-tight text-[#0d0d0d] leading-[1.02] text-[clamp(2.5rem,6vw,4.75rem)]">
              Proud{' '}
              <span className="font-serif-italic font-normal text-[#77756f]">moments.</span>
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#77756f] hidden sm:flex items-center gap-2">
              Hover to pause · Drag to explore
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-3 h-3"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
          <div className="w-full h-[2px] bg-black/10 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-[#0d0d0d]"
              style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }}
            />
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        className="flex items-stretch gap-6 overflow-x-auto pb-3 pt-2"
        style={{
          paddingLeft: 'clamp(20px, calc((100vw - 1320px)/2 + 20px), 100px)',
          paddingRight: 'clamp(20px, calc((100vw - 1320px)/2 + 20px), 100px)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {ACHIEVEMENTS.map((card) => (
          <AchievementCard key={card.index} card={card} />
        ))}

        {/* Ending card */}
        <div
          className="shrink-0 w-[260px] h-[260px] rounded-[28px] flex flex-col items-center justify-center text-center p-6"
          style={{
            border: '2px dashed rgba(160, 130, 70, 0.35)',
            backgroundColor: 'rgba(253, 248, 233, 0.5)',
          }}
        >
          <span className="font-serif-italic text-2xl font-bold text-[#3a2f10] block mb-2">
            and counting…
          </span>
          <span className="text-[11px] text-[#7a6c48] leading-relaxed">
            More hackathons &amp; research papers underway.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 lg:px-12 mt-6">
        <span className="text-[10px] font-mono text-[#77756f] uppercase tracking-wider">
          Verified stats from academic records &amp; competitive platforms.
        </span>
      </div>
    </section>
  );
}