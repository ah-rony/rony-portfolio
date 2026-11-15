"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ==============================================================================
 * BOTTOM PANELS COMPONENT (Education & Testimonial)
 * ==============================================================================
 * Two side-by-side cards highlighting academic background (CGPA 3.57 at IUBAT)
 * and verified client endorsement in Light Blue & Deep Slate theme.
 */
export default function BottomPanels() {
  return (
    <div className="bottom-panels container">
      {/* Education Panel */}
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="info-panel education"
      >
        <div>
          <div className="eyebrow">
            <i aria-hidden="true" />
            Education
          </div>
          <h2>My Academic Background</h2>
          <p>
            <strong>B.Sc. in Computer Science &amp; Engineering</strong>
            <br />
            International University of Business Agriculture
            <br />
            and Technology (IUBAT)
          </p>
        </div>

        {/* CGPA Badge with graduation cap icon */}
        <div className="cgpa">
          <span aria-hidden="true">🎓</span>
          <small>CGPA</small>
          <strong>3.57</strong>
        </div>
      </motion.article>

      {/* Testimonial Panel */}
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="info-panel testimonial"
      >
        {/* Subtle decorative background quote marks */}
        <div className="quote-marks" aria-hidden="true">
          “ ”
        </div>

        <div className="eyebrow">
          <i aria-hidden="true" />
          What People Say
        </div>
        <h2>Kind Words</h2>
        <blockquote>
          “Rony is a dedicated and skilled developer who understands both technical engineering and e-commerce business needs.”
        </blockquote>

        <div className="client">
          <Image
            src="/assets/testimonial-avatar.png"
            alt="Project client avatar placeholder"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <strong>Project Client</strong>
        </div>
      </motion.article>
    </div>
  );
}
