import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  children: ReactNode;
  className?: string;
}

export const ProjectCard = ({ children, className }: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "space-y-5 rounded-3xl border-2 p-2 shadow-lg md:p-8",
        className,
      )}
    >
      {children}
    </article>
  );
};
