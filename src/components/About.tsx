"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ==============================================================================
 * ABOUT ME SECTION COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Displays the workspace photo with floating "1+ Years Experience" badge,
 * personal philosophy on Shopify development, and a list of key credentials.
 */
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about-panel container"
      id="about"
    >
      {/* Workspace photo placeholder with floating badge */}
      <div className="about-photo">
        <Image
          src="/assets/about-workspace.png"
          alt="Workspace desk placeholder (Replace in /public/assets/about-workspace.png)"
          width={500}
          height={280}
          className="rounded-[16px] w-full h-full object-cover shadow-sm"
        />

        {/* Floating experience badge in Light Blue theme */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="experience-badge"
        >
          <span className="badge-icon" aria-hidden="true">
            ▥
          </span>
          <span>
            <strong>1+ Years</strong>
            <small>of Experience</small>
          </span>
        </motion.div>
      </div>

      {/* Narrative Copy with High Contrast & Readability */}
      <div className="about-copy">
        <div className="eyebrow">
          <i aria-hidden="true" />
          About Me
        </div>
        <h2>
          Turning Ideas into
          <br />
          Scalable Digital Solutions
        </h2>
        <p>
          I&apos;m a <strong>Shopify developer</strong> with a passion for building fast, user-friendly,
          and conversion-focused online stores. I bridge the gap between technical engineering,
          modern UI/UX design, and business conversion goals to deliver high-impact digital experiences.
        </p>
      </div>

      {/* Quick Facts List */}
      <ul className="quick-facts" aria-label="Key facts about Rony">
        <li>
          <span aria-hidden="true">📍</span>
          Dhaka, Bangladesh
        </li>
        <li>
          <span aria-hidden="true">🎓</span>
          B.Sc. in CSE, IUBAT
        </li>
        <li>
          <span aria-hidden="true">🛍️</span>
          Shopify Developer
        </li>
        <li>
          <span aria-hidden="true">💻</span>
          Frontend Enthusiast
        </li>
        <li>
          <span aria-hidden="true">🛒</span>
          E-commerce Focused
        </li>
      </ul>
    </motion.section>
  );
}
