"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const words = text.split(" ")
  
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: "110%", rotate: 3 }}
            animate={isInView ? { y: 0, rotate: 0 } : { y: "110%", rotate: 3 }}
            transition={{ 
              duration: 0.7, 
              delay: delay + i * 0.08, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}