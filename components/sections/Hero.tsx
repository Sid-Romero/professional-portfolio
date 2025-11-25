'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Download, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-darker">
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
        }}></div>
        {/* Glow effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-sm font-mono mb-6 backdrop-blur-sm">
            Hello World, I'm {personalInfo.name}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Ingénieur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DevOps</span> <br className="hidden md:block" />
            & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">Cybersécurité</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            {personalInfo.subtitle}. Je conçois des infrastructures résilientes et sécurisées, 
            bridging the gap entre le développement et les opérations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projets" 
              className="px-8 py-4 bg-primary hover:bg-emerald-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/20 flex items-center gap-2"
            >
              Voir mes projets <ChevronRight size={20} />
            </a>
            <button 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              <Download size={20} /> Télécharger CV
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-10"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-1">3+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Ans d'expérience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">10+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Projets Réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">AWS</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Cloud Native</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">M2</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Niveau Master</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
