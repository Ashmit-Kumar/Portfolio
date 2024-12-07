import React from "react";
import "./styles/Skills.css";
import { motion } from "framer-motion";
import { FaLinux } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TiInfinity } from "react-icons/ti";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { FaJava } from "react-icons/fa";

function Skills() {
  const skillsData = [
    {
      category: "OS",
      icon: <FaLinux />,
      skills: ["Linux", "Windows"],
    },
    {
      category: "Languages",
      icon: <FaJava />,
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      category: "Frameworks/Libraries",
      icon: <IoIosCode />,
      skills: ["React", "Node.js", "Express"],
    },
    {
      category: "Databases",
      icon: <SiMongodb />,
      skills: ["MongoDB", "SQL"],
    },
    {
      category: "DevOps",
      icon: <TiInfinity />,
      skills: ["Docker", "Ansible", "Prometheus", "GitHub", "Shell-Scripting"],
    },
    {
      category: "Cloud",
      icon: <FaCloudDownloadAlt />,
      skills: ["AWS", "Azure", "Google Cloud"],
    },
  ];

  return (
    <div className="skills-section">
      <div className="skills-heading">
      <h2>&lt; Skills /&gt;</h2>
      <p className="subtitle">What I bring to the table</p>
      </div>
      <div className="skills-row-1">
        {skillsData.slice(0, 4).map((category, index) => (
          <motion.div
            key={index}
            className={`skills-card ${category.category.toLowerCase()}`} // No comment inside JSX
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skills-icon">{category.icon}</div>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="skills-row-2">
        {skillsData.slice(4).map((category, index) => (
          <motion.div
            key={index}
            className={`skills-card ${category.category.toLowerCase()}`} // No comment inside JSX
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skills-icon">{category.icon}</div>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
