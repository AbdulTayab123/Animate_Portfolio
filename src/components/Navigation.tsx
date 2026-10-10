'use client';

import React, { useState, useEffect } from 'react';
import { NAV, PROFILE } from '@/lib/data';
import { useScrollProgress } from '@/lib/hooks';
import { scrollToTarget } from '@/lib/scroll';

export function Navigation() {
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⭐ FIXED scroll-spy — reverse iteration + containment check
  useEffect(() => {
    const sectionIds = ['hero', ...NAV.map((n) => n.id)];

    const updateActive = () => {
      const targetY = window.innerHeight * 0.35;
      let current = sectionIds[0];
      let found = false;

      // Reverse iterate — LAST section whose span contains targetY
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        if (rect.top <= targetY && rect.bottom > targetY) {
          current = sectionIds[i];
          found = true;
          break;
        }
      }

      // Fallback: last section whose top passed targetY
      if (!found) {
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= targetY) current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  // Lock scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(href);

    const id = href.replace('#', '');
    if (id) setActiveSection(id);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0d0d0d] z-50 transition-all ease-out pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: '0% 50%' }}
        aria-hidden="true"
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              aria-label="Home"
              className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold tracking-wider transition-all duration-300 hover:rotate-360 ${
                scrolled
                  ? 'bg-[#0d0d0d] text-[#f4f2ee] shadow-md'
                  : 'bg-transparent text-[#0d0d0d] border border-[#0d0d0d]/30 hover:border-[#0d0d0d]'
              }`}
            >
              {PROFILE.initials}
            </a>
            <span
              className={`font-semibold text-sm tracking-tight transition-opacity duration-300 hidden sm:inline-block ${
                scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {PROFILE.name}
            </span>
          </div>

          {/* Center Nav */}
          <nav
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
              scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg border border-black/5'
                : 'bg-white/40 border border-black/5'
            }`}
          >
            {NAV.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide rounded-full transition-colors duration-200 z-10 ${
                    isActive ? 'text-[#f4f2ee]' : 'text-[#0d0d0d] hover:text-black'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#0d0d0d] rounded-full -z-10 transition-all duration-300" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-black/10 text-xs font-semibold tracking-wider text-[#0d0d0d] shadow-sm hover:bg-[#0d0d0d] hover:text-[#f4f2ee] transition-all"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#f4f2ee] flex flex-col justify-between p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          clipPath: mobileMenuOpen ? 'circle(150% at 90% 5%)' : 'circle(0% at 90% 5%)',
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[#77756f]">
            Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center font-bold text-sm text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-[#f4f2ee] transition-all"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4 my-auto">
          {NAV.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-baseline gap-4 py-2 border-b border-black/10"
              style={{
                transitionDelay: `${idx * 60}ms`,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileMenuOpen ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span className="font-mono text-sm text-[#77756f]">{item.num}</span>
              <span className="text-4xl font-bold tracking-tight text-[#0d0d0d] group-hover:italic transition-all">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-between text-xs font-mono text-[#77756f] pt-4 border-t border-black/10">
          <span>{PROFILE.name}</span>
          <span>{PROFILE.email}</span>
        </div>
      </div>
    </>
  );
}