"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { SocialButtons } from "./hero-section/social-buttons";
import { ProfileImage } from "./hero-section/profile-image";
import { cn } from "@/lib/utils";

export const AboutMeSection = () => {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    rootMargin: "0px 0px -300px 0px",
  });
  return (
    <section
      className="flex h-full flex-col items-start justify-center py-36"
      ref={elementRef}
    >
      <div
        className={cn(
          "transition-all duration-700 ease-in-out",

          {
            "translate-y-5 opacity-0": !isIntersecting,
            "translate-y-0 opacity-100": isIntersecting,
          },
        )}
      >
        <h2 className="mb-4 px-4 py-5 text-3xl font-bold dark:text-white">
          About me
        </h2>
        <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-end">
          <div className="">
            <ProfileImage src="/연동근1.webp" alt="profile-img" />
          </div>
          <div className="flex px-4">
            <SocialButtons />
          </div>
        </div>
        <p className="px-4 py-4 text-lg tracking-wide text-gray-900 dark:text-white md:text-2xl">
          개발에 대한 순수한 호기심으로 시작해 꾸준히 공부해왔습니다. <br />
          코딩 자체를 즐기며 올바른 개발 방식을 배우고자 매일 조금씩 성장해
          왔습니다. <br />
          새로운 기술을 배우고 적용하는 것을 좋아하며, <br />
          문제를 해결하는 과정에서 성장하고 있습니다.
        </p>
      </div>
    </section>
  );
};
