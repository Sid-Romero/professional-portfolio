import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sidbadji.dev'),
  title: {
    default: 'Sidya Badji | Ingénieur DevOps & Cybersécurité',
    template: '%s | Sidya Badji',
  },
  description: 'Portfolio technique de Sidya Badji, étudiant en M2 STRI spécialisé en DevOps, Cloud Infrastructure et Sécurité Réseau. Projets Kubernetes, Ansible, architecture réseau entreprise.',
  keywords: [
    'DevOps',
    'Cybersécurité',
    'Cloud Engineer',
    'Kubernetes',
    'Ansible',
    'Network Engineering',
    'AWS',
    'Infrastructure',
    'Portfolio',
    'Toulouse',
    'M2 STRI',
  ],
  authors: [{ name: 'Sidya Badji', url: 'https://sidbadji.dev' }],
  creator: 'Sidya Badji',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sidbadji.dev',
    title: 'Sidya Badji | DevOps Engineer & Cybersecurity Specialist',
    description: 'Portfolio professionnel présentant mes projets d\'infrastructure, d\'automatisation DevOps et de sécurité réseau.',
    siteName: 'Sidya Badji Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sidya Badji - DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidya Badji | DevOps Engineer',
    description: 'Portfolio DevOps, Kubernetes, et infrastructure réseau',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark text-slate-200 selection:bg-primary/30 selection:text-emerald-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
