"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Ruler, Scissors } from "lucide-react";
import FeaturedCollection from "@/components/FeaturedCollection";

export default function Home() {
  // Client's WhatsApp Link
  const whatsappLink =
    "https://wa.me/2348029092392?text=Hello%20Luxzy%20Bespoke,%20I%20would%20like%20to%20start%20a%20custom%20order.";

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION (First Impression) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/y.jpg" // Big sharp image
            alt="Luxzy Bespoke Craftsmanship"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-6 uppercase">
              Crafted for Men <br />
              <span className="font-serif italic lowercase text-amber-500">
                of Presence
              </span>
            </h1>
            <p className="text-neutral-300 max-w-lg mx-auto leading-relaxed font-light mb-10 text-sm md:text-base tracking-wide uppercase">
              Luxury Bespoke Footwear & Leather Goods
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collections"
                className="bg-white text-black px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-neutral-200 transition-colors w-full sm:w-auto"
              >
                Shop Collection
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="bg-transparent border border-white text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
              >
                Order Custom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold">
              The Luxzy Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 leading-snug">
              At Luxzy Bespoke, every piece is handcrafted for men who value{" "}
              <span className="font-serif italic text-amber-700">
                detail, identity,
              </span>{" "}
              and timeless style.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-black mt-4 border-b border-neutral-300 pb-1 transition-colors"
            >
              Discover Our Process <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-neutral-100"
          >
            <Image
              src="/x.jpg" // Placeholder for work in progress
              alt="Bespoke Craftsmanship"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTION (Imported Component we built earlier) */}
      <FeaturedCollection />

      {/* 4. CUSTOM ORDER SECTION */}
      <section className="py-24 md:py-32 bg-[#1a1514] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold block mb-4">
            Tailor Made
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 uppercase">
            The Custom{" "}
            <span className="font-serif italic lowercase text-amber-500">
              Experience
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center text-amber-500 mb-2">
                <span className="font-serif text-2xl italic">1</span>
              </div>
              <h3 className="text-lg uppercase tracking-widest">
                Pick a Design
              </h3>
              <p className="text-sm text-neutral-400 font-light max-w-xs">
                Select from our archives or request a personalized design with
                your own inscription.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center text-amber-500 mb-2">
                <Ruler size={24} />
              </div>
              <h3 className="text-lg uppercase tracking-widest">
                Send Measurements
              </h3>
              <p className="text-sm text-neutral-400 font-light max-w-xs">
                Use our official sizing guide to send your precise dimensions
                via WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center text-amber-500 mb-2">
                <Scissors size={24} />
              </div>
              <h3 className="text-lg uppercase tracking-widest">
                We Craft & Deliver
              </h3>
              <p className="text-sm text-neutral-400 font-light max-w-xs">
                Our master artisans bring your vision to life and deliver it
                directly to your door.
              </p>
            </div>
          </div>

          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-amber-700 text-white px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-amber-600 transition-colors"
          >
            Start Custom Order
          </Link>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#faf9f8]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-serif italic text-neutral-900 leading-relaxed mb-12">
            "Quality is unmatched. Worth every naira. Clean finishing with a
            premium feel."
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold block">
            — Feyisayo O.W., Lagos
          </span>
        </div>
      </section>

      {/* 6. VISUAL GALLERY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold block mb-4">
                The Details
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 uppercase">
                Visual{" "}
                <span className="font-serif italic lowercase text-neutral-500">
                  Archive
                </span>
              </h2>
            </div>
            <Link
              href="https://instagram.com/luxzybespoke"
              target="_blank"
              className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black border-b border-neutral-300 pb-1 mt-6 md:mt-0 transition-colors"
            >
              Follow @luxzybespoke
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 row-span-2 relative aspect-square bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w8.jpeg"
                alt="Lifestyle shot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1 relative aspect-square bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w2.jpeg"
                alt="Leather Texture Close up"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-1 relative aspect-square bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w3.jpeg"
                alt="Work in Progress"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 relative aspect-[2/1] bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w4.jpeg"
                alt="Footwear Lifestyle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 relative aspect-[2/1] bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w5.jpeg"
                alt="Footwear Lifestyle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 relative aspect-[2/1] bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w6.jpeg"
                alt="Footwear Lifestyle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 relative aspect-[2/1] bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w9.jpeg"
                alt="Footwear Lifestyle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 relative aspect-[2/1] bg-neutral-100 overflow-hidden group"
            >
              <Image
                src="/w10.jpeg"
                alt="Footwear Lifestyle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-32 bg-[#faf9f8] border-t border-neutral-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-neutral-900 mb-8 uppercase">
            Step into luxury. <br />
            <span className="font-serif italic lowercase text-amber-700">
              Own your presence.
            </span>
          </h2>
          <Link
            href="/collections"
            className="inline-block bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
