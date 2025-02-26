'use client';
import { useState } from 'react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // 개발 스킬 데이터
  const skills = [
    {
      category: '프론트엔드',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    },
    { category: '백엔드', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: '도구', items: ['Git', 'Webpack', 'Figma', 'VS Code', 'Jest'] },
  ];

  // 경력 및 교육 데이터
  const experiences = [
    {
      period: '2023 - 현재',
      title: '프론트엔드 개발 학습',
      description: '자기주도적 학습 및 개인 프로젝트 개발을 통한 프론트엔드 기술 스택 강화',
    },
    {
      period: '2022 - 2023',
      title: '웹 개발 부트캠프',
      description: '실무 중심의 프론트엔드 개발 교육과정 수료',
    },
    {
      period: '2018 - 2022',
      title: '컴퓨터공학 학사',
      description: '웹 개발 및 UI/UX 디자인 과목 수강',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* 헤더 섹션 */}
        <div className='text-center mb-16 space-y-4'>
          <h1 className='text-4xl font-bold text-gray-800'>About Me</h1>
          <div className='h-1 w-20 bg-blue-500 mx-auto'></div>
          <p className='text-xl text-gray-600 mt-4'>안녕하세요, 사용자 경험에 집중하는 프론트엔드 개발자입니다</p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          {/* 프로필 카드 */}
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3 bg-blue-600 p-8 text-white'>
              <div className='w-40 h-40 rounded-full bg-white mx-auto mb-6 overflow-hidden'>
                {/* 프로필 이미지 자리 - 실제로는 이미지 태그로 대체 */}
                <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-gray-400 text-lg'>프로필 사진</span>
                </div>
              </div>
              <h2 className='text-2xl font-bold text-center mb-2'>홍길동</h2>
              <p className='text-blue-200 text-center mb-6'>프론트엔드 개발자</p>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <span>example@email.com</span>
                </div>
                <div className='flex items-center'>
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <span>010-1234-5678</span>
                </div>
                <div className='flex items-center'>
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <span>서울특별시</span>
                </div>
              </div>
            </div>

            <div className='md:w-2/3 p-8'>
              {/* 탭 네비게이션 */}
              <div className='flex border-b border-gray-200 mb-6'>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                  }`}
                >
                  프로필
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                  }`}
                >
                  기술 스택
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                  }`}
                >
                  경력 및 교육
                </button>
              </div>

              {/* 프로필 탭 내용 */}
              {activeTab === 'profile' && (
                <div className='space-y-4 animate-fadeIn'>
                  <h3 className='text-xl font-semibold text-gray-800'>안녕하세요!</h3>
                  <p className='text-gray-600'>
                    사용자 중심의 웹 경험을 만드는 데 열정을 가진 프론트엔드 개발자입니다. React와 모던 JavaScript를
                    활용한 반응형 웹 애플리케이션 개발에 전문성을 갖추고 있으며, 깔끔하고 효율적인 코드 작성을
                    지향합니다.
                  </p>
                  <p className='text-gray-600'>
                    사용자 인터페이스 디자인과 개발 모두에 관심이 있어 UI/UX 디자인 원칙을 이해하고 적용하는 것을
                    좋아합니다. 새로운 기술을 배우는 것에 열정적이며, 팀 프로젝트에서 협업과 의사소통을 중요시합니다.
                  </p>
                  <p className='text-gray-600'>
                    현재는 Next.js와 TypeScript를 활용한 프로젝트를 진행하며, 웹 접근성과 성능 최적화에 대해 깊이
                    공부하고 있습니다.
                  </p>

                  <div className='pt-4'>
                    <h4 className='text-lg font-semibold text-gray-800 mb-3'>관심 분야</h4>
                    <div className='flex flex-wrap gap-2'>
                      {['반응형 웹 디자인', '웹 접근성', '애니메이션', '상태 관리', '성능 최적화'].map(
                        (interest, index) => (
                          <span key={index} className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                            {interest}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 기술 스택 탭 내용 */}
              {activeTab === 'skills' && (
                <div className='space-y-6 animate-fadeIn'>
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className='text-lg font-semibold text-gray-800 mb-3'>{skillGroup.category}</h3>
                      <div className='flex flex-wrap gap-2'>
                        {skillGroup.items.map((skill, idx) => (
                          <div key={idx} className='px-4 py-2 bg-gray-100 rounded-lg flex items-center'>
                            <div className='w-2 h-2 rounded-full bg-blue-500 mr-2'></div>
                            <span className='text-gray-800'>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className='mt-6'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-3'>언어</h3>
                    <div className='space-y-3'>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm font-medium text-gray-700'>JavaScript</span>
                          <span className='text-sm font-medium text-gray-700'>90%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2'>
                          <div className='bg-blue-600 h-2 rounded-full' style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm font-medium text-gray-700'>TypeScript</span>
                          <span className='text-sm font-medium text-gray-700'>75%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2'>
                          <div className='bg-blue-600 h-2 rounded-full' style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm font-medium text-gray-700'>HTML/CSS</span>
                          <span className='text-sm font-medium text-gray-700'>85%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2'>
                          <div className='bg-blue-600 h-2 rounded-full' style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 경력 및 교육 탭 내용 */}
              {activeTab === 'experience' && (
                <div className='space-y-8 animate-fadeIn'>
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-blue-200"
                    >
                      <div className='absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1.5'></div>
                      <div className='text-sm font-medium text-blue-600 mb-1'>{exp.period}</div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{exp.title}</h3>
                      <p className='text-gray-600'>{exp.description}</p>
                    </div>
                  ))}

                  <div className='mt-8'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-3'>프로젝트</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
                        <h4 className='font-medium text-gray-800 mb-2'>개인 포트폴리오 웹사이트</h4>
                        <p className='text-sm text-gray-600 mb-2'>
                          React, Tailwind CSS를 활용한 반응형 포트폴리오 사이트
                        </p>
                        <div className='flex gap-2'>
                          <span className='px-2 py-1 bg-gray-200 rounded text-xs text-gray-700'>React</span>
                          <span className='px-2 py-1 bg-gray-200 rounded text-xs text-gray-700'>Tailwind</span>
                        </div>
                      </div>
                      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
                        <h4 className='font-medium text-gray-800 mb-2'>쇼핑몰 프로토타입</h4>
                        <p className='text-sm text-gray-600 mb-2'>Next.js와 TypeScript를 활용한 이커머스 웹사이트</p>
                        <div className='flex gap-2'>
                          <span className='px-2 py-1 bg-gray-200 rounded text-xs text-gray-700'>Next.js</span>
                          <span className='px-2 py-1 bg-gray-200 rounded text-xs text-gray-700'>TypeScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>함께 일해보세요!</h3>
          <p className='text-gray-600 mb-6'>프로젝트 문의나 협업 제안은 언제든지 환영합니다.</p>
          <button className='px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1'>
            연락하기
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
