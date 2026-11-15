"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ==============================================================================
 * CONTACT MODAL COMPONENT (Light Blue & Deep Slate Theme)
 * ==============================================================================
 * Interactive glassmorphic modal connected directly to the /api/contact route.
 * Features:
 * - Real-time validation and feedback
 * - Confetti celebration on successful message dispatch
 * - Honeypot anti-spam protection
 * - ESC key and outside-click dismiss
 */
export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Form input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot field for bot detection (must remain empty for human users)
  const [honeypot, setHoneypot] = useState("");

  // Submission status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle contact form submission
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
          hp: honeypot, // Honeypot trap
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your message has been sent successfully.",
        });

        // Trigger celebratory confetti effect in Light Blue & Cyan tones
        try {
          confetti({
            particleCount: 85,
            spread: 75,
            origin: { y: 0.6 },
            colors: ["#0284c7", "#0ea5e9", "#38bdf8", "#bae6fd", "#10b981"],
          });
        } catch {
          // Ignore if canvas-confetti is not supported
        }

        // Clear form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        // Auto-close modal after 2.5 seconds on success
        setTimeout(() => {
          onClose();
          setStatusMessage({ type: null, text: "" });
        }, 2500);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#bae6fd] overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] p-6 text-white relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              >
                <X size={18} />
              </button>
              <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 mb-2 tracking-wide uppercase">
                Get In Touch
              </span>
              <h3 className="text-xl font-extrabold m-0 text-white">Let&apos;s Build Something Great</h3>
              <p className="text-xs text-white/90 mt-1 mb-0 leading-relaxed">
                Have a Shopify project, theme customization, or digital opportunity? Send a message directly below!
              </p>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Invisible Honeypot anti-spam field */}
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
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
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

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                    Your Name <span className="text-[#0284c7]">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3 text-[#94a3b8]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#bae6fd]/50 transition-all text-[#0f172a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                    Your Email <span className="text-[#0284c7]">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-3 text-[#94a3b8]" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#bae6fd]/50 transition-all text-[#0f172a]"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1.5">Subject</label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-3 top-3 text-[#94a3b8]" />
                  <input
                    type="text"
                    placeholder="e.g. Shopify Store Setup or Custom App"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#bae6fd]/50 transition-all text-[#0f172a]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                  Message <span className="text-[#0284c7]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#bae6fd]/50 transition-all text-[#0f172a] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-[#64748b]">
                  ⚡ 100% Free instant delivery
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-bold text-xs hover:brightness-105 active:scale-95 transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
