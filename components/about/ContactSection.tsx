import { motion } from "framer-motion";

interface ContactSectionProps {
  isVisible: boolean;
}

export const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16 text-center"
    >
      <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        함께 이야기 나누어요!
      </h3>
      <p className="mb-6 text-gray-600 dark:text-white">
        개발 이야기나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/YEONDG"
          target="_blank"
          rel="noopener noreferrer"
          className="transform rounded-lg bg-gray-800 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-900"
        >
          GitHub
        </a>
        <a
          href="mailto:zzmn410@gmail.com"
          className="transform rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
        >
          이메일 보내기
        </a>
      </div>
    </motion.div>
  );
};
