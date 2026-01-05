import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail} from 'lucide-react';
import { motion } from 'framer-motion';
import photo from "../assets/photo.png";
import styles from './HeroSection.module.css';
``
const HeroSection: React.FC = () => {
  // Typewriter state for intro text
  const [introText, setIntroText] = useState('');
  const [nameText, setNameText] = useState('');
  const fullIntro = 'Hi, I am';
  const fullName = 'Sarthak Pramod Mhatre';

  // Dynamic role rotation
  const roles = ['Software Developer', 'Web Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for intro and name
  useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;

    if (introText.length < fullIntro.length) {
      timeout = setTimeout(() => {
        setIntroText(fullIntro.slice(0, introText.length + 1));
      }, 100);
    } else if (nameText.length < fullName.length) {
      timeout = setTimeout(() => {
        setNameText(fullName.slice(0, nameText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [introText, nameText]);

  // Dynamic role typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
  let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && roleText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setRoleText(currentRole.slice(0, roleText.length + 1));
      }, 100);
    } else if (!isDeleting && roleText.length === currentRole.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && roleText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setRoleText(roleText.slice(0, -1));
      }, 50);
    } else if (isDeleting && roleText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, currentRoleIndex]);

  // Social links data
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sarthak-37', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-mhatre-4875b42a2/', label: 'LinkedIn' },
  ];

  return (
  <section className=" font-lato bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-12 py-12 pb-40">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Section - 60% width */}
        <div className="flex-1 lg:w-3/5 space-y-3">
          {/* Text Content */}
          <div className="space-y-4 font-merri">
            {/* Intro Text */}
            <p className="text-l md:text-xl font-lato text-gray-400 font-light">
              {introText}
              <span className="animate-pulse">|</span>
            </p>

            {/* Name with Gradient */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lato leading-tight">
              <span className="bg-blue-300 bg-clip-text text-transparent">
                {nameText}
              </span>
              {/* {nameText.length === fullName.length && (
                // <span className="animate-pulse text-cyan-400">|</span>
              )} */}
            </h1>

            {/* Dynamic Role */}
            <div className="text-l md:text-xl lg:text-2xl text-gray-300 font-medium font-lato h-12">
              and I am a &nbsp;
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-lato">
              {roleText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
              
            </div>

            {/* Description */}
            <p className="text md:text-xl font-mono text-gray-400 max-w-2xl leamding-relaxed mt-6">
              Crafting innovative digital experiences with modern technologies.
              Passionate about building scalable applications and bringing ideas to life.
            </p>

            {/* Contact Me Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-linear-to-r font-fira from-cyan-500 to-blue-500 rounded-xl text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative"
              >
                <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - 40% width */}
        <div className="flex-1 lg:w-2/5 flex items-center justify-center">
          <div className="relative group">
            {/* Background Free-form Blob Shape - Reduced opacity */}
            <div className="absolute -inset-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 transform scale-110 blur-2xl"></div>
            </div>

            {/* Secondary Blob Layer - Reduced opacity */}
            <div className="absolute -inset-8 opacity-15 group-hover:opacity-25 transition-all duration-1000">
              <div className="w-full h-full bg-linear-to-tr from-purple-500 via-pink-500 to-cyan-400 transform rotate-45 scale-125 blur-xl rounded-full"></div>
            </div>

            {/* Animated Magic Border Glow - Reduced effect */}
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-lg group-hover:opacity-50 group-hover:blur-xl transition-all duration-500"></div>
            
            {/* Outer Border Ring - Subtle effect */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            {/* Main Image Container with Organic Shape */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-linear-to-br from-gray-800 via-gray-900 to-black transform transition-all duration-500 group-hover:scale-105 shadow-2xl">
              {/* Avatar Image */}
              <img
                src={photo}
                alt="Sarthak Pramod Mhatre"
                className={`w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 ${styles.waveAnimation}`}
              />
              
              {/* Multi-layered Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Subtle Highlight Glow */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-700"></div>
            </div>

            {/* Reduced Outer Pulsing Glow Effect */}
            <div className="absolute -inset-6 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700"></div>
            
            {/* Reduced Far Background Ambient Glow */}
            <div className="absolute -inset-16 rounded-full bg-linear-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-1000"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;