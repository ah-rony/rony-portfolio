"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ProjectsProps {
  onOpenContact: () => void;
}

export default function Projects({ onOpenContact }: ProjectsProps) {
  const { projects } = portfolioData;

  return (
    <section className="section-gray" id="projects">
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
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of production-grade Shopify storefronts and interactive web applications engineered with clean code and modern frameworks.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="projects-showcase-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={onOpenContact}
              className="portfolio-card-item"
            >
              <div className="portfolio-thumb-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={220}
                  className="portfolio-thumb-img"
                />
              </div>

              <div className="portfolio-info-body">
                <span className="portfolio-kicker">{project.category}</span>
                <h3 className="portfolio-title-text">{project.title}</h3>
                <p className="portfolio-desc-text">{project.description}</p>
                <div className="portfolio-action-link">
                  <span>View Details</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
