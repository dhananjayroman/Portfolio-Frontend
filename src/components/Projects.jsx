import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaShoppingCart,
  FaBuilding,
  FaTimes,
  FaCss3Alt,
  FaJs,
  FaHtml5
} from 'react-icons/fa';
import { staggerContainer, fadeUp, modalVariants } from '../animations/motionVariants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      id: 1,
      title: 'School Van Booking System',
      category: 'Transportation',
      description: 'Complete school van booking and management system with real-time tracking, online booking, and fleet management solutions.',
      image: '/images/schoolvan.png',
      techStack: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Database', icon: FaDatabase }
      ],
      features: ['Real-time tracking', 'Online booking', 'Fleet management', 'Payment integration'],
      githubLink: 'https://github.com/dhananjayroman/school-van-system',
      liveLink: 'https://schoolvan.example.com',
    },
    {
      id: 2,
      title: 'Real Estate Platform(Clone Airbnb)',
      category: 'Real Estate',
      description: 'Built a full-stack property listing application with Passport.js authentication, Mapbox interactive maps, Cloudinary image uploads, and RESTful CRUD operations for listings and reviews.',
      image: '/images/aibnb.jpg',
      techStack: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Database', icon: FaDatabase },
        { name: 'Mapbox', icon: FaBuilding }
      ],
      features: ['Property listings', 'Virtual tours', 'Agent management', 'Search filters'],
      githubLink: 'https://github.com/dhananjayroman/Wonderlust',
      liveLink: 'https://wonderlust-rust.vercel.app/listings',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'Full-featured e-commerce platform with product management, shopping cart, payment processing, and admin dashboard.',
      image: '/images/ecom.png',
      techStack: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Database', icon: FaDatabase },
        { name: 'Cart System', icon: FaShoppingCart }
      ],
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Admin dashboard'],
      githubLink: 'https://github.com/dhananjayroman/Ecom',
      liveLink: 'https://ecom-5grpmszs7-dhananjayromans-projects.vercel.app/',
    },
    {
      id: 4,
      title: 'Book Inventory Management System',
      category: 'Productivity',
      description: 'A modern, responsive Book Inventory Management System built using React.js.This application allows users to add, view, edit, and delete books with a clean UI and smooth user experience.',
      image: '/images/book-app.png',
      techStack: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Database', icon: FaDatabase }
      ],
      features: ['Task tracking', 'Team collaboration', 'Real-time updates', 'Analytics'],
      githubLink: 'https://github.com/dhananjayroman/book-inventory-task',
      liveLink: 'https://ornate-malabi-b759e7.netlify.app/',
    },
    {
      id: 5,
      title: 'Portfolio Website(Old)',
      category: 'Personal',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance.',
      image: '/images/my-portfolio.png',
      techStack: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJs }
      ],
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Dark mode'],
      githubLink: 'https://github.com/dhananjayroman/MyPortfolio',
      liveLink: 'https://my-portfolio-one-gules-85.vercel.app/',
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 lg:py-28 bg-white dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300"
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-900 rounded-2xl overflow-hidden hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {/* Image with fallback */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                        <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Project Demo</span>
                      </div>
                    `;
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200/40 dark:border-slate-800/40 text-slate-800 dark:text-slate-200 backdrop-blur-sm shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[10px] font-semibold tracking-wide uppercase text-slate-600 dark:text-slate-300 rounded-lg"
                    >
                      <tech.icon className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Action Links */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-sm transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition-colors duration-200 shadow-sm shadow-indigo-600/10"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mt-16"
        >
          <motion.a
            variants={fadeUp}
            href="https://github.com/dhananjayroman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/10 transition-all duration-200"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
            >
              {/* Header Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                        <span class="text-sm font-semibold text-indigo-650 dark:text-indigo-400">Project Demo</span>
                      </div>
                    `;
                  }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md focus:outline-none"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Contents */}
              <div className="p-4 xs:p-6 sm:p-8">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg mb-3">
                  {selectedProject.category}
                </span>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Key features checklist */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology list */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <div 
                        key={i}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-lg"
                      >
                        <tech.icon className="w-4 h-4 text-indigo-500" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-sm transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/10"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
