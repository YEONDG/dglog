import { motion } from "framer-motion";

interface StoryTabProps {
  journey: string;
}

export const StoryTab = ({ journey }: StoryTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="prose max-w-none">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          개발자가 된 이야기
        </h3>
        <p className="leading-relaxed text-gray-600 dark:text-white">
          {journey}
        </p>
      </div>
    </motion.div>
  );
};
