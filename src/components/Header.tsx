"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "process", "services", "projects", "skills", "experience", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
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
    { label: "Process", href: "#process", id: "process" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="navbar-sticky">
      <div className="site-container navbar-inner">
        {/* Brand: Circular monogram 'R' + Wordmark */}
        <a href="#home" className="brand-monogram" aria-label="Rony Home">
          <div className="monogram-badge">R</div>
          <span>Rony</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-links-row" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link-item ${activeSection === link.id ? "active" : ""}`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-primary"
            aria-label="Contact Rony"
          >
            <span>Contact</span>
            <ArrowRight size={14} />
          </button>

          {/* Hamburger for mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? "bg-[#eadff8] text-[#7028f5]"
                    : "text-gray-700 hover:bg-gray-50"
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
