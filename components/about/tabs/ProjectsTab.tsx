import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github: string;
  demo: string;
}

interface ProjectsTabProps {
  projects: Project[];
}

export const ProjectsTab = ({ projects }: ProjectsTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <p className="mb-4">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mb-4 space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-white">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub →
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};
