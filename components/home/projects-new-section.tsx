"use client";

import Link from "next/link";
import { STACK_ICONS } from "../icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const projects = [
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
export const ProjectsNewSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-4 py-36">
      <h2 className="mb-8 w-full text-start text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
        {projects.map((project, index) => (
          <Link
            scroll={false}
            href={project.link}
            key={index}
            className={`group relative flex h-96 w-60 flex-col justify-center shadow-lg transition-transform ${project.bgColor} ${project.hoverBgColor}`}
          >
            <div className="space-y-4 px-4">
              <h2 className="py-10 text-2xl font-semibold text-gray-900 backdrop-blur-xl dark:text-white">
                {project.title}
              </h2>
              <p>{project.description}</p>
              <div>
                <h3>기술스택</h3>
                <div className="flex">
                  <TooltipProvider>
                    {project.stacks?.map((stack) => {
                      const IconComponent = STACK_ICONS[stack];

                      return IconComponent ? (
                        <Tooltip key={stack}>
                          <TooltipTrigger asChild>
                            <IconComponent className="z-10 h-8 w-8 p-1 text-gray-700 dark:text-gray-300" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{stack}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : null;
                    })}
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
