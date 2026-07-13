"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  
  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  )
}