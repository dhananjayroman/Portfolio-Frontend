import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Developer Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I am a passionate web developer focused on building modern, responsive, and interactive web applications 
            using technologies like React, JavaScript, Node.js, and Tailwind CSS. I enjoy solving real-world problems 
            and continuously learning new technologies.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column - Education */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative pl-8 border-l-4 border-blue-600 dark:border-blue-400 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Personal Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mr-4">
                  <FaUser className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Personal Information
                </h3>
              </div>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
