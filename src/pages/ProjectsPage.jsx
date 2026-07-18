import { motion } from 'framer-motion'
import BackgroundAnimation from '../components/BackgroundAnimation'

// ========== CUSTOM SVG ICONS ==========
const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const GlobeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>
)

const projects = [
  {
    id: 1,
    name: 'Galaxy Explorer',
    tech: 'React + Framer Motion',
    description: 'Modern space exploration website with animations, OTP authentication, and responsive design.',
    github: 'https://github.com/Sonia486/FinalProject',
    live: 'https://reactfinal-project.netlify.app/',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Student Study Hub',
    tech: 'React',
    description: 'Educational platform for students with modern UI and responsive design.',
    github: 'https://github.com/Sonia486',
    live: 'https://meek-marshmallow-5bc2df.netlify.app/',
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    tech: 'React + Framer Motion',
    description: 'Personal developer portfolio with smooth animations, dark theme, and responsive design.',
    github: 'https://github.com/Sonia486',
    live: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    name: 'Mini Project',
    tech: 'JavaScript',
    description: 'Interactive JavaScript application showcasing DOM manipulation and modern ES6+ features.',
    github: 'https://github.com/Sonia486/MiniProject',
    live: 'https://sonia486.github.io/MiniProject/',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 5,
    name: 'CV / Resume',
    tech: 'HTML + CSS',
    description: 'Professional CV built with pure HTML and CSS, fully responsive and print-friendly.',
    github: 'https://github.com/Sonia486/CV',
    live: 'https://sonia486.github.io/CV/',
    color: 'from-green-500 to-teal-500',
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-12 px-6">
      <BackgroundAnimation />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6 rounded-full"
          />
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Here are some of my recent works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 relative overflow-hidden group flex flex-col"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Project Number */}
              <div className="absolute top-4 right-4 font-poppins text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                0{project.id}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Tech Badge */}
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-xs font-medium text-white mb-4 w-fit`}>
                  {project.tech}
                </div>

                {/* Project Name */}
                <h3 className="font-poppins text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* Live Demo Button */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} transition-all`}
                  >
                    <GlobeIcon className="w-4 h-4" />
                    Live Demo
                    <ExternalLinkIcon className="w-3 h-3" />
                  </motion.a>

                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Corner Glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}