"use client";

import { useState } from "react";
import { Header } from "@/components/about/Header";
import { TabNavigation } from "@/components/about/TabNavigation";
import { StoryTab } from "@/components/about/tabs/StoryTab";
import { ProjectsTab } from "@/components/about/tabs/ProjectsTab";
import { ValuesTab } from "@/components/about/tabs/ValuesTab";
import { profileData, projects, values } from "@/data/home-data";

const AboutPageClient = () => {
  const [activeTab, setActiveTab] = useState("story");

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
      </div>
    </div>
  );
};

export default AboutPageClient;
