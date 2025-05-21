"use clinet";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "/path/to/image1.jpg",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "/path/to/image2.jpg",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    imageUrl: "/path/to/image3.jpg",
    link: "https://example.com/project3",
  },
];

export const ProjectsNewSection = () => {
  return (
    <section className="flex h-[calc(100vh-72px)] w-full flex-col items-center justify-center bg-red-200">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="flex justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-96 w-48 overflow-hidden rounded-lg border shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
