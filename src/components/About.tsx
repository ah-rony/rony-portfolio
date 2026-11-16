"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code, ShoppingCart, BarChart3 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section className="site-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overlapping-about-card"
      >
        {/* 1. Workspace Media & Experience Badge */}
        <div className="about-media-box">
          <Image
            src={personal.workspaceImage}
            alt="Workspace with Shopify Setup"
            width={440}
            height={260}
            className="about-media-img"
          />
          <div className="about-media-badge">
            <div className="w-8 h-8 rounded-lg bg-[#edd8ff80] text-[#7028f5] grid place-items-center">
              <BarChart3 size={18} />
            </div>
            <div>
              <strong className="block text-sm font-extrabold text-gray-900 leading-none">
                {personal.experienceYears}
              </strong>
              <small className="text-[11px] text-gray-500">{personal.experienceLabel}</small>
            </div>
          </div>
        </div>

        {/* 2. Narrative Bio */}
        <div className="about-body-col">
          <div className="section-kicker">
            <span className="section-kicker-dash" aria-hidden="true" />
            <span>About Me</span>
          </div>
          <h3>{personal.aboutHeading}</h3>
          <p>{personal.aboutText}</p>
        </div>

        {/* 3. Credentials Fact List */}
        <div className="about-facts-col" aria-label="Key Facts">
          <div className="fact-row">
            <div className="fact-icon-pill">
              <MapPin size={16} />
            </div>
            <span>{personal.location}</span>
          </div>
          <div className="fact-row">
            <div className="fact-icon-pill">
              <GraduationCap size={16} />
            </div>
            <span>{personal.degreeShort}</span>
          </div>
          <div className="fact-row">
            <div className="fact-icon-pill">
              <Briefcase size={16} />
            </div>
            <span>Shopify Developer</span>
          </div>
          <div className="fact-row">
            <div className="fact-icon-pill">
              <Code size={16} />
            </div>
            <span>Frontend Enthusiast</span>
          </div>
          <div className="fact-row">
            <div className="fact-icon-pill">
              <ShoppingCart size={16} />
            </div>
            <span>E-Commerce Focused</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
