import { motion } from 'framer-motion';

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className='space-y-8'>
      {projects.map((project, index) => (
        <div key={index} className='bg-gray-50 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold text-gray-800 mb-3'>{project.title}</h3>
          <p className='text-gray-600 mb-4'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                {tech}
              </span>
            ))}
          </div>
          <div className='space-y-2 mb-4'>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className='flex items-center'>
                <div className='w-2 h-2 rounded-full bg-blue-500 mr-2'></div>
                <span className='text-gray-700'>{highlight}</span>
              </div>
            ))}
          </div>
          <div className='flex space-x-4'>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800'
            >
              GitHub →
            </a>
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800'
            >
              Live Demo →
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
