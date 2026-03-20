import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'The Complete Full Stack Web Development Bootcamp',
      organization: 'Udemy',
      year: 'April 11,2025',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1LYua-6j8985rNcenS13VLQ0g-uCGdoA6/view?usp=sharing',
    },
    {
      title: 'HTML5 CSS3 JAVASCRIPT BOOTSTRAP & JQUERY MASTER CLASS 5 IN 1',
      organization: 'Udemy',
      year: '2025',
      icon: FaAward,
      link: 'https://drive.google.com/file/d/1u-Y-U287J4SPSjRzpGysOPTlhB9p1Fmv/view?usp=sharing',
    },
    {
      title: 'React Developer Certification',
      organization: 'Apna College',
      year: 'Feb 10,2026',
      icon: FaGraduationCap,
      link: 'https://drive.google.com/file/d/1KMjxBY_3ugIRGHCav1OdRxanQTygmF4a/view?usp=sharing',
    },
    
  ];

  // Animation variants
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
    <section id="certifications" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            Certifications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer group"
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="text-center space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.organization}
                  </p>
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full"
                  >
                    <span>{cert.year}</span>
                  </motion.span>
                </div>

                {/* View Certificate Button */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4), 0 10px 25px rgba(147, 51, 234, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H6a2 2 0 00-2-2v-4h16v4a2 2 0 00-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4" />
                  </svg>
                  <span>View Certificate</span>
                </motion.a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I continuously enhance my skills through professional certifications and online courses, 
            staying updated with the latest web development technologies and best practices.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
