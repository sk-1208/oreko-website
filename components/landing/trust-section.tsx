'use client';

import { Github, Server, Scale, Lock, Users } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  { icon: Github, label: 'Open source' },
  { icon: Server, label: 'Self-hosted' },
  { icon: Scale, label: 'AGPL v3 License' },
  { icon: Lock, label: 'No vendor lock-in' },
  { icon: Users, label: 'Community-driven' },
];

export function TrustSection() {
  return (
    <section className="bg-transparent py-12 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {values.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon className="h-4 w-4 text-primary/60" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
