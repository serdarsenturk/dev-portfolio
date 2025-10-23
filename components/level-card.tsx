"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, Award } from "lucide-react";

interface CharacterLevelCardProps {
  level: number;
  experience: number;
  experienceToNext: number;
  dictionary?: {
    skills: {
      level: string;
      developerLevel: string;
      experience: string;
      xpToNextLevel: string;
      levelBenefits: string;
      advancedProblemSolving: string;
      mentorshipLeadership: string;
      architectureDesign: string;
    };
  };
}

export function LevelCard({ level, experience, experienceToNext, dictionary }: CharacterLevelCardProps) {
  const experienceProgress = (experience / experienceToNext) * 100;
  const experienceRemaining = experienceToNext - experience;

  return (
    <Card className="p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-500 hover:shadow-lg shadow-black/5 dark:shadow-black/20 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-all duration-300">
              <Star className="h-8 w-8 text-yellow-500 dark:text-yellow-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors duration-300">
{dictionary.skills.level} {level}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
{dictionary.skills.developerLevel}
              </p>
            </div>
          </div>
        </div>

        {/* Experience Bar */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              {dictionary.skills.experience}
            </span>
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 font-semibold">
              {experience.toLocaleString()} / {experienceToNext.toLocaleString()}
            </span>
          </div>
          
          <Progress 
            value={experienceProgress} 
            className="h-3"
          />
          
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
{experienceRemaining.toLocaleString()} {dictionary.skills.xpToNextLevel}
            </span>
            <span className="text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
              {Math.round(experienceProgress)}%
            </span>
          </div>
        </div>

        {/* Level Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-500 dark:text-blue-400" />
{dictionary.skills.level} {level} {dictionary.skills.levelBenefits}
          </h4>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <TrendingUp className="h-3 w-3 text-green-500 dark:text-green-400" />
              <span>{dictionary.skills.advancedProblemSolving}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <Star className="h-3 w-3 text-yellow-500 dark:text-yellow-400" />
              <span>{dictionary.skills.mentorshipLeadership}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <Award className="h-3 w-3 text-purple-500 dark:text-purple-400" />
              <span>{dictionary.skills.architectureDesign}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
