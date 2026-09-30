import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const dejavuSans = localFont({
  src: [
    {
      path: '../fonts/DejaVuSans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/DejaVuSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dejavu-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Promedia Creator Factory Network (PCFN)',
  description:
    'Promedia Creator Factory Network menghubungkan talenta daerah dengan keterampilan, fasilitas produksi, jaringan kreator, dan kebutuhan pasar.',
  authors: [{ name: 'Promedia Group' }],
  openGraph: {
    title: 'Promedia Creator Factory Network (PCFN)',
    description:
      'Where ideas become content. Content becomes opportunity. Promedia Creator Factory Network menghubungkan talenta daerah dengan keterampilan, fasilitas produksi, jaringan kreator, dan kebutuhan pasar.',
    url: 'https://creatorfactory.promediateknologi.id',
    siteName: 'Promedia Creator Factory Network',
    locale: 'id_ID',
    type: 'website',
  },
};

import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={dejavuSans.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
