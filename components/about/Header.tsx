import { motion } from 'framer-motion';

interface HeaderProps {
  vision: string;
}

export const Header = ({ vision }: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-center mb-16 space-y-4'
    >
      <h1 className='text-4xl font-bold '>프론트엔드 개발 포트폴리오</h1>
      <div className='h-1 w-20 bg-blue-500 mx-auto'></div>
      <p className='text-xl  mt-4'>{vision}</p>
    </motion.div>
  );
};
