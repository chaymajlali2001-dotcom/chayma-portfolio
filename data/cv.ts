export const profile = {
  name: "Chayma Jlali",
  role: "Développeuse Full-Stack",
  location: "Tunisie",
  email: "chaymajlali2001@gmail.com",
  phone: "+216 46 566 325",
  linkedin: "linkedin.com/in/chayma-jlali",
  linkedinUrl: "https://linkedin.com/in/chayma-jlali",
  github: "github.com/chaymajlali",
  githubUrl: "https://github.com/chaymajlali",
  summary:
    "Ingénieure en développement full-stack, je conçois et développe des applications web robustes, de l'interface utilisateur à l'infrastructure. Mon expérience couvre la construction de systèmes de gestion métier, d'API REST et de solutions intégrant l'intelligence artificielle, acquise au sein d'équipes en France et en Tunisie. J'accorde une attention constante à la qualité du code, à la fiabilité des systèmes et à l'autonomie dans la conduite de projets.",
};

export type Experience = {
  role: string;
  org: string;
  project: string;
  place: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Développeuse Full-Stack (React / Symfony)",
    org: "Digyra Tech",
    project: "ERP pour une entreprise agroalimentaire spécialisée dans la transformation de dattes",
    place: "Tunis, Tunisie",
    period: "2025 — 2026",
    points: [
      "Conception et développement full-stack en solo d'un ERP complet (Symfony 7 / API Platform 4, React / TypeScript).",
      "Développement de composants React réutilisables consommant les API Symfony.",
      "Développement d'un microservice IA de prédiction des pertes de production.",
      "Mise en place d'une architecture conteneurisée avec pipelines CI/CD.",
    ],
    stack: ["Symfony 7", "API Platform 4", "React", "TypeScript", "Vite", "PostgreSQL", "Redis", "Python", "Flask", "Docker", "GitHub Actions"],
  },
  {
    role: "Développeuse Backend",
    org: "ReeWayy",
    project: "Plateforme ERP — module de gestion des stocks",
    place: "Île-de-France, France",
    period: "Juil. 2025 — Août 2025",
    points: [
      "Développement du module de gestion des stocks pour le MVP d'un ERP.",
      "Création d'API REST avec Spring Boot pour les fonctionnalités métier.",
      "Modélisation des données avec PostgreSQL via Spring Data JPA et Hibernate.",
      "Rédaction de tests unitaires et d'intégration avec JUnit et Mockito.",
    ],
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "JUnit", "Mockito"],
  },
  {
    role: "Stagiaire, Département Informatique",
    org: "Société Tunisienne de Banque (STB)",
    project: "Stage d'observation",
    place: "Tunis, Tunisie",
    period: "Août 2024",
    points: [
      "Découverte de l'infrastructure et des processus du système d'information bancaire.",
      "Observation de la gestion technique, du support utilisateur et de la sécurité des données.",
    ],
    stack: [],
  },
  {
    role: "Projet de Fin d'Études (Licence)",
    org: "Les Ciments de Bizerte",
    project: "Automatisation d'une station de stockage",
    place: "Bizerte, Tunisie",
    period: "2023",
    points: [
      "Conception et programmation d'un système automatisé (GRAFCET) sur automate Siemens S7-300.",
      "Développement d'une interface de supervision pour le suivi des opérations.",
    ],
    stack: ["Siemens S7-300", "TIA Portal", "WinCC Flexible", "GRAFCET"],
  },
];

export type AcademicProject = {
  title: string;
  description: string;
  stack: string[];
};

export const academicProjects: AcademicProject[] = [
  {
    title: "Application Web de Gestion de Recrutement",
    description:
      "Gestion des candidatures avec interface admin sécurisée et gestion des rôles.",
    stack: ["Spring Boot", "REST", "MySQL", "Thymeleaf"],
  },
  {
    title: "Deep Learning — Détection de maladies de la pomme de terre",
    description:
      "Modèle CNN de classification à partir d'images, avec application mobile de détection en temps réel.",
    stack: ["TensorFlow", "CNN", "FastAPI", "React Native", "GCP"],
  },
];

export const skills = {
  "Front-End": ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Vite"],
  "Back-End": ["Symfony", "API Platform", "PHP", "API REST"],
  "Bases de données": ["PostgreSQL", "MongoDB"],
  "DevOps & outils": ["Docker", "Git", "GitHub Actions (CI/CD)"],
  "Méthodes": ["Agile/Scrum", "Conception d'API", "Autonomie"],
};

export const education = [
  {
    degree: "Diplôme National d'Ingénieur — Génie Logiciel",
    school: "TEK-UP",
    place: "Ariana, Tunisie",
    period: "Oct. 2023 — Juin 2026",
  },
  {
    degree: "Licence en Automatique et Informatique Industrielle",
    school: "Faculté des Sciences de Bizerte",
    place: "Bizerte, Tunisie",
    period: "Sept. 2020 — Juin 2023",
  },
  {
    degree: "Baccalauréat Sciences Techniques",
    school: "Lycée Tayeb Mhiri",
    place: "Nabeul, Tunisie",
    period: "2020",
  },
];

export const certifications = [
  "Scrum Agile (2025)",
  "OCI Certified Generative AI Professional (2025)",
  "OCI Foundations Associate (2025)",
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Professionnel" },
  { name: "Italien", level: "Intermédiaire" },
];