export const metadata = {
  title: 'Terms of Service | Oreko',
  description: 'Terms and conditions for using Oreko.',
};

export default function TermsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: April 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
          <p>
            Please read these Terms carefully before using Oreko. By creating an
            account or using the service, you agree to be bound by these Terms.
            If you do not agree, do not use Oreko.
          </p>

          <Section title="1. Who These Terms Apply To">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) are a legal agreement
              between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and WisdmLabs
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), the
              company that owns and operates Oreko at oreko.app.
            </p>
            <p>
              If you are using Oreko on behalf of a company or organisation, you
              confirm that you have the authority to bind that entity to these
              Terms.
            </p>
          </Section>

          <Section title="2. The Service">
            <p>
              Oreko is a feedback management tool that helps software teams
              collect, organise, and act on user feedback. We reserve the right
              to modify, suspend, or discontinue any part of the service at any
              time with reasonable notice.
            </p>
          </Section>

          <Section title="3. Your Account">
            <ul>
              <li>
                You must provide accurate and complete information when creating
                your account.
              </li>
              <li>
                You are responsible for maintaining the security of your account
                credentials.
              </li>
              <li>
                You must notify us immediately at support@wisdmlabs.com if you
                suspect unauthorised access to your account.
              </li>
              <li>
                You may not share your account with others or create accounts on
                behalf of someone else without their consent.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </li>
            </ul>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree not to use Oreko to:</p>
            <ul>
              <li>Violate any applicable law or regulation.</li>
              <li>Upload or transmit malware, spam, or harmful content.</li>
              <li>
                Attempt to gain unauthorised access to Oreko&rsquo;s systems or
                other users&rsquo; accounts.
              </li>
              <li>
                Scrape, copy, or redistribute Oreko&rsquo;s data or
                functionality without permission.
              </li>
              <li>
                Use the service in a way that disrupts or degrades performance
                for other users.
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of proprietary parts of Oreko.
              </li>
            </ul>
          </Section>

          <Section title="5. Your Data">
            <p>
              You own all data you submit to Oreko. By using the service, you
              grant WisdmLabs a limited, non-exclusive licence to store, process,
              and display your data solely for the purpose of providing the
              service to you.
            </p>
            <p>
              We do not claim ownership of your data. We will not use your data
              for any purpose other than operating and improving Oreko, as
              described in our Privacy Policy.
            </p>
          </Section>

          <Section title="6. Open Source Licence">
            <p>
              The core of Oreko is open-source software released under the GNU
              Affero General Public License v3 (AGPL v3). Your use of the hosted
              service at oreko.app is governed by these Terms. If you self-host
              Oreko using the open-source code, the AGPL v3 licence applies.
            </p>
            <p>
              Certain components of Oreko are proprietary and are not covered by
              the AGPL v3 licence. These proprietary components are explicitly
              identified in the PROPRIETARY_MODULES file in the root of the
              Oreko repository.
            </p>
          </Section>

          <Section title="7. Subscription and Billing">
            <h4>7.1 Plans</h4>
            <p>
              Oreko offers free and paid subscription plans. The features
              available on each plan are described at oreko.app/pricing and may
              change with notice.
            </p>

            <h4>7.2 Payment</h4>
            <p>
              Paid plans are billed in advance on a monthly or annual basis.
              Payments are processed securely via our payment processor.
            </p>

            <h4>7.3 Cooling-Off Period</h4>
            <p>
              First-time subscribers to any paid plan may request a full refund
              within 14 days of their initial subscription purchase, provided
              they have not substantially used the paid features during that
              period. To request a refund, contact support@wisdmlabs.com within
              the 14-day window.
            </p>

            <h4>7.4 Cancellation and Refunds</h4>
            <ul>
              <li>
                You may cancel your subscription at any time. Access continues
                until the end of your current billing period.
              </li>
              <li>
                Outside the cooling-off period, we do not offer refunds for
                partial billing periods, except where required by law.
              </li>
              <li>
                If we discontinue Oreko, we will provide a pro-rata refund for
                any unused prepaid period.
              </li>
            </ul>

            <h4>7.5 Price Changes</h4>
            <p>
              We may change subscription prices with at least 30 days&rsquo;
              notice. Continued use after the effective date of a price change
              constitutes acceptance of the new pricing.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All intellectual property in Oreko, including the brand, design,
              proprietary code, and documentation, belongs to WisdmLabs. These
              Terms do not grant you any right to use our trademarks, logos, or
              brand name without our prior written consent.
            </p>
          </Section>

          <Section title="9. Availability, Uptime and Service Levels">
            <p>
              We target 99.5% uptime for the Oreko hosted service, measured on a
              calendar-month basis, excluding scheduled maintenance windows. This
              is an operational target, not a contractual guarantee.
            </p>
            <p>
              If Oreko experiences a material outage exceeding 24 consecutive
              hours, affected paid users may request a pro-rata service credit
              by contacting support@wisdmlabs.com within 7 days of the incident.
            </p>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>
              Oreko is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, either express or
              implied. To the fullest extent permitted by law, WisdmLabs
              disclaims all implied warranties, including merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, WisdmLabs shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of data, loss of
              revenue, or loss of business, arising out of your use of Oreko.
            </p>
            <p>
              Our total aggregate liability to you for any claim arising out of
              these Terms shall not exceed the total amount you paid to WisdmLabs
              in the 12 months preceding the event giving rise to the claim.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to indemnify and hold WisdmLabs harmless from any
              claims, damages, losses, or expenses (including legal fees) arising
              from your violation of these Terms, your use of the service, or
              your violation of any third-party rights.
            </p>
          </Section>

          <Section title="13. DMCA and Content Takedown">
            <p>
              If you believe that content submitted through Oreko infringes your
              copyright or other intellectual property rights, you may submit a
              takedown notice to legal@wisdmlabs.com with the following
              information:
            </p>
            <ul>
              <li>
                A description of the copyrighted work you claim has been
                infringed.
              </li>
              <li>
                A description of where the infringing material is located within
                Oreko.
              </li>
              <li>Your contact information (name, email, mailing address).</li>
              <li>
                A statement that you have a good-faith belief that use of the
                material is not authorised by the rights owner.
              </li>
              <li>
                A statement, under penalty of perjury, that the information in
                your notice is accurate and that you are the rights owner or
                authorised to act on their behalf.
              </li>
            </ul>
          </Section>

          <Section title="14. Data Processing Agreement">
            <p>
              If you process personal data of individuals located in the European
              Union or European Economic Area using Oreko, a Data Processing
              Agreement (DPA) is available upon request. Contact
              legal@wisdmlabs.com.
            </p>
          </Section>

          <Section title="15. Termination">
            <ul>
              <li>
                You may close your account at any time from your account
                settings.
              </li>
              <li>
                We may suspend or terminate your account for violation of these
                Terms, with notice where reasonably practicable.
              </li>
              <li>
                On termination, your right to use Oreko ceases immediately. Your
                data will be handled as described in our Privacy Policy,
                including automatic deletion within 30 days of account closure.
              </li>
            </ul>
          </Section>

          <Section title="16. Governing Law and Disputes">
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Before initiating formal proceedings, we encourage you to contact
              us at legal@wisdmlabs.com to resolve disputes informally.
            </p>
            <p>
              If informal resolution fails, either party may elect to resolve the
              dispute through binding arbitration administered under the
              Arbitration and Conciliation Act, 1996, with the seat of
              arbitration in Pune, Maharashtra, India. If arbitration is not
              elected, any disputes shall be subject to the exclusive
              jurisdiction of the courts located in Pune, Maharashtra, India.
            </p>
          </Section>

          <Section title="17. Changes to These Terms">
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes via email or a notice within Oreko at least 14
              days before they take effect. Continued use after the effective
              date constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="18. Contact">
            <ul>
              <li>
                Email:{' '}
                <a
                  href="mailto:legal@wisdmlabs.com"
                  className="text-primary hover:underline"
                >
                  legal@wisdmlabs.com
                </a>
              </li>
              <li>Website: oreko.app</li>
              <li>Company: WisdmLabs, Pune, Maharashtra, India</li>
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
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_h4]:font-medium [&_h4]:text-foreground [&_h4]:text-sm [&_h4]:pt-2">
        {children}
      </div>
    </div>
  );
}
