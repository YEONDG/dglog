import { getNotionPosts, getPostById } from '@/lib/notion';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Dglog',
    description: '프론트엔드 개발자 연동근의 블로그입니다.',
    site_url: 'https://dglog.vercel.app',
    feed_url: 'https://dglog.vercel.app/feed.xml',
    language: 'ko',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, 연동근`,
  });

  const posts = await getNotionPosts();

  for (const post of posts) {
    const fullPost = await getPostById(post.id);
    if (!fullPost) continue;

    feed.item({
      title: post.properties.제목.title[0]?.plain_text || '제목 없음',
      url: `https://dglog.vercel.app/posts/${post.id}`,
      date: post.created_time,
      description: fullPost.markdownContent?.slice(0, 160) || '내용 없음',
      categories: post.properties.태그?.multi_select.map((tag) => tag.name) || [],
      author: '연동근',
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
