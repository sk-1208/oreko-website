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

These are issues on the marketing website at `oreko.app` that need fixing.

> Note: The `.docx` files in the website repo root (`Oreko_Terms_of_Service_Redrafted.docx`, `Oreko_Privacy_Policy_Redrafted.docx`, `Oreko_CLA_Redrafted.docx`, `Oreko_AGPL_License_Redrafted.docx`) may contain updated versions of these pages. Check them before manually editing.

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

## W5. terms/page.tsx — Wrong Product Description + Old Emails

**File:** `app/(marketing)/terms/page.tsx`

### Wrong product description (line 40-42):

| Find                                                                                                                | Replace with                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `Oreko is a feedback management tool that helps software teams collect, organise, and act on user feedback.`        | `Oreko is an open-source quote and invoice management tool for freelancers and small businesses.`         |

### Email replacements (keep "WisdmLabs" as company name — it's the parent company):

| Find                      | Replace with           |
| ------------------------- | ---------------------- |
| `support@wisdmlabs.com`  | `support@oreko.app`    |
| `legal@wisdmlabs.com`    | `legal@oreko.app`      |

These appear on lines: 58, 144, 190, 231, 261, 287, 313, 316.

WisdmLabs company name references on lines 27, 99, 175, 198, 206, 213, 220, 320 — **keep as-is** (WisdmLabs is the parent company).

---

## W6. privacy/page.tsx — Old Emails

**File:** `app/(marketing)/privacy/page.tsx`

### Email replacements (keep "WisdmLabs" as company name):

| Find                        | Replace with             |
| --------------------------- | ------------------------ |
| `privacy@wisdmlabs.com`   | `privacy@oreko.app`      |
| `grievance@wisdmlabs.com` | `grievance@oreko.app`    |
| `support@wisdmlabs.com`   | `support@oreko.app`      |

These appear on lines: 34, 37, 43, 179, 202, 205, 241, 270, 273, 276.

WisdmLabs company name on lines 27, 278 — **keep as-is**.

---

## W7. cla/page.tsx — Old Email

**File:** `app/(marketing)/cla/page.tsx`

### Email replacement (keep "WisdmLabs" as company name):

| Find                     | Replace with          |
| ------------------------ | --------------------- |
| `legal@wisdmlabs.com`  | `legal@oreko.app`     |

Lines 163, 166.

WisdmLabs entity references (~15 instances on lines 31, 52, 55, 61, 71, 77, 101, 105, 112, 113, 121, 140, 151, 153) — **keep as-is** (WisdmLabs is the parent company).

---

## W8. license/page.tsx — No Changes Needed

Lines 20, 30, 110, 119 reference "WisdmLabs". **Keep as-is** — WisdmLabs is the parent company.

---

## W9. cookies/page.tsx — No Changes Needed

This file is clean.

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

- [ ] Fix blog page GitHub URL (WisdmLabs/quote-software → orekoapp/oreko)
- [ ] Fix about page license (MIT → AGPL v3)
- [ ] Fix opengraph-image.tsx license (MIT → AGPL v3)
- [ ] Fix twitter-image.tsx license (MIT → AGPL v3)
- [ ] Fix terms page product description ("feedback management tool" → quote/invoice tool)
- [ ] Replace `@wisdmlabs.com` emails → `@oreko.app` in terms, privacy, CLA pages (keep WisdmLabs company name)
- [ ] Apply the .docx redrafted versions if they contain the corrected content
- [ ] Optionally delete or gitignore the `.docx` files from repo root
