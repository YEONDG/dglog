import { ProjectsSection } from "@/components/projects/projects-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트 | 프론트엔드 개발자 연동근의 포트폴리오",
  description:
    "프론트엔드 개발자 연동근의 다양한 프로젝트를 소개하는 페이지입니다.",
  keywords: [
    "프론트엔드 개발자 프로젝트",
    "포트폴리오 프로젝트",
    "개발자 프로젝트",
    "연동근 프로젝트",
    "웹 개발자 포트폴리오",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "프로젝트 | 프론트엔드 개발자 연동근의 포트폴리오",
    description:
      "프론트엔드 개발자 연동근의 다양한 프로젝트를 소개하는 페이지입니다.",
    type: "website",
  },
};

const ProjectsPage = () => {
  return (
    <section aria-labelledby="projects-heading" className="h-screen">
      <h1 id="projects-heading" className="sr-only">
        프로젝트
      </h1>
      <ProjectsSection />
    </section>
  );
};

export default ProjectsPage;
