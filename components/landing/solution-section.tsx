'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function SolutionSection() {
  return (
    <section className="bg-accent/50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground tracking-tight leading-snug">
            One platform. Every business tool.{' '}
            <span className="text-primary">Completely yours.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Oreko replaces the patchwork of quoting apps, invoicing software,
            contract tools, and payment processors with a single open-source
            platform you can self-host for free or run on our cloud. No
            feature gates. No client limits. No surprises on your credit card.
          </p>
          <Link
            href="/features"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See how it works
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
