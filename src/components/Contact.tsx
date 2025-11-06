import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ContactInfo Component
const ContactInfo: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });

  const contactDetails = [
    { label: 'Name', value: 'Sarthak Mhatre', icon: '👤' },
    { label: 'Email', value: 'mhatresarthakwork37@gmail.com', icon: '✉️', link: 'mhatresarthakwork37@gmail.com' },
    { label: 'Phone', value: '7350279276', icon: '📞', link: 'tel:+15551234567' },
    { label: 'Location', value: 'Chawl no.11 Veer Jijamata Nagar, Duleep Singh Margh, Mahul Village-400074', icon: '🗺️' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Sarthak-37', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sarthak-mhatre-4875b42a2/', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    // { name: 'Twitter', url: 'https://twitter.com', icon: (
    //   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    //   </svg>
    // )},
  ];

  return (
    <div ref={ref} className="relative h-full flex flex-col justify-center p-8 lg:p-16 font-merri">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0]
        } : { opacity: 0, scale: 0.5 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0]
        } : { opacity: 0, scale: 0.5 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-lato">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-l mb-12 max-w-md font-mono">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 mb-12 font-mono">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                {detail.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{detail.label}</p>
                {detail.link ? (
                  <a href={detail.link} className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// ContactForm Component
const ContactForm: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: '', email: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div ref={ref} className="relative h-full flex items-center justify-center p-8 lg:p-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        {!isSuccess ? (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 font-lato">Send a Message</h3>
            
            {/* Full Name */}
            <div className="relative">
              <motion.input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className={`w-full px-6 py-4 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-blue-500/30'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all font-mono`}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 ml-2"
                >
                  {errors.fullName}
                </motion.p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className={`w-full px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-blue-500/30'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all font-mono`}
                placeholder="Email Address"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 ml-2"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                rows={5}
                className={`w-full px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-blue-500/30'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all resize-none font-mono`}
                placeholder="Your Message"
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 ml-2"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden font-lato"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                />
              ) : (
                'Send Message'
              )}
              
              {isSubmitting && (
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              )}
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-linear-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// Main ContactSection Component
const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Main Halo Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent" />
      
      {/* Grid Layout */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Contact Info */}
        <ContactInfo />
        
        {/* Right Side - Contact Form */}
        <ContactForm />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Contact;