import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { unstable_cache } from 'next/cache';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * 노션 데이터베이스의 모든 데이터를 가져오는 함수
 *
 */
export const getNotionPosts = unstable_cache(
  async () => {
    console.log('🟢 Notion API 호출 발생!'); // 캐시가 동작 중이라면 자주 찍히지 않습니다.

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });

    return response.results;
  },
  ['notion_posts'],
  { revalidate: 10800 }
);

/**
 * 노션 데이터베이스의 모든 데이터를 가져오는 함수
 *
 */
export const getNotionTags = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  return response.results;
};

/**
 * 특정 글(페이지)의 상세 정보를 가져오는 함수
 * @param pageId - Notion 페이지 ID
 */
export async function getPostById(pageId: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const markdownContent = n2m.toMarkdownString(mdblocks).parent;
    return { page, markdownContent };
  } catch (error) {
    console.error('Error fetching Notion post:', error);
    return null;
  }
}
