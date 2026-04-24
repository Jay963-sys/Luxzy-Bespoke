"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroRefined() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  // WhatsApp Link for custom orders
  const whatsappLink =
    "https://wa.me/2348029092392?text=Hello%20Luxzy%20Bespoke,%20I%20would%20like%20to%20start%20a%20custom%20order.";

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20 md:pt-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-16 grid grid-cols-12 gap-0 items-center py-16 lg:py-0">
        {/* Text Content Area */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 z-20 mb-16 lg:mb-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-amber-700 font-bold">
                Luxzy Bespoke
              </span>
            </motion.div>

            {/* Client's Requested Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-light tracking-tight leading-[1] text-neutral-900 mb-8 uppercase">
              Crafted for Men <br />
              <span className="font-serif italic font-light lowercase text-amber-700">
                of Presence
              </span>
            </h1>

            <motion.div
              className="h-[0.5px] w-16 bg-neutral-900 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            />

            {/* Client's Requested Subtext */}
            <motion.p
              className="text-sm md:text-base leading-relaxed text-neutral-600 mb-12 max-w-sm font-light uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Luxury Bespoke Footwear <br />& Leather Goods
            </motion.p>

            {/* Client's Requested Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="/collections"
                className="bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors text-center w-full sm:w-auto"
              >
                Shop Collection
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                className="group relative text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-light pb-1 transition-colors duration-300 hover:text-amber-700 w-full sm:w-auto text-center sm:text-left"
              >
                Order Custom
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-neutral-900 group-hover:bg-amber-700 transition-colors duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Image Area */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 relative">
          <div className="relative h-[55vh] lg:h-[80vh] w-full lg:ml-8">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity }}
            >
              {/* Deep brown/black border treatment */}
              <div className="absolute inset-0 bg-[#1a1514] p-3 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/y.jpg" // Big sharp image of best footwear goes here
                    alt="Luxzy Bespoke Craftsmanship"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

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
              <div className="relative w-full h-full bg-[#1a1514] p-4 shadow-[0_20px_60px_rgb(0,0,0,0.3)]">
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

            <motion.div
              className="hidden xl:block absolute top-12 -left-4 w-24 h-24 border border-amber-700/30 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
