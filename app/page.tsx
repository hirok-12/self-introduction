import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { HomeSection } from "@/components/sections/home-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      <div className="md:pl-64">
        <HomeSection />
      </div>
    </main>
  );
}