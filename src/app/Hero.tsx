"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x: x * 20, y: y * 20 })
  }
  
  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Animated Background Mesh */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-float-slow" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" />
      </motion.div>

      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false)
          setMousePosition({ x: 0, y: 0 })
        }}
        style={{ 
          opacity,
          scale,
          rotateX: isHovering ? mousePosition.y : 0,
          rotateY: isHovering ? -mousePosition.x : 0,
        }}
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 perspective-1000"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide hover:border-white/20 transition-all duration-500 group cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Available for opportunities
          </span>
          <Sparkles size={14} className="text-green-400 group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>

        <h1 className="text-7xl md:text-9xl lg:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
          >
            Atif
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block gradient-text"
          >
            Awan
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          CS sophomore at UET Lahore, building 
          <span className="text-foreground font-medium mx-1">full-stack systems</span>
          and
          <span className="text-foreground font-medium mx-1">AI integrations</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_auto]" />
            <span className="relative z-10 text-white">View My Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm"
          >
            Get In Touch
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}