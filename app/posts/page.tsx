import { Suspense } from "react";

import { NotionPosts } from "@/components/posts/notion-posts";
import { TagList } from "@/components/posts/tag-list";
import {
  PostsLoadingSkeleton,
  TagsLoadingSkeleton,
} from "@/components/skeletons";

export const revalidate = 86400; // 선택적: 24시간마다 재검증

export interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PostsPage = async () => {
  return (
    <>
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
      <aside className="hidden w-1/5 flex-col gap-4 md:flex"  aria-labelledby="tags-heading">
        <h2 className="text-xl font-bold">Tags</h2>
        <Suspense fallback={<TagsLoadingSkeleton />}>
          <TagList />
        </Suspense>
      </aside>
    </>
  );
};

export default PostsPage;
