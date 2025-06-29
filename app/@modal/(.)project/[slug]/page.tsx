import { Modal } from "@/components/modal";
import { ComponentType } from "react";

import CuteChatting from "@/components/projects/cutechatting";
import Dglog from "@/components/projects/dglog";
import Pokemon from "@/components/projects/pokemon-book";
import ImageConversionApp from "@/components/projects/image-conversion-app";
import { TProjects } from "@/types";

export function generateStaticParams() {
  const slugs = ["dglog", "cutechatting", "pokemon", "image-conversion-app"];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const projectComponentMap: Record<string, ComponentType> = {
  dglog: Dglog,
  cutechatting: CuteChatting,
  pokemon: Pokemon,
  "image-conversion-app": ImageConversionApp,
};

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: TProjects }>;
}) => {
  const slug = (await params).slug;
  const ProjectComponent = projectComponentMap[slug];
  return (
    <Modal>
      <ProjectComponent />
    </Modal>
  );
};

export default ProjectPage;
