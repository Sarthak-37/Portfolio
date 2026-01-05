import React, { useState, useEffect } from 'react';
import { Download} from 'lucide-react';

const Header: React.FC = () => {
  // State for current time
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS (24-hour format)
  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  // Get contextual greeting based on time of day
  const getGreeting = (date: Date): string => {
    const hour = date.getHours();
    
    if (hour >= 5 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  // Handle resume download/action
  const handleResumeClick = () => {
    // Replace with your actual resume URL or download logic
    console.log('Resume clicked');
    // window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <header className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left Section: Brand Name */}
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold font-lato text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-300 cursor-pointer tracking-tight">
              Sarthak.dev
            </h1>
          </div>

          {/* Center Section: Live Clock with Greeting */}
          <div className="hidden md:flex flex-col flex-1 px-4 ml-4">
            <div className="text-2xl font-mono font-semibold text-gray-100 tabular-nums tracking-wider">
              {formatTime(currentTime)}
            </div>
            <div className="text-xs text-gray-400 mt-1 font-medium font-merri">
              {getGreeting(currentTime)}
            </div>
          </div>

          {/* Right Section: Avatar & Resume Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Avatar */}
            {/* <div className="relative group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 ring-2 ring-gray-700 hover:ring-purple-400">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Profile
              </div>
            {/*</div> */}

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline font-semibold font-fira"><a href="https://drive.google.com/file/d/1g9ktyAcgtfJpmaqVhFo3hzxVgM0PluJK/view?usp=sharing">Resume</a></span>
            </button>
          </div>
        </div>

        {/* Mobile Clock Section (visible only on small screens) */}
        <div className="md:hidden flex flex-col items-center pb-3 border-t border-gray-700 pt-3">
          <div className="text-xl font-mono font-semibold text-gray-100 tabular-nums tracking-wider">
            {formatTime(currentTime)}
          </div>
          <div className="text-xs text-gray-400 mt-1 font-medium">
            {getGreeting(currentTime)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;