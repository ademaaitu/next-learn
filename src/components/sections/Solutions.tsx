"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "AI & Machine Learning Mastery",
    description:
      "From fundamentals to advanced neural networks. Build real-world AI projects with hands-on guidance.",
    students: 24500,
    rating: 4.9,
    duration: "48h",
    level: "Intermediate",
    color: "#6C63FF",
    badge: "Bestseller",
    badgeColor: "#FFD93D",
  },
  {
    id: 2,
    category: "Web Development",
    title: "Full-Stack Development 2024",
    description:
      "Master React, Next.js, Node.js and databases. Ship production-ready apps from day one.",
    students: 31200,
    rating: 4.8,
    duration: "64h",
    level: "Beginner",
    color: "#00D4FF",
    badge: "Most Popular",
    badgeColor: "#6C63FF",
  },
  {
    id: 3,
    category: "Data Science",
    title: "Data Science & Analytics",
    description:
      "Learn Python, SQL, visualization and predictive modeling. Turn raw data into business insights.",
    students: 18700,
    rating: 4.9,
    duration: "52h",
    level: "Intermediate",
    color: "#6BCB77",
    badge: "New",
    badgeColor: "#6BCB77",
  },
  {
    id: 4,
    category: "Design",
    title: "UX/UI Design Fundamentals",
    description:
      "Create stunning interfaces with Figma. Learn design systems, prototyping and user research.",
    students: 15300,
    rating: 4.7,
    duration: "36h",
    level: "Beginner",
    color: "#FF6B6B",
    badge: "Trending",
    badgeColor: "#FF6B6B",
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "Ethical Hacking & Security",
    description:
      "Penetration testing, vulnerability assessment and secure coding practices for modern apps.",
    students: 9800,
    rating: 4.8,
    duration: "44h",
    level: "Advanced",
    color: "#A78BFA",
    badge: "Hot",
    badgeColor: "#FF6B6B",
  },
  {
    id: 6,
    category: "Business",
    title: "Product Management Pro",
    description:
      "Go from idea to launch. Agile, roadmapping, stakeholder management and growth metrics.",
    students: 12400,
    rating: 4.6,
    duration: "28h",
    level: "Intermediate",
    color: "#FFD93D",
    badge: "Top Rated",
    badgeColor: "#FFD93D",
  },
];

function formatStudents(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/05 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#6C63FF] text-sm font-medium mb-6">
              Our Courses
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Explore our
              <br />
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
                top solutions
              </span>
            </h2>
            <p className="text-[#6B6B80] text-lg max-w-xl">
              500+ courses across every in-demand skill. All taught by industry
              experts and enhanced by AI.
            </p>
          </div>

          <a
            href="#all-courses"
            className="group hidden lg:flex items-center gap-2 text-[#6C63FF] hover:text-white font-semibold text-sm transition-colors duration-200 whitespace-nowrap"
          >
            View all courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut" as const,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-6 rounded-2xl bg-[#111118] border border-[#1E1E2E] hover:border-[#6C63FF]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${course.color}15` }}
                >
                  <BookOpen
                    className="w-6 h-6"
                    style={{ color: course.color }}
                  />
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${course.badgeColor}15`,
                    color: course.badgeColor,
                    border: `1px solid ${course.badgeColor}30`,
                  }}
                >
                  {course.badge}
                </span>
              </div>

              <span
                className="text-xs font-medium mb-2"
                style={{ color: course.color }}
              >
                {course.category}
              </span>

              <h3 className="font-heading text-lg font-bold text-white mb-3 leading-snug">
                {course.title}
              </h3>

              <p className="text-[#6B6B80] text-sm leading-relaxed mb-6 flex-1">
                {course.description}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1E1E2E] text-xs text-[#6B6B80]">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#FFD93D] fill-[#FFD93D]" />
                  <span className="text-white font-medium">
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {formatStudents(course.students)} students
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs px-3 py-1 rounded-full bg-[#1E1E2E] text-[#6B6B80]">
                  {course.level}
                </span>
              </div>

              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${course.color}60, transparent)`,
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="flex lg:hidden justify-center mt-10">
          <a
            href="#all-courses"
            className="flex items-center gap-2 text-[#6C63FF] font-semibold text-sm"
          >
            View all courses
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
