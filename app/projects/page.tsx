import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { ScrollAnimation } from "../components/scroll-animation";

export const metadata: Metadata = {
  title: "Projects",
  description: "Reinhart's Personal Website",
};

export default function Projects() {
  return (
    <section>
      <ScrollAnimation type="scale">
        <h1 className="mb-8 text-2xl font-medium">Reinhart's Projects</h1>
      </ScrollAnimation>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col mb-5 space-y-1 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start justify-between w-full space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <ScrollAnimation type="slideRight">
                <h2 className="text-black dark:text-white">{project.title}</h2>
              </ScrollAnimation>
              <ScrollAnimation type="slideLeft">
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </ScrollAnimation>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
