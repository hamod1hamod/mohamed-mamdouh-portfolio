/**
 * Mohamed Mamdouh Mohib - Official Projects Database
 * Communication and Electronics Engineering Student
 * Featuring Mohamed's real production projects on GitHub:
 * 1. CardioGem
 * 2. MMStore
 * 3. Hamosphere (hamomap / MindForge AI)
 */

const portfolioProjects = [
  {
    id: "cardio-gem",
    title: "CardioGem — AI Fitness & Nutrition Platform",
    tagline: "Science-backed exercise guides, verified video library, deterministic energy calculators & AI coaching",
    category: "ai-health",
    categoryLabel: "AI & Health Tech",
    badge: "Live on GitHub Pages",
    liveUrl: "https://hamod1hamod.github.io/CardioGem/",
    githubUrl: "https://github.com/hamod1hamod/CardioGem",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    description: "CardioGem is a production-grade, intelligent wellness and fitness web platform. It empowers individuals with biomechanically verified exercise execution steps, embedded YouTube demonstrations across 15+ muscle groups, clinical energy calculations (Mifflin–St Jeor BMR, TDEE, METs, BMI), custom workout generators, and an interactive AI fitness coach.",
    highlights: [
      "Anonymous-first architecture: complete access without mandatory registration, with browser local persistence",
      "Curated 15-muscle group exercise library with verified YouTube biomechanical demonstrations",
      "Deterministic clinical formulas: Mifflin–St Jeor BMR, METs active calorie burn, and sports nutrition macro distribution",
      "Intelligent routine and diet plan generator with personalized export and localized Egyptian staples",
      "Integrated AI Fitness Coach generating logical and contextual training guidance"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite", "Gemini AI", "Chart.js", "YouTube API"]
  },
  {
    id: "mmstore",
    title: "MMStore — 3D Shoes & Fashion E-Commerce Platform",
    tagline: "Commercial 3D fashion store on live domain with Three.js simulation, WhatsApp checkout & AI Growth Agent",
    category: "ecommerce-3d",
    categoryLabel: "3D E-Commerce & Web",
    badge: "Live on mmstore.me",
    liveUrl: "https://mmstore.me/",
    githubUrl: "https://github.com/hamod1hamod/my-shoes-store",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "A production full-stack commercial e-commerce storefront deployed on the custom live domain mmstore.me. Combines interactive 3D shoe inspection using Three.js orbit controls, an ambient particle system, an automated Arabic WhatsApp checkout flow, an isolated password-protected secret admin dashboard (/hamoood/), and an autonomous AI social media marketing growth agent.",
    highlights: [
      "Live custom domain mmstore.me with automated SSL and Progressive Web App (PWA) installability",
      "Interactive 3D model visualization with Three.js orbit controls, real-time lighting, and 360° product inspection",
      "One-click smart WhatsApp checkout formatting complete customer delivery details sent directly to +201098641398",
      "Isolated secret admin dashboard (/hamoood/) secured by master password authentication for real-time inventory management",
      "Integrated autonomous AI Social Media Growth Agent (hamod1hamod/mmstore-ai-growth-agent) for automated social marketing"
    ],
    techStack: ["TypeScript", "React / Next.js", "Three.js (3D)", "Firebase / Firestore", "Tailwind CSS", "PWA", "Node.js"]
  },
  {
    id: "hamosphere",
    title: "Hamosphere (MindForge AI) — Cognitive Mind Mapping",
    tagline: "Advanced AI-powered knowledge graph visualizer, 7+ topologies & SuperMemo SM-2 spaced repetition",
    category: "knowledge-ai",
    categoryLabel: "Cognitive AI & EdTech",
    badge: "Live on GitHub Pages",
    liveUrl: "https://hamod1hamod.github.io/hamomap/",
    githubUrl: "https://github.com/hamod1hamod/hamomap",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80",
    description: "Hamosphere (hamomap / MindForge AI) is an advanced cognitive learning and visual knowledge system. It transforms complex topics into structured, interactive mind maps with 7+ layout topologies, active recall concealment, scientific SuperMemo SM-2 spaced repetition scheduling, AI quiz generation, and robust Firebase Cloud Firestore synchronization.",
    highlights: [
      "7+ dynamic mind map topologies: Traditional Curved, Radial concentric, Hierarchical Tree, Concept Map, and Cornell Notes",
      "Cognitive memorization suite: SuperMemo SM-2 spaced repetition engine, active recall concealment, and blurting mode",
      "AI-Powered Learning Assistant: Automated Text-to-MindMap conversion and multi-level cognitive concept explanations",
      "Firebase cloud architecture: Authentication (Email/Google/Guest), Cloud Firestore collections, and audited security rules",
      "Keyboard shortcuts navigation, KaTeX mathematical formula rendering, and exportable mind maps"
    ],
    techStack: ["TypeScript", "React", "Firebase", "Cloud Firestore", "Gemini AI", "KaTeX (LaTeX)", "Tailwind CSS"]
  }
];

// Profile data for Mohamed Mamdouh Mohib
const profileData = {
  name: "Mohamed Mamdouh Mohib",
  role: "Communication & Electronics Engineering Student",
  specialties: ["Programming", "Industrial Intelligence", "Cybersecurity", "Full-Stack AI Web"],
  bio: "Communication and Electronics Engineering student passionate about software programming, industrial intelligence, and cybersecurity. Creator of production AI and web platforms including CardioGem, MMStore (mmstore.me), and Hamosphere.",
  contact: {
    whatsappNumber: "+201098641398",
    whatsappClean: "201098641398",
    whatsappUrl: "https://wa.me/201098641398?text=Hello%20Mohamed,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
    instagramUrl: "https://www.instagram.com/muhammad_mamdou7?psln=MW44ZTdmd2xsOWNkeA%3D%3D&utm_source=qr",
    instagramHandle: "@muhammad_mamdou7",
    githubUrl: "https://github.com/hamod1hamod",
    githubHandle: "hamod1hamod",
    location: "Egypt",
    email: "doutrr246@gmail.com"
  },
  stats: [
    { label: "Featured Live Projects", value: "3" },
    { label: "Production Platforms", value: "100%" },
    { label: "Tech Stack Tools", value: "15+" },
    { label: "GitHub Commits", value: "300+" }
  ],
  skills: {
    industrialAI: [
      "Gemini AI Integration & Prompt Engineering",
      "Computer Vision & Media Processing",
      "AI Growth Agents & Autonomous Workflows",
      "Edge Computing & Predictive Algorithms",
      "Chart.js & Data Analytics Telemetry"
    ],
    cybersecurity: [
      "Secret Endpoint Isolation & Authentication",
      "Firebase Cloud Security Rules & Granular RBAC",
      "Network Protocol Security & SSL Enforce",
      "Zero-Knowledge & Client-Side Privacy",
      "Vulnerability Hardening & Secure Storage"
    ],
    electronicsComms: [
      "Communication Protocols & Network Architectures",
      "Digital Signal Processing (DSP) Principles",
      "Microcontrollers & Embedded Hardware Systems",
      "Sensor Telemetry & IoT Architecture",
      "PCB Design & Hardware-Software Interfaces"
    ],
    softwareEng: [
      "TypeScript & JavaScript (Modern ES6+)",
      "React, Next.js & Vite Ecosystem",
      "Three.js & WebGL 3D Interactive Rendering",
      "Firebase (Auth, Firestore, Cloud Functions, Storage)",
      "Git, GitHub Actions & GitHub Pages Deployment"
    ]
  }
};
