'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowRightLeft, ScrollText, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const features = [
  {
    tag: 'Quotes',
    icon: FileText,
    title: 'Win the project before your competitor opens their template',
    description:
      'Build branded quotes in your visual editor. Add line items, apply discounts, set payment terms, and send to clients for review. Clients approve directly from their quote page. No PDFs lost in email threads. When they accept? One click converts the quote into a contract and invoice.',
    screenshot: '/screenshots/quote-detail.png',
    screenshotAlt: 'Oreko quote builder with live preview and client-facing quote page',
    link: '/features#quotes',
  },
  {
    tag: 'Invoices',
    icon: ArrowRightLeft,
    title: 'Send invoices that get paid, not ignored',
    description:
      'Create invoices from scratch or convert accepted quotes with one click. Track payment status in real time. Send automated reminders so you never have to write another "just following up" email. Let clients pay online, instantly.',
    screenshot: '/screenshots/invoice-detail.png',
    screenshotAlt: 'Oreko invoice list with payment status tracking and $4,500 paid modal',
    link: '/features#invoicing',
  },
  {
    tag: 'Contracts',
    icon: ScrollText,
    title: 'From handshake to signature without leaving the platform',
    description:
      'Draft contracts from templates or build them from scratch. Send for e-signature and track every stage in one dashboard. Everything lives where it should: next to the quote and invoice it belongs to.',
    screenshot: '/screenshots/contracts.png',
    screenshotAlt: 'Oreko contracts table with status badges for Signed, Sent, Draft, Viewed, Expired',
    link: '/features#contracts',
  },
  {
    tag: 'Analytics',
    icon: BarChart3,
    title: 'Know where your money is, not where it was',
    description:
      'Track revenue trends, quote conversion rates, invoice status, and client insights from a single dashboard. Filter by date range. Break down by client. Export when your accountant asks. Your financial data stays on your infrastructure.',
    screenshot: '/screenshots/analytics.png',
    screenshotAlt: 'Oreko analytics dashboard with revenue chart, quote status, and conversion rates',
    link: '/features#analytics',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {features.map((feature, i) => (
          <div key={feature.tag} className="space-y-8">
            {/* Text — always left-aligned */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3 font-text">
                <feature.icon className="h-4 w-4" />
                <span>{feature.tag}</span>
              </div>
              <h2 className="font-display text-3xl font-medium text-foreground tracking-tight leading-snug">
                {feature.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <Link
                href={feature.link}
                className="group mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Screenshot — full width below with spotlight hover */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            >
              <SpotlightCard className="rounded-xl border border-border shadow-lg overflow-hidden bg-card transition-shadow duration-500 hover:shadow-xl">
                <Image
                  src={feature.screenshot}
                  alt={feature.screenshotAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </SpotlightCard>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
