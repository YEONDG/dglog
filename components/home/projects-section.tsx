"use client";

import { HomeProjectCard } from "./home-projects-section/home-project-card";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  bgColor: string;
  hoverBgColor: string;
  stacks: string[];
};

const projects: Project[] = [
  {
    title: "dglog",
    description: "포트폴리오 및 블로그",
    imageUrl: "/project-img/dglog-1webp.webp",
    link: "/project/dglog",
    bgColor: "bg-orange-50",
    hoverBgColor: "hover:bg-orange-100",
    stacks: [
      "react",
      "typescript",
      "nextjs",
      "tailwind",
      "notion",
      "supabase",
      "prisma",
      "zod",
      "shadcn",
    ],
  },
  {
    title: "cutechatting",
    description: "아스키 채팅 커뮤니티 사이트",
    imageUrl: "/project-img/cutechatting-1webp.webp",
    link: "/project/cutechatting",
    bgColor: "bg-green-50",
    hoverBgColor: "hover:bg-green-100",
    stacks: [
      "react",
      "typescript",
      "nextjs",
      "tailwind",
      "zustand",
      "supabase",
      "prisma",
      "zod",
      "shadcn",
    ],
  },
  {
    title: "pokemon",
    description: "포켓몬 도감 사이트",
    imageUrl: "/project-img/pokemon-1webp.webp",
    link: "/project/pokemon",
    bgColor: "bg-red-50",
    hoverBgColor: "hover:bg-red-100",
    stacks: [
      "react",
      "typescript",
      "tailwind",
      "react_query",
      "react_router",
      "zustand",
      "prisma",
      "zod",
      "shadcn",
    ],
  },
  {
    title: "이미지변환앱",
    description: "데스크톱 이미지 변환 앱",
    imageUrl: "/project-img/image-app-1webp.webp",
    link: "/project/image-conversion-app",
    bgColor: "bg-gray-50",
    hoverBgColor: "hover:bg-gray-100",
    stacks: ["react", "typescript", "nextjs", "tailwind", "electron", "node"],
  },
];
export const ProjectsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-4 py-36">
      <h2 className="mb-8 w-full text-start text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
        {projects.map((project, index) => (
          <HomeProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
