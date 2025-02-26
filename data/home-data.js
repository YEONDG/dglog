// 프로필 데이터
export const profileData = {
  name: '연동근',
  title: '프론트엔드 개발자',
  description: '인터랙티브한 웹 경험을 창조합니다',
  image: '/연동근.jpg',
};

// 기술 스택 데이터
export const techStack = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
];

// 프로젝트 데이터
export const projects = [
  {
    id: 1,
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 shadcn/ui를 활용한 개인 포트폴리오 사이트',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: '방명록 애플리케이션',
    description: 'React Server Actions를 활용한 인터랙티브 방명록',
    tech: ['Next.js', 'Prisma', 'React Server Actions', 'Tailwind CSS'],
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: '실시간 채팅 앱',
    description: '웹소켓을 활용한 실시간 통신 애플리케이션',
    tech: ['React', 'Node.js', 'Socket.io', 'Express'],
    image: '/project3.jpg',
  },
];

// 교육 데이터
export const education = [
  {
    degree: '독학',
    institution: '',
    period: '2022 - 2025',
  },
];
