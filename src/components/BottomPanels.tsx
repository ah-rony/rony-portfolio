"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Quote } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function BottomPanels() {
  const { personal, testimonial } = portfolioData;

  return (
    <section className="section-white">
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. Academic Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex items-center justify-between gap-6"
          >
            <div>
              <div className="section-kicker">
                <span className="section-kicker-dash" aria-hidden="true" />
                <span>Education</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">My Academic Background</h3>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                <strong className="text-gray-900">{personal.degree}</strong>
                <br />
                {personal.university}
              </p>
            </div>

            {/* CGPA Badge */}
            <div className="bg-[#eadff8] border border-purple-200 rounded-xl p-4 text-center shrink-0 min-w-[90px]">
              <div className="text-[#7028f5] flex justify-center mb-1">
                <GraduationCap size={28} />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">CGPA</span>
              <strong className="text-2xl font-extrabold text-gray-900 leading-tight block">{personal.cgpa}</strong>
            </div>
          </motion.div>

          {/* 2. Client Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative"
          >
            <Quote className="absolute top-6 right-6 text-purple-200 w-10 h-10" aria-hidden="true" />
            <div className="section-kicker">
              <span className="section-kicker-dash" aria-hidden="true" />
              <span>What People Say</span>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Kind Words</h3>
            <p className="text-sm italic text-gray-600 mb-6 leading-relaxed">
              “{testimonial.quote}”
            </p>

            <div className="flex items-center gap-3">
              <Image
                src={testimonial.avatar}
                alt={testimonial.clientName}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div>
                <strong className="block text-sm font-bold text-gray-900 leading-none">
                  {testimonial.clientName}
                </strong>
                <small className="text-xs text-gray-500">{testimonial.clientRole}</small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
