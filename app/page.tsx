import { AboutSection } from "@/components/AboutSection";
import { BoroughMap } from "@/components/BoroughMap";
import { CatalogSection } from "@/components/CatalogSection";
import { Footer } from "@/components/Footer";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InteractiveHero } from "@/components/InteractiveHero";
import { Navigation } from "@/components/Navigation";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { QuoteSection } from "@/components/QuoteSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <InteractiveHero />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <BoroughMap />
        <CatalogSection />
        <IndustriesSection />
        <ReviewsSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
