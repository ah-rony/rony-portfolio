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
} from "./Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "shopify":
        return <ShopifyIcon className="w-8 h-8" />;
      case "liquid":
        return <LiquidIcon className="w-8 h-8" />;
      case "javascript":
        return <JavaScriptIcon className="w-8 h-8" />;
      case "typescript":
        return <TypeScriptIcon className="w-8 h-8" />;
      case "react":
        return <ReactIcon className="w-8 h-8" />;
      case "next":
        return <NextJsIcon className="w-8 h-8" />;
      case "figma":
        return <FigmaIcon className="w-7 h-8" />;
      default:
        return <ShopifyIcon className="w-8 h-8" />;
    }
  };

  return (
    <section className="section-white" id="skills">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="section-kicker justify-center">
            <span className="section-kicker-dash" aria-hidden="true" />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">Technologies &amp; Tools</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit combining modern React/Next.js frontend engineering with battle-tested Shopify storefront architecture.
          </p>
        </motion.div>

        {/* 7 Clean Tiles */}
        <div className="skills-container-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="skill-tile"
            >
              <div className="w-9 h-9 grid place-items-center">{renderIcon(skill.icon)}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
