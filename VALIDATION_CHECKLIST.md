# ✅ CHECKLIST DE VALIDATION - PHASE 1

## 🎯 Objectif
Vérifier que le portfolio Phase 1 fonctionne parfaitement avant le commit.

---

## 📦 Installation

### Étape 1 : Extraire le projet
```bash
cd ~/Desktop  # ou ton dossier de travail
unzip portfolio-final.zip
cd portfolio-final
```
- [ ] Dossier extrait avec succès
- [ ] Tous les fichiers présents (vérifier avec `ls -la`)

### Étape 2 : Installer les dépendances
```bash
npm install
```
- [ ] Installation sans erreurs
- [ ] `node_modules/` créé
- [ ] Temps d'installation : ~2-3 minutes

**⚠️ Si erreur** : Vérifie Node.js version avec `node -v` (doit être ≥18)

---

## 🚀 Lancement

### Étape 3 : Démarrer le serveur de développement
```bash
npm run dev
```
- [ ] Serveur démarre sans erreur
- [ ] Message : "Local: http://localhost:3000"
- [ ] Aucune erreur TypeScript affichée

### Étape 4 : Ouvrir dans le navigateur
Ouvre **http://localhost:3000**

---

## 🎨 Tests Visuels (Desktop)

### Section Hero
- [ ] Hero s'affiche avec fond sombre + effets glow
- [ ] Texte "Hello World, I'm Sidya Badji" visible
- [ ] Titres avec gradient (DevOps en vert, Cybersécurité en bleu)
- [ ] 2 boutons : "Voir mes projets" + "Télécharger CV"
- [ ] 4 stats en bas : 3+ ans, 10+ projets, AWS, M2
- [ ] Animations au chargement fluides

### Navigation
- [ ] Header sticky en haut
- [ ] Logo "Sid.Badji" visible
- [ ] 5 liens : Accueil, Projets, Compétences, À Propos, Contact
- [ ] Bouton "Me contacter" à droite
- [ ] Scroll → Header devient transparent/flou
- [ ] Clic sur lien → Smooth scroll vers section

### Section Projets
- [ ] Titre "Projets Réalisés" + ligne verte
- [ ] 5 filtres : Tous, Réseau, DevOps, Cybersécurité, Web/App
- [ ] 6 cards projets affichées par défaut
- [ ] Chaque card montre : image, catégorie, titre, description, technos
- [ ] Hover sur card → Animation scale + ombre verte
- [ ] Clic sur filtre → Grid se filtre avec animation
- [ ] Badge status : "TERMINÉ" vert / "EN COURS" jaune animé

### Section Skills
- [ ] Titre "Arsenal Technique"
- [ ] Radar chart à gauche avec 6 axes
- [ ] 4 catégories à droite : Infrastructure, DevOps, Sécurité, Dev
- [ ] Tags cliquables (hover change la couleur)

### Section À Propos
- [ ] Titre "À Propos" avec ligne bleue
- [ ] Bio de 2 paragraphes lisible
- [ ] 2 badges : Localisation + École
- [ ] Timeline à droite avec 3 expériences + 2 formations
- [ ] Points verts (exp) et bleus (formation) visibles

### Section Contact
- [ ] Titre "Restons en Contact"
- [ ] 3 cards de contact : Email, Téléphone, Localisation
- [ ] Icônes GitHub + LinkedIn cliquables
- [ ] Formulaire avec 3 champs : Nom, Email, Message
- [ ] Bouton "Envoyer le message"
- [ ] Soumission affiche alert "Intégration EmailJS en Phase 3"

### Footer
- [ ] Texte copyright avec année actuelle
- [ ] "Built with Next.js & Tailwind CSS"
- [ ] 3 icônes sociales cliquables

---

## 📱 Tests Responsive (Mobile)

### Ouvre DevTools (F12) et passe en mode mobile (iPhone 12 Pro)

- [ ] Hero : Titre passe en 2 lignes
- [ ] Hero : Stats passent en grille 2x2
- [ ] Header : Menu hamburger visible
- [ ] Menu hamburger : Clic ouvre menu overlay
- [ ] Projets : Cards en 1 colonne
- [ ] Skills : Radar chart + liste en 1 colonne
- [ ] About : Bio + timeline en 1 colonne
- [ ] Contact : Infos + form en 1 colonne

---

## ⚡ Tests Performance

### Dans DevTools → Lighthouse

```
Générer rapport Lighthouse (Desktop)
```

**Scores attendus** :
- [ ] Performance : >85
- [ ] Accessibility : >90
- [ ] Best Practices : >90
- [ ] SEO : >90

**⚠️ Si Performance <85** : Normal pour dev build. Le build production (`npm run build`) sera >95.

---

## 🔧 Tests Fonctionnels

### Filtres Projets
1. [ ] Clic "Réseau" → Affiche seulement projets réseau (2-3 projets)
2. [ ] Clic "DevOps" → Affiche seulement projets DevOps (2 projets)
3. [ ] Clic "Tous" → Affiche tous les projets (6)
4. [ ] Animation smooth entre changements de filtre

### Navigation Smooth Scroll
1. [ ] Clic "Projets" → Scroll vers section Projets
2. [ ] Clic "Compétences" → Scroll vers section Skills
3. [ ] Clic "Contact" → Scroll vers formulaire
4. [ ] Scroll fluide (pas de saut)

### Formulaire Contact
1. [ ] Taper nom → Champ accepte input
2. [ ] Taper email invalide → Border rouge (validation HTML5)
3. [ ] Laisser message vide → Bouton désactivé
4. [ ] Remplir tous les champs → Clic Envoyer → Alert s'affiche

### Liens Externes
- [ ] Clic GitHub (header) → Ouvre ton GitHub
- [ ] Clic LinkedIn (footer) → Ouvre ton LinkedIn
- [ ] Clic Email (contact) → Ouvre client mail

---

## 🐛 Tests d'Erreurs

### Console Browser (F12 → Console)
- [ ] Aucune erreur rouge
- [ ] Aucun warning Tailwind
- [ ] Aucune erreur Framer Motion

### Terminal
- [ ] Aucune erreur TypeScript
- [ ] Aucun warning Lint
- [ ] Compilation réussie

---

## 📊 Build Production

### Test du build
```bash
npm run build
```
- [ ] Build se termine sans erreur
- [ ] Message "Compiled successfully"
- [ ] Taille bundle affichée (doit être <500KB pour la page)

### Test du build en production
```bash
npm start
```
- [ ] Serveur démarre sur http://localhost:3000
- [ ] Site fonctionne identique au dev
- [ ] Performance améliorée (Lighthouse >95)

---

## ✅ VALIDATION FINALE

Si tous les checks ci-dessus sont ✅, le projet est prêt pour commit !

### Prochaine étape
```bash
# Arrête le serveur dev (Ctrl+C)
# Suis les instructions dans GITHUB_SETUP.md pour le commit
```

---

## 🆘 Problèmes Courants

### "Cannot find module 'next'"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Tailwind classes ne s'appliquent pas
```bash
rm -rf .next
npm run dev
```

### Recharts ne s'affiche pas
Refresh la page (F5) - c'est un bug connu du dev mode.

---

**Temps estimé pour toute la checklist : 15-20 minutes**

Si tout est ✅, passe à **GITHUB_SETUP.md** ! 🚀
