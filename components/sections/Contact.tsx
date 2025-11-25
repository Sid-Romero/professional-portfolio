'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 3: EmailJS integration
    alert('Formulaire soumis ! (Intégration EmailJS en Phase 3)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-card scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Restons en Contact</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Intéressé par une collaboration ou simplement envie de discuter technologie ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Coordonnées</h3>
              
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-200">{personalInfo.email}</p>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Téléphone</p>
                    <p className="text-slate-200">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Localisation</p>
                    <p className="text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Réseaux</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-emerald-600 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
