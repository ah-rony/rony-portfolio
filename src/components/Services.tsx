"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Services() {
  const { services } = portfolioData;

  return (
    <section className="section-white" id="services">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="section-kicker justify-center">
            <span className="section-kicker-dash" aria-hidden="true" />
            <span>Services</span>
          </div>
          <h2 className="section-title">What I Do?</h2>
          <p className="section-subtitle mx-auto">
            Specialized engineering services focused on high-converting Shopify themes, headless commerce architectures, and storefront performance.
          </p>
        </motion.div>

        {/* 2x2 Grid with Signature Purple Left Accent on Hover */}
        <div className="services-cards-grid">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="service-card-picto"
            >
              <div className="service-number">{item.number} // SERVICE</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
