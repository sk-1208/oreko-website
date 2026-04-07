export const metadata = {
  title: 'Privacy Policy | Oreko',
  description:
    'Learn how Oreko handles your data and protects your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: April 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
          <p>
            This Privacy Policy explains what data Oreko collects, why we
            collect it, how we use it, and your rights over it. By using Oreko,
            you agree to this policy.
          </p>

          <Section title="1. Who We Are">
            <p>
              Oreko is a product of Infinite Wisdm FZ LLC, based in Al Hulaila
              Industrial Free Zone, RAK, United Arab Emirates.
            </p>
            <ul>
              <li>
                Email:{' '}
                <a
                  href="mailto:privacy@oreko.app"
                  className="text-primary hover:underline"
                >
                  privacy@oreko.app
                </a>
              </li>
              <li>Website: oreko.app</li>
            </ul>
            <p>
              Grievance Officer: reachable at grievance@oreko.app.
              Acknowledgement within 48 hours, substantive response within 30
              days.
            </p>
          </Section>

          <Section title="2. What Data We Collect">
            <h4>2.1 Account and Identity Data</h4>
            <ul>
              <li>Your name and email address.</li>
              <li>
                Password (stored encrypted, never visible in plain text).
              </li>
              <li>
                OAuth profile data if you sign in via Google or another
                provider.
              </li>
            </ul>

            <h4>2.2 Billing Data</h4>
            <p>
              Our payment processor (Stripe or Razorpay) handles your card
              details directly. Oreko does not store your full card number, CVV,
              or banking credentials. We only store:
            </p>
            <ul>
              <li>Your subscription plan and status.</li>
              <li>Payment history and invoice records.</li>
              <li>Billing name and address for invoice generation.</li>
            </ul>

            <h4>2.3 Usage Data</h4>
            <p>
              Collected on the basis of legitimate interest (improving service
              quality and fixing bugs):
            </p>
            <ul>
              <li>Pages visited and features used.</li>
              <li>Browser type, device type, and operating system.</li>
              <li>
                IP address and approximate location (country/city level).
                Retained for no longer than 12 months.
              </li>
              <li>Error logs and crash reports.</li>
            </ul>

            <h4>2.4 Data You Submit</h4>
            <p>
              Any content you create, upload, or submit while using Oreko is
              stored on our servers and treated as your data.
            </p>
          </Section>

          <Section title="3. Why We Collect It">
            <ul>
              <li>To provide and operate the Oreko service.</li>
              <li>To process payments and manage your subscription.</li>
              <li>
                To send transactional emails (receipts, password resets, account
                alerts).
              </li>
              <li>
                To fix bugs, improve performance, and develop new features.
              </li>
              <li>
                To comply with applicable legal obligations.
              </li>
            </ul>
            <p className="font-medium text-foreground">
              We do not sell your data. We do not use your data for advertising.
            </p>
          </Section>

          <Section title="4. Who We Share It With">
            <p>
              We share your data only with the following third-party service
              providers, and only to the extent necessary:
            </p>
            <ul>
              <li>
                <strong>Payment processors:</strong> Stripe and/or Razorpay.
              </li>
              <li>
                <strong>Cloud infrastructure:</strong> Amazon Web Services (AWS),
                region ap-south-1 (Mumbai), and/or Supabase.
              </li>
              <li>
                <strong>Email delivery:</strong> Postmark and/or Resend.
              </li>
              <li>
                <strong>Analytics:</strong> PostHog (self-hosted or EU-hosted).
                All analytics data is pseudonymised. You may opt out from your
                account settings.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Storage and Security">
            <p>
              Your data is stored on secure cloud servers. Backups may be
              replicated to additional regions for redundancy.
            </p>
            <ul>
              <li>Encryption in transit (HTTPS/TLS).</li>
              <li>Encryption at rest for sensitive fields.</li>
              <li>
                Access controls limiting who on our team can view user data.
              </li>
              <li>Regular security reviews.</li>
            </ul>
            <p>
              We will notify you within 72 hours of discovery if a breach
              affects your personal data.
            </p>
          </Section>

          <Section title="6. How Long We Keep Your Data">
            <ul>
              <li>
                <strong>Account data:</strong> retained for as long as your
                account is active.
              </li>
              <li>
                <strong>Billing records:</strong> retained for 7 years as
                required by applicable tax law.
              </li>
              <li>
                <strong>Usage/log data (including IP addresses):</strong>{' '}
                retained for up to 12 months, then deleted or anonymised.
              </li>
              <li>
                <strong>Data you submitted:</strong> automatically deleted
                within 30 days of account closure. You may contact
                support@oreko.app to export your data before deletion.
              </li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Under applicable data protection law, you have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate data.</li>
              <li>
                Request deletion of your data (subject to legal retention
                obligations).
              </li>
              <li>Withdraw consent for processing at any time.</li>
              <li>Raise a grievance with our Grievance Officer.</li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a
                href="mailto:privacy@oreko.app"
                className="text-primary hover:underline"
              >
                privacy@oreko.app
              </a>
              . We will acknowledge within 48 hours and respond within 30 days.
            </p>
            <p>
              If you are in the EU, you may have additional rights under GDPR,
              including data portability and the right to lodge a complaint with
              your local supervisory authority.
            </p>
          </Section>

          <Section title="8. Cookies and Consent">
            <ul>
              <li>
                <strong>Strictly necessary cookies:</strong> session cookies to
                keep you logged in. Essential, cannot be disabled.
              </li>
              <li>
                <strong>Preference cookies:</strong> to remember your settings.
              </li>
              <li>
                <strong>Analytics cookies:</strong> non-essential, require your
                affirmative consent. Not set until you opt in.
              </li>
            </ul>
            <p>
              You can change your cookie preferences at any time from your
              account settings or by clicking &ldquo;Cookie Preferences&rdquo;
              in the footer.
            </p>
          </Section>

          <Section title="9. Children&rsquo;s Privacy">
            <p>
              Oreko is not intended for use by anyone under the age of 18. We do
              not knowingly collect personal data from minors. If you believe a
              minor has provided us with data, contact privacy@oreko.app and
              we will delete it promptly.
            </p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>
              Your data may be transferred to and processed in jurisdictions
              outside your own. We ensure compliance with applicable data
              protection laws and, where applicable, GDPR requirements through
              appropriate safeguards such as Standard Contractual Clauses (SCCs).
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              update the &ldquo;Last updated&rdquo; date and notify you by email
              if the changes are material. Continued use after changes are posted
              constitutes acceptance.
            </p>
          </Section>

          <Section title="12. Contact">
            <ul>
              <li>
                Email:{' '}
                <a
                  href="mailto:privacy@oreko.app"
                  className="text-primary hover:underline"
                >
                  privacy@oreko.app
                </a>
              </li>
              <li>Grievance Officer: grievance@oreko.app</li>
              <li>Website: oreko.app</li>
              <li>Company: Infinite Wisdm FZ LLC, Al Hulaila Industrial Free Zone, RAK, UAE</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-medium text-foreground">
        {title}
      </h2>
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_h4]:font-medium [&_h4]:text-foreground [&_h4]:text-sm [&_h4]:pt-2 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
