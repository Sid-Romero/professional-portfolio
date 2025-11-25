import { Project, Experience, Education, SkillData, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Sidya Badji",
  title: "Ingénieur DevOps & Cybersécurité",
  subtitle: "M2 STRI - Spécialiste Réseaux & Cloud",
  email: "badjisidya@yahoo.com",
  phone: "+33 6 56 69 60 06",
  location: "Toulouse, France",
  github: "https://github.com/Sid-Romero",
  linkedin: "https://www.linkedin.com/in/el-hadji-sidya-badji-35a647264/",
  medium: "https://medium.com/@badjisidya",
  bio: "Élève-ingénieur en M2 STRI, passionné par l'automatisation, la sécurité et l'architecture Cloud. J'ai une double compétence en Infrastructure Réseau (Cisco, pfSense) et en DevOps (Kubernetes, Ansible, CI/CD). Je conçois des systèmes robustes, documentés et reproductibles."
};

export const skillsData: SkillData[] = [
  { subject: 'DevOps & CI/CD', A: 90, fullMark: 100 },
  { subject: 'Réseaux', A: 88, fullMark: 100 },
  { subject: 'Cloud (AWS)', A: 82, fullMark: 100 },
  { subject: 'Sécurité', A: 80, fullMark: 100 },
  { subject: 'Développement', A: 75, fullMark: 100 },
  { subject: 'IaC & Automation', A: 87, fullMark: 100 },
];

