# Oreko Repo — Exact Changes for Every File

Everything below refers to `https://github.com/orekoapp/oreko`.

**Already done (no changes needed):** `.env.example`, `docker-compose.yml`, `docker-compose.prod.yml`, `docker-compose.simple.yml` — these are already rebranded to Oreko.

---

## 1. Repo Settings (GitHub UI)

Go to **Settings** on the repo and update:

| Setting     | Current                                   | Change to                                                                                  |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| Description | _(empty)_                                 | `The open-source quote and invoice tool for freelancers and small businesses.`             |
| Homepage    | `https://quote-software-gamma.vercel.app` | `https://oreko.app`                                                                        |
| Topics      | _(empty)_                                 | `invoicing`, `open-source`, `nextjs`, `self-hosted`, `quotes`, `freelancers`, `typescript` |

---

## 2. LICENSE — Replace Entire File

Delete the current MIT license. Replace with the full AGPL v3 text.

Download from: https://www.gnu.org/licenses/agpl-3.0.txt

Then change the copyright line at the top to:

```
Copyright (C) 2026 Oreko Contributors
```

The rest of the AGPL v3 text stays as-is from the GNU website.

---

## 3. README.md — Replace Entire File

Replace the entire README.md with the content below:

````md
# Oreko

**The open-source quote and invoice tool for freelancers and small businesses.**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)

Oreko is an open-source, self-hosted visual quote and invoice management tool for small businesses, freelancers, and agencies. It provides a beautiful, block-based visual builder for creating professional quotes that convert to invoices with zero data re-entry.

---

## Screenshots

> Add 3-4 screenshots to a `docs/images/` folder in the repo, then reference them here.

![Dashboard](docs/images/dashboard.png)

![Visual Quote Builder](docs/images/quote-builder.png)

![Client Portal](docs/images/client-portal.png)

