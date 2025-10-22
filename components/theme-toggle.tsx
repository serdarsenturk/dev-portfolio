"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative group">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/30 dark:border-white/20 group-hover:border-white/40 dark:group-hover:border-white/30 transition-all duration-300" />
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative z-10 w-10 h-10 rounded-lg bg-transparent hover:bg-transparent transition-all duration-300 group-hover:scale-105"
      >
        {/* Sun icon for light mode */}
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500 dark:text-amber-400" />

        {/* Moon icon for dark mode */}
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-indigo-600 dark:text-indigo-400" />

        <span className="sr-only">Toggle theme</span>
      </Button>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/10 via-primary/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
