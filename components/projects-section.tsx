"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectsSectionProps {
  dictionary: any;
}

export function ProjectsSection({ dictionary }: ProjectsSectionProps) {
  const PROJECT_DATA: Project[] = [
    {
      title: dictionary.projects.items.springDistributed.title,
      description: dictionary.projects.items.springDistributed.description,
      image: "/project-spring-boot.jpg",
      technologies: ["Java", "Spring", "RabbitMQ", "Redis", "Docker", "MySQL", "Log4j", "Slf4j"],
      github: "https://github.com/serdarsenturk/spring-distributed-systems",
      demo: "https://github.com/serdarsenturk/spring-distributed-systems",
    },
    {
      title: dictionary.projects.items.javaDistributed.title,
      description: dictionary.projects.items.javaDistributed.description,
      image: "/project-java-microservices.jpg",
      technologies: ["Java", "J2EE", "RESTful API", "MySQL", "Maven", "Postman", "Git"],
      github: "https://github.com/serdarsenturk/java-distributed-systems",
      demo: "https://github.com/serdarsenturk/java-distributed-systems",
    },
    {
      title: dictionary.projects.items.djangoMovie.title,
      description: dictionary.projects.items.djangoMovie.description,
      image: "/project-agile-retrospective.jpg",
      technologies: [
        "Python",
        "Django",
        "MySQL",
        "RESTful API",
        "MVT Architecture",
        "Automated Testing",
      ],
      github: "https://github.com/serdarsenturk/django-movie-rating",
      demo: "https://github.com/serdarsenturk/django-movie-rating",
    },
    {
      title: dictionary.projects.items.easyRetrospective.title,
      description: dictionary.projects.items.easyRetrospective.description,
      image: "/project-scoreboard.jpg",
      technologies: ["Python", "JavaScript", "Flask", "PostgreSQL", "NextJS", "Auth0"],
      github: "https://github.com/serdarsenturk/easyretrospective",
      demo: "https://github.com/serdarsenturk/easyretrospective",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            {dictionary.projects.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
            {dictionary.projects?.subtitle || "A selection of projects showcasing distributed systems, backend development, and full-stack applications. Each project demonstrates different aspects of modern software development."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECT_DATA.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all duration-700 hover:-translate-y-4 animate-fade-in-up group relative border-primary/20 bg-white/90 dark:bg-card/60 backdrop-blur-xl hover:border-primary/40"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700 -z-10 animate-gradient bg-[length:200%_auto]" />
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-700 -z-10" />

              <div className="relative overflow-hidden aspect-video bg-muted/50 rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  className="object-cover w-full h-full group-hover:scale-115 transition-transform duration-700"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-card-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors duration-500 font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground group-hover:text-foreground/90 dark:group-hover:text-foreground transition-colors duration-500 text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full font-medium bg-secondary/80 dark:bg-secondary/60 text-secondary-foreground border border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground dark:hover:text-primary-foreground transition-all duration-500 cursor-default animate-fade-in hover:scale-110 shadow-lg hover:shadow-primary/20"
                      style={{
                        animationDelay: `${index * 0.15 + techIndex * 0.05}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="relative group/btn flex-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-0 group-hover/btn:opacity-60 transition duration-500" />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn relative overflow-hidden border-primary/30 text-muted-foreground hover:text-primary-foreground hover:border-primary bg-transparent hover:bg-primary transition-all duration-500 font-medium text-sm"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2 relative z-10 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-500" />
                        <span className="relative z-10">{dictionary.projects.buttons.viewCode}</span>
                      </a>
                    </Button>
                  </div>
                  <div className="relative group/btn flex-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-40 group-hover/btn:opacity-100 transition duration-500" />
                    <Button
                      size="sm"
                      className="w-full group/btn relative overflow-hidden bg-primary text-white hover:text-white hover:bg-primary/90 transition-all duration-500 shadow-xl hover:shadow-primary/30 font-medium text-sm"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110 transition-all duration-500" />
                        <span className="relative z-10">{dictionary.projects.buttons.liveDemo}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
