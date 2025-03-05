'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className='h-full overflow-hidden flex flex-col'>
        <CardContent className='p-6 flex-grow flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.techStack.map((tech) => (
              <Badge key={tech} variant='outline' className='text-xs'>
                {tech}
              </Badge>
            ))}
          </div>
          {project.highlights && (
            <div className='space-y-2 mb-4'>
              {project.highlights.map((highlight) => (
                <div key={highlight} className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-blue-500 mr-2'></div>
                  <span className='text-gray-700 dark:text-white'>{highlight}</span>
                </div>
              ))}
            </div>
          )}
          <div className='flex space-x-4'>
            <Button variant='outline' size='sm' className='flex-1 flex items-center justify-center gap-2 group' asChild>
              <a href={project.github} target='_blank' rel='noopener noreferrer'>
                GitHub
                <ExternalLink size={16} className='group-hover:translate-x-1 transition-transform' />
              </a>
            </Button>
            <Button variant='outline' size='sm' className='flex-1 flex items-center justify-center gap-2 group' asChild>
              <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                Demo
                <ExternalLink size={16} className='group-hover:translate-x-1 transition-transform' />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
