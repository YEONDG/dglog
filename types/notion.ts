import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type DatabaseEntry = PageObjectResponse & {
  properties: {
    제목: { title: Array<{ plain_text: string }> };
    태그: { multi_select: Array<{ name: string }> };
    생성일: { created_time: string };
  };
};

export type NotionPost = DatabaseEntry & {
  markdownContent: string;
};
