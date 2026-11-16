"use client";

import React from "react";
import { Link2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="footer-dark-band">
      <div className="site-container">
        {/* Top Grid: Brand, Navigation & Socials */}
        <div className="footer-top-grid">
          {/* Brand */}
          <a href="#home" className="brand-monogram text-white" aria-label="Rony Home">
            <div className="monogram-badge">R</div>
            <span className="text-white">Rony</span>
          </a>

          {/* Nav Links */}
          <nav className="footer-dark-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#7028f5] text-white flex items-center justify-center transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#7028f5] text-white flex items-center justify-center transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#7028f5] text-white flex items-center justify-center transition-all"
              aria-label="Personal Portfolio"
              title="Website"
            >
              <Link2 size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Flex: Copyright & Location */}
        <div className="footer-bottom-flex">
          <span>© 2025 {personal.name}. All rights reserved.</span>
          <span>{personal.location}</span>
        </div>
      </div>
    </footer>
  );
}
