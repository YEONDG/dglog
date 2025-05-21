import { HeroHeader } from "@/components/home/hero-header";
import { AboutMeSection } from "@/components/home/about-me-section";
import { ProjectsNewSection } from "@/components/home/project-new-section/projects-new-section";

const Home = () => {
  return (
    <>
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
      <HeroHeader />

      <AboutMeSection />

      <ProjectsNewSection />

      {/* 블로그 섹션 */}
      {/* <BlogSection /> */}

      {/* 방명록 섹션 */}
      {/* <GuestBookSection /> */}

      {/* 프로젝트 섹션 */}

      {/* <ProjectsSection /> */}
    </>
  );
};

export default Home;
