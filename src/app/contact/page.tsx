"use client";

import { motion } from "framer-motion";
import { Clock, Phone, Instagram } from "lucide-react";
import { sendInquiry } from "@/actions/sendInquiry";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const response = await sendInquiry(formData);

    if (response?.error) {
      setStatusMessage({ type: "error", text: response.error });
    } else if (response?.success) {
      setStatusMessage({
        type: "success",
        text: "Your inquiry has been received. Our studio will reach out to you shortly.",
      });
      formRef.current?.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-neutral-900 mb-6">
                The Studio
              </h1>
              <p className="text-neutral-500 max-w-md leading-relaxed font-light">
                Our atelier is where traditional Lagos craftsmanship meets
                modern bespoke design. We operate as a private workshop,
                dedicating our time to crafting pieces of presence.
              </p>
            </div>

            {/* Contact Info Stack */}
            <div className="flex flex-col gap-10">
              {/* Hours */}
              <div className="flex gap-4">
                <Clock
                  strokeWidth={1}
                  className="text-neutral-400 w-5 h-5 flex-shrink-0"
                />
                <div>
                  <h3 className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-1">
                    Atelier Hours
                  </h3>
                  <p className="text-sm text-neutral-900 font-light">
                    Mon — Sat: 9am - 7pm
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone
                  strokeWidth={1}
                  className="text-neutral-400 w-5 h-5 flex-shrink-0"
                />
                <div>
                  <h3 className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-1">
                    Direct Line
                  </h3>
                  <a
                    href="tel:+23408029092392"
                    className="text-sm text-neutral-900 font-light hover:text-neutral-500 transition-colors"
                  >
                    +234 (0) 802 909 2392
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <Instagram
                  strokeWidth={1}
                  className="text-neutral-400 w-5 h-5 flex-shrink-0"
                />
                <div>
                  <h3 className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-1">
                    Social
                  </h3>
                  <a
                    href="https://www.instagram.com/luxzyfootwear?igsh=MXdxcjI4cWRoZWczaw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 font-light hover:text-neutral-500 transition-colors"
                  >
                    @luxzyfootwear
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-50 p-8 md:p-12 lg:sticky lg:top-32"
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-12">
              General Inquiry
            </h2>

            {/* Status Messages */}
            {statusMessage.text && (
              <div
                className={`p-4 mb-8 text-xs font-light tracking-wide border ${
                  statusMessage.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Form */}
            <form ref={formRef} action={handleAction} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-widest text-neutral-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-transparent border-b border-neutral-200 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-widest text-neutral-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-transparent border-b border-neutral-200 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[8px] uppercase tracking-widest text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-neutral-200 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[8px] uppercase tracking-widest text-neutral-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-transparent border-b border-neutral-200 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-[10px] uppercase tracking-[0.4em] px-12 py-5 transition-all w-full md:w-auto ${
                  isSubmitting
                    ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
