"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])
  
  return (
    <section ref={ref} className="relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section with Parallax */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative group">
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl rounded-full group-hover:blur-[120px] transition-all duration-1000 animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <motion.div 
              style={{ 
                y: imageY, 
                scale: imageScale,
                rotate: imageRotate
              }}
              className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border-2 border-white/10 bg-white/[0.02] p-3 shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden flex items-center justify-center relative">
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
                
                <img src="/avatar.png" alt="Profile avatar" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                
                {/* Hover Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">10+ Years of Excellence</p>
                  <p className="text-gray-300 text-xs mt-1">Building digital solutions worldwide</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="space-y-10"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              <TextReveal text="About Me" />
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl text-foreground font-light leading-relaxed"
            >
              I am a CS sophomore at <span className="gradient-text-blue font-medium">UET Lahore</span>, with hands-on experience across full-stack development, AI/LLM integration, and systems programming.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              I've built 7+ end-to-end projects spanning React, Python, MERN, and C++, demonstrating a consistent ability to design, build, and deploy complete software systems independently.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-muted-foreground/80"
            >
              <span className="text-blue-400 font-medium">🚀 7+ Major Projects</span> delivered across various domains including AI, Web, and Mobile Development.
            </motion.p>
          </div>

          {/* Stats Grid with Enhanced Animation */}
          <div className="pt-6 grid grid-cols-2 gap-6">
            {[
              { value: 7, suffix: "+", label: "Projects Built", color: "text-blue-400", gradient: "from-blue-500/20 to-blue-600/20" },
              { value: 4, suffix: "", label: "Certifications", color: "text-purple-400", gradient: "from-purple-500/20 to-purple-600/20" },
              { value: 12, suffix: "+", label: "Technologies", color: "text-pink-400", gradient: "from-pink-500/20 to-pink-600/20" },
              { value: 3.8, suffix: "", label: "Current GPA", color: "text-indigo-400", gradient: "from-indigo-500/20 to-indigo-600/20" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${stat.gradient} hover:border-white/20 transition-all duration-500 group`}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 origin-left`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </div>
                {/* Animated Progress Bar */}
                <motion.div 
                  className="mt-3 h-0.5 bg-white/10 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                >
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${stat.color.replace("text-", "from-")} to-transparent`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}