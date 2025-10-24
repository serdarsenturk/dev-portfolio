"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceSectionProps {
  dictionary: {
    experience: {
      title: string;
      subtitle: string;
      description: string;
      positions: {
        juniorDeveloper: string;
        intern: string;
      };
      companies: {
        piWorks: string;
      };
      descriptions: {
        juniorDeveloper: string;
        intern: string;
      };
    };
  };
}

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
  const experiences = [
    {
      title: dictionary.experience.positions.juniorDeveloper,
      company: dictionary.experience.companies.piWorks,
      period: "Oct 2022 - Mar 2025",
      description: dictionary.experience.descriptions.juniorDeveloper,
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET Core",
        "Angular",
        "PostgreSQL",
        "Oracle",
        "Docker",
        "Kubernetes",
        "SignalR",
      ],
    },
    {
      title: dictionary.experience.positions.intern,
      company: dictionary.experience.companies.piWorks,
      period: "Jun 2022 - Sep 2022",
      description: dictionary.experience.descriptions.intern,
      technologies: [
        "ASP.NET Core",
        "Angular",
        "NHibernate",
        "Kubernetes",
        "Ocelot API Gateway",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-3 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {dictionary.experience.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
            {dictionary.experience.description}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className="p-4 sm:p-5 md:p-6 bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border-border text-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                >
                  <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1 sm:mr-1.5" />
                  {exp.period}
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground mb-3 leading-relaxed transition-colors duration-300">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {exp.technologies.map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full font-medium bg-secondary/60 dark:bg-secondary/40 text-secondary-foreground border-0 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
