import { motion } from 'framer-motion';

interface StoryTabProps {
  journey: string;
}

export const StoryTab = ({ journey }: StoryTabProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className='space-y-6'>
      <div className='prose max-w-none'>
        <h3 className='text-xl font-semibold dark:text-white mb-4'>개발자가 된 이야기</h3>
        <p className='text-gray-600 dark:text-white leading-relaxed'>{journey}</p>
      </div>
    </motion.div>
  );
};
