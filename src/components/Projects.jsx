import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaSearchPlus, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaMobile,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaPalette,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaHtml5,
  FaCss3,
  FaJs
} from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'School Van Booking System',
      category: 'Transportation',
      description: 'Complete school van booking and management system with real-time tracking, online booking, and fleet management solutions.',
      image: '/images/schoolvan.png',
      techStack: [FaReact, FaNodeJs, FaDatabase],
      features: ['Real-time tracking', 'Online booking', 'Fleet management', 'Payment integration'],
      githubLink: 'https://github.com/dhananjayroman/school-van-system',
      liveLink: 'https://schoolvan.example.com',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Real Estate Platform(Clone Airbnb)',
      category: 'Real Estate',
      description: 'Built a full-stack property listing application with Passport.js authentication, Mapbox interactive maps, Cloudinary image uploads, and RESTful CRUD operations for listings and reviews.',
      image: '/images/aibnb.jpg',
      techStack: [FaReact, FaNodeJs, FaDatabase, FaBuilding],
      features: ['Property listings', 'Virtual tours', 'Agent management', 'Search filters'],
      githubLink: 'https://github.com/dhananjayroman/Wonderlust',
      liveLink: 'https://wonderlust-rust.vercel.app/listings',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'Full-featured e-commerce platform with product management, shopping cart, payment processing, and admin dashboard.',
      image: '/images/ecom.png',
      techStack: [FaReact, FaNodeJs, FaDatabase, FaShoppingCart],
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Admin dashboard'],
      githubLink: 'https://github.com/dhananjayroman/Ecom',
      liveLink: 'https://ecom-5grpmszs7-dhananjayromans-projects.vercel.app/',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'Book Inventory Management System',
      category: 'Productivity',
      description: 'A modern, responsive Book Inventory Management System built using React.js.This application allows users to add, view, edit, and delete books with a clean UI and smooth user experience.',
      image: '/images/book-app.png',
      techStack: [FaReact, FaNodeJs, FaDatabase],
      features: ['Task tracking', 'Team collaboration', 'Real-time updates', 'Analytics'],
      githubLink: 'https://github.com/dhananjayroman/book-inventory-task',
      liveLink: 'https://ornate-malabi-b759e7.netlify.app/',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 5,
      title: 'Portfolio Website(Old)',
      category: 'Personal',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance.',
      image: '/images/my-portfolio.png',
      techStack: [FaHtml5, FaCss3, FaJs],
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Dark mode'],
      githubLink: 'https://github.com/dhananjayroman/MyPortfolio',
      liveLink: 'https://my-portfolio-one-gules-85.vercel.app/',
      color: 'from-orange-600 to-red-600'
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const TechIcon = project.techStack[0];
    
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          ease: [0.6, -0.05, 0.01, 0.9]
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setHoveredCard(project.id)}
        onHoverEnd={() => setHoveredCard(null)}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gray-200 dark:border-gray-700"
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-bold drop-shadow-lg">{project.title}</h3>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: hoveredCard === project.id ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white text-center"
            >
              <FaSearchPlus className="text-3xl mb-2 mx-auto" />
              <p className="text-sm">View Details</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <div className="flex space-x-2">
              {project.techStack.slice(0, 3).map((Icon, techIndex) => (
                <Icon key={techIndex} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              ))}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex space-x-2">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2`}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm">Live</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/${selectedProject.title}/600/400.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            >
              <FaTimes />
            </motion.button>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{selectedProject.title}</h2>
              <p className="text-lg opacity-90 text-white">{selectedProject.category}</p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              {selectedProject.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedProject.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.techStack.map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-12 h-12 bg-gradient-to-r ${selectedProject.color} rounded-lg flex items-center justify-center text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg text-center flex items-center justify-center space-x-2 font-medium"
              >
                <FaGithub className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              <motion.a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 bg-gradient-to-r ${selectedProject.color} text-white px-6 py-3 rounded-lg text-center flex items-center justify-center space-x-2 font-medium`}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>View Live</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/dhananjayroman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal />
    </section>
  );
};

export default Projects;
