'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Is it really free?',
    answer:
      'Yes. The self-hosted version is free forever with no feature limits. You get the same platform as our paid cloud users. We make money from managed hosting and team plans, not from locking features behind paywalls.',
  },
  {
    question: 'How hard is self-hosting?',
    answer:
      'If you can follow a README, you can deploy Oreko. We provide Docker images and one-click deploy options for popular platforms. Most users are up and running in under 15 minutes.',
  },
  {
    question: 'Can I migrate from FreshBooks / Wave / Bonsai?',
    answer:
      'Yes. Oreko supports CSV import for clients, invoices, and quotes. We also have migration guides for the most popular platforms. Your data comes with you.',
  },
  {
    question: 'Is my client data secure?',
    answer:
      'Self-hosted: your data never leaves your server. Cloud: we use encrypted storage, automated backups, and follow industry-standard security practices. Either way, you can export or delete everything at any time.',
  },
  {
    question: 'What if I outgrow the free plan?',
    answer:
      "You won't. There's no limit on clients, invoices, or features in the free plan. If you want managed hosting or team features, upgrade to Cloud or Team. If your needs change, downgrade anytime. No penalties.",
  },
  {
    question: 'Can I customize invoices and quotes?',
    answer:
      "Fully. Templates, branding, colors, fields, layouts. It's your platform. And because it's open source, developers can modify anything at the code level.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
      >
        <span className="font-medium text-foreground text-sm sm:text-base pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="font-display text-3xl font-medium text-foreground tracking-tight">
              Questions you&rsquo;d ask before switching.
            </h2>
          </motion.div>

          <motion.div
            className="border-t border-border"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
