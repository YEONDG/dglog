import { DatabaseEntry } from '@/types/notion';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: DatabaseEntry;
  currentTag?: string;
}

export const PostCard = ({ post, currentTag }: PostCardProps) => {
  return (
    <li className='flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 py-1 px-2 rounded-md'>
      {/* 제목과 날짜 행 */}
      <div className='flex justify-between items-center'>
        <Link href={`/posts/${post.id}`} className='text-lg hover:underline'>
          {post.properties.제목.title[0]?.plain_text || '이름 없음'}
        </Link>
        <div className='text-sm text-gray-700'>{formatDate(post.properties.생성일.created_time)}</div>
      </div>

      {/* 태그 행 */}
      <div className='hidden md:flex gap-1 mt-1 justify-end'>
        {post.properties.태그.multi_select.map((tag) => (
          <Link
            key={tag.name}
            href={`/tags/${tag.name}`}
            className={`px-2 py-1 text-xs rounded-md hover:bg-gray-100 ${tag.name === currentTag ? 'bg-gray-200' : ''}`}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </li>
  );
};
