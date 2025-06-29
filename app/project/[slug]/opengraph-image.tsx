import { ImageResponse } from "next/og";
import { projectsMetadata } from "@/data/project-metadata";
export const alt = "Project Preview Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const slug = params.slug as keyof typeof projectsMetadata;
  const project = projectsMetadata[slug];

  if (!project) {
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
          Project Not Found
        </div>
      ),
      {
        ...size,
      },
    );
  }

  const title = project.title || "Untitled Project";

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
          backgroundColor: "#222", // Darker background for projects
          color: "white",
          padding: "40px",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          border: "20px solid #444", // Border color adjusted for darker theme
        }}
      >
        <div
          style={{
            fontSize: 72, // Larger font size for project titles
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
            lineHeight: 1.1,
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32, // Sub-heading for "Project"
            color: "#ccc",
            textAlign: "center",
          }}
        >
          Project Showcase | Dglog
        </div>
      </div>
    ),
    {
      ...size,
      // Font configuration might be needed if custom fonts are used
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