export const skillCategories = {
  infrastructure: {
    title: "Infrastructure & Réseau",
    icon: "Server",
    color: "blue",
    skills: [
      { name: "Cisco IOS", level: "Avancé", description: "Routing OSPF/BGP, VRF, QoS" },
      { name: "pfSense", level: "Avancé", description: "Firewalling, VPN, HAProxy" },
      { name: "WireGuard/IPsec", level: "Intermédiaire", description: "VPN site-à-site, performance tuning" },
      { name: "Linux (RHEL/Debian)", level: "Avancé", description: "Administration système, scripting" },
      { name: "EVE-NG", level: "Avancé", description: "Virtualisation réseau, labs complexes" },
      { name: "Bash/Python", level: "Avancé", description: "Automation réseau, scripts" }
    ]
  },
  devops: {
    title: "DevOps & Cloud",
    icon: "Cloud",
    color: "emerald",
    skills: [
      { name: "AWS", level: "Intermédiaire", description: "EC2, RDS, S3, Lambda, VPC" },
      { name: "Docker", level: "Avancé", description: "Containerisation, multi-stage builds" },
      { name: "Kubernetes", level: "Intermédiaire", description: "Orchestration, Helm, monitoring" },
      { name: "Ansible", level: "Avancé", description: "Configuration management, playbooks" },
      { name: "Terraform", level: "Intermédiaire", description: "IaC, modules, state management" },
      { name: "GitLab CI/CD", level: "Avancé", description: "Pipelines, Auto DevOps" },
      { name: "Jenkins", level: "Intermédiaire", description: "Pipelines declaratifs, agents" },
      { name: "Prometheus/Grafana", level: "Avancé", description: "Monitoring, alerting, dashboards" }
    ]
  },
  security: {
    title: "Sécurité & Conformité",
    icon: "Shield",
    color: "purple",
    skills: [
      { name: "Segmentation Réseau", level: "Avancé", description: "VLANs, DMZ, zero-trust" },
      { name: "Firewalling", level: "Avancé", description: "pfSense, iptables, ACLs" },
      { name: "IAM", level: "Intermédiaire", description: "AWS IAM, RBAC, policies" },
      { name: "PKI/Certificats", level: "Intermédiaire", description: "Let's Encrypt, CA interne" },
      { name: "Pentesting Basics", level: "Débutant", description: "Nmap, Metasploit, reconnaissance" }
    ]
  },
  development: {
    title: "Développement",
    icon: "Code",
    color: "orange",
    skills: [
      { name: "Python", level: "Avancé", description: "Scripting, automation, Django" },
      { name: "Go", level: "Intermédiaire", description: "Microservices, CLIs" },
      { name: "Java/Spring Boot", level: "Intermédiaire", description: "APIs REST, microservices" },
      { name: "JavaScript/React", level: "Intermédiaire", description: "Frontend, Next.js" },
      { name: "SQL/PostgreSQL", level: "Avancé", description: "Modélisation, optimisation" },
      { name: "Git", level: "Avancé", description: "Workflows, branching strategies" }
    ]
  }
};
export const experiences: Experience[] = [
  {
    id: "1",
    role: "DevOps / Cloud & Solution Architect",
    company: "UPSILON (Intervenant)",
    location: "Toulouse",
    period: "Mai 2024 - Présent",
    description: [
      "Conception et mise en place de l'architecture cloud d'une plateforme IoT de supervision énergétique.",
      "Mise en place CI/CD (GitLab), conteneurisation microservices, orchestration automatisée.",
      "Observabilité (logs/métriques/alertes) et conformité IAM sur AWS."
    ],
    skills: ["AWS", "GitLab CI", "Microservices", "IoT", "IAM"]
  },
  {
    id: "2",
    role: "Stage – Full Stack & Automatisation DevOps",
    company: "Convergence Informatique Statistique",
    location: "Sénégal",
    period: "Juillet 2023",
    description: [
      "Développement d'une application cross-platform de suivi de résultats sportifs.",
      "Mise en place chaîne CI/CD Jenkins pour automatisation tests et build Docker.",
      "Orchestration Kubernetes et automatisation Ansible."
    ],
    skills: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Full Stack"]
  },
  {
    id: "3",
    role: "Projet d'ingénierie - Automatisation Réseau",
    company: "Projet Académique",
    location: "Toulouse",
    period: "Décembre 2024",
    description: [
      "Automatisation complète d'une infrastructure réseau hybride inspirée du parcours Cisco DevNet.",
      "Provisionnement IaC, tests réseaux continus avec pyATS/Genie.",
      "Simulation environnement Prod/Staging."
    ],
    skills: ["Cisco DevNet", "pyATS", "IaC", "Python"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Diplôme d'ingénieur en Réseaux & Télécommunications",
    school: "UPSSITECH – Université Toulouse III",
    period: "2023 - 2026",
    details: "Architecture réseau, sécurisation, cloud-native, CI/CD, supervision."
  },
  {
    id: "2",
    degree: "DUT Informatique",
    school: "École Supérieure Polytechnique de Dakar (ESP)",
    period: "2021 - 2023",
    details: "Développement full stack, administration système, introduction DevOps."
  }
];

export const projects: Project[] = [
  {
    id: "eve-ng-labs",
    title: "EVE-NG Enterprise Labs",
    category: "Réseau",
    status: "Terminé",
    description: "Série de labs réseau niveau entreprise couvrant VLAN, routing, BGP, VRF.",
    fullDescription: "Une collection complète de laboratoires virtuels simulant des réseaux d'entreprise complexes. L'objectif est de démontrer la maîtrise des protocoles de routage avancés et de la segmentation réseau dans un environnement contrôlé.",
    technologies: ["EVE-NG", "Cisco IOS", "Juniper", "OSPF", "BGP", "VRF"],
    thumbnail: "https://picsum.photos/600/400?grayscale",
    githubUrl: "https://github.com/Sid-Romero/eve-ng-enterprise-labs",
    demoUrl: "#",
    highlights: [
      "Configuration de VRFs pour isolation multi-tenant",
      "Implémentation de BGP avec route filtering",
      "Tests de performance et latence documentés"
    ],
    context: "La majorité des projets d'infrastructure ne sont pas visibles en ligne. Ce projet vise à rendre tangible mes compétences en architecture réseau via des topologies interactives et des vidéos.",
    challenges: "Gestion des ressources CPU/RAM pour simuler plus de 20 routeurs virtuels simultanément."
  },
  {
    id: "lyratech-net",
    title: "LyraTech Network Segmentation",
    category: "Réseau",
    status: "Terminé",
    description: "Segmentation réseau complète avec pfSense, Cisco L3 et Active Directory.",
    fullDescription: "Conception et implémentation d'une segmentation réseau sécurisée pour une entreprise fictive (LyraTech). Séparation des flux critiques, utilisateurs et invités.",
    technologies: ["pfSense", "Cisco L3", "Active Directory", "VLAN", "Firewalling"],
    thumbnail: "https://picsum.photos/600/401?grayscale",
    githubUrl: "https://github.com/Sid-Romero/lyratech-enterprise-network-segmentation",
    highlights: [
      "Diagrammes Visio/Draw.io détaillés",
      "Politiques de firewall strictes entre VLANs",
      "Intégration AD pour l'authentification"
    ],
    context: "Répondre à un besoin de sécurisation interne pour limiter la propagation latérale en cas de cyberattaque.",
    architecture: "Architecture en couches (Core, Distribution, Access) avec DMZ pour les services exposés."
  },
  {
    id: "slo-guard",
    title: "SLO-Guard Platform",
    category: "DevOps",
    status: "En cours",
    description: "Plateforme SaaS de livraison basée sur les SLO avec Kubernetes.",
    fullDescription: "Une plateforme de démonstration montrant comment utiliser les Service Level Objectives (SLO) pour piloter les déploiements (Canary Deployments). Si le budget d'erreur est consommé, le déploiement est stoppé.",
    technologies: ["Kubernetes", "Prometheus", "Grafana", "Go", "Helm"],
    thumbnail: "https://picsum.photos/600/402?grayscale",
    githubUrl: "https://github.com/Sid-Romero/slo-guard-platform",
    highlights: [
      "Déploiement Canary automatisé",
      "Monitoring en temps réel des Error Budgets",
      "Rollback automatique en cas de dégradation"
    ],
    context: "Démontrer l'approche SRE dans le cycle de vie du développement logiciel.",
    challenges: "Configuration fine des règles Prometheus pour détecter les anomalies rapidement sans faux positifs."
  },
  {
    id: "bourse-rest",
    title: "Stock Exchange REST API",
    category: "Web/App",
    status: "Terminé",
    description: "Backend robuste microservices pour la gestion temps réel d'actions.",
    technologies: ["Java", "Spring Boot", "RabbitMQ", "Redis", "PostgreSQL"],
    thumbnail: "https://picsum.photos/600/403?grayscale",
    githubUrl: "https://github.com/Sid-Romero/bourse-rest-service",
    highlights: [
      "Architecture orientée événements avec RabbitMQ",
      "Cache Redis pour latence < 50ms",
      "Documentation Swagger complète"
    ]
  },
  {
    id: "vpn-lab",
    title: "VPN WireGuard vs IPsec",
    category: "Cybersécurité",
    status: "Terminé",
    description: "Comparatif de performance et sécurité site-à-site.",
    technologies: ["WireGuard", "IPsec", "FRRouting", "Linux", "Benchmark"],
    thumbnail: "https://picsum.photos/600/404?grayscale",
    githubUrl: "https://github.com/Sid-Romero/vpn-lab-wireguard-ipsec",
    highlights: [
      "Benchmark throughput et latence",
      "Configuration automatisée via Ansible",
      "Analyse des paquets chiffrés"
    ],
    context: "Évaluer la viabilité de WireGuard comme remplaçant moderne d'IPsec pour les tunnels site-à-site."
  },
  {
    id: "metrics-dashboard",
    title: "Metrics Dashboard SaaS",
    category: "DevOps",
    status: "En cours",
    description: "Dashboard d'observabilité écrit en Go.",
    technologies: ["Go", "AWS", "DigitalOcean", "React"],
    thumbnail: "https://picsum.photos/600/405?grayscale",
    githubUrl: "https://github.com/Sid-Romero/metrics-dashboard-saas",
    highlights: [
      "Collecte de métriques custom",
      "Hébergement sur App Platform",
      "Interface React minimaliste"
    ]
  }
];
