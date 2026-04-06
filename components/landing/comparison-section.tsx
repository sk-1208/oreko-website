'use client';

import { Check, X, Minus } from 'lucide-react';
import { motion } from 'motion/react';

const competitors = ['Oreko (Free)', 'FreshBooks ($19+)', 'Wave (Free*)', 'HoneyBook ($19+)'];

const rows = [
  {
    feature: 'Quotes',
    values: ['Unlimited', true, 'Estimates only', true],
  },
  {
    feature: 'Invoices',
    values: ['Unlimited', 'Client limits', true, true],
  },
  {
    feature: 'Contracts & e-signatures',
    values: [true, false, false, true],
  },
  {
    feature: 'Online payments',
    values: [true, true, '2.9%+ fees', true],
  },
  {
    feature: 'Analytics dashboard',
    values: [true, true, 'Basic', 'Basic'],
  },
  {
    feature: 'Self-hosted option',
    values: [true, false, false, false],
  },
  {
    feature: 'Open source',
    values: [true, false, false, false],
  },
  {
    feature: 'Full data ownership',
    values: [true, false, false, false],
  },
  {
    feature: 'Client limits',
    values: ['None', 'Plan-dependent', 'None', 'Plan-dependent'],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-4 w-4 text-success mx-auto" />;
  }
  if (value === false) {
    return <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            What $0/month gets you with Oreko.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every feature. No asterisks.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-xl border border-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left font-medium text-foreground px-6 py-4 min-w-[180px]">
                  Feature
                </th>
                {competitors.map((name, i) => (
                  <th
                    key={name}
                    className={`text-center font-medium px-4 py-4 min-w-[140px] ${
                      i === 0
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.feature}
                  className={
                    ri < rows.length - 1 ? 'border-b border-border' : ''
                  }
                >
                  <td className="text-left font-medium text-foreground px-6 py-3.5">
                    {row.feature}
                  </td>
                  {row.values.map((val, ci) => (
                    <td
                      key={`${row.feature}-${ci}`}
                      className={`text-center px-4 py-3.5 ${
                        ci === 0 ? 'bg-primary/5' : ''
                      }`}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-4 text-xs text-muted-foreground/60">
          * Wave charges for payment processing and payroll. Competitor details
          accurate as of last review. Verify before publishing.
        </p>
      </div>
    </section>
  );
}
