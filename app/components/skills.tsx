"use client";

import { motion } from "framer-motion";
import { FaReact, FaGit, FaFigma, FaCode, FaTerminal } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: TbBrandHtml5 },
  { name: "CSS3", icon: TbBrandCss3 },
  { name: "Git", icon: FaGit },
  { name: "Visual Studio Code", icon: FaCode },
  { name: "Cursor AI", icon: FaTerminal },
  { name: "Figma", icon: FaFigma },
];

export function Skills() {
  return (
    <section className="my-16">
      <h2 className="mb-8 text-2xl font-medium">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((tech, index) => (
          <motion.span
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700"
          >
            <tech.icon className="w-5 h-5" />
            {tech.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
