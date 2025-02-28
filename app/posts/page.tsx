import Link from 'next/link';
import { getNotionTags } from '@/lib/notion';
import { NotionPosts } from '@/components/posts/notion-posts';

export interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PostsPage = async () => {
  const tags = await getNotionTags();

  return (
    <main className='flex w-full gap-4 mt-10'>
      {/* 게시물 리스트 */}
      <div className='flex grow flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Posts</h1>
        </div>
        <ul className='list-none w-full space-y-2'>
          <NotionPosts />
        </ul>
      </div>
      {/* 태그 리스트 */}
      <div className='hidden md:flex w-1/5 flex-col gap-4'>
        <h2 className='text-xl font-bold'>Tags</h2>
        <ul className='flex flex-wrap gap-2'>
          {tags.map((tagName) => (
            <li key={tagName}>
              <Link href={`/tags/${tagName}`} className='px-2 py-1 text-xs rounded-md hover:bg-gray-100'>
                {tagName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export const dynamic = 'force-static';
export const revalidate = 86400; // 선택적: 24시간마다 재검증

export default PostsPage;
