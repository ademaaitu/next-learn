"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
    date: "2024-11-15",
    text: "NextLearn completely changed how I approach learning. The AI adapts so well to my pace — I finished a machine learning course in half the expected time and landed my dream job at Google.",
    avatar: "SC",
    color: "#6C63FF",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Product Manager",
    company: "Meta",
    rating: 5,
    date: "2024-12-03",
    text: "The personalized learning paths are incredible. I went from zero to product manager in 8 months. The live community sessions kept me accountable and motivated throughout.",
    avatar: "MW",
    color: "#00D4FF",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Data Scientist",
    company: "Microsoft",
    rating: 5,
    date: "2024-10-22",
    text: "I've tried dozens of platforms. NextLearn is on another level. The AI feedback on my projects was more detailed than what I got from my university professors.",
    avatar: "PP",
    color: "#FF6B6B",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "UX Designer",
    company: "Airbnb",
    rating: 5,
    date: "2024-11-30",
    text: "Gamification makes all the difference. I actually look forward to studying every day. The certificate I earned is recognized by top companies worldwide.",
    avatar: "JR",
    color: "#6BCB77",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Frontend Developer",
    company: "Stripe",
    rating: 5,
    date: "2024-12-10",
    text: "The analytics dashboard showed me exactly where I was struggling. Within weeks of focusing on those areas my skills jumped dramatically. Worth every penny.",
    avatar: "ET",
    color: "#FFD93D",
  },
  {
    id: 6,
    name: "Alex Kim",
    role: "ML Engineer",
    company: "OpenAI",
    rating: 5,
    date: "2024-12-18",
    text: "As someone who works in AI, I was skeptical. But NextLearn's adaptive system genuinely surprised me. The content quality and depth is exceptional.",
    avatar: "AK",
    color: "#A78BFA",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "Review",
    position: i + 1,
    author: {
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
    datePublished: t.date,
    itemReviewed: {
      "@type": "EducationalOrganization",
      name: "NextLearn",
    },
  })),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6C63FF]/08 rounded-full blur-[120px] pointer-events-none" />
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
            Student Reviews
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Loved by learners
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-[#6B6B80] text-lg max-w-2xl mx-auto">
            Join 120,000+ students who transformed their careers with NextLearn.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#FFD93D] fill-[#FFD93D]"
                />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.9</span>
            <span className="text-[#6B6B80] text-sm">from 12,000+ reviews</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut" as const,
              }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-[#111118] border border-[#1E1E2E] hover:border-[#6C63FF]/40 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-[#6C63FF]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#FFD93D] fill-[#FFD93D]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#9999AA] text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{
                    background: `${t.color}30`,
                    border: `1px solid ${t.color}40`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="text-[#6B6B80] text-xs">
                    {t.role} at {t.company}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
