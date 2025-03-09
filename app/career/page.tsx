import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { CareerSection } from "@/components/sections/career-section";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      <div className="md:pl-64">
        <CareerSection />
      </div>
    </main>
  );
}