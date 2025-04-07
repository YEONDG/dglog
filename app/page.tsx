import { AboutMe } from "@/components/home/about-me/about-me";
import { HeroSection } from "@/components/home/hero-section";
import { Section } from "@/components/home/section/section";
// import { TabSection } from '@/components/home/tab-section';
import {
  profileData,
  // techStack, projects, education
} from "@/data/home-data";

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
