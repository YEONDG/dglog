'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AboutTab } from './about-tab';
import { SkillsTab } from './skills-tab';
import { ProjectsTab } from './projects-tab';

export const TabSection = ({ techStack, projects, education }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className='container mx-auto px-4 pb-24'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='max-w-5xl mx-auto'
      >
        <Tabs defaultValue='about' value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 mb-12 h-full'>
            <TabsTrigger value='about' className='text-lg py-3'>
              About
            </TabsTrigger>
            <TabsTrigger value='skills' className='text-lg py-3'>
              Skills
            </TabsTrigger>
            <TabsTrigger value='projects' className='text-lg py-3'>
              Projects
            </TabsTrigger>
          </TabsList>

          {/* About Me 탭 */}
          <TabsContent value='about'>
            <AboutTab education={education} />
          </TabsContent>

          {/* Skills 탭 */}
          <TabsContent value='skills'>
            <SkillsTab techStack={techStack} />
          </TabsContent>

          {/* Projects 탭 */}
          <TabsContent value='projects'>
            <ProjectsTab projects={projects} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </main>
  );
};
