import type {
  AnimationDelays,
  ScrollBehavior,
  SectionIds,
  DeveloperInfo,
  NavigationItem,
  ContactOption,
  CharacterSheet,
} from "./types";
import {
  Brain,
  Zap,
  Shield,
  Heart,
  Eye,
  Users,
  Code,
  Database,
  GitBranch,
  Layers,
  Cpu,
  Server,
  Monitor,
  Cloud,
  GitCommit,
  Container,
  Network,
} from "lucide-react";

// Animation and timing constants
export const ANIMATION_DELAYS: AnimationDelays = {
  TYPING_INTERVAL: 100,
  STAGGER_DELAY: 0.1,
  CARD_STAGGER: 0.15,
  CONTACT_STAGGER: 0.1,
} as const;

// Scroll behavior constants
export const SCROLL_BEHAVIOR: ScrollBehavior = {
  SMOOTH: "smooth" as const,
  BLOCK_START: "start" as const,
} as const;

// Section IDs
export const SECTION_IDS: SectionIds = {
  ABOUT: "about",
  EDUCATION: "education",
  LANGUAGES: "languages",
  EXPERIENCE: "experience",
  CHARACTER_SHEET: "character-sheet",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

// Developer information
export const DEVELOPER_INFO: DeveloperInfo = {
  // Personal Information
  NAME: "Serdar Senturk",
  TITLE: "Software Developer",
  EMAIL: "serdarsenturk@windowslive.com",
  PHONE: "+90 533 466 9941",

  // Social Links
  GITHUB_URL: "https://github.com/serdarsenturk",
  LINKEDIN_URL: "https://www.linkedin.com/in/serdarsenturk",

  // Professional Information
  PROFESSION: "Full-Stack Developer",
  SPECIALIZATION: "Backend Development, Microservices, Cloud Architecture",
  EXPERIENCE_YEARS: "3+ years",
  LOCATION: "Turkey",

  // Contact Response
  RESPONSE_TIME: "Usually within 24 hours",

  // Additional Information
  BIO_SHORT: "Creative developer crafting beautiful digital experiences",
  BIO_LONG:
    "Passionate about building scalable applications and solving complex problems with elegant solutions. I love working with modern technologies and creating user-friendly experiences.",

  // Skills Summary
  PRIMARY_SKILLS: [
    "Backend Development",
    "Microservices",
    "Cloud Architecture",
    "Full-Stack Development",
  ],
  TECHNOLOGIES: [
    "C#",
    "TypeScript",
    "Angular",
    ".NET Core",
    "PostgreSQL",
    "Docker",
    "Azure",
  ],

  // Availability
  AVAILABILITY: "Open to new opportunities",
  PREFERRED_LOCATION: "Remote or Istanbul, Turkey",
} as const;

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "navigation.about", href: `#${SECTION_IDS.ABOUT}` },
  { label: "navigation.experience", href: `#${SECTION_IDS.EXPERIENCE}` },
  { label: "navigation.skills", href: `#${SECTION_IDS.CHARACTER_SHEET}` },
  { label: "navigation.projects", href: `#${SECTION_IDS.PROJECTS}` },
  { label: "navigation.education", href: `#${SECTION_IDS.EDUCATION}` },
  { label: "navigation.languages", href: `#${SECTION_IDS.LANGUAGES}` },
  { label: "navigation.contact", href: `#${SECTION_IDS.CONTACT}` },
] as const;

// Contact options - will be imported with icons in components
export const CONTACT_OPTIONS: ContactOption[] = [
  {
    href: DEVELOPER_INFO.GITHUB_URL,
    label: "GitHub",
  },
  {
    href: DEVELOPER_INFO.LINKEDIN_URL,
    label: "LinkedIn",
  },
  {
    href: `mailto:${DEVELOPER_INFO.EMAIL}`,
    label: "Email",
  },
] as const;

