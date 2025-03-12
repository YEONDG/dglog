import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/nav-bar';

import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '연동근 - 프론트엔드 개발자 포트폴리오',
  description:
    '프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 웹 개발 경험과 프로젝트를 소개합니다.',
  keywords: ['프론트엔드', 'React', 'TypeScript', 'Next.js', '포트폴리오', '웹 개발', '연동근'],
  authors: [{ name: '연동근' }],
  creator: '연동근',
  publisher: '연동근',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dglog.vercel.app',
    title: '연동근 - 프론트엔드 개발자 포트폴리오',
    description:
      '프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 웹 개발 경험과 프로젝트를 소개합니다.',
    siteName: 'Dglog',
  },
  twitter: {
    card: 'summary_large_image',
    title: '연동근 - 프론트엔드 개발자 포트폴리오',
    description: '프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다.',
    creator: '@yeondg',
  },
  alternates: {
    canonical: 'https://dglog.vercel.app',
  },
  verification: {
    google: 'xuknTcuQDLS_sMnQsKsvhkjYbI3rtP3oAM4gI24oFcM',
    other: {
      'naver-site-verification': '8f213a61bbe07f7564bf148cb0e758176687b5f3',
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko' suppressHydrationWarning>
      <head>
        <link rel='alternate' type='application/rss+xml' title='Dglog RSS Feed' href='/feed.xml' />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <div className='min-h-screen  max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <NavBar />
            {children}
          </div>
          <Toaster richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
