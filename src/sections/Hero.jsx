import { motion } from 'framer-motion'
import GlitchText from '../components/GlitchText'

// ========== CUSTOM SVG ICONS ==========
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const DownloadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
)

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)

const SparklesIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
  </svg>
)

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Hero() {
  // Function to download resume
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sonia_Shehzadi_Resume.pdf' // File name when downloaded
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Hi, I'm */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <motion.div 
              className="w-12 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <span className="text-cyan-400 font-poppins text-sm tracking-[0.3em] uppercase">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name with Glow Effect */}
          <motion.div variants={itemVariants} className="relative">
            <motion.h1
              className="font-poppins text-5xl md:text-7xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-white relative">
                Sonia
                <motion.span
                  className="absolute -inset-2 bg-purple-500/20 blur-2xl rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>{' '}
              <span className="gradient-text relative">
                Shehzadi
                <motion.span
                  className="absolute -inset-2 bg-cyan-500/20 blur-2xl rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </span>
            </motion.h1>
          </motion.div>

          {/* Title with Typing Effect */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <SparklesIcon className="w-5 h-5 text-purple-400" />
            </motion.div>
            <h2 className="font-poppins text-xl md:text-2xl text-gray-300 tracking-wide">
              <GlitchText text="Frontend React Developer" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base"
          >
            I build modern, responsive, and user-friendly web applications using React, 
            JavaScript, HTML, and CSS. I enjoy creating clean interfaces and interactive 
            user experiences while continuously improving my development skills.
          </motion.p>

          {/* Buttons with Hover Effects */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-poppins font-semibold text-sm flex items-center gap-2 overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <ExternalLinkIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </motion.a>
            
            {/* Download Resume Button - NOW DOWNLOADS FILE */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-card rounded-xl font-poppins font-semibold text-sm flex items-center gap-2 hover:border-purple-400/50 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <DownloadIcon className="w-4 h-4" />
              Download Resume
            </motion.button>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-card rounded-xl font-poppins font-semibold text-sm flex items-center gap-2 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <MailIcon className="w-4 h-4" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons with Bounce Effect */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
            {[
              { icon: GitHubIcon, href: 'https://github.com/Sonia486', label: 'GitHub', color: 'hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
              { icon: LinkedInIcon, href: 'https://linkedin.com/in/sonia-shehzadi', label: 'LinkedIn', color: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
              { icon: MailIcon, href: 'mailto:soniashehzadi379@gmail.com', label: 'Email', color: 'hover:text-pink-400 hover:border-pink-400/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.15, type: 'spring', stiffness: 200 }}
                className={`w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Illustration */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[450px] h-[450px] border border-purple-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[380px] h-[380px] border border-cyan-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[300px] h-[300px] border border-purple-400/20 rounded-full"
          />

          {/* Pulsing Glow Behind Image */}
          <motion.div
            className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Center Avatar - Anime Girl Image */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-purple-500/30"
            style={{
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(34, 211, 238, 0.2)',
            }}
          >
            <img 
              src="/anime-girl.png" 
              alt="Sonia Shehzadi" 
              className="w-full h-full object-cover"
            />
            
            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(45deg, transparent 40%, rgba(168, 85, 247, 0.3) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 200%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Floating Tech Badges */}
          {[
            { tech: 'React', color: 'text-purple-400 border-purple-400/30', top: '15%', left: '5%' },
            { tech: 'JS', color: 'text-yellow-400 border-yellow-400/30', top: '25%', left: '80%' },
            { tech: 'CSS', color: 'text-cyan-400 border-cyan-400/30', top: '70%', left: '8%' },
            { tech: 'HTML', color: 'text-orange-400 border-orange-400/30', top: '80%', left: '75%' },
          ].map((item, i) => (
            <motion.div
              key={item.tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.2, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`absolute glass-card px-4 py-2 rounded-lg text-xs font-mono font-bold ${item.color} border cursor-default`}
              style={{
                top: item.top,
                left: item.left,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.sin(i) * 8, 0],
              }}
              transition={{
                y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {'</>'} {item.tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
          animate={{ borderColor: ['rgba(168,85,247,0.5)', 'rgba(34,211,238,0.5)', 'rgba(168,85,247,0.5)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}