"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShopifyIcon,
  LiquidIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  FigmaIcon,
} from "./SkillIcons";

interface SkillsProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * SKILLS SECTION COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Showcases core technologies: Shopify, Liquid, JavaScript, TypeScript,
 * React.js, Next.js, and Figma with responsive grid layout and interactive hover physics.
 */
export default function Skills({ onOpenContact }: SkillsProps) {
  const skills = [
    { name: "Shopify", icon: <ShopifyIcon /> },
    { name: "Liquid", icon: <LiquidIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "React.js", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextJsIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="skills-section container"
      id="skills"
    >
      {/* Intro Column */}
      <div className="section-intro">
        <div className="eyebrow">
          <i aria-hidden="true" />
          My Skills
        </div>
        <h2>Technologies &amp; Tools I Work With</h2>
        <p>A well-rounded toolkit to build, customize, and optimize modern e-commerce storefronts.</p>
        <button
          type="button"
          onClick={onOpenContact}
          className="button button-outline cursor-pointer"
        >
          Explore All <b>→</b>
        </button>
      </div>

      {/* 7 Skill Cards Grid */}
      <div className="skill-list">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              y: -6,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            className="skill-card"
          >
            <div className="skill-card-icon">{skill.icon}</div>
            <b>{skill.name}</b>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
