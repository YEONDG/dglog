import { getNotionPosts } from '@/lib/notion';
import Link from 'next/link';
import React from 'react';
import { formatDate } from '@/lib/utils';

export const NotionPosts = async () => {
  const posts = await getNotionPosts();
  return (
    <>
      {posts.map((post) => (
        <li
          key={post.id}
          className='flex flex-col justify-start border-2 hover:shadow-lg transition-shadow duration-300 py-1 px-2 rounded-md h-16'
        >
          <div className='flex justify-between items-center'>
            <Link href={`/posts/${post.id}`} className='text-lg hover:underline'>
              {post.properties.제목.title[0]?.plain_text || '이름 없음'}
            </Link>
            <div className='text-sm text-gray-700'>{formatDate(post.properties.생성일.created_time)}</div>
          </div>

          <div className='hidden md:flex gap-1 mt-1 justify-end'>
            {post.properties.태그.multi_select.map((tag) => (
              <Link
                key={tag.name}
                href={`/posts?tag=${tag.name}`}
                className='px-2 py-1 text-xs rounded-md hover:bg-gray-100'
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </>
  );
};
