"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

const stats = [
  { value: "120K+", label: "Active Students" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "500+", label: "AI Courses" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6C63FF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-[#6C63FF]/30 to-[#00D4FF]/20 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-[8%] w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B6B]/20 to-[#6C63FF]/20 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-[20%] w-10 h-10 rounded-full bg-[#00D4FF]/20 blur-sm"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#6C63FF] text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Education Platform
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Learn Smarter.
          <br />
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6B6B] bg-clip-text text-transparent">
            Grow Faster.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6B6B80] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NextLearn uses cutting-edge AI to personalize your learning path.
          Master any skill with adaptive courses, real-time feedback, and a
          community of 120K+ learners worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#get-started"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6C63FF] hover:bg-[#5a52d5] text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/40 hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#solutions"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-base transition-all duration-300"
          >
            <Play className="w-4 h-4 text-[#00D4FF]" />
            Watch Demo
          </a>
        </motion.div>

        {/* остальной код без изменений */}
      </div>
    </section>
  );
}
