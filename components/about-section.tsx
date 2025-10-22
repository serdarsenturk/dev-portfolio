"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Users, Zap } from "lucide-react";
import type { SkillCategory, HighlightItem } from "@/lib/types";

export function AboutSection() {
  const SKILL_CATEGORIES: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C#",
        "JavaScript",
        "TypeScript",
        "SQL",
        "C",
      ],
      featured: true,
    },
    {
      category: "Frameworks & Technologies",
      skills: [
        ".NET Core",
        "ASP.NET Core",
        "Spring Boot",
        "Spring MVC",
        "Angular",
        "AngularJS",
        "React",
        "Next.js",
        "Django",
        "Flask",
        "FastAPI",
        "Hibernate",
        "NHibernate",
        "EF Core",
      ],
      featured: true,
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL",
        "Oracle Database",
        "MySQL",
        "MongoDB",
        "Redis",
        "MS Access",
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Docker",
        "Kubernetes",
        "Git",
        "CI/CD",
        "RabbitMQ",
        "Heroku",
        "Vercel",
        "Microservices",
        "Serverless Architecture",
      ],
    },
    {
      category: "Web Services & APIs",
      skills: [
        "RESTful APIs",
        "SOAP",
        "WebSockets",
        "SignalR",
        "Flask-CORS",
        "Python WSGI",
      ],
    },
    {
      category: "Tools & Methodologies",
      skills: [
        "Maven",
        "Git",
        "Postman",
        "Firebase",
        "Auth0",
        "React-Query",
        "Alembic",
        "TDD",
        "Agile",
        "SOLID Principles",
        "Design Patterns",
        "DDD",
        "FSD Architecture",
        "Microfrontend Architecture",
      ],
    },
  ];

  const HIGHLIGHT_ITEMS: HighlightItem[] = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following OOP and SOLID principles.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building high-performance backend systems and distributed applications.",
    },
    {
      icon: Palette,
      title: "Full-Stack",
      description:
        "Experience in both backend (.NET, Spring) and frontend (Angular, React) development.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in Agile teams with CI/CD and modern development practices.",
    },
  ];



  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary dark:from-foreground dark:to-accent bg-clip-text text-transparent">
                  About Me
                </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/5 dark:shadow-black/20 hover:shadow-primary/30 transition-all duration-500 group/photo">
                <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-3xl opacity-0 group-hover/photo:opacity-40 dark:group-hover/photo:opacity-20 blur-sm transition-all duration-500 -z-10" />
                
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border-4 border-primary/20 dark:border-primary/30 overflow-hidden shadow-2xl group-hover/photo:scale-105 transition-all duration-500">
                    <img 
                      src="/placeholder-user.jpg" 
                      alt="Serdar Senturk" 
                      className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover/photo:text-primary transition-colors duration-500 mb-2">
                    Serdar Senturk
                  </h3>
                  <p className="text-primary font-semibold mb-4 text-sm sm:text-base">
                    Software Developer
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="bg-primary/10 rounded-lg p-2 sm:p-3 group-hover/photo:bg-primary/20 transition-colors duration-300">
                      <div className="font-semibold text-primary">3+ Years</div>
                      <div className="text-muted-foreground">Experience</div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-2 sm:p-3 group-hover/photo:bg-accent/20 transition-colors duration-300">
                      <div className="font-semibold text-accent">BSc</div>
                      <div className="text-muted-foreground">Computer Eng.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              As a passionate Computer Engineering graduate with 3+ years of hands-on experience at P.I Works, 
              I've dedicated my career to crafting robust backend solutions that power real-world applications. 
              My expertise spans modern technologies including C#, .NET Core, Java, Spring Boot, and microservices architecture, 
              with recent focus on full-stack development using Next.js, TypeScript, and mobile development with Expo and React Native.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              What drives me is the challenge of solving intricate problems through clean, maintainable code. 
              I thrive in collaborative environments where I can contribute to meaningful projects while continuously 
              expanding my technical horizons. My commitment to best practices, combined with a growth mindset, 
              makes me a valuable asset to any development team looking to build exceptional software solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {HIGHLIGHT_ITEMS.map((item, index) => (
            <Card
              key={item.title}
              className="p-4 sm:p-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 hover:border-white/40 dark:hover:border-white/30 transition-all duration-700 hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden hover:shadow-2xl shadow-black/5 dark:shadow-black/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/50 dark:to-accent/50 rounded-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur transition-all duration-700 -z-10" />

              <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-card-foreground group-hover:text-primary transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-500">
                {item.description}
              </p>
            </Card>
          ))}
        </div>



        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-primary dark:from-foreground dark:to-accent bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className={`p-4 sm:p-5 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:border-white/40 dark:hover:border-white/30 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up group relative overflow-hidden ${
                  category.featured ? "ring-2 ring-primary/20" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-br from-primary/50 to-accent/50 dark:from-primary dark:to-accent rounded-lg opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-sm transition-all duration-500 -z-10 ${
                    category.featured ? "group-hover:opacity-40" : ""
                  }`}
                />

                <div className="relative z-10">
                  <h4 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {category.category}
                    {category.featured && (
                      <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {category.skills.map((skill, skillIndex) => {
                      const isHighlighted = [
                        "Python",
                        "Java",
                        "C#",
                        ".NET Core",
                        "Spring Boot",
                        "Angular",
                        "PostgreSQL",
                        "Docker",
                        "Microservices",
                        "RESTful APIs",
                      ].includes(skill);
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium bg-secondary/60 dark:bg-secondary/40 text-secondary-foreground border border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground dark:hover:text-primary-foreground hover:scale-110 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 animate-fade-in cursor-default ${
                            isHighlighted
                              ? "ring-1 ring-primary/30 font-semibold"
                              : ""
                          }`}
                          style={{
                            animationDelay: `${
                              categoryIndex * 0.15 + skillIndex * 0.05
                            }s`,
                          }}
                        >
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
