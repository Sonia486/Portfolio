import { motion } from 'framer-motion'

// ========== CUSTOM SVG ICONS ==========
const GraduationCapIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.39 5.21c-.806.083-1.61.22-2.41.407m-15.482 0a50.697 50.697 0 0112.485 0"/>
  </svg>
)

const CalendarIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
)

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
)

export default function Education() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6 rounded-full"
          />
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 relative overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <GraduationCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-gray-400 text-sm">BSCS</p>
                </div>
              </div>

              <div className="space-y-3 pl-15">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPinIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">University of Sargodha (Affiliated College)</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <CalendarIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Currently Studying</span>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-full mt-4"
                >
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full w-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  />
                </motion.div>
                <p className="text-xs text-gray-500 text-center mt-2">In Progress</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}