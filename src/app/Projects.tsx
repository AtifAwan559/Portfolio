"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    } 
  }
};

const projects = [
  {
    title: "LabSyncAI",
    description: "Built a full-stack web application to manage lab budgets with AI integration; clients submit natural language prompts to perform budget operations.",
    tech: ["React", "Node.js", "Python", "Groq API", "Telegram"],
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-600/20 via-cyan-600/20 to-blue-600/20",
    metrics: { type: "Full Stack", ai: "Groq LLM", year: "2025" }
  },
  {
    title: "Custom DB Engine",
    description: "Designed and implemented a custom database engine from scratch with indexing, a search engine, and a custom query parser.",
    tech: ["Python", "Streamlit", "Data Structures", "Parsing"],
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-600/20 via-pink-600/20 to-purple-600/20",
    metrics: { type: "Systems", logic: "Custom SQL", year: "2025" }
  },
  {
    title: "VVIP Route System",
    description: "Engineered a route management system applying advanced DSA concepts (graphs, shortest path) to optimize VVIP convoy routes.",
    tech: ["Python", "DSA", "Streamlit", "Graphs"],
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-600/20 via-red-600/20 to-orange-600/20",
    metrics: { type: "Algorithms", dsa: "Shortest Path", year: "2024" }
  },
  {
    title: "MERN Cars Platform",
    description: "Developed a full-stack car dealership platform with features for listing, buying, and selling vehicles, including role-based access control.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-600/20 via-emerald-600/20 to-green-600/20",
    metrics: { type: "Full Stack", auth: "JWT", year: "2024" }
  },
  {
    title: "News Aggregator App",
    description: "Built an Android news app where admins can manage reports and clients browse with bookmark and domain-specific search.",
    tech: ["Android", "Java/Kotlin", "Firebase", "API"],
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-600/20 via-blue-600/20 to-indigo-600/20",
    metrics: { type: "Mobile", platform: "Android", year: "2024" }
  },
  {
    title: "Space Shooter Game",
    description: "Developed a space shooter game with real-time input handling, collision detection, and enemy wave logic in C++ and C#.",
    tech: ["C++", "C#", "WinForms/WPF", "Game Logic"],
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-600/20 via-orange-600/20 to-yellow-600/20",
    metrics: { type: "Game Dev", physics: "Real-time", year: "2023" }
  },
  {
    title: "Cars Dealership",
    description: "Built a console-based car marketplace in C++ and rebuilt with a GUI in C# featuring search, filter, and inventory management.",
    tech: ["C++", "C#", "WinForms/WPF", "CRUD"],
    color: "from-rose-500 to-orange-500",
    gradient: "from-rose-600/20 via-orange-600/20 to-rose-600/20",
    metrics: { type: "Desktop", ui: "WinForms", year: "2023" }
  }
];

// TiltCard component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * 10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// SpotlightCard component
const SpotlightCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20 ${className}`}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
          style={{
            opacity: 0.6,
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

// TextReveal component
const TextReveal = ({ text }: { text: string }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Projects() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  return (
    <section ref={sectionRef} className="relative">
      {/* Animated decorative background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px]" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"
        />
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <TextReveal text="Featured Work" />
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A curated selection of projects that demonstrate my expertise in building 
          <span className="text-foreground font-medium"> scalable</span>, 
          <span className="text-foreground font-medium"> performant</span> applications.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <TiltCard className="h-full group">
              <SpotlightCard className="h-full p-8 transition-all duration-700 hover:border-white/20">
                <div className="flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {p.title[0]}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    {/* External Link Button */}
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {p.description}
                  </p>

                  {/* Metrics Display */}
                  <motion.div 
                    className="grid grid-cols-3 gap-3 mb-6 p-3 rounded-xl bg-white/5 border border-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {Object.entries(p.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xs uppercase text-gray-500 mb-1">{key}</div>
                        <div className="text-sm font-semibold text-blue-400">{value}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="flex gap-2 flex-wrap">
                    {p.tech.map((t, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + j * 0.05 }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default hover:scale-105"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}