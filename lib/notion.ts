import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { unstable_cache } from 'next/cache';
import { QueryDatabaseResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * 노션 데이터베이스의 모든 데이터를 가져오는 함수
 *
 */
export const getNotionPosts = unstable_cache(
  async (): Promise<QueryDatabaseResponse['results']> => {
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
export const getNotionTags = unstable_cache(
  async (): Promise<QueryDatabaseResponse['results']> => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });

    return response.results;
  },
  ['notion_tags'],
  { revalidate: 10800 }
);

/**
 * 특정 글(페이지)의 상세 정보를 가져오는 함수
 * @param pageId - Notion 페이지 ID
 */
export const getPostById = unstable_cache(
  async (pageId: string): Promise<{ page: PageObjectResponse; markdownContent: string } | null> => {
    try {
      const page = (await notion.pages.retrieve({ page_id: pageId })) as PageObjectResponse;

      const blocks = await notion.blocks.children.list({ block_id: pageId });

      console.log(blocks, '블록정보');

      console.log(page, '정보주란');

      const mdblocks = await n2m.pageToMarkdown(pageId);
      console.log(mdblocks, '마크다운블록');
      const markdownContent = n2m.toMarkdownString(mdblocks).parent;
      return { page, markdownContent };
    } catch (error) {
      console.error('Error fetching Notion post:', error);
      return null;
    }
  }
);

const convertNotionS3ToProxyUrl = (mdblocks) => {
  const newBlocks = mdblocks.map((block) => {
    if (block.type === 'image') {
      const { id, image } = block;
      const url = image
        ? `https://squary.notion.site/image/${encodeURIComponent(image.file.url)}?table=block&id=${id}&cache=v2`
        : ``;
    }
  });
};
