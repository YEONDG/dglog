// 프로필 데이터
export const profileData = {
  name: "연동근",
  title: "프론트엔드 개발자",
  description: "인터랙티브한 웹 경험을 창조합니다",
  image: "/연동근1.webp",
  vision:
    "사용자의 일상을 더 나은 방향으로 바꾸는 웹 서비스를 만들고 싶습니다.",
  journey:
    "프론트엔드 개발에 매료되어 사용자 경험을 개선하는 웹 애플리케이션을 만드는 것에 집중하고 있습니다.",
};

// 기술 스택 데이터
export const techStack = [
  { name: "React", level: 70 },
  { name: "Next.js", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "Tailwind CSS", level: 65 },
  { name: "JavaScript", level: 50 },
  { name: "HTML/CSS", level: 65 },
];

// 프로젝트 데이터
export const projects = [
  {
    title: "Cute Chatting",
    description: "아스키 아트를 활용한 이모티콘 공유 및 채팅 서비스",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "NextAuth",
      "Tailwind CSS",
    ],
    highlights: [
      "Supabase를 활용한 실시간 데이터 동기화",
      "Next-Auth를 통한 소셜 로그인(Google, Github) 구현",
      "아스키 아트 이모티콘 생성 및 공유 기능",
      "반응형 UI/UX 디자인",
    ],
    github: "https://github.com/YEONDG/cutechatting",
    demo: "https://www.cutechatting.com/",
  },
  {
    title: "Image Conversion App",
    description: "Electron과 Sharp를 활용한 이미지 변환 데스크톱 애플리케이션",
    techStack: ["TypeScript", "Electron", "Sharp", "React"],
    highlights: [
      "다양한 이미지 포맷 변환 지원",
      "크로스 플랫폼 지원",
      "사용자 친화적 인터페이스",
    ],
    github: "https://github.com/YEONDG/image-conversion-app",
    demo: "",
  },
  {
    title: "Pokemon Dictionary",
    description: "대규모 포켓몬 데이터를 최적화하여 보여주는 도감 서비스",
    techStack: [
      "React",
      "TypeScript",
      "@tanstack/query",
      "@tanstack/virtual",
      "PokeAPI",
    ],
    highlights: [
      "TanStack Query를 활용한 서버 상태 관리 및 캐싱",
      "TanStack Virtual로 대규모 리스트 가상화",
      "무한 스크롤을 통한 데이터 페이지네이션",
      "포켓몬 상세 정보의 최적화된 렌더링",
    ],
    github: "https://github.com/YEONDG/pokemon",
    demo: "https://pokemon-book-orcin.vercel.app/",
  },
];

// 교육 데이터
export const education = [
  {
    degree: "독학",
    institution: "",
    period: "2022 - 2025",
  },
];

// 가치관 데이터
export const values = [
  {
    title: "사용자 중심",
    description: "모든 개발 결정의 중심에는 항상 사용자 경험이 있어야 합니다.",
  },
  {
    title: "지속적 학습",
    description:
      "빠르게 변화하는 웹 기술 생태계에서 끊임없이 새로운 것을 배우고 적용합니다.",
  },
  {
    title: "클린 코드",
    description: "유지보수가 쉽고 확장 가능한 깔끔한 코드 작성을 지향합니다.",
  },
];
