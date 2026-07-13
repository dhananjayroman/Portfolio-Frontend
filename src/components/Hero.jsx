import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { staggerContainer, fadeUp } from '../animations/motionVariants';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    'Frontend Developer',
    'React Developer', 
    'Full Stack Developer'
  ];

  // Professional typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 120;      // Slower, more deliberate typing speed
    const deletingSpeed = 60;       // Faster deleting
    const pauseDuration = 2000;     // Pause before deleting
    const nextWordDelay = 800;      // Pause before next word starts

    let timer;

    const typeWriter = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        timer = setTimeout(typeWriter, typingSpeed);
      } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        timer = setTimeout(typeWriter, pauseDuration);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        timer = setTimeout(typeWriter, deletingSpeed);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(typeWriter, nextWordDelay);
      }
    };

    typeWriter();
    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Dhananjay_Roman_FSD.pdf';
    link.download = 'Dhananjay-Roman-Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-slate-50 dark:bg-[#0b0f19] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 transition-colors duration-300"
    >
      {/* Subtle Premium Background Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -top-40 -left-40"
        />
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl bottom-10 right-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full"
        >
          {/* Left Column - Copy & CTA Buttons */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <motion.span 
                variants={fadeUp} 
                className="inline-block text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase"
              >
                Welcome to my portfolio
              </motion.span>
              
              <motion.h1
                variants={fadeUp}
                className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Dhananjay Roman</span>
              </motion.h1>
            </div>

            {/* Slow, clean typing animation with cursor */}
            <motion.div variants={fadeUp} className="h-8 sm:h-10">
              <h2 className="text-lg xxs:text-lg xs:text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 flex items-center whitespace-nowrap">
                <span>{displayText}</span>
                <span className="w-[3px] h-5 xs:h-6 sm:h-8 bg-indigo-600 dark:bg-indigo-400 ml-1.5 animate-pulse" />
              </h2>
            </motion.div>

            {/* Self description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              Passionate about creating exceptional web experiences with modern technologies. 
              Specializing in React, Node.js, and building scalable applications that make a difference.
            </motion.p>

            {/* Main Action buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full xs:w-auto"
            >
              <button
                onClick={downloadResume}
                className="w-full xs:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full xs:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
              >
                <span>View Projects</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex space-x-4 pt-1 sm:pt-2">
              {[
                { icon: FaGithub, href: 'https://github.com/dhananjayroman', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/Dhananjay-Roman', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:romandhananjay01@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Avatar/Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              variants={fadeUp}
              className="relative"
            >
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -inset-4 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl"></div>
              
              {/* Profile Image Wrapper */}
              <div className="relative w-44 h-44 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/images/my.png" 
                  alt="Dhananjay Roman"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                        <div class="text-center text-white">
                          <div class="text-5xl lg:text-7xl font-bold tracking-tight">DR</div>
                          <p class="text-xs opacity-80 mt-2 font-medium">Developer</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
