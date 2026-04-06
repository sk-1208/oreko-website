import Link from 'next/link';
import {
  Book,
  FileText,
  Code,
  Terminal,
  Rocket,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Documentation | Oreko',
  description:
    'Learn how to use Oreko to create beautiful quotes and invoices.',
};

const docSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of Oreko and create your first quote.',
    icon: Rocket,
    href: '#getting-started',
  },
  {
    title: 'Quotes',
    description:
      'Create, customize, and send professional quotes to your clients.',
    icon: FileText,
    href: '#quotes',
  },
  {
    title: 'Invoices',
    description: 'Convert quotes to invoices and manage payments.',
    icon: Book,
    href: '#invoices',
  },
  {
    title: 'API Reference',
    description:
      'Integrate Oreko with your existing tools and workflows.',
    icon: Code,
    href: '/docs/api',
  },
  {
    title: 'Self-Hosting',
    description: 'Deploy Oreko on your own infrastructure with Docker.',
    icon: Terminal,
    href: '#self-hosting',
  },
  {
    title: 'FAQ',
    description: 'Find answers to commonly asked questions.',
    icon: HelpCircle,
    href: '#faq',
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Documentation
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Everything you need to get started with Oreko.
        </p>
      </div>

      {/* Section cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {docSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2.5 transition-colors group-hover:bg-primary/20">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display font-medium text-foreground">
                {section.title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Getting Started */}
      <section id="getting-started" className="mt-24">
        <h2 className="font-display text-2xl font-medium text-foreground tracking-tight mb-8">
          Getting Started
        </h2>
        <div className="space-y-8">
          {[
            {
              step: '1',
              title: 'Create Your Account',
              body: (
                <>
                  Sign up for a free account at{' '}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    oreko.app/register
                  </Link>
                  . You can also self-host Oreko using Docker.
                </>
              ),
            },
            {
              step: '2',
              title: 'Set Up Your Business Profile',
              body: 'Add your business information, logo, and branding in the Settings page. This information will appear on all your quotes and invoices.',
            },
            {
              step: '3',
              title: 'Create Your First Quote',
              body: 'Click "New Quote" to open the visual quote builder. Drag and drop blocks to create a professional quote, then send it to your client for approval.',
            },
            {
              step: '4',
              title: 'Convert to Invoice',
              body: 'When your client accepts the quote, convert it to an invoice with one click. No data re-entry required.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                {item.step}
              </div>
              <div>
                <h3 className="font-display font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Hosting */}
      <section id="self-hosting" className="mt-24">
        <h2 className="font-display text-2xl font-medium text-foreground tracking-tight mb-8">
          Self-Hosting with Docker
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Oreko can be self-hosted on your own infrastructure using Docker.
        </p>
        <div className="rounded-xl border border-border bg-muted/50 p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-foreground">
            <code>{`# Clone the repository
git clone https://github.com/orekoapp/oreko.git
cd oreko

# Start with Docker Compose
docker compose up -d

# Oreko is now running at http://localhost:3000`}</code>
          </pre>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          For detailed installation instructions, see our{' '}
          <a
            href="https://github.com/orekoapp/oreko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub repository
          </a>
          .
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="mt-24 rounded-2xl bg-primary/5 border border-primary/10 px-8 py-12 sm:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-muted-foreground">
          Need more help?
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-accent rounded-md transition-all"
          >
            Contact Support
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-all"
          >
            Get Started Free
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
