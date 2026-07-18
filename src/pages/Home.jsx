import BackgroundAnimation from '../components/BackgroundAnimation'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Education from '../sections/Education'
import WhyHireMe from '../sections/WhyHireMe'

export default function Home() {
  return (
    <div className="relative">
      <BackgroundAnimation />
      <Hero />
      <Skills />
      <Education />
      <WhyHireMe />
    </div>
  )
}