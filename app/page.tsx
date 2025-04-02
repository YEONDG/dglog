import { AboutMe } from "@/components/home/about-me/about-me";
import { HeroSection } from "@/components/home/hero-section";
import { Section } from "@/components/home/section/section";
// import { TabSection } from '@/components/home/tab-section';
import {
  profileData,
  // techStack, projects, education
} from "@/data/home-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "연동근 - 프론트엔드 개발자 포트폴리오 | React, TypeScript, Next.js",
  description:
    "프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 모던 웹 개발 프로젝트와 개발 철학을 소개합니다.",
  keywords: [
    "프론트엔드 포트폴리오",
    "프론트엔드 개발자 포트폴리오",
    "리액트 포트폴리오",
    "프론트엔드 프로젝트",
    "넥스트JS 포트폴리오",
    "타입스크립트 포트폴리오",
    "웹 개발자 포트폴리오",
    "React 개발자",
    "TypeScript 개발자",
    "Next.js 개발자",
    "연동근",
  ],
  alternates: {
    canonical: "https://dglog.vercel.app",
  },
  openGraph: {
    title: "연동근 - 프론트엔드 개발자 포트폴리오 | React, TypeScript, Next.js",
    description:
      "프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다. React, TypeScript, Next.js를 활용한 모던 웹 개발 프로젝트와 개발 철학을 소개합니다.",
    type: "website",
    url: "https://dglog.vercel.app",
    images: [
      {
        url: "https://dglog.vercel.app/og-image.png", // 이미지가 있다면 추가
        width: 1200,
        height: 630,
        alt: "연동근 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 스키마 구조화 데이터 추가 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "연동근",
              jobTitle: "프론트엔드 개발자",
              url: "https://dglog.vercel.app",
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "HTML",
                "CSS",
                "TailwindCSS",
              ],
              description: "프론트엔드 개발자 연동근의 포트폴리오입니다.",
            },
          }),
        }}
      />

      {/* 히어로 섹션 */}
      <HeroSection profileData={profileData} />
      <AboutMe />

      {/* 탭 섹션 */}
      {/* <TabSection techStack={techStack} projects={projects} education={education} /> */}
      <Section />
    </div>
  );
};

export default Home;
