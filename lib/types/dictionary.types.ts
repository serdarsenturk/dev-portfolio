export interface Dictionary {
  navigation: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    languages: string;
    contact: string;
    download: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    viewProjects: string;
    getInTouch: string;
    available: string;
    subtitle1: string;
    subtitle2: string;
  };
  education: {
    title: string;
    subtitle: string;
    institution: string;
    period: string;
    degree: string;
    keyAreas: string;
    badge: string;
    description: string;
    degreeType: string;
    focusAreas: string;
    graduationDescription: string;
    areas: {
      softwareEngineering: string;
      algorithmDesign: string;
      distributedSystems: string;
      databaseManagement: string;
      objectOrientedProgramming: string;
      systemArchitecture: string;
    };
  };
  languages: {
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    proficiencyLevel: string;
    proficiencyLabel: string;
    proficiency: {
      native: string;
      fluent: string;
      advanced: string;
      intermediate: string;
      basic: string;
      beginner: string;
    };
    languageNames: {
      turkish: string;
      english: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    buttons: {
      viewCode: string;
      liveDemo: string;
    };
    items: {
      breakaway: {
        title: string;
        description: string;
      };
      springDistributed: {
        title: string;
        description: string;
      };
      javaDistributed: {
        title: string;
        description: string;
      };
      djangoMovie: {
        title: string;
        description: string;
      };
      easyRetrospective: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    sendMessage: string;
    success: string;
    error: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
    };
    form: {
      placeholder: string;
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
    };
    badge: string;
    connectWithMe: string;
    responseTime: string;
    responseTimeValue: string;
    messageSent: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
}
