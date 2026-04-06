import Link from 'next/link';
import { Heart, Users, Code, Globe } from 'lucide-react';

export const metadata = {
  title: 'About | Oreko',
  description:
    'Learn about Oreko and our mission to make invoicing beautiful and accessible.',
};

const values = [
  {
    icon: Heart,
    title: 'Open Source First',
    description:
      'Transparency and community at the core. Oreko is MIT licensed and will always be free to self-host.',
  },
  {
    icon: Users,
    title: 'Built for Freelancers',
    description:
      'We understand the challenges of running a small business. Designed by freelancers, for freelancers.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description:
      'Modern tech stack, clean codebase, and comprehensive documentation. Contribute or customize to your needs.',
  },
  {
    icon: Globe,
    title: 'Privacy Focused',
    description:
      'Your data belongs to you. Self-host for complete control or trust our privacy-first cloud hosting.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        {/* Hero */}
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          About Oreko
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We&apos;re building the open-source alternative to expensive invoicing
          tools. Beautiful quotes and invoices should be accessible to everyone.
        </p>
      </div>

      {/* Story + Mission */}
      <div className="mt-16 max-w-3xl space-y-12">
        <div>
          <h2 className="font-display text-2xl font-medium text-foreground tracking-tight">
            Our Story
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Oreko was born out of frustration. As freelancers and agency owners
              ourselves, we were tired of choosing between ugly
              spreadsheet-based invoices and expensive SaaS tools that charged
              $20-50/month just to send a quote.
            </p>
            <p>
              We wanted something different: a beautiful, visual quote builder
              that was actually affordable. When we couldn&apos;t find it, we
              decided to build it ourselves and make it open source so everyone
              could benefit.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-medium text-foreground tracking-tight">
            Our Mission
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Make professional invoicing accessible to every freelancer and small
            business, regardless of budget. Looking professional shouldn&apos;t
            cost a fortune.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-medium text-foreground">
                {value.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-2xl bg-primary/5 border border-primary/10 px-8 py-16 sm:px-16">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-medium text-foreground tracking-tight">
            Join the Community
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Oreko is built by a community of developers and freelancers. Join us
            and help shape the future of open-source invoicing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/orekoapp/oreko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-accent rounded-md transition-all"
            >
              View on GitHub
            </a>
            <Link
              href="/register"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-all"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
