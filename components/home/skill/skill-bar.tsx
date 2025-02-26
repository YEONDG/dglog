'use client';

import { motion } from 'framer-motion';

export const SkillBar = ({ name, level, index, animate }) => {
  return (
    <div className='space-y-2'>
      <div className='flex justify-between items-center'>
        <span className='font-medium'>{name}</span>
        <span>{level}%</span>
      </div>
      <div className='h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};
