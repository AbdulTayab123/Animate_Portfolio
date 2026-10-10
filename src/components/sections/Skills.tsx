'use client';

import React, { useState } from 'react';

type Family = 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools' | 'Core';

type Skill = {
  num: string;
  symbol: string;
  name: string;
  family: Family;
  dark?: boolean;
  icon: React.ReactNode;
};

// ---- Simple tech icons (inline SVG) ----
const Icons = {
  react: (
    <svg viewBox="-11 -11 22 22" className="w-full h-full">
      <circle r="2" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4" />
        <ellipse rx="10" ry="4" transform="rotate(60)" />
        <ellipse rx="10" ry="4" transform="rotate(120)" />
      </g>
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" fill="#f7df1e" rx="3" />
      <text x="12" y="17" fontSize="11" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Arial">JS</text>
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" fill="#3178c6" rx="3" />
      <text x="12" y="17" fontSize="11" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="Arial">TS</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2c-3 0-5 1-5 4v3h5v1H5c-3 0-3 2-3 4s0 4 3 4h2v-3c0-3 2-4 5-4h5c3 0 3-2 3-4V6c0-3-2-4-5-4h-3z" fill="#3776ab" />
      <path d="M12 22c3 0 5-1 5-4v-3h-5v-1h7c3 0 3-2 3-4s0-4-3-4h-2v3c0 3-2 4-5 4H7c-3 0-3 2-3 4v3c0 3 2 4 5 4h3z" fill="#ffd43b" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2 L22 7 L22 17 L12 22 L2 17 L2 7 Z" fill="#539e43" />
      <text x="12" y="16" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">N</text>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M3 2 L21 2 L19.5 20 L12 22 L4.5 20 Z" fill="#e34c26" />
      <text x="12" y="16" fontSize="9" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">HTML</text>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M6 10c1-3 3-4 5-4 3 0 4 2 6 3-1 3-3 4-5 4-3 0-4-2-6-3z M3 16c1-3 3-4 5-4 3 0 4 2 6 3-1 3-3 4-5 4-3 0-4-2-6-3z" fill="#38bdf8" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <ellipse cx="12" cy="6" rx="9" ry="3" fill="#00758f" />
      <path d="M3 6 V12 c0 1.6 4 3 9 3 s9-1.4 9-3 V6" fill="#00758f" />
      <path d="M3 12 V18 c0 1.6 4 3 9 3 s9-1.4 9-3 V12" fill="#00758f" />
    </svg>
  ),
  mongo: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2 C10 6 8 9 8 13 c0 4 2 7 4 9 2-2 4-5 4-9 0-4-2-7-4-11z" fill="#4faa41" />
      <path d="M12 2 v20" stroke="#3f8a34" strokeWidth="1" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#f05033" />
      <text x="12" y="16" fontSize="11" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">G</text>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect x="2" y="10" width="18" height="8" fill="#0db7ed" rx="1" />
      <circle cx="6" cy="8" r="1" fill="#0db7ed" />
      <circle cx="10" cy="8" r="1" fill="#0db7ed" />
      <circle cx="14" cy="8" r="1" fill="#0db7ed" />
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#000" />
      <text x="12" y="16" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">N</text>
    </svg>
  ),
  django: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" fill="#092e20" rx="3" />
      <text x="12" y="17" fontSize="12" fill="#44b78b" fontWeight="bold" textAnchor="middle" fontFamily="Arial">dj</text>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M6 20 L9 4 L12 10 L15 6 L18 20 Z" fill="#ffa000" />
      <path d="M6 20 L9 4 L12 10 Z" fill="#f57c00" />
    </svg>
  ),
  cpp: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#00599c" />
      <text x="12" y="16" fontSize="9" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">C++</text>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect width="24" height="24" fill="#f89820" rx="3" />
      <text x="12" y="17" fontSize="12" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">Jv</text>
    </svg>
  ),
  generic: (letter: string) => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#1f2750" />
      <text x="12" y="16" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="Arial">{letter}</text>
    </svg>
  ),
};

