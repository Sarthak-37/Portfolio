'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Front-End Developer',
    description:
      'Crafting pixel-perfect, responsive user interfaces with React.js, TypeScript, and Tailwind CSS. Specialized in building performant SPAs with modern component architecture and state management solutions.',
    deliverables: [
      'Responsive web applications',
      'Component libraries',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
    icon: '⚛️',
    direction: { x: -100, y: -100 },
  },
  {
    title: 'Full-Stack Developer',
    description:
      'End-to-end application development using MERN stack (MongoDB, Express.js, React, Node.js). Architecting scalable backends with RESTful APIs and seamless frontend-backend integration.',
    deliverables: [
      'Full-stack web apps',
      'Database design',
      'API development',
      'Authentication systems',
    ],
    icon: '🚀',
    direction: { x: 0, y: -100 },
  },
  {
    title: 'UI/UX Engineer',
    description:
      'Bridging design and development with Tailwind CSS and Framer Motion to create intuitive, animated interfaces. Transforming Figma designs into production-ready, accessible code.',
    deliverables: [
      'Interactive prototypes',
      'Design system implementation',
      'Micro-interactions',
      'Accessibility compliance',
    ],
    icon: '🎨',
    direction: { x: 100, y: -100 },
  },
  {
    title: 'Software Developer',
    description:
      'Building robust, scalable software solutions with clean code principles and best practices. Expertise in algorithm optimization, system design, and delivering high-quality production applications.',
    deliverables: [
      'Custom software solutions',
      'Code optimization',
      'System architecture',
      'Quality assurance',
    ],
    icon: '💻',
    direction: { x: 0, y: 100 },
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2 
          className={`text-5xl md:text-6xl font-semibold font-fira text-center mb-4 from-blue-400 via-purple-400 to-blue-400 ${styles.gradientToRight} ${styles.gradientClipText}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services I Offer
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-16 text-lg font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive development solutions tailored to bring your digital vision to life
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0, 
                x: service.direction.x,
                y: service.direction.y,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${styles.gradientToBottomRight}`} />
              
              {/* Card Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-colors duration-300"
              >
                {/* Animated beam border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Icon with floating animation */}
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`text-2xl font-bold font-fira mb-3 from-blue-400 to-purple-400 ${styles.gradientToRight} ${styles.gradientClipText}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed font-mono">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-3">
                  <p className="text-xs font-medium text-blue-300 uppercase tracking-wider font-merri">
                    Key Deliverables
                  </p>
                  <div className="flex flex-wrap gap-2 font-lato">
                    {service.deliverables.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Pulsing glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 pointer-events-none ${styles.gradientToBottomRight}`}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient background effect */}
      <div className={`fixed inset-0 from-blue-500/5 via-purple-500/5 to-transparent blur-3xl pointer-events-none -z-10 ${styles.gradientRadial}`} />
    </section>
  );
};

export default Services;