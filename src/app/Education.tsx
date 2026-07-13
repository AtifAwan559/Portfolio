"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import SpotlightCard from "@/components/SpotlightCard";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "University of Engineering and Technology, Lahore",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 – 2027",
    details: "Coursework: Data Structures & Algorithms, Database Systems, Computer Architecture, Machine Learning, OOP",
    color: "from-blue-500 to-indigo-500"
  }
];

const certifications = [
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    year: "2024",
    icon: "🧠"
  },
  {
    name: "Machine Learning with Regression and Classification",
    issuer: "Coursera / DeepLearning.AI",
    year: "2024",
    icon: "📈"
  },
  {
    name: "PMI Software Project Management",
    issuer: "Project Management Institute",
    year: "2024",
    icon: "📊"
  },
  {
    name: "Claude AI Developer Certification (Claude 101)",
    issuer: "Anthropic",
    year: "2024",
    icon: "🤖"
  },
  {
    name: "Microsoft Office Specialist (MOS)",
    issuer: "Microsoft",
    year: "2022",
    icon: "📊"
  }
];

export default function Education() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
              <GraduationCap className="text-blue-500" size={36} />
              <TextReveal text="Education" />
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <SpotlightCard key={idx} className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                  <span className="text-sm font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.details}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
              <Award className="text-purple-500" size={36} />
              <TextReveal text="Certifications" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col">
                  <div className="text-2xl mb-4 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2 flex-grow">{cert.name}</h3>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs font-mono text-purple-400">{cert.year}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
