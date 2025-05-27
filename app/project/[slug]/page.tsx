import { projectComponentMap } from "@/components/projects";
import React from "react";
import type { Metadata } from "next";
import { projectsMetadata } from "@/data/project-metadata";

type TProjects = "dglog" | "cutechatting" | "pokemon" | "image-conversion-app";

export function generateStaticParams() {
  const slugs = ["dglog", "cutechatting", "pokemon", "image-conversion-app"];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  // Ensure the slug is one of the expected project slugs to leverage projectsMetadata typing
  const projectKey = slug as keyof typeof projectsMetadata;
  const project = projectsMetadata[projectKey];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  const pageTitle = `${project.title} | Project`;
  const pageDescription = project.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: project.keywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      // images are handled by app/project/[slug]/opengraph-image.tsx
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      // images are handled by app/project/[slug]/opengraph-image.tsx
    },
    alternates: {
      canonical: `https://dglog.vercel.app/project/${slug}`,
    },
  };
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: TProjects }>;
}) => {
  const slug = (await params).slug;
  const ProjectComponent = projectComponentMap[slug];
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl">
      <ProjectComponent />
    </div>
  );
};

export default ProjectPage;