const SKILLS: Skill[] = [
  // Row 1 — dark featured
  { num: '01', symbol: 'C++', name: 'C++', family: 'Languages', dark: true, icon: Icons.cpp },
  { num: '02', symbol: 'Jv', name: 'Java', family: 'Languages', dark: true, icon: Icons.java },
  { num: '03', symbol: 'Py', name: 'Python', family: 'Languages', dark: true, icon: Icons.python },
  { num: '04', symbol: 'Js', name: 'JavaScript', family: 'Languages', dark: true, icon: Icons.js },
  { num: '05', symbol: 'Sq', name: 'SQL', family: 'Databases', dark: true, icon: Icons.sql },
  { num: '06', symbol: 'Re', name: 'React.js', family: 'Frontend', dark: true, icon: Icons.react },
  { num: '07', symbol: 'Rn', name: 'React Native', family: 'Frontend', dark: true, icon: Icons.react },
  { num: '08', symbol: 'Ht', name: 'HTML', family: 'Frontend', dark: true, icon: Icons.html },

  // Row 2
  { num: '09', symbol: 'Cs', name: 'CSS', family: 'Frontend', icon: Icons.generic('Cs') },
  { num: '10', symbol: 'Tw', name: 'Tailwind CSS', family: 'Frontend', icon: Icons.tailwind },
  { num: '11', symbol: 'No', name: 'Node.js', family: 'Backend', icon: Icons.node },
  { num: '12', symbol: 'Ex', name: 'Express.js', family: 'Backend', icon: Icons.generic('Ex') },
  { num: '13', symbol: 'Ra', name: 'REST APIs', family: 'Backend', icon: Icons.generic('API') },
  { num: '14', symbol: 'Sb', name: 'Supabase', family: 'Databases', icon: Icons.generic('Sb') },
  { num: '15', symbol: 'Mg', name: 'MongoDB', family: 'Databases', icon: Icons.mongo },
  { num: '16', symbol: 'Pg', name: 'PostgreSQL', family: 'Databases', icon: Icons.generic('Pg') },

  // Row 3
  { num: '17', symbol: 'My', name: 'MySQL', family: 'Databases', icon: Icons.sql },
  { num: '18', symbol: 'Ma', name: 'MongoDB Atlas', family: 'Databases', icon: Icons.mongo },
  { num: '19', symbol: 'Dk', name: 'Docker', family: 'Tools', icon: Icons.docker },
  { num: '20', symbol: 'Gt', name: 'Git', family: 'Tools', icon: Icons.git },
  { num: '21', symbol: 'Rd', name: 'Redis', family: 'Databases', icon: Icons.generic('Rd') },
  { num: '22', symbol: 'Jw', name: 'JWT', family: 'Backend', icon: Icons.generic('Jw') },
  { num: '23', symbol: 'Pm', name: 'Postman', family: 'Tools', icon: Icons.generic('Pm') },
  { num: '24', symbol: 'El', name: 'Ethereum', family: 'Core', icon: Icons.generic('Ξ') },

  // Row 4
  { num: '25', symbol: 'Ds', name: 'Data Science', family: 'Core', icon: Icons.generic('Ds') },
  { num: '26', symbol: 'Ai', name: 'Algorithms', family: 'Core', icon: Icons.generic('Ai') },
  { num: '27', symbol: 'Op', name: 'OOP', family: 'Core', icon: Icons.generic('Op') },
  { num: '28', symbol: 'Sd', name: 'System Design', family: 'Core', icon: Icons.generic('Sd') },
  { num: '29', symbol: 'Ad', name: 'API Design', family: 'Backend', icon: Icons.generic('Ad') },
  { num: '30', symbol: 'Ai', name: 'AI / ML', family: 'Core', icon: Icons.generic('AI') },
  { num: '31', symbol: 'Ml', name: 'Machine Learning', family: 'Core', icon: Icons.generic('Ml') },
  { num: '32', symbol: 'Dt', name: 'Data Structures', family: 'Core', icon: Icons.generic('Dt') },
];

