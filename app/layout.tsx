import type { Metadata } from 'next';
import './globals.css';

const title = 'Ría de Vigo · Festival Internacional de Series 2026';
const description =
  'Estrenos, talento e industria frente al Atlántico. Festival Internacional de Series Ría de Vigo, del 10 al 12 de junio de 2026.';

export const metadata: Metadata = {
  metadataBase: new URL('https://festivalseriesriavigo.vercel.app'),
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
        width: 1731,
        height: 909,
        alt: 'Festival Internacional de Series Ría de Vigo — 10–12 junio 2026 · Vigo, Galicia',
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
