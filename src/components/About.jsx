import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { staggerContainer, fadeUp, slideFromLeft, slideFromRight } from '../animations/motionVariants';
import useMediaQuery from '../hooks/useMediaQuery';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Abasaheb Garware College, Deccan Pune',
    },
    {
      degree: 'Bachelor Degree',
      school: 'Rajgad Dnyanpeeth Anantrao Thopate College, Bhor (CGPA 8.65)',
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Raja Raghunathrao Vidhyalaya Bhor',
    },
    {
      degree: '10th',
      school: 'Jijamata High School, Bhor',
    }
  ];

  const personalInfo = [
    { icon: FaUser, label: 'Name', value: 'Dhananjay Govind Roman' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Pune, India' },
    { icon: FaEnvelope, label: 'Email', value: 'romandhananjay01@gmail.com' },
    { icon: FaUser, label: 'Role', value: 'Frontend / Full Stack Developer' },
  ];

  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-white dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300"
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
            About Me
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Developer Summary - Visually Prominent */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light"
          >
            I am a passionate web developer focused on building modern, responsive, and interactive web applications 
            using technologies like React, JavaScript, Node.js, and Tailwind CSS. I enjoy solving real-world problems 
            and continuously learning new technologies.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">
          {/* Left Column - Education */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={isMobile ? fadeUp : slideFromLeft} 
            className="space-y-6"
          >
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  >
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white dark:bg-[#0b0f19] border-2 border-indigo-600 dark:border-indigo-400 rounded-full" />
                    
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {edu.school}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Personal Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={isMobile ? fadeUp : slideFromRight} 
            className="space-y-6"
          >
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FaUser className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Personal Information
                </h3>
              </div>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center space-x-4 p-3 rounded-xl border border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900/60 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {info.label}
                      </span>
                      <span className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 break-words">
                        {info.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
