import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { SkillsSection } from "@/components/sections/skills-section";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      <div className="md:pl-64">
        <SkillsSection />
      </div>
    </main>
  );
}