"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
    >
      {/* Sun icon for light mode */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500 dark:text-amber-400" />

      {/* Moon icon for dark mode */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-indigo-600 dark:text-indigo-400" />

      <span className="sr-only">Toggle theme</span>

      {/* Animated background glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-primary/20 to-indigo-500/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-md blur-sm" />

      {/* Rotating border effect */}
      <span className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
    </Button>
  )
}
