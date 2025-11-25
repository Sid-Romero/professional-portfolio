'use client';

import { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { skillsData, skillCategories } from '@/lib/data';
import { Shield, Cloud, Server, Code, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Map des icônes
const iconMap = {
  Server,
  Cloud,
  Shield,
  Code
};

// Map des couleurs
const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    hover: 'hover:bg-blue-500/20'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    hover: 'hover:bg-emerald-500/20'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    hover: 'hover:bg-purple-500/20'
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    hover: 'hover:bg-orange-500/20'
  }
};

// Badge niveau
const getLevelBadge = (level: string) => {
  const colors = {
    'Avancé': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Intermédiaire': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Débutant': 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };
  return colors[level as keyof typeof colors] || colors['Débutant'];
};

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (key: string) => {
    setExpandedCategory(expandedCategory === key ? null : key);
  };

  return (
    <section id="competences" className="py-24 bg-darker relative overflow-hidden scroll-mt-24">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Arsenal Technique
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Chart Column */}
          <div className="lg:sticky lg:top-24">
            <div className="h-[400px] w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Niveau de maîtrise"
                    dataKey="A"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Skills Column */}
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              const colors = colorMap[category.color as keyof typeof colorMap];
              const isExpanded = expandedCategory === key;

              return (
                <div key={key} className="group">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-all mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={colors.text} size={24} />
                      <h3 className="text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <span className="text-sm text-slate-500">
                        ({category.skills.length} compétences)
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-slate-400" size={20} />
                    </motion.div>
                  </button>

                  {/* Skills List - Expandable */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pl-2">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                              className={`p-4 rounded-lg border ${colors.bg} ${colors.border} hover:shadow-lg transition-all`}
                            >
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4 className={`font-semibold ${colors.text}`}>
                                  {skill.name}
                                </h4>
                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getLevelBadge(skill.level)}`}>
                                  {skill.level}
                                </span>
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                {skill.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Tags (when collapsed) */}
                  {!isExpanded && (
                    <div className="flex flex-wrap gap-2 pl-2">
                      {category.skills.slice(0, 6).map(skill => (
                        <span
                          key={skill.name}
                          className={`px-3 py-1.5 ${colors.bg} border ${colors.border} ${colors.text} rounded text-sm ${colors.hover} transition-colors cursor-pointer`}
                          onClick={() => toggleCategory(key)}
                        >
                          {skill.name}
                        </span>
                      ))}
                      {category.skills.length > 6 && (
                        <span
                          className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 text-slate-400 rounded text-sm hover:bg-slate-800 transition-colors cursor-pointer"
                          onClick={() => toggleCategory(key)}
                        >
                          +{category.skills.length - 6}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
