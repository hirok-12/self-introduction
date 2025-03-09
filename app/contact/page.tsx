import { Navigation } from "@/components/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      <div className="md:pl-64">
        <ContactSection />
      </div>
    </main>
  );
}