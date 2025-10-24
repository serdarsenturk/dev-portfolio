import dynamicImport from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { LanguagesSection } from "@/components/languages-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsShowcase } from "@/components/skills-showcase";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ScrollObserver } from "@/components/scroll-observer";
import { getDictionary } from "./dictionaries";
import type { Locale } from "@/lib/types";

// Dynamic import for client components
const Navigation = dynamicImport(() => import("@/components/navigation").then(mod => ({ default: mod.Navigation })));

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen">
      <Navigation dictionary={dictionary} />
      <ScrollObserver />
      <main>
        <HeroSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        <SkillsShowcase dictionary={dictionary} />
        <ProjectsSection dictionary={dictionary} />
        <EducationSection dictionary={dictionary} />
        <LanguagesSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} />
      </main>
    </div>
  );
}
