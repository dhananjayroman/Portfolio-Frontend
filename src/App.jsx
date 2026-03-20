import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import './css/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918600757587"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)'
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>
    </div>
  );
}

export default App;
