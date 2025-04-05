import React from "react";
import { ProjectCarousel } from "./project-carousel";
import { Github } from "lucide-react";
import { ProjectCard } from "./project-card";

const ImageConversionApp = () => {
  return (
    <ProjectCard>
      <h1 className="py-1 text-center text-3xl font-bold md:px-4 md:text-left">
        DGlog
      </h1>
      <div className="w-full md:px-6">
        <section className="flex justify-center">
          <ProjectCarousel projectName="image-app" />
        </section>
      </div>
      <div className="grid px-1 py-4 md:grid-flow-col md:px-4">
        <section className="space-y-2 border-b pb-2 md:border-b-0 md:border-r md:pb-0">
          <h3 className="text-xl font-semibold">프로젝트 소개</h3>
          <ul className="list-disc pl-6">
            <li>Next.js 15와 React 19 기반 포트폴리오 웹사이트</li>
            <li>Notion Database를 CMS로 활용한 콘텐츠 관리</li>
            <li>React 19의 신규 Hooks(useActionState, useOptimistic) 활용</li>
            <li>Supabase와 Prisma 연동 서버리스 방명록 구현</li>
            <li>SSG와 ISR을 활용한 성능 최적화</li>
            <li>Husky와 GitHub Actions로 자동화된 CI/CD 파이프라인 구축</li>
          </ul>
        </section>
        <header className="flex justify-between gap-10 pt-2 md:flex-col md:pl-2 md:pt-0">
          <div>
            <div>개발 기간</div>
            <time dateTime="2022-12-06" className="text-sm">
              2025.02.10 ~ 현재
            </time>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              href="https://github.com/YEONDG/image-conversion-app"
              className="italic text-blue-500 underline transition-transform hover:scale-105 hover:font-semibold"
            >
              <Github className="inline-block" />
              깃헙 링크
            </a>
          </nav>
        </header>
      </div>

      <section className="space-y-2 md:px-4">
        <h3 className="text-xl font-semibold">프로젝트하면서 만난 문제</h3>
        <ul className="space-y-2 pl-2">
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: Notion API에서
              제공하는 이미지 URL이 1시간 후 만료되어 블로그 이미지가 깨지는
              현상 발생
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: Notion 데이터베이스
              웹 게시 버전 URL로 교체하여 영구적인 이미지 링크 확보
            </div>
          </li>
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: 서버액션과
              useActionState 사용 시에 서버에서의 첫 결과를 클라이언트 초기값을
              업데이트하지 못하는 문제
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: useEffect로
              useActionState 안에 state 객체를 확인하여 toast로 성공, 실패여부를
              표시하였습니다. 하지만 좋지 못한 해결법인 것 같아 지속적으로
              해결법을 찾고 있습니다.
            </div>
          </li>
        </ul>
      </section>
    </ProjectCard>
  );
};

export default ImageConversionApp;
