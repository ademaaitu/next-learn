"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Trophy, Users, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Brain,
    color: "#6C63FF",
    bg: "#6C63FF",
    title: "AI Personalization",
    description:
      "Our AI analyzes your learning style and adapts every course in real time. No two learning paths are the same.",
  },
  {
    id: 2,
    icon: Zap,
    color: "#00D4FF",
    bg: "#00D4FF",
    title: "Lightning Fast Progress",
    description:
      "Micro-learning modules and spaced repetition help you retain knowledge 3x faster than traditional methods.",
  },
  {
    id: 3,
    icon: Trophy,
    color: "#FFD93D",
    bg: "#FFD93D",
    title: "Gamified Learning",
    description:
      "Earn badges, climb leaderboards and unlock achievements. Learning has never been this addictive.",
  },
  {
    id: 4,
    icon: Users,
    color: "#6BCB77",
    bg: "#6BCB77",
    title: "Live Community",
    description:
      "Join 120K+ learners, attend live sessions, collaborate on projects and get instant peer support.",
  },
  {
    id: 5,
    icon: Shield,
    color: "#FF6B6B",
    bg: "#FF6B6B",
    title: "Certified Credentials",
    description:
      "Earn industry-recognized certificates trusted by 500+ top companies including Google, Meta and Microsoft.",
  },
  {
    id: 6,
    icon: BarChart3,
    color: "#A78BFA",
    bg: "#A78BFA",
    title: "Deep Analytics",
    description:
      "Track every metric of your progress with detailed dashboards. Know exactly where to focus next.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6C63FF]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#6C63FF] text-sm font-medium mb-6">
            Why NextLearn
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything you need
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              to master any skill
            </span>
          </h2>
          <p className="text-[#6B6B80] text-lg max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven learning science
            to deliver an education experience unlike anything else.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-[#111118] border border-[#1E1E2E] hover:border-[#6C63FF]/40 transition-all duration-300 cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${feature.bg}08 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${feature.bg}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                {/* Text */}
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B6B80] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
