'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaGit, 
  FaFigma,
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss
} from 'react-icons/si';
import { TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: TbBrandHtml5 },
      { name: "CSS3", icon: TbBrandCss3 }
    ]
  },
  {
    category: "Tools & Others",
    techs: [
      { name: "Git", icon: FaGit },
      { name: "Visual Studio Code", icon: FaCode },
      { name: "Cursor AI", icon: FaTerminal },
      { name: "Figma", icon: FaFigma }
    ]
  }
];

export function Skills() {
  return (
    <section className="my-16">
      <h2 className="mb-8 text-2xl font-medium">Skills & Technologies</h2>
      <div className="space-y-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.techs.map((tech) => (
                <motion.span
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700"
                >
                  <tech.icon className="w-5 h-5" />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 