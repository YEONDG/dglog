import React from "react";
import { ProjectCarousel } from "./project-carousel";
import { Github } from "lucide-react";
import { ProjectCard } from "./project-card";

const ImageConversionApp = () => {
  return (
    <ProjectCard>
      <h1 className="py-1 text-center text-3xl font-bold md:px-4 md:text-left">
        이미지 변환앱
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
            <li>손쉬운 이미지 확장자 및 용량 변환을 위한 데스크톱 앱입니다.</li>
            <li>React와 Electron 기반 크로스 플랫폼 솔루션 구현</li>
            <li>드래그 앤 드롭 방식의 직관적 사용자 인터페이스 설계</li>
          </ul>
        </section>
        <header className="flex justify-between gap-10 pt-2 md:flex-col md:pl-2 md:pt-0">
          <div>
            <div>개발 기간</div>
            <time dateTime="2024.12.15" className="text-sm">
              2024.10.30 ~ 2024.12.15 1인개발
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
              <span className="font-semibold">문제</span>: Electron-forge 사용
              시 발생하는 빌드 에러로 인한 배포 불가
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: Electron-builder로
              패키징 시스템 마이그레이션을 통해 안정적인 크로스 플랫폼 배포 환경
              구축
            </div>
          </li>
        </ul>
      </section>
    </ProjectCard>
  );
};

export default ImageConversionApp;
