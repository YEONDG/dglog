import { getNotionData } from '@/lib/notion';
import Link from 'next/link';
import React from 'react';

export default async function PostsPage() {
  const data = await getNotionData();

  return (
    <main className='flex w-full gap-4'>
      {/* 게시물 리스트 */}
      <ul className='list-none w-full space-y-4'>
        {data.map((post) => (
          <li
            key={post.id}
            className='flex flex-col justify-center border-2 border-black rounded-lg p-2 px-4'
          >
            <Link href={`/posts/${post.id}`} className='block'>
              <strong>제목:</strong>{' '}
              {post.properties.이름.title[0]?.plain_text || '이름 없음'}
              <br />
              <strong>태그:</strong>{' '}
              {post.properties.태그.multi_select
                .map((tag: any) => tag.name)
                .join(', ')}
              <br />
              <strong>생성일:</strong>{' '}
              {new Date(
                post.properties.생성일.created_time
              ).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>

      {/* 사이드바 (sm 이하에서 숨김) */}
      <div className='hidden sm:block sm:w-1/5 bg-gray-100 p-4 rounded-lg shadow-md'>
        안녕하세요
      </div>
    </main>
  );
}
