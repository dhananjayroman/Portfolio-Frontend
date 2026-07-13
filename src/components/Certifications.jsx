import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { staggerContainer, fadeUp } from '../animations/motionVariants';

const Certifications = () => {
  const certifications = [
    {
      title: 'The Complete Full Stack Web Development Bootcamp',
      organization: 'Udemy',
      year: 'April 11, 2025',
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
      year: 'Feb 10, 2026',
      icon: FaGraduationCap,
      link: 'https://drive.google.com/file/d/1KMjxBY_3ugIRGHCav1OdRxanQTygmF4a/view?usp=sharing',
    },
  ];


  return (
    <section 
      id="certifications" 
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
            Certifications
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Certificate Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <cert.icon className="w-6 h-6" />
                </div>

                {/* Certificate details */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <span>{cert.organization}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-slate-500 dark:text-slate-400">{cert.year}</span>
                  </div>
                </div>
              </div>

              {/* View Link */}
              <div className="pt-8">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-sm transition-colors duration-200"
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
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
