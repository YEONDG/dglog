import { getPostById } from '@/lib/notion';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const postId = (await params).slug;
  const { page, markdownContent } = await getPostById(postId);

  return (
    <article className='prose mx-auto'>
      <h1 className='text-3xl font-bold'>{page?.properties.제목.title[0]?.plain_text || '제목 없음'}</h1>
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
}
