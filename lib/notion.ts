import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { MdBlock } from "notion-to-md/build/types";
import { cache } from "react";

// 설정 객체로 분리
const config = {
  notionApiKey: process.env.NOTION_API_KEY as string,
  databaseId: process.env.NOTION_DATABASE_ID as string,
  cacheRevalidate: 86400, // 24시간(하루)으로 설정,
};

// Notion 클라이언트 초기화
const notion = new Client({ auth: config.notionApiKey });
const n2m = new NotionToMarkdown({ notionClient: notion });

// 타입 정의
type DatabaseEntry = PageObjectResponse & {
  properties: {
    제목: { title: Array<{ plain_text: string }> };
    태그: { multi_select: Array<{ name: string }> };
    생성일: { created_time: string };
  };
};

type NotionPost = DatabaseEntry & {
  markdownContent: string;
};

type NotionQueryResult = DatabaseEntry[];

// 기본 데이터베이스 쿼리 함수
const queryDatabase = cache(
  async (options: { tag?: string } = {}): Promise<NotionQueryResult> => {
    try {
      console.log("🟢 Notion API 호출 발생!", options);
      const response = await notion.databases.query({
        database_id: config.databaseId,
        ...(options.tag && {
          filter: {
            property: "태그",
            multi_select: {
              contains: options.tag,
            },
          },
        }),
      });
      return response.results as NotionQueryResult;
    } catch (error) {
      console.error("Error querying Notion database:", error);
      throw new Error("Failed to fetch data from Notion");
    }
  },
);

/**
 * 노션 데이터베이스의 모든 포스트를 가져오는 함수
 */
export const getNotionPosts = unstable_cache(
  async () => {
    return queryDatabase();
  },
  ["notion_posts"],
  {
    revalidate: config.cacheRevalidate,
  },
);

/**
 * 특정 태그의 포스트를 가져오는 함수
 */
export const getNotionPostsByTag = unstable_cache(
  async (tag: string) => queryDatabase({ tag }),
  ["notion_posts_by_tag"],
  {
    revalidate: config.cacheRevalidate,
  },
);

/**
 * 노션 데이터베이스의 모든 태그를 가져오는 함수
 */
export const getNotionTags = unstable_cache(
  async () => {
    const posts = await queryDatabase();
    const tags = new Set<string>();

    posts.forEach((post) => {
      if ("properties" in post && "태그" in post.properties) {
        const postTags = post.properties.태그 as {
          multi_select: Array<{ name: string }>;
        };
        postTags.multi_select.forEach((tag) => tags.add(tag.name));
      }
    });

    return Array.from(tags);
  },
  ["notion_tags"],
  {
    revalidate: config.cacheRevalidate,
  },
);

/**
 * 특정 글(페이지)의 상세 정보를 가져오는 함수
 */
export const getPostById = cache(
  async (pageId: string): Promise<NotionPost | null> => {
    try {
      const page = (await notion.pages.retrieve({
        page_id: pageId,
      })) as DatabaseEntry;
      const mdblocks = await n2m.pageToMarkdown(pageId);
      const newMdBlocks = convertNotionS3ToProxyUrl(mdblocks);
      const markdownContent = n2m.toMarkdownString(newMdBlocks).parent;

      return { ...page, markdownContent };
    } catch (error) {
      console.error("Error fetching Notion post:", error);
      return null;
    }
  },
);

/**
 * 특정 포스트의 캐시를 무효화하는 함수
 */
export async function revalidatePost(pageId: string) {
  revalidateTag(`notion_post:${pageId}`);
  revalidateTag("notion_posts");
}

/**
 * Notion S3 URL을 Notion 웹사이트에서 제공하는 이미지 URL로 변환하는 함수
 */
const convertNotionS3ToProxyUrl = (mdblocks: MdBlock[]): MdBlock[] => {
  return mdblocks.map((block) => {
    if (block.type !== "image") return block;

    const { blockId, parent } = block;
    const baseUrl = parent.split("?")[0];
    const filename = baseUrl.split("/").pop();
    const [imgInfo, , , , imgUrl] = parent.split("/");

    const newImageUrl = `${imgInfo}//suave-robe-e2b.notion.site/image/attachment%3A${imgUrl}%3A${filename}?table=block&id=${blockId}&width=1060&userId=&cache=v2)`;

    return { ...block, parent: newImageUrl };
  });
};
