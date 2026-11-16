"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  return (
    <section className="cta-dark-band">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>Have an E-Commerce Project in Mind?</h2>
          <p>
            Whether you need a custom Shopify theme built from scratch, a headless storefront, or speed optimization, let&apos;s build something exceptional together.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-primary"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
