import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const interTight = localFont({
  src: '../fonts/InterTight-Variable.woff2',
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = localFont({
  src: [
    {
      path: '../fonts/InstrumentSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/InstrumentSerif-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: '../fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abdul Tayab — Software Engineer & AI/ML Specialist',
  description:
    'Personal portfolio of Abdul Tayab, Software Engineer and AI/ML Engineer specializing in Agentic AI, Cyber Threat Detection, and Full-Stack Systems.',
  keywords: [
    'Abdul Tayab',
    'Software Engineer',
    'AI Engineer',
    'Machine Learning',
    'Cybersecurity',
    'Full Stack Engineer',
    'Iqra University',
    'NFTCipher',
  ],
  authors: [{ name: 'Abdul Tayab' }],
  openGraph: {
    title: 'Abdul Tayab — Software Engineer & AI/ML Specialist',
    description:
      'Explore the work, research manuscripts, certifications, and background of Abdul Tayab.',
    url: 'https://abdultayab.netlify.app',
    siteName: 'Abdul Tayab Portfolio',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdul Tayab — Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/portrait-bust.webp',
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f2ee',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#f4f2ee] text-[#0d0d0d] antialiased selection:bg-[#0d0d0d] selection:text-[#f4f2ee]">
        {children}
      </body>
    </html>
  );
}
