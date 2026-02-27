"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Twitter, BookOpen } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "#whitepaper" },
];

export default function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1E1E2E] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#6B6B80] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#6B6B80] hover:text-white hover:bg-[#1E1E2E] transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#6B6B80] hover:text-white hover:bg-[#1E1E2E] transition-all duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="#get-started"
              className="ml-2 px-5 py-2 rounded-lg bg-[#6C63FF] hover:bg-[#5a52d5] text-white text-sm font-semibold transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-[#6B6B80] hover:text-white hover:bg-[#1E1E2E] transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-[#1E1E2E] overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-lg text-[#6B6B80] hover:text-white hover:bg-[#1E1E2E] transition-all text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-[#1E1E2E]">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#6B6B80] hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#6B6B80] hover:text-white transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="#get-started"
                  onClick={closeMobileMenu}
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-[#6C63FF] text-white text-sm font-semibold"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
