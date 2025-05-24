"use client";

import RotatingText from "./hero-section/rotating-text";

export const HeroHeader = () => {
  return (
    <header className="mx-auto h-screen w-full">
      <div className="flex h-full items-center gap-8 md:gap-16 lg:flex-row">
        {/* 인트로 텍스트 */}
        <div className="space-y-5 text-left">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold lg:text-5xl">저는 </span>
            <RotatingText
              texts={[
                "리액트를",
                "자바스크립트를",
                "개발을",
                "코딩을",
                "컴퓨터를",
              ]}
              mainClassName="px-2 lg:text-5xl sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5  justify-center rounded-lg w-fit text-2xl font-bold text-center inline-block py-2"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden "
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <span className="text-2xl font-bold lg:text-5xl">좋아하는</span>
          </div>
          <h1 className="mb-4 break-keep bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-left text-4xl font-bold text-transparent lg:text-6xl">
            프론트엔드 개발자 연동근입니다.
          </h1>
          <p className="">리액트를 중심으로 웹 프론트엔드를 개발합니다.</p>
        </div>
      </div>
    </header>
  );
};
