import Link from 'next/link';
import { getNotionPosts } from '@/lib/notion';

export default async function PostsPage() {
  const data = await getNotionPosts();

  const tags = Array.from(
    new Set(
      data.flatMap((post) =>
        // @ts-expect-error: post.properties.태그.multi_select에 대한 타입 에러 무시
        post.properties.태그.multi_select.map((tag: any) => tag.name)
      )
    )
  );

  return (
    <main className='flex w-full gap-4 mt-10'>
      {/* 게시물 리스트 */}
      <div className='flex grow flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Posts</h1>
        <ul className='list-none w-full space-y-2'>
          {data.map((post) => (
            <li
              key={post.id}
              className='flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 py-1 px-2 rounded-md'
            >
              <Link href={`/posts/${post.id}`} className='flex justify-between items-center'>
                <div className='text-lg'>
                  {/* @ts-expect-error: post.properties.이름에 대한 타입 에러 무시 */}
                  {post.properties.제목.title[0]?.plain_text || '이름 없음'}
                </div>
                <div className='hidden md:flex gap-1'>
                  {/* @ts-expect-error: post.properties.이름에 대한 타입 에러 무시 */}
                  {post.properties.태그.multi_select.map((tag: any) => (
                    <div key={tag.name} className='px-2 py-1 text-xs '>
                      {tag.name}
                    </div>
                  ))}
                </div>
                <div className='text-sm text-gray-700'>
                  {/* @ts-expect-error: post.properties.이름에 대한 타입 에러 무시 */}
                  {new Date(post.properties.생성일.created_time).toLocaleDateString()}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* 태그 리스트 */}
      <div className='hidden md:flex w-1/5 flex-col gap-4 '>
        <h2 className='text-xl font-bold'>Tags</h2>
        <ul className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <li key={tag} className='px-2 py-1 text-xs'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
