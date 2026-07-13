import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { staggerContainer, fadeUp } from '../animations/motionVariants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'romandhananjay01@gmail.com',
      href: 'mailto:romandhananjay01@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8600757587',
      href: 'tel:+918600757587',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bhor, Pune, Maharashtra',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/Dhananjay-Roman', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/dhananjayroman', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/roman.dhananjay_30', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/DhananjayRoman', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/8600757587?text=Hello%20Dhananjay', label: 'WhatsApp' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `Hello, my name is ${formData.name}.\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918600757587?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Optional: Send SMS via backend API
    try {
      const response = await fetch('http://localhost:5000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          to: '+918600757587',
          message: `New contact from ${formData.name}: ${formData.message}`
        })
      });
      
      if (response.ok) {
        console.log('SMS sent successfully');
      }
    } catch (error) {
      console.log('SMS API not available:', error.message);
    }
    
    // Show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Reset status after 4 seconds
    setTimeout(() => setSubmitStatus(''), 4000);
  };

  return (
    <section 
      id="contact" 
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"
          />
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I'm available for freelance work, full-time positions, and collaborations. 
                Feel free to reach out through any of the following channels:
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  variants={fadeUp}
                  key={idx}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl hover:border-indigo-500/50 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {info.label}
                    </span>
                    <span className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 truncate">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-sm transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Prompt Quick Info Box */}
            <motion.div variants={fadeUp} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Quick Whatsapp Connection
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Skip the form entirely and chat with me directly on WhatsApp for an immediate response:
              </p>
              <a
                href="https://wa.me/8600757587?text=Hello%20Dhananjay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm transition-colors duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-900 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send Message
              </h3>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-xl text-sm text-emerald-700 dark:text-emerald-400"
                  >
                    Thank you for your message! The WhatsApp portal has been opened, and the draft is ready for you.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-0 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-0 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-0 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 transition-colors"
                    placeholder="Project inquiry / collaboration / hello"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-0 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 transition-colors resize-none"
                    placeholder="Tell me more details about your inquiry..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-md shadow-indigo-600/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
