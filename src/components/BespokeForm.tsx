"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";

export default function BespokeForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { cartItems } = useCartStore();
  const currentItem = cartItems[0];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedProduct = {
    name: "The Lagos Series Slide",
    price: 85000,
    image: "/1.jpg",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    address: "",
    city: "Lagos",
    customization: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email.includes("@")) return;

    setIsSearching(true);
    try {
      const res = await fetch("/api/customer/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.exists) {
        setFormData({
          ...formData,
          name: data.name || formData.name,
          customization: `Reviewing previous measurements: ${JSON.stringify(data.measurements)}.`,
        });
      }
    } catch (error) {
      console.error("Lookup failed");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();

    // Calculate price from currentItem or default
    const amount = currentItem?.price || selectedProduct.price;

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          amount: amount,
          metadata: {
            ...formData,
            productName: currentItem?.name || selectedProduct.name,
          },
        }),
      });

      const data = await res.json();
      if (data.status && data.data.authorization_url) {
        // Send user to Paystack's secure page
        window.location.href = data.data.authorization_url;
      }
    } catch (error) {
      console.error("Payment initiation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-900 text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Order Summary */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 mb-6 block">
              Your Selection
            </span>
            <div className="relative aspect-[4/5] w-full mb-8 border border-neutral-800 p-4">
              <Image
                src={currentItem?.image || selectedProduct.image}
                alt={currentItem?.name || selectedProduct.name}
                fill
                className="object-cover p-2"
              />
            </div>
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-2xl font-serif italic">
                {currentItem?.name || selectedProduct.name}
              </h3>
              <span className="text-lg font-light">
                ₦
                {currentItem?.price.toLocaleString() ||
                  selectedProduct.price.toLocaleString()}
              </span>
            </div>
            <div className="h-[0.5px] w-full bg-neutral-800 mb-8" />
            <p className="text-xs text-neutral-400 leading-relaxed tracking-wider uppercase">
              Each pair is hand-crafted to your specific dimensions in our Lagos
              atelier.
            </p>
          </motion.div>

          {/* Right Side: Delivery & Bespoke Details */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                    placeholder="Full Name"
                    required
                  />
                  <label className="absolute left-0 text-[10px] uppercase tracking-[0.3em] top-4 text-neutral-600 peer-focus:-top-4 peer-focus:text-neutral-500 transition-all">
                    Full Name
                  </label>
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    onBlur={handleEmailBlur}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                    placeholder="Email"
                    required
                  />
                  <label className="absolute left-0 text-[10px] uppercase tracking-[0.3em] top-4 text-neutral-600 peer-focus:-top-4 peer-focus:text-neutral-500 transition-all">
                    Email Address
                  </label>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="relative">
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Delivery Address"
                  required
                />
                <label className="absolute left-0 text-[10px] uppercase tracking-[0.3em] top-4 text-neutral-600 peer-focus:-top-4 peer-focus:text-neutral-500 transition-all">
                  Delivery Address
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Size */}
                <select
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-white focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-neutral-900">
                    Select Size
                  </option>
                  {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map(
                    (size) => (
                      <option
                        key={size}
                        value={size}
                        className="bg-neutral-900"
                      >
                        EU {size}
                      </option>
                    ),
                  )}
                </select>
                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                    placeholder="Phone"
                    required
                  />
                  <label className="absolute left-0 text-[10px] uppercase tracking-[0.3em] top-4 text-neutral-600 peer-focus:-top-4 peer-focus:text-neutral-500 transition-all">
                    Phone Number
                  </label>
                </div>
              </div>

              <textarea
                value={formData.customization}
                onChange={(e) =>
                  setFormData({ ...formData, customization: e.target.value })
                }
                rows={3}
                className="w-full bg-transparent border-b border-neutral-700 py-4 text-white focus:outline-none resize-none"
                placeholder="Special requirements (Optional)"
              />

              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative w-full py-6 border border-white bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden transition-all duration-500 hover:bg-black hover:text-white"
              >
                {isSubmitting
                  ? "Generating Secure Link..."
                  : "Proceed to Secure Payment"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
