"use client";

import RotatingText from "./hero-section/rotating-text";

export const HeroHeader = () => {
  return (
    <header className="mx-auto h-[60vh] py-8 md:py-16">
      <div className="flex h-full items-center gap-8 md:gap-16 lg:flex-row">
        {/* 인트로 텍스트 */}
        <div className="text-center lg:text-left">
          <div className="flex items-center gap-5">
            <span className="text-6xl font-bold">저는</span>
            <RotatingText
              texts={[
                "리액트를",
                "자바스크립트를",
                "개발을",
                "코딩을",
                "컴퓨터를",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit text-6xl font-bold text-center inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <span className="text-6xl font-bold">좋아하는</span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            프론트엔드 개발자 연동근입니다.
          </h1>
        </div>
      </div>
    </header>
  );
};
