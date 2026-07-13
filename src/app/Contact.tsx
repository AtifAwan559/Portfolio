"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import SpotlightCard from "@/components/SpotlightCard";

export default function Contact() {
  const sectionRef = useRef(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    } else {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }
  
  return (
    <section ref={sectionRef} className="relative">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-[120px]" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"
        />
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <TextReveal text="Let's Connect" />
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          <span className="text-foreground font-medium"> I'll get back to you</span> within 24 hours.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 space-y-4"
        >
          {/* Email Card */}
          <SpotlightCard className="p-6 group">
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0 text-2xl"
              >
                ✉️
              </motion.div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:awanatif237@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors group/link flex items-center gap-2">
                  awanatif237@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">Send me an email anytime</p>
              </div>
            </div>
          </SpotlightCard>
          
          {/* Location Card */}
          <SpotlightCard className="p-6 group">
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 shrink-0 text-2xl"
              >
                📍
              </motion.div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg font-medium">Lahore, Pakistan</p>
                <p className="text-sm text-gray-500 mt-1">Available for opportunities</p>
              </div>
            </div>
          </SpotlightCard>
          
          {/* Social Links */}
          <SpotlightCard className="p-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect Online</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://linkedin.com/in/atif-awan"
                target="_blank"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:text-blue-400 transition-all duration-300"
              >
                <span className="text-xl">💼</span>
              </motion.a>
              <motion.a
                href="https://github.com/AtifAwan559"
                target="_blank"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:text-sky-400 transition-all duration-300"
              >
                <span className="text-xl">💻</span>
              </motion.a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <SpotlightCard className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors">
                  Subject
                </label>
                <input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all placeholder:text-gray-600"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="group">
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all resize-none placeholder:text-gray-600"
                  placeholder="I'd like to talk about..."
                  required
                />
              </div>
              
              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3"
                >
                  <span className="text-xl">✅</span>
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3"
                >
                  <span className="text-xl">⚠️</span>
                  <span className="text-sm">Please fill in all required fields.</span>
                </motion.div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'sending'}
                className="relative w-full p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed animate-gradient"
                type="submit"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}