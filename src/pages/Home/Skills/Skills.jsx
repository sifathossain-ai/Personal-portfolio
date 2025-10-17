import React from "react";
import {
  FaCode,
  FaDatabase,
  FaCogs,
  FaChartLine,
  FaCloudUploadAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiAxios,
  SiDaisyui,
  SiJsonwebtokens,
  SiMysql,
  SiAib,
  SiScikitlearn,
} from "react-icons/si";

import {
  Server,
  Brain,
  Boxes,
  Globe,
  Box,
  Cloud,
  LineChart,
  BarChart3,
} from "lucide-react";
import { CgCode } from "react-icons/cg";

const Skills = () => {
  const skillSections = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-700" />,
      skills: [
        { name: "C++", icon: <SiCplusplus className="w-4 h-4" /> },
        { name: "Python", icon: <SiPython className="w-4 h-4" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
        { name: "OOP (Java)", icon: <CgCode className="w-5 h-5" /> },
      ],
    },

    {
      title: "Databases",
      icon: <FaDatabase className="text-blue-700" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4" /> },
      ],
    },
    {
      title: "Frontend",
      icon: <FaCogs className="text-blue-700" />,
      skills: [
        { name: "React", icon: <SiReact className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="w-4 h-4" /> },
        { name: "TansTack Query", icon: <Cloud className="w-4 h-4" /> },
        { name: "Axios", icon: <SiAxios className="w-4 h-4" /> },
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4" /> },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-700 w-4 h-4" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
        { name: "REST API", icon: <Globe className="w-4 h-4" /> },
        { name: "JWT Verify", icon: <SiJsonwebtokens className="w-4 h-4" /> },
      ],
    },
    {
      title: "Data Science",
      icon: <Boxes className="text-blue-700 w-4 h-4" />,
      skills: [
        { name: "Jupyter Notebooks", icon: <SiJupyter className="w-4 h-4" /> },
        { name: "Machine Learning", icon: <Brain className="w-4 h-4" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="w-4 h-4" /> },
        {
          name: "Data Visualization",
          icon: <FaChartLine className="w-4 h-4" />,
        },
        { name: "Predictive Models", icon: <LineChart className="w-4 h-4" /> },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4" /> },
        { name: "Numpy", icon: <SiNumpy className="w-4 h-4" /> },
        { name: "Matplotlib", icon: <BarChart3 className="w-4 h-4" /> },
      ],
    },
    {
      title: "Others",
      icon: <Box className="text-blue-700 w-4 h-4" />,
      skills: [
        { name: "Vercel", icon: <Globe className="w-4 h-4" /> },
        { name: "Surge", icon: <FaCloudUploadAlt className="w-4 h-4" /> },
        { name: "Netlify", icon: <Globe className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="px-2">
      <h2 className="text-center md:text-start font-mono text-3xl md:text-4xl mb-12 text-gray-800">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skillSections.map((section, i) => (
          <div key={i}>
            <h3 className="text-[14px] flex items-center gap-2 text-blue-700 mb-4">
              {section.icon} {section.title}:
            </h3>
            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill, j) => (
                <span
                  key={j}
                  className="flex items-center gap-1 px-4 py-1 border border-gray-200 text-gray-700 rounded-sm bg-gray-50"
                >
                  <span className="text-base font-thin text-cyan-600 pr-1">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
