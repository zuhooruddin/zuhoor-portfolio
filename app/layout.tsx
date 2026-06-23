import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://zuhoor-roan.vercel.app';
const title = 'Zuhoor Uddin — Full Stack Developer | AI & SaaS Engineer';
const description =
  'Senior full-stack developer specializing in MERN, Next.js, AI integrations, eCommerce systems, and scalable SaaS platforms. Building the web of tomorrow.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Zuhoor Uddin',
  },
  description,
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'Next.js Developer',
    'AI Integration',
    'SaaS Development',
    'eCommerce Developer',
    'React Developer',
    'Node.js',
    'OpenAI API',
    'Zuhoor Uddin',
  ],
  authors: [{ name: 'Zuhoor Uddin', url: siteUrl }],
  creator: 'Zuhoor Uddin',
  alternates: {
    canonical: siteUrl,
  },
  
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description: 'Building scalable web apps, AI tools, and modern digital products.',
    siteName: 'Zuhoor Uddin Portfolio',
    images: [
      {
        url: '/zuhoor.webp',
        width: 800,
        height: 800,
        alt: 'Zuhoor Uddin — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuhoor Uddin — Full Stack Developer',
    description: 'Building scalable web apps, AI tools, and modern digital products.',
    images: ['/zuhoor.webp'],
  },
  icons: {
    icon: '/zuhoor.webp',
    apple: '/zuhoor.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: '_VK_ImGHAPLkbdxJE-FdRVhRwRAyuuFF-wvLS4SFGPk',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030812',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zuhoor Uddin',
  url: siteUrl,
  image: `${siteUrl}/zuhoor.webp`,
  jobTitle: 'Full Stack Developer',
  description,
  sameAs: [
    'https://github.com/zuhooruddin',
    'https://www.linkedin.com/in/zuhoor-uddin-916b171ab/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-dm antialiased">
        {children}
      </body>
    </html>
  );
}
