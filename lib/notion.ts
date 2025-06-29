import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";
import { MdBlock } from "notion-to-md/build/types";
import { cache } from "react";
import { TDatabaseEntry, TNotionPost, TNotionQueryResult } from "@/types";

// 설정 객체로 분리
const config = {
  notionApiKey: process.env.NOTION_API_KEY as string,
  databaseId: process.env.NOTION_DATABASE_ID as string,
  cacheRevalidate: 86400, // 24시간(하루)으로 설정,
};

// Notion 클라이언트 초기화
const notion = new Client({ auth: config.notionApiKey });
const n2m = new NotionToMarkdown({ notionClient: notion });

// 한글을 안전한 ASCII 문자열로 변환하는 함수
const sanitizeTagForCache = (tag: string): string => {
  return encodeURIComponent(tag);
};

const queryAllPosts = cache(async (): Promise<TNotionQueryResult> => {
  try {
    console.log("🟢 전체 포스트 Notion API 호출!");
    const response = await notion.databases.query({
      database_id: config.databaseId,
    });
    return response.results as TNotionQueryResult;
  } catch (error) {
    console.error("Error querying all posts:", error);
    throw new Error("Failed to fetch all posts from Notion");
  }
});

// 특정 태그의 포스트를 가져오는 함수 (태그별로 별도 캐시)
const queryPostsByTag = cache(
  async (tag: string): Promise<TNotionQueryResult> => {
    try {
      console.log(`🟢 태그(${tag}) 포스트 Notion API 호출!`);
      const response = await notion.databases.query({
        database_id: config.databaseId,
        filter: {
          property: "태그",
          multi_select: {
            contains: tag,
          },
        },
      });
      return response.results as TNotionQueryResult;
    } catch (error) {
      console.error(`Error querying posts by tag ${tag}:`, error);
      throw new Error(`Failed to fetch posts with tag ${tag} from Notion`);
    }
  },
);

/**
 * 노션 데이터베이스의 모든 포스트를 가져오는 함수
 */
export const getNotionPosts = unstable_cache(
  async () => {
    return queryAllPosts();
  },
  ["notion_posts"],
  {
    revalidate: config.cacheRevalidate,
  },
);

/**
 * 특정 태그의 포스트를 가져오는 함수
 * 각 태그별로 별도의 캐시 키를 가지도록 수정
 */
export const getNotionPostsByTag = (tag: string) => {
  const safeTag = sanitizeTagForCache(tag);
  return unstable_cache(
    async () => queryPostsByTag(tag),
    [`notion_posts_by_tag_${safeTag}`],
    {
      revalidate: config.cacheRevalidate,
      tags: ["notion_posts", `notion_posts_tag_${safeTag}`],
    },
  )();
};

/**
 * 노션 데이터베이스의 모든 태그를 가져오는 함수
 */
export const getNotionTags = unstable_cache(
  async () => {
    const posts = await queryAllPosts();
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
    tags: ["notion_tags", "notion_posts"], // notion_posts 변경 시 함께 무효화
  },
);

/**
 * 특정 글(페이지)의 상세 정보를 가져오는 함수
 */
export const getPostById = (pageId: string) => {
  return unstable_cache(
    async (): Promise<TNotionPost | null> => {
      try {
        console.log(`🟢 포스트(${pageId}) 상세 정보 API 호출!`);
        const page = (await notion.pages.retrieve({
          page_id: pageId,
        })) as TDatabaseEntry;
        const mdblocks = await n2m.pageToMarkdown(pageId);
        const newMdBlocks = convertNotionS3ToProxyUrl(mdblocks);
        const markdownContent = n2m.toMarkdownString(newMdBlocks).parent;

        return { ...page, markdownContent };
      } catch (error) {
        console.error("Error fetching Notion post:", error);
        return null;
      }
    },
    [`notion_post_${pageId}`],
    {
      revalidate: config.cacheRevalidate,
      tags: [`notion_post_${pageId}`, "notion_posts"],
    },
  )();
};

/**
 * 모든 Notion 관련 캐시를 무효화하는 함수
 */
export async function revalidateAllNotionCache() {
  revalidateTag("notion_posts");
  revalidateTag("notion_tags");
  revalidateTag("notion_posts_by_tag");
}

/**
 * 특정 포스트의 캐시를 무효화하는 함수
 */
export async function revalidatePost(pageId: string) {
  revalidateTag(`notion_post:${pageId}`);
  revalidateTag("notion_posts");
  revalidateTag("notion_tags"); // 태그 목록도 함께 무효화
}

/**
 * 특정 태그의 캐시를 무효화하는 함수
 */
export async function revalidateTagCache(tag: string) {
  const safeTag = sanitizeTagForCache(tag);
  revalidateTag(`notion_posts_tag_${safeTag}`);
  revalidateTag("notion_posts"); // 전체 목록도 함께 무효화
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
