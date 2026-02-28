"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock,
  Rocket,
  Zap,
  Globe,
  Brain,
  Shield,
} from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "done",
    title: "Platform Launch",
    description:
      "Core learning platform with AI personalization engine, 100+ initial courses and community features.",
    icon: Rocket,
    color: "#6BCB77",
    items: [
      "AI learning engine v1",
      "100+ courses",
      "Community forums",
      "Mobile app beta",
    ],
  },
  {
    quarter: "Q2 2024",
    status: "done",
    title: "AI Tutor Release",
    description:
      "Launched real-time AI tutoring system with instant feedback on assignments and personalized study plans.",
    icon: Brain,
    color: "#6BCB77",
    items: [
      "AI Tutor v1",
      "Real-time feedback",
      "Personalized paths",
      "500+ courses",
    ],
  },
  {
    quarter: "Q3 2024",
    status: "done",
    title: "Enterprise & Certificates",
    description:
      "Enterprise tier launched with team management, SSO, advanced analytics and industry certificates.",
    icon: Shield,
    color: "#6BCB77",
    items: [
      "Enterprise tier",
      "Industry certificates",
      "Team analytics",
      "SSO integration",
    ],
  },
  {
    quarter: "Q4 2024",
    status: "active",
    title: "Global Expansion",
    description:
      "Expanding to 20+ languages, launching live mentorship sessions and real-time collaborative projects.",
    icon: Globe,
    color: "#6C63FF",
    items: [
      "20+ languages",
      "Live mentorship",
      "Collab projects",
      "AI code reviewer",
    ],
  },
  {
    quarter: "Q1 2025",
    status: "upcoming",
    title: "AI Labs & Sandbox",
    description:
      "Interactive AI sandbox environments where students can build and test real ML models in the browser.",
    icon: Zap,
    color: "#6B6B80",
    items: [
      "AI sandbox",
      "Browser ML IDE",
      "Model marketplace",
      "GPU compute credits",
    ],
  },
  {
    quarter: "Q2 2025",
    status: "upcoming",
    title: "Degree Programs",
    description:
      "Accredited micro-degree programs in partnership with top universities worldwide.",
    icon: Rocket,
    color: "#6B6B80",
    items: [
      "Micro-degrees",
      "University partners",
      "Credit transfer",
      "Career placement",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-[#6C63FF]/05 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#6C63FF] text-sm font-medium mb-6">
            Our Journey
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building the future
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              of education
            </span>
          </h2>
          <p className="text-[#6B6B80] text-lg max-w-2xl mx-auto">
            Our mission is to make world-class education accessible to everyone.
            Here is how we are getting there.
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-[#6B6B80]">
              <CheckCircle2 className="w-4 h-4 text-[#6BCB77]" />
              Completed
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B6B80]">
              <div className="w-4 h-4 rounded-full border-2 border-[#6C63FF] bg-[#6C63FF]/20" />
              In Progress
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B6B80]">
              <Circle className="w-4 h-4 text-[#6B6B80]" />
              Upcoming
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1E1E2E] to-transparent" />

          <div className="flex flex-col gap-12">
            {roadmapItems.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut" as const,
                  }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 ${
                    isLeft ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1" : "lg:col-start-2"
                    } group relative p-6 rounded-2xl bg-[#111118] border transition-all duration-300 ${
                      item.status === "active"
                        ? "border-[#6C63FF]/50 shadow-lg shadow-[#6C63FF]/10"
                        : item.status === "done"
                          ? "border-[#6BCB77]/20 hover:border-[#6BCB77]/40"
                          : "border-[#1E1E2E] hover:border-[#1E1E2E]"
                    }`}
                  >
                    {/* Active glow */}
                    {item.status === "active" && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6C63FF]/05 to-transparent pointer-events-none" />
                    )}

                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}15` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.color }}
                          />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-[#6B6B80]">
                            {item.quarter}
                          </span>
                          <div className="flex items-center gap-2 mt-0.5">
                            {item.status === "done" && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#6BCB77]" />
                            )}
                            {item.status === "active" && (
                              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#6C63FF] bg-[#6C63FF]/20 animate-pulse" />
                            )}
                            {item.status === "upcoming" && (
                              <Clock className="w-3.5 h-3.5 text-[#6B6B80]" />
                            )}
                            <span
                              className="text-xs font-medium"
                              style={{ color: item.color }}
                            >
                              {item.status === "done"
                                ? "Completed"
                                : item.status === "active"
                                  ? "In Progress"
                                  : "Upcoming"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title & description */}
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#6B6B80] text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Items list */}
                    <div className="grid grid-cols-2 gap-2">
                      {item.items.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-[#6B6B80]"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: item.color }}
                          />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center dot on desktop */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                    style={{
                      borderColor: item.color,
                      background:
                        item.status === "active" ? item.color : "#0A0A0F",
                    }}
                  >
                    {item.status === "done" && (
                      <div className="w-2 h-2 rounded-full bg-[#6BCB77]" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
