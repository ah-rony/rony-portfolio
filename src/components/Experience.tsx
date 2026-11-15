"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * EXPERIENCE SECTION COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Chronological timeline detailing Rony's work experience at software agencies
 * in Dhaka, Bangladesh, with glowing light blue timeline indicators and artwork.
 */
export default function Experience({ onOpenContact }: ExperienceProps) {
  return (
    <section className="experience-section" id="experience">
      <div className="container experience-layout">
        {/* Intro Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="section-intro"
        >
          <div className="eyebrow">
            <i aria-hidden="true" />
            My Experience
          </div>
          <h2>Professional Journey</h2>
          <p>Building specialized e-commerce expertise through production builds and client solutions.</p>
          <button
            type="button"
            onClick={onOpenContact}
            className="button button-outline cursor-pointer"
          >
            View Details <b>→</b>
          </button>
        </motion.div>

        {/* Timeline Column with Crisp Readability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="timeline"
        >
          {/* Role 1 */}
          <article className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <small>2025 – Present</small>
            <h3>Shopify Developer &amp; Client Solutions Associate</h3>
            <p className="company">Software Agency, Dhaka, Bangladesh</p>
            <p>
              Leading custom Shopify theme builds, headless integrations, and technical client consultations
              to maximize conversion rates and store performance.
            </p>
          </article>

          {/* Role 2 */}
          <article className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <small>2024 – 2025</small>
            <h3>Shopify Developer</h3>
            <p className="company">Software Agency, Dhaka, Bangladesh</p>
            <p>
              Focused on Liquid template development, custom section architecture, and Core Web Vitals optimization.
            </p>
          </article>
        </motion.div>

        {/* Right Art: Light blue laptop with Shopify logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <Image
            className="experience-art"
            src="/assets/experience-illustration.png"
            alt="Shopify development laptop illustration"
            width={280}
            height={210}
          />
        </motion.div>
      </div>
    </section>
  );
}
