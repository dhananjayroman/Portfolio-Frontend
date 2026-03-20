import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/dhananjayroman',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/Dhananjay-Roman',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/roman.dhananjay_30',
      label: 'Instagram',
    },
    {
      icon: FaFacebook,
      href: 'https://facebook.com/DhananjayRoman',
      label: 'Facebook',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/8600757587',
      label: 'WhatsApp',
    },
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">DR</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Dhananjay Roman</h3>
                <p className="text-gray-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating exceptional web experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                    <span>{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">MY Skills For Developer</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Frontend Design',
                'Backend Development',
                'API Development',
                'Database Design',
                
              ].map((service) => (
                <motion.li key={service}>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                    <span>{service}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 cursor-pointer"
              >
                <FaEnvelope className="w-5 h-5 text-blue-600" />
                <a href="mailto:romandhananjay01@gmail.com" className="hover:text-white transition-colors">
                  romandhananjay01@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 cursor-pointer"
              >
                <FaPhone className="w-5 h-5 text-green-600" />
                <a href="tel:+918600757587" className="hover:text-white transition-colors">
                  +91 8600757587
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 cursor-pointer"
              >
                <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                <span className="hover:text-white transition-colors">
                  Bhor, Pune, Maharashtra
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <motion.div variants={itemVariants} className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dhananjay Roman. All rights reserved.
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
