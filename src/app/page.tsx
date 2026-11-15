"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BottomPanels from "@/components/BottomPanels";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/**
 * ==============================================================================
 * MAIN PORTFOLIO PAGE — MD. Ainal Haque Rony
 * ==============================================================================
 * Connects all portfolio components into a unified responsive layout wrapped
 * with ambient gradient shells and interactive modal states.
 */
export default function PortfolioPage() {
  // Global modal state for contact inquiries
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handlers to open and close the contact dialog
  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  return (
    <div className="page-shell">
      {/* 1. Header with branding and navigation */}
      <Header onOpenContact={handleOpenContact} />

      <main>
        {/* 2. Hero banner with title, CTA, floating orbit and portrait */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. About me panel with workspace photo and quick facts */}
        <About />

        {/* 4. Skills section highlighting 7 core technologies */}
        <Skills onOpenContact={handleOpenContact} />

        {/* 5. Projects showcase displaying recent e-commerce works */}
        <Projects onOpenContact={handleOpenContact} />

        {/* 6. Experience timeline detailing career trajectory */}
        <Experience onOpenContact={handleOpenContact} />

        {/* 7. Bottom panels: Academic background (CGPA 3.57) & client testimonial */}
        <BottomPanels />

        {/* 8. Call-to-action banner with animated paper plane */}
        <ContactBanner onOpenContact={handleOpenContact} />
      </main>

      {/* 9. Site footer with copyright and location */}
      <Footer />

      {/* 10. Interactive Contact Modal for free email dispatch */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}
