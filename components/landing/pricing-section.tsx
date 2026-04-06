'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const plans = [
  {
    name: 'Free',
    subtitle: 'Self-hosted',
    monthlyPrice: 'Free',
    annualPrice: 'Free',
    period: 'forever',
    annualPeriod: 'forever',
    documents: 'Unlimited',
    description: 'No credit card. No trial period. No catch.',
    cta: 'Deploy now',
    ctaHref: 'https://github.com/orekoapp/oreko',
    highlighted: false,
    features: [
      'Unlimited documents',
      'Unlimited clients',
      'Quotes, invoices & contracts',
      'E-signatures',
      'Online payments',
      'PDF generation',
      'Email notifications',
      'Analytics dashboard',
      'Full source code access',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    subtitle: 'Most popular',
    monthlyPrice: '$14',
    annualPrice: '$10',
    period: '/mo',
    annualPeriod: '/mo',
    documents: '100 documents/mo',
    description: 'We handle the servers. You handle the business.',
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: true,
    features: [
      '100 documents per month',
      'Unlimited clients',
      'Everything in Free',
      'Managed hosting & backups',
      'Automatic updates',
      'Custom domain',
      'Priority email support',
      'Stripe payments',
      'SSL & uptime monitoring',
      'Auto-reminder emails',
    ],
  },
  {
    name: 'Business',
    subtitle: '',
    monthlyPrice: '$29',
    annualPrice: '$24',
    period: '/mo',
    annualPeriod: '/mo',
    documents: '250 documents/mo',
    description: 'For growing teams that need collaboration.',
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: false,
    features: [
      '250 documents per month',
      'Up to 5 team members',
      'Everything in Pro',
      'Advanced analytics & reports',
      'Contract templates library',
      'Recurring invoices',
      'Role-based permissions',
      'API access',
      'Dedicated support',
    ],
  },
  {
    name: 'Enterprise',
    subtitle: '',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: '',
    annualPeriod: '',
    documents: 'Unlimited documents',
    description: 'For teams that need more volume and control.',
    cta: 'Contact sales',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      'Unlimited documents',
      'Unlimited team members',
      'Everything in Business',
      'Priority onboarding',
      'Custom integrations',
      'Data migration assistance',
      'Custom invoice design',
      'SLA with uptime guarantee',
      'Dedicated account manager',
    ],
  },
];

function DocumentTooltip() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const tooltipWidth = 220;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
    setPos({ top: rect.top - 10, left });
  }, []);

  useEffect(() => {
    if (!show) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target as Node) &&
        tooltipRef.current && !tooltipRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show]);

  const handleClick = () => {
    if (!show) updatePos();
    setShow(prev => !prev);
  };

  return (
    <span className="relative inline-flex">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="ml-1.5 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="What counts as a document?"
        type="button"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
      {show && pos && createPortal(
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: 'translateY(-100%)',
            zIndex: 99999,
            width: 220,
          }}
          className="rounded-lg border border-border bg-background p-3 shadow-lg text-xs text-muted-foreground leading-relaxed"
        >
          <p>
            <span className="font-medium text-foreground">
              Documents = invoices + quotes + contracts
            </span>{' '}
            combined. Each one you create counts as 1 document. Drafts count
            once saved. Resets every billing cycle.
          </p>
        </div>,
        document.body
      )}
    </span>
  );
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
                {plan.highlighted && (
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                    {plan.subtitle}
                  </span>
                )}
                <h3 className="font-display text-lg font-medium text-foreground">
                  {plan.name}
                </h3>
                {!plan.highlighted && plan.subtitle && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {plan.subtitle}
                  </p>
                )}

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-display font-medium text-foreground">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {isAnnual ? plan.annualPeriod : plan.period}
                  </span>
                </div>

                {/* Document pool badge */}
                <div className="mt-3 inline-flex items-center text-xs font-medium text-foreground bg-muted px-2.5 py-1 rounded-md">
                  {plan.documents}
                  <DocumentTooltip />
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
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

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature, fi) => (
                    <li
                      key={`${plan.name}-${fi}`}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-xs text-muted-foreground/60">
          Documents = invoices + quotes + contracts combined. Unused documents
          don&rsquo;t roll over. Need more? Contact us for custom volume.
        </p>
      </div>
    </section>
  );
}
