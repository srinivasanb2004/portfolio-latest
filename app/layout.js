import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';

const siteUrl = 'https://your-domain.com'; // TODO: replace with your real deployed domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Srinivasan B | Full Stack Developer',
    template: '%s | Srinivasan B',
  },
  description:
    'Portfolio of Srinivasan B, a Full Stack Developer specializing in React, Next.js, Node.js, Express and MongoDB. Explore projects, skills and experience.',
  keywords: [
    'Srinivasan B',
    'Full Stack Developer',
    'MERN Developer',
    'Next.js Developer',
    'React Developer',
    'Portfolio',
    'Web Developer Coimbatore',
  ],
  authors: [{ name: 'Srinivasan B' }],
  creator: 'Srinivasan B',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Srinivasan B | Full Stack Developer',
    description:
      'Portfolio of Srinivasan B, a Full Stack Developer specializing in React, Next.js, Node.js, Express and MongoDB.',
    siteName: 'Srinivasan B Portfolio',
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Srinivasan B - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srinivasan B | Full Stack Developer',
    description:
      'Portfolio of Srinivasan B, a Full Stack Developer specializing in React, Next.js, Node.js, Express and MongoDB.',
    images: ['/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srinivasan B',
  url: siteUrl,
  jobTitle: 'Full Stack Developer',
  email: 'bsrinivasan2004@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/srinivasan2004/',
    'https://github.com/Srinivasanb2004',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-[#050816] text-white">
        <ScrollProgress />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