// RPG Character Data
export const CHARACTER_DATA: CharacterSheet = {
  level: 15,
  experience: 8500,
  experienceToNext: 10000,

  attributes: [
    {
      name: "Intelligence",
      value: 18,
      modifier: 4,
      description: "Problem-solving and analytical thinking",
      icon: Brain,
    },
    {
      name: "Dexterity",
      value: 16,
      modifier: 3,
      description: "Precision in coding and UI/UX design",
      icon: Zap,
    },
    {
      name: "Constitution",
      value: 14,
      modifier: 2,
      description: "Endurance for long coding sessions",
      icon: Heart,
    },
    {
      name: "Wisdom",
      value: 15,
      modifier: 2,
      description: "Experience and decision-making",
      icon: Eye,
    },
    {
      name: "Charisma",
      value: 13,
      modifier: 1,
      description: "Team collaboration and communication",
      icon: Users,
    },
    {
      name: "Strength",
      value: 12,
      modifier: 1,
      description: "Debugging and problem-solving persistence",
      icon: Shield,
    },
  ],

  skills: [
    // Programming Languages
    {
      name: "C#",
      level: 18,
      category: "Programming",
      description: "Backend development with .NET Core",
      icon: Code,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "TypeScript",
      level: 17,
      category: "Programming",
      description: "Modern web development",
      icon: Code,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "JavaScript",
      level: 16,
      category: "Programming",
      description: "Frontend and full-stack development",
      icon: Code,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "Python",
      level: 14,
      category: "Programming",
      description: "Data analysis and automation",
      icon: Code,
      isProficient: true,
      bonus: 1,
    },
    {
      name: "Java",
      level: 12,
      category: "Programming",
      description: "Enterprise applications",
      icon: Code,
      isProficient: true,
      bonus: 1,
    },

    // Frameworks & Libraries
    {
      name: "Angular",
      level: 17,
      category: "Frontend",
      description: "Enterprise-grade frontend framework",
      icon: Monitor,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "React",
      level: 15,
      category: "Frontend",
      description: "Component-based UI development",
      icon: Monitor,
      isProficient: true,
      bonus: 1,
    },
    {
      name: ".NET Core",
      level: 18,
      category: "Backend",
      description: "Cross-platform backend development",
      icon: Server,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "ASP.NET Core",
      level: 17,
      category: "Backend",
      description: "Web API and MVC development",
      icon: Server,
      isProficient: true,
      bonus: 2,
    },

    // Databases
    {
      name: "PostgreSQL",
      level: 16,
      category: "Database",
      description: "Advanced relational database management",
      icon: Database,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "Oracle",
      level: 15,
      category: "Database",
      description: "Enterprise database systems",
      icon: Database,
      isProficient: true,
      bonus: 1,
    },
    {
      name: "SQL",
      level: 17,
      category: "Database",
      description: "Complex query optimization",
      icon: Database,
      isProficient: true,
      bonus: 2,
    },

    // DevOps & Cloud
    {
      name: "Docker",
      level: 16,
      category: "DevOps",
      description: "Containerization and deployment",
      icon: Container,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "Kubernetes",
      level: 15,
      category: "DevOps",
      description: "Container orchestration",
      icon: Network,
      isProficient: true,
      bonus: 1,
    },
    {
      name: "CI/CD",
      level: 14,
      category: "DevOps",
      description: "Automated deployment pipelines",
      icon: GitCommit,
      isProficient: true,
      bonus: 1,
    },
    {
      name: "Azure",
      level: 13,
      category: "Cloud",
      description: "Microsoft cloud platform",
      icon: Cloud,
      isProficient: true,
      bonus: 1,
    },

    // Architecture & Design
    {
      name: "Microservices",
      level: 16,
      category: "Architecture",
      description: "Distributed system design",
      icon: Layers,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "API Design",
      level: 17,
      category: "Architecture",
      description: "RESTful and GraphQL APIs",
      icon: Network,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "System Design",
      level: 15,
      category: "Architecture",
      description: "Scalable system architecture",
      icon: Cpu,
      isProficient: true,
      bonus: 1,
    },

    // Tools & Technologies
    {
      name: "Git",
      level: 16,
      category: "Tools",
      description: "Version control and collaboration",
      icon: GitBranch,
      isProficient: true,
      bonus: 2,
    },
    {
      name: "SignalR",
      level: 15,
      category: "Tools",
      description: "Real-time communication",
      icon: Zap,
      isProficient: true,
      bonus: 1,
    },
    {
      name: "NHibernate",
      level: 14,
      category: "Tools",
      description: "Object-relational mapping",
      icon: Database,
      isProficient: true,
      bonus: 1,
    },
  ],

  class: {
    name: "Full-Stack Developer",
    level: 15,
    description:
      "A versatile developer skilled in both frontend and backend technologies, capable of building complete applications from database to user interface.",
    icon: Code,
    color: "text-blue-500",
  },

  race: {
    name: "Human",
    description:
      "Adaptable and versatile, humans excel in multiple areas and can quickly learn new technologies.",
    icon: Users,
    bonuses: [
      "+1 to all skill checks",
      "Bonus feat: Rapid Learning",
      "Versatile skill progression",
    ],
  },
} as const;
