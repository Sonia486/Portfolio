import { motion } from 'framer-motion'

// ========== CUSTOM SVG ICONS ==========
const LightbulbIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
  </svg>
)

const ZapIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
)

const RocketIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16 8l2-2"/>
  </svg>
)

const reasons = [
  {
    icon: LightbulbIcon,
    title: 'Clean UI',
    description: 'I design pixel-perfect, modern interfaces that are visually appealing and easy to navigate.',
    color: 'from-purple-500 to-pink-500',
    delay: 0,
  },
  {
    icon: ZapIcon,
    title: 'Responsive Design',
    description: 'Every project I build works flawlessly across all devices - mobile, tablet, and desktop.',
    color: 'from-cyan-500 to-blue-500',
    delay: 0.2,
  },
  {
    icon: RocketIcon,
    title: 'React Development',
    description: 'I create dynamic, interactive web apps using modern React with smooth animations.',
    color: 'from-purple-500 to-cyan-500',
    delay: 0.4,
  },
]

export default function WhyHireMe() {
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
            Why <span className="gradient-text">Hire Me?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reason.delay }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
              }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}
                >
                  <reason.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="font-poppins font-bold text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {reason.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}