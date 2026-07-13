"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import SpotlightCard from "@/components/SpotlightCard";

const skills = [
  {
    category: "Languages",
    icon: "💻",
    techs: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 88 },
      { name: "Java/Kotlin", level: 80 },
      { name: "SQL", level: 85 },
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "🚀",
    techs: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 85 },
      { name: "Streamlit", level: 90 },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    techs: [
      { name: "Git/GitHub", level: 92 },
      { name: "Linux/Bash", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 75 },
    ]
  },
  {
    category: "Concepts",
    icon: "🧠",
    techs: [
      { name: "DSA", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "AI/LLM", level: 85 },
      { name: "OOP", level: 95 },
      { name: "Database Design", level: 88 },
    ]
  }
];

export default function Skills() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
        />
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <TextReveal text="Technical Arsenal" />
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard className="h-full p-6">
              <div className="text-3xl mb-4 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.techs.map((tech, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                      <span className="text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}