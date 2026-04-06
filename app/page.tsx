import {
  MarketingHeader,
  HeroSection,
  TrustSection,
  FeaturesSection,
  ComparisonSection,
  TestimonialsSection,
  PricingSection,
  OpenSourceSection,
  FaqSection,
  CtaSection,
  MarketingFooter,
  DotBackground,
} from '@/components/landing';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <DotBackground />
      <div className="relative z-10">
        <MarketingHeader />
        <main id="main-content">
          <HeroSection />
          <TrustSection />
          <FeaturesSection />
          <ComparisonSection />
          <TestimonialsSection />
          <PricingSection />
          <OpenSourceSection />
          <FaqSection />
          <CtaSection />
        </main>
        <MarketingFooter />
      </div>
    </div>
  );
}
