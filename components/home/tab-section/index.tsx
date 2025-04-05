"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutTab } from "./about-tab";
import { SkillsTab } from "./skills-tab";
import { ProjectsTab } from "./projects-tab";
import { Project, TechStack, Education } from "@/types";

interface TabSectionProps {
  techStack: TechStack[];
  projects: Project[];
  education: Education[];
}

export const TabSection = ({
  techStack,
  projects,
  education,
}: TabSectionProps) => {
  return (
    <main className="container mx-auto px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mx-auto max-w-5xl"
      >
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-12 grid h-full w-full grid-cols-3">
            <TabsTrigger value="about" className="py-3 text-lg">
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="py-3 text-lg">
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="py-3 text-lg">
              Projects
            </TabsTrigger>
          </TabsList>

          {/* About Me 탭 */}
          <TabsContent value="about">
            <AboutTab education={education} />
          </TabsContent>

          {/* Skills 탭 */}
          <TabsContent value="skills">
            <SkillsTab techStack={techStack} />
          </TabsContent>

          {/* Projects 탭 */}
          <TabsContent value="projects">
            <ProjectsTab projects={projects} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </main>
  );
};
