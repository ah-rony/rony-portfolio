"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectsProps {
  onOpenContact: () => void;
}

/**
 * ==============================================================================
 * PROJECTS SECTION COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Highlights 3 key e-commerce developments with clean UI mockup placeholders,
 * zoom-on-hover physics, and external launch indicators.
 */
export default function Projects({ onOpenContact }: ProjectsProps) {
  const projects = [
    {
      title: "E-commerce Store",
      category: "Shopify Theme Development",
      image: "/assets/project-store.png",
      alt: "E-commerce store project preview placeholder",
    },
    {
      title: "Product Bundle Builder",
      category: "Shopify App Development",
      image: "/assets/project-bundle.png",
      alt: "Product bundle builder project preview placeholder",
    },
    {
      title: "Modern Storefront",
      category: "Theme Customization",
      image: "/assets/project-storefront.png",
      alt: "Modern storefront project preview placeholder",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="projects-section container"
      id="projects"
    >
      {/* Intro Column */}
      <div className="section-intro">
        <div className="eyebrow">
          <i aria-hidden="true" />
          My Projects
        </div>
        <h2>Some of My Works</h2>
        <p>Real-world projects showcasing custom Shopify architecture, app integration, and conversion optimization.</p>
        <button
          type="button"
          onClick={onOpenContact}
          className="button button-outline cursor-pointer"
        >
          View All Projects <b>→</b>
        </button>
      </div>

      {/* 3 Projects Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={onOpenContact}
            className="project-card cursor-pointer"
          >
            <div className="project-card-image-wrap">
              <Image
                src={project.image}
                alt={project.alt}
                width={400}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-info">
              <span className="external" aria-hidden="true">
                ↗
              </span>
              <strong>{project.title}</strong>
              <small>{project.category}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
