// app/components/home/tab-section/skills-tab.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SkillBar } from '../skill/skill-bar';
import { SkillCard } from '@/components/home/skill/skill-card';
import { TechStack, SkillCategory } from '@/types';

interface SkillsTabProps {
  techStack: TechStack[];
}

export const SkillsTab = ({ techStack }: SkillsTabProps) => {
  const [animateSkills, setAnimateSkills] = useState(false);

  // 스크롤 위치에 따라 스킬 애니메이션 시작
  useEffect(() => {
    setAnimateSkills(true); // 탭 클릭 시 자동으로 애니메이션 시작

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300 && !animateSkills) {
        setAnimateSkills(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSkills]);

  // 기술 카테고리 데이터
  const skillCategories: SkillCategory[] = [
    {
      title: '프론트엔드',
      color: 'blue',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: '백엔드',
      color: 'purple',
      skills: ['Node.js', 'Express', 'Prisma', 'MongoDB', 'RESTful API', 'Firebase'],
    },
    {
      title: '도구 & 배포',
      color: 'green',
      skills: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code', 'Webpack', 'npm', 'Docker'],
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='space-y-12'>
      <Card>
        <CardContent className='p-6'>
          <h2 className='text-2xl font-bold mb-8'>기술 스택</h2>
          <div className='space-y-6'>
            {techStack.map((tech, index) => (
              <SkillBar key={tech.name} name={tech.name} level={tech.level} index={index} animate={animateSkills} />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {skillCategories.map((category) => (
          <SkillCard key={category.title} title={category.title} skills={category.skills} color={category.color} />
        ))}
      </div>
    </motion.div>
  );
};
