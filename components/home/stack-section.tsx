"use client";
import FallingText from "./stack-section/falling-text";

const StackSection = () => {
  return (
    <section className="flex h-[calc(100vh-72px)] flex-col items-start justify-center py-6 md:py-16">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Stack
      </h2>
      <FallingText
        text={`React HTML CSS Vite JavaScript TypeScript Next.js Tailwind Shadcn-ui Tanstack-virtual Supabase Zod Tanstack-Query Zustand Framer-Motion React-Router-Dom Redux`}
        highlightWords={[
          "React",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "Tanstack-Query",
        ]}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </section>
  );
};

export default StackSection;
