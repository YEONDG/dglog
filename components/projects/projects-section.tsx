"use client";

import Dglog from "@/components/projects/dglog";
import CuteChatting from "@/components/projects/cutechatting";
import PokemonBook from "@/components/projects/pokemon-book";
import ImageConversionApp from "@/components/projects/image-conversion-app";

export const ProjectsSection = () => {
  return (
    <section
      className={
        "relative z-10 min-h-screen w-full transition-opacity duration-700"
      }
    >
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 px-8 text-left text-4xl font-bold">프로젝트</h2>

          <p className="mb-4 px-8 text-lg text-gray-700 dark:text-gray-300">
            제가 진행한 주요 프로젝트들을 소개합니다
          </p>

          {/* 프로젝트 카드들 */}
          <div className="flex w-full flex-col gap-8">
            <Dglog />
            <CuteChatting />
            <PokemonBook />
            <ImageConversionApp />
          </div>
        </div>
      </div>
    </section>
  );
};
