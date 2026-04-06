'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, Minus, ChevronDown, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

/* ──────────────────────────────────────────────────────────────
   PLANS
   ────────────────────────────────────────────────────────────── */

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
    documents: '100 docs/mo',
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
    documents: '250 docs/mo',
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
    documents: 'Unlimited',
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

/* ──────────────────────────────────────────────────────────────
   FEATURE COMPARISON TABLE
   ────────────────────────────────────────────────────────────── */

type CellValue = boolean | string;

const comparisonCategories: {
  category: string;
  rows: { feature: string; values: CellValue[] }[];
}[] = [
  {
    category: 'Documents & Limits',
    rows: [
      { feature: 'Monthly documents (invoices + quotes + contracts)', values: ['Unlimited', '100', '250', 'Custom'] },
      { feature: 'Clients', values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { feature: 'Team members', values: ['1', '1', 'Up to 5', 'Unlimited'] },
    ],
  },
  {
    category: 'Core Features',
    rows: [
      { feature: 'Visual quote builder', values: [true, true, true, true] },
      { feature: 'Invoice creation', values: [true, true, true, true] },
      { feature: 'Contracts & e-signatures', values: [true, true, true, true] },
      { feature: 'Quote-to-invoice conversion', values: [true, true, true, true] },
      { feature: 'PDF generation', values: [true, true, true, true] },
      { feature: 'Client portal', values: [true, true, true, true] },
      { feature: 'Online payments', values: [true, true, true, true] },
      { feature: 'Email notifications', values: [true, true, true, true] },
      { feature: 'Auto-reminder emails', values: [false, true, true, true] },
      { feature: 'Recurring invoices', values: [false, false, true, true] },
    ],
  },
  {
    category: 'Hosting & Infrastructure',
    rows: [
      { feature: 'Self-hosted (your server)', values: [true, false, false, false] },
      { feature: 'Cloud hosting & backups', values: [false, true, true, true] },
      { feature: 'Automatic updates', values: [false, true, true, true] },
      { feature: 'Custom domain', values: [false, true, true, true] },
      { feature: 'SSL & uptime monitoring', values: [false, true, true, true] },
      { feature: 'SLA with uptime guarantee', values: [false, false, false, true] },
    ],
  },
  {
    category: 'Advanced',
    rows: [
      { feature: 'Analytics dashboard', values: [true, true, true, true] },
      { feature: 'Advanced analytics & reports', values: [false, false, true, true] },
      { feature: 'Contract templates library', values: [false, false, true, true] },
      { feature: 'Role-based permissions', values: [false, false, true, true] },
      { feature: 'API access', values: [false, false, true, true] },
      { feature: 'Custom integrations', values: [false, false, false, true] },
      { feature: 'Custom invoice design', values: [false, false, false, true] },
      { feature: 'Data migration assistance', values: [false, false, false, true] },
    ],
  },
  {
    category: 'Support',
    rows: [
      { feature: 'Community support', values: [true, true, true, true] },
      { feature: 'Priority email support', values: [false, true, true, true] },
      { feature: 'Dedicated support', values: [false, false, true, true] },
      { feature: 'Dedicated account manager', values: [false, false, false, true] },
      { feature: 'Priority onboarding', values: [false, false, false, true] },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────
   FAQ
   ────────────────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'What counts as a document?',
    a: 'A document is any invoice, quote, or contract you create. Drafts count once they are saved. The pool resets at the start of each billing cycle.',
  },
  {
    q: 'Can I try before I buy?',
    a: 'Yes. Cloud plans include a 14-day free trial, no credit card required. The self-hosted version is free forever with no limits.',
  },
  {
    q: 'What happens if I hit my document limit?',
    a: 'You can still view and manage existing documents. To create new ones, upgrade your plan or wait for the next billing cycle.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Upgrade, downgrade, or switch to self-hosted at any time. We prorate any changes.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes. Annual billing saves you roughly 30% compared to monthly.',
  },
  {
    q: 'Is the self-hosted version really unlimited?',
    a: 'Yes. When you self-host, there are no document limits, no client limits, and no feature gates. You get the full platform.',
  },
];

/* ──────────────────────────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────────────────────────── */

function DocumentTooltip() {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="ml-1.5 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="What counts as a document?"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 z-50 w-52 rounded-lg border border-border bg-background p-3 shadow-lg text-xs text-muted-foreground leading-relaxed"
          >
            <p>
              <span className="font-medium text-foreground">
                Documents = invoices + quotes + contracts
              </span>{' '}
              combined. Each one you create counts as 1 document. Drafts count
              once saved. Resets every billing cycle.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

function CellValue({ value }: { value: CellValue }) {
  if (value === true) return <Check className="h-4 w-4 text-success mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left hover:text-primary transition-colors"
      >
        <span className="font-medium text-foreground text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero */}
      <div className="max-w-2xl mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Pricing that respects your margins.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Every plan includes quotes, invoices, and contracts. Pay only for the
          volume you need.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex items-center gap-3 mb-10">
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
      </div>

      {/* Plan cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan) => (
          <SpotlightCard
            key={plan.name}
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
            <h2 className="font-display text-lg font-medium text-foreground">
              {plan.name}
            </h2>
            {!plan.highlighted && plan.subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{plan.subtitle}</p>
            )}

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-display font-medium text-foreground">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="text-muted-foreground text-sm">
                {isAnnual ? plan.annualPeriod : plan.period}
              </span>
            </div>

            <div className="mt-3 inline-flex items-center text-xs font-medium text-foreground bg-muted px-2.5 py-1 rounded-md">
              {plan.documents}
              <DocumentTooltip />
            </div>

            <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

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
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground/60">
        Documents = invoices + quotes + contracts combined. Unused documents
        don&rsquo;t roll over. Need more? Contact us for custom volume.
      </p>

      {/* ─── Feature Comparison Table ─────────────────────────── */}
      <div className="mt-24">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-10">
          Compare plans in detail
        </h2>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left font-medium text-foreground px-6 py-4 min-w-[220px]">
                  Feature
                </th>
                {plans.map((p, i) => (
                  <th
                    key={p.name}
                    className={`text-center font-medium px-4 py-4 min-w-[120px] ${
                      i === 1 ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                    }`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonCategories.map((cat) => (
                <>
                  <tr key={cat.category} className="border-b border-border bg-muted/30">
                    <td
                      colSpan={5}
                      className="px-6 py-3 text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.rows.map((row, ri) => (
                    <tr
                      key={`${cat.category}-${ri}`}
                      className={ri < cat.rows.length - 1 ? 'border-b border-border/50' : 'border-b border-border'}
                    >
                      <td className="text-left text-muted-foreground px-6 py-3">
                        {row.feature}
                      </td>
                      {row.values.map((val, ci) => (
                        <td
                          key={`${cat.category}-${ri}-${ci}`}
                          className={`text-center px-4 py-3 ${ci === 1 ? 'bg-primary/5' : ''}`}
                        >
                          <CellValue value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <div className="mt-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
