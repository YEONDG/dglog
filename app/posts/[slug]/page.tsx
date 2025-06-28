import { Metadata } from "next";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import { formatDate } from "@/lib/utils";
import { getNotionPosts, getPostById } from "@/lib/notion";
import { ClientToc } from "@/components/posts/client-toc";
import { notFound } from "next/navigation";

export const revalidate = 86400; // 24시간마다 재검증

export async function generateStaticParams() {
  const posts = await getNotionPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const postId = (await params).slug;
  const post = await getPostById(postId);

  if (!post) {
    return {
      title: "게시글을 찾을 수 없습니다",
      description: "요청하신 게시글이 존재하지 않습니다.",
    };
  }

  const title = post.properties.제목.title[0]?.plain_text || "제목 없음";

  const description = post.markdownContent
    ? post.markdownContent.slice(0, 160).replace(/[#*`]/g, "") + "..."
    : "게시글 내용이 없습니다.";

  // 태그가 있다면 키워드로 사용
  const keywords =
    post.properties.태그?.multi_select.map((tag) => tag.name) || [];

  return {
    title: `${title} | Dglog`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Dglog`,
      description,
      type: "article",
      publishedTime: post.properties.생성일.date.start,
      authors: ["연동근"],
      tags: keywords,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://dglog.vercel.app/posts/${postId}`,
    },
  };
}

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const postId = (await params).slug;
  const currentPost = await getPostById(postId);

  if (!currentPost) {
    notFound();
  }
  const allPosts = await getNotionPosts();

  const titleProperty = currentPost.properties.제목;
  const title = titleProperty.title[0]?.plain_text || "제목 없음";
  const tags =
    currentPost.properties.태그?.multi_select.map((tag) => tag.name) || [];
  const markdownSource = currentPost.markdownContent;

  const recentPosts = allPosts.filter((p) => p.id !== postId).slice(0, 5);

  return (
    <div className="flex min-h-screen w-full">
      {/* 최신글 목록 */}
      <aside className="sticky top-20 hidden h-screen w-1/5 min-w-[200px] max-w-[280px] flex-col items-start justify-start overflow-y-auto border-r border-gray-200 px-4 py-6 dark:border-gray-700 lg:flex">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          최신 글
        </h2>
        {recentPosts.length > 0 ? (
          <ul className="w-full space-y-3">
            {recentPosts.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/posts/${p.id}`}
                  className="line-clamp-2 block text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                  title={p.properties.제목.title[0]?.plain_text || "제목 없음"}
                >
                  {p.properties.제목.title[0]?.plain_text || "제목 없음"}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            최신 글이 없습니다.
          </p>
        )}
      </aside>

      {/* 게시글 내용 - 중앙 정렬 */}
      <main className="flex min-w-0 flex-1 justify-center">
        <article className="w-full max-w-4xl px-6 py-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: title,
                datePublished: currentPost.properties.생성일.date.start,
                author: {
                  "@type": "Person",
                  name: "연동근",
                },
                keywords: tags.join(", "),
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://dglog.vercel.app/posts/${postId}`,
                },
              }),
            }}
          />
          <div className="prose mx-auto max-w-none dark:prose-invert lg:prose-lg">
            <header className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold dark:text-white">
                {title}
              </h1>
              <p className="text-lg text-gray-500">
                {formatDate(currentPost.properties.생성일.date.start)}
              </p>
              {/* 태그 표시 */}
              {tags.length > 0 && (
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="rounded-md bg-gray-100 px-3 py-1 text-sm transition-colors hover:bg-gray-200 dark:text-black"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </header>

            {/* Markdown 렌더링 */}
            <div className="mt-12">
              <MDXRemote
                source={markdownSource}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </div>
        </article>
      </main>

      {/* 목차 */}
      <aside
        className="sticky top-20 hidden h-screen w-1/5 min-w-[180px] max-w-[260px] flex-col justify-start gap-4 overflow-y-auto border-l px-4 py-6 lg:flex"
        aria-labelledby="toc-heading"
      >
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          목차
        </h2>
        <ClientToc />
      </aside>
    </div>
  );
};

export default BlogPostPage;
