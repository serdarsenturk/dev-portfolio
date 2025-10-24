"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

const locales = ["tr", "en"];
const defaultLocale = "tr";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1] || defaultLocale;

  // Find current locale index and get next locale
  const currentIndex = locales.indexOf(currentLocale);
  const nextIndex = (currentIndex + 1) % locales.length;
  const nextLocale = locales[nextIndex];

  // Get display names
  const getDisplayName = (locale: string) => {
    switch (locale) {
      case "tr":
        return "Türkçe";
      case "en":
        return "English";
      default:
        return locale;
    }
  };

  const getShortName = (locale: string) => {
    switch (locale) {
      case "tr":
        return "TR";
      case "en":
        return "EN";
      default:
        return locale.toUpperCase();
    }
  };

  const toggleLanguage = async () => {
    if (isChanging) return;

    setIsChanging(true);

    try {
      // Remove current locale from pathname and add new one
      const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "";
      const newPath = `/${nextLocale}${pathWithoutLocale}`;

      // Save language preference to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio-language", nextLocale);
      }

      // Navigate to new locale
      router.push(newPath);
    } catch {
      // Language change error handled silently
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <Button
      size="sm"
      onClick={toggleLanguage}
      disabled={isChanging}
      className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full px-3 py-2"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{getDisplayName(nextLocale)}</span>
      <span className="sm:hidden">{getShortName(nextLocale)}</span>
    </Button>
  );
}
