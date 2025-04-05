import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

interface ValuesTabProps {
  values: Value[];
}

export const ValuesTab = ({ values }: ValuesTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {values.map((value, index) => (
        <div key={index} className="rounded-lg p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            {value.title}
          </h3>
          <p className="">{value.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
