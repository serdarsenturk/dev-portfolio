/* eslint-disable react/no-unescaped-entities */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ANIMATION_DELAYS,
  CONTACT_OPTIONS,
  DEVELOPER_INFO,
  SCROLL_BEHAVIOR,
  SECTION_IDS,
} from "@/lib/constants";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  dictionary: {
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
  };
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [typedJobTitle, setTypedJobTitle] = useState("");

  useEffect(() => {
    setIsVisible(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= DEVELOPER_INFO.TITLE.length) {
        setTypedJobTitle(DEVELOPER_INFO.TITLE.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, ANIMATION_DELAYS.TYPING_INTERVAL);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById(SECTION_IDS.PROJECTS);
    projectsSection?.scrollIntoView({
      behavior: SCROLL_BEHAVIOR.SMOOTH,
      block: SCROLL_BEHAVIOR.BLOCK_START,
    });
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById(SECTION_IDS.CONTACT);
    contactSection?.scrollIntoView({
      behavior: SCROLL_BEHAVIOR.SMOOTH,
      block: SCROLL_BEHAVIOR.BLOCK_START,
    });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 relative overflow-hidden"
      data-observe
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div
            className={`space-y-4 sm:space-y-6 ${
              isVisible ? "animate-blur-in" : "opacity-0"
            }`}
          >
            <div className="relative w-fit group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 dark:from-primary dark:via-accent dark:to-primary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              <Badge
                variant="secondary"
                className="relative gap-2 animate-scale-in bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 hover:border-white/40 dark:hover:border-white/30 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/20"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
                <span className="animate-text-shimmer font-medium text-sm sm:text-base">
                  {dictionary.hero.available}
                </span>
              </Badge>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground dark:from-foreground dark:via-accent dark:to-foreground bg-clip-text text-transparent">
                  Serdar Senturk
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
                <span className="inline-block bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent bg-clip-text text-transparent">
                  {typedJobTitle}
                </span>
                <span className="animate-pulse text-primary ml-1">|</span>
              </h2>
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty animate-fade-in-up font-medium"
              style={{ animationDelay: "0.2s" }}
            >
              {dictionary.hero.subtitle1}
            </p>

            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {dictionary.hero.subtitle2}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 dark:from-primary dark:via-accent dark:to-primary rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
                <Button
                  size="lg"
                  onClick={handleScrollToProjects}
                  className="relative group/btn overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 shadow-2xl hover:shadow-primary/40 px-8 py-4 text-lg font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-3 text-white">
                    {dictionary.hero.viewProjects}
                    <ArrowDown className="h-5 w-5 group-hover/btn:translate-y-1 group-hover/btn:rotate-180 transition-all duration-500" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent translate-y-full group-hover/btn:translate-y-0 transition-all duration-500" />
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 dark:from-accent dark:via-primary dark:to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleScrollToContact}
                  className="relative group/btn overflow-hidden bg-transparent border-2 border-primary/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-500 shadow-xl hover:shadow-primary/20 px-8 py-4 text-lg font-semibold"
                >
                  <span className="relative z-10">{dictionary.hero.getInTouch}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 translate-x-full group-hover/btn:translate-x-0 transition-all duration-500" />
                </Button>
              </div>
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              {CONTACT_OPTIONS.map(({ href, label }, index) => {
                const Icon =
                  label === "GitHub"
                    ? Github
                    : label === "LinkedIn"
                    ? Linkedin
                    : Mail;
                return (
                  <div
                    key={label}
                    className="relative group"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 dark:from-primary dark:to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="relative overflow-hidden border-2 border-primary/30 hover:border-primary/70 hover:bg-primary/10 hover:text-primary transition-all duration-500 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-primary/30"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
