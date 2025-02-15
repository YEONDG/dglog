import { visit } from 'unist-util-visit';

function convertNotionS3ToProxyUrl(s3Url: string): string {
  const regex = /https:\/\/prod-files-secure\.s3\.us-west-2\.amazonaws\.com\/([^/]+)\/([^/]+)\/([^?]+)/;
  const match = s3Url.match(regex);

  if (!match) return s3Url;

  const spaceId = match[1];
  const blockId = match[2];
  const filename = match[3];

  return `https://suave-robe-e2b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F${filename}?table=block&id=${blockId}&spaceId=${spaceId}&width=1060&userId=&cache=v2`;
}

/**
 * Remark 플러그인: Notion S3 이미지 URL을 영구적인 Notion Proxy URL로 변환
 */
function remarkReplaceNotionImages() {
  return () => {
    return (tree) => {
      visit(tree, 'image', (node) => {
        node.url = convertNotionS3ToProxyUrl(node.url);
      });
    };
  };
}

export default remarkReplaceNotionImages;
