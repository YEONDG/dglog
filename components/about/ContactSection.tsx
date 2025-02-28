import { motion } from 'framer-motion';

interface ContactSectionProps {
  isVisible: boolean;
}

export const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='mt-16 text-center'
    >
      <h3 className='text-2xl font-bold text-gray-800 mb-4'>함께 이야기 나누어요!</h3>
      <p className='text-gray-600 mb-6'>개발 이야기나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.</p>
      <div className='flex justify-center space-x-4'>
        <a
          href='https://github.com/YEONDG'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-3 bg-gray-800 text-white rounded-lg font-medium shadow-lg hover:bg-gray-900 transition duration-300 transform hover:-translate-y-1'
        >
          GitHub
        </a>
        <a
          href='mailto:your.email@example.com'
          className='px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1'
        >
          이메일 보내기
        </a>
      </div>
    </motion.div>
  );
};
