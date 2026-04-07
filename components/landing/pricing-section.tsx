'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Minus, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

type FeatureValue = string | boolean;

const plans = [
  {
    name: 'Free',
    monthlyPrice: 'Free',
    annualPrice: 'Free',
    period: 'forever',
    annualPeriod: 'forever',
    description: 'Try Oreko cloud with no commitment.',
    cta: 'Get started',
    ctaHref: '/register',
    highlighted: false,
    features: [
      { label: 'Documents', value: '25/month' },
      { label: 'Team members', value: '1' },
      { label: 'Core features', value: true },
      { label: 'Cloud hosting', value: true },
      { label: 'Auto-reminders', value: false },
      { label: 'Recurring invoices', value: false },
      { label: 'Advanced analytics', value: false },
      { label: 'API access', value: false },
      { label: 'Support', value: 'Community' },
    ] as { label: string; value: FeatureValue }[],
  },
  {
    name: 'Pro',
    monthlyPrice: '$14',
    annualPrice: '$10',
    period: '/mo',
    annualPeriod: '/mo',
    description: 'We handle the servers. You handle the business.',
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: true,
    features: [
      { label: 'Documents', value: '100/month' },
      { label: 'Team members', value: '1' },
      { label: 'Core features', value: true },
      { label: 'Cloud hosting', value: true },
      { label: 'Auto-reminders', value: true },
      { label: 'Backups & SSL', value: true },
      { label: 'Recurring invoices', value: false },
      { label: 'Advanced analytics', value: false },
      { label: 'API access', value: false },
      { label: 'Support', value: 'Priority email' },
    ] as { label: string; value: FeatureValue }[],
  },
  {
    name: 'Business',
    monthlyPrice: '$29',
    annualPrice: '$24',
    period: '/mo',
    annualPeriod: '/mo',
    description: 'For growing teams that need collaboration.',
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: false,
    features: [
      { label: 'Documents', value: '250/month' },
      { label: 'Team members', value: 'Up to 5' },
      { label: 'Core features', value: true },
      { label: 'Cloud hosting', value: true },
      { label: 'Auto-reminders', value: true },
      { label: 'Backups & SSL', value: true },
      { label: 'Recurring invoices', value: true },
      { label: 'Advanced analytics', value: true },
      { label: 'API access', value: true },
      { label: 'Support', value: 'Dedicated' },
    ] as { label: string; value: FeatureValue }[],
  },
  {
    name: 'Unlimited',
    monthlyPrice: '$59',
    annualPrice: '$49',
    period: '/mo',
    annualPeriod: '/mo',
    description: 'Everything included. No surprises.',
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: false,
    features: [
      { label: 'Documents', value: '1,000/month' },
      { label: 'Team members', value: 'Unlimited' },
      { label: 'Core features', value: true },
      { label: 'Cloud hosting', value: true },
      { label: 'Auto-reminders', value: true },
      { label: 'Backups & SSL', value: true },
      { label: 'Recurring invoices', value: true },
      { label: 'Advanced analytics', value: true },
      { label: 'API access', value: true },
      { label: 'Support', value: 'Priority email' },
    ] as { label: string; value: FeatureValue }[],
  },
];

function FeatureVal({ value }: { value: FeatureValue }) {
  if (value === true) return <Check className="h-4 w-4 text-primary" />;
  if (value === false) return <Minus className="h-4 w-4 text-muted-foreground/30" />;
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            Pricing that respects your margins.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Start free. Stay free. Scale when you&rsquo;re ready.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          className="flex items-center justify-start gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
              !isAnnual
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
              isAnnual
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Annual
          </button>
          {isAnnual && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              Save ~30%
            </span>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: 'easeOut',
              }}
            >
              <SpotlightCard
                className={`rounded-xl border p-6 h-full transition-shadow duration-300 hover:shadow-md ${
                  plan.highlighted
                    ? 'border-primary ring-1 ring-primary bg-background'
                    : 'border-border bg-background'
                }`}
                spotlightColor={
                  plan.highlighted
                    ? 'oklch(0.6898 0.1101 233.96 / 0.12)'
                    : 'oklch(0.6898 0.1101 233.96 / 0.06)'
                }
              >
                <h3 className={`font-display font-medium text-foreground ${plan.highlighted ? 'text-xl' : 'text-lg'}`}>
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-display font-medium text-foreground">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {isAnnual ? plan.annualPeriod : plan.period}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <Link
                  href={plan.ctaHref}
                  className={`mt-5 block text-center text-sm font-medium px-5 py-2.5 rounded-md transition-all active:scale-[0.98] ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'
                      : 'border border-border text-foreground hover:bg-accent'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-6 border-t border-border pt-5 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <div
                      key={`${plan.name}-${fi}`}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{feature.label}</span>
                      <FeatureVal value={feature.value} />
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-xs text-muted-foreground/60">
          Documents = invoices + quotes + contracts combined. Unused documents
          don&rsquo;t roll over. Need more than 1,000 documents?{' '}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
        </p>

        {/* Community Edition */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="rounded-xl border border-dashed border-border bg-background p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Github className="h-5 w-5 text-foreground" />
                  <h3 className="font-display text-xl font-medium text-foreground">
                    Community Edition
                  </h3>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Open source
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Self-host Oreko on your own infrastructure. Unlimited documents, full source code, and complete control over your data. No usage caps, no feature gates &mdash; just the core product, forever free.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'Unlimited documents',
                    'Full source code',
                    'Your own database',
                    'Community support',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                    >
                      <Check className="h-3 w-3 text-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="https://github.com/orekoapp/oreko"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-md border border-border text-foreground hover:bg-accent transition-all active:scale-[0.98]"
              >
                <Github className="h-4 w-4" />
                Deploy now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
