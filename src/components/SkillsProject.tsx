import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  SiReact, SiHtml5, SiCss3, SiJavascript, SiPython, SiMongodb,
  SiC, SiGithub, SiMongoose, SiMysql, SiPostgresql,
  SiTypescript, SiTailwindcss, SiBootstrap,
  SiDocker, SiPostman, SiFirebase, SiFlutter,
  SiCloudflare, SiGit, SiGooglecloud, SiRender, SiVercel, SiRedux
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';
// ===========================
// Skills Grid Component
// ===========================
// interface Skill {
//   name: string;
//   icon: string;
// }

type Skill = {
  name: string;
  icon: React.ReactElement; // Or React.ElementType
};

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 w-full max-w-2xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.05 },
              scale: { duration: 0.5, delay: index * 0.05 },
              y: {
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative w-full h-full rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 flex flex-col items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                borderColor: 'rgba(96, 165, 250, 0.6)',
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="text-3xl md:text-4xl mb-1">{skill.icon}</div>
              
              {/* Skill name on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 0.6 : 0,
                  y: hoveredIndex === index ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm"
              >
                <span className="text-xs md:text-sm font-medium text-white text-center px-2">
                  {skill.name}
                </span>
              </motion.div>

              {/* Animated glow on hover */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};

// ===========================
// ProjectTimeline Component
// ===========================
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

interface ProjectTimelineProps {
  projects: Project[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative h-full overflow-y-auto overflow-x-hidden pr-4 scrollbar-transparent scrollbar-track-transparent pl-5 pb-5">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800/50 ml-5" />
      
      {/* Animated progress line */}
      <motion.div 
        className="absolute left-0 top-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 shadow-lg shadow-blue-500/50 ml-5"
        style={{
          height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
        }}
      />

      <div className="space-y-16 pl-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Timeline point */}
      <motion.div 
        className="absolute -left-[55px] top-5.5 w-4 h-4 rounded-full border-2 border-gray-800 bg-gray-900"
        animate={isInView ? {
          borderColor: ['#3b82f6', '#8b5cf6', '#3b82f6'],
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.5)',
            '0 0 20px rgba(139, 92, 246, 0.8)',
            '0 0 10px rgba(59, 130, 246, 0.5)'
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Connecting beam */}
      <motion.div
        className="absolute -left-[46px] top-7 w-10 h-0.5 ml-2"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.div 
          className="w-full h-full bg-linear-to-r from-blue-500 to-transparent"
          animate={isInView ? {
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              '0 0 10px rgba(59, 130, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 1)',
              '0 0 10px rgba(59, 130, 246, 0.5)'
            ]
          } : { opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Project card */}
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-3 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-lato">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-4 leading-relaxed font-mono">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-merriweather"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group/link"
          >
            <span className="text-sm font-medium font-mono">View Project</span>
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ===========================
// Main Composition Component
// ===========================
const SkillsProject: React.FC = () => {
  const skills: Skill[] = [
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'C Programming', icon: <SiC color="#A8B9CC" /> },
  { name: 'Java', icon: <FaJava color="#007396" /> }, // Using generic icon for Java
  { name: 'GitHub', icon: <SiGithub color="#181717" /> },
  { name: 'Mongoose', icon: <SiMongoose color="#880000" /> },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
  { name: 'VS Code', icon: <SiGithub color="#007ACC" /> }, // Using generic icon for VS Code
  { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  { name: 'Power BI', icon: <FaDatabase color="#F2C811" /> }, // Using generic icon for Power BI
  { name: 'Data Analytics', icon: <FaDatabase color="#005C84" /> }, // Used a generic DB icon
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
  { name: 'Cloudflare', icon: <SiCloudflare color="#F38020" /> },
  { name: 'Git Bash', icon: <SiGit color="#F05032" /> }, // Used the Git logo
  { name: 'Google Cloud', icon: <SiGooglecloud color="#4285F4" /> },
  { name: 'Render', icon: <SiRender color="#46E3B7" /> },
  { name: 'Vercel', icon: <SiVercel color="#000000" /> },
  { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
];
  
  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'WellNest: Secure Wellness Session Platform',
      description: 'WellNest is a full-stack application designed to be a secure platform for wellness sessions. Users can register, log in, view public wellness sessions, and manage their own sessions (drafting, publishing, editing, and deleting). The platform emphasizes secure authentication, efficient session management, and an intuitive user interface',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Zustand', 'JWT',],
      link: 'https://well-nest-blush-six.vercel.app/login'
    },{
      id: '2',
      title: 'Complaint Management System',
      description: 'A secure grievance resolution platform that leverages custom Role-Based Access Control (RBAC) and a deterministic state machine to strictly govern access permissions and complaint lifecycles, ensuring zero unauthorized access and complete process integrity.',
      techStack: ['Typescript', 'React', 'JWT', 'cron', 'React-Toast','SendGrid' ],
      link: 'https://complaint-management-system-umber.vercel.app/auth'
    },
    {
      id: '3',
      title: 'Student\'s Achievement System',
      description: 'A full-stack onestop solution where college students can upload can keep track of thier achievements and College Faculties can analyse manage student records, reducing manual task and saving time..',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Zustand', 'JWT', 'Google OAuth'],
      link: 'https://students-achievements.vercel.app/login'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold 
          font-lato text-center mb-4 pb-4 bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-16 text-lg font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore my latest work and technical expertise
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left section - SkillsGrid (40%) */}
          <motion.div 
            className="lg:col-span-2 flex items-center justify-center min-h-[600px] lg:sticky lg:top-8 lg:self-start lg:h-screen"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SkillsGrid skills={skills} />
          </motion.div>

          {/* Right section - ProjectTimeline (60%) */}
          <motion.div 
            className="lg:col-span-3 min-h-[800px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProjectTimeline projects={sampleProjects} />
          </motion.div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.2);
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.4);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default SkillsProject;