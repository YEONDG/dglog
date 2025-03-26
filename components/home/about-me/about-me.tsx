import React from 'react';

export const AboutMe = () => {
  return (
    <div className=''>
      <p className='text-gray-900 font-semibold text-xl px-6 tracking-wide '>
        &nbsp;개발에 대한 순수한 호기심으로 시작해 독학으로 3년간 꾸준히 공부해 온 신입{' '}
        <span className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-block transform hover:-translate-y-1'>
          프론트엔드
        </span>{' '}
        개발자입니다. <br /> 코딩 자체를 즐기며 올바른 개발 방식을 배우고자 매일 조금씩{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 font-bold text-2xl relative inline-block'>
          성장!
        </span>
        해 왔습니다.
      </p>
    </div>
  );
};
