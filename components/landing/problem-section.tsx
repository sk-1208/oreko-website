'use client';

import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground tracking-tight leading-snug">
            You didn&rsquo;t start your business to chase payments.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Late invoices. Copy-pasted contracts. Three different tools that
              don&rsquo;t talk to each other. A spreadsheet held together by
              hope.
            </p>
            <p>
              Meanwhile, every invoicing platform wants $30&ndash;80/month for
              the privilege of holding your data hostage. Miss a payment? Locked
              out. Want to export? Good luck. Need a custom workflow? Upgrade.
            </p>
            <p className="text-foreground font-medium">
              You built your business from scratch. Your tools should work the
              same way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
