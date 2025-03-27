import React from "react";
import { ProjectCarousel } from "./project-carousel";
import { Github } from "lucide-react";

const CuteChatting = () => {
  return (
    <article className="space-y-5 rounded-3xl border-2 p-8">
      <div className="w-full md:px-6">
        <section className="flex justify-center">
          <ProjectCarousel />
        </section>
      </div>
      <h1 className="py-5 text-3xl font-bold md:px-4">큐트채팅</h1>

      <div className="grid px-1 py-4 md:grid-flow-col md:px-4">
        <section className="border-b pb-2 md:border-b-0 md:border-r md:pb-0">
          <h3 className="text-xl">프로젝트 소개</h3>
          <ul>
            <li>- 아스키 아트 채팅을 공유하는 커뮤니티 사이트</li>
            <li>
              - 게시글 CRUD, 페이지네이션, 좋아요 기능, 태그 기반 필터링 구현
            </li>
            <li>
              - 소셜 로그인(카카오, 구글, 네이버) 통합 - 사용자 역할 기반 접근
              제어 및 회원 관리 기능
            </li>
            <li>- Husky와 commitlint로 코드 및 커밋 품질 자동화</li>
          </ul>
        </section>
        <header className="flex justify-between gap-10 pt-2 md:flex-col md:pl-2 md:pt-0">
          <time dateTime="2022-12-06" className="text-sm">
            2022.12.06 ~ 현재
          </time>
          <nav className="flex flex-col gap-2">
            <a
              href="#"
              className="italic text-blue-500 underline transition-transform hover:scale-105 hover:font-semibold"
            >
              프로젝트 링크
            </a>
            <a
              href="#"
              className="italic text-blue-500 underline transition-transform hover:scale-105 hover:font-semibold"
            >
              <Github className="inline-block" />
              깃헙 링크
            </a>
          </nav>
        </header>
      </div>

      <section className="md:px-4">
        <h3 className="text-xl">프로젝트하면서 만난 문제</h3>
        <ul>
          <li>
            <div>문제: 웹사이트 초기 응답 5초 지연 문제</div>
            <div>해결</div>
          </li>
          <li>ㅇㅇㅇㅇㅇ</li>
          <li>ㅇㅇㅇㅇㅇ</li>
          <li>ㅇㅇㅇㅇㅇ</li>
          <li>ㅇㅇㅇㅇㅇ</li>
        </ul>
      </section>
    </article>
  );
};

export default CuteChatting;
