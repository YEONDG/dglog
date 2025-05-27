import { Modal } from "@/components/modal";
import { projectComponentMap } from "@/components/projects";

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
  const slug = (await params).slug;
  const ProjectComponent = projectComponentMap[slug];
  return (
    <Modal>
      <ProjectComponent />
    </Modal>
  );
};

export default ProjectPage;
