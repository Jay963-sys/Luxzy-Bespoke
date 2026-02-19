"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function ThankYouPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-white mx-auto mb-8"
        >
          <Check size={40} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif italic mb-4"
        >
          Payment Successful
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 font-light mb-12"
        >
          Your commission has been received. Please check your email for your
          receipt and next steps regarding your bespoke fitting.
        </motion.p>

        <Link
          href="/collections"
          className="inline-block border-b border-black pb-1 text-[10px] uppercase tracking-[0.3em] font-medium hover:opacity-50 transition-opacity"
        >
          Back to Gallery
        </Link>
      </div>
    </div>
  );
}
