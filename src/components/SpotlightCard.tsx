"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ReactNode } from "react"

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99,102,241,0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}