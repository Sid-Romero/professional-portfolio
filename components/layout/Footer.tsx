'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">{personalInfo.name}</span>. 
              Tous droits réservés.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
