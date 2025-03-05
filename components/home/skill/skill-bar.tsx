'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  animate: boolean;
}

export const SkillBar = ({ name, level, index, animate }: SkillBarProps) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-between items-center'>
        <span className='font-medium text-gray-700 dark:text-white'>{name}</span>
        <span className='text-sm text-gray-500 dark:text-white'>{level}%</span>
      </div>
      <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-blue-600 rounded-full'
          initial={{ width: '0%' }}
          animate={{ width: animate ? `${level}%` : '0%' }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      </div>
    </div>
  );
};
