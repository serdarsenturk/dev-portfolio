/* eslint-disable react/no-unescaped-entities */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedJobTitle, setTypedJobTitle] = useState("");
  const developerTitle = "Serdar Senturk - Software Developer";

  const contactsOptions = [
    {
      icon: Github,
      href: "https://github.com/serdarsenturk",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/serdarsenturk",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:serdarsenturk@windowslive.com",
      label: "Email",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= developerTitle.length) {
        setTypedJobTitle(developerTitle.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div
            className={`space-y-4 ${
              isVisible ? "animate-blur-in" : "opacity-0"
            }`}
          >
            <div className="relative w-fit group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              <Badge
                variant="secondary"
                className="relative gap-2 animate-scale-in bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 shadow-lg"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
                <span className="animate-text-shimmer font-medium">
                  Available for work
                </span>
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
              <span className="inline-block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {typedJobTitle}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Building scalable and reliable applications using Object-Oriented
              Design and SOLID principles.
            </p>

            <p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Computer Engineering graduate with 3 years of experience in
              backend and frontend development. Specialized in .NET, C#,
              Angular, and distributed systems. Passionate about creating
              high-performance applications and learning new technologies.
            </p>

            <div
              className="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-50 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="relative group/btn overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-ease-out-expo shadow-lg hover:shadow-xl hover:shadow-primary/30"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white dark:text-white">
                    View Projects
                    <ArrowDown className="h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent translate-y-full group-hover/btn:translate-y-0 transition-ease-out-expo" />
                </Button>
              </div>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-transparent border-2 border-border/50 hover:bg-primary/10 hover:border-primary hover:text-primary dark:hover:text-primary transition-ease-out-expo shadow-lg"
              >
                <span className="relative z-10">Get in Touch</span>
              </Button>
            </div>

            <div
              className="flex gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              {contactsOptions.map(({ icon: Icon, href, label }) => (
                <div key={label} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-all duration-500" />
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="relative overflow-hidden border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal section */}
          <div
            className={`relative ${
              isVisible ? "animate-scale-in" : "opacity-0"
            } lg:block`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl animate-gradient bg-[length:200%_auto]" />
              <div
                className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl animate-gradient bg-[length:200%_auto]"
                style={{ animationDelay: "1s", animationDirection: "reverse" }}
              />

              {/* Terminal corner badges */}
              <div className="absolute -top-4 -right-4 p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl animate-float shadow-xl hover:shadow-primary/30 transition-all duration-300 group glass-card">
                <Code2 className="h-6 w-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl animate-float shadow-xl hover:shadow-accent/30 transition-all duration-300 group glass-card"
                style={{ animationDelay: "1s" }}
              >
                <Terminal className="h-6 w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              </div>

              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500 group glass-card">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500 -z-10 animate-gradient bg-[length:200%_auto]" />

                {/* Terminal window icons */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive animate-pulse shadow-lg shadow-destructive/50" />
                  <div
                    className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1">
                    <span className="text-primary font-semibold">const</span>{" "}
                    developer = {"{"}
                  </div>
                  <div className="pl-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary cursor-pointer">
                    name:{" "}
                    <span className="text-accent font-medium">
                      "Serdar Senturk"
                    </span>
                    ,
                  </div>
                  <div className="pl-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary cursor-pointer">
                    role:{" "}
                    <span className="text-accent font-medium">
                      "Software Developer"
                    </span>
                    ,
                  </div>
                  <div className="pl-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 cursor-pointer">
                    skills: [
                  </div>
                  <div className="pl-8 text-accent font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 cursor-pointer hover:scale-105">
                    "C#", ".NET", "Angular", "Spring"
                  </div>
                  <div className="pl-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 cursor-pointer">
                    ],
                  </div>
                  <div className="pl-4 text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary cursor-pointer">
                    passion:{" "}
                    <span className="text-accent font-medium">
                      "Scalable Systems"
                    </span>
                  </div>
                  <div className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1">
                    {"}"}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
