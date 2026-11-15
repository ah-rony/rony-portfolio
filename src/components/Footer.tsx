"use client";

import React from "react";

/**
 * ==============================================================================
 * FOOTER COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Displays brand logo, site navigation links, social profile shortcuts,
 * copyright notice, and location.
 */
export default function Footer() {
  return (
    <footer className="site-footer container">
      {/* Top Footer Row */}
      <div className="footer-top">
        {/* Brand logo in Light Blue theme */}
        <a className="brand" href="#home" aria-label="Rony home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Rony</span>
        </a>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social Profile Links */}
        <div className="footer-social" aria-label="Footer social links">
          <a
            href="https://github.com/ah-rony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            ⌘
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href="https://rafsanahmed.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Personal Website"
            title="Personal Website"
          >
            ↗
          </a>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="footer-bottom">
        <span>© 2025 MD. Ainal Haque Rony. All rights reserved.</span>
        <span>Dhaka, Bangladesh</span>
      </div>
    </footer>
  );
}
