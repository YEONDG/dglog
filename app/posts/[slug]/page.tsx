import { getNotionPosts, getPostById } from '@/lib/notion';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getNotionPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const postId = (await params).slug;
  const post = await getPostById(postId);

  if (!post) {
    return <p className='text-center text-red-500'>해당 게시글을 찾을 수 없습니다.</p>;
  }

  const titleProperty = post.properties.제목;
  const title = titleProperty.title[0]?.plain_text || '제목 없음';

  return (
    <article className='prose mx-auto'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-gray-500'>{formatDate(post.created_time)}</p>

      {/* Markdown 렌더링 */}
      <div className='prose max-w-none'>
        <MDXRemote
          source={post.markdownContent}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm], // 테이블, 체크박스 등 지원
              rehypePlugins: [rehypeHighlight], // 코드 하이라이팅
            },
          }}
        />
      </div>
    </article>
  );
};

export const dynamic = 'force-static';
export const revalidate = 86400; // 선택적: 24시간마다 재검증

export default BlogPostPage;
