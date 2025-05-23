import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type TDatabaseEntry = PageObjectResponse & {
  properties: {
    제목: { title: Array<{ plain_text: string }> };
    태그: { multi_select: Array<{ name: string }> };
    생성일: { date: { start: string }; id: string; type: string };
  };
};

export type TNotionPost = TDatabaseEntry & {
  markdownContent: string;
};

export type TNotionQueryResult = TDatabaseEntry[];

export interface INotionTag {
  name: string;
  color?: string;
}
