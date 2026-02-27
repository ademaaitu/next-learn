"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const links = {
  product: [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Whitepaper", href: "#whitepaper" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press Kit", href: "#press" },
    { label: "Partners", href: "#partners" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const contacts = [
  { icon: Mail, text: "hello@nextlearn.ai", href: "mailto:hello@nextlearn.ai" },
  { icon: Phone, text: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: MapPin, text: "San Francisco, CA", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#0A0A0F] border-t border-[#1E1E2E] overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6C63FF]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-[#1E1E2E] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to start learning?
            </h3>
            <p className="text-[#6B6B80] text-base max-w-md">
              Join 120,000+ students already transforming their careers with
              NextLearn AI.
            </p>
          </div>

          <a
            href="#get-started"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6C63FF] hover:bg-[#5a52d5] text-white font-semibold text-base transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/40 hover:scale-105"
          >
            Get Started Free
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Next
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
                  Learn
                </span>
              </span>
            </a>

            <p className="text-[#6B6B80] text-sm leading-relaxed mb-6 max-w-xs">
              The next-generation AI-powered education platform.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-[#111118] border border-[#1E1E2E] flex items-center justify-center text-[#6B6B80] hover:text-white hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-3">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.text}
                    href={c.href}
                    className="flex items-center gap-3 text-[#6B6B80] hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#111118] border border-[#1E1E2E] flex items-center justify-center group-hover:border-[#6C63FF]/50 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    {c.text}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B6B80] hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B6B80] hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B6B80] hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-[#1E1E2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6B80] text-sm">
            © {new Date().getFullYear()} NextLearn. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6BCB77] animate-pulse" />
            <span className="text-[#6B6B80] text-xs">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
