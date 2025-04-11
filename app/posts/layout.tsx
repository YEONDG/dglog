import { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그 | 프론트엔드 개발자 연동근의 포트폴리오",
  description:
    "프론트엔드 개발, 웹 기술, 그리고 소프트웨어 엔지니어링에 관한 생각과 경험을 공유합니다.",
  keywords: [
    "프론트엔드 블로그",
    "웹 개발 포스트",
    "React 튜토리얼",
    "TypeScript 팁",
    "Next.js 가이드",
    "개발자 블로그",
    "연동근",
  ],
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: "블로그 | 프론트엔드 개발자 연동근의 포트폴리오",
    description:
      "프론트엔드 개발, 웹 기술, 그리고 소프트웨어 엔지니어링에 관한 생각과 경험을 공유합니다.",
    type: "website",
  },
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <section className="mt-10 flex w-full gap-4 ">{children}</section>;
};

export default Layout;
