import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AJ Medical Equipment Trading | Medical Equipment Servicing & Solutions',
  description: 'Reliable servicing, repairs, and supply solutions for hospitals and clinics across the UAE and beyond. Flexible & rigid endoscope repair, ultrasound probes, Karl Storz servicing.',
  keywords: 'medical equipment trading, endoscope repair, UAE medical equipment, Dubai hospital equipment servicing, Karl Storz repair',
  openGraph: {
    title: 'AJ Medical Equipment Trading',
    description: 'Reliable medical equipment solutions for a healthier tomorrow.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#06162d] text-slate-900 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
