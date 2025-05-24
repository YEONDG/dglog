import { HeroHeader } from "@/components/home/hero-header";
import { AboutMeSection } from "@/components/home/about-me-section";
import { ProjectsSection } from "@/components/home/projects-section";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4">
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

      <HeroHeader />

      <AboutMeSection />

      <ProjectsSection />
    </div>
  );
};

export default Home;
