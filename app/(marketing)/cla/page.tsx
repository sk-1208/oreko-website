export const metadata = {
  title: 'Contributor License Agreement | Oreko',
  description:
    'CLA for contributing to Oreko. Read before submitting your first Pull Request.',
};

export default function ClaPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          Contributor License Agreement
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: April 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
          <p>
            By submitting a contribution to Oreko (oreko.app), you agree to the
            following terms. Please read carefully before submitting your first
            Pull Request.
          </p>

          <Section title="1. Who This Covers">
            <p>
              This agreement applies to any individual or organization
              (&ldquo;Contributor&rdquo;) that submits code, documentation, bug
              fixes, design assets, or any other material
              (&ldquo;Contribution&rdquo;) to the Oreko project owned by
              WisdmLabs.
            </p>
          </Section>

          <Section title="2. You Own What You&rsquo;re Giving Us">
            <p>You confirm that:</p>
            <ul>
              <li>
                You wrote the Contribution yourself, OR have the legal right to
                submit it.
              </li>
              <li>
                It does not violate any third-party intellectual property rights.
              </li>
              <li>
                If your employer owns your work, you have their permission to
                submit it.
              </li>
            </ul>
          </Section>

          <Section title="3. What You&rsquo;re Granting WisdmLabs">
            <h4>3.1 Copyright Licence</h4>
            <p>
              By submitting a Contribution, you grant WisdmLabs a perpetual,
              worldwide, royalty-free, irrevocable, non-exclusive licence to:
            </p>
            <ul>
              <li>Use, copy, modify, and distribute your Contribution.</li>
              <li>
                Incorporate it into Oreko under any licence WisdmLabs chooses,
                including commercial licences.
              </li>
              <li>
                Sublicense it to third parties solely as part of, or in
                connection with, the Oreko product.
              </li>
            </ul>
            <p>
              You retain ownership of your Contribution. You are not
              transferring copyright, only granting WisdmLabs the rights listed
              above.
            </p>

            <h4>3.2 Patent Licence</h4>
            <p>
              You grant WisdmLabs a perpetual, worldwide, royalty-free,
              irrevocable, non-exclusive patent licence to make, have made, use,
              sell, offer to sell, import, and otherwise transfer your
              Contribution, where such licence applies only to those patent
              claims licensable by you that are necessarily infringed by your
              Contribution.
            </p>
          </Section>

          <Section title="4. You Keep Your Rights Too">
            <p>
              You are free to use your own Contribution however you like. This
              agreement does not restrict you from using, publishing, or
              licensing your own work independently.
            </p>
          </Section>

          <Section title="5. The AGPL Public Licence Still Applies">
            <p>
              The open-source portions of Oreko are licensed under AGPL v3. Your
              Contribution to those portions will also be available to the public
              under AGPL v3.
            </p>
            <p>
              WisdmLabs additionally reserves the right to offer your
              Contribution under a separate commercial licence as described in
              Section 3.1. Your Contribution will always remain available under
              AGPL v3 in the open-source repository, regardless of any
              additional licences WisdmLabs may offer.
            </p>
          </Section>

          <Section title="6. Moral Rights">
            <p>
              To the extent permitted by applicable law, you agree not to assert
              any moral rights in your Contribution against WisdmLabs or its
              licensees. WisdmLabs will use reasonable efforts to attribute
              Contributors in the project&rsquo;s CONTRIBUTORS file.
            </p>
          </Section>

          <Section title="7. No Warranty">
            <p>
              You provide your Contribution &ldquo;as is&rdquo;, without any
              warranties of any kind. You are not responsible for how WisdmLabs
              uses it after submission.
            </p>
          </Section>

          <Section title="8. How to Agree">
            <p>
              <strong>Primary method (recommended):</strong> Use the CLA
              Assistant bot integrated into the Oreko repository. When you open
              your first Pull Request, the bot will prompt you to review and
              accept this CLA via a click-through agreement.
            </p>
            <p>Alternative methods:</p>
            <ul>
              <li>
                Comment &ldquo;I have read and agree to the Oreko CLA&rdquo; on
                your first Pull Request.
              </li>
              <li>
                Sign the CLA digitally if WisdmLabs requests it via email.
              </li>
            </ul>
            <p>
              Pull Requests submitted without CLA acceptance will not be merged.
            </p>
          </Section>

          <Section title="9. Why We Use a CLA">
            <p>
              Oreko uses a dual-licensing model: the open-source code is
              available under AGPL v3, while WisdmLabs also offers a commercial
              licence for organisations that cannot comply with the AGPL&rsquo;s
              copyleft requirements. The CLA ensures that WisdmLabs has the
              necessary rights to offer both licensing options, which in turn
              funds continued development of the open-source project.
            </p>
          </Section>

          <Section title="Questions?">
            <p>
              Contact us at{' '}
              <a
                href="mailto:legal@wisdmlabs.com"
                className="text-primary hover:underline"
              >
                legal@wisdmlabs.com
              </a>
            </p>
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
