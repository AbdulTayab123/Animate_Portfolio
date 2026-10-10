'use client';

import React from 'react';

// Brand map linking logo keys to SVG paths in /logos
export const BRAND_MAP: Record<string, string> = {
  python: '/logos/python.svg',
  java: '/logos/java.svg',
  javascript: '/logos/javascript.svg',
  typescript: '/logos/typescript.svg',
  dart: '/logos/dart.svg',
  php: '/logos/php.svg',
  c: '/logos/c.svg',
  tensorflow: '/logos/tensorflow.svg',
  pytorch: '/logos/pytorch.svg',
  scikitlearn: '/logos/scikitlearn.svg',
  numpy: '/logos/numpy.svg',
  pandas: '/logos/pandas.svg',
  tableau: '/logos/tableau.svg',
  react: '/logos/react.svg',
  nextjs: '/logos/nextjs.svg',
  nodejs: '/logos/nodejs.svg',
  express: '/logos/express.svg',
  nestjs: '/logos/nestjs.svg',
  django: '/logos/django.svg',
  flask: '/logos/flask.svg',
  fastapi: '/logos/fastapi.svg',
  springboot: '/logos/springboot.svg',
  mysql: '/logos/mysql.svg',
  postgresql: '/logos/postgresql.svg',
  mongodb: '/logos/mongodb.svg',
  firebase: '/logos/firebase.svg',
  redis: '/logos/redis.svg',
  aws: '/logos/aws.svg',
  azure: '/logos/azure.svg',
  databricks: '/logos/databricks.svg',
  docker: '/logos/docker.svg',
  git: '/logos/git.svg',
  github: '/logos/github.svg',
  jira: '/logos/jira.svg',
  trello: '/logos/trello.svg',
  leetcode: '/logos/leetcode.svg',
  nasa: '/logos/nasa.svg',
  lablab: '/logos/lablab.svg',
  university: '/logos/university.svg',
};

// Concept map rendering custom SVG thin line icons
export const CONCEPT_MAP: Record<string, React.ReactNode> = {
  ml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  dl: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8 7l2.5 3.5M16 7l-2.5 3.5M8 17l2.5-3.5M16 17l-2.5-3.5" />
    </svg>
  ),
  nlp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" strokeLinecap="round" />
    </svg>
  ),
  cv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  netsec: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
    </svg>
  ),
  threat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" strokeLinecap="round" />
    </svg>
  ),
  ids: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M2 12h3l3-7 4 14 3-9 2 4h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  linuxsec: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10l3 3-3 3M13 16h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  forensics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" strokeLinecap="round" />
    </svg>
  ),
  restapi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dsa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M6 3v12M18 9v12M6 15a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9a6 6 0 0 0-6-6 6 6 0 0 0-6 6" strokeLinecap="round" />
    </svg>
  ),
  oop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  sysdesign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="2" y="3" width="8" height="6" rx="1" />
      <rect x="14" y="3" width="8" height="6" rx="1" />
      <rect x="8" y="15" width="8" height="6" rx="1" />
      <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M12 13v2" strokeLinecap="round" />
    </svg>
  ),
  agentic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M8 15h.01M16 15h.01M10 18h4" strokeLinecap="round" />
    </svg>
  ),
};

export function isBrand(name: string): boolean {
  return name.toLowerCase() in BRAND_MAP;
}

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechLogo({ name, className = '', size = 24 }: TechLogoProps) {
  const key = name.toLowerCase().replace(/[\s\.\&\/-]/g, '');

  // Check direct brand key
  if (key in BRAND_MAP) {
    return (
      <img
        src={BRAND_MAP[key]}
        alt={`${name} logo`}
        width={size}
        height={size}
        className={`object-contain ${className}`}
        loading="lazy"
      />
    );
  }

  // Check concept SVG map
  if (key in CONCEPT_MAP) {
    return (
      <div style={{ width: size, height: size }} className={`flex items-center justify-center text-current ${className}`}>
        {CONCEPT_MAP[key]}
      </div>
    );
  }

  // Fallback generic line icon
  return (
    <div style={{ width: size, height: size }} className={`flex items-center justify-center text-[#77756f] ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    </div>
  );
}
