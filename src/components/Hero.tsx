"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroRefined() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20 md:pt-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-16 grid grid-cols-12 gap-0 items-center py-16 lg:py-0">
        {/* Text Content Area */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 z-20 mb-16 lg:mb-0 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Refined Typography Hierarchy */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-light">
                Est. 2024
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] text-neutral-900 mb-12">
              Luxzy
              <br />
              <span className="font-serif italic font-light">Bespoke</span>
              <br />
            </h1>

            {/* Divider with refined animation */}
            <motion.div
              className="h-[0.5px] w-16 bg-neutral-900 mb-10"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            />

            <motion.p
              className="text-sm leading-relaxed text-neutral-600 mb-12 max-w-xs font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Meticulously hand-crafted slides born from Nigerian artistry. Each
              pair tells a story of precision, luxury, and timeless design.
            </motion.p>

            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="/collections"
                className="group relative text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-light pb-1 transition-colors duration-300 hover:text-neutral-500"
              >
                Discover More
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-neutral-900 group-hover:bg-neutral-500 transition-colors duration-300" />
              </Link>

              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 mb-1">
                  Pre-order
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-light">
                  Limited Edition
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Image Area */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 relative">
          <div className="relative h-[55vh] lg:h-[80vh] w-full lg:ml-8">
            {/* Main landscape image with refined border */}
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity }}
            >
              <div className="absolute inset-0 bg-black p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/2.jpg"
                    alt="Bespoke Craftsmanship"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating portrait with enhanced shadow and border treatment */}
            <motion.div
              style={{ y }}
              className="hidden lg:block absolute -right-8 xl:-right-12 -bottom-16 w-[280px] xl:w-[320px] h-[400px] xl:h-[460px] z-30"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative w-full h-full bg-black p-4 shadow-[0_20px_60px_rgb(0,0,0,0.15)]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/1.jpg"
                    alt="The Bespoke Shoe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Subtle accent element */}
            <motion.div
              className="hidden xl:block absolute top-12 -left-4 w-24 h-24 border border-neutral-200 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* Location indicator - bottom right */}
      <motion.div
        className="hidden lg:block absolute bottom-12 right-12 xl:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="text-right">
          <span className="block text-[8px] uppercase tracking-[0.4em] text-neutral-400 mb-1">
            Handcrafted in
          </span>
          <span className="block text-[11px] uppercase tracking-[0.3em] text-neutral-600 font-light">
            Lagos, Nigeria
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute bottom-10 left-16 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center lg:items-start gap-3"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 lg:-rotate-90 lg:origin-left">
            Scroll
          </span>

          <div className="relative w-[0.5px] h-14 bg-neutral-200 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 w-full h-6 bg-neutral-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
