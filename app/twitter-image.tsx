import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Oreko - The invoicing platform you actually own.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: '#F9FAFB',
          padding: '80px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#4C5FC7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            O
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#030712',
            }}
          >
            Oreko
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 600,
            color: '#030712',
            lineHeight: 1.15,
            maxWidth: '800px',
          }}
        >
          The invoicing platform you actually own.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#6B7280',
            marginTop: '24px',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Open-source. Self-hosted. Quotes, invoices, contracts, payments, and
          analytics in one place.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginTop: 'auto',
            fontSize: '18px',
            color: '#9CA3AF',
          }}
        >
          <span>oreko.app</span>
          <span>·</span>
          <span>Free &amp; Open Source</span>
          <span>·</span>
          <span>MIT License</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
