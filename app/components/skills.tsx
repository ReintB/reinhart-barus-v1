"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Git" },
  { name: "Visual Studio Code" },
  { name: "Cursor AI" },
  { name: "Figma" },
];

export function Skills() {
  return (
    <section className="mt-8">
      <h2 className="mb-8 text-2xl font-medium">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((tech) => (
          <span
            key={tech.name}
            className="bg-neutral-800 text-white text-sm px-3 py-1 rounded-full font-medium border border-neutral-700"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
