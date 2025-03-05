'use client';
import { useState } from 'react';
import { Header } from '@/components/about/Header';
import { TabNavigation } from '@/components/about/TabNavigation';
// import { ContactSection } from '@/components/about/ContactSection';
import { StoryTab } from '@/components/about/tabs/StoryTab';
import { ProjectsTab } from '@/components/about/tabs/ProjectsTab';
import { ValuesTab } from '@/components/about/tabs/ValuesTab';
import { profileData, projects, values } from '@/data/home-data';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  return (
    <div className='min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <Header vision={profileData.vision} />

        <div className='rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800'>
          <div className='p-8'>
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'story' && <StoryTab journey={profileData.journey} />}
            {activeTab === 'projects' && <ProjectsTab projects={projects} />}
            {activeTab === 'values' && <ValuesTab values={values} />}
          </div>
        </div>

        {/* <ContactSection isVisible={isVisible} /> */}
      </div>
    </div>
  );
};

export default AboutPage;
