import { projectComponentMap } from "@/components/projects";
import React from "react";

type TProjects = "dglog" | "cutechatting" | "pokemon" | "image-conversion-app";

export function generateStaticParams() {
  const slugs = ["dglog", "cutechatting", "pokemon", "image-conversion-app"];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: TProjects }>;
}) => {
  const { slug } = await params;
  const ProjectComponent = projectComponentMap[slug];
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl">
      <ProjectComponent />
    </div>
  );
};

export default ProjectPage;
