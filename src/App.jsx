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
          scale: 1.05,
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-350 cursor-pointer border border-emerald-500/10"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

export default App;
