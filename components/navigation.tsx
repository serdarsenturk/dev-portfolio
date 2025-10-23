"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION_ITEMS, SECTION_IDS } from "@/lib/constants";
import { Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationProps {
  dictionary: {
    navigation: {
      about: string;
      experience: string;
      skills: string;
      projects: string;
      education: string;
      languages: string;
      contact: string;
      download: string;
    };
  };
}

export function Navigation({ dictionary }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        SECTION_IDS.ABOUT,
        SECTION_IDS.EXPERIENCE,
        SECTION_IDS.CHARACTER_SHEET,
        SECTION_IDS.PROJECTS,
        SECTION_IDS.EDUCATION,
        SECTION_IDS.LANGUAGES,
        SECTION_IDS.CONTACT,
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Get current language from URL or default to 'tr'
    const currentLang = window.location.pathname.includes('/en') ? 'en' : 'tr';
    const cvFileName = currentLang === 'en' ? 'cv-serdar-senturk-en.pdf' : 'cv-serdar-senturk-tr.pdf';
    
    // Open PDF in new tab for preview, then user can download if they want
    window.open(`/${cvFileName}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Responsive Name */}
          <a
            href="#"
            className="group flex-shrink-0"
            aria-label="Serdar Senturk"
          >
            <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
              <span className="hidden md:inline">Serdar Senturk</span>
              <span className="md:hidden">Serdar</span>
            </span>
          </a>

          {/* Desktop Navigation - Large screens (1024px+) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-primary bg-primary/10 dark:bg-white/10 backdrop-blur-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-white/5 backdrop-blur-sm"
                    }`}
                  >
                    {dictionary.navigation[item.label.replace('navigation.', '') as keyof typeof dictionary.navigation]}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={handleDownloadCV}
                size="sm"
                className="gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 rounded-full px-3 py-1.5 text-xs whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105"
              >
                <Download className="h-3.5 w-3.5" />
                {dictionary.navigation.download}
              </Button>
              
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Tablet Navigation - Medium screens (768px-1023px) */}
          <div className="hidden md:flex lg:hidden items-center gap-2 w-full min-w-0">
            {/* Navigation Items - All items with ultra compact spacing */}
            <div className="flex items-center gap-0.5 flex-1 justify-center min-w-0 overflow-hidden">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-1.5 py-1 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? "text-primary bg-primary/10 dark:bg-white/10 backdrop-blur-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-white/5 backdrop-blur-sm"
                    }`}
                  >
                    {dictionary.navigation[item.label.replace('navigation.', '') as keyof typeof dictionary.navigation]}
                  </a>
                );
              })}
            </div>

            {/* Actions - Right side with ultra compact spacing */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Button
                onClick={handleDownloadCV}
                size="sm"
                className="gap-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 rounded-full px-2 py-1 text-xs whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105"
              >
                <Download className="h-3 w-3" />
                {dictionary.navigation.download}
              </Button>
              
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu - Small screens (0-767px) */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="space-y-2">
                    {NAVIGATION_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-lg transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dictionary.navigation[item.label.replace('navigation.', '') as keyof typeof dictionary.navigation]}
                      </a>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button
                      onClick={handleDownloadCV}
                      size="sm"
                      className="w-full gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 rounded-lg px-4 py-2.5 text-sm shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <Download className="h-4 w-4" />
                      {dictionary.navigation.download}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
