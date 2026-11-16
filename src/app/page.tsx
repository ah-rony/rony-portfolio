"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CtaBanner from "@/components/CtaBanner";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import BottomPanels from "@/components/BottomPanels";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    // Scroll to contact section or open modal
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleOpenModal = () => setIsContactModalOpen(true);
  const handleCloseModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Sticky Navigation Bar */}
      <Header onOpenContact={handleOpenContact} />

      <main>
        {/* 2. Hero Section: Pastel 3-stop mesh gradient with connected stat band */}
        <Hero onOpenContact={handleOpenModal} />

        {/* 3. Overlapping Floating About Card */}
        <About />

        {/* 4. Work Process: 2x2 Grid with Interactive Flipping Badges */}
        <Process />

        {/* 5. Services: What I Do? with Purple Left-Border Hover Accent */}
        <Services />

        {/* 6. Featured Projects Showcase */}
        <Projects onOpenContact={handleOpenModal} />

        {/* 7. Midnight Slate CTA Banner */}
        <CtaBanner onOpenContact={handleOpenContact} />

        {/* 8. Technical Stack (7 Core Technologies) */}
        <Skills />

        {/* 9. Career Journey Timeline */}
        <Experience />

        {/* 10. Education (CGPA 3.57) & Kind Words Testimonial */}
        <BottomPanels />

        {/* 11. Floating Contact Card with Minimalist Underline Form */}
        <ContactSection />
      </main>

      {/* 12. Deep Slate Footer */}
      <Footer />

      {/* 13. Floating Back to Top Button */}
      <BackToTop />

      {/* 14. Interactive Contact / CV Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
