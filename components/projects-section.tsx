"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Spring Distributed Systems",
      description:
        "Movie Rating System implementation with Distributed Systems using Spring framework, RabbitMQ for messaging, and Redis for caching. Containerized with Docker.",
      image: "/spring-boot-distributed-system-architecture.jpg",
      technologies: ["Java", "Spring", "RabbitMQ", "Redis", "Docker", "MySQL"],
      github: "https://github.com/serdarsenturk/spring-distributed-systems",
      demo: "https://github.com/serdarsenturk/spring-distributed-systems",
    },
    {
      title: "Java Distributed Systems",
      description:
        "Movie Rating System with distributed architecture using Java/J2EE, RESTful APIs, and MySQL. Implements OOP principles and design patterns.",
      image: "/java-microservices-architecture-diagram.jpg",
      technologies: ["Java", "J2EE", "RESTful API", "MySQL", "Maven"],
      github: "https://github.com/serdarsenturk/java-distributed-systems",
      demo: "https://github.com/serdarsenturk/java-distributed-systems",
    },
    {
      title: "Easy Retrospective",
      description:
        "Retro tool backend application for agile teams to conduct retrospective meetings. Built with Python and modern backend practices.",
      image: "/agile-retrospective-tool-interface.jpg",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/serdarsenturk/easyretrospective",
      demo: "https://github.com/serdarsenturk/easyretrospective",
    },
    {
      title: "Easy Scoreboard",
      description:
        "An easy score keeping web application for table-top or sport games. Full-stack project with Python backend and JavaScript frontend.",
      image: "/digital-scoreboard-web-app.jpg",
      technologies: ["Python", "JavaScript", "Flask", "HTML/CSS"],
      github: "https://github.com/serdarsenturk/easyscoreboard",
      demo: "https://github.com/serdarsenturk/easyscoreboard",
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
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            A selection of projects showcasing distributed systems, backend
            development, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group relative border-border/50 bg-card/50 backdrop-blur-sm glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10 animate-gradient bg-[length:200%_auto]" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-50 transition-all duration-500 -z-10" />

              <div className="relative overflow-hidden aspect-video bg-muted/50">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  alt={project.title}
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl text-card-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground group-hover:text-foreground/90 dark:group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-secondary/80 dark:bg-secondary/60 text-secondary-foreground border border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground dark:hover:text-primary-foreground transition-all duration-300 cursor-default animate-fade-in hover:scale-105 shadow-sm hover:shadow-md"
                      style={{
                        animationDelay: `${index * 0.1 + techIndex * 0.05}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn relative overflow-hidden border-border/50 text-muted-foreground hover:text-primary-foreground dark:hover:text-primary-foreground group-hover:text-foreground dark:group-hover:text-foreground hover:border-primary group-hover:border-foreground/20 bg-transparent hover:bg-primary dark:hover:bg-primary group-hover:bg-background/50 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                      <span className="relative z-10">Code</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group/btn relative overflow-hidden bg-primary text-white hover:text-white dark:text-white dark:hover:text-white group-hover:text-white dark:group-hover:text-white hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      <span className="relative z-10">View</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
