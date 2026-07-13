"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUp, Heart } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  
  const { scrollYProgress } = useScroll()
  const buttonScale = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <footer className="relative z-10 border-t border-white/10 py-16 text-center mt-20">
      <motion.button
        onClick={scrollToTop}
        style={{ scale: buttonScale, opacity: buttonOpacity }}
        whileHover={{ y: -6, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/30 transition-all duration-300 group"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          &copy; {new Date().getFullYear()} Atif Awan.
          <span className="hidden md:inline">Built with passion</span>
          <Heart size={14} className="text-red-500 animate-pulse inline" />
        </p>
        
        <div className="flex gap-10">
          {[
            { label: 'GitHub', href: 'https://github.com/AtifAwan559' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/atif-awan' }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              whileHover={{ y: -3 }}
              className="text-sm text-gray-500 hover:text-foreground transition-colors relative group"
            >
              {social.label}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}