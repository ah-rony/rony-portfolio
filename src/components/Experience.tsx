"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience, personal } = portfolioData;

  return (
    <section className="section-gray" id="experience">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="section-kicker justify-center">
            <span className="section-kicker-dash" aria-hidden="true" />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Hands-on commercial experience developing high-converting Shopify stores and collaborating with international clients.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm grid lg:grid-cols-[1fr_240px] gap-8 items-center"
        >
          {/* Timeline */}
          <div className="space-y-6 border-l-2 border-[#eadff8] pl-6 ml-2">
            {experience.map((item) => (
              <div key={item.id} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#7028f5] ring-4 ring-[#eadff8]" />
                <div className="flex items-center gap-3 text-xs font-bold text-[#7028f5] mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 font-medium">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 m-0">{item.role}</h3>
                <div className="text-xs text-gray-500 font-semibold flex items-center gap-1 my-1">
                  <Building2 size={12} />
                  <span>{item.company}</span>
                </div>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Laptop Illustration Graphic */}
          <div className="hidden lg:flex justify-center">
            <Image
              src={personal.experienceIllustration}
              alt="Shopify Development Setup"
              width={220}
              height={180}
              className="w-full max-w-[200px] h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
