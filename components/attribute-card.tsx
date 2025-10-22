"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CharacterAttribute } from "@/lib/types";

interface CharacterAttributeCardProps {
  attribute: CharacterAttribute;
  delay?: number;
}

export function AttributeCard({ attribute, delay = 0 }: CharacterAttributeCardProps) {
  const { name, value, modifier, description, icon: Icon } = attribute;
  
  const getModifierColor = (modifier: number) => {
    if (modifier >= 4) return "text-green-400";
    if (modifier >= 2) return "text-blue-400";
    if (modifier >= 0) return "text-yellow-400";
    return "text-red-400";
  };

  const getModifierBg = (modifier: number) => {
    if (modifier >= 4) return "bg-green-500/20 border-green-500/30";
    if (modifier >= 2) return "bg-blue-500/20 border-blue-500/30";
    if (modifier >= 0) return "bg-yellow-500/20 border-yellow-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  return (
    <Card 
      className={`p-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 hover:border-white/60 dark:hover:border-white/30 transition-all duration-500 hover:shadow-lg shadow-black/5 dark:shadow-black/20 group animate-fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-center space-y-3">
        {/* Icon and Name */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-slate-200 dark:bg-slate-600/50 group-hover:bg-slate-300 dark:group-hover:bg-slate-500/50 transition-colors duration-300">
            <Icon className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white transition-colors duration-300" />
          </div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
            {name}
          </h4>
        </div>

        {/* Value and Modifier */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
              {value}
            </span>
            <Badge 
              className={`${getModifierBg(modifier)} ${getModifierColor(modifier)} text-xs font-bold px-2 py-1`}
            >
              {modifier >= 0 ? '+' : ''}{modifier}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
