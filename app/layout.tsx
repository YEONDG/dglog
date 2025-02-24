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
  title: '프론트엔드 개발자 연동근',
  description: '신입 프론트엔드 개발자 연동근의 개인 사이트입니다.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko' suppressHydrationWarning>
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
