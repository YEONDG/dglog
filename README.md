# DG LOG - Next.js 기술 블로그

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC)
![Jest](https://img.shields.io/badge/Jest-29-C21325)

Notion API를 활용한 Next.js 15와 React 19 기반의 기술 블로그 프로젝트입니다.

## 🚀 주요 기능

### 1. Notion 기반 콘텐츠 관리

- Notion을 CMS(Content Management System)로 활용
- 마크다운 포맷 지원
- 실시간 콘텐츠 업데이트

### 2. 태그 기반 포스트 관리

- 태그별 포스트 필터링
- 정적 페이지 생성(SSG)으로 빠른 페이지 로딩
- 태그 클라우드 제공

### 3. 방명록 기능

- React 19의 useActionState를 활용한 서버 액션 상태 관리
- useOptimistic을 통한 낙관적 업데이트 구현
- 실시간 업데이트와 에러 처리
- Supabase와 Prisma를 활용한 서버리스 백엔드 구성
- Zod를 통한 데이터 유효성 검증
- 비밀번호 기반의 CRUD 기능 구현

### 4. 최신 React 기능 활용

- useActionState로 서버 액션 상태 관리
- useOptimistic을 통한 즉각적인 UI 업데이트
- use hook을 활용한 Promise 처리
- 향상된 Suspense 경계 처리

## 🛠 기술 스택

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Testing**: Jest, React Testing Library

### React 19 주요 기능

- **useActionState**: 서버 액션의 상태 관리
- **useOptimistic**: 낙관적 UI 업데이트
- **use hook**: Promise 처리 간소화
- **Suspense**: 개선된 로딩 상태 처리

### Backend & Data

- **CMS**: Notion API
- **Database**: Notion Database, Supabase (PostgreSQL)
- **ORM**: Prisma
- **Validation**: Zod

### DevOps

- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel

## 📦 프로젝트 구조

```
dglog/
├── app/                    # Next.js 15 App Router
│   ├── posts/             # 블로그 포스트 관련 페이지
│   ├── tags/              # 태그별 포스트 페이지
│   └── guestbook/         # 방명록 페이지
├── components/            # React 컴포넌트
│   ├── common/           # 공통 컴포넌트
│   ├── posts/            # 포스트 관련 컴포넌트
│   └── ui/               # UI 컴포넌트
├── lib/                  # 유틸리티 함수
├── types/                # TypeScript 타입 정의
└── __tests__/           # 테스트 파일
```

## ✨ 주요 구현 사항

### React 19 최신 기능 활용

- useActionState를 활용한 서버 액션 상태 관리
  ```typescript
  const [state, action] = useActionState(submitComment);
  ```
- useOptimistic을 통한 즉각적인 UI 업데이트
  ```typescript
  const [optimisticComments, addOptimisticComment] = useOptimistic(comments, (state, newComment) => [
    ...state,
    newComment,
  ]);
  ```
- Suspense와 Error Boundary를 활용한 안정적인 로딩/에러 처리

### Server Components 활용

- 서버 사이드 렌더링을 통한 성능 최적화
- 정적 페이지 생성으로 빠른 초기 로딩

### 타입 안정성

- TypeScript를 활용한 타입 체크
- Notion API 응답에 대한 타입 정의

### 테스트 자동화

- Jest와 React Testing Library를 활용한 컴포넌트 테스트
- GitHub Actions를 통한 CI/CD 파이프라인

### 성능 최적화

- 이미지 최적화
- 정적 페이지 생성
- 증분 정적 재생성(ISR)
- React 19의 최적화 기능 활용

### 서버리스 백엔드 구성

- Supabase를 활용한 PostgreSQL 데이터베이스 구축
- Prisma ORM을 통한 타입 안전한 데이터베이스 조작
  ```typescript
  // Prisma 스키마 예시
  model Guestbook {
    id        String   @id @default(uuid())
    name      String
    message   String
    password  String
    createdAt DateTime @default(now())
  }
  ```
- Zod를 활용한 입력 데이터 검증
  ```typescript
  const GuestbookSchema = z.object({
    name: z.string().min(2).max(50),
    message: z.string().min(1).max(500),
    password: z.string().min(4),
  });
  ```

## 🔧 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/yourusername/dglog.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 프로덕션 빌드
npm run build
```

## 🌟 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
# Notion API
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id

# Database
DATABASE_URL=your_supabase_postgres_url
DIRECT_URL=your_supabase_direct_url
```

## 📝 라이선스

MIT License
