import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 25%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      )
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <ParticleBackground />
      <CustomCursor />
      
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
