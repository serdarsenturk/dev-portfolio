import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { LanguagesSection } from "@/components/languages-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsShowcase } from "@/components/skills-showcase"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollObserver } from "@/components/scroll-observer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollObserver />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsShowcase />
        <ProjectsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
    </div>
  )
}
