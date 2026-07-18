import { useEffect } from 'react'

export default function ResumePrint() {
  
  // Page load hone pe 1 second baad print dialog khule
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 md:p-12 max-w-4xl mx-auto relative">
      
      {/* Print Button - PDF mein nahi dikhega */}
      <button 
        onClick={() => window.print()}
        className="fixed top-4 right-4 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors print:hidden z-50"
      >
        🖨️ Print / Save PDF
      </button>

      {/* Header */}
      <div className="text-center border-b-4 border-purple-600 pb-6 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700">Sonia Shehzadi</h1>
        <p className="text-xl text-gray-600 mt-2 font-medium">Frontend React Developer</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
          <span>📧 soniashehzadi379@gmail.com</span>
          <span>📱 0323-7710867</span>
          <span>🐙 github.com/Sonia486</span>
          <span>🔗 linkedin.com/in/sonia-shehzadi</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate Frontend Developer specializing in React.js with expertise in building 
          modern, responsive, and interactive web applications. Skilled in creating 
          visually stunning user interfaces with animations and smooth user experiences. 
          Experienced in full-stack deployment using Netlify and Railway.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <span className="font-bold text-purple-800">Frontend:</span>
            <span className="text-gray-700"> React.js, JavaScript (ES6+), HTML5, CSS3</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <span className="font-bold text-purple-800">Styling:</span>
            <span className="text-gray-700"> Tailwind CSS, Framer Motion, Responsive Design</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <span className="font-bold text-purple-800">Tools:</span>
            <span className="text-gray-700"> Git, GitHub, VS Code, npm</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <span className="font-bold text-purple-800">Deployment:</span>
            <span className="text-gray-700"> Netlify, Railway, REST APIs</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
          Projects
        </h2>
        
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">Galaxy Explorer</h3>
            <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Live Project</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Tech:</span> React.js | Tailwind CSS | Framer Motion | Node.js | Railway | Netlify
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Space-themed interactive web application with multiple pages</li>
            <li>Features: OTP-based password reset, user authentication, animated UI</li>
            <li>Deployed frontend on Netlify and backend API on Railway</li>
            <li>Responsive design with particle animations and glass-morphism effects</li>
          </ul>
        </div>

        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">Personal Portfolio</h3>
            <span className="text-sm text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">Live Project</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Tech:</span> React.js | Tailwind CSS | Framer Motion | Vite
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Animated portfolio website with glitch text effects</li>
            <li>Responsive design with space particle animations</li>
            <li>Interactive UI with smooth scroll and hover effects</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
          Education
        </h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">University Name</p>
            </div>
            <span className="text-sm text-purple-600 bg-white px-3 py-1 rounded-full border border-purple-200">
              2022 - 2026
            </span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
          Certifications
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-purple-500">✓</span>
            Frontend Development - React (Online Course)
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-purple-500">✓</span>
            JavaScript Fundamentals
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mt-12 pt-6 border-t-2 border-gray-200">
        <p>This resume was generated from my interactive portfolio website</p>
        <p className="mt-1">🔗 reactfinal-project.netlify.app</p>
      </div>
      
    </div>
  )
}