'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'
import { ThemeToggle } from '@/components'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax background values
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200])
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3])
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.3 }
    )
    
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Custom cursor tracking
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)
    
    window.addEventListener('mousemove', moveCursor)
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Custom Cursors */}
      <div 
        className="custom-cursor hidden md:block"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(59, 130, 246, 0.4)',
          width: isHovering ? '40px' : '32px',
          height: isHovering ? '40px' : '32px',
        }}
      />
      <div 
        className="custom-cursor-dot hidden md:block"
        style={{
          transform: `translate(${cursorPosition.x - 3}px, ${cursorPosition.y - 3}px)`,
          opacity: isHovering ? 0 : 1,
        }}
      />
      
      <ScrollProgress />
      
      {/* Noise Texture */}
      <div className="noise-overlay" />
      
      {/* Animated Background with Parallax */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[150px] animate-float-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[150px] animate-float-slow" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-600/5 blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] left-[30%] w-[30%] h-[30%] rounded-full bg-pink-600/5 blur-[100px] animate-float-delayed" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </motion.div>

      {/* Navigation with Glass Morphism */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"
            />
          </motion.div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative transition-all duration-300 ${
                    activeSection === link.href.slice(1) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48 py-20 md:py-32">
          <section id="about" className="scroll-mt-32">
            <About />
          </section>
          
          <section id="projects" className="scroll-mt-32">
            <Projects />
          </section>
          
          <section id="skills" className="scroll-mt-32">
            <Skills />
          </section>
          
          <section id="education" className="scroll-mt-32">
            <Education />
          </section>
          
          <section id="contact" className="scroll-mt-32">
            <Contact />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}