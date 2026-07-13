import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGithub,
  FaBootstrap,
  FaWordpress,
  FaShopify,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
  FaServer,
  FaShieldAlt,
  FaLaptopCode
} from 'react-icons/fa';
import { SiPostman } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { SiNetlify } from "react-icons/si";
import { staggerContainer, staggerContainerFast, fadeUp, scaleIn } from '../animations/motionVariants';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', icon: FaReact, level: 'Advanced' },
      { name: 'JavaScript', icon: FaJs, level: 'Advanced' },
      { name: 'HTML5', icon: FaHtml5, level: 'Expert' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: FaPalette, level: 'Advanced' },
    ],
    backend: [
      { name: 'Node.js', icon: FaNodeJs, level: 'Advanced' },
      { name: 'Core Java', icon: FaJava, level: 'Intermediate' },
      { name: 'Database', icon: FaDatabase, level: 'Advanced' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'GitHub', icon: FaGithub, level: 'Expert' },
      { name: 'Postman', icon: SiPostman, level: 'Intermediate' },
      { name: 'Vercel', icon: RxVercelLogo, level: 'Intermediate' },
    ],
    platforms: [
      { name: 'WordPress', icon: FaWordpress, level: 'Advanced' },
      { name: 'Shopify', icon: FaShopify, level: 'Intermediate' },
      { name: 'Netlify', icon: SiNetlify, level: 'Intermediate' },
    ],
    expertise: [
      { name: 'Web Development', icon: FaCode, level: 'Expert' },
      { name: 'Mobile Development', icon: FaMobileAlt, level: 'Intermediate' },
      { name: 'UI/UX Design', icon: FaPalette, level: 'Advanced' },
      { name: 'Performance Opt.', icon: FaChartLine, level: 'Advanced' },
    ]
  };



  const SkillSection = ({ title, icon: Icon, skills }) => (
    <motion.div 
      variants={fadeUp} 
      className="space-y-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <motion.div 
        variants={staggerContainerFast}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skills.map((skill) => (
          <motion.div 
            variants={scaleIn}
            key={skill.name}
            className="flex flex-col items-center justify-center p-3 xs:p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-indigo-500 hover:scale-105 hover:shadow-md transition-all duration-200 text-center group cursor-default"
          >
            <div className="text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 xs:mb-3">
              <skill.icon className="w-8 h-8" />
            </div>
            <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
              {skill.name}
            </span>
            <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-semibold">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section 
      id="skills" 
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Frontend */}
          <SkillSection 
            title="Frontend Development" 
            icon={FaLaptopCode} 
            skills={skillsData.frontend} 
          />

          {/* Backend */}
          <SkillSection 
            title="Backend & Database" 
            icon={FaServer} 
            skills={skillsData.backend} 
          />

          {/* Tools */}
          <SkillSection 
            title="Tools & Technologies" 
            icon={FaGitAlt} 
            skills={skillsData.tools} 
          />

          {/* Platforms */}
          <SkillSection 
            title="Platforms & Services" 
            icon={FaShieldAlt} 
            skills={skillsData.platforms} 
          />
        </motion.div>

        {/* Core Expertise Card Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.div 
            variants={fadeUp}
            className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">
              Core Expertise Areas
            </h3>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {skillsData.expertise.map((exp) => (
                <motion.div 
                  variants={scaleIn}
                  key={exp.name} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-4 xs:p-6 rounded-xl text-center hover:border-indigo-500 hover:scale-105 transition-all duration-200 group flex flex-col items-center justify-center"
                >
                  <div className="text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 flex justify-center">
                    <exp.icon className="w-8 h-8" />
                  </div>
                  <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {exp.name}
                  </span>
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                    {exp.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
