import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, data } = getPostBySlug(params.slug);

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
