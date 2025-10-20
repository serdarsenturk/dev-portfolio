"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const skillCategories = [
    {
      category: "Frontend & Mobile",
      skills: ["Next.js", "React", "React Native", "Expo", "Angular", "AngularJS", "TypeScript", "JavaScript"],
      featured: true,
    },
    {
      category: "Backend & APIs",
      skills: ["Python", "Flask", "FastAPI", "C#", ".NET Core", "ASP.NET Core", "Java", "Spring", "Node.js"],
      featured: true,
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Git", "CI/CD", "RabbitMQ"],
    },
    {
      category: "Frameworks & ORM",
      skills: ["Django", "Hibernate", "EF Core", "NHibernate", "JPA"],
    },
    {
      category: "Methodologies",
      skills: ["Microservices", "Distributed Systems", "SOLID", "Design Patterns", "TDD"],
    },
  ]

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following OOP and SOLID principles.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building high-performance backend systems and distributed applications.",
    },
    {
      icon: Palette,
      title: "Full-Stack",
      description: "Experience in both backend (.NET, Spring) and frontend (Angular, React) development.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in Agile teams with CI/CD and modern development practices.",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl text-pretty">
            I graduated with a degree in Computer Engineering in September 2022 and have been passionate about software
            and technology since childhood. With 3 years of work experience in backend development, I specialize in
            building scalable and reliable applications using Object-Oriented Design and SOLID principles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {highlights.map((item, index) => (
            <Card
              key={item.title}
              className="p-4 bg-card/50 backdrop-blur-sm border-border/50 glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 to-accent/50 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500 -z-10" />

              <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <h3 className="text-base font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className={`p-5 bg-card/50 backdrop-blur-sm border-border/50 glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up group relative overflow-hidden ${
                  category.featured ? "ring-2 ring-primary/20" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 -z-10 ${
                    category.featured ? "group-hover:opacity-40" : ""
                  }`}
                />

                <div className="relative z-10">
                  <h4 className="text-sm font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {category.category}
                    {category.featured && (
                      <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => {
                      const isHighlighted = ["Next.js", "Python", "Flask", "React Native", "Expo"].includes(skill)
                      return (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`text-[11px] px-2.5 py-1 rounded-full font-medium bg-secondary/60 dark:bg-secondary/40 text-secondary-foreground border border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground dark:hover:text-primary-foreground hover:scale-110 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 animate-fade-in cursor-default ${
                            isHighlighted ? "ring-1 ring-primary/30 font-semibold" : ""
                          }`}
                          style={{ animationDelay: `${categoryIndex * 0.15 + skillIndex * 0.05}s` }}
                        >
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
