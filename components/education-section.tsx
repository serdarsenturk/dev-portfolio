"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import type { Education } from "@/lib/types";

interface EducationSectionProps {
  dictionary: any;
}

export function EducationSection({ dictionary }: EducationSectionProps) {
  const EDUCATION_DATA: Education[] = [
    {
      degree: dictionary.education.degree,
      institution: dictionary.education.institution,
      period: dictionary.education.period,
      description: dictionary.education.graduationDescription
    }
  ];

  return (
    <section
      id="education"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-muted/20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              {dictionary.education.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            {dictionary.education.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            {dictionary.education.description}
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {EDUCATION_DATA.map((education, index) => (
            <Card
              key={education.degree}
              className="p-8 bg-white/90 dark:bg-card/80 backdrop-blur-xl border-primary/20 dark:border-primary/20 hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 to-accent/50 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-700 -z-10" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {education.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <MapPin className="h-4 w-4" />
                      <span>{education.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {education.period}
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                      <Award className="h-4 w-4 mr-2" />
                      {dictionary.education.degreeType}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                {education.description && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                      {dictionary.education.focusAreas}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-500">
                      {education.description}
                    </p>
                  </div>
                )}

                {/* Key Achievements */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-500 mb-4">
                    {dictionary.education.keyAreas}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      dictionary.education.areas.softwareEngineering,
                      dictionary.education.areas.algorithmDesign,
                      dictionary.education.areas.distributedSystems,
                      dictionary.education.areas.databaseManagement,
                      dictionary.education.areas.objectOrientedProgramming,
                      dictionary.education.areas.systemArchitecture
                    ].map((area, areaIndex) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        style={{ animationDelay: `${index * 0.2 + areaIndex * 0.05}s` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
                        <span>{area}</span>
                      </div>
                    ))}
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
