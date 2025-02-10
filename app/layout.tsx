import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/nav-bar';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '프론트엔드 개발자 연동근',
  description: '신입 프론트엔드 개발자 연동근의 개인 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.className} antialiased`}>
        <div className='min-h-screen bg-zinc-950 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
