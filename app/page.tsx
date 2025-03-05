import { HeroSection } from '@/components/home/hero-section';
import { TabSection } from '@/components/home/tab-section';
import { profileData, techStack, projects, education } from '@/data/home-data';

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
