import { getNotionPosts, getNotionTags } from "@/lib/notion";
import { MetadataRoute } from "next";
import { projectsMetadata } from "@/data/project-metadata"; // Added import

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 블로그 포스트 가져오기
  const posts = await getNotionPosts();
  const postEntries = posts.map((post) => ({
    url: `https://dglog.vercel.app/posts/${post.id}`,
    lastModified: post.last_edited_time,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 태그 페이지 가져오기
  const tags = await getNotionTags();
  const tagEntries = tags.map((tag) => ({
    url: `https://dglog.vercel.app/tags/${tag}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // 프로젝트 페이지 가져오기 - Added section
  const projectSlugs = Object.keys(projectsMetadata);
  const projectEntries = projectSlugs.map((slug) => ({
    url: `https://dglog.vercel.app/project/${slug}`,
    lastModified: new Date().toISOString(), // Assuming projects are updated less frequently
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 정적 페이지
  const staticPages = [
    {
      url: "https://dglog.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://dglog.vercel.app/posts",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://dglog.vercel.app/projects", // Added main projects page
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const, 
      priority: 0.8, 
    },
    {
      url: "https://dglog.vercel.app/guestbook",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...postEntries, ...tagEntries, ...projectEntries]; // Added projectEntries
}
