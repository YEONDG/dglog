import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/nav-bar';

import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
    google: 'xuknTcuQDLS', // Google Search Console 인증 코드
    // other: {
    //   'naver-site-verification': 'your-naver-verification-code', // 네이버 웹마스터 도구 인증 코드
    // },
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
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
