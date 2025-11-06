
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  tagline?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  brandName = "Sarthak Mhatre",
  tagline = "Crafting digital experiences with code & creativity",
  socialLinks = {
    github: "https://github.com/Sarthak-37",
    linkedin: "https://www.linkedin.com/in/sarthak-mhatre-4875b42a2/",
  }
}) => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const socials: SocialLink[] = [
    { icon: <Github className="w-5 h-5" />, href: socialLinks.github || "https://github.com/Sarthak-37", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: socialLinks.linkedin || "https://www.linkedin.com/in/sarthak-mhatre-4875b42a2/", label: "LinkedIn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer 
      ref={footerRef}
    className="relative bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* PART 1: BRAND / IDENTITY */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 blur-xl opacity-50 rounded-lg"></div>
              <h3 className="relative text-3xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-lato">
                {brandName}
              </h3>
            </motion.div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-mono">
              {tagline}
            </p>
          </motion.div>

          {/* PART 2: QUICK NAVIGATION */}

          {/* PART 3: SOCIAL ICONS */}
          <motion.div variants={itemVariants} className="md:ml-auto">
            <h4 className="text-lg font-semibold mb-6 text-slate-200 font-merri">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ 
                    y: -8,
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 group-hover:border-purple-500 transition-all duration-300 group-hover:bg-slate-800/80">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* LOWER FOOTER STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative pt-8"
        >
          {/* Glowing Divider */}
          <div className="relative mb-6 h-px">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-30 blur-sm"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-mono">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {brandName} — All Rights Reserved.
            </p>
            <p className="text-center sm:text-right flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Built with passion & precision
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;