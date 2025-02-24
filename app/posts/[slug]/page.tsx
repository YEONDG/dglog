import { getPostById } from '@/lib/notion';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const postId = (await params).slug;
  const post = await getPostById(postId);

  if (!post) {
    return <p className='text-center text-red-500'>해당 게시글을 찾을 수 없습니다.</p>;
  }

  const { page, markdownContent } = post;
  console.log(page);

  const titleProperty = page?.properties?.제목;
  const title = titleProperty?.type === 'title' ? titleProperty.title[0]?.plain_text || '제목 없음' : '제목 없음';

  return (
    <article className='prose mx-auto'>
      <h1 className='text-3xl font-bold'>{title || '제목 없음'}</h1>
      <p className='text-gray-500'>{new Date(page?.created_time).toLocaleDateString()}</p>

      {/* Markdown 렌더링 */}
      <div className='prose max-w-none'>
        <MDXRemote
          source={markdownContent}
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

export default BlogPostPage;
