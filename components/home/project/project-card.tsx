'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className='h-full overflow-hidden flex flex-col'>
        <div className='aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-800'>
          {project.image ? (
            <img src={project.image} alt={`${project.title} 프로젝트 이미지`} className='w-full h-full object-cover' />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-gray-400'>{project.title} 이미지</span>
            </div>
          )}
        </div>
        <CardContent className='p-6 flex-grow flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tech.map((tech) => (
              <Badge key={tech} variant='outline' className='text-xs'>
                {tech}
              </Badge>
            ))}
          </div>
          <Button variant='outline' size='sm' className='w-full flex items-center justify-center gap-2 group'>
            자세히 보기
            <ExternalLink size={16} className='group-hover:translate-x-1 transition-transform' />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
