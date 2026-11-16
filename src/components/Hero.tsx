"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const { personal, stats } = portfolioData;

  return (
    <section className="hero-gradient-bg" id="home">
      <div className="site-container">
        <div className="hero-columns">
          {/* Left Column: Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Greeting Pill */}
            <div className="hero-badge-pill">
              <span>Hello, I&apos;m {personal.shortName}</span>
              <span className="inline-block animate-bounce text-sm">👋</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-main-title">
              <span>{personal.title.split("&")[0]} &amp;</span>
              <br />
              <span className="purple-highlight">{personal.title.split("&")[1] || "UI Engineer"}</span>
            </h1>

            {/* Subtext */}
            <p className="hero-lead-text">{personal.tagline}</p>

            {/* Dual Actions */}
            <div className="hero-buttons-row">
              <a href="#projects" className="btn-primary">
                <span>My Projects</span>
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-outline"
              >
                <span>Download CV</span>
                <Download size={15} />
              </button>
            </div>

            {/* Connected Stat Band (Khurram / Picto Signature) */}
            <div className="hero-stats-band">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-cell">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Portrait Graphic with Soft Aura */}
          <div className="hero-visual-frame">
            {/* Tilted Card Backdrop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hero-backdrop-shape"
              aria-hidden="true"
            />

            {/* Floating Purple Orbit Ring */}
            <motion.div
              animate={{
                rotate: [-16, -11, -16],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-orbit-ring"
              aria-hidden="true"
            />

            {/* Cutout Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative z-[3] flex items-end justify-center h-full w-full"
            >
              <Image
                src={personal.avatar}
                alt={`${personal.name} - ${personal.title}`}
                width={420}
                height={460}
                priority
                className="hero-portrait-render select-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
