import React from "react";
import { ProjectCarousel } from "./project-carousel";
import { Github } from "lucide-react";
import { ProjectCard } from "./project-card";

const CuteChatting = () => {
  return (
    <ProjectCard>
      <h1 className="py-1 text-center text-3xl font-bold md:px-4 md:text-left">
        큐트채팅
      </h1>
      <div className="w-full md:px-6">
        <section className="flex justify-center">
          <ProjectCarousel projectName="cutechatting" />
        </section>
      </div>
      <div className="grid px-1 py-4 md:grid-flow-col md:px-4">
        <section className="space-y-2 border-b pb-2 md:border-b-0 md:border-r md:pb-0">
          <h3 className="text-xl font-semibold">프로젝트 소개</h3>
          <ul className="list-disc pl-6">
            <li>아스키 아트 채팅을 공유하는 커뮤니티 사이트</li>
            <li>
              게시글 CRUD, 페이지네이션, 좋아요 기능, 태그 기반 필터링 구현
            </li>
            <li>
              소셜 로그인(카카오, 구글, 네이버) 통합 - 사용자 역할 기반 접근
              제어 및 회원 관리 기능
            </li>
            <li>Husky와 commitlint로 코드 및 커밋 품질 자동화</li>
          </ul>
        </section>
        <header className="flex justify-between gap-10 pt-2 md:flex-col md:pl-2 md:pt-0">
          <div>
            <div>개발 기간</div>
            <time dateTime="2022-12-06" className="text-sm">
              2022.12.06 ~ 현재
            </time>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              href="https://www.cutechatting.com/"
              className="italic text-blue-500 underline transition-transform hover:scale-105 hover:font-semibold"
            >
              프로젝트 링크
            </a>
            <a
              href="https://github.com/YEONDG/cutechatting"
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
              <span className="font-semibold">문제</span>: 웹사이트 초기 응답
              5초 지연 문제
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: vercel 대시보드에서
              region 아시아 설정이 먹히지 않아 프로젝트 내부 폴더에 vercel
              config 설정을 하여 해결하였습니다.
            </div>
          </li>
          <li>
            <div className="border-l-4 border-l-red-500 pl-2">
              <span className="font-semibold">문제</span>: 소셜 로그인 시
              자동으로 이전 계정으로 로그인되어 다른 계정으로 전환 불가
            </div>
            <div className="border-l-4 border-l-green-500 pl-2">
              <span className="font-semibold">해결</span>: 카카오는 파라미터에
              prompt=login 추가, 네이버는 auth_type=reprompt 추가로 해결
            </div>
          </li>
        </ul>
      </section>
    </ProjectCard>
  );
};

export default CuteChatting;
