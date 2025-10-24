"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CHARACTER_DATA } from "@/lib/constants";
import { Dice1, Shield, Star } from "lucide-react";
import { AttributeCard } from "./attribute-card";
import { ClassCard } from "./class-card";
import { LevelCard } from "./level-card";
import { RaceCard } from "./race-card";
import { SkillCard } from "./skill-card";

interface SkillsShowcaseProps {
  dictionary: {
    skills: {
      title: string;
      subtitle: string;
      badge: string;
      characterTitle: string;
      attributes: string;
      skillsProficiencies: string;
      proficiency: {
        master: string;
        expert: string;
        advanced: string;
        intermediate: string;
        beginner: string;
      };
      level: string;
      proficient: string;
      bonus: string;
      developerLevel: string;
      experience: string;
      xpToNextLevel: string;
      levelBenefits: string;
      advancedProblemSolving: string;
      mentorshipLeadership: string;
      architectureDesign: string;
    };
    about: {
      skillCategories: {
        Programming: string;
        Frontend: string;
        Backend: string;
        Database: string;
        DevOps: string;
        Cloud: string;
        Architecture: string;
        Tools: string;
        Methodologies: string;
      };
    };
  };
}

export function SkillsShowcase({ dictionary }: SkillsShowcaseProps) {
  const {
    attributes,
    skills,
    class: characterClass,
    race,
    level,
    experience,
    experienceToNext,
  } = CHARACTER_DATA;

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section
      id="character-sheet"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-subtle-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-subtle-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-4 sm:mb-6">
            <Dice1 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-sm sm:text-lg font-semibold text-primary">
              {dictionary.skills.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-foreground to-primary dark:from-foreground dark:to-accent bg-clip-text text-transparent mb-3 sm:mb-4">
            {dictionary.skills.characterTitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column - Character Info */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {/* Level & Experience */}
            <LevelCard
              level={level}
              experience={experience}
              experienceToNext={experienceToNext}
              dictionary={dictionary}
            />

            {/* Character Class */}
            <ClassCard characterClass={characterClass} />

            {/* Character Race */}
            <RaceCard race={race} />

            {/* Attributes */}
            <Card className="p-4 sm:p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 dark:text-yellow-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground dark:text-white">
                  {dictionary.skills.attributes}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {attributes.map((attribute, index) => (
                  <AttributeCard
                    key={attribute.name}
                    attribute={attribute}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 dark:text-green-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground dark:text-white">
                  {dictionary.skills.skillsProficiencies}
                </h3>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {Object.entries(skillsByCategory).map(
                  ([category, categorySkills], categoryIndex) => (
                    <div key={category} className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Badge
                          variant="outline"
                          className="bg-slate-100 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold"
                        >
                          {dictionary.about.skillCategories[
                            category as keyof typeof dictionary.about.skillCategories
                          ] || category}
                        </Badge>
                        <Separator className="flex-1 bg-slate-300 dark:bg-slate-600" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {categorySkills.map((skill, skillIndex) => (
                          <SkillCard
                            key={skill.name}
                            skill={skill}
                            delay={categoryIndex * 0.2 + skillIndex * 0.1}
                            dictionary={dictionary}
                          />
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
