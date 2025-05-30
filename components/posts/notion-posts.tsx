import Link from "next/link";

import { getNotionPosts } from "@/lib/notion";
import { formatDate } from "@/lib/utils";

export const NotionPosts = async () => {
  const posts = await getNotionPosts();

  if (posts.length === 0) {
    return (
      <p className="py-4 text-center text-gray-500">
        작성된 포스트가 없습니다.
      </p>
    );
  }

  return (
    <ul className="list-none space-y-4">
      {posts.map((post) => {
        const dateValue =
          post.properties["생성일"]?.date?.start || post.created_time;

        return (
          <li
            key={post.id}
            className="flex h-16 flex-col justify-start rounded-md px-2 py-1 ring-2 transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2>
                <Link
                  href={`/posts/${post.id}`}
                  className="p-5 text-lg hover:underline"
                >
                  {post.properties.제목.title[0]?.plain_text || "이름 없음"}
                </Link>
              </h2>
              {dateValue && (
                <time dateTime={dateValue} className="text-sm text-gray-700">
                  {formatDate(dateValue)}
                </time>
              )}
            </div>

            <div className="mt-1 hidden justify-end gap-1 md:flex">
              {post.properties.태그.multi_select.map((tag) => (
                <Link
                  key={tag.name}
                  href={`/tags/${tag.name}`}
                  className="rounded-md px-2 py-1 text-xs hover:bg-gray-100"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
