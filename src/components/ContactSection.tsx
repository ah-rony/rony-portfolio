"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          hp: honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your message has been sent successfully.",
        });

        try {
          confetti({
            particleCount: 85,
            spread: 75,
            origin: { y: 0.6 },
            colors: ["#7028f5", "#8e54ff", "#eadff8", "#10b981"],
          });
        } catch {
          // Ignore if confetti not supported
        }

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to deliver message. Please check inputs.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please try reaching out directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="site-container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="floating-contact-card"
      >
        {/* Left Side: Contact Information */}
        <div className="contact-left-col">
          <div className="section-kicker">
            <span className="section-kicker-dash" aria-hidden="true" />
            <span>Get In Touch</span>
          </div>
          <h2>Let&apos;s Build Something Great</h2>
          <p>
            Have a new Shopify store, custom theme project, or e-commerce idea? Feel free to reach out and let&apos;s discuss how we can bring it to life.
          </p>

          <div className="contact-detail-row">
            <div className="contact-detail-icon">
              <Mail size={16} />
            </div>
            <span>{personal.email}</span>
          </div>

          <div className="contact-detail-row">
            <div className="contact-detail-icon">
              <MapPin size={16} />
            </div>
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Right Side: Minimalist Underline Form (Picto / Khurram Style) */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field */}
            <input
              type="text"
              name="company_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Status Alert */}
            {statusMessage.type && (
              <div
                className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
                  statusMessage.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                ) : (
                  <AlertCircle size={16} className="text-red-600 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div>
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input-underline"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Your Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input-underline"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Project Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-input-underline"
              />
            </div>

            <div>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your project, timeline, or requirements... *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input-underline resize-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-gray-400">⚡ 100% Free instant delivery</span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
