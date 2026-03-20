import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = [
    'Frontend Developer',
    'React Developer', 
    'Full Stack Developer'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 120; // Slow and readable
    const deletingSpeed = 80; // Slightly faster deletion
    const pauseDuration = 2000; // Pause at end of word
    const nextWordDelay = 800; // Pause before next word

    const typeWriter = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setIsTyping(false);
        setTimeout(typeWriter, pauseDuration);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTimeout(typeWriter, nextWordDelay);
      }
    };

    typeWriter();
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
      }
    }
  };

  const techIcons = [
    { icon: FaReact, color: 'text-cyan-400', delay: 0 },
    { icon: FaNodeJs, color: 'text-green-400', delay: 0.2 },
    { icon: FaHtml5, color: 'text-orange-500', delay: 0.4 },
    { icon: FaCss3Alt, color: 'text-blue-500', delay: 0.6 },
    { icon: FaJs, color: 'text-yellow-400', delay: 0.8 },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-20 right-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl animate-pulse top-1/2 left-1/2" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 font-medium"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Dhananjay
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Roman
                </span>
              </motion.h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="h-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-blue-400 ml-2"
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              Passionate about creating exceptional web experiences with modern technologies. 
              Specializing in React, Node.js, and building scalable applications that make a difference.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <FaDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-full flex items-center justify-center space-x-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <span>View Projects</span>
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Social Links - Moved below buttons */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: FaGithub, href: 'https://github.com/dhananjayroman', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/Dhananjay-Roman', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:romandhananjay01@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                {/* Profile Image - Update this path with your image */}
                <img 
                  src="/images/my.png" 
                  alt="Dhananjay Roman"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <div class="text-center text-white">
                          <div class="text-6xl md:text-8xl font-bold mb-2">DR</div>
                          <p class="text-sm md:text-base opacity-90">Developer</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
