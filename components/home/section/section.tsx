"use client";

import { Dglog } from "../projects/dglog";
import CuteChatting from "../projects/cutechatting";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

export const Section = () => {
  const [elementRef, isIntersection] = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={cn(
        "relative z-10 min-h-screen w-full transition-opacity duration-700",
        isIntersection ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 px-8 text-left text-4xl font-bold">프로젝트</h2>

          <p className="mb-4 px-8 text-lg text-gray-700 dark:text-gray-300">
            제가 진행한 주요 프로젝트들을 소개합니다
          </p>

          {/* 프로젝트 카드들 */}
          <div className="flex w-full flex-col gap-16">
            <CuteChatting />
            <Dglog />
          </div>
        </div>
      </div>
    </section>
  );
};
