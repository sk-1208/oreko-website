export const metadata = {
  title: 'License | Oreko',
  description:
    'GNU Affero General Public License v3 application guide for Oreko.',
};

export default function LicensePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
          GNU Affero General Public License v3
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: April 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
          <p>
            Copyright (C) 2026 Infinite Wisdm FZ LLC, Oreko (oreko.app). This program is
            free software licensed under the GNU Affero General Public License
            v3.
          </p>

          <div className="rounded-xl border border-warning/30 bg-warning/10 p-6">
            <h2 className="font-display font-medium text-warning">
              Important Notice
            </h2>
            <p className="mt-2 text-warning/80">
              This document is Infinite Wisdm FZ LLC&rsquo; Oreko-specific summary and
              application guide for the AGPL v3. It is NOT the licence itself.
              The legally binding licence text is the official GNU Affero General
              Public License, Version 3, as published by the Free Software
              Foundation. The full text is available at:{' '}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                gnu.org/licenses/agpl-3.0.txt
              </a>
            </p>
          </div>

          <Section title="Scope of the Licence">
            <p>
              The AGPL v3 applies to all source code in the Oreko repository
              unless explicitly marked as proprietary. Proprietary components are
              listed in the PROPRIETARY_MODULES file in the repository root and
              are identified by a proprietary licence header in each file.
            </p>
          </Section>

          <Section title="Your Rights Under the AGPL v3">
            <ul>
              <li>Run the unmodified Program for any purpose.</li>
              <li>Study the source code and modify it.</li>
              <li>Redistribute verbatim copies of the source code.</li>
              <li>
                Distribute your modified versions, provided you comply with the
                licence terms below.
              </li>
            </ul>
          </Section>

          <Section title="Key Obligations">
            <h4>Conveying verbatim copies (Section 4)</h4>
            <p>
              You may distribute unmodified copies of Oreko&rsquo;s source code
              in any medium, provided you include the AGPL v3 licence text,
              preserve all copyright notices, and give recipients a copy of the
              licence.
            </p>

            <h4>Conveying modified versions (Section 5)</h4>
            <p>If you modify Oreko and distribute the modified version, you must:</p>
            <ul>
              <li>
                Include prominent notices stating that you modified it, with
                relevant dates.
              </li>
              <li>
                Include prominent notices stating it is released under the AGPL
                v3.
              </li>
              <li>
                Licence the entire modified work under the AGPL v3.
              </li>
            </ul>

            <h4>Remote network interaction (Section 13)</h4>
            <p>
              If you modify Oreko and deploy it to interact with users over a
              network (for example, as a SaaS or hosted service), you must make
              the complete Corresponding Source of your modified version
              available to all users interacting with it, prominently and free
              of charge, under the terms of the AGPL v3.
            </p>
            <p>
              This is the key distinction between the AGPL and the standard GPL:
              network use triggers the source-sharing obligation, not just
              distribution of binaries.
            </p>
          </Section>

          <Section title="Disclaimer of Warranty">
            <p className="uppercase text-xs tracking-wide">
              There is no warranty for Oreko, to the extent permitted by
              applicable law. Infinite Wisdm FZ LLC provides the program &ldquo;as is&rdquo;
              without warranty of any kind, either expressed or implied,
              including, but not limited to, the implied warranties of
              merchantability and fitness for a particular purpose.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p className="uppercase text-xs tracking-wide">
              In no event unless required by applicable law will Infinite Wisdm FZ LLC be
              liable for damages, including any general, special, incidental or
              consequential damages arising out of the use or inability to use
              the program, even if advised of the possibility of such damages.
            </p>
          </Section>

          <Section title="Where to Find the Full Licence">
            <ul>
              <li>
                Repository: the LICENCE or COPYING file in the root of the Oreko
                repository.
              </li>
              <li>
                Online:{' '}
                <a
                  href="https://www.gnu.org/licenses/agpl-3.0.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  gnu.org/licenses/agpl-3.0.txt
                </a>
              </li>
              <li>
                FSF page:{' '}
                <a
                  href="https://www.gnu.org/licenses/agpl-3.0.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  gnu.org/licenses/agpl-3.0.html
                </a>
              </li>
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