![Invoice PDF](docs/images/invoice-pdf.png)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
  - [Docker (Recommended)](#docker-recommended)
  - [Manual Installation](#manual-installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Development Commands](#development-commands)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Visual Quote Builder

Create stunning, professional quotes with a drag-and-drop block-based editor. No more spreadsheet-like interfaces.

### One-Click Quote-to-Invoice Conversion

Convert accepted quotes to invoices instantly with zero data re-entry. All line items, pricing, and client information transfer automatically.

### Client Portal

Beautiful, mobile-responsive client-facing pages for viewing, signing, and paying quotes and invoices. No account required for clients.

### Rate Card System

Advanced rate card management for quick quote creation with predefined services and pricing tiers. A key differentiator from competitors.

### Additional Features

| Feature                        | Description                                                                |
| ------------------------------ | -------------------------------------------------------------------------- |
| **Project Management**         | Organize quotes, invoices, and contracts by client projects                |
| **E-Signature Capture**        | Legally compliant electronic signatures (E-SIGN, UETA)                     |
| **Stripe Payment Integration** | Accept credit cards and ACH payments via Stripe Connect                    |
| **PDF Generation**             | Professional PDF exports for quotes and invoices                           |
| **Email Notifications**        | Automated email workflows for quotes, invoices, and reminders              |
| **Dashboard Analytics**        | Key metrics including revenue, outstanding invoices, and conversion rates  |
| **Client Management**          | Centralized client database with full history and lifetime value tracking  |
| **Contract Templates**         | Attach contracts with merge fields to quotes                               |
| **Milestone Payments**         | Support for deposits, milestones, and recurring payments                   |
| **Modular Workspace**          | Enable only the modules you need (Quotes, Invoices, Contracts, Rate Cards) |
| **Self-Hosted**                | Full control over your data with Docker deployment                         |

---

## Tech Stack

| Layer                | Technology                      |
| -------------------- | ------------------------------- |
| **Framework**        | Next.js 14+ (App Router)        |
| **Language**         | TypeScript 5.x                  |
| **UI Library**       | Shadcn UI                       |
| **CSS**              | Tailwind CSS 3.4+               |
| **Database**         | PostgreSQL 15+                  |
| **ORM**              | Prisma 5.x                      |
| **Cache/Queue**      | Redis + BullMQ                  |
| **Authentication**   | NextAuth.js 5.x                 |
| **Payments**         | Stripe Connect                  |
| **Rich Text**        | Tiptap                          |
| **Drag & Drop**      | dnd-kit                         |
| **PDF Generation**   | Puppeteer / react-pdf           |
| **Testing**          | Vitest (unit), Playwright (E2E) |
| **Package Manager**  | pnpm 8+                         |
| **Monorepo**         | Turborepo                       |
| **Containerization** | Docker + Docker Compose         |
| **Reverse Proxy**    | Traefik v3                      |

---

## Quick Start

### Docker (Recommended)

The fastest way to get Oreko running is with Docker Compose.

**Prerequisites:**

- Docker 20.10+
- Docker Compose 2.0+

**Steps:**

1. Clone the repository:

```bash
git clone https://github.com/orekoapp/oreko.git
cd oreko
```

2. Copy the environment file and configure it:

```bash
cp .env.example .env
```

3. Start all services:

```bash
docker-compose up -d
```

4. Run database migrations:

```bash
docker-compose exec web pnpm db:migrate
```

5. (Optional) Seed development data:

```bash
docker-compose exec web pnpm db:seed
```

6. Access the application at `http://localhost:3000`

**Docker Commands:**

```bash
docker-compose up -d          # Start all services in background
docker-compose down           # Stop all services
docker-compose logs -f        # View logs
docker-compose restart web    # Restart the web service
```

---

### Manual Installation

For development or custom deployment scenarios.

**Prerequisites:**

- Node.js 18 LTS or later
- pnpm 8+
- PostgreSQL 15+
- Redis 7+

**Steps:**

1. Clone the repository:

```bash
git clone https://github.com/orekoapp/oreko.git
cd oreko
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy and configure environment variables:

```bash
cp .env.example .env
```

4. Set up the database:

```bash
# Start PostgreSQL and Redis (if not already running)
# Then run migrations
pnpm db:migrate
```

5. (Optional) Seed development data:

```bash
pnpm db:seed
```

6. Start the development server:

```bash
pnpm dev
```

7. Access the application at `http://localhost:3000`

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable                 | Required | Description                               | Example                                       |
| ------------------------ | -------- | ----------------------------------------- | --------------------------------------------- |
| `DATABASE_URL`           | Yes      | PostgreSQL connection string              | `postgresql://user:pass@localhost:5432/oreko` |
| `REDIS_URL`              | Yes      | Redis connection string                   | `redis://localhost:6379`                      |
| `NEXTAUTH_SECRET`        | Yes      | Secret for NextAuth.js session encryption | `your-secret-key-here`                        |
| `NEXTAUTH_URL`           | Yes      | Application URL                           | `http://localhost:3000`                       |
| `STRIPE_SECRET_KEY`      | Yes      | Stripe API secret key                     | `sk_test_...`                                 |
| `STRIPE_PUBLISHABLE_KEY` | Yes      | Stripe publishable key                    | `pk_test_...`                                 |
| `STRIPE_WEBHOOK_SECRET`  | Yes      | Stripe webhook signing secret             | `whsec_...`                                   |
| `SMTP_HOST`              | No       | SMTP server host                          | `smtp.sendgrid.net`                           |
| `SMTP_PORT`              | No       | SMTP server port                          | `587`                                         |
| `SMTP_USER`              | No       | SMTP username                             | `apikey`                                      |
| `SMTP_PASS`              | No       | SMTP password                             | `your-smtp-password`                          |
| `SMTP_FROM`              | No       | Default sender email                      | `noreply@yourdomain.com`                      |

See `.env.example` for a complete template with all available options.

---

## Project Structure

```
oreko/
├── apps/
│   └── web/                     # Next.js application
│       ├── app/                 # App Router pages
│       │   ├── (auth)/          # Auth routes (login, register, etc.)
│       │   ├── (dashboard)/     # Protected dashboard routes
│       │   ├── (public)/        # Public client-facing pages
│       │   └── api/             # API routes
│       ├── components/          # React components
│       │   ├── ui/              # Shadcn UI components (43)
│       │   ├── projects/        # Project management components
│       │   ├── quotes/          # Quote-specific components
│       │   ├── invoices/        # Invoice-specific components
│       │   ├── clients/         # Client management components
│       │   ├── rate-cards/      # Rate card components
│       │   └── shared/          # Shared components
│       ├── lib/                 # Utilities and helpers
│       │   ├── actions/         # Server actions
│       │   ├── hooks/           # Custom React hooks
│       │   ├── utils/           # Utility functions
│       │   └── validations/     # Zod schemas
│       └── styles/              # Global styles
├── packages/
│   ├── database/                # Prisma schema and client
│   ├── ui/                      # Shared UI components
│   ├── email-templates/         # Email templates (React Email)
│   ├── pdf-templates/           # PDF generation templates
│   └── shared/                  # Shared utilities and types
├── docker/                      # Docker configuration
│   ├── development/
│   └── production/
├── docs/                        # Documentation
├── specs/                       # Specification documents
└── research/                    # Research and analysis docs
```

### Key Directories

| Directory                      | Purpose                                           |
| ------------------------------ | ------------------------------------------------- |
| `apps/web/app`                 | Next.js 14 App Router pages and layouts           |
| `apps/web/components`          | 55+ domain components + 43 Shadcn UI components   |
| `apps/web/components/projects` | Project management (list, detail, form, selector) |
| `apps/web/lib`                 | 85+ server actions, hooks, and utilities          |
| `apps/web/lib/projects`        | Project server actions and types                  |
| `packages/database`            | Prisma schema with 18 models                      |
| `packages/types`               | Shared TypeScript type definitions                |
| `packages/utils`               | Shared utility functions                          |

---

## Development Commands

### Development

```bash
pnpm dev              # Start development server with hot reload
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript type checking
```

### Database

```bash
pnpm db:migrate       # Run database migrations
pnpm db:migrate:dev   # Create and run migrations (development)
pnpm db:push          # Push schema changes directly (development)
pnpm db:seed          # Seed development data
pnpm db:studio        # Open Prisma Studio (database GUI)
pnpm db:reset         # Reset database (WARNING: deletes all data)
```

### Testing

```bash
pnpm test             # Run all tests
pnpm test:e2e         # Run E2E tests (Playwright)
```

### Docker

```bash
docker-compose up -d      # Start all services
docker-compose down       # Stop all services
docker-compose logs -f    # View logs
docker-compose build      # Rebuild containers
```

### Monorepo

```bash
pnpm turbo run build      # Build all packages
pnpm turbo run lint       # Lint all packages
pnpm turbo run test       # Test all packages
```

---

## Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following our coding standards
4. Write tests for new functionality
5. Run linting and tests: `pnpm lint && pnpm test`
6. Commit using conventional commits: `git commit -m "feat: add new feature"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

### Code Style

- TypeScript strict mode required
- Functional React components with hooks
- Server Components by default, `'use client'` only when needed
- Tailwind CSS for styling
- Zod for validation
- Conventional commits

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `chore/` - Maintenance tasks
- `docs/` - Documentation updates

---

## Known Limitations

| Area                           | Detail                                                                                                                                                                                                            |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Database CHECK constraints** | Prisma ORM does not support native CHECK constraints. All monetary and quantity validations are enforced at the application level.                                                                                |
| **Data retention**             | No automated archiving or purging of old records. Soft-deleted data accumulates. For large deployments, implement a periodic cleanup cron job against the `deletedAt IS NOT NULL` records.                        |
| **Signature encryption**       | E-signature images are stored as base64 in the database without at-rest encryption. Database-level access controls apply. For sensitive deployments, consider server-side encryption or encrypted object storage. |
| **Cloud storage**              | S3 and Cloudflare R2 providers are stubbed but not implemented. Local file storage is the default.                                                                                                                |
| **next-auth**                  | Uses NextAuth.js v5 beta. Pin the exact version in `package.json` and test before upgrading.                                                                                                                      |

---

## License

Oreko is open-source software licensed under the [GNU Affero General Public License v3.0](LICENSE).

---

## Support

- **Documentation:** [docs/](docs/)
- **Issues:** [GitHub Issues](https://github.com/orekoapp/oreko/issues)

---

Built with care by the Oreko community.
````

**What changed vs the old README:**

- Title: `QuoteCraft` → `Oreko`
- Tagline: removed "alternative to Bloom and Bonsai"
- Badges: removed fake Version and Tests badges, changed MIT badge → AGPL v3
- Removed `[Live Demo]` link entirely
- Clone URLs: `WisdmLabs/quote-software` → `orekoapp/oreko` (both Docker and Manual sections)
- Env table: `quotecraft` → `oreko` in DATABASE_URL example
- Project structure: `quote-software/` → `oreko/`
- License section: MIT → AGPL v3, removed the full license block
- Support section: removed Discussions link, updated Issues URL to `orekoapp/oreko`
- Footer: `QuoteCraft community` → `Oreko community`

---

## 4. CONTRIBUTING.md — Find and Replace

Apply these replacements across the **entire file**:

| Find (exact)                                               | Replace with                                          |
| ---------------------------------------------------------- | ----------------------------------------------------- |
| `QuoteCraft`                                               | `Oreko`                                               |
| `quote-software`                                           | `oreko`                                               |
| `ORIGINAL_OWNER/oreko` (after above replace)               | `orekoapp/oreko`                                      |
| `QuoteCraft version/commit: [e.g., v1.0.0 or commit hash]` | `Oreko version/commit: [e.g., v1.0.0 or commit hash]` |

Then replace the **Getting Help** section (currently references GitHub Discussions) with:

```md
## Getting Help

- **GitHub Issues** — For bug reports and feature requests
- **Email** — support@oreko.app for general questions

### When to Use Each Channel

| Need              | Channel                                    |
| ----------------- | ------------------------------------------ |
| Bug reports       | GitHub Issues                              |
| Feature requests  | GitHub Issues                              |
| General questions | Email support@oreko.app                    |
| Code review help  | Pull Request comments                      |
| Security issues   | Email security@oreko.app (see SECURITY.md) |
```

Delete everything in the current "Getting Help" section that references `GitHub Discussions`, `Q&A`, `Ideas`, or `Show and Tell` category links.

At the bottom, change the last line to:

```md
Thank you for contributing to Oreko! Your efforts help make quote and invoice management better for small businesses everywhere.
```

---

## 5. SECURITY.md — Find and Replace

Apply these replacements:

| Find (exact)              | Replace with         |
| ------------------------- | -------------------- |
| `QuoteCraft`              | `Oreko`              |
| `security@quotecraft.dev` | `security@oreko.app` |

That means these specific lines change:

```
# Security Policy                          ← no change
...
If you discover a security vulnerability in Oreko, ...   ← was "QuoteCraft"
...
Instead, please email us at **security@oreko.app** with: ← was "security@quotecraft.dev"
...
When deploying Oreko, ensure:                             ← was "QuoteCraft"
```

---

## 6. CODE_OF_CONDUCT.md — One Change

Replace the enforcement email:

| Find                     | Replace with        |
| ------------------------ | ------------------- |
| `conduct@quotecraft.dev` | `conduct@oreko.app` |

The specific line to change:

```md
reported to the community leaders responsible for enforcement at
**conduct@oreko.app**.
```

Everything else in this file is standard Contributor Covenant and stays as-is.

---

## 7. CHANGELOG.md — Find and Replace

Apply these replacements across the entire file:

| Find (exact)               | Replace with     |
| -------------------------- | ---------------- |
| `QuoteCraft`               | `Oreko`          |
| `WisdmLabs/quote-software` | `orekoapp/oreko` |

The specific lines that change:

```md
# Changelog

All notable changes to Oreko will be documented in this file.
← was "QuoteCraft"
```

```md
## [1.0.0] - 2026-01-15

### Added

- Initial release of Oreko ← was "QuoteCraft"
```

```md
[Unreleased]: https://github.com/orekoapp/oreko/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/orekoapp/oreko/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/orekoapp/oreko/releases/tag/v1.0.0
```

← all three were `WisdmLabs/quote-software`

---

## 8. CONSTITUTION.md — Find and Replace

Apply this single replacement across the entire file:

| Find (exact) | Replace with |
| ------------ | ------------ |
| `QuoteCraft` | `Oreko`      |

This affects **~30 instances** throughout the file. Key lines:

- `# QuoteCraft Development Constitution` → `# Oreko Development Constitution`
- `QuoteCraft is **exclusively** a visual...` → `Oreko is **exclusively** a visual...`
- `**QuoteCraft SHALL:**` → `**Oreko SHALL:**`
- `**QuoteCraft SHALL NOT:**` → `**Oreko SHALL NOT:**`
- `does it align with QuoteCraft's mission?` → `does it align with Oreko's mission?`
- The last line: `...governs all development activities for the QuoteCraft project.` → `...for the Oreko project.`

---

## 9. package.json — Four Changes

Open `package.json` and change these fields:

```json
{
  "name": "oreko", // was "quotecraft"
  "description": "Open-source quote and invoice tool for freelancers and small businesses",
  // was "Visual quote and invoice management software"
  "repository": {
    "type": "git",
    "url": "https://github.com/orekoapp/oreko.git"
    // was "https://github.com/quotecraft/quotecraft.git"
  },
  "license": "AGPL-3.0-only" // was "MIT"
}
```

Also check: the `db:generate`, `db:push`, etc. scripts reference `@quotecraft/database`. These need to change to `@oreko/database` — but **only if the `packages/database/package.json` name field is also changed**. Check that file and update both together:

```
"db:generate": "pnpm --filter @oreko/database generate",
"db:push": "pnpm --filter @oreko/database push",
"db:migrate": "pnpm --filter @oreko/database migrate",
"db:studio": "pnpm --filter @oreko/database studio",
"db:seed": "pnpm --filter @oreko/database seed",
```

---

## 10. Delete Internal Files from Repo Root

These are internal dev docs that should NOT be public. Delete all of them:

```
BUG_ANALYSIS_16FEB.md
DEMO_TEST_OBSERVATIONS.md
FEEDBACK_ANALYSIS.md
FIT_QUALITY_REPORT.md
ISSUES-2026-03-17.md
LOGIN_PAGE_ANALYSIS.md
PENDING_BUGS.md
PRODUCTION_TEST_REPORT.md
PROJECT_STATUS.md
ROOT_CAUSE_ANALYSIS.md
SIMILAR_BUGS_REPORT.md
UI_BRIDGE_EXECUTION_PLAN.md
UI_BRIEF_COMPARISON_REPORT.md
```

Also check: `bugs/`, `reports/`, `research/`, `brief/` directories — review if any of these contain internal-only content that shouldn't be public.

---

## 11. Delete Screenshot PNGs from Repo Root

These clutter the root directory. Delete them:

```
application-shell-01-collapsed.png
application-shell-01-local.png
application-shell-1-free-full.png
application-shell-1-free.png
production-analytics-working.png
production-dashboard-demo-user.png
production-rate-cards-working.png
shadcnstudio-application-shells.png
shell-icon-mode-collapsed.png
shell-icon-mode-expanded.png
```

---

## 12. Other Files to Grep (App Repo)

Run `grep -r "QuoteCraft\|quotecraft\|quote-software\|WisdmLabs" --include="*.md" --include="*.json" --include="*.yml" --include="*.yaml" --include="*.ts" --include="*.tsx" --include="*.js"` on the repo to catch any remaining references in:

- `docs/` directory
- `specs/` directory
- `_project_specs/` directory
- Any `.ts` / `.tsx` files that might have old branding in comments or strings
- Any sub-package `package.json` files (e.g., `packages/database/package.json`, `packages/ui/package.json`)

---

## 13. Add Screenshots to README

Before pushing the new README, take 3-4 screenshots and save them in `docs/images/` in the app repo:

| Screenshot needed              | What to capture                                                   |
| ------------------------------ | ----------------------------------------------------------------- |
| `docs/images/dashboard.png`    | The main dashboard with metrics cards and recent activity         |
| `docs/images/quote-builder.png`| The visual quote builder with drag-and-drop blocks                |
| `docs/images/client-portal.png`| The client-facing quote/invoice view                              |
| `docs/images/invoice-pdf.png`  | A generated invoice PDF or the invoice preview screen             |

Tips:
- Use a demo account with realistic-looking data (not "Test Client" or "Lorem ipsum")
- Light mode preferred for README screenshots (higher contrast on GitHub)
- Aim for 1200-1400px wide, crop browser chrome
- Compress with TinyPNG or similar before committing

The README template above already includes these image references:

```md
![Dashboard](docs/images/dashboard.png)
![Visual Quote Builder](docs/images/quote-builder.png)
![Client Portal](docs/images/client-portal.png)
![Invoice PDF](docs/images/invoice-pdf.png)
```

---

# Website Fixes (oreko-website repo)

Issues on the marketing website at `oreko.app`.

**Key principle:** WisdmLabs is the parent company. Oreko is the app name. WisdmLabs stays in all legal text. Only emails change from `@wisdmlabs.com` → `@oreko.app`.

---

## W1. blog/page.tsx — Broken GitHub URL

**File:** `app/(marketing)/blog/page.tsx` line 25

| Find                                            | Replace with                              |
| ----------------------------------------------- | ----------------------------------------- |
| `https://github.com/WisdmLabs/quote-software`  | `https://github.com/orekoapp/oreko`       |

---

## W2. about/page.tsx — Wrong License

**File:** `app/(marketing)/about/page.tsx` line 15

| Find                                                                       | Replace with                                                                     |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Oreko is MIT licensed and will always be free to self-host.`              | `Oreko is open source under AGPL v3 and will always be free to self-host.`       |

---

## W3. opengraph-image.tsx — Wrong License

**File:** `app/opengraph-image.tsx` line 101

| Find                         | Replace with           |
| ---------------------------- | ---------------------- |
| `<span>MIT License</span>`  | `<span>AGPL v3</span>`|

---

## W4. twitter-image.tsx — Wrong License

**File:** `app/twitter-image.tsx` line 101

| Find                         | Replace with           |
| ---------------------------- | ---------------------- |
| `<span>MIT License</span>`  | `<span>AGPL v3</span>`|

---

## W5. terms/page.tsx — Full Corrected Text

**File:** `app/(marketing)/terms/page.tsx`

**Changes:** (1) Fixed product description in Section 2. (2) All `@wisdmlabs.com` emails → `@oreko.app`. (3) WisdmLabs company name kept as-is.

Lines marked with `← CHANGED` show what's different from the current file.

```
Terms of Service
Last updated: April 1, 2026

Please read these Terms carefully before using Oreko. By creating an account
or using the service, you agree to be bound by these Terms. If you do not
agree, do not use Oreko.

1. Who These Terms Apply To

These Terms of Service ("Terms") are a legal agreement between you ("User",
"you") and WisdmLabs ("we", "us", "our"), the company that owns and operates
Oreko at oreko.app.

If you are using Oreko on behalf of a company or organisation, you confirm
that you have the authority to bind that entity to these Terms.

2. The Service

Oreko is an open-source quote and invoice management tool for freelancers     ← CHANGED (was "feedback management tool that helps software teams collect, organise, and act on user feedback")
and small businesses. We reserve the right to modify, suspend, or
discontinue any part of the service at any time with reasonable notice.

3. Your Account

- You must provide accurate and complete information when creating your
  account.
- You are responsible for maintaining the security of your account
  credentials.
- You must notify us immediately at support@oreko.app if you suspect         ← CHANGED (was support@wisdmlabs.com)
  unauthorised access to your account.
- You may not share your account with others or create accounts on behalf
  of someone else without their consent.
- We reserve the right to suspend or terminate accounts that violate these
  Terms.

4. Acceptable Use

You agree not to use Oreko to:
- Violate any applicable law or regulation.
- Upload or transmit malware, spam, or harmful content.
- Attempt to gain unauthorised access to Oreko's systems or other users'
  accounts.
- Scrape, copy, or redistribute Oreko's data or functionality without
  permission.
- Use the service in a way that disrupts or degrades performance for other
  users.
- Reverse engineer, decompile, or attempt to extract the source code of
  proprietary parts of Oreko.

5. Your Data

You own all data you submit to Oreko. By using the service, you grant
WisdmLabs a limited, non-exclusive licence to store, process, and display
your data solely for the purpose of providing the service to you.

We do not claim ownership of your data. We will not use your data for any
purpose other than operating and improving Oreko, as described in our Privacy
Policy.

6. Open Source Licence

The core of Oreko is open-source software released under the GNU Affero
General Public License v3 (AGPL v3). Your use of the hosted service at
oreko.app is governed by these Terms. If you self-host Oreko using the
open-source code, the AGPL v3 licence applies.

Certain components of Oreko are proprietary and are not covered by the
AGPL v3 licence. These proprietary components are explicitly identified in
the PROPRIETARY_MODULES file in the root of the Oreko repository.

7. Subscription and Billing

7.1 Plans
Oreko offers free and paid subscription plans. The features available on
each plan are described at oreko.app/pricing and may change with notice.

7.2 Payment
Paid plans are billed in advance on a monthly or annual basis. Payments are
processed securely via our payment processor.

7.3 Cooling-Off Period
First-time subscribers to any paid plan may request a full refund within
14 days of their initial subscription purchase, provided they have not
substantially used the paid features during that period. To request a
refund, contact support@oreko.app within the 14-day window.                   ← CHANGED (was support@wisdmlabs.com)

7.4 Cancellation and Refunds
- You may cancel your subscription at any time. Access continues until the
  end of your current billing period.
- Outside the cooling-off period, we do not offer refunds for partial
  billing periods, except where required by law.
- If we discontinue Oreko, we will provide a pro-rata refund for any unused
  prepaid period.

7.5 Price Changes
We may change subscription prices with at least 30 days' notice. Continued
use after the effective date of a price change constitutes acceptance of the
new pricing.

8. Intellectual Property

All intellectual property in Oreko, including the brand, design, proprietary
code, and documentation, belongs to WisdmLabs. These Terms do not grant you
any right to use our trademarks, logos, or brand name without our prior
written consent.

9. Availability, Uptime and Service Levels

We target 99.5% uptime for the Oreko hosted service, measured on a
calendar-month basis, excluding scheduled maintenance windows. This is an
operational target, not a contractual guarantee.

If Oreko experiences a material outage exceeding 24 consecutive hours,
affected paid users may request a pro-rata service credit by contacting
support@oreko.app within 7 days of the incident.                              ← CHANGED (was support@wisdmlabs.com)

10. Disclaimer of Warranties

Oreko is provided "as is" and "as available" without warranties of any kind,
either express or implied. To the fullest extent permitted by law, WisdmLabs
disclaims all implied warranties, including merchantability, fitness for a
particular purpose, and non-infringement.

11. Limitation of Liability

To the maximum extent permitted by applicable law, WisdmLabs shall not be
liable for any indirect, incidental, special, consequential, or punitive
damages, including loss of data, loss of revenue, or loss of business,
arising out of your use of Oreko.

Our total aggregate liability to you for any claim arising out of these Terms
shall not exceed the total amount you paid to WisdmLabs in the 12 months
preceding the event giving rise to the claim.

12. Indemnification

You agree to indemnify and hold WisdmLabs harmless from any claims, damages,
losses, or expenses (including legal fees) arising from your violation of
these Terms, your use of the service, or your violation of any third-party
rights.

13. DMCA and Content Takedown

If you believe that content submitted through Oreko infringes your copyright
or other intellectual property rights, you may submit a takedown notice to
legal@oreko.app with the following information:                               ← CHANGED (was legal@wisdmlabs.com)
- A description of the copyrighted work you claim has been infringed.
- A description of where the infringing material is located within Oreko.
- Your contact information (name, email, mailing address).
- A statement that you have a good-faith belief that use of the material is
  not authorised by the rights owner.
- A statement, under penalty of perjury, that the information in your notice
  is accurate and that you are the rights owner or authorised to act on
  their behalf.

14. Data Processing Agreement

If you process personal data of individuals located in the European Union or
European Economic Area using Oreko, a Data Processing Agreement (DPA) is
available upon request. Contact legal@oreko.app.                              ← CHANGED (was legal@wisdmlabs.com)

15. Termination

- You may close your account at any time from your account settings.
- We may suspend or terminate your account for violation of these Terms,
  with notice where reasonably practicable.
- On termination, your right to use Oreko ceases immediately. Your data will
  be handled as described in our Privacy Policy, including automatic deletion
  within 30 days of account closure.

16. Governing Law and Disputes

These Terms are governed by the laws of India.

Before initiating formal proceedings, we encourage you to contact us at
legal@oreko.app to resolve disputes informally.                               ← CHANGED (was legal@wisdmlabs.com)

If informal resolution fails, either party may elect to resolve the dispute
through binding arbitration administered under the Arbitration and
Conciliation Act, 1996, with the seat of arbitration in Pune, Maharashtra,
India. If arbitration is not elected, any disputes shall be subject to the
exclusive jurisdiction of the courts located in Pune, Maharashtra, India.

17. Changes to These Terms

We may update these Terms from time to time. We will notify you of material
changes via email or a notice within Oreko at least 14 days before they take
effect. Continued use after the effective date constitutes acceptance of the
updated Terms.

18. Contact

- Email: legal@oreko.app                                                      ← CHANGED (was legal@wisdmlabs.com)
- Website: oreko.app
- Company: WisdmLabs, Pune, Maharashtra, India
```

---

## W6. privacy/page.tsx — Full Corrected Text

**File:** `app/(marketing)/privacy/page.tsx`

**Changes:** All `@wisdmlabs.com` emails → `@oreko.app`. WisdmLabs company name kept as-is.

```
Privacy Policy
Last updated: April 1, 2026

This Privacy Policy explains what data Oreko collects, why we collect it, how
we use it, and your rights over it. By using Oreko, you agree to this policy.

1. Who We Are

Oreko is a product of WisdmLabs, based in Pune, Maharashtra, India.

- Email: privacy@oreko.app                                                    ← CHANGED (was privacy@wisdmlabs.com)
- Website: oreko.app

Grievance Officer: reachable at grievance@oreko.app. Appointed in accordance  ← CHANGED (was grievance@wisdmlabs.com)
with the Digital Personal Data Protection Act, 2023. Acknowledgement within
48 hours, substantive response within 30 days.

2. What Data We Collect

2.1 Account and Identity Data
- Your name and email address.
- Password (stored encrypted, never visible in plain text).
- OAuth profile data if you sign in via Google or another provider.

2.2 Billing Data
Our payment processor (Stripe or Razorpay) handles your card details
directly. Oreko does not store your full card number, CVV, or banking
credentials. We only store:
- Your subscription plan and status.
- Payment history and invoice records.
- Billing name and address for invoice generation.

2.3 Usage Data
Collected on the basis of legitimate interest (improving service quality and
fixing bugs):
- Pages visited and features used.
- Browser type, device type, and operating system.
- IP address and approximate location (country/city level). Retained for no
  longer than 12 months.
- Error logs and crash reports.

2.4 Data You Submit
Any content you create, upload, or submit while using Oreko is stored on our
servers and treated as your data.

3. Why We Collect It

- To provide and operate the Oreko service.
- To process payments and manage your subscription.
- To send transactional emails (receipts, password resets, account alerts).
- To fix bugs, improve performance, and develop new features.
- To comply with legal obligations under Indian law (including the DPDP Act,
  2023).

We do not sell your data. We do not use your data for advertising.

4. Who We Share It With

We share your data only with the following third-party service providers, and
only to the extent necessary:
- Payment processors: Stripe and/or Razorpay.
- Cloud infrastructure: Amazon Web Services (AWS), region ap-south-1
  (Mumbai), and/or Supabase.
- Email delivery: Postmark and/or Resend.
- Analytics: PostHog (self-hosted or EU-hosted). All analytics data is
  pseudonymised. You may opt out from your account settings.

5. Data Storage and Security

Your data is stored primarily on servers located in India (AWS ap-south-1,
Mumbai). Backups may be replicated to the European Union (AWS eu-west-1,
Ireland).

- Encryption in transit (HTTPS/TLS).
- Encryption at rest for sensitive fields.
- Access controls limiting who on our team can view user data.
- Regular security reviews.

We will notify you within 72 hours of discovery if a breach affects your
personal data, in accordance with the DPDP Act, 2023.

6. How Long We Keep Your Data

- Account data: retained for as long as your account is active.
- Billing records: retained for 7 years as required by Indian tax law.
- Usage/log data (including IP addresses): retained for up to 12 months,
  then deleted or anonymised.
- Data you submitted: automatically deleted within 30 days of account
  closure. You may contact support@oreko.app to export your data before     ← CHANGED (was support@wisdmlabs.com)
  deletion.

7. Your Rights

Under India's Digital Personal Data Protection Act (DPDP Act, 2023) and
applicable law, you have the right to:
- Access the personal data we hold about you.
- Correct inaccurate data.
- Request deletion of your data (subject to legal retention obligations).
- Withdraw consent for processing at any time.
- Raise a grievance with our Grievance Officer.

To exercise any of these rights, email privacy@oreko.app. We will           ← CHANGED (was privacy@wisdmlabs.com)
acknowledge within 48 hours and respond within 30 days.

If you are in the EU, you may have additional rights under GDPR, including
data portability and the right to lodge a complaint with your local
supervisory authority.

8. Cookies and Consent

- Strictly necessary cookies: session cookies to keep you logged in.
  Essential, cannot be disabled.
- Preference cookies: to remember your settings.
- Analytics cookies: non-essential, require your affirmative consent. Not
  set until you opt in.

You can change your cookie preferences at any time from your account settings
or by clicking "Cookie Preferences" in the footer.

9. Children's Privacy

Oreko is not intended for use by anyone under the age of 18. We do not
knowingly collect personal data from minors. If you believe a minor has
provided us with data, contact privacy@oreko.app and we will delete it       ← CHANGED (was privacy@wisdmlabs.com)
promptly.

10. International Data Transfers

If you access Oreko from outside India, your data may be transferred to and
processed in India. We ensure compliance with the DPDP Act, 2023 and, where
applicable, GDPR requirements through appropriate safeguards such as Standard
Contractual Clauses (SCCs).

11. Changes to This Policy

We may update this Privacy Policy from time to time. We will update the
"Last updated" date and notify you by email if the changes are material.
Continued use after changes are posted constitutes acceptance.

12. Contact

- Email: privacy@oreko.app                                                   ← CHANGED (was privacy@wisdmlabs.com)
- Grievance Officer: grievance@oreko.app                                     ← CHANGED (was grievance@wisdmlabs.com)
- Website: oreko.app
- Company: WisdmLabs, Pune, Maharashtra, India
```

---

## W7. cla/page.tsx — Full Corrected Text

**File:** `app/(marketing)/cla/page.tsx`

**Changes:** `legal@wisdmlabs.com` → `legal@oreko.app`. All WisdmLabs company name references kept as-is.

```
Contributor License Agreement
Last updated: April 1, 2026

By submitting a contribution to Oreko (oreko.app), you agree to the following
terms. Please read carefully before submitting your first Pull Request.

1. Who This Covers

This agreement applies to any individual or organization ("Contributor") that
submits code, documentation, bug fixes, design assets, or any other material
("Contribution") to the Oreko project owned by WisdmLabs.

2. You Own What You're Giving Us

You confirm that:
- You wrote the Contribution yourself, OR have the legal right to submit it.
- It does not violate any third-party intellectual property rights.
- If your employer owns your work, you have their permission to submit it.

3. What You're Granting WisdmLabs

3.1 Copyright Licence
By submitting a Contribution, you grant WisdmLabs a perpetual, worldwide,
royalty-free, irrevocable, non-exclusive licence to:
- Use, copy, modify, and distribute your Contribution.
- Incorporate it into Oreko under any licence WisdmLabs chooses, including
  commercial licences.
- Sublicense it to third parties solely as part of, or in connection with,
  the Oreko product.

You retain ownership of your Contribution. You are not transferring
copyright, only granting WisdmLabs the rights listed above.

3.2 Patent Licence
You grant WisdmLabs a perpetual, worldwide, royalty-free, irrevocable,
non-exclusive patent licence to make, have made, use, sell, offer to sell,
import, and otherwise transfer your Contribution, where such licence applies
only to those patent claims licensable by you that are necessarily infringed
by your Contribution.

4. You Keep Your Rights Too

You are free to use your own Contribution however you like. This agreement
does not restrict you from using, publishing, or licensing your own work
independently.

5. The AGPL Public Licence Still Applies

The open-source portions of Oreko are licensed under AGPL v3. Your
Contribution to those portions will also be available to the public under
AGPL v3.

WisdmLabs additionally reserves the right to offer your Contribution under a
separate commercial licence as described in Section 3.1. Your Contribution
will always remain available under AGPL v3 in the open-source repository,
regardless of any additional licences WisdmLabs may offer.

6. Moral Rights

To the extent permitted by applicable law, you agree not to assert any moral
rights in your Contribution against WisdmLabs or its licensees. WisdmLabs
will use reasonable efforts to attribute Contributors in the project's
CONTRIBUTORS file.

7. No Warranty

You provide your Contribution "as is", without any warranties of any kind.
You are not responsible for how WisdmLabs uses it after submission.

8. How to Agree

Primary method (recommended): Use the CLA Assistant bot integrated into the
Oreko repository. When you open your first Pull Request, the bot will prompt
you to review and accept this CLA via a click-through agreement.

Alternative methods:
- Comment "I have read and agree to the Oreko CLA" on your first Pull
  Request.
- Sign the CLA digitally if WisdmLabs requests it via email.

Pull Requests submitted without CLA acceptance will not be merged.

9. Why We Use a CLA

Oreko uses a dual-licensing model: the open-source code is available under
AGPL v3, while WisdmLabs also offers a commercial licence for organisations
that cannot comply with the AGPL's copyleft requirements. The CLA ensures
that WisdmLabs has the necessary rights to offer both licensing options, which
in turn funds continued development of the open-source project.

Questions?
Contact us at legal@oreko.app                                                 ← CHANGED (was legal@wisdmlabs.com)
```

---

## W8. license/page.tsx — Full Text (No Changes Needed)

**File:** `app/(marketing)/license/page.tsx`

All WisdmLabs references are correct — WisdmLabs is the parent company. No changes needed.

```
GNU Affero General Public License v3
Last updated: April 1, 2026

Copyright (C) 2026 WisdmLabs, Oreko (oreko.app). This program is free
software licensed under the GNU Affero General Public License v3.

[Important Notice]
This document is WisdmLabs' Oreko-specific summary and application guide for
the AGPL v3. It is NOT the licence itself. The legally binding licence text is
the official GNU Affero General Public License, Version 3, as published by the
Free Software Foundation. The full text is available at:
gnu.org/licenses/agpl-3.0.txt

Scope of the Licence
The AGPL v3 applies to all source code in the Oreko repository unless
explicitly marked as proprietary. Proprietary components are listed in the
PROPRIETARY_MODULES file in the repository root and are identified by a
proprietary licence header in each file.

Your Rights Under the AGPL v3
- Run the unmodified Program for any purpose.
- Study the source code and modify it.
- Redistribute verbatim copies of the source code.
- Distribute your modified versions, provided you comply with the licence
  terms below.

Key Obligations

Conveying verbatim copies (Section 4)
You may distribute unmodified copies of Oreko's source code in any medium,
provided you include the AGPL v3 licence text, preserve all copyright
notices, and give recipients a copy of the licence.

Conveying modified versions (Section 5)
If you modify Oreko and distribute the modified version, you must:
- Include prominent notices stating that you modified it, with relevant
  dates.
- Include prominent notices stating it is released under the AGPL v3.
- Licence the entire modified work under the AGPL v3.

Remote network interaction (Section 13)
If you modify Oreko and deploy it to interact with users over a network (for
example, as a SaaS or hosted service), you must make the complete
Corresponding Source of your modified version available to all users
interacting with it, prominently and free of charge, under the terms of the
AGPL v3.

This is the key distinction between the AGPL and the standard GPL: network
use triggers the source-sharing obligation, not just distribution of
binaries.

Disclaimer of Warranty
THERE IS NO WARRANTY FOR OREKO, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
WISDMLABS PROVIDES THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

Limitation of Liability
IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW WILL WISDMLABS BE LIABLE FOR
DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM, EVEN IF ADVISED OF
THE POSSIBILITY OF SUCH DAMAGES.

Where to Find the Full Licence
- Repository: the LICENCE or COPYING file in the root of the Oreko
  repository.
- Online: gnu.org/licenses/agpl-3.0.txt
- FSF page: gnu.org/licenses/agpl-3.0.html
```

---

## W9. cookies/page.tsx — Full Text (No Changes Needed)

**File:** `app/(marketing)/cookies/page.tsx`

Already uses `privacy@oreko.app`. No changes needed.

```
Cookie Policy
Last updated: February 15, 2026

What Are Cookies?
Cookies are small text files stored on your device when you visit a website.
They help websites remember your preferences and provide a better user
experience.

How We Use Cookies
Oreko uses cookies for the following purposes:

Essential Cookies
These cookies are necessary for the website to function properly. They enable
core functionality such as security, authentication, and session management.
- Session cookies: Keep you logged in during your session
- Security cookies: Protect against cross-site request forgery

Preference Cookies
These cookies remember your preferences, such as your preferred theme
(light/dark mode) and language settings.

Analytics Cookies
We use analytics cookies to understand how visitors interact with our website.
This helps us improve our services.
- Pages visited and time spent
- Features used
- Error reports

Third-Party Cookies
We may use third-party services that set their own cookies:
- Stripe: For payment processing
- Analytics providers: For usage statistics (if enabled)

Managing Cookies
You can control and manage cookies in several ways. Most browsers allow you
to:
- View and delete cookies
- Block all cookies
- Block third-party cookies
- Clear all cookies when you close the browser

Note that blocking cookies may affect the functionality of our services,
particularly authentication features.

Self-Hosted Instances
If you self-host Oreko, you have complete control over cookie usage. No
third-party analytics cookies are included by default in self-hosted
installations.

Updates to This Policy
We may update this Cookie Policy from time to time. Any changes will be posted
on this page with an updated revision date.

Contact Us
If you have questions about our use of cookies, please contact us at
privacy@oreko.app.
```

---

## W10. Delete .docx Files (Optional)

These files are in the website repo root and shouldn't be served publicly:

```
Oreko_AGPL_License_Redrafted.docx
Oreko_CLA_Redrafted.docx
Oreko_Privacy_Policy_Redrafted.docx
Oreko_Terms_of_Service_Redrafted.docx
```

Either delete them or add to `.gitignore`.

---

# Summary Checklist

### App Repo (orekoapp/oreko)

- [ ] Update repo description, homepage, and topics in GitHub Settings
- [ ] Replace LICENSE with AGPL v3 + `Copyright (C) 2026 Oreko Contributors`
- [ ] Replace README.md with the rebranded version above (including screenshots)
- [ ] Add 3-4 screenshots to `docs/images/` (dashboard, quote builder, client portal, invoice)
- [ ] Find-replace CONTRIBUTING.md (QuoteCraft → Oreko, quote-software → oreko, rewrite Getting Help)
- [ ] Find-replace SECURITY.md (QuoteCraft → Oreko, security@quotecraft.dev → security@oreko.app)
- [ ] Find-replace CODE_OF_CONDUCT.md (conduct@quotecraft.dev → conduct@oreko.app)
- [ ] Find-replace CHANGELOG.md (QuoteCraft → Oreko, WisdmLabs/quote-software → orekoapp/oreko)
- [ ] Find-replace CONSTITUTION.md (QuoteCraft → Oreko, ~30 instances)
- [ ] Update package.json (name, description, repo URL, license + db script filters)
- [ ] Update sub-package package.json files (packages/database, packages/ui, etc.)
- [ ] Delete 13 internal analysis/report `.md` files
- [ ] Delete 10 screenshot `.png` files from root
- [ ] Run grep for any remaining QuoteCraft/quotecraft/quote-software/WisdmLabs references
- [ ] Review `bugs/`, `reports/`, `research/`, `brief/` folders for internal-only content

### Website Repo (oreko-website)

- [ ] W1: Fix blog page GitHub URL (WisdmLabs/quote-software → orekoapp/oreko)
- [ ] W2: Fix about page license (MIT → AGPL v3)
- [ ] W3: Fix opengraph-image.tsx license (MIT → AGPL v3)
- [ ] W4: Fix twitter-image.tsx license (MIT → AGPL v3)
- [ ] W5: Fix terms page — product description + emails (full corrected text above)
- [ ] W6: Fix privacy page — emails @wisdmlabs.com → @oreko.app (full corrected text above)
- [ ] W7: Fix CLA page — email legal@wisdmlabs.com → legal@oreko.app (full corrected text above)
- [ ] W8: License page — no changes needed
- [ ] W9: Cookie page — no changes needed
- [ ] W10: Optionally delete or gitignore the `.docx` files from repo root
