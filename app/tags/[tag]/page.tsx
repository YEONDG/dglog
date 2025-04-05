import { getNotionPostsByTag, getNotionTags } from "@/lib/notion";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const tags = await getNotionTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

const TagPage = async ({ params }: { params: Promise<{ tag: string }> }) => {
  const mainTag = decodeURIComponent((await params).tag);
  const posts = await getNotionPostsByTag(mainTag);

  return (
    <main className="mt-10 flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">태그: {mainTag}</h1>
        <Link href="/posts" className="text-sm text-blue-500 hover:underline">
          모든 포스트 보기
        </Link>
      </div>
      <ul className="w-full list-none space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col justify-center rounded-md px-2 py-1 transition-shadow duration-300 hover:shadow-lg"
          >
            {/* 제목과 날짜 행 */}
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

            {/* 태그 행 */}
            <div className="mt-1 hidden justify-end gap-1 md:flex">
              {post.properties.태그.multi_select.map((tag) => (
                <Link
                  key={tag.name}
                  href={`/tags/${tag.name}`}
                  className={`rounded-md px-2 py-1 text-xs hover:bg-gray-100 ${
                    tag.name === mainTag ? "bg-gray-200" : ""
                  }`}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const dynamic = "force-static";
export const revalidate = 86400; // 24시간마다 재검증
export default TagPage;
