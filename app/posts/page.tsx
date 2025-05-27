import { Suspense } from "react";
import type { Metadata } from 'next'; // Added import

import { NotionPosts } from "@/components/posts/notion-posts";
import { TagList } from "@/components/posts/tag-list";
import {
  PostsLoadingSkeleton,
  TagsLoadingSkeleton,
} from "@/components/skeletons";

export const revalidate = 86400; // 선택적: 24시간마다 재검증

// Added metadata object
export const metadata: Metadata = {
  title: "블로그 게시물 | Dglog - 연동근 기술 블로그",
  description: "다양한 기술 주제, 개발 경험, 개인적인 학습 내용을 기록하고 공유하는 공간입니다. 프론트엔드, 웹 개발 등에 대한 인사이트를 찾아보세요.",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: "블로그 게시물 | Dglog - 연동근 기술 블로그",
    description: "다양한 기술 주제, 개발 경험, 개인적인 학습 내용을 기록하고 공유하는 공간입니다.",
    url: "https://dglog.vercel.app/posts",
    type: "website",
  },
};

const PostsPage = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl gap-4 px-2">
      {/* 게시물 리스트 */}
      <article className="flex grow flex-col gap-4">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Posts</h1>
        </header>
        <Suspense fallback={<PostsLoadingSkeleton />}>
          <NotionPosts />
        </Suspense>
      </article>
      {/* 태그 리스트 */}
      <aside
        className="hidden w-1/5 flex-col gap-4 md:flex"
        aria-labelledby="tags-heading"
      >
        <h2 className="text-xl font-bold">Tags</h2>
        <Suspense fallback={<TagsLoadingSkeleton />}>
          <TagList />
        </Suspense>
      </aside>
    </div>
  );
};

export default PostsPage;
