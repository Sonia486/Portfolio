import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ResumePrint from './pages/ResumePrint'  // ← YEH ADD KARO

function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-inter relative overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume-print" element={<ResumePrint />} />  // ← YEH ADD KARO
      </Routes>
      <Footer />
    </div>
  )
}

export default App