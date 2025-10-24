"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Globe, Star } from "lucide-react";
import type { Language } from "@/lib/types";
import type { Dictionary } from "@/lib/types/dictionary.types";

interface LanguagesSectionProps {
  dictionary: Dictionary;
}

export function LanguagesSection({ dictionary }: LanguagesSectionProps) {
  const LANGUAGES_DATA: Language[] = [
    {
      name: dictionary.languages.languageNames.turkish,
      level: dictionary.languages.proficiency.native,
      proficiency: 5,
    },
    {
      name: dictionary.languages.languageNames.english,
      level: dictionary.languages.proficiency.fluent,
      proficiency: 4,
    },
  ];

  const getProficiencyText = (proficiency: number) => {
    switch (proficiency) {
      case 5:
        return dictionary.languages.proficiency.native;
      case 4:
        return dictionary.languages.proficiency.fluent;
      case 3:
        return dictionary.languages.proficiency.advanced;
      case 2:
        return dictionary.languages.proficiency.intermediate;
      case 1:
        return dictionary.languages.proficiency.basic;
      default:
        return dictionary.languages.proficiency.beginner;
    }
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 4) return "text-green-500";
    if (proficiency >= 3) return "text-blue-500";
    if (proficiency >= 2) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <section
      id="languages"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "9s", animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Globe className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-accent">
              {dictionary.languages.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            {dictionary.languages.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            {dictionary.languages.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LANGUAGES_DATA.map((language, index) => (
            <Card
              key={language.name}
              className="p-8 bg-white/90 dark:bg-card/80 backdrop-blur-xl border-accent/20 dark:border-accent/20 hover:border-accent/50 transition-all duration-700 hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden hover:shadow-2xl hover:shadow-accent/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-[2px] bg-gradient-to-br from-accent/50 to-primary/50 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-700 -z-10" />

              <div className="relative z-10 text-center">
                {/* Language Name */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 mb-2">
                    {language.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={`bg-accent/10 text-accent border-accent/30 px-4 py-2 ${getProficiencyColor(language.proficiency)}`}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    {language.level}
                  </Badge>
                </div>

                {/* Proficiency Level */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {dictionary.languages.proficiencyLevel}
                    </span>
                    <span
                      className={`text-sm font-semibold ${getProficiencyColor(language.proficiency)}`}
                    >
                      {getProficiencyText(language.proficiency)}
                    </span>
                  </div>

                  {/* Proficiency Dots */}
                  <div className="flex justify-center gap-2 mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          i < language.proficiency
                            ? "bg-accent group-hover:bg-primary shadow-lg shadow-accent/30"
                            : "bg-muted"
                        }`}
                        style={{ animationDelay: `${index * 0.2 + i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Proficiency Percentage */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      <span>{dictionary.languages.proficiencyLabel}</span>
                      <span className="font-semibold">
                        {language.proficiency * 20}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${language.proficiency * 20}%`,
                          animationDelay: `${index * 0.2 + 0.5}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
