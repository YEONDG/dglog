"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex h-full flex-col overflow-hidden">
        <CardContent className="flex flex-grow flex-col p-6">
          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
          <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          {project.highlights && (
            <div className="mb-4 space-y-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-white">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="group flex flex-1 items-center justify-center gap-2"
              asChild
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </Button>
            {project.demo && project.demo !== "" && (
              <Button
                variant="outline"
                size="sm"
                className="group flex flex-1 items-center justify-center gap-2"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                  <ExternalLink
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
