import React from "react";
import { ProjectCarousel } from "./project-carousel";
import { Github } from "lucide-react";
import { ProjectCard } from "./project-card";

const PokemonBook = () => {
  return (
    <ProjectCard>
      <h1 className="py-1 text-center text-3xl font-bold md:px-4 md:text-left">
        포켓몬 도감
      </h1>
      <div className="w-full md:px-6">
        <section className="flex justify-center">
          <ProjectCarousel projectName="pokemon" />
        </section>
      </div>
      <div className="grid px-1 py-4 md:grid-flow-col md:px-4">
        <section className="space-y-2 border-b pb-2 md:border-b-0 md:border-r md:pb-0">
          <h3 className="text-xl font-semibold">프로젝트 소개</h3>
          <ul className="list-disc pl-6">
            <li>포켓몬 API 기반 포켓몬 도감 웹 애플리케이션 개발</li>
            <li>무한스크롤 및 창 가상화를 통한 최적화된 리스트 구현</li>
            <li>초성 검색 지원 및 이미지 지연로딩을 통한 사용자 경험 개선</li>
          </ul>
        </section>
        <header className="flex justify-between gap-10 pt-2 md:flex-col md:pl-2 md:pt-0">
          <div>
            <div>개발 기간</div>
            <time dateTime="2022-12-06" className="text-sm">
              2023.11.30 ~ 현재
            </time>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              href="https://pokemon-book-orcin.vercel.app/"
              className="italic text-blue-500 underline transition-transform hover:scale-105 hover:font-semibold"
            >
              프로젝트 링크
            </a>
            <a
              href="https://github.com/YEONDG/pokemon"
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
              <span className="font-semibold">문제</span>: 다수의 포켓몬 DOM
              요소로 인한 스크롤 성능 저하 및 버벅임 현상 발생
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: 무한스크롤로 포켓몬
              리스트를 불러왔을 때 스크롤 시 수많은 포켓몬 dom이 움직이면서
              버벅거리는 문제가 있었습니다. 해결법을 찾던 중 dom을 가상화하여
              보이는 부분만 렌더링 하여 최적화하는 방식을 찾게 되었고 npm에서
              최근까지 꾸준한 업데이트를 하고 있는 tanstack-virtual을 적용하여
              문제 해결하였습니다.
            </div>
          </li>
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: 검색창에 포켓몬 검색
              시에 스크롤이 사라졌다 나타났다 하여 전체 레이아웃이 밀려 보이는
              현상
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: 이 프로젝트에서는 첫
              페이지부터 무한스크롤로 구현되어 있기 때문에 html 자체에 항상 세로
              스크롤바를 만들어서 레이아웃 시프트 문제를 해결하였습니다.
            </div>
          </li>
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: 검색어 입력마다 API
              호출이 발생하여 서버에 과부하가 발생하는 문제
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: 디바운스로 글자마다
              0.5초 딜레이 후 검색 구현하였고 기존에 검색했던 리스트는 리액트
              쿼리로 캐싱 재활용
            </div>
          </li>
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: 다수의 포켓몬 이미지
              동시 로딩으로 인한 초기 페이지 로드 시간 지연
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              Intersection Observer API 기반 지연 로딩 구현으로 초기 로드 시간
              30% 단축
            </div>
          </li>
        </ul>
      </section>
    </ProjectCard>
  );
};

export default PokemonBook;
