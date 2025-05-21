"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "/path/to/image1.jpg",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "/path/to/image2.jpg",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    imageUrl: "/path/to/image3.jpg",
    link: "https://example.com/project3",
  },
  {
    title: "Project 4",
    description: "Description of project 3",
    imageUrl: "/path/to/image3.jpg",
    link: "https://example.com/project3",
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
            start: "top 50%",
            end: "bottom 60%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      projectCards.forEach((card) => {
        const htmlCard = card as HTMLElement;

        htmlCard.addEventListener("mouseenter", () => {
          gsap.to(htmlCard, {
            scale: 1.4,
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
    <section className="flex h-[calc(100vh-72px)] w-full flex-col items-center justify-center bg-red-100">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>

      <div ref={containerRef} className="flex justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-96 w-48 flex-col justify-between overflow-hidden rounded-lg border bg-blue-200 p-4 shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block self-start rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
