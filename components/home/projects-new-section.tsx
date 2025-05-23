"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "dglog",
    description: "포트폴리오 및 블로그",
    imageUrl: "/project-img/dglog-1webp.webp",
    link: "/project/dglog",
  },
  {
    title: "cutechatting",
    description: "아스키 채팅 커뮤니티 사이트",
    imageUrl: "/project-img/cutechatting-1webp.webp",
    link: "/project/cutechatting",
  },
  {
    title: "pokemon",
    description: "포켓몬 도감 사이트",
    imageUrl: "/project-img/pokemon-1webp.webp",
    link: "/project/pokemon",
  },
  {
    title: "이미지변환앱",
    description: "데스크톱 이미지 변환 앱",
    imageUrl: "/project-img/image-app-1webp.webp",
    link: "/project/image-conversion-app",
  },
];
export const ProjectsNewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const projectCards = gsap.utils.toArray(containerRef.current.children);
      gsap.fromTo(
        projectCards,
        { x: 400, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      projectCards.forEach((card) => {
        const htmlCard = card as HTMLElement;

        htmlCard.addEventListener("mouseenter", () => {
          gsap.to(htmlCard, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
            zIndex: 10,

            overwrite: "auto",
          });
        });

        htmlCard.addEventListener("mouseleave", () => {
          gsap.to(htmlCard, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
            zIndex: 1,
            overwrite: "auto",
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-x-hidden px-4 py-36">
      <h2 className="mb-8 w-full text-start text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-2 justify-center gap-4 md:grid-cols-4"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex h-96 w-48 flex-col justify-between overflow-hidden rounded-lg border p-4 shadow-lg"
          >
            <Image
              src={project.imageUrl}
              alt={`${project.title} 배경 이미지`}
              fill
              className="-z-20 object-cover opacity-20 transition-opacity duration-300 hover:opacity-80"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 opacity-100 hover:inline-block group-hover:opacity-0 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <Link
              scroll={false}
              href={project.link}
              className="mt-4 inline-block self-start rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-0 hover:bg-blue-700 group-hover:opacity-100"
            >
              자세히 알아보기
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
