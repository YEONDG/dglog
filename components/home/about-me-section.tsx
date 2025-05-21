"use client"; // Next.js 클라이언트 컴포넌트임을 명시

export const AboutMeSection = () => {
  return (
    <section className="flex h-[calc(100vh-72px)] flex-col items-center justify-center py-6 md:py-16">
      <p
        // GSAP 애니메이션을 적용할 요소에 ref 연결
        className="px-6 text-2xl font-semibold tracking-wide text-gray-900 dark:text-white"
      >
        &nbsp;개발에 대한 순수한 호기심으로 시작해 독학으로 꾸준히 공부해 온
        신입 프론트엔드 개발자입니다. 코딩 자체를 즐기며 올바른 개발 방식을
        배우고자 매일 조금씩 성장 해 왔습니다.
      </p>
    </section>
  );
};
