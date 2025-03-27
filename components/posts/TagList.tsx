import { getNotionTags } from "@/lib/notion";
import Link from "next/link";

export const TagList = async () => {
  const tags = await getNotionTags();
  return (
    <div className="hidden w-full flex-col gap-4 md:flex">
      <ul className="flex w-full flex-wrap gap-2">
        {tags.map((tagName) => (
          <li key={tagName}>
            <Link
              href={`/tags/${tagName}`}
              className={`rounded-md px-2 py-1 text-xs hover:bg-gray-100`}
            >
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
