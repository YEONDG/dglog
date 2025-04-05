"use client";
import { useState } from "react";
import { Header } from "@/components/about/Header";
import { TabNavigation } from "@/components/about/TabNavigation";
// import { ContactSection } from '@/components/about/ContactSection';
import { StoryTab } from "@/components/about/tabs/StoryTab";
import { ProjectsTab } from "@/components/about/tabs/ProjectsTab";
import { ValuesTab } from "@/components/about/tabs/ValuesTab";
import { profileData, projects, values } from "@/data/home-data";

// 클라이언트 컴포넌트에서는 메타데이터를 직접 export할 수 없어 별도의 메타데이터 파일이 필요합니다.
// app/about/metadata.ts를 생성해야 합니다.

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Header vision={profileData.vision} />

        <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
          <div className="p-8">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "story" && (
              <StoryTab journey={profileData.journey} />
            )}
            {activeTab === "projects" && <ProjectsTab projects={projects} />}
            {activeTab === "values" && <ValuesTab values={values} />}
          </div>
        </div>

        {/* <ContactSection isVisible={isVisible} /> */}
      </div>
    </div>
  );
};

export default AboutPage;
