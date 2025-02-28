'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Layout, ChevronRight } from 'lucide-react';
import { Education } from '@/types';

interface AboutTabProps {
  education: Education[];
}

interface EducationSectionProps {
  education: Education[];
}

export const AboutTab = ({ education }: AboutTabProps) => {
  return (
    <div className='space-y-12'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='grid grid-cols-1 gap-6'
      >
        <DevelopmentPhilosophy />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <EducationSection education={education} />
      </motion.div>
    </div>
  );
};

const DevelopmentPhilosophy = () => {
  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
            <Code className='text-blue-500' /> 개발 철학
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            사용자 경험을 최우선으로 생각하며, 클린 코드와 접근성 있는 웹 개발을 지향합니다. 최신 기술 트렌드를 학습하고
            적용하는 것을 즐기며, 끊임없이 성장하는 개발자가 되고자 합니다.
          </p>
          <ul className='mt-4 space-y-2'>
            <li className='flex items-center gap-2'>
              <ChevronRight size={16} className='text-blue-500' />
              사용자 중심 디자인 추구
            </li>
            <li className='flex items-center gap-2'>
              <ChevronRight size={16} className='text-blue-500' />
              유지보수가 용이한 코드 작성
            </li>
            <li className='flex items-center gap-2'>
              <ChevronRight size={16} className='text-blue-500' />
              지속적인 학습과 기술 습득
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <Card>
      <CardContent className='p-6'>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
          <Layout className='text-blue-500' /> 교육
        </h2>
        <div className='space-y-4'>
          {education.map((edu: Education, index: number) => (
            <div key={index} className='flex flex-col md:flex-row md:items-center justify-between gap-2'>
              <div>
                <h3 className='font-semibold text-lg'>{edu.degree}</h3>
                <p className='text-gray-600 dark:text-gray-300'>{edu.institution}</p>
              </div>
              <Badge variant='outline' className='md:self-start'>
                {edu.period}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
