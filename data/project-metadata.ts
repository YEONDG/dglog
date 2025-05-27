export interface ProjectMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string; // Optional: specific OG image path if available
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  'dglog': {
    title: 'DGlog',
    description: 'Next.js 15와 React 19 기반 포트폴리오 웹사이트. Notion Database를 CMS로 활용하고, React 19 신규 Hooks, Supabase, Prisma를 사용한 방명록을 구현했습니다.',
    keywords: ['Next.js 15', 'React 19', 'Typescript', 'Tailwind CSS', 'Notion API', 'Supabase', 'Prisma', 'Zod', 'shadcn/ui', 'Portfolio'],
    // Assuming ogImage will be dynamically generated for now, or use a default.
    // You can add a specific path here if one of the carousel images is preferred, e.g., '/project-img/dglog-1webp.webp'
  },
  'cutechatting': {
    title: '큐트채팅',
    description: '아스키 아트 채팅을 공유하는 커뮤니티 사이트. 게시글 CRUD, 페이지네이션, 좋아요, 태그 필터링, 소셜 로그인(카카오, 구글, 네이버) 기능을 제공합니다.',
    keywords: ['Next.js 14', 'Typescript', 'Tailwind CSS', 'NextAuth.js', 'Zustand', 'Supabase', 'Prisma', 'Zod', 'shadcn/ui', 'Framer Motion', 'Community'],
  },
  'pokemon': { // Slug is 'pokemon' as per projectComponentMap
    title: '포켓몬 도감',
    description: '포켓몬 API 기반 포켓몬 도감 웹 애플리케이션. 무한스크롤, 창 가상화, 초성 검색, 이미지 지연로딩으로 사용자 경험을 개선했습니다.',
    keywords: ['React 18', 'Typescript', 'Tailwind CSS', 'React-router v6', 'Zustand', '@tanstack/react-query', '@tanstack/react-virtual', 'Zod', 'shadcn/ui', 'Framer Motion', 'Pokemon API'],
  },
  'image-conversion-app': {
    title: '이미지 변환앱',
    description: '손쉬운 이미지 확장자 및 용량 변환을 위한 데스크톱 앱. React와 Electron 기반 크로스 플랫폼 솔루션으로 드래그 앤 드롭 인터페이스를 제공합니다.',
    keywords: ['React 18', 'Electron', 'Electron-builder', 'sharp', 'Tailwind CSS', 'Webpack', 'Node.js', 'Desktop App'],
  }
};
