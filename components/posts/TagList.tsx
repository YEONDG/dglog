import { getNotionTags } from '@/lib/notion';
import Link from 'next/link';

export const TagList = async () => {
  const tags = await getNotionTags();
  return (
    <div className='hidden md:flex flex-col gap-4 w-full'>
      <ul className='flex flex-wrap gap-2 w-full'>
        {tags.map((tagName) => (
          <li key={tagName}>
            <Link
              href={`/tags/${tagName}`}
              className={`px-2 py-1 text-xs rounded-md hover:bg-gray-100 
              `}
            >
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
