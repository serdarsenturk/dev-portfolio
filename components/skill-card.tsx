"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/types";
import { Star, Zap } from "lucide-react";

interface CharacterSkillCardProps {
  skill: Skill;
  delay?: number;
}

export function SkillCard({ skill, delay = 0 }: CharacterSkillCardProps) {
  const { name, level, description, icon: Icon, isProficient, bonus = 0 } = skill;
  
  const getLevelColor = (level: number) => {
    if (level >= 18) return "text-green-400";
    if (level >= 15) return "text-blue-400";
    if (level >= 12) return "text-yellow-400";
    return "text-orange-400";
  };

  const getLevelBg = (level: number) => {
    if (level >= 18) return "bg-green-500/20 border-green-500/30";
    if (level >= 15) return "bg-blue-500/20 border-blue-500/30";
    if (level >= 12) return "bg-yellow-500/20 border-yellow-500/30";
    return "bg-orange-500/20 border-orange-500/30";
  };

  const getProficiencyLevel = (level: number) => {
    if (level >= 18) return "Master";
    if (level >= 15) return "Expert";
    if (level >= 12) return "Advanced";
    if (level >= 8) return "Intermediate";
    return "Beginner";
  };

  return (
    <Card 
      className={`p-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-500 hover:shadow-lg shadow-black/5 dark:shadow-black/20 group animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="space-y-3">
        {/* Header with Icon and Name */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-600/50 group-hover:bg-slate-300 dark:group-hover:bg-slate-500/50 transition-colors duration-300">
            <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 truncate">
              {name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <Badge 
                className={`${getLevelBg(level)} ${getLevelColor(level)} text-xs font-bold px-2 py-0.5`}
              >
                Level {level}
              </Badge>
              {isProficient && (
                <Badge className="bg-purple-500/20 border-purple-500/30 text-purple-600 dark:text-purple-300 text-xs px-2 py-0.5">
                  <Star className="h-3 w-3 mr-1" />
                  Proficient
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Level Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              {getProficiencyLevel(level)}
            </span>
            <span className={`font-semibold ${getLevelColor(level)}`}>
              {level}/20
            </span>
          </div>
          <Progress 
            value={(level / 20) * 100} 
            className="h-2"
          />
        </div>

        {/* Bonus and Proficiency */}
        {(bonus > 0 || isProficient) && (
          <div className="flex items-center gap-2 text-xs">
            {bonus > 0 && (
              <Badge className="bg-cyan-500/20 border-cyan-500/30 text-cyan-600 dark:text-cyan-300 px-2 py-0.5">
                <Zap className="h-3 w-3 mr-1" />
                +{bonus} Bonus
              </Badge>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
