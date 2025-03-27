import React from "react";

export const AboutMe = () => {
  return (
    <div className="">
      <p className="px-6 text-xl font-semibold tracking-wide text-gray-900">
        &nbsp;개발에 대한 순수한 호기심으로 시작해 독학으로 3년간 꾸준히 공부해
        온 신입{" "}
        <span className="inline-block transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-2xl font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          프론트엔드
        </span>{" "}
        개발자입니다. <br /> 코딩 자체를 즐기며 올바른 개발 방식을 배우고자 매일
        조금씩{" "}
        <span className="relative inline-block bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-2xl font-bold text-transparent">
          성장
        </span>
        해 왔습니다.
      </p>
    </div>
  );
};
