import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Project } from "../projects-section";
import { STACK_ICONS } from "@/components/icons";

interface HomeProjectCardProps {
  project: Project;
}

export const HomeProjectCard = ({ project }: HomeProjectCardProps) => {
  return (
    <Link
      scroll={false}
      href={project.link}
      className={`group relative flex h-96 w-60 flex-col justify-center shadow-lg transition-transform ${project.bgColor} ${project.hoverBgColor}`}
    >
      <div className="space-y-4 px-4">
        <h2 className="py-10 text-2xl font-semibold text-gray-900 backdrop-blur-xl dark:text-white">
          {project.title}
        </h2>
        <p>{project.description}</p>
        <div>
          <h3>기술스택</h3>
          <div className="flex">
            <TooltipProvider>
              {project.stacks?.map((stack) => {
                const IconComponent = STACK_ICONS[stack];

                return IconComponent ? (
                  <Tooltip key={stack}>
                    <TooltipTrigger asChild>
                      <IconComponent className="z-10 h-8 w-8 p-1 text-gray-700 dark:text-gray-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{stack}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : null;
              })}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Link>
  );
};
