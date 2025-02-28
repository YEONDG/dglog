import { Suspense } from 'react';

import { NotionPosts } from '@/components/posts/notion-posts';
import { PostsLoadingSkeleton, TagsLoadingSkeleton } from '@/components/ui/loading-skeletons';
import { TagList } from '@/components/posts/TagList';

export interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PostsPage = async () => {
  return (
    <main className='flex w-full gap-4 mt-10'>
      {/* 게시물 리스트 */}
      <div className='flex grow flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Posts</h1>
        </div>
        <Suspense fallback={<PostsLoadingSkeleton />}>
          <NotionPosts />
        </Suspense>
      </div>
      {/* 태그 리스트 */}
      <div className='hidden md:flex w-1/5 flex-col gap-4'>
        <h2 className='text-xl font-bold'>Tags</h2>
        <Suspense fallback={<TagsLoadingSkeleton />}>
          <TagList />
        </Suspense>
      </div>
    </main>
  );
};

export const dynamic = 'force-static';
export const revalidate = 86400; // 선택적: 24시간마다 재검증

export default PostsPage;
