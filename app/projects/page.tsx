import type { Metadata } from "next";
import { projects } from "./project-data";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ProjectImage } from "./project-image";

export const metadata: Metadata = {
  title: "Projects",
  description: "Reinhart's Personal Website",
};

function parseDate(dateStr: string) {
  return new Date(dateStr);
}

export default function Projects() {
  const sortedProjects = [...projects].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Reinhart's Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-colors"
          >
            <div className="relative w-full h-48">
              <ProjectImage src={project.image} alt={project.title} />
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-1">
                {project.title}
              </h2>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {project.date}
              </span>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 flex-1">
                {project.description}
              </p>
              {project.techs && project.techs.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white text-xs px-3 py-1 rounded-full font-medium border border-neutral-300 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-3 mt-auto">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-white dark:bg-neutral-800 text-black dark:text-white rounded-lg shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition"
                  >
                    <FiGlobe className="w-4 h-4" /> Website
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-neutral-900 dark:bg-neutral-700 text-white border border-neutral-700 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-800 transition"
                >
                  <FaGithub className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
