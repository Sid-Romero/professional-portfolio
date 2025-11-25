'use client';

import { personalInfo, experiences, education } from '@/lib/data';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-dark relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Bio Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              À Propos
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p className="mb-6">{personalInfo.bio}</p>
              <p>
                Actuellement en alternance chez <strong className="text-white">UPSILON</strong>, je travaille sur des architectures IoT scalables.
                Ma force réside dans ma capacité à comprendre à la fois les contraintes bas niveau (Réseau, OS) et les enjeux applicatifs modernes (Microservices, Serverless).
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
               {/* Quick Info badges */}
               <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                 <MapPin size={18} className="text-primary" />
                 <span className="text-slate-300">{personalInfo.location}</span>
               </div>
               <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                 <GraduationCap size={18} className="text-secondary" />
                 <span className="text-slate-300">UPSSITECH (2026)</span>
               </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
             <h3 className="text-2xl font-bold text-white mb-8">Parcours</h3>
             
             <div className="relative border-l-2 border-slate-800 ml-3 space-y-10">
                {/* Experience */}
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark"></span>
                    <div className="mb-1 flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                      <Briefcase size={14} /> {exp.company}
                      <span className="mx-1">•</span>
                      <MapPin size={14} /> {exp.location}
                    </div>
                    <p className="text-slate-400 text-sm mb-3">
                      {exp.description[0]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Education */}
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-dark"></span>
                    <div className="mb-1 flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                      <GraduationCap size={14} /> {edu.school}
                    </div>
                    <p className="text-slate-400 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
