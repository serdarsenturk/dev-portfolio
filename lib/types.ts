// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
}

// Contact types
export interface ContactOption {
  href: string;
  label: string;
}

// Skill category types
export interface SkillCategory {
  category: string;
  skills: string[];
  featured?: boolean;
}

// Highlight item types
export interface HighlightItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Project types
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

// Animation delay types
export interface AnimationDelays {
  TYPING_INTERVAL: number;
  STAGGER_DELAY: number;
  CARD_STAGGER: number;
  CONTACT_STAGGER: number;
}

// Scroll behavior types
export interface ScrollBehavior {
  SMOOTH: "smooth";
  BLOCK_START: "start";
}

// Section ID types
export interface SectionIds {
  ABOUT: "about";
  EDUCATION: "education";
  LANGUAGES: "languages";
  EXPERIENCE: "experience";
  CHARACTER_SHEET: "character-sheet";
  PROJECTS: "projects";
  CONTACT: "contact";
}

// Developer info types
export interface DeveloperInfo {
  TITLE: string;
  EMAIL: string;
  GITHUB_URL: string;
  LINKEDIN_URL: string;
}

// Education types
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

// Language types
export interface Language {
  name: string;
  level: string;
  proficiency: number; // 1-5 scale
}

// RPG Character System Types
export interface CharacterAttribute {
  name: string;
  value: number;
  modifier: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  name: string;
  level: number; // 1-20 scale (like D&D/Pathfinder)
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isProficient: boolean;
  bonus?: number;
}

export interface CharacterClass {
  name: string;
  level: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface CharacterRace {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bonuses: string[];
}

export interface CharacterSheet {
  attributes: CharacterAttribute[];
  skills: Skill[];
  class: CharacterClass;
  race: CharacterRace;
  level: number;
  experience: number;
  experienceToNext: number;
}
