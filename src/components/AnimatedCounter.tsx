"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ 
  target, 
  suffix = "", 
  duration = 2, 
  className = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target, duration])
  
  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}