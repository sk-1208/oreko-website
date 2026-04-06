import Link from 'next/link';
import { Code, Key, FileJson, Webhook } from 'lucide-react';

export const metadata = {
  title: 'API Reference | Oreko',
  description:
    'Integrate Oreko with your existing tools using our REST API.',
};

const features = [
  {
    icon: Key,
    title: 'Authentication',
    description:
      'Secure API key authentication with role-based access control.',
  },
  {
    icon: FileJson,
    title: 'REST API',
    description:
      'Full CRUD operations for quotes, invoices, clients, and more.',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description:
      'Real-time notifications for quote views, signatures, and payments.',
  },
  {
    icon: Code,
    title: 'SDKs',
    description:
      'Official SDKs for Node.js, Python, and more coming soon.',
  },
];

export default function ApiDocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-6">
          <Code className="h-3.5 w-3.5" />
          API Reference
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Oreko API
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Integrate Oreko with your existing tools and workflows.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="rounded-xl border border-warning/30 bg-warning/10 p-6 mb-16">
        <h2 className="font-display font-medium text-warning">
          API Coming Soon
        </h2>
        <p className="mt-1 text-sm text-warning/80">
          We&apos;re currently building out our REST API. Join our waitlist
          to be notified when it&apos;s ready.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-medium text-foreground">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-accent rounded-md transition-all"
        >
          Join Waitlist
        </Link>
        <a
          href="https://github.com/orekoapp/oreko"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-all"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
