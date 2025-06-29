import { ImageResponse } from "next/og";
import { getPostById } from "@/lib/notion";

export const alt = "Blog Post Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const postId = params.slug;
  const post = await getPostById(postId);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "black",
            color: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Post Not Found
        </div>
      ),
      {
        ...size,
      },
    );
  }

  const title = post.properties.제목.title[0]?.plain_text || "Untitled Post";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "40px",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          border: "20px solid #f0f0f0",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: 1.2,
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#555",
            textAlign: "center",
          }}
        >
          Dglog - 연동근 기술 블로그
        </div>
      </div>
    ),
    {
      ...size,
      // You might need to configure fonts if you use custom fonts not available by default
      // fonts: [
      //   {
      //     name: 'YourCustomFont',
      //     data: await fetch(new URL('/path/to/your-font.woff2', import.meta.url)).then(res => res.arrayBuffer()),
      //     style: 'normal',
      //     weight: 400,
      //   }
      // ]
    },
  );
}
