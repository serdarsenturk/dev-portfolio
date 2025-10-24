"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CharacterClass } from "@/lib/types";
import { Star, Shield } from "lucide-react";

interface CharacterClassCardProps {
  characterClass: CharacterClass;
}

export function ClassCard({ characterClass }: CharacterClassCardProps) {
  const { name, level, description, icon: Icon, color } = characterClass;

  return (
    <Card className="p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-500 hover:shadow-lg shadow-black/5 dark:shadow-black/20 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-200 dark:bg-slate-700/50 group-hover:bg-slate-300 dark:group-hover:bg-slate-600/50 transition-colors duration-300">
            <Icon
              className={`h-8 w-8 ${color} group-hover:scale-110 transition-transform duration-300`}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                {name}
              </h3>
              <Badge className="bg-blue-500/20 border-blue-500/30 text-blue-600 dark:text-blue-300 px-3 py-1">
                <Star className="h-4 w-4 mr-1" />
                Level {level}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                Primary Class
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
          {description}
        </p>

        {/* Class Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
            Class Features:
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
              <span>System Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full" />
              <span>Database Design</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
              <div className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full" />
              <span>DevOps & Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