const FAMILIES: Family[] = ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools', 'Core'];

export function Skills() {
  const [activeFamily, setActiveFamily] = useState<Family | null>(null);
  const [hovered, setHovered] = useState<Skill | null>(null);

  const isDim = (skill: Skill) => activeFamily !== null && skill.family !== activeFamily;

  return (
    <section
      id="skills"
      className="relative px-5 lg:px-12 py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono-tag block mb-5 tracking-[0.2em] uppercase text-xs text-[#77756f]">
            02 — Stack &amp; Capabilities
          </span>
          <h2 className="font-bold tracking-tight text-[#0d0d0d] leading-[1.02] text-[clamp(2.4rem,5.5vw,4.6rem)]">
            The periodic table{' '}
            <span className="font-serif-italic font-normal text-[#3a3a3a]">of my stack.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#77756f] max-w-md">
            32 elements in six families. Hover a tile to see its logo, or pick a family to light it up.
          </p>
        </div>

        {/* Family filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FAMILIES.map((family) => {
            const active = activeFamily === family;
            return (
              <button
                key={family}
                onClick={() => setActiveFamily(active ? null : family)}
                className={`inline-flex items-center gap-2 h-9 px-4 rounded-full text-[12px] font-medium transition-all ${
                  active
                    ? 'bg-[#0d0d0d] text-[#f5f1ea] shadow-md'
                    : 'bg-white/70 text-[#3a3a3a] hover:bg-white border border-[#0d0d0d]/10'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    active ? 'bg-[#f5f1ea]' : 'bg-[#0d0d0d]/40'
                  }`}
                />
                {family}
              </button>
            );
          })}
        </div>

        {/* Grid + right side panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
            {SKILLS.map((skill) => {
              const dim = isDim(skill);
              const isDark = skill.dark;
              const isActive = hovered?.num === skill.num;
              return (
                <button
                  key={skill.num}
                  onMouseEnter={() => setHovered(skill)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(skill)}
                  className={`relative aspect-square rounded-xl p-2 flex flex-col justify-between text-left transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1f2750] text-white'
                      : 'bg-[#ece7dd] text-[#0d0d0d]'
                  } ${
                    dim ? 'opacity-20' : 'opacity-100'
                  } ${
                    isActive ? '-translate-y-1 shadow-lg ring-2 ring-[#1f2750]/40' : ''
                  }`}
                >
                  <span
                    className={`text-[8px] tracking-widest font-mono ${
                      isDark ? 'text-white/60' : 'text-[#77756f]'
                    }`}
                  >
                    {skill.num}
                  </span>
                  <span
                    className={`text-[18px] font-bold leading-none ${
                      isDark ? 'text-white' : 'text-[#0d0d0d]'
                    }`}
                  >
                    {skill.symbol}
                  </span>
                  <span
                    className={`text-[8px] leading-tight truncate ${
                      isDark ? 'text-white/70' : 'text-[#77756f]'
                    }`}
                  >
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right side — icon reveal on hover */}
          <div className="hidden lg:flex flex-col items-center justify-center min-h-[420px] pt-8">
            {hovered ? (
              <div className="flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-32 h-32 mb-5">
                  {hovered.icon}
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#a3a19a]">
                  Element #{hovered.num}
                </div>
                <div className="mt-1.5 text-lg font-bold text-[#0d0d0d]">
                  {hovered.name}
                </div>
                <div className="mt-1 text-[10px] tracking-[0.14em] uppercase text-[#77756f]">
                  {hovered.family}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#a3a19a] mb-3">
                  <path
                    d="M5 5 L19 19 M19 5 L5 19"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[11px] text-[#a3a19a] tracking-wide">
                  Hover any element to see its logo
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}