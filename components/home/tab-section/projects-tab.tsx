'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
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

      <div className='flex justify-center mt-8'>
        <Button asChild>
          <a href='/about'>
            모든 프로젝트 보기
            <ChevronRight size={16} />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
