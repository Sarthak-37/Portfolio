import { useState, useEffect, useRef } from 'react';
import { HiHome, HiFolder, HiUser, HiPhone } from 'react-icons/hi';
import HeroSection from '../HeroSection';
import SkillsProject from '../SkillsProject';
import Contact from '../Contact';
import Services from '../Services';
const Navbar = () => {
  // Theme state: 'dark' or 'light'
  
  // Navbar visibility state (hidden by default)
  const [isVisible, setIsVisible] = useState(false);
  
  // Track last scroll position for scroll direction detection (use ref to avoid re-renders)
  const lastScrollY = useRef(0);


  // Handle scroll detection for showing/hiding navbar
  useEffect(() => {
    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;

      // If user scrolls up and we've scrolled past a small threshold, show navbar
      if (currentScrollY < lastScrollY.current && currentScrollY > 60) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down or near the top
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Smooth scroll to section by ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Navigation items configuration
  const navItems = [
    { id: 'hero', icon: HiHome, label: 'Home' },
    { id: 'projects', icon: HiFolder, label: 'Projects' },
    { id: 'services', icon: HiUser, label: 'Services' },
    { id: 'contact', icon: HiPhone, label: 'Contact' },
    
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        {/* Navbar Content with backdrop blur and rounded corners */}
        <div className="flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border transition-colors duration-300 bg-gray-900/80 border-gray-700/50 dark:bg-gray-900/80 dark:border-gray-700/50 light:bg-white/80 light:border-gray-200/50">
          
          {/* Section Navigation Icons */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="p-2.5 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 text-gray-300 hover:text-white hover:bg-gray-800/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50 light:text-gray-600 light:hover:text-gray-900 light:hover:bg-gray-100"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
            </button>
          ))}

          {/* Divider */}
          {/* <div className="w-px h-6 bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-300" /> */}

          {/* Theme Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 text-gray-300 hover:text-white hover:bg-gray-800/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50 light:text-gray-600 light:hover:text-gray-900 light:hover:bg-gray-100"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <HiSun className="w-5 h-5" />
            ) : (
              <HiMoon className="w-5 h-5" />
            )}
          </button> */}
        </div>
      </nav>

      {/* Demo Sections for Testing */}
      <div className="min-h-screen bg-gray-950 dark:bg-gray-950 light:bg-gray-50 transition-colors duration-300">
        <div id="hero">
        <HeroSection />
        </div>

        <div id="projects">
          <SkillsProject/>
        </div>

        

        <div id="services">
          <Services/>
        </div>

        <div id="contact">  
          <Contact/>
        </div>
      </div>
    </>
  );
};

export default Navbar;