import { motion } from 'framer-motion';

interface Value {
  title: string;
  description: string;
}

interface ValuesTabProps {
  values: Value[];
}

export const ValuesTab = ({ values }: ValuesTabProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className='space-y-8'>
      {values.map((value, index) => (
        <div key={index} className='p-6 rounded-lg'>
          <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-3'>{value.title}</h3>
          <p className=''>{value.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
