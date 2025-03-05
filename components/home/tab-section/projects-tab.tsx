'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/home/project/project-card';
import { Project } from '@/types';

interface ProjectsTabProps {
  projects: Project[];
}

export const ProjectsTab = ({ projects }: ProjectsTabProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className='flex justify-center pt-4'>
        <a
          href='https://github.com/YEONDG'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'
        >
          모든 프로젝트 보기 →
        </a>
      </div>
    </motion.div>
  );
};
