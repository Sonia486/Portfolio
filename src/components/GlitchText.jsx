import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function GlitchText({ text, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

  useEffect(() => {
    let iteration = 0
    const finalText = text
    const interval = setInterval(() => {
      setDisplayed(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return char
            if (index < iteration / 2.5) return finalText[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      if (iteration >= finalText.length * 2.5) {
        setIsComplete(true)
        setDisplayed(finalText)
        clearInterval(interval)
      }
      iteration += 0.5
    }, 30)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className={`relative inline-block ${className}`}>
      {displayed}
      {!isComplete && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-gradient-to-b from-purple-400 to-cyan-400 ml-1 align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
      {isComplete && (
        <motion.span
          className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-sm -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </span>
  )
}