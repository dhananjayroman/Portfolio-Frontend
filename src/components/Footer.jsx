import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { staggerContainer, fadeUp } from '../animations/motionVariants';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/dhananjayroman', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/Dhananjay-Roman', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/roman.dhananjay_30', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/DhananjayRoman', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/8600757587', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">DR</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Dhananjay Roman</h3>
                <p className="text-slate-500 text-xs">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Passionate about creating exceptional web experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-indigo-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Core Areas Column */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Developer Focus</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Frontend Design',
                'Backend Development',
                'API Development',
                'Database Design',
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <a href="mailto:romandhananjay01@gmail.com" className="hover:text-white transition-colors truncate">
                  romandhananjay01@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <a href="tel:+918600757587" className="hover:text-white transition-colors">
                  +91 8600757587
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>Bhor, Pune, Maharashtra</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dhananjay Roman. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center sm:space-x-6 sm:gap-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Positioned higher to avoid overlapping the WhatsApp floating badge */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:bottom-28 sm:right-8 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md hover:shadow-lg transition-all duration-200 z-40"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
