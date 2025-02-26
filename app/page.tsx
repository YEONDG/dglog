// app/page.tsx

import { HeroSection } from '@/components/home/hero-section';
import { TabSection } from '@/components/home/tab-section';

import { profileData, techStack, projects, education } from '@/data/home-data';

export const metadata = {
  title: '연동근 - 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자 연동근의 포트폴리오 웹사이트입니다.',
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
