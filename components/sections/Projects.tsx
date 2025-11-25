'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Github, ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import type { Category, Project } from '@/lib/types';


const categories: Category[] = ['Tous', 'Réseau', 'DevOps', 'Cybersécurité', 'Web/App'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projets" className="py-24 bg-card min-h-screen scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projets Réalisés</h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="text-slate-400 max-w-2xl">
              Une collection de projets techniques démontrant mon expertise en infrastructure,
              automatisation et sécurité.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-darker shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer flex flex-col h-full
                  transition-all duration-500 ease-out
                  hover:border-primary/50
                  hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]
                  hover:-translate-y-2"
              >
                {/* Thumbnail Area */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border shadow-lg ${
                      project.category === 'Réseau' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                      project.category === 'DevOps' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                      project.category === 'Cybersécurité' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                      'bg-orange-500/10 border-orange-500/20 text-orange-400'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
                    <span className="px-6 py-2 bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20 font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={18} /> Découvrir
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Decorative Top Border Line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-500" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[11px] font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 text-[11px] font-medium text-slate-500 bg-slate-800/30 rounded-md border border-slate-800">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer Infos */}
                    <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
                       <span className={`flex items-center gap-1.5 ${
                         project.status === 'Terminé' ? 'text-emerald-500' : 'text-yellow-500'
                       }`}>
                         <span className={`w-1.5 h-1.5 rounded-full ${
                           project.status === 'Terminé' ? 'bg-emerald-500' : 'bg-yellow-500 animate-pulse'
                         }`} />
                         {project.status.toUpperCase()}
                       </span>

                       {project.githubUrl && (
                          <div className="flex items-center gap-1 text-slate-500 group-hover:text-slate-300 transition-colors">
                            <Github size={14} />
                            <span>SOURCE</span>
                          </div>
                       )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Header Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title + Category */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                          selectedProject.category === 'Réseau' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' :
                          selectedProject.category === 'DevOps' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' :
                          selectedProject.category === 'Cybersécurité' ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400' :
                          'bg-orange-500/10 border border-orange-500/20 text-orange-400'
                        }`}>
                          {selectedProject.category}
                        </span>
                        <span className={`flex items-center gap-1.5 text-sm ${
                          selectedProject.status === 'Terminé' ? 'text-emerald-500' : 'text-yellow-500'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            selectedProject.status === 'Terminé' ? 'bg-emerald-500' : 'bg-yellow-500 animate-pulse'
                          }`} />
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Technologies Utilisées</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-3">Points Clés</h3>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-300">
                            <span className="text-primary mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Context */}
                  {selectedProject.context && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-3">Contexte</h3>
                      <p className="text-slate-300">{selectedProject.context}</p>
                    </div>
                  )}

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-3">Défis Techniques</h3>
                      <p className="text-slate-300">{selectedProject.challenges}</p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg transition-all flex items-center gap-2"
                      >
                        <Github size={18} />
                        Voir le code
                      </a>
                    )}
                    {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary hover:bg-emerald-600 text-white rounded-lg transition-all flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Voir la démo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
