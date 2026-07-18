import { motion } from 'framer-motion'

// ========== CUSTOM SVG ICONS ==========
const CodeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <CodeIcon className="w-5 h-5 text-purple-400" />
          <span className="font-poppins font-bold gradient-text">Sonia Shehzadi</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 text-sm"
        >
          Frontend React Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 text-xs"
        >
          © 2026 All Rights Reserved
        </motion.p>
      </div>
    </footer>
  )
}