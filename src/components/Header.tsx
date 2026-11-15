"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * SITE HEADER COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Displays the brand monogram "A", responsive navigation with active section
 * highlighting, and the "Let's Talk ->" call-to-action button.
 */
export default function Header({ onOpenContact }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to automatically highlight the active nav item
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="site-header container">
      {/* Brand logo: Custom polygon 'A' in light blue + 'Rony' */}
      <a href="#home" className="brand" aria-label="Rony home">
        <span className="brand-mark" aria-hidden="true" />
        <span>Rony</span>
      </a>

      {/* Desktop Main Navigation */}
      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => setActiveSection(link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={onOpenContact}
          className="small-cta"
          aria-label="Open contact dialog"
        >
          Let&apos;s Talk <span>→</span>
        </button>

        {/* Hamburger icon for mobile screens */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 rounded-xl text-[#0f172a] hover:bg-sky-50 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xl p-5 sm:hidden z-50 flex flex-col gap-2 rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`py-2.5 px-3.5 rounded-xl text-sm font-bold transition-colors ${
                  activeSection === link.id
                    ? "bg-[#e0f2fe] text-[#0284c7]"
                    : "text-[#334155] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
