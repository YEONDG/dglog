import Link from 'next/link';

interface TagListProps {
  tags: string[];
  currentTag?: string;
}

export const TagList = ({ tags, currentTag }: TagListProps) => {
  return (
    <div className='hidden md:flex w-1/5 flex-col gap-4'>
      <h2 className='text-xl font-bold'>Tags</h2>
      <ul className='flex flex-wrap gap-2'>
        {tags.map((tagName) => (
          <li key={tagName}>
            <Link
              href={`/tags/${tagName}`}
              className={`px-2 py-1 text-xs rounded-md hover:bg-gray-100 ${
                tagName === currentTag ? 'bg-gray-200' : ''
              }`}
            >
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
