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
      {/* <div className="absolute inset-0 bg-[#0A0A0F]">
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
      </div> */}
      {/* Bottom background image with gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none">
        {/* Gradient fade from top and sides */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, #0A0A0F 0%, transparent 25%, transparent 75%, #0A0A0F 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #0A0A0F 0%, transparent 20%, transparent 80%, #0A0A0F 100%)",
          }}
        />
        {/* Actual image */}
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-40"
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

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5)",
            }}
          >
            THE BEST WEBSITE EVER
          </span>
          <br />
          Scalable.
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6B6B80] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
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
            className="group relative flex items-center justify-center gap-2 text-white font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              width: "176px",
              height: "70px",
              borderRadius: "100px",
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(#0A0A0F, #0A0A0F), linear-gradient(135deg, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#get-started"
            className="group relative border border-white rounded-full flex items-center justify-center gap-2 text-white font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              width: "176px",
              height: "70px",
            }}
          >
            Read More
          </a>
        </motion.div>

        {/* остальной код без изменений */}
      </div>
    </section>
  );
}
