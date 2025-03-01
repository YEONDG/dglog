import { HeroSection } from '@/components/home/hero-section';
import { TabSection } from '@/components/home/tab-section';
import { profileData, techStack, projects, education } from '@/data/home-data';
import { Metadata } from 'next';

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
  // verification: {
  //   google: 'your-google-verification-code', // Google Search Console 인증 코드
  //   other: {
  //     'naver-site-verification': 'your-naver-verification-code', // 네이버 웹마스터 도구 인증 코드
  //   },
  // },
};

const Home = () => {
  return (
    <div className='min-h-screen '>
      {/* 히어로 섹션 */}
      <HeroSection profileData={profileData} />

      {/* 탭 섹션 */}
      <TabSection techStack={techStack} projects={projects} education={education} />
    </div>
  );
};

export default Home;
