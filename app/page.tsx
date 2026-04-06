import dynamic from 'next/dynamic';
import {
  MarketingHeader,
  HeroSection,
  TrustSection,
  MarketingFooter,
  DotBackground,
} from '@/components/landing';

// Below-the-fold sections: lazy loaded for faster initial page load
const FeaturesSection = dynamic(
  () => import('@/components/landing/features-section').then((m) => m.FeaturesSection),
);
const ComparisonSection = dynamic(
  () => import('@/components/landing/comparison-section').then((m) => m.ComparisonSection),
);
const TestimonialsSection = dynamic(
  () => import('@/components/landing/testimonials-section').then((m) => m.TestimonialsSection),
);
const PricingSection = dynamic(
  () => import('@/components/landing/pricing-section').then((m) => m.PricingSection),
);
const OpenSourceSection = dynamic(
  () => import('@/components/landing/open-source-section').then((m) => m.OpenSourceSection),
);
const FaqSection = dynamic(
  () => import('@/components/landing/faq-section').then((m) => m.FaqSection),
);
const CtaSection = dynamic(
  () => import('@/components/landing/cta-section').then((m) => m.CtaSection),
);

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
