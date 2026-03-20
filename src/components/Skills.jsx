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
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaGithub,
  FaBootstrap,
  FaSass,
  FaWordpress,
  FaShopify,
  FaStripe,
  FaPaypal,
  FaGoogle,
  FaFacebook,
  FaChartLine,
  FaServer,
  FaShieldAlt,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaLaptopCode
} from 'react-icons/fa';
import { SiPostman } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { SiNetlify } from "react-icons/si";
const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', icon: FaReact, level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'JavaScript', icon: FaJs, level: 85, color: 'from-yellow-400 to-orange-500' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: 'from-orange-400 to-red-500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'from-blue-400 to-indigo-500' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: 'from-purple-400 to-pink-500' },
      { name: 'Tailwind', icon: FaPalette, level: 88, color: 'from-teal-400 to-cyan-500' },
    ],
    backend: [
      { name: 'Node.js', icon: FaNodeJs, level: 85, color: 'from-green-400 to-emerald-500' },
      { name: 'Core Java', icon: FaJava, level: 70, color: 'from-red-400 to-orange-500' },
      { name: 'Database', icon: FaDatabase, level: 80, color: 'from-indigo-400 to-purple-500' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, level: 90, color: 'from-orange-400 to-red-500' },
      { name: 'GitHub', icon: FaGithub, level: 95, color: 'from-gray-600 to-gray-800' },
      { name: 'Postman', icon: SiPostman, level: 75, color: 'from-yellow-400 to-orange-500' },
      { name: 'Vercel', icon: RxVercelLogo, level: 70, color: 'from-blue-400 to-cyan-500' },
    ],
    platforms: [
      { name: 'WordPress', icon: FaWordpress, level: 85, color: 'from-blue-400 to-indigo-500' },
      { name: 'Shopify', icon: FaShopify, level: 80, color: 'from-green-400 to-emerald-500' },
      
      { name: 'Netlify', icon: SiNetlify, level: 75, color: 'from-teal-400 to-cyan-500' },
    ],
    expertise: [
      { name: 'Web Development', icon: FaCode, level: 95, color: 'from-blue-400 to-indigo-500' },
      { name: 'Mobile Development', icon: FaMobileAlt, level: 75, color: 'from-green-400 to-emerald-500' },
      { name: 'UI/UX Design', icon: FaPalette, level: 80, color: 'from-purple-400 to-pink-500' },
      { name: 'Performance', icon: FaChartLine, level: 85, color: 'from-orange-400 to-red-500' },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white`}>
            <skill.icon className="w-6 h-6" />
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {skill.level}%
        </motion.span>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: 0.3 + index * 0.1,
            ease: [0.6, -0.05, 0.01, 0.9]
          }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
        >
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-white/20"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  const ExpertiseCard = ({ expertise, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.08, 
        rotate: 5,
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center cursor-pointer shadow-lg border border-gray-200 dark:border-gray-600"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.5
        }}
        className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${expertise.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
      >
        <expertise.icon className="w-8 h-8" />
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {expertise.name}
      </h3>
      
      {/* Circular Progress */}
      <div className="relative w-24 h-24 mx-auto">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="36"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: expertise.level / 100 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5 + index * 0.15,
              ease: [0.6, -0.05, 0.01, 0.9]
            }}
            style={{
              pathLength: 1,
              strokeDasharray: 226,
              strokeDashoffset: 226 - (226 * expertise.level / 100)
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {expertise.level}%
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <FaLaptopCode className="mr-3 text-blue-600" />
            Frontend Development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <FaServer className="mr-3 text-green-600" />
            Backend Development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <FaGitAlt className="mr-3 text-orange-600" />
              Tools & Technologies
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Platforms */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <FaShieldAlt className="mr-3 text-purple-600" />
              Platforms & Services
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.platforms.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Core Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.expertise.map((expertise, index) => (
              <ExpertiseCard key={expertise.name} expertise={expertise} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
