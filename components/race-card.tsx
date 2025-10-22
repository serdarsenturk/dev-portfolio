"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CharacterRace } from "@/lib/types";
import { Users, Zap, BookOpen } from "lucide-react";

interface CharacterRaceCardProps {
  race: CharacterRace;
}

export function RaceCard({ race }: CharacterRaceCardProps) {
  const { name, description, icon: Icon, bonuses } = race;

  return (
    <Card className="p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-500 hover:shadow-lg shadow-black/5 dark:shadow-black/20 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-200 dark:bg-slate-700/50 group-hover:bg-slate-300 dark:group-hover:bg-slate-600/50 transition-colors duration-300">
            <Icon className="h-8 w-8 text-purple-500 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                {name}
              </h3>
              <Badge className="bg-purple-500/20 border-purple-500/30 text-purple-600 dark:text-purple-300 px-3 py-1">
                <Users className="h-4 w-4 mr-1" />
                Race
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                Racial Traits
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
          {description}
        </p>

        {/* Racial Bonuses */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
            Racial Bonuses:
          </h4>
          <div className="space-y-2">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg bg-slate-100 dark:bg-slate-700/30 group-hover:bg-slate-200 dark:group-hover:bg-slate-600/30 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full flex-shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {bonus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
