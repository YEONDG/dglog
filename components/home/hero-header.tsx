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

          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl"></p>

          {/* 소셜 버튼 영역 - 클라이언트 컴포넌트 */}
          {/* <SocialButtons /> */}
        </div>
      </div>
    </header>
  );
};
