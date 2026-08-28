import type { Metadata } from 'next';
import './globals.css';

const title = 'Festival Internacional de Series Ría de Vigo';
const description =
  'Festival Internacional de Series Ría de Vigo. Visionados, estrenos, coloquios, industria audiovisual y networking los días 10, 11 y 12 de junio de 2026.';

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/og.png',
        width: 1729,
        height: 910,
        alt: 'Festival Internacional de Series Ría de Vigo — 10, 11 y 12 junio 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
