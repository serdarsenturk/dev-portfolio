"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Sparkles, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["about", "experience", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/40 shadow-2xl shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      {isScrolled && (
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient" />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="group relative flex items-center gap-2 perspective-1000">
            {/* Icon container with gradient background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-primary to-accent p-1.5 rounded-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Code2 className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Logo text with gradient animation */}
            <span className="relative z-10 inline-block transition-transform duration-500 group-hover:scale-105">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Portfolio
              </span>
            </span>

            {/* Glow effect on hover */}
            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive ? "text-primary font-semibold" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator with gradient */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />

                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg" />
                </a>
              )
            })}

            <div className="relative ml-4 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500 animate-gradient bg-[length:200%_auto]" />
              <Button
                size="sm"
                className="relative group/btn overflow-hidden bg-background hover:bg-background border border-border/50"
              >
                <span className="relative z-10 flex items-center gap-2 text-foreground group-hover/btn:text-primary transition-colors">
                  <Download className="h-4 w-4 group-hover/btn:animate-bounce-subtle" />
                  Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              </Button>
            </div>

            <div className="ml-2">
              <ThemeToggle />
            </div>

            <div className="relative ml-2">
              <Badge variant="secondary" className="gap-1.5 relative overflow-hidden group/badge">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-gradient bg-[length:200%_auto]" />
                <Sparkles className="h-3 w-3 relative z-10 animate-pulse" />
                <span className="relative z-10">Available</span>
              </Badge>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative overflow-hidden group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 backdrop-blur-xl animate-slide-down">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10 animate-fade-in-up relative group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </a>
              ))}
              <Button size="sm" className="w-full mt-2 group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4 group-hover:animate-bounce-subtle" />
                  Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              <Badge variant="secondary" className="w-fit gap-1.5">
                <Sparkles className="h-3 w-3 animate-pulse" />
                Available for work
              </Badge>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
