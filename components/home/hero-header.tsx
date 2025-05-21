"use client";

import RotatingText from "./hero-section/rotating-text";

export const HeroHeader = () => {
  return (
    <header className="mx-auto h-[calc(100vh-16px)] px-4 py-8 md:py-16">
      <div className="flex h-full items-center gap-8 md:gap-16 lg:flex-row">
        {/* 프로필 이미지 */}
        {/* <ProfileImage
          src={profileData.image}
          alt={`${profileData.name} 프로필 이미지`}
        /> */}

        {/* 인트로 텍스트 */}
        <div className="text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            프론트엔드 개발자 연동근입니다.
          </h1>
          <div className="flex items-center gap-5">
            <span className="text-6xl font-bold">Creative</span>
            <RotatingText
              texts={["React", "Web", "thinking", "Coding", "Component"]}
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
          </div>

          {/* 소셜 버튼 영역 - 클라이언트 컴포넌트 */}
          {/* <SocialButtons /> */}
        </div>
      </div>
    </header>
  );
};
