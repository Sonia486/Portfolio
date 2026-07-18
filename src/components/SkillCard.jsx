import { motion } from 'framer-motion'

export default function SkillCard({ icon: Icon, name, delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ 
        scale: 1.08, 
        y: -8,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="glass-card p-6 flex flex-col items-center gap-3 group cursor-default relative overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      
      {/* Icon with Rotation */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Icon className="w-10 h-10 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
      </motion.div>
      
      {/* Name with Slide Up */}
      <motion.span 
        className="font-poppins font-medium text-sm text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10"
      >
        {name}
      </motion.span>

      {/* Bottom Glow Line */}
      <motion.div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        whileHover={{ width: '60%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}