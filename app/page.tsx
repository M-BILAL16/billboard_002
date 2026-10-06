import { BillboardNetwork } from "@/components/BillboardNetwork";
import { CampaignShowcase } from "@/components/CampaignShowcase";
import { CaseStudies } from "@/components/CaseStudies";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { InteractiveHero } from "@/components/InteractiveHero";
import { IntroSection } from "@/components/IntroSection";
import { Navigation } from "@/components/Navigation";
import { StatsSection } from "@/components/StatsSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhySection } from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <InteractiveHero />
        <IntroSection />
        <WhatWeDo />
        <StatsSection />
        <HowItWorks />
        <BillboardNetwork />
        <CampaignShowcase />
        <WhySection />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
