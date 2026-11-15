"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * HERO SECTION COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Renders the primary intro banner with animated staggered entrance,
 * floating orbital ring physics, skewed glow backdrop, and portrait placeholder.
 */
export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="hero container" id="home">
      {/* Left side: Intro Copy & Call-to-actions */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hero-copy"
      >
        {/* Hello greeting pill badge */}
        <div className="hello">
          Hello, I&apos;m <span>👋</span>
        </div>

        {/* Main Heading with Deep Slate Ink */}
        <h1>MD. Ainal Haque Rony</h1>

        {/* Role & Specialization with Light Blue Highlights */}
        <h2>
          <span>Shopify Developer</span> &amp;
          <br />
          <span>Client Solutions</span> Associate
        </h2>

        {/* High-Contrast Readable Bio */}
        <p>
          A technology professional specializing in <strong>Shopify development</strong>,
          e-commerce solutions, and modern web experiences. Dedicated to building fast, scalable,
          and conversion-focused digital storefronts.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Work <b>→</b>
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="button button-outline cursor-pointer"
          >
            Download CV <b>⇩</b>
          </button>
        </div>

        {/* Social Profile Links */}
        <div className="social-links" aria-label="Social links">
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
      </motion.div>

      {/* Right side: Visual graphic with skewed glow card & floating orbital ring */}
      <div className="hero-visual">
        {/* Glowing light blue skewed card backdrop */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.92, 1, 0.92],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-glow"
        />

        {/* Light blue orbit ring floating and gently swaying in 3D perspective */}
        <motion.div
          animate={{
            rotate: [-16, -13, -19, -16],
            y: [0, -7, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-orbit"
        />

        {/* Sparkle icon with subtle twinkle */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [-30, -22, -35, -30],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-spark"
        >
          〃
        </motion.div>

        {/* Portrait image placeholder (Easy to replace in /public/assets/hero-portrait.png) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center z-10"
        >
          <Image
            src="/assets/hero-portrait.png"
            alt="MD. Ainal Haque Rony - Shopify Developer (Replace in /public/assets/hero-portrait.png)"
            width={420}
            height={500}
            priority
            className="w-auto max-w-[92%] h-auto max-h-[460px] object-contain select-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
