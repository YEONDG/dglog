import { Metadata } from "next";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { formatDate } from "@/lib/utils";
import { getNotionPosts, getPostById } from "@/lib/notion";

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
  // 내용의 처음 160자를 설명으로 사용 (또는 별도 description 필드가 있다면 그것 사용)
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
      publishedTime: post.created_time,
      modifiedTime: post.last_edited_time,
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
  const post = await getPostById(postId);

  if (!post) {
    return (
      <p className="text-center text-red-500">
        해당 게시글을 찾을 수 없습니다.
      </p>
    );
  }

  console.log(post);

  const titleProperty = post.properties.제목;
  const title = titleProperty.title[0]?.plain_text || "제목 없음";

  const tags = post.properties.태그?.multi_select.map((tag) => tag.name) || [];

  return (
    <article className="mx-auto flex w-full justify-center">
      {/* 최신글 목록*/}
      <aside
        className="sticky top-20 hidden h-screen w-1/5 flex-col justify-center gap-4 overflow-y-auto bg-red-200 lg:flex"
        aria-labelledby="latest-posts-heading"
      >
        <h2 id="latest-posts-heading" className="sr-only">
          최신글
        </h2>
        안녕하십니까?
        {/* 최신글 목록 */}
      </aside>
      {/* 게시글 내용 */}
      <section className="prose max-w-none border-x-2 px-6 dark:prose-invert">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: title,
              datePublished: post.created_time,
              dateModified: post.last_edited_time,
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
        <header>
          <h1 className="text-3xl font-bold dark:text-white">{title}</h1>
          <p className="text-gray-500">{formatDate(post.created_time)}</p>
          {/* 태그 표시 */}
          {tags.length > 0 && (
            <div className="my-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="rounded-md bg-gray-100 px-2 py-1 text-sm hover:bg-gray-200 dark:text-black"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Markdown 렌더링 */}
        <MDXRemote
          source={post.markdownContent}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </section>

      {/* 목차 */}
      <aside
        className="sticky top-20 hidden h-screen w-1/5 flex-col justify-center gap-4 overflow-y-auto lg:flex"
        aria-labelledby="toc-heading"
      >
        <h2 id="toc-heading" className="sr-only">
          목차
        </h2>
        <div>이부분은 목차입니다 반갑습니다</div>
        {/* 목차 내용 */}
      </aside>
    </article>
  );
};

export default BlogPostPage;
