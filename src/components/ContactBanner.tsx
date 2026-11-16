"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

interface ContactBannerProps {
  onOpenContact: () => void;
}

export default function ContactBanner({ onOpenContact }: ContactBannerProps) {
  return (
    <section className="site-container" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="contact-banner-wrap"
      >
        {/* Left Copy */}
        <div className="banner-copy">
          <h3>Let&apos;s Work Together</h3>
          <p>Have a project or opportunity? Feel free to reach out!</p>
        </div>

        {/* Divider */}
        <div className="banner-divider" aria-hidden="true" />

        {/* Right Actions */}
        <div className="banner-actions">
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-pill btn-primary"
          >
            <span>Contact Me</span>
            <ArrowRight size={14} />
          </button>

          {/* Interactive Paper Plane with Flight Trail */}
          <motion.div
            whileHover={{
              x: 10,
              y: -10,
              rotate: -12,
              scale: 1.15,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ x: 25, y: -25, scale: 1.25 }}
            onClick={onOpenContact}
            className="paper-plane-trail cursor-pointer"
            title="Send Message"
            aria-hidden="true"
          >
            <Send size={24} className="text-[#a77cff] hover:text-white transition-colors" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
