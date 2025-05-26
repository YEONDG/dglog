import Link from "next/link";

import { getNotionPostsByTag, getNotionTags } from "@/lib/notion";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-static";
export const revalidate = 86400; // 24시간마다 재검증

export async function generateStaticParams() {
  const tags = await getNotionTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const tag = decodeURIComponent((await params).tag);

  return {
    title: `${tag} 관련 포스트 | Dglog`,
    description: `${tag} 태그와 관련된 모든 포스트입니다.`,
    openGraph: {
      title: `${tag} 관련 포스트 | Dglog`,
      description: `${tag} 태그와 관련된 모든 포스트입니다.`,
    },
  };
}

const TagPage = async ({ params }: { params: Promise<{ tag: string }> }) => {
  const tag = decodeURIComponent((await params).tag);
  const posts = await getNotionPostsByTag(tag);

  if (posts.length === 0) {
    return (
      <section className="mt-10 flex w-full flex-col gap-4">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">태그: {tag}</h1>
          <Link href="/posts" className="text-sm text-blue-500 hover:underline">
            모든 포스트 보기
          </Link>
        </header>
        <p className="py-4 text-center text-gray-500">
          이 태그와 관련된 포스트가 없습니다.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-10 flex min-h-screen w-full max-w-5xl flex-col gap-4 px-4">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">태그: {tag}</h2>
        <Link href="/posts" className="text-sm text-blue-500 hover:underline">
          모든 포스트 보기
        </Link>
      </header>
      <ul className="w-full space-y-2">
        {posts.map((post) => {
          const dateValue =
            post.properties["생성일"]?.date?.start || post.created_time;
          return (
            <li
              key={post.id}
              className="flex flex-col justify-center rounded-md px-2 py-1 ring-2 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* 제목과 날짜 행 */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  <Link
                    href={`/posts/${post.id}`}
                    className="hover:text-blue-600 hover:underline"
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

              {/* 태그 행 */}
              <div className="mt-1 hidden justify-end gap-1 md:flex">
                {post.properties.태그.multi_select.map((postTag) => (
                  <Link
                    key={postTag.name}
                    href={`/tags/${postTag.name}`}
                    className={`rounded-md px-2 py-1 text-xs hover:bg-gray-100 ${
                      postTag.name === tag ? "bg-gray-200" : ""
                    }`}
                  >
                    {postTag.name}
                  </Link>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TagPage;
