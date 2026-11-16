"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code2, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Process() {
  const { process } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <Search size={24} />;
      case "layout":
        return <Layout size={24} />;
      case "code":
        return <Code2 size={24} />;
      case "rocket":
        return <Rocket size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <section className="section-gray" id="process">
      <div className="site-container">
        <div className="process-columns">
          {/* Left Side: Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-kicker">
              <span className="section-kicker-dash" aria-hidden="true" />
              <span>Work Process</span>
            </div>
            <h2 className="section-title">My Work Process</h2>
            <p className="section-subtitle">
              A structured, transparent engineering methodology designed to take your e-commerce project from discovery to high-converting launch seamlessly.
            </p>
          </motion.div>

          {/* Right Side: 2x2 Interactive Cards Grid */}
          <div className="process-grid-2x2">
            {process.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="process-step-card"
              >
                {/* Flipping Lavender to Purple Badge */}
                <div className="process-icon-badge">{renderIcon(step.icon)}</div>
                <div className="process-step-num">Step {step.step}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
