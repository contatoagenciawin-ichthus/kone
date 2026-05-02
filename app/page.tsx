import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { EducationImpactSection } from "@/components/sections/education-impact-section";
import { EducationStatementSection } from "@/components/sections/education-statement-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <EducationStatementSection />
      <EducationImpactSection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
