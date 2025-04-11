import Link from "next/link";

import { getNotionTags } from "@/lib/notion";

export const TagList = async () => {
  const tags = await getNotionTags();

  if (tags.length === 0) {
    return <p className="text-gray-500 text-sm">등록된 태그가 없습니다.</p>
  }

  return (
    <ul className="flex w-full flex-wrap gap-2">
        {tags.map((tagName) => (
          <li key={tagName}>
            <Link
              href={`/tags/${tagName}`}
              className={`rounded-md bg-gray-50 px-2 py-1 text-xs transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
  );
};
