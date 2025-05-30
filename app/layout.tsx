import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

import { Toaster } from "sonner";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ChatBot from "@/components/chatbot/chat-bot";

const inter = Gothic_A1({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dglog.vercel.app"),
  title: "연동근 - 프론트엔드 개발자 포트폴리오",
  description:
    "프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 웹 개발 경험과 프로젝트를 소개합니다. 클린 코드와 사용자 경험을 중시하는 개발자입니다.",
  keywords: [
    "프론트엔드 포트폴리오",
    "신입 프론트엔드 포트폴리오",
    "프론트엔드",
    "신입 프론트엔드",
    "프론트엔드 개발자",
    "신입 프론트엔드 개발자",
    "프론트엔드 개발자 포트폴리오",
    "신입 프론트엔드 개발자 포트폴리오",
    "React",
    "TypeScript",
    "Next.js",
    "포트폴리오",
    "웹 개발",
    "개발자",
    "React 개발자",
    "Next.js 개발자",
    "연동근",
    "프론트엔드 이력서",
  ],
  authors: [{ name: "연동근", url: "https://dglog.vercel.app" }],
  creator: "연동근",
  publisher: "연동근",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
    },
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://dglog.vercel.app",
    title: "연동근 - 프론트엔드 개발자 포트폴리오",
    description:
      "프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 웹 개발 경험과 프로젝트를 소개합니다.",
    siteName: "Dglog",
    images: [
      {
        url: "/og-image.png", // Corrected path
        width: 1200,
        height: 630,
        alt: "연동근 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "연동근 - 프론트엔드 개발자 포트폴리오",
    description:
      "프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 개발 경험과 프로젝트를 소개합니다.",
    creator: "@yeondg",
    images: ["/og-image.png"], // Changed to relative path
  },
  alternates: {
    canonical: "https://dglog.vercel.app",
    languages: {
      "ko-KR": "https://dglog.vercel.app",
    },
  },
  verification: {
    google: "xuknTcuQDLS_sMnQsKsvhkjYbI3rtP3oAM4gI24oFcM",
    other: {
      "naver-site-verification": "8f213a61bbe07f7564bf148cb0e758176687b5f3",
    },
  },
  category: "portfolio",
};

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "forest", "ocean"]}
        >
          <NavBar />
          {process.env.NODE_ENV === "production" &&
            process.env.NEXT_PUBLIC_GA_ID && (
              <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            )}

          <main className="relative min-h-screen pt-16">
            {children}

            {modal}
          </main>
          <Footer />
          <ChatBot />

          <Toaster richColors />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
