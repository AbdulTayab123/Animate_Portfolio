'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PROFILE } from '@/lib/data';
import { scrollToTarget } from '@/lib/scroll';

const BG_THRESH = 235;
const PROC_W_FAST = 280;
const PROC_W_FULL = 440;
const FRAME_SKIP = 2;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const userMutedPreferenceRef = useRef<boolean | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let visited: Uint8Array = new Uint8Array(0);
    let stack: Int32Array = new Int32Array(0);
    let stopped = false;
    let handle = 0;
    let firstDrawn = false;
    let upgraded = false;
    let frameCount = 0;
    const anyVideo = video as any;
    const hasRVFC = typeof anyVideo.requestVideoFrameCallback === 'function';

    const setupAt = (targetW: number) => {
      const vw = video.videoWidth || 768;
      const vh = video.videoHeight || 960;
      w = targetW;
      h = Math.round((targetW * vh) / vw);
      canvas.width = w;
      canvas.height = h;
      visited = new Uint8Array(w * h);
      stack = new Int32Array(w * h);
      // ⭐ NO fill — keep canvas transparent so ghost text shows through
      return true;
    };

    const isBgPixel = (r: number, g: number, b: number) => {
      if (r >= BG_THRESH && g >= BG_THRESH && b >= BG_THRESH) return true;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      if (max - min < 20 && min > 210) return true;
      return false;
    };

    const removeBgFromImageData = (img: ImageData) => {
      const d = img.data;
      visited.fill(0);
      let sp = 0;

      const push = (i: number) => {
        if (visited[i]) return;
        const k = i * 4;
        if (isBgPixel(d[k], d[k + 1], d[k + 2])) {
          visited[i] = 1;
          stack[sp++] = i;
        }
      };

      for (let x = 0; x < w; x++) {
        push(x);
        push((h - 1) * w + x);
      }
      for (let y = 0; y < h; y++) {
        push(y * w);
        push(y * w + w - 1);
      }
      while (sp > 0) {
        const i = stack[--sp];
        const x = i % w;
        if (x > 0) push(i - 1);
        if (x < w - 1) push(i + 1);
        if (i >= w) push(i - w);
        if (i < w * (h - 1)) push(i + w);
      }

      for (let i = 0; i < w * h; i++) {
        const k = i * 4;
        if (visited[i]) {
          d[k + 3] = 0;
          continue;
        }
        const x = i % w;
        const nearBg =
          (x > 0 && visited[i - 1]) ||
          (x < w - 1 && visited[i + 1]) ||
          (i >= w && visited[i - w]) ||
          (i < w * (h - 1) && visited[i + w]);
        if (nearBg) {
          const m = Math.min(d[k], d[k + 1], d[k + 2]);
          if (m > 200) {
            d[k + 3] = Math.min(255, Math.round(((255 - m) / 55) * 255));
          }
        }
      }
    };

    const processVideoFrame = () => {
      if (!video.videoWidth || video.readyState < 2) return;
      if (!w) setupAt(PROC_W_FAST);

      // ⭐ Clear canvas (keeps transparent) then draw processed frame
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(video, 0, 0, w, h);
      const img = ctx.getImageData(0, 0, w, h);
      removeBgFromImageData(img);
      ctx.putImageData(img, 0, 0);

      if (!firstDrawn) {
        firstDrawn = true;
        setTimeout(() => {
          if (!upgraded) {
            upgraded = true;
            setupAt(PROC_W_FULL);
          }
        }, 600);
      }
    };

    const schedule = () => {
      if (stopped) return;
      if (hasRVFC) handle = anyVideo.requestVideoFrameCallback(loop);
      else handle = requestAnimationFrame(loop);
    };

    const loop = () => {
      frameCount++;
      if (
        frameCount % FRAME_SKIP === 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState >= 2
      ) {
        processVideoFrame();
      }
      schedule();
    };

    video.addEventListener('loadeddata', () => {
      if (video.readyState >= 2) processVideoFrame();
    });

    schedule();

    return () => {
      stopped = true;
      if (hasRVFC && typeof anyVideo.cancelVideoFrameCallback === 'function') {
        anyVideo.cancelVideoFrameCallback(handle);
      } else {
        cancelAnimationFrame(handle);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1;
    const onVolume = () => setIsAudioMuted(video.muted);

    video.muted = false;
    video
      .play()
      .then(() => {
        setIsAudioMuted(false);
        setIsAutoplayBlocked(false);
      })
      .catch(() => {
        video.muted = true;
        setIsAudioMuted(true);
        setIsAutoplayBlocked(true);
        video.play().catch(() => {});
      });

    video.addEventListener('volumechange', onVolume);

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('touchend', unlockAudio);
    };

    function unlockAudio(e: Event) {
      if (!video) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest?.('[data-sound-btn]')) return;
      if (userMutedPreferenceRef.current === true) return;

      if (video.muted) {
        video.muted = false;
        video
          .play()
          .then(() => {
            setIsAudioMuted(false);
            setIsAutoplayBlocked(false);
            removeUnlockListeners();
          })
          .catch(() => {
            video.muted = true;
          });
      } else {
        removeUnlockListeners();
      }
    }

    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    window.addEventListener('touchend', unlockAudio);

    let observer: IntersectionObserver | null = null;
    const hero = heroRef.current;
    if (hero && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(hero);
    }

    return () => {
      video.removeEventListener('volumechange', onVolume);
      removeUnlockListeners();
      observer?.disconnect();
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      userMutedPreferenceRef.current = false;
      setIsAudioMuted(false);
      setIsAutoplayBlocked(false);
      if (video.paused) video.play().catch(() => {});
    } else {
      video.muted = true;
      userMutedPreferenceRef.current = true;
      setIsAudioMuted(true);
    }
  };

  const showPauseIcon = !isAudioMuted;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-8 px-5 lg:px-12 overflow-hidden bg-[#f5f1ea]"
    >
      {/* ⭐ Ghost word — z-0, canvas will show through */}
      <div
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 text-center w-full"
        aria-hidden="true"
      >
        <span className="font-bold text-[32vw] lg:text-[28vw] leading-none uppercase tracking-tighter block text-[#0d0d0d]/[0.07]">
          {PROFILE.name.split(' ')[1]}
        </span>
      </div>

      {/* Sound toggle button */}
      <button
        data-sound-btn
        onClick={toggleSound}
        aria-label={showPauseIcon ? 'Mute video audio' : 'Unmute video audio'}
        className="absolute top-24 right-5 lg:right-12 z-30 w-[46px] h-[46px] rounded-full bg-[#0d0d0d] text-[#f5f1ea] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {isAutoplayBlocked && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#0d0d0d]/30 pointer-events-none" />
        )}
        {showPauseIcon ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-[1px]">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* ⭐ Avatar — NO bg, transparent container → ghost text shows through */}
      <div className="relative w-full max-w-[380px] lg:max-w-none lg:w-auto lg:h-[min(82svh,880px)] lg:ml-[8vw] aspect-[768/960]">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-0"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
          <source src="/hero/hero.webm" type="video/webm" />
        </video>

        {/* ⭐ Canvas — transparent, no bg color */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      </div>

      {/* Left bottom text */}
      <div className="relative z-20 mt-6 text-center lg:text-left lg:mt-0 lg:absolute lg:left-12 lg:bottom-12 lg:max-w-[48vw]">
        <span className="font-mono-tag block mb-3 tracking-[0.2em] uppercase text-xs">
          {PROFILE.name}
        </span>
        <h1 className="font-bold tracking-tight text-[#0d0d0d] leading-[1.02] text-[clamp(2.2rem,5.4vw,5.6rem)]">
          AI &amp; Full Stack
          <br />
          Developer
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#77756f] italic max-w-md mx-auto lg:mx-0">
          {PROFILE.subRole}
        </p>
      </div>

      {/* Right bottom buttons */}
      <div className="relative z-20 mt-6 flex flex-col items-center gap-3 lg:mt-0 lg:absolute lg:right-12 lg:bottom-12 lg:items-end">
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget('#work');
          }}
          className="btn-pill-primary"
        >
          Explore work →
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#contact');
            }}
            className="btn-pill-secondary"
          >
            Let&apos;s talk
          </a>
          <a
            href={PROFILE.resumePdf}
            download="Abdul_Tayab_CV.pdf"
            className="btn-pill-secondary"
          >
            Résumé ↑
          </a>
        </div>
      </div>
    </section>
  );
}