"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactBannerProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * CONTACT BANNER COMPONENT (Midnight Navy & Electric Cyan Theme)
 * ==============================================================================
 * Deep navy banner with call-to-action button, divider, and interactive
 * paper-plane illustration with flying motion physics.
 */
export default function ContactBanner({ onOpenContact }: ContactBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="contact-banner"
      id="contact"
    >
      <div>
        <h2>Let&apos;s Work Together</h2>
        <p>Have a project or opportunity? Reach out and let&apos;s discuss your vision!</p>
      </div>

      <span className="contact-divider" aria-hidden="true" />

      <button
        type="button"
        onClick={onOpenContact}
        className="button button-primary cursor-pointer"
      >
        Contact Me <b>→</b>
      </button>

      {/* Animated paper plane in cyan that lifts off on hover/click */}
      <motion.div
        whileHover={{
          x: 14,
          y: -14,
          rotate: -12,
          scale: 1.15,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ x: 25, y: -25, scale: 1.25 }}
        onClick={onOpenContact}
        className="paper-plane"
        title="Send an inquiry"
        aria-hidden="true"
      >
        ➤
      </motion.div>
    </motion.section>
  );
}
