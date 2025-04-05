import { getNotionPosts } from "@/lib/notion";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/lib/utils";

export const NotionPosts = async () => {
  const posts = await getNotionPosts();
  return (
    <>
      {posts.map((post) => (
        <li
          key={post.id}
          className="flex h-16 flex-col justify-start rounded-md border-2 px-2 py-1 transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <Link
              href={`/posts/${post.id}`}
              className="text-lg hover:underline"
            >
              {post.properties.제목.title[0]?.plain_text || "이름 없음"}
            </Link>
            <div className="text-sm text-gray-700">
              {formatDate(post.properties.생성일.created_time)}
            </div>
          </div>

          <div className="mt-1 hidden justify-end gap-1 md:flex">
            {post.properties.태그.multi_select.map((tag) => (
              <Link
                key={tag.name}
                href={`/posts?tag=${tag.name}`}
                className="rounded-md px-2 py-1 text-xs hover:bg-gray-100"
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
